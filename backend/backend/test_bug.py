import sys
import traceback
from database import SessionLocal
from models import User
from auth import get_password_hash

try:
    print('Testing get_password_hash...')
    hashed = get_password_hash('admin123')
    print('Hashing success!')
    print('Testing db connection...')
    db = SessionLocal()
    admin = db.query(User).filter(User.username == 'admin').first()
    print('Admin query success')
    if not admin:
        new_admin = User(
            username='admin',
            password=hashed,
            real_name='系统管理员',
            role='admin'
        )
        db.add(new_admin)
        db.commit()
        db.refresh(new_admin)
        print('Commit success!')
except Exception as e:
    traceback.print_exc()
