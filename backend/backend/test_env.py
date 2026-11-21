import sys
print(f"Python version: {sys.version}")
try:
    import fastapi
    print(f"FastAPI version: {fastapi.__version__}")
except ImportError as e:
    print(f"Error importing fastapi: {e}")
try:
    import sqladmin
    print(f"SQLAdmin version: {sqladmin.__version__}")
except ImportError as e:
    print(f"Error importing sqladmin: {e}")
try:
    import uvicorn
    print(f"Uvicorn version: {uvicorn.__version__}")
except ImportError as e:
    print(f"Error importing uvicorn: {e}")
print("Environment check complete")
