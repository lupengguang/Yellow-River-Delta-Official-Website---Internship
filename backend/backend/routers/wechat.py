from fastapi import APIRouter, UploadFile, File, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import OfficialWechat, CarbonWechat
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
IMAGE_DIR = os.path.join('static', 'wechat_images')
if not os.path.exists(IMAGE_DIR):
    os.makedirs(IMAGE_DIR)

# ========== 官方公众号接口 ==========

@router.get("/official/articles")
def get_official_articles(db: Session = Depends(get_db)):
    """获取官方公众号文章列表"""
    articles = db.query(OfficialWechat).order_by(OfficialWechat.sort).all()
    
    result = []
    for article in articles:
        result.append({
            "id": article.id,
            "title": article.title,
            "summary": article.summary,
            "content": article.content,
            "image_url": article.image_url,
            "sort": article.sort,
            "create_time": article.create_time.isoformat() if article.create_time else None,
            "update_time": article.update_time.isoformat() if article.update_time else None
        })
    
    return {
        "code": 200,
        "message": "获取官方公众号文章成功",
        "data": result
    }

@router.get("/official/articles/{article_id}")
def get_official_article(article_id: int, db: Session = Depends(get_db)):
    """获取单篇官方公众号文章"""
    article = db.query(OfficialWechat).filter(OfficialWechat.id == article_id).first()
    
    if not article:
        raise HTTPException(status_code=404, detail="文章不存在")
    
    return {
        "code": 200,
        "message": "获取文章成功",
        "data": {
            "id": article.id,
            "title": article.title,
            "summary": article.summary,
            "content": article.content,
            "image_url": article.image_url,
            "sort": article.sort,
            "create_time": article.create_time.isoformat() if article.create_time else None,
            "update_time": article.update_time.isoformat() if article.update_time else None
        }
    }

@router.post("/official/articles")
def create_official_article(
    title: str,
    summary: str = None,
    content: str = None,
    image_url: str = None,
    db: Session = Depends(get_db)
):
    """创建官方公众号文章"""
    try:
        max_sort = db.query(OfficialWechat.sort).order_by(OfficialWechat.sort.desc()).first()
        sort = (max_sort[0] + 1) if max_sort else 0
        
        new_article = OfficialWechat(
            title=title,
            summary=summary,
            content=content,
            image_url=image_url,
            sort=sort
        )
        
        db.add(new_article)
        db.commit()
        db.refresh(new_article)
        
        return {
            "code": 200,
            "message": "创建文章成功",
            "data": {
                "id": new_article.id,
                "title": new_article.title,
                "summary": new_article.summary,
                "content": new_article.content,
                "image_url": new_article.image_url,
                "sort": new_article.sort
            }
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"创建失败: {str(e)}")

@router.put("/official/articles/{article_id}")
def update_official_article(
    article_id: int,
    title: str = None,
    summary: str = None,
    content: str = None,
    image_url: str = None,
    sort: int = None,
    db: Session = Depends(get_db)
):
    """更新官方公众号文章"""
    article = db.query(OfficialWechat).filter(OfficialWechat.id == article_id).first()
    
    if not article:
        raise HTTPException(status_code=404, detail="文章不存在")
    
    try:
        if title:
            article.title = title
        if summary:
            article.summary = summary
        if content:
            article.content = content
        if image_url:
            article.image_url = image_url
        if sort is not None:
            article.sort = sort
        
        db.commit()
        db.refresh(article)
        
        return {
            "code": 200,
            "message": "更新文章成功",
            "data": {
                "id": article.id,
                "title": article.title,
                "summary": article.summary,
                "content": article.content,
                "image_url": article.image_url,
                "sort": article.sort
            }
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"更新失败: {str(e)}")

@router.delete("/official/articles/{article_id}")
def delete_official_article(article_id: int, db: Session = Depends(get_db)):
    """删除官方公众号文章"""
    article = db.query(OfficialWechat).filter(OfficialWechat.id == article_id).first()
    
    if not article:
        raise HTTPException(status_code=404, detail="文章不存在")
    
    try:
        db.delete(article)
        db.commit()
        
        return {
            "code": 200,
            "message": "删除文章成功"
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"删除失败: {str(e)}")

# ========== 碳基智能公众号接口 ==========

