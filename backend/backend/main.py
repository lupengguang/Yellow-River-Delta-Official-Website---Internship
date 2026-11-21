from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
import uvicorn
from sqladmin import Admin, ModelView
from wtforms import TextAreaField, SelectField, validators

from config import CORS_ORIGINS
from database import SessionLocal, engine, Base
from models import User, Catalog, Content, OfficialWechat, CarbonWechat, Project, Literature, Notification, ProjectProgress, ResearchResult
from routers import auth, catalog, content, upload, open_api, wechat, homepage

# 创建数据库表
Base.metadata.create_all(bind=engine)

# 创建FastAPI应用
app = FastAPI(title="黄河三角洲数据平台API", description="1:1匹配需求文档的后端接口", version="1.0.0")

# 配置静态文件服务
from fastapi.staticfiles import StaticFiles
import os

# 确保静态目录存在
static_dir = os.path.join(os.path.dirname(__file__), "static")
if not os.path.exists(static_dir):
    os.makedirs(static_dir)

# 确保视频目录存在
video_dir = os.path.join(static_dir, "videos")
if not os.path.exists(video_dir):
    os.makedirs(video_dir)

app.mount("/static", StaticFiles(directory=static_dir), name="static")

# 配置跨域
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 挂载各业务生态路由组件
app.include_router(auth.router, prefix="/api/auth", tags=["登录模块"])
app.include_router(catalog.router, prefix="/api/catalog", tags=["目录模块"])
app.include_router(content.router, prefix="/api/content", tags=["内容流模块"])
app.include_router(upload.router, prefix="/api/upload", tags=["对象存储"])
app.include_router(open_api.router, prefix="/api/open", tags=["底层调度OpenAPI"])

app.include_router(wechat.router, prefix="/api/wechat", tags=["公众号管理"])

# 导入项目成果路由
from routers import project
app.include_router(project.router, prefix="/api/project", tags=["项目成果管理"])

# 导入文献路由
from routers import literature
app.include_router(literature.router, prefix="/api/literature", tags=["文献管理"])

# 挂载首页数据路由
app.include_router(homepage.router, prefix="/api/homepage", tags=["首页数据管理"])

# ===== 数据库可视化后台集成 =====
admin = Admin(app, engine)

class UserAdmin(ModelView, model=User):
    name = "用户管理"
    name_plural = "用户管理"
    icon = "fa-solid fa-users"
    column_list = [User.id, User.username, User.role, User.is_active]
    column_labels = {
        User.id: "ID",
        User.username: "用户名",
        User.role: "角色",
        User.is_active: "是否激活"
    }
    form_columns = [User.username, User.password, User.role, User.is_active]
    form_rules = ['username', 'password', 'role', 'is_active']

