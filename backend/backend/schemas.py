from pydantic import BaseModel, ConfigDict
from typing import Optional, List
from datetime import datetime

# ========== 登录相关 ==========
class LoginRequest(BaseModel):
    username: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"

class UserRegister(BaseModel):
    username: str
    password: str
    real_name: Optional[str] = None

class UserResponse(BaseModel):
    id: int
    username: str
    real_name: Optional[str] = None
    role: str
    is_active: bool
    create_time: datetime

    model_config = ConfigDict(from_attributes=True)

# ========== 目录相关 ==========
class CatalogCreate(BaseModel):
    name: str
    sort: int = 0
    parent_id: Optional[int] = None

class CatalogUpdate(BaseModel):
    name: Optional[str] = None
    sort: Optional[int] = None

class CatalogResponse(BaseModel):
    id: int
    name: str
    parent_id: Optional[int] = None
    sort: int
    create_time: Optional[datetime] = None
    update_time: Optional[datetime] = None
    children: Optional[List["CatalogResponse"]] = []

    model_config = ConfigDict(from_attributes=True)

class CatalogSortRequest(BaseModel):
    dragging_id: int
    target_id: int
    drop_type: str



# ========== 内容相关 ==========
class ContentCreate(BaseModel):
    catalog_id: int
    year: Optional[str] = None
    source: str
    is_time_series: bool = False
    content: str

class ContentUpdate(BaseModel):
    catalog_id: Optional[int] = None
    year: Optional[str] = None
    source: Optional[str] = None
    is_time_series: Optional[bool] = None
    content: Optional[str] = None

class ContentResponse(BaseModel):
    id: int
    catalog_id: int
    catalog_name: str
    year: Optional[str] = None
    source: str
    is_time_series: bool
    content: str
    create_time: datetime
    update_time: datetime

    model_config = ConfigDict(from_attributes=True)

# ========== 开放API相关 ==========
class OpenApiUpdateRequest(BaseModel):
    catalog_id: int
    year: Optional[str] = None
    source: Optional[str] = None
    content: Optional[str] = None

# ========== 通知新闻相关 ==========
class NotificationCreate(BaseModel):
    title: str
    content: str
    sort: Optional[int] = 0

class NotificationResponse(BaseModel):
    id: int
    title: str
    content: str
    sort: int
    create_time: datetime
    update_time: datetime

    model_config = ConfigDict(from_attributes=True)

# ========== 项目进展相关 ==========
class ProjectProgressCreate(BaseModel):
    title: str
    content: Optional[str] = None
    image_url: Optional[str] = None
    sort: Optional[int] = 0

class ProjectProgressResponse(BaseModel):
    id: int
    title: str
    content: Optional[str] = None
    image_url: Optional[str] = None
    sort: int
    create_time: datetime
    update_time: datetime

    model_config = ConfigDict(from_attributes=True)

# ========== 最新研究成果相关 ==========
class ResearchResultCreate(BaseModel):
    project_name: str
    journal: Optional[str] = None
    volume: Optional[str] = None
    doi: Optional[str] = None
    official_link: Optional[str] = None
    sort: Optional[int] = 0

class ResearchResultResponse(BaseModel):
    id: int
    project_name: str
    journal: Optional[str] = None
    volume: Optional[str] = None
    doi: Optional[str] = None
    official_link: Optional[str] = None
    sort: int
    create_time: datetime
    update_time: datetime

    model_config = ConfigDict(from_attributes=True)