@router.get("/carbon/articles")
def get_carbon_articles(db: Session = Depends(get_db)):
    """获取碳基智能公众号文章列表"""
    articles = db.query(CarbonWechat).order_by(CarbonWechat.sort).all()
    
    result = []
    for article in articles:
        result.append({
            "id": article.id,
            "title": article.title,
            "summary": article.summary,
            "content": article.content,
            "image_url": article.image_url,
            "sort": article.sort,
            "create_time": article.create_time.isoformat() if article.create_time else None,
            "update_time": article.update_time.isoformat() if article.update_time else None
        })
    
    return {
        "code": 200,
        "message": "获取碳基智能公众号文章成功",
        "data": result
    }

@router.get("/carbon/articles/{article_id}")
def get_carbon_article(article_id: int, db: Session = Depends(get_db)):
    """获取单篇碳基智能公众号文章"""
    article = db.query(CarbonWechat).filter(CarbonWechat.id == article_id).first()
    
    if not article:
        raise HTTPException(status_code=404, detail="文章不存在")
    
    return {
        "code": 200,
        "message": "获取文章成功",
        "data": {
            "id": article.id,
            "title": article.title,
            "summary": article.summary,
            "content": article.content,
            "image_url": article.image_url,
            "sort": article.sort,
            "create_time": article.create_time.isoformat() if article.create_time else None,
            "update_time": article.update_time.isoformat() if article.update_time else None
        }
    }

@router.post("/carbon/articles")
def create_carbon_article(
    title: str,
    summary: str = None,
    content: str = None,
    image_url: str = None,
    db: Session = Depends(get_db)
):
    """创建碳基智能公众号文章"""
    try:
        max_sort = db.query(CarbonWechat.sort).order_by(CarbonWechat.sort.desc()).first()
        sort = (max_sort[0] + 1) if max_sort else 0
        
        new_article = CarbonWechat(
            title=title,
            summary=summary,
            content=content,
            image_url=image_url,
            sort=sort
        )
        
        db.add(new_article)
        db.commit()
        db.refresh(new_article)
        
        return {
            "code": 200,
            "message": "创建文章成功",
            "data": {
                "id": new_article.id,
                "title": new_article.title,
                "summary": new_article.summary,
                "content": new_article.content,
                "image_url": new_article.image_url,
                "sort": new_article.sort
            }
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"创建失败: {str(e)}")

@router.put("/carbon/articles/{article_id}")
def update_carbon_article(
    article_id: int,
    title: str = None,
    summary: str = None,
    content: str = None,
    image_url: str = None,
    sort: int = None,
    db: Session = Depends(get_db)
):
    """更新碳基智能公众号文章"""
    article = db.query(CarbonWechat).filter(CarbonWechat.id == article_id).first()
    
    if not article:
        raise HTTPException(status_code=404, detail="文章不存在")
    
    try:
        if title:
            article.title = title
        if summary:
            article.summary = summary
        if content:
            article.content = content
        if image_url:
            article.image_url = image_url
        if sort is not None:
            article.sort = sort
        
        db.commit()
        db.refresh(article)
        
        return {
            "code": 200,
            "message": "更新文章成功",
            "data": {
                "id": article.id,
                "title": article.title,
                "summary": article.summary,
                "content": article.content,
                "image_url": article.image_url,
                "sort": article.sort
            }
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"更新失败: {str(e)}")

@router.delete("/carbon/articles/{article_id}")
def delete_carbon_article(article_id: int, db: Session = Depends(get_db)):
    """删除碳基智能公众号文章"""
    article = db.query(CarbonWechat).filter(CarbonWechat.id == article_id).first()
    
    if not article:
        raise HTTPException(status_code=404, detail="文章不存在")
    
    try:
        db.delete(article)
        db.commit()
        
        return {
            "code": 200,
            "message": "删除文章成功"
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"删除失败: {str(e)}")

# ========== 通用接口 ==========

@router.post("/upload-image")
async def upload_wechat_image(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    """上传公众号文章封面图片"""
    try:
        file_path = os.path.join(IMAGE_DIR, file.filename)
        
        with open(file_path, "wb") as buffer:
            content = await file.read()
            buffer.write(content)
        
        return {
            "code": 200,
            "message": "图片上传成功",
            "data": {
                "image_url": f"/static/wechat_images/{file.filename}"
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"上传失败: {str(e)}")
