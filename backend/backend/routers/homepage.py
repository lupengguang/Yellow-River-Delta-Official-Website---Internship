from fastapi import APIRouter, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Notification, ProjectProgress, ResearchResult

router = APIRouter(tags=["homepage"])

# 获取数据库会话
def get_db_session():
    return next(get_db())

# ==================== 通知新闻 API ====================

@router.get("/notifications")
def get_notifications(skip: int = 0, limit: int = 10):
    db = get_db_session()
    notifications = db.query(Notification).order_by(Notification.sort.asc(), Notification.create_time.desc()).offset(skip).limit(limit).all()
    return {"code": 200, "message": "success", "data": notifications}

@router.get("/notifications/{id}")
def get_notification(id: int):
    db = get_db_session()
    notification = db.query(Notification).filter(Notification.id == id).first()
    if not notification:
        raise HTTPException(status_code=404, detail="通知新闻不存在")
    return {"code": 200, "message": "success", "data": notification}

@router.post("/notifications")
def create_notification(title: str, content: str, sort: int = 0):
    db = get_db_session()
    db_notification = Notification(
        title=title,
        content=content,
        sort=sort
    )
    db.add(db_notification)
    db.commit()
    db.refresh(db_notification)
    return {"code": 200, "message": "创建成功", "data": db_notification}

@router.put("/notifications/{id}")
def update_notification(id: int, title: str = None, content: str = None, sort: int = None):
    db = get_db_session()
    db_notification = db.query(Notification).filter(Notification.id == id).first()
    if not db_notification:
        raise HTTPException(status_code=404, detail="通知新闻不存在")
    if title:
        db_notification.title = title
    if content:
        db_notification.content = content
    if sort is not None:
        db_notification.sort = sort
    db.commit()
    db.refresh(db_notification)
    return {"code": 200, "message": "更新成功", "data": db_notification}

@router.delete("/notifications/{id}")
def delete_notification(id: int):
    db = get_db_session()
    notification = db.query(Notification).filter(Notification.id == id).first()
    if not notification:
        raise HTTPException(status_code=404, detail="通知新闻不存在")
    db.delete(notification)
    db.commit()
    return {"code": 200, "message": "删除成功"}

# ==================== 项目进展 API ====================

@router.get("/project-progress")
def get_project_progress(skip: int = 0, limit: int = 10):
    db = get_db_session()
    progress_list = db.query(ProjectProgress).order_by(ProjectProgress.sort.asc(), ProjectProgress.create_time.desc()).offset(skip).limit(limit).all()
    return {"code": 200, "message": "success", "data": progress_list}

@router.get("/project-progress/{id}")
def get_project_progress_item(id: int):
    db = get_db_session()
    progress = db.query(ProjectProgress).filter(ProjectProgress.id == id).first()
    if not progress:
        raise HTTPException(status_code=404, detail="项目进展不存在")
    return {"code": 200, "message": "success", "data": progress}

@router.post("/project-progress")
def create_project_progress(title: str, content: str = None, image_url: str = None, sort: int = 0):
    db = get_db_session()
    db_progress = ProjectProgress(
        title=title,
        content=content,
        image_url=image_url,
        sort=sort
    )
    db.add(db_progress)
    db.commit()
    db.refresh(db_progress)
    return {"code": 200, "message": "创建成功", "data": db_progress}

@router.put("/project-progress/{id}")
def update_project_progress(id: int, title: str = None, content: str = None, image_url: str = None, sort: int = None):
    db = get_db_session()
    db_progress = db.query(ProjectProgress).filter(ProjectProgress.id == id).first()
    if not db_progress:
        raise HTTPException(status_code=404, detail="项目进展不存在")
    if title:
        db_progress.title = title
    if content:
        db_progress.content = content
    if image_url:
        db_progress.image_url = image_url
    if sort is not None:
        db_progress.sort = sort
    db.commit()
    db.refresh(db_progress)
    return {"code": 200, "message": "更新成功", "data": db_progress}

@router.delete("/project-progress/{id}")
def delete_project_progress(id: int):
    db = get_db_session()
    progress = db.query(ProjectProgress).filter(ProjectProgress.id == id).first()
    if not progress:
        raise HTTPException(status_code=404, detail="项目进展不存在")
    db.delete(progress)
    db.commit()
    return {"code": 200, "message": "删除成功"}

# ==================== 最新研究成果 API ====================

@router.get("/research-results")
def get_research_results(skip: int = 0, limit: int = 10):
    db = get_db_session()
    results = db.query(ResearchResult).order_by(ResearchResult.sort.asc(), ResearchResult.create_time.desc()).offset(skip).limit(limit).all()
    return {"code": 200, "message": "success", "data": results}

@router.get("/research-results/{id}")
def get_research_result(id: int):
    db = get_db_session()
    result = db.query(ResearchResult).filter(ResearchResult.id == id).first()
    if not result:
        raise HTTPException(status_code=404, detail="研究成果不存在")
    return {"code": 200, "message": "success", "data": result}

@router.post("/research-results")
def create_research_result(project_name: str, journal: str = None, volume: str = None, doi: str = None, official_link: str = None, sort: int = 0):
    db = get_db_session()
    db_result = ResearchResult(
        project_name=project_name,
        journal=journal,
        volume=volume,
        doi=doi,
        official_link=official_link,
        sort=sort
    )
    db.add(db_result)
    db.commit()
    db.refresh(db_result)
    return {"code": 200, "message": "创建成功", "data": db_result}

@router.put("/research-results/{id}")
def update_research_result(id: int, project_name: str = None, journal: str = None, volume: str = None, doi: str = None, official_link: str = None, sort: int = None):
    db = get_db_session()
    db_result = db.query(ResearchResult).filter(ResearchResult.id == id).first()
    if not db_result:
        raise HTTPException(status_code=404, detail="研究成果不存在")
    if project_name:
        db_result.project_name = project_name
    if journal:
        db_result.journal = journal
    if volume:
        db_result.volume = volume
    if doi:
        db_result.doi = doi
    if official_link:
        db_result.official_link = official_link
    if sort is not None:
        db_result.sort = sort
    db.commit()
    db.refresh(db_result)
    return {"code": 200, "message": "更新成功", "data": db_result}

@router.delete("/research-results/{id}")
def delete_research_result(id: int):
    db = get_db_session()
    result = db.query(ResearchResult).filter(ResearchResult.id == id).first()
    if not result:
        raise HTTPException(status_code=404, detail="研究成果不存在")
    db.delete(result)
    db.commit()
    return {"code": 200, "message": "删除成功"}
