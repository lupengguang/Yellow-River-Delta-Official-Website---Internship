from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, Date, ForeignKey
from sqlalchemy.orm import relationship, backref
from sqlalchemy.sql import func
from database import Base

class User(Base):
    __tablename__ = "sys_user"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    username = Column(String(50), unique=True, nullable=False, comment="账号")
    password = Column(String(100), nullable=False, comment="加密后的密码")
    real_name = Column(String(50), comment="真实姓名")
    is_active = Column(Boolean, default=True, comment="是否启用")
    role = Column(String(20), default="admin", comment="角色：admin管理员，viewer浏览者")
    create_time = Column(DateTime, default=func.now(), comment="创建时间")
    update_time = Column(DateTime, default=func.now(), onupdate=func.now(), comment="更新时间")

class Catalog(Base):
    __tablename__ = "sys_catalog"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(100), nullable=False, comment="目录名称")
    parent_id = Column(Integer, ForeignKey("sys_catalog.id", ondelete="CASCADE"), nullable=True, comment="父目录ID")
    sort = Column(Integer, default=0, comment="排序号")
    create_time = Column(DateTime, default=func.now(), comment="创建时间")
    update_time = Column(DateTime, default=func.now(), onupdate=func.now(), comment="更新时间")
    children = relationship("Catalog", backref=backref("parent", remote_side=[id]), cascade="all, delete-orphan")
    content = relationship("Content", backref="catalog", cascade="all, delete-orphan", uselist=False)

class Content(Base):
    __tablename__ = "sys_content"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    catalog_id = Column(Integer, ForeignKey("sys_catalog.id", ondelete="CASCADE"), nullable=False, comment="绑定的目录ID", unique=True)
    title = Column(String(200), nullable=False, comment="标题")
    year = Column(String(10), nullable=True, comment="数据年份")
    source = Column(String(200), nullable=False, comment="数据出处")
    is_time_series = Column(Boolean, default=False, comment="是否为时间序列数据")
    content = Column(Text, nullable=False, comment="富文本说明内容")
    create_time = Column(DateTime, default=func.now(), comment="创建时间")
    update_time = Column(DateTime, default=func.now(), onupdate=func.now(), comment="更新时间")



class OfficialWechat(Base):
    __tablename__ = "sys_official_wechat"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(200), nullable=False, comment="文章标题")
    summary = Column(String(500), nullable=True, comment="文章摘要")
    content = Column(Text, nullable=True, comment="文章内容")
    image_url = Column(String(500), nullable=True, comment="封面图片URL")
    sort = Column(Integer, default=0, comment="排序号")
    create_time = Column(DateTime, default=func.now(), comment="创建时间")
    update_time = Column(DateTime, default=func.now(), onupdate=func.now(), comment="更新时间")

class CarbonWechat(Base):
    __tablename__ = "sys_carbon_wechat"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(200), nullable=False, comment="文章标题")
    summary = Column(String(500), nullable=True, comment="文章摘要")
    content = Column(Text, nullable=True, comment="文章内容")
    image_url = Column(String(500), nullable=True, comment="封面图片URL")
    sort = Column(Integer, default=0, comment="排序号")
    create_time = Column(DateTime, default=func.now(), comment="创建时间")
    update_time = Column(DateTime, default=func.now(), onupdate=func.now(), comment="更新时间")

class Project(Base):
    __tablename__ = "sys_project"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(200), nullable=False, comment="项目标题")
    project_type = Column(String(50), nullable=False, default="national", comment="项目类型：national-国家级, provincial-省部级, horizontal-横向")
    project_code = Column(String(100), nullable=True, comment="项目编号")
    funding = Column(String(100), nullable=True, comment="资助金额")
    start_date = Column(Date, nullable=True, comment="开始时间")
    end_date = Column(Date, nullable=True, comment="结束时间")
    summary = Column(String(500), nullable=True, comment="项目摘要")
    content = Column(Text, nullable=True, comment="项目详情")
    image_url = Column(String(500), nullable=True, comment="封面图片URL")
    sort = Column(Integer, default=0, comment="排序号")
    create_time = Column(DateTime, default=func.now(), comment="创建时间")
    update_time = Column(DateTime, default=func.now(), onupdate=func.now(), comment="更新时间")

class Literature(Base):
    __tablename__ = "sys_literature"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(500), nullable=False, comment="文献标题")
    journal = Column(String(200), nullable=True, comment="期刊名称")
    volume = Column(String(50), nullable=True, comment="卷期")
    doi = Column(String(200), nullable=True, comment="DOI编号")
    official_link = Column(String(500), nullable=True, comment="官方链接")
    authors = Column(String(500), nullable=True, comment="作者")
    publish_time = Column(String(50), nullable=True, comment="发表时间")
    literature_type = Column(String(50), nullable=False, default="paper", comment="文献类型：paper-学术论文, monograph-专著")
    sort = Column(Integer, default=0, comment="排序号")
    create_time = Column(DateTime, default=func.now(), comment="创建时间")
    update_time = Column(DateTime, default=func.now(), onupdate=func.now(), comment="更新时间")

# 通知新闻模型
class Notification(Base):
    __tablename__ = "sys_notification"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(200), nullable=False, comment="标题")
    content = Column(Text, nullable=False, comment="内容")
    sort = Column(Integer, default=0, comment="排序号")
    create_time = Column(DateTime, default=func.now(), comment="创建时间")
    update_time = Column(DateTime, default=func.now(), onupdate=func.now(), comment="更新时间")

# 项目进展模型
class ProjectProgress(Base):
    __tablename__ = "sys_project_progress"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(200), nullable=False, comment="标题")
    content = Column(Text, nullable=True, comment="文字内容")
    image_url = Column(String(500), name="image_urls", nullable=True, comment="图片URL")
    sort = Column(Integer, default=0, comment="排序号")
    create_time = Column(DateTime, default=func.now(), comment="创建时间")
    update_time = Column(DateTime, default=func.now(), onupdate=func.now(), comment="更新时间")

# 最新研究成果模型
class ResearchResult(Base):
    __tablename__ = "sys_research_result"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    project_name = Column(String(200), nullable=False, comment="项目名称")
    journal = Column(String(200), nullable=True, comment="期刊")
    volume = Column(String(50), nullable=True, comment="卷期")
    doi = Column(String(200), nullable=True, comment="DOI")
    official_link = Column(String(500), nullable=True, comment="官方链接")
    sort = Column(Integer, default=0, comment="排序号")
    create_time = Column(DateTime, default=func.now(), comment="创建时间")
    update_time = Column(DateTime, default=func.now(), onupdate=func.now(), comment="更新时间")


