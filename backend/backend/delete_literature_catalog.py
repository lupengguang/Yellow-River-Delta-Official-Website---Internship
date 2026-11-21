from sqlalchemy import create_engine, text
from config import DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME

def delete_literature_catalog():
    engine = create_engine(f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}")
    
    with engine.connect() as conn:
        # 开始事务
        trans = conn.begin()
        
        try:
            # 删除ID为12的目录（文献进展内容）
            conn.execute(text("DELETE FROM sys_catalog WHERE id = 12"))
            
            print("Success delete literature catalog")
            
            # 提交事务
            trans.commit()
            
        except Exception as e:
            # 回滚事务
            trans.rollback()
            print(f"Delete failed: {e}")
    
    engine.dispose()

if __name__ == "__main__":
    delete_literature_catalog()
