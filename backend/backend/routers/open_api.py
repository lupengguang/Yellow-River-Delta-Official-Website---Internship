from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Content, Catalog
from schemas import OpenApiUpdateRequest
from auth import get_admin_user

router = APIRouter()

@router.put("/update-content", summary="系统运维级 OpenApi 结构体透传更新", dependencies=[Depends(get_admin_user)])
def open_api_update_content(request: OpenApiUpdateRequest, db: Session = Depends(get_db)):
    catalog = db.query(Catalog).filter(Catalog.id == request.catalog_id).first()
    if not catalog: raise HTTPException(status_code=400, detail="无对应目录挂载点")
    
    content = db.query(Content).filter(Content.catalog_id == request.catalog_id).first()
    if not content:
        if not request.content or not request.source:
            raise HTTPException(status_code=400, detail="作为新增内容时，必带富文本体与来源体")
        content = Content(
            catalog_id=request.catalog_id,
            year=request.year,
            source=request.source,
            is_time_series=False,
            content=request.content
        )
        db.add(content)
        db.commit()
        db.refresh(content)
    else:
        if request.year is not None: content.year = request.year
        if request.source: content.source = request.source
        if request.content: content.content = request.content
        db.commit()
    
    return {"code": 200, "message": "结构化注入执行完毕，前端侧已同步分发"}

@router.get("/catalog-tree", summary="全局检索透传用接口 (OpenAPI)", dependencies=[Depends(get_admin_user)])
def open_api_get_catalog_tree(db: Session = Depends(get_db)):
    from routers.catalog import get_catalog_tree
    tree = get_catalog_tree(db)
    return {"code": 200, "data": tree}
