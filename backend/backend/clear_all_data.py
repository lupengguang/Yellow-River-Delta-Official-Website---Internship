from sqlalchemy import create_engine, text
from config import DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME

def clear_all_data():
    # 创建数据库连接
    engine = create_engine(f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}")
    
    with engine.connect() as conn:
        # 设置自动提交
        conn.execution_options(isolation_level="AUTOCOMMIT")
        
        # 清空表数据（按外键依赖顺序）
        tables_to_clear = [
            "sys_content",           # 内容表
            "sys_catalog",           # 目录表
            "sys_official_wechat",   # 官方公众号
            "sys_carbon_wechat",     # 碳基智能公众号
            "sys_project",           # 项目成果
            "sys_literature"         # 相关文献
        ]
        
        for table in tables_to_clear:
            conn.execute(text(f"DELETE FROM {table}"))
            conn.execute(text(f"ALTER SEQUENCE {table}_id_seq RESTART WITH 1"))
            print(f"已清空表: {table}")
    
    engine.dispose()
    print("\n所有数据已清空！")

if __name__ == "__main__":
    clear_all_data()