class CatalogAdmin(ModelView, model=Catalog):
    name = "目录管理"
    name_plural = "目录管理"
    icon = "fa-solid fa-folder-tree"
    column_list = [Catalog.id, Catalog.name, Catalog.parent_id, Catalog.sort]
    form_columns = [Catalog.name, Catalog.parent_id, Catalog.sort]
    form_include_pk = True
    form_rules = ['name', 'parent_id', 'sort']
    column_default_sort = [(Catalog.id, False)]
    column_labels = {
        Catalog.id: "ID",
        Catalog.name: "目录名称",
        Catalog.parent_id: "父级目录",
        Catalog.sort: "排序号"
    }
    
    async def on_model_change(self, data, model, is_created, request):
        if is_created and model.parent_id is not None:
            with SessionLocal() as db:
                max_sort = db.query(Catalog.sort).filter(Catalog.parent_id == model.parent_id).order_by(Catalog.sort.desc()).first()
                model.sort = (max_sort[0] + 1) if max_sort else 0
        elif is_created and model.parent_id is None:
            with SessionLocal() as db:
                max_sort = db.query(Catalog.sort).filter(Catalog.parent_id == None).order_by(Catalog.sort.desc()).first()
                model.sort = (max_sort[0] + 1) if max_sort else 0
    
    async def after_model_change(self, data, model, is_created, request):
        if is_created:
            with SessionLocal() as db:
                # 检查是否已经存在对应的 Content
                existing_content = db.query(Content).filter(Content.catalog_id == model.id).first()
                if not existing_content:
                    # 自动创建对应的 Content 项
                    new_content = Content(
                        catalog_id=model.id,
                        title=model.name,
                        source="系统自动创建",
                        content="请编辑内容"
                    )
                    db.add(new_content)
                    db.commit()
    
    async def on_model_delete(self, model, request):
        with SessionLocal() as db:
            # 先删除对应的 Content
            db.query(Content).filter(Content.catalog_id == model.id).delete()
            db.commit()
    
    @classmethod
    def get_column_choices(cls, request):
        with SessionLocal() as db:
            catalogs = db.query(Catalog.id, Catalog.name).all()
            return [(c.id, c.name) for c in catalogs]
    column_choices = {Catalog.parent_id: get_column_choices}
    
    async def get_list(self, request, *args, **kwargs):
        """重写获取列表方法，实现层级化排序和深度设置"""
        from sqlalchemy import select
        
        # 获取会话
        session = await self.get_session(request)
        
        # 首先获取所有目录项，计算深度和排序
        stmt = select(Catalog)
        all_catalogs = (await session.execute(stmt)).scalars().all()
        
        # 构建父子关系映射
        parent_map = {}
        catalog_map = {}
        root_catalogs = []
        
        for catalog in all_catalogs:
            catalog_map[catalog.id] = catalog
            if catalog.parent_id is None:
                root_catalogs.append(catalog)
            else:
                if catalog.parent_id not in parent_map:
                    parent_map[catalog.parent_id] = []
                parent_map[catalog.parent_id].append(catalog)
        
        # 计算每个目录项的深度
        def calculate_depth(catalog, depth=0):
            catalog.depth = depth
            if catalog.id in parent_map:
                for child in parent_map[catalog.id]:
                    calculate_depth(child, depth + 1)
        
        # 从根目录开始计算深度
        for root_catalog in root_catalogs:
            calculate_depth(root_catalog)
        
        # 构建层级化列表
        hierarchical_list = []
        processed_catalogs = set()
        
        def add_catalog_with_children(catalog):
            if catalog.id in processed_catalogs:
                return
            
            hierarchical_list.append(catalog)
            processed_catalogs.add(catalog.id)
            
            # 添加子目录
            if catalog.id in parent_map:
                # 对每个分组按 sort 字段排序
                parent_map[catalog.id].sort(key=lambda x: x.sort)
                for child in parent_map[catalog.id]:
                    add_catalog_with_children(child)
        
        # 对根目录也按 sort 字段排序
        root_catalogs.sort(key=lambda x: x.sort)
        
        # 先处理所有根目录，然后递归处理它们的子目录
        for root_catalog in root_catalogs:
            add_catalog_with_children(root_catalog)
        
        # 确保所有目录都被处理
        for catalog in all_catalogs:
            if catalog.id not in processed_catalogs:
                add_catalog_with_children(catalog)
        
        # 获取原始结果，包含总数量和其他元数据
        result = await super().get_list(request, *args, **kwargs)
        
        # 提取分页参数
        # 注意：这里我们需要手动处理分页
        # 但是由于 SQLAdmin 的 get_list 方法已经处理了分页，
        # 我们需要返回完整的层级化列表，并让 SQLAdmin 自己处理分页
        # 或者我们需要重新实现分页逻辑
        
        # 为了简单起见，我们返回完整的层级化列表
        return (hierarchical_list,) + result[1:]
    
    column_formatters = {
        Catalog.name: lambda m, a: f"{'  ' * m.depth if hasattr(m, 'depth') else ''}{m.name}"
    }


class RichTextAreaField(TextAreaField):
    def __call__(self, **kwargs):
        kwargs.setdefault("class", "richtext-editor")
        kwargs.setdefault("id", "richtext-editor")
        return super().__call__(**kwargs)

class ContentAdmin(ModelView, model=Content):
    name = "内容管理"
    name_plural = "内容管理"
    icon = "fa-solid fa-file-text"
    column_list = [Content.id, Content.catalog_id, Content.title, Content.year, Content.source]
    column_details_list = [Content.id, Content.catalog_id, Content.title, Content.year, Content.source, Content.content, Content.is_time_series]
    form_columns = [Content.catalog_id, Content.title, Content.year, Content.source, Content.is_time_series, Content.content]
    form_overrides = {Content.content: RichTextAreaField}
    extra_js_url = ["https://cdn.ckeditor.com/4.22.1/standard/ckeditor.js"]
    column_labels = {
        Content.id: "ID",
        Content.catalog_id: "所属目录",
        Content.title: "标题",
        Content.year: "年份",
        Content.source: "来源",
        Content.is_time_series: "是否时间序列",
        Content.content: "内容"
    }
    
    @classmethod
    def get_column_choices(cls, request):
        with SessionLocal() as db:
            catalogs = db.query(Catalog.id, Catalog.name).all()
            return [(c.id, c.name) for c in catalogs]
    column_choices = {Content.catalog_id: get_column_choices}




