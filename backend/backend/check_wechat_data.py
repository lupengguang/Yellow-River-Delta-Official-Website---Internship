from sqlalchemy import create_engine, text
from config import DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME

def check_wechat_data():
    engine = create_engine(f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}")
    
    with engine.connect() as conn:
        # 获取官方公众号数据
        print("=== 官方公众号文章 ===")
        result = conn.execute(text("SELECT id, title FROM sys_official_wechat ORDER BY id LIMIT 10"))
        official_wechat = result.fetchall()
        for item in official_wechat:
            print(f"ID: {item[0]}, Title: {item[1]}")
        
        # 获取碳基智能公众号数据
        print("\n=== 碳基智能公众号文章 ===")
        result = conn.execute(text("SELECT id, title FROM sys_carbon_wechat ORDER BY id LIMIT 10"))
        carbon_wechat = result.fetchall()
        for item in carbon_wechat:
            print(f"ID: {item[0]}, Title: {item[1]}")
    
    engine.dispose()

if __name__ == "__main__":
    check_wechat_data()
