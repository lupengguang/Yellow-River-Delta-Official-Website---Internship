from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from database import get_db
from models import Content, Catalog
from schemas import ContentCreate, ContentUpdate
from auth import get_admin_user

router = APIRouter()



@router.get("/list", summary="后台获取内容管理长列表", dependencies=[Depends(get_admin_user)])
def get_content_list(db: Session = Depends(get_db)):
    contents = db.query(Content).order_by(Content.update_time.desc()).all()
    result = []
    for content in contents:
        catalog = db.query(Catalog).filter(Catalog.id == content.catalog_id).first()
        result.append({
            "id": content.id,
            "catalogId": content.catalog_id,
            "catalogName": catalog.name if catalog else "未知目录",
            "year": content.year,
            "source": content.source,
            "isTimeSeries": content.is_time_series,
            "content": content.content,
            "createTime": content.create_time,
            "updateTime": content.update_time
        })
    return {"code": 200, "data": result}

@router.get("/catalog/{catalog_id}", summary="前端视图：根据目录ID渲染详情")
def get_content_by_catalog(catalog_id: int, db: Session = Depends(get_db)):
    catalog = db.query(Catalog).filter(Catalog.id == catalog_id).first()
    if not catalog:
        raise HTTPException(status_code=404, detail="目录不存在")
    content = db.query(Content).filter(Content.catalog_id == catalog_id).first()
    if not content:
        return {"code": 200, "data": {}}
    return {"code": 200, "data": {
        "id": content.id,
        "catalogId": content.catalog_id,
        "catalogName": catalog.name,
        "year": content.year,
        "source": content.source,
        "isTimeSeries": content.is_time_series,
        "content": content.content,
        "createTime": content.create_time,
        "updateTime": content.update_time
    }}

@router.post("", summary="发布新内容", dependencies=[Depends(get_admin_user)])
def create_content(request: ContentCreate, db: Session = Depends(get_db)):
    catalog = db.query(Catalog).filter(Catalog.id == request.catalog_id).first()
    if not catalog:
        raise HTTPException(status_code=400, detail="绑定的目录不存在")
    exist_content = db.query(Content).filter(Content.catalog_id == request.catalog_id).first()
    if exist_content:
        raise HTTPException(status_code=400, detail="树状结构的该叶子节点已绑定实体内容！")
    
    new_content = Content(
        catalog_id=request.catalog_id,
        year=request.year,
        source=request.source,
        is_time_series=request.is_time_series,
        content=request.content
    )
    db.add(new_content)
    db.commit()
    db.refresh(new_content)
    
    return {"code": 200, "message": "发布成功"}

@router.put("/{content_id}", summary="编辑内容", dependencies=[Depends(get_admin_user)])
def update_content(content_id: int, request: ContentUpdate, db: Session = Depends(get_db)):
    content = db.query(Content).filter(Content.id == content_id).first()
    if not content:
        raise HTTPException(status_code=404, detail="内容记录丢失")
    if request.catalog_id:
        exist_content = db.query(Content).filter(Content.catalog_id == request.catalog_id, Content.id != content_id).first()
        if exist_content:
            raise HTTPException(status_code=400, detail="该目录已被其余内容占用绑定")
        content.catalog_id = request.catalog_id
    if request.year is not None: content.year = request.year
    if request.source: content.source = request.source
    if request.is_time_series is not None: content.is_time_series = request.is_time_series
    if request.content: content.content = request.content
    db.commit()
    
    return {"code": 200, "message": "更新成功"}

@router.delete("/{content_id}", summary="删除内容", dependencies=[Depends(get_admin_user)])
def delete_content(content_id: int, db: Session = Depends(get_db)):
    content = db.query(Content).filter(Content.id == content_id).first()
    if not content: raise HTTPException(status_code=404, detail="记录不存在")
    db.delete(content)
    db.commit()
    return {"code": 200, "message": "该关联内容已彻底清理销毁"}
