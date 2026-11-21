#!/usr/bin/env python3
"""
同步目录项与内容记录
确保每个目录项都有对应的Content记录
"""

import sys
import os

# 添加项目根目录到Python路径
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from database import SessionLocal
from models import Catalog, Content

def sync_content():
    """同步所有目录项的Content记录"""
    db = SessionLocal()
    
    try:
        # 获取所有目录项
        catalogs = db.query(Catalog).all()
        
        for catalog in catalogs:
            # 检查是否已有对应的Content记录
            existing_content = db.query(Content).filter(Content.catalog_id == catalog.id).first()
            
            if not existing_content:
                # 创建新的Content记录
                new_content = Content(
                    catalog_id=catalog.id,
                    title=catalog.name,
                    year="",
                    source="",
                    is_time_series=False,
                    content=f"<h1>{catalog.name}</h1><p>请编辑此内容</p>"
                )
                db.add(new_content)
                print(f"为目录 '{catalog.name}' (ID: {catalog.id}) 创建了Content记录")
            else:
                print(f"目录 '{catalog.name}' (ID: {catalog.id}) 已有Content记录")
        
        # 提交更改
        db.commit()
        print("\n同步完成！")
        
    except Exception as e:
        print(f"同步过程中出错: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    sync_content()