class OfficialWechatAdmin(ModelView, model=OfficialWechat):
    name = "官方公众号"
    name_plural = "官方公众号"
    icon = "fa-solid fa-building"
    column_list = [OfficialWechat.id, OfficialWechat.title, OfficialWechat.summary, OfficialWechat.sort]
    form_columns = [OfficialWechat.title, OfficialWechat.summary, OfficialWechat.content, OfficialWechat.image_url, OfficialWechat.sort]
    form_rules = ['title', 'summary', 'content', 'image_url', 'sort']
    column_default_sort = [(OfficialWechat.sort, False)]
    column_labels = {
        OfficialWechat.id: "ID",
        OfficialWechat.title: "文章标题",
        OfficialWechat.summary: "文章摘要",
        OfficialWechat.content: "文章内容",
        OfficialWechat.image_url: "封面图片",
        OfficialWechat.sort: "排序号"
    }

class CarbonWechatAdmin(ModelView, model=CarbonWechat):
    name = "碳基智能公众号"
    name_plural = "碳基智能公众号"
    icon = "fa-solid fa-brain"
    column_list = [CarbonWechat.id, CarbonWechat.title, CarbonWechat.summary, CarbonWechat.sort]
    form_columns = [CarbonWechat.title, CarbonWechat.summary, CarbonWechat.content, CarbonWechat.image_url, CarbonWechat.sort]
    form_rules = ['title', 'summary', 'content', 'image_url', 'sort']
    column_default_sort = [(CarbonWechat.sort, False)]
    column_labels = {
        CarbonWechat.id: "ID",
        CarbonWechat.title: "文章标题",
        CarbonWechat.summary: "文章摘要",
        CarbonWechat.content: "文章内容",
        CarbonWechat.image_url: "封面图片",
        CarbonWechat.sort: "排序号"
    }

class ProjectAdmin(ModelView, model=Project):
    name = "项目成果"
    name_plural = "项目成果"
    icon = "fa-solid fa-briefcase"
    column_list = [Project.id, Project.title, Project.project_type, Project.project_code, Project.funding, Project.sort]
    form_columns = [Project.title, Project.project_type, Project.project_code, Project.funding, Project.start_date, Project.end_date, Project.summary, Project.image_url, Project.sort]
    form_rules = ['title', 'project_type', 'project_code', 'funding', 'start_date', 'end_date', 'summary', 'image_url', 'sort']
    column_default_sort = [(Project.sort, False)]
    column_formatters = {
        Project.project_type: lambda m, a: "国家级" if m.project_type == "national" else ("省部级" if m.project_type == "provincial" else "横向项目")
    }
    column_labels = {
        Project.id: "ID",
        Project.title: "项目标题",
        Project.project_type: "项目类型",
        Project.project_code: "项目编号",
        Project.funding: "资助金额",
        Project.start_date: "开始时间",
        Project.end_date: "结束时间",
        Project.summary: "项目摘要",
        Project.image_url: "封面图片",
        Project.sort: "排序号"
    }
    
    async def on_model_change(self, data, model, is_created, request):
        if is_created:
            with SessionLocal() as db:
                max_sort = db.query(Project.sort).order_by(Project.sort.desc()).first()
                model.sort = (max_sort[0] + 1) if max_sort else 0
        await super().on_model_change(data, model, is_created, request)

class LiteratureAdmin(ModelView, model=Literature):
    name = "相关文献"
    name_plural = "相关文献"
    icon = "fa-solid fa-book-open"
    column_list = [Literature.id, Literature.title, Literature.journal, Literature.authors, Literature.literature_type, Literature.sort]
    form_columns = [Literature.title, Literature.journal, Literature.volume, Literature.doi, Literature.official_link, Literature.authors, Literature.publish_time, Literature.literature_type, Literature.sort]
    form_rules = ['title', 'journal', 'volume', 'doi', 'official_link', 'authors', 'publish_time', 'literature_type', 'sort']
    column_default_sort = [(Literature.sort, False)]
    column_formatters = {
        Literature.literature_type: lambda m, a: "学术论文" if m.literature_type == "paper" else "专著"
    }
    column_labels = {
        Literature.id: "ID",
        Literature.title: "文献标题",
        Literature.journal: "期刊名称",
        Literature.volume: "卷期",
        Literature.doi: "DOI编号",
        Literature.official_link: "官方链接",
        Literature.authors: "作者",
        Literature.publish_time: "发表时间",
        Literature.literature_type: "文献类型",
        Literature.sort: "排序号"
    }
    
    async def on_model_change(self, data, model, is_created, request):
        if is_created:
            with SessionLocal() as db:
                max_sort = db.query(Literature.sort).order_by(Literature.sort.desc()).first()
                model.sort = (max_sort[0] + 1) if max_sort else 0
        await super().on_model_change(data, model, is_created, request)

