import json
import sys
import os
from pathlib import Path
from sqlalchemy.orm import Session

# 将项目根目录加入模块搜索路径，确保可以导入 backend 包中的模块
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from database import SessionLocal, engine, Base
from models import Catalog

# 确保表已创建
Base.metadata.create_all(bind=engine)

# 种子文件路径（与此脚本同级的 catalog_seed.json）
SEED_FILE = Path(__file__).resolve().parent / "catalog_seed.json"

def _create_node(db: Session, name: str, parent_id: int | None = None) -> int:
    """在数据库中新建一条目录记录，返回其自增 id"""
    node = Catalog(name=name, parent_id=parent_id, sort=0)
    db.add(node)
    db.flush()  # 立即写入获取 id
    return node.id

def _walk(db: Session, items: list, parent_id: int | None = None):
    """递归写入整棵目录树"""
    for item in items:
        cid = _create_node(db, item["name"], parent_id)
        if "children" in item and isinstance(item["children"], list):
            _walk(db, item["children"], cid)

def import_catalog():
    """读取 catalog_seed.json 并批量写入数据库"""
    with open(SEED_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    with SessionLocal() as db:
        # 可选：先清空旧数据，防止重复（生产环境请慎用）
        db.query(Catalog).delete()
        db.commit()
        _walk(db, data)
        db.commit()
    print("Catalog seed imported successfully!")

if __name__ == "__main__":
    import_catalog()
