from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from config import DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME

def create_database_if_not_exists():
    engine = create_engine(f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/postgres")
    conn = engine.connect()
    conn.execution_options(isolation_level="AUTOCOMMIT")

    result = conn.execute(text(f"SELECT 1 FROM pg_database WHERE datname = '{DB_NAME}'"))
    exists = result.fetchone()

    if not exists:
        conn.execute(text(f"CREATE DATABASE {DB_NAME}"))
        print(f"数据库 '{DB_NAME}' 创建成功！")
    else:
        print(f"数据库 '{DB_NAME}' 已存在。")

    conn.close()
    engine.dispose()

def create_tables():
    from database import Base, engine

    Base.metadata.create_all(bind=engine)
    print("所有表创建成功！")

    from models import User, Catalog, Content, OfficialWechat, CarbonWechat, Project, Literature

    tables = [
        "sys_user",
        "sys_catalog",
        "sys_content",
        "sys_official_wechat",
        "sys_carbon_wechat",
        "sys_project",
        "sys_literature"
    ]

    print("\n已创建的表：")
    for table in tables:
        print(f"  - {table}")

if __name__ == "__main__":
    print("开始初始化数据库...")
    print("=" * 50)

    create_database_if_not_exists()
    print("-" * 50)
    create_tables()

    print("=" * 50)
    print("数据库初始化完成！")