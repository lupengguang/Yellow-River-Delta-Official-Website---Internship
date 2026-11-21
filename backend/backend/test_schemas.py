from schemas import CatalogCreate, ContentCreate
from pydantic import ValidationError

print("============== 测试阶段二：Pydantic Schema 验证 ==============")

print("\n--- [情况 1] 测试合法数据结构被准确接收 ---")
try:
    c = CatalogCreate(name='黄河口遥感数据字典', sort=1)
    print("[SUCCESS] 验证通过，转出的合法持久化数据为:")
    print(c.model_dump())
except ValidationError as e:
    print("[ERROR] 验证异常:", e)

print("\n--- [情况 2] 测试不合法的数据被安全机制强制拦截 ---")
try:
    # 模拟前端传入非法数据结构：故意传入错误的目录ID并且缺省了强要求的 “content” 文字内容
    c = ContentCreate(catalog_id='我故意传入错误的格式', source='生态监测站供稿') 
except ValidationError as e:
    print("[SUCCESS] 成功拦截前端错误传参！底层抛出的安全拦截明细如下：")
    print(e)


print("\n============================================================")
