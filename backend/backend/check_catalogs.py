from sqlalchemy import create_engine, text
from config import DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME

def check_catalogs():
    engine = create_engine(f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}")
    
    with engine.connect() as conn:
        # 获取所有目录
        result = conn.execute(text("SELECT id, name, parent_id FROM sys_catalog ORDER BY parent_id NULLS FIRST, sort"))
        catalogs = result.fetchall()
        
        print("=== 当前所有目录 ===")
        for cat in catalogs:
            indent = "  " if cat[2] else ""
            print(f"{indent}ID: {cat[0]}, Name: {cat[1]}, ParentID: {cat[2]}")
        
        # 检查是否有"文献进展内容"
        print("\n=== 检查文献进展内容 ===")
        for cat in catalogs:
            if "文献" in cat[1]:
                print(f"找到: ID={cat[0]}, Name={cat[1]}")
    
    engine.dispose()

if __name__ == "__main__":
    check_catalogs()
