from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME

# 数据库连接URL
SQLALCHEMY_DATABASE_URL = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

# 创建数据库引擎
engine = create_engine(SQLALCHEMY_DATABASE_URL)

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
