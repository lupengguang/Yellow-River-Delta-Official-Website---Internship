from sqlalchemy import create_engine, text
from config import DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME

def reset_all_ids():
    # 创建数据库连接
    engine = create_engine(f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}")
    
    with engine.connect() as conn:
        # 设置自动提交
        conn.execution_options(isolation_level="AUTOCOMMIT")
        
        # 首先禁用所有外键约束
        print("禁用外键约束...")
        conn.execute(text("ALTER TABLE sys_content DROP CONSTRAINT IF EXISTS sys_content_catalog_id_fkey"))
        
        # 需要重置ID的表
        tables = [
            "sys_literature",
            "sys_project", 
            "sys_carbon_wechat",
            "sys_official_wechat",
            "sys_content",
            "sys_catalog"
        ]
        
        # 先重置 sys_catalog
        print("正在重置 sys_catalog 的ID...")
        result = conn.execute(text("SELECT id FROM sys_catalog ORDER BY id"))
        rows = result.fetchall()
        
        if rows:
            old_new_map = {}
            new_id = 1
            
            for row in rows:
                old_id = row[0]
                old_new_map[old_id] = new_id
                new_id += 1
            
            # 更新自身ID
            conn.execute(text("ALTER TABLE sys_catalog DISABLE TRIGGER ALL"))
            for old_id, new_id_val in old_new_map.items():
                conn.execute(text("UPDATE sys_catalog SET id = :new_id WHERE id = :old_id"),
                            {"old_id": old_id, "new_id": new_id_val})
            conn.execute(text("ALTER TABLE sys_catalog ENABLE TRIGGER ALL"))
            conn.execute(text(f"ALTER SEQUENCE sys_catalog_id_seq RESTART WITH {new_id}"))
            
            print(f"  sys_catalog ID重置完成，共 {len(old_new_map)} 条记录")
            
            # 更新 sys_content 的 catalog_id 引用
            print("更新 sys_content 的 catalog_id 外键引用...")
            for old_id, new_id_val in old_new_map.items():
                conn.execute(text("UPDATE sys_content SET catalog_id = :new_id WHERE catalog_id = :old_id"),
                            {"old_id": old_id, "new_id": new_id_val})
            print("  外键引用更新完成")
        
        # 重置其他表
        other_tables = ["sys_literature", "sys_project", "sys_carbon_wechat", "sys_official_wechat", "sys_content"]
        for table in other_tables:
            print(f"正在重置 {table} 的ID...")
            result = conn.execute(text(f"SELECT id FROM {table} ORDER BY id"))
            rows = result.fetchall()
            
            if not rows:
                print(f"  {table} 表为空，跳过")
                conn.execute(text(f"ALTER SEQUENCE {table}_id_seq RESTART WITH 1"))
                continue
            
            old_new_map = {}
            new_id = 1
            
            for row in rows:
                old_id = row[0]
                old_new_map[old_id] = new_id
                new_id += 1
            
            conn.execute(text(f"ALTER TABLE {table} DISABLE TRIGGER ALL"))
            for old_id, new_id_val in old_new_map.items():
                conn.execute(text(f"UPDATE {table} SET id = :new_id WHERE id = :old_id"),
                            {"old_id": old_id, "new_id": new_id_val})
            conn.execute(text(f"ALTER TABLE {table} ENABLE TRIGGER ALL"))
            conn.execute(text(f"ALTER SEQUENCE {table}_id_seq RESTART WITH {new_id}"))
            
            print(f"  {table} ID重置完成，共 {len(old_new_map)} 条记录")
        
        # 重新添加外键约束
        print("重新添加外键约束...")
        conn.execute(text("ALTER TABLE sys_content ADD CONSTRAINT sys_content_catalog_id_fkey FOREIGN KEY (catalog_id) REFERENCES sys_catalog(id) ON DELETE CASCADE"))
    
    engine.dispose()
    print("\n所有表的ID已成功重置！")

if __name__ == "__main__":
    reset_all_ids()
