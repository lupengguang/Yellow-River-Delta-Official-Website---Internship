from fastapi import APIRouter, UploadFile, File, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Project
import os

router = APIRouter()

# 依赖注入获取数据库会话
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 确保图片存储目录存在
IMAGE_DIR = os.path.join('static', 'project_images')
if not os.path.exists(IMAGE_DIR):
    os.makedirs(IMAGE_DIR)

@router.get("/projects")
def get_projects(db: Session = Depends(get_db)):
    """获取项目成果列表"""
    projects = db.query(Project).order_by(Project.sort).all()
    
    result = []
    for project in projects:
        result.append({
            "id": project.id,
            "title": project.title,
            "project_type": project.project_type,
            "project_code": project.project_code,
            "funding": project.funding,
            "start_date": project.start_date.isoformat() if project.start_date else None,
            "end_date": project.end_date.isoformat() if project.end_date else None,
            "summary": project.summary,
            "content": project.content,
            "image_url": project.image_url,
            "sort": project.sort,
            "create_time": project.create_time.isoformat() if project.create_time else None,
            "update_time": project.update_time.isoformat() if project.update_time else None
        })
    
    return {
        "code": 200,
        "message": "获取项目成果成功",
        "data": result
    }

@router.get("/projects/{project_id}")
def get_project(project_id: int, db: Session = Depends(get_db)):
    """获取单个项目成果"""
    project = db.query(Project).filter(Project.id == project_id).first()
    
    if not project:
        raise HTTPException(status_code=404, detail="项目不存在")
    
    return {
        "code": 200,
        "message": "获取项目成功",
        "data": {
            "id": project.id,
            "title": project.title,
            "project_type": project.project_type,
            "project_code": project.project_code,
            "funding": project.funding,
            "start_date": project.start_date.isoformat() if project.start_date else None,
            "end_date": project.end_date.isoformat() if project.end_date else None,
            "summary": project.summary,
            "content": project.content,
            "image_url": project.image_url,
            "sort": project.sort,
            "create_time": project.create_time.isoformat() if project.create_time else None,
            "update_time": project.update_time.isoformat() if project.update_time else None
        }
    }

@router.post("/projects")
def create_project(
    title: str,
    project_type: str = "national",
    project_code: str = None,
    funding: str = None,
    start_date: str = None,
    end_date: str = None,
    summary: str = None,
    content: str = None,
    image_url: str = None,
    db: Session = Depends(get_db)
):
    """创建项目成果"""
    from datetime import datetime
    
    try:
        max_sort = db.query(Project.sort).order_by(Project.sort.desc()).first()
        sort = (max_sort[0] + 1) if max_sort else 0
        
        new_project = Project(
            title=title,
            project_type=project_type,
            project_code=project_code,
            funding=funding,
            start_date=datetime.strptime(start_date, '%Y-%m-%d').date() if start_date else None,
            end_date=datetime.strptime(end_date, '%Y-%m-%d').date() if end_date else None,
            summary=summary,
            content=content,
            image_url=image_url,
            sort=sort
        )
        
        db.add(new_project)
        db.commit()
        db.refresh(new_project)
        
        return {
            "code": 200,
            "message": "创建项目成功",
            "data": {
                "id": new_project.id,
                "title": new_project.title,
                "project_type": new_project.project_type,
                "project_code": new_project.project_code,
                "funding": new_project.funding,
                "sort": new_project.sort
            }
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"创建失败: {str(e)}")

@router.put("/projects/{project_id}")
def update_project(
    project_id: int,
    title: str = None,
    project_type: str = None,
    project_code: str = None,
    funding: str = None,
    start_date: str = None,
    end_date: str = None,
    summary: str = None,
    content: str = None,
    image_url: str = None,
    sort: int = None,
    db: Session = Depends(get_db)
):
    """更新项目成果"""
    from datetime import datetime
    
    project = db.query(Project).filter(Project.id == project_id).first()
    
    if not project:
        raise HTTPException(status_code=404, detail="项目不存在")
    
    try:
        if title:
            project.title = title
        if project_type:
            project.project_type = project_type
        if project_code:
            project.project_code = project_code
        if funding:
            project.funding = funding
        if start_date:
            project.start_date = datetime.strptime(start_date, '%Y-%m-%d').date()
        if end_date:
            project.end_date = datetime.strptime(end_date, '%Y-%m-%d').date()
        if summary:
            project.summary = summary
        if content:
            project.content = content
        if image_url:
            project.image_url = image_url
        if sort is not None:
            project.sort = sort
        
        db.commit()
        db.refresh(project)
        
        return {
            "code": 200,
            "message": "更新项目成功",
            "data": {
                "id": project.id,
                "title": project.title
            }
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"更新失败: {str(e)}")

@router.delete("/projects/{project_id}")
def delete_project(project_id: int, db: Session = Depends(get_db)):
    """删除项目成果"""
    project = db.query(Project).filter(Project.id == project_id).first()
    
    if not project:
        raise HTTPException(status_code=404, detail="项目不存在")
    
    try:
        db.delete(project)
        db.commit()
        
        return {
            "code": 200,
            "message": "删除项目成功"
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"删除失败: {str(e)}")

@router.post("/upload-image")
async def upload_project_image(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    """上传项目封面图片"""
    try:
        file_path = os.path.join(IMAGE_DIR, file.filename)
        
        with open(file_path, "wb") as buffer:
            content = await file.read()
            buffer.write(content)
        
        return {
            "code": 200,
            "message": "图片上传成功",
            "data": {
                "image_url": f"/static/project_images/{file.filename}"
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"上传失败: {str(e)}")