# 通知新闻管理
class NotificationAdmin(ModelView, model=Notification):
    name = "通知新闻"
    name_plural = "通知新闻"
    icon = "fa-solid fa-newspaper"
    column_list = [Notification.id, Notification.title, Notification.sort, Notification.create_time]
    form_columns = [Notification.title, Notification.content, Notification.sort]
    form_rules = ['title', 'content', 'sort']
    column_default_sort = [(Notification.sort, False)]
    column_labels = {
        Notification.id: "ID",
        Notification.title: "标题",
        Notification.content: "内容",
        Notification.sort: "排序号",
        Notification.create_time: "创建时间"
    }
    
    async def on_model_change(self, data, model, is_created, request):
        if is_created:
            with SessionLocal() as db:
                max_sort = db.query(Notification.sort).order_by(Notification.sort.desc()).first()
                model.sort = (max_sort[0] + 1) if max_sort else 0
        await super().on_model_change(data, model, is_created, request)

# 项目进展管理
class ProjectProgressAdmin(ModelView, model=ProjectProgress):
    name = "项目进展"
    name_plural = "项目进展"
    icon = "fa-solid fa-tasks"
    column_list = [ProjectProgress.id, ProjectProgress.title, ProjectProgress.sort, ProjectProgress.create_time]
    form_columns = [ProjectProgress.title, ProjectProgress.content, ProjectProgress.image_url, ProjectProgress.sort]
    form_rules = ['title', 'content', 'image_url', 'sort']
    column_default_sort = [(ProjectProgress.sort, False)]
    column_labels = {
        ProjectProgress.id: "ID",
        ProjectProgress.title: "标题",
        ProjectProgress.content: "内容",
        ProjectProgress.image_url: "图片URL",
        ProjectProgress.sort: "排序号",
        ProjectProgress.create_time: "创建时间"
    }
    
    async def on_model_change(self, data, model, is_created, request):
        if is_created:
            with SessionLocal() as db:
                max_sort = db.query(ProjectProgress.sort).order_by(ProjectProgress.sort.desc()).first()
                model.sort = (max_sort[0] + 1) if max_sort else 0
        await super().on_model_change(data, model, is_created, request)

# 最新研究成果管理
class ResearchResultAdmin(ModelView, model=ResearchResult):
    name = "最新研究成果"
    name_plural = "最新研究成果"
    icon = "fa-solid fa-flask"
    column_list = [ResearchResult.id, ResearchResult.project_name, ResearchResult.journal, ResearchResult.sort, ResearchResult.create_time]
    form_columns = [ResearchResult.project_name, ResearchResult.journal, ResearchResult.volume, ResearchResult.doi, ResearchResult.official_link, ResearchResult.sort]
    form_rules = ['project_name', 'journal', 'volume', 'doi', 'official_link', 'sort']
    column_default_sort = [(ResearchResult.sort, False)]
    column_labels = {
        ResearchResult.id: "ID",
        ResearchResult.project_name: "项目名称",
        ResearchResult.journal: "期刊",
        ResearchResult.volume: "卷期",
        ResearchResult.doi: "DOI",
        ResearchResult.official_link: "官方链接",
        ResearchResult.sort: "排序号",
        ResearchResult.create_time: "创建时间"
    }
    
    async def on_model_change(self, data, model, is_created, request):
        if is_created:
            with SessionLocal() as db:
                max_sort = db.query(ResearchResult.sort).order_by(ResearchResult.sort.desc()).first()
                model.sort = (max_sort[0] + 1) if max_sort else 0
        await super().on_model_change(data, model, is_created, request)

admin.add_view(UserAdmin)
admin.add_view(CatalogAdmin)
admin.add_view(ContentAdmin)
admin.add_view(OfficialWechatAdmin)
admin.add_view(CarbonWechatAdmin)
admin.add_view(ProjectAdmin)
admin.add_view(LiteratureAdmin)
admin.add_view(NotificationAdmin)
admin.add_view(ProjectProgressAdmin)
admin.add_view(ResearchResultAdmin)
@app.get("/admin/content/list", include_in_schema=False)
def redirect_content_list():
    """浏览器访问 /admin/content/list 时直接跳转到 SQLAdmin 内容列表页面"""
    return RedirectResponse(url="/admin/content/list")

@app.get("/", include_in_schema=False)
def root():
    return {"code": 200, "message": "黄河三角洲数据平台API服务正常运行", "docs": "/docs", "admin": "/admin"}

if __name__ == "__main__":
    uvicorn.run(app="main:app", host="0.0.0.0", port=8000, reload=True)
