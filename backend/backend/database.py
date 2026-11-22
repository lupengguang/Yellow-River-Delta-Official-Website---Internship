from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import DATABASE_URL

# 数据库连接URL
SQLALCHEMY_DATABASE_URL = DATABASE_URL

# SQLite 需要关闭线程检查，其他数据库保持默认
connect_args = {"check_same_thread": False} if SQLALCHEMY_DATABASE_URL.startswith("sqlite") else {}

# 创建数据库引擎
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args=connect_args)

# 创建会话
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 基类，所有模型都继承这个类
Base = declarative_base()

# 数据库依赖项，每个接口都会用到
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
