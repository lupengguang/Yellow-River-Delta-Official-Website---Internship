from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Literature

router = APIRouter()

# 依赖注入获取数据库会话
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/literatures")
def get_literatures(literature_type: str = None, db: Session = Depends(get_db)):
    """获取文献列表"""
    query = db.query(Literature)
    
    if literature_type:
        query = query.filter(Literature.literature_type == literature_type)
    
    literatures = query.order_by(Literature.sort).all()
    
    result = []
    for literature in literatures:
        result.append({
            "id": literature.id,
            "title": literature.title,
            "journal": literature.journal,
            "volume": literature.volume,
            "doi": literature.doi,
            "official_link": literature.official_link,
            "authors": literature.authors,
            "publish_time": literature.publish_time,
            "literature_type": literature.literature_type,
            "sort": literature.sort,
            "create_time": literature.create_time.isoformat() if literature.create_time else None,
            "update_time": literature.update_time.isoformat() if literature.update_time else None
        })
    
    return {
        "code": 200,
        "message": "获取文献成功",
        "data": result
    }

@router.get("/literatures/{literature_id}")
def get_literature(literature_id: int, db: Session = Depends(get_db)):
    """获取单个文献"""
    literature = db.query(Literature).filter(Literature.id == literature_id).first()
    
    if not literature:
        raise HTTPException(status_code=404, detail="文献不存在")
    
    return {
        "code": 200,
        "message": "获取文献成功",
        "data": {
            "id": literature.id,
            "title": literature.title,
            "journal": literature.journal,
            "volume": literature.volume,
            "doi": literature.doi,
            "official_link": literature.official_link,
            "authors": literature.authors,
            "publish_time": literature.publish_time,
            "literature_type": literature.literature_type,
            "sort": literature.sort,
            "create_time": literature.create_time.isoformat() if literature.create_time else None,
            "update_time": literature.update_time.isoformat() if literature.update_time else None
        }
    }

@router.post("/literatures")
def create_literature(
    title: str,
    journal: str = None,
    volume: str = None,
    doi: str = None,
    official_link: str = None,
    authors: str = None,
    publish_time: str = None,
    literature_type: str = "paper",
    db: Session = Depends(get_db)
):
    """创建文献"""
    try:
        max_sort = db.query(Literature.sort).order_by(Literature.sort.desc()).first()
        sort = (max_sort[0] + 1) if max_sort else 0
        
        new_literature = Literature(
            title=title,
            journal=journal,
            volume=volume,
            doi=doi,
            official_link=official_link,
            authors=authors,
            publish_time=publish_time,
            literature_type=literature_type,
            sort=sort
        )
        
        db.add(new_literature)
        db.commit()
        db.refresh(new_literature)
        
        return {
            "code": 200,
            "message": "创建文献成功",
            "data": {
                "id": new_literature.id,
                "title": new_literature.title,
                "sort": new_literature.sort
            }
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"创建失败: {str(e)}")

@router.put("/literatures/{literature_id}")
def update_literature(
    literature_id: int,
    title: str = None,
    journal: str = None,
    volume: str = None,
    doi: str = None,
    official_link: str = None,
    authors: str = None,
    publish_time: str = None,
    literature_type: str = None,
    sort: int = None,
    db: Session = Depends(get_db)
):
    """更新文献"""
    literature = db.query(Literature).filter(Literature.id == literature_id).first()
    
    if not literature:
        raise HTTPException(status_code=404, detail="文献不存在")
    
    try:
        if title:
            literature.title = title
        if journal:
            literature.journal = journal
        if volume:
            literature.volume = volume
        if doi:
            literature.doi = doi
        if official_link:
            literature.official_link = official_link
        if authors:
            literature.authors = authors
        if publish_time:
            literature.publish_time = publish_time
        if literature_type:
            literature.literature_type = literature_type
        if sort is not None:
            literature.sort = sort
        
        db.commit()
        db.refresh(literature)
        
        return {
            "code": 200,
            "message": "更新文献成功",
            "data": {
                "id": literature.id,
                "title": literature.title
            }
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"更新失败: {str(e)}")

@router.delete("/literatures/{literature_id}")
def delete_literature(literature_id: int, db: Session = Depends(get_db)):
    """删除文献"""
    literature = db.query(Literature).filter(Literature.id == literature_id).first()
    
    if not literature:
        raise HTTPException(status_code=404, detail="文献不存在")
    
    try:
        db.delete(literature)
        db.commit()
        
        return {
            "code": 200,
            "message": "删除文献成功"
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"删除失败: {str(e)}")
