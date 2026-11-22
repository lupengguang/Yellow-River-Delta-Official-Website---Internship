# 全局配置
import os
import secrets
from dotenv import load_dotenv

# 读取同目录下的 .env 文件（本地配置，不提交到仓库）
load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

# 数据库配置
DB_HOST = os.getenv("DB_HOST", "127.0.0.1")
DB_PORT = int(os.getenv("DB_PORT", "5432"))
DB_USER = os.getenv("DB_USER", "postgres")
DB_PASSWORD = os.getenv("DB_PASSWORD", "")
DB_NAME = os.getenv("DB_NAME", "huanghe_data")

# 数据库连接地址；本地无 PostgreSQL 时可通过 .env 指定 SQLite
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}",
)

# JWT鉴权配置
SECRET_KEY = os.getenv("SECRET_KEY", secrets.token_hex(32))  # 自动生成随机密钥
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 1440  # Token有效期24小时

# MinIO对象存储配置
MINIO_ENDPOINT = os.getenv("MINIO_ENDPOINT", "127.0.0.1:9000")
MINIO_ACCESS_KEY = os.getenv("MINIO_ACCESS_KEY", "minioadmin")
MINIO_SECRET_KEY = os.getenv("MINIO_SECRET_KEY", "minioadmin")
MINIO_BUCKET = os.getenv("MINIO_BUCKET", "huanghe-data")
MINIO_SECURE = False  # 本地开发不用HTTPS

# 跨域配置
CORS_ORIGINS = [
    "http://localhost:5173",  # 前端Vite默认地址
    "http://127.0.0.1:5173",
    "*"  # 新手开发阶段可以全开，上线后改成前端域名
]
