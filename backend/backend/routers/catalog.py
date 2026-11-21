from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from database import get_db
from models import Catalog
from schemas import CatalogCreate, CatalogUpdate, CatalogResponse, CatalogSortRequest
from auth import get_admin_user

router = APIRouter()

def get_catalog_tree(db: Session, parent_id: int = None):
    catalogs = db.query(Catalog).filter(Catalog.parent_id == parent_id).order_by(Catalog.sort).all()
    result = []
    for catalog in catalogs:
        catalog_dict = CatalogResponse.model_validate(catalog).model_dump()
        catalog_dict["children"] = get_catalog_tree(db, catalog.id)
        result.append(catalog_dict)
    return result

@router.get("/tree", summary="获取完整目录树")
def get_catalog_tree_api(db: Session = Depends(get_db)):
    return {"code": 200, "data": get_catalog_tree(db)}

@router.get("/admin/tree", summary="获取完整目录树(管理端)", dependencies=[Depends(get_admin_user)])
def get_admin_catalog_tree_api(db: Session = Depends(get_db)):
    return {"code": 200, "data": get_catalog_tree(db)}

@router.post("", summary="新增目录", dependencies=[Depends(get_admin_user)])
def create_catalog(request: CatalogCreate, db: Session = Depends(get_db)):
    # 适配前端或Swagger默认传递 0 代表根目录的习惯
    real_parent = request.parent_id if request.parent_id != 0 else None
    
    if real_parent is not None:
        parent = db.query(Catalog).filter(Catalog.id == real_parent).first()
        if not parent:
            raise HTTPException(status_code=400, detail="父目录不存在")
    new_catalog = Catalog(
        name=request.name,
        parent_id=real_parent,
        sort=request.sort
    )
    db.add(new_catalog)
    db.commit()
    return {"code": 200, "message": "新增成功"}

@router.put("/{catalog_id}", summary="编辑目录", dependencies=[Depends(get_admin_user)])
def update_catalog(catalog_id: int, request: CatalogUpdate, db: Session = Depends(get_db)):
    catalog = db.query(Catalog).filter(Catalog.id == catalog_id).first()
    if not catalog:
        raise HTTPException(status_code=404, detail="目录不存在")
    if request.name:
        catalog.name = request.name
    if request.sort is not None:
        catalog.sort = request.sort
    db.commit()
    return {"code": 200, "message": "更新成功"}

@router.delete("/{catalog_id}", summary="删除目录", dependencies=[Depends(get_admin_user)])
def delete_catalog(catalog_id: int, db: Session = Depends(get_db)):
    catalog = db.query(Catalog).filter(Catalog.id == catalog_id).first()
    if not catalog:
        raise HTTPException(status_code=404, detail="目录不存在")
    children = db.query(Catalog).filter(Catalog.parent_id == catalog_id).count()
    if children > 0:
        raise HTTPException(status_code=400, detail="该目录下有子级分类内容，不可删除")
    db.delete(catalog)
    db.commit()
    return {"code": 200, "message": "删除成功"}

@router.post("/sort", summary="目录拖拽排序更新", dependencies=[Depends(get_admin_user)])
def sort_catalog(request: CatalogSortRequest, db: Session = Depends(get_db)):
    dragging_catalog = db.query(Catalog).filter(Catalog.id == request.dragging_id).first()
    target_catalog = db.query(Catalog).filter(Catalog.id == request.target_id).first()
    if not dragging_catalog or not target_catalog:
        raise HTTPException(status_code=400, detail="目录不存在")
    
    if request.drop_type == "before":
        dragging_catalog.parent_id = target_catalog.parent_id
        dragging_catalog.sort = target_catalog.sort - 1
    elif request.drop_type == "after":
        dragging_catalog.parent_id = target_catalog.parent_id
        dragging_catalog.sort = target_catalog.sort + 1
    elif request.drop_type == "inner":
        dragging_catalog.parent_id = target_catalog.id
        dragging_catalog.sort = 0
    
    db.commit()
    return {"code": 200, "message": "排序应用成功"}
