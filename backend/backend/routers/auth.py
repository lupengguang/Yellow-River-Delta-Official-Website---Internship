from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from datetime import timedelta

from database import get_db
from models import User
from schemas import TokenResponse, UserRegister, UserResponse
from auth import verify_password, create_access_token, get_password_hash, get_current_user
from config import ACCESS_TOKEN_EXPIRE_MINUTES
from fastapi.security import OAuth2PasswordRequestForm

router = APIRouter()

@router.post("/login", response_model=TokenResponse, summary="用户/管理员通用登录")
def login(request: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == request.username).first()
    if not user or not verify_password(request.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="账号或密码错误"
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username, "role": user.role},
        expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/init-admin", summary="初始化管理员账号")
def init_admin(db: Session = Depends(get_db)):
    admin = db.query(User).filter(User.username == "admin").first()
    if admin:
        return {"code": 200, "message": "管理员账号已存在，无需重复初始化"}
    hashed_password = get_password_hash("admin123")
    new_admin = User(
        username="admin",
        password=hashed_password,
        real_name="系统管理员",
        role="admin"
    )
    db.add(new_admin)
    db.commit()
    db.refresh(new_admin)
    return {"code": 200, "message": "管理员账号初始化成功。请以账号 admin 密码 admin123 登录！"}

@router.post("/register", summary="普通用户注册")
def register_user(request: UserRegister, db: Session = Depends(get_db)):
    exist_user = db.query(User).filter(User.username == request.username).first()
    if exist_user:
        raise HTTPException(status_code=400, detail="该用户名已被占用")
    
    hashed_password = get_password_hash(request.password)
    new_user = User(
        username=request.username,
        password=hashed_password,
        real_name=request.real_name,
        role="user"  # 默认分配普通用户权限
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"code": 200, "message": "注册成功，请前往登录"}

@router.get("/me", response_model=UserResponse, summary="获取当前登录用户信息")
def get_current_user_profile(current_user: User = Depends(get_current_user)):
    return current_user
