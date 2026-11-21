from fastapi import APIRouter, UploadFile, File, Depends, HTTPException
from minio import Minio
from minio.error import S3Error
import uuid

from config import MINIO_ENDPOINT, MINIO_ACCESS_KEY, MINIO_SECRET_KEY, MINIO_BUCKET, MINIO_SECURE
from auth import get_admin_user

router = APIRouter()

minio_client = None

# 延迟初始化 MinIO 客户端
def get_minio_client():
    global minio_client
    if minio_client is None:
        try:
            minio_client = Minio(MINIO_ENDPOINT, access_key=MINIO_ACCESS_KEY, secret_key=MINIO_SECRET_KEY, secure=MINIO_SECURE)
            # 尝试初始化存储桶
            init_bucket()
        except Exception as e:
            print("MinIO 服务未启动，文件上传功能将不可用:", e)
    return minio_client

def init_bucket():
    try:
        client = get_minio_client()
        if client and not client.bucket_exists(MINIO_BUCKET):
            client.make_bucket(MINIO_BUCKET)
            policy = f'''
            {{
                "Version": "2012-10-17",
                "Statement": [
                    {{
                        "Effect": "Allow",
                        "Principal": "*",
                        "Action": ["s3:GetObject"],
                        "Resource": ["arn:aws:s3:::{MINIO_BUCKET}/*"]
                    }}
                ]
            }}
            '''
            client.set_bucket_policy(MINIO_BUCKET, policy)
    except Exception as e:
        print("MinIO 存储桶无法连接，跳过此初始化安全拦截:", e)

ALLOWED_EXTENSIONS = {"jpg", "jpeg", "png", "gif", "bmp"}
MAX_FILE_SIZE = 10 * 1024 * 1024

@router.post("/image", summary="直传图片文件", dependencies=[Depends(get_admin_user)])
def upload_image(file: UploadFile = File(...)):
    client = get_minio_client()
    if not client:
        raise HTTPException(status_code=503, detail="MinIO服务未启动，无法上传文件")
    
    file_ext = file.filename.split(".")[-1].lower()
    if file_ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(status_code=400, detail="仅支持常见遥感图片格式(jpg, png, bmp)")
    
    file.file.seek(0, 2)
    file_size = file.file.tell()
    file.file.seek(0)
    if file_size > MAX_FILE_SIZE:
        raise HTTPException(status_code=400, detail="图片载荷过大，拒绝接收(>10MB)")
    
    file_name = f"{uuid.uuid4()}.{file_ext}"
    try:
        client.put_object(MINIO_BUCKET, file_name, file.file, file_size, content_type=file.content_type)
        return {"code": 200, "message": "上传成功", "data": f"{MINIO_ENDPOINT}/{MINIO_BUCKET}/{file_name}"}
    except S3Error as e:
        raise HTTPException(status_code=500, detail=f"上传失败: {str(e)}")

@router.delete("/image", summary="删除图片文件", dependencies=[Depends(get_admin_user)])
def delete_image(file_url: str):
    client = get_minio_client()
    if not client:
        raise HTTPException(status_code=503, detail="MinIO服务未启动，无法删除文件")
    
    try:
        # 从URL中提取文件名
        file_name = file_url.split("/")[-1]
        client.remove_object(MINIO_BUCKET, file_name)
        return {"code": 200, "message": "删除成功"}
    except S3Error as e:
        raise HTTPException(status_code=500, detail=f"删除失败: {str(e)}")
