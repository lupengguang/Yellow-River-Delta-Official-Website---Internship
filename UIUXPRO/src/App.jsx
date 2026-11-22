import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import DataOverview from './components/DataOverview';
import MonitoringIndicators from './components/MonitoringIndicators';
import Biodiversity from './components/Biodiversity';
import WetlandProtection from './components/WetlandProtection';
import NationalPark from './components/NationalPark';
import ResearchAndNews from './components/ResearchAndNews';
import ImageCarousel from './components/ImageCarousel';
import NotificationList from './components/NotificationList';
import ProjectProgressList from './components/ProjectProgressList';
import ResearchResultList from './components/ResearchResultList';
import ReserveIntro from './pages/ReserveIntro';
import NationalParkConstruction from './pages/NationalParkConstruction';
import WetlandRestoration from './pages/WetlandRestoration';
import EcologicalMonitoring from './pages/EcologicalMonitoring';
import OrganizationStructure from './pages/OrganizationStructure';
import LegalStatement from './pages/LegalStatement';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DataPublishing from './pages/DataPublishing';
import DatasetDetail from './pages/DatasetDetail';
import DataSearch from './pages/DataSearch';
import ProfessionalBooks from './pages/ProfessionalBooks';
import SanjiangyuanAtlas from './pages/SanjiangyuanAtlas';
import EcoEnvironmentTutorial from './pages/EcoEnvironmentTutorial';
import PythonOpenSourceGis from './pages/PythonOpenSourceGis';
import Cng2013 from './pages/Cng2013';
import Cng2015 from './pages/Cng2015';
import UrbanHeatEnvironment from './pages/UrbanHeatEnvironment';
import LuccSpatiotemporal from './pages/LuccSpatiotemporal';
import UrbanLandUseReconstruction from './pages/UrbanLandUseReconstruction';
import FarmersResponseComparison from './pages/FarmersResponseComparison';
import BookVulnerabilityAtlas from './pages/BookVulnerabilityAtlas';
import BookEnergyPlantPotential from './pages/BookEnergyPlantPotential';
import BookGlobalEcoReport2014 from './pages/BookGlobalEcoReport2014';
import BookGlobalEcoReport2015 from './pages/BookGlobalEcoReport2015';
import BookLandUseAtlas from './pages/BookLandUseAtlas';
import BookLandUseMonitoring from './pages/BookLandUseMonitoring';
import BookMongoliaRussiaMonitoring from './pages/BookMongoliaRussiaMonitoring';
import BookPortCityMonitoring from './pages/BookPortCityMonitoring';

// 主页组件
function Home() {
  return (
    <>
      <HeroSection />
      <DataOverview />
      <MonitoringIndicators />
      <ResearchAndNews />
      <Biodiversity />
      <WetlandProtection />
      <NationalPark />
    </>
  );
}

// 其他页面组件





function OtherResults() {
  return (
    <div className="py-8 bg-blue-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">其他成果</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* GPS定位拍照APP */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">GPS定位拍照APP</h2>
            <p className="text-gray-600 mb-4">
              GPS定位拍照APP是为了便利工作人员在野外进行定位和获取数据而特别设计的APP，具备智能手机定位、野外拍照记录、GPS坐标获取及处理、数据管理等功能，是一款非常实用的野外工作助手。
            </p>
            <div className="flex justify-center">
              <Link to="/other-results/gps-app" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                查看详情
              </Link>
            </div>
          </div>
          
          {/* 关于我们 */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">关于我们</h2>
            <p className="text-gray-600 mb-4">
              了解平台的发展历程、团队成员、研究方向以及联系方式等信息。
            </p>
            <div className="flex justify-center">
              <Link to="/other-results/about" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                查看详情
              </Link>
            </div>
          </div>
          
          {/* 公众号 */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">公众号</h2>
            <p className="text-gray-600 mb-4">
              关注我们的官方微信公众号，获取最新的平台动态、研究成果、数据资源以及技术分享等内容。
            </p>
            <div className="flex justify-center">
              <Link to="/other-results/wechat" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                查看详情
              </Link>
            </div>
          </div>
          
          {/* 项目成果 */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">项目成果</h2>
            <p className="text-gray-600 mb-4">
              展示平台团队承担的各类科研项目及其取得的成果，包括国家级、省部级项目等。
            </p>
            <div className="flex justify-center">
              <Link to="/other-results/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                查看详情
              </Link>
            </div>
          </div>
          
          {/* 相关文献 */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">相关文献</h2>
            <p className="text-gray-600 mb-4">
              汇集与黄河三角洲资源环境科学研究相关的学术论文、专著、报告等文献资料，方便用户查阅和引用。
            </p>
            <div className="flex justify-center">
              <Link to="/other-results/literature" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                查看详情
              </Link>
            </div>
          </div>
        </div>
        
        {/* 页脚信息 */}
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>版权所有 © 黄河三角洲资源环境科学数据平台</p>
          <p>地址：山东省东营市垦利区</p>
          <p>电话：0546-xxxxxxx</p>
        </div>
      </div>
    </div>
  );
}

function WechatArticleDetail() {
  const [article, setArticle] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  
  // 从URL参数获取文章ID和公众号类型
  const params = new URLSearchParams(window.location.search);
  const articleId = params.get('id');
  const wechatType = params.get('type') || 'official';
  
  React.useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`http://localhost:8000/api/wechat/${wechatType}/articles/${articleId}`);
        
        if (!response.ok) {
          throw new Error('获取文章详情失败');
        }
        
        const data = await response.json();
        setArticle(data.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching article detail:', err);
      } finally {
        setLoading(false);
      }
    };
    
    if (articleId) {
      fetchArticle();
    }
  }, [articleId, wechatType]);
  
  // 返回公众号列表页
  const handleBack = () => {
    window.location.href = '/other-results/wechat';
  };
  
  return (
    <div className="py-8 bg-blue-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* 返回按钮 */}
        <button
          onClick={handleBack}
          className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回列表
        </button>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-8">公众号文章详情</h1>
        
        <div className="glass-card p-8">
          {loading ? (
            <div className="text-center text-gray-500">
              <svg className="animate-spin h-8 w-8 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p>加载中...</p>
            </div>
          ) : error ? (
            <div className="text-center text-red-500">
              <p>加载失败: {error}</p>
            </div>
          ) : article ? (
            <div>
              {article.image_url && (
                <img 
                  src={article.image_url} 
                  alt={article.title} 
                  className="w-full max-h-80 object-contain bg-gray-100 rounded-lg mb-6"
                />
              )}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{article.title}</h2>
              {article.summary && (
                <p className="text-gray-600 text-lg mb-6 italic">{article.summary}</p>
              )}
              {article.content && (
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              )}
              <div className="mt-8 text-gray-500 text-sm">
                <p>发布时间：{article.create_time}</p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <p>文章不存在</p>
            </div>
          )}
        </div>
        
        {/* 页脚信息 */}
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>版权所有 © 黄河三角洲资源环境科学数据平台</p>
          <p>地址：山东省东营市垦利区</p>
          <p>电话：0546-xxxxxxx</p>
        </div>
      </div>
    </div>
  );
}

const wechatCover = (file) => `${import.meta.env.BASE_URL}images/${file}`;

// 官方公众号文章卡片：8 篇标题已定，封面按标题同名图片匹配
const officialArticles = [
  {
    id: 'official-1',
    title: '2026年黄河三角洲土壤健康与生态农业东营研讨会暨鲁东大学东营基地年会举行',
    thumb: '2026年黄河三角洲土壤健康与生态农业东营研讨会暨鲁东大学东营基地年会举行.png'
  },
  {
    id: 'official-2',
    title: 'EGU丨2027专题征稿 HS10.19 人类活动改变的临界带中的水资源可及性、储存与连通性：机制、阈值与功能结果',
    thumb: 'EGU丨2027专题征稿 HS10.19 人类活动改变的临界带中的水资源可及性、储存与连通性：机制、阈值与功能结果.png'
  },
  {
    id: 'official-3',
    title: '鲁东大学赵英团队在园艺领域顶级期刊 Horticulture Research 发表研究论文',
    thumb: '鲁东大学赵英团队在园艺领域顶级期刊Horticulture Research发表研究论文.png'
  },
  {
    id: 'official-4',
    title: '第六届中国同位素水文学论坛在南京市成功举办',
    thumb: '第六届中国同位素水文学论坛在南京市成功举办.png'
  },
  {
    id: 'official-5',
    title: '国内外知名专家到访庆阳草地农业国家站',
    thumb: '国内外知名专家到访庆阳草地农业国家站.png'
  },
  {
    id: 'official-6',
    title: '鲁东大学团队参加首届土地退化与修复国际会议',
    thumb: '鲁东大学团队参加首届土地退化与修复国际会议.png'
  },
  {
    id: 'official-7',
    title: '赵英教授团队参加EGU2026国际学术会议并赴德国开展科研合作交流',
    thumb: '赵英教授团队参加EGU2026国际学术会议并赴德国开展科研合作交流.png'
  },
  { id: 'official-8', title: '论文分享', thumb: '论文分享.png' }
];

function Wechat() {
  const [activeTab, setActiveTab] = React.useState('official');
  const articles = activeTab === 'official' ? officialArticles : [];

  // 返回上一级
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="py-8 bg-blue-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">公众号</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* 左侧按钮区域 */}
          <div className="lg:w-1/4 space-y-3">
            <button
              onClick={() => setActiveTab('official')}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'official'
                  ? 'bg-black text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              鲁大现代农业高质量发展研究基地
            </button>
            <button
              onClick={handleGoBack}
              className="w-full px-6 py-3 rounded-lg font-medium transition-all bg-blue-500 text-white hover:bg-blue-600"
            >
              返回上一级
            </button>
            <button
              onClick={() => setActiveTab('carbon')}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'carbon'
                  ? 'bg-black text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              碳基智能公众号
            </button>
          </div>

          {/* 右侧详情区域 */}
          <div className="lg:w-3/4 glass-card p-6 md:p-8 min-h-[400px]">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="mb-1 text-xs font-semibold tracking-[0.3em] text-blue-600">OFFICIAL ACCOUNT</p>
                <h2 className="mb-0 text-xl font-semibold text-gray-800">鲁大现代农业高质量发展研究基地</h2>
              </div>
              <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                {activeTab === 'official' ? `${officialArticles.length} 篇文章` : '内容整理中'}
              </span>
            </div>

            {activeTab !== 'official' ? (
              <div className="rounded-xl border border-dashed border-blue-200 bg-white/50 p-10 text-center">
                <p className="mb-1 font-medium text-gray-700">碳基智能公众号内容整理中</p>
                <p className="mb-0 text-sm text-gray-500">敬请期待后续更新。</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {articles.map((article, index) => (
                  <article
                    key={article.id}
                    className="group glass-card relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/15"
                  >
                    <span className="absolute left-3 top-3 z-10 max-w-[calc(100%-4rem)] truncate rounded-full bg-black/45 px-2.5 py-0.5 text-[10px] text-white backdrop-blur-sm">
                      鲁大现代农业高质量发展研究基地
                    </span>
                    <span className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {article.thumb ? (
                      <div className="relative h-44 overflow-hidden bg-gray-100">
                        <img
                          src={wechatCover(article.thumb)}
                          alt={article.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                      </div>
                    ) : (
                      <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-dashed border-blue-200 bg-gradient-to-br from-blue-500/10 to-emerald-500/10">
                        <div className="text-center">
                          <p className="mb-1 text-2xl font-bold text-blue-300/70">
                            {String(index + 1).padStart(2, '0')}
                          </p>
                          <p className="mb-0 text-xs text-gray-500">文章配图待补充</p>
                        </div>
                      </div>
                    )}

                    <div className="relative p-5">
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                      <h3
                        className={`mb-2 text-base font-semibold leading-snug transition-colors duration-300 group-hover:text-blue-700 ${
                          article.title ? 'text-gray-800' : 'text-gray-400'
                        }`}
                      >
                        {article.title || '待补充文章标题'}
                      </h3>
                      <p className="mb-0 text-xs text-gray-500">
                        {article.title ? '鲁大现代农业高质量发展研究基地' : '标题与正文稍后补充'}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* 页脚信息 */}
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>版权所有 © 黄河三角洲资源环境科学数据平台</p>
          <p>地址：山东省东营市垦利区</p>
          <p>电话：0546-xxxxxxx</p>
        </div>
      </div>
    </div>
  );
}

const projectCover = (file) => `${import.meta.env.BASE_URL}images/${file}`;

// 项目成果条目：级别 / 来源 / 类型 / 题目 / 起止时间 / 资助金额 / 配图
const projectRecords = [
  {
    level: '国家级',
    funder: '国家自然科学基金',
    kind: '重点国际合作项目',
    title: '黄河三角洲盐碱农业根土水交互过程及其机理',
    period: '2024-2028',
    funding: '209 万',
    thumb: '黄河三角洲平均土壤湿度.png'
  },
  {
    level: '国家级',
    funder: '国家自然科学基金',
    kind: '面上项目',
    title: '黄河三角洲盐碱地蓬根际核心微生物菌群结构特征及潜在生态效应',
    period: '2020-2023',
    funding: '61 万',
    thumb: '土壤质地(砂土).png'
  },
  {
    level: '国家级',
    funder: '国家自然科学基金',
    kind: '面上项目',
    title: '丛枝菌根真菌响应互花米草磷素竞争的微生物学机制',
    period: '2022-2025',
    funding: '58 万',
    thumb: '黄河三角洲植被类型数据.png'
  },
  {
    level: '国家级',
    funder: '国家自然科学基金',
    kind: '面上项目',
    title: '外源氮输入驱动滨海湿地互花米草入侵的内在机制',
    period: '2023-2026',
    funding: '54 万',
    thumb: '东营市自然保护区.png'
  },
  {
    level: '国家级',
    funder: '科技部外国专家局',
    kind: '高端外国专家引进计划项目',
    title: '变化环境下黄河三角洲农业水资源可持续管理',
    period: '2022-2023',
    funding: '30 万',
    thumb: '黄河三角洲水系分布图.png'
  },
  {
    level: '省部级',
    funder: '山东省重点研发计划',
    kind: '乡村振兴科技创新提振行动项目',
    title: '黄河三角洲农村环境低碳循环治理关键技术集成与示范',
    period: '2022-2024',
    funding: '490 万',
    thumb: '黄河三角洲土地利用数据.png'
  },
  {
    level: '省部级',
    funder: '山东省自然科学基金',
    kind: '杰出青年项目',
    title: '土壤水文学',
    period: '2019-2022',
    funding: '100 万',
    thumb: '黄河三角洲MODIS地表蒸散发.png'
  },
  {
    level: '省部级',
    funder: '山东省泰山学者工程',
    kind: '青年专家项目',
    title: '黄河三角洲盐碱地水肥盐运移过程与调控',
    period: '2019-2023',
    funding: '100 万',
    thumb: '黄河三角洲土壤侵蚀类型和程度空间分布数据.png'
  },
  {
    level: '省部级',
    funder: '山东省泰山学者工程',
    kind: '青年专家项目',
    title: '黄河三角洲特色植物与微生物互馈效应',
    period: '2019-2023',
    funding: '100 万',
    thumb: '黄河三角洲NDVI.png'
  },
  {
    level: '省部级',
    funder: '山东省重点研发计划',
    kind: '乡村振兴科技创新提振行动项目',
    title: '沿黄区域冬小麦节水增产关键技术创新与示范',
    period: '2024-2026',
    funding: '170 万',
    thumb: '黄河三角洲NPP.png'
  }
];

function Projects() {
  const nationalCount = projectRecords.filter((project) => project.level === '国家级').length;

  return (
    <div className="py-10 bg-blue-50 min-h-screen">
      <div className="container mx-auto px-4">
        <Link
          to="/other-results"
          className="group mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm text-gray-700 backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-blue-200 hover:text-blue-700 hover:shadow-lg hover:shadow-blue-500/10"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          返回其他成果
        </Link>

        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-blue-600">PROJECTS</p>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">项目成果</h1>
          <p className="max-w-3xl text-gray-600">
            展示平台团队承担的国家级、省部级科研项目及其资助情况，涵盖盐碱地治理、湿地生态、农业水资源与土壤水文等方向。
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">{projectRecords.length} 个项目</span>
            <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-blue-700">国家级 {nationalCount} 项</span>
            <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-blue-700">省部级 {projectRecords.length - nationalCount} 项</span>
          </div>
        </div>

        <div className="space-y-5">
          {projectRecords.map((project) => (
            <article
              key={project.title}
              className="group glass-card relative flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/15 sm:flex-row"
            >
              <div className="relative w-full shrink-0 overflow-hidden bg-gradient-to-br from-blue-500/15 to-emerald-500/15 sm:w-48 md:w-56">
                <img
                  src={projectCover(project.thumb)}
                  alt={project.title}
                  loading="lazy"
                  className="h-36 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold text-blue-700 shadow-sm">
                  {project.level}
                </span>
                <span className="absolute bottom-3 left-3 right-3 text-[11px] leading-snug text-white/90">
                  {project.funder}
                </span>
              </div>

              <div className="relative flex-1 p-5 md:p-6">
                <span className="absolute bottom-6 left-0 top-6 w-0.5 rounded-full bg-blue-500/0 transition-all duration-500 group-hover:bg-blue-500" />
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <h3 className="mb-3 pr-2 text-base font-semibold leading-snug text-gray-800 transition-colors duration-300 group-hover:text-blue-700 md:text-lg">
                  {project.title}
                </h3>

                <div className="grid grid-cols-1 gap-1 text-xs text-gray-600 sm:grid-cols-2 md:text-sm">
                  <p className="mb-0"><span className="text-gray-500">项目来源：</span>{project.funder}</p>
                  <p className="mb-0"><span className="text-gray-500">项目类型：</span>{project.kind}</p>
                  <p className="mb-0"><span className="text-gray-500">起止时间：</span>{project.period}</p>
                  <p className="mb-0"><span className="text-gray-500">项目级别：</span>{project.level}</p>
                </div>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <span className="h-px flex-1 bg-gradient-to-r from-blue-200/70 to-transparent transition-colors duration-500 group-hover:from-blue-400/70" />
                  <span className="shrink-0 text-lg font-bold text-rose-500 transition-all duration-500 group-hover:scale-110 group-hover:text-rose-600">
                    资助 {project.funding}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 页脚信息 */}
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>版权所有 © 黄河三角洲资源环境科学数据平台</p>
          <p>地址：山东省东营市垦利区</p>
          <p>电话：0546-xxxxxxx</p>
        </div>
      </div>
    </div>
  );
}

const literatureCover = (file) => `${import.meta.env.BASE_URL}images/${file}`;

// 相关文献条目：期刊论文与公众号文章，按题目规范化去重后只保留一条
const literatureRecords = [
  {
    type: '期刊论文',
    title: 'An incorrect wetness-based correction method for deuterium offset',
    journal: 'Proceedings of the National Academy of Sciences (PNAS)',
    volume: '118(15)',
    doi: '10.1073/pnas.2026641118',
    link: 'https://www.pnas.org/doi/10.1073/pnas.2026641118',
    thumb: '黄河三角洲平均土壤湿度.png'
  },
  {
    type: '期刊论文',
    title: 'Soil Acidification Under Long-Term N Addition Decreases the Diversity of Soil Bacteria and Fungi and Changes Their Community Composition in a Semiarid Grassland',
    journal: 'Microbial Ecology',
    volume: '1-11（在线优先出版格式）',
    doi: '10.1007/s00248-021-01836-8',
    link: 'https://link.springer.com/article/10.1007/s00248-021-01836-8',
    thumb: '土壤质地(砂土).png'
  },
  {
    type: '期刊论文',
    title: 'Effect of Straw and Wood Ash on Soil Carbon Sequestration and Bacterial Community in a Calcareous Soil',
    journal: 'Frontiers in Microbiology',
    volume: '13: 926506 (1-12)',
    doi: '10.3389/fmicb.2022.926506',
    link: 'https://www.frontiersin.org/articles/10.3389/fmicb.2022.926506/full',
    thumb: '黄河三角洲土壤保持.png'
  },
  {
    type: '期刊论文',
    title: 'Assessing soil water balance to optimize irrigation schedules of flood-irrigated maize fields with different cultivation histories in the arid region',
    journal: 'Agricultural Water Management',
    volume: '265: 107543',
    doi: '10.1016/j.agwat.2022.107543',
    link: 'https://www.sciencedirect.com/science/article/pii/S0378377422000907',
    thumb: '黄河三角洲MODIS地表蒸散发.png'
  },
  {
    type: '期刊论文',
    title: 'Upstream 2000 ha is the boundary of the stream water nitrogen and phosphorus saturation concentration threshold in the subtropical agricultural catchment',
    journal: 'Catena',
    volume: '211: 105960',
    doi: '10.1016/j.catena.2021.105960',
    link: 'https://www.sciencedirect.com/science/article/pii/S0341816221005960',
    thumb: '黄河三角洲水系分布图.png'
  },
  {
    type: '期刊论文',
    title: 'Effect of saline land reclamation by constructing the "Raised Field-Shallow Trench" pattern on agroecosystems in Yellow River Delta',
    journal: 'Agricultural Water Management',
    volume: '261: 107345',
    doi: '10.1016/j.agwat.2021.107345',
    link: 'https://www.sciencedirect.com/science/article/pii/S0378377421006223',
    thumb: '黄河三角洲土地利用数据.png'
  },
  {
    type: '公众号文章',
    title: '鲁东大学国家高等学校学科创新引智基地（“111计划”）海外专家 Daniele Penna 在国际顶级期刊 Nature Water 发表最新研究成果',
    account: '鲁大现代农业高质量发展研究基地',
    thumb: '黄河三角洲年降水量.png'
  },
  {
    type: '公众号文章',
    title: '鲁东大学赵英教授团队在 Nature 子刊发表重要研究成果',
    account: '鲁大现代农业高质量发展研究基地',
    thumb: '黄河三角洲NPP.png'
  },
  {
    type: '公众号文章',
    title: '温州大学甘延太院士团队发表研究成果，为全球塑料条约的谈判提供了关于农膜“生产力—环境”权衡与转型路径的关键科学支撑',
    account: '鲁大现代农业高质量发展研究基地',
    thumb: '黄河三角洲土地利用数据.png'
  },
  {
    type: '公众号文章',
    title: '鲁东大学在《Science》发声：重新理解气候变化与放牧作用',
    account: '鲁大现代农业高质量发展研究基地',
    thumb: '黄河三角洲植被类型数据.png'
  },
  {
    type: '公众号文章',
    title: '鲁东大学赵英教授团队在《Hydrological Processes》发表论文：低温真空抽提法导致氢同位素偏移',
    account: '鲁大现代农业高质量发展研究基地',
    thumb: '黄河三角洲水系分布图.png'
  }
];

const normalizeLiteratureTitle = (title) => title.replace(/[\s　]+/g, '').toLowerCase();
const seenLiteratureTitles = new Set();

const literatureList = literatureRecords.filter((item) => {
  const key = normalizeLiteratureTitle(item.title);
  if (seenLiteratureTitles.has(key)) return false;
  seenLiteratureTitles.add(key);
  return true;
});

function Literature() {
  return (
    <div className="py-10 bg-blue-50 min-h-screen">
      <div className="container mx-auto px-4">
        <Link
          to="/other-results"
          className="group mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm text-gray-700 backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-blue-200 hover:text-blue-700 hover:shadow-lg hover:shadow-blue-500/10"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          返回其他成果
        </Link>
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-blue-600">LITERATURE</p>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">相关文献</h1>
          <p className="max-w-3xl text-gray-600">
            汇集与黄河三角洲资源环境科学研究相关的学术论文、公众号研究成果等文献资料，方便用户查阅和引用。
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">{literatureList.length} 篇文献</span>
            <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-blue-700">期刊论文与公众号文章</span>
            <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-blue-700">点击卡片查阅原文</span>
          </div>
        </div>

        <div className="space-y-5">
          {literatureList.map((item) => {
            const body = (
              <>
                <div className="relative w-full shrink-0 overflow-hidden bg-gradient-to-br from-blue-500/15 to-emerald-500/15 sm:w-48 md:w-56">
                  <img
                    src={literatureCover(item.thumb)}
                    alt={item.title}
                    loading="lazy"
                    className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold text-blue-700 shadow-sm">
                    {item.type}
                  </span>
                  <span className="absolute bottom-3 left-3 right-3 line-clamp-2 text-[11px] leading-snug text-white/90">
                    {item.journal || item.account}
                  </span>
                </div>

                <div className="relative min-w-0 flex-1 p-5 md:p-6">
                  <span className="absolute bottom-6 left-0 top-6 w-0.5 rounded-full bg-blue-500/0 transition-all duration-500 group-hover:bg-blue-500" />
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <h3 className="mb-2 pr-2 text-base font-semibold leading-snug text-gray-800 transition-colors duration-300 group-hover:text-blue-700 md:text-lg">
                    {item.title}
                  </h3>

                  <div className="space-y-1 text-xs text-gray-600 md:text-sm">
                    {item.journal && (
                      <p className="mb-0"><span className="text-gray-500">期刊：</span>{item.journal}</p>
                    )}
                    {item.volume && (
                      <p className="mb-0"><span className="text-gray-500">卷期：</span>{item.volume}</p>
                    )}
                    {item.doi && (
                      <p className="mb-0"><span className="text-gray-500">DOI：</span>{item.doi}</p>
                    )}
                    {item.account && (
                      <p className="mb-0"><span className="text-gray-500">公众号：</span>{item.account}</p>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    {item.link ? (
                      <span className="text-xs font-medium text-blue-600">
                        查看原文
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">公众号文章</span>
                    )}
                    <span className="h-px flex-1 bg-gradient-to-r from-blue-200/70 to-transparent transition-colors duration-500 group-hover:from-blue-400/70" />
                  </div>
                </div>
              </>
            );

            const cardClass =
              'group glass-card relative flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/15 sm:flex-row';

            return item.link ? (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {body}
              </a>
            ) : (
              <article key={item.title} className={cardClass}>
                {body}
              </article>
            );
          })}
        </div>

        {/* 页脚信息 */}
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>版权所有 © 黄河三角洲资源环境科学数据平台</p>
          <p>地址：山东省东营市垦利区</p>
          <p>电话：0546-xxxxxxx</p>
        </div>
      </div>
    </div>
  );
}

function HelpCenter() {
  return (
    <div className="py-8 bg-blue-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">帮助中心</h1>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* 左侧导航 */}
          <div className="lg:w-1/4">
            <div className="glass-card p-4">
              <h2 className="text-lg font-semibold text-blue-700 mb-4">网站数据下载说明</h2>
              <div className="space-y-2">
                <button className="w-full text-left p-3 bg-blue-100 text-blue-700 rounded-lg font-medium">
                  关于我们
                </button>
              </div>
            </div>
          </div>
          
          {/* 右侧内容 */}
          <div className="lg:w-3/4">
            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">关于网站数据下载：</h2>
              
              <ol className="list-decimal pl-5 space-y-3 text-gray-600 mb-6">
                <li>免费注册为本网站会员就可以下载数据，注册后每天可免费下载3条数据；</li>
                <li>VIP会员没有下载限制，可以下载网站上所有在线数据。不能下载的数据（没有下载链接）是收费的，需要单独联系客服获取。想加入VIP会员请联系客服办理。</li>
              </ol>
              
              <p className="text-gray-600 mb-4">
                本网站目前没有专门的运行经费，所以获取数据会收一定的费用，我们会不断完善和提高数据质量，尽量为大家提供更好的数据服务。
              </p>
              
              <p className="text-gray-600 mb-6">
                数据下载注意：网站不支持迅雷等工具下载，由于部分浏览器内置了加速工具，往往导致下载的数据压缩包只有几K，无法解压等问题，建议使用Google Chrome通过浏览器下载。如有问题请联系我们：
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <p className="text-gray-600 mb-2">单位：中国科学院地理科学与资源研究所</p>
                  <p className="text-gray-600 mb-2">地址：北京朝阳区安外大屯路甲11号</p>
                  <p className="text-gray-600 mb-2">联系人：</p>
                  <p className="text-gray-600 mb-2">数据需求请微信联系：</p>
                  <p className="text-gray-600 mb-2">电话：010-64889071</p>
                  <p className="text-gray-600 mb-2">Email: xuxl@lreis.ac.cn</p>
                  <p className="text-gray-600 mb-2">网站技术支持（不能注册、收不到验证码、数据不能下载、数据无法解压等）请联系：</p>
                  <p className="text-gray-600">QQ:660685985</p>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/二维码.png`} 
                    alt="联系二维码" 
                    className="w-48 h-48 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 页脚信息 */}
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>版权所有 © 黄河三角洲资源环境科学数据平台</p>
          <p>地址：山东省东营市垦利区</p>
          <p>电话：0546-xxxxxxx</p>
        </div>
      </div>
    </div>
  );
}

// 数据库目录页面
function DatabaseCatalog() {
  const [catalogs, setCatalogs] = React.useState([]);
  const [selectedContent, setSelectedContent] = React.useState(null);
  const [expandedCatalogs, setExpandedCatalogs] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [contentLoading, setContentLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // 获取当前URL中的目录参数
  const targetCatalogName = searchParams.get('catalog');

  // 查找并跳转到指定目录
  const navigateToCatalog = (catalogList, targetName) => {
    for (const catalog of catalogList) {
      // 检查二级目录
      if (catalog.children) {
        for (const child of catalog.children) {
          if (child.name === targetName) {
            setExpandedCatalogs({ [catalog.id]: true });
            handleCatalogClick(child.id, child.name);
            return true;
          }
        }
      }
    }
    return false;
  };

  React.useEffect(() => {
    const fetchCatalogs = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/catalog/tree');
        if (!response.ok) {
          throw new Error('Failed to fetch catalogs');
        }
        const data = await response.json();
        setCatalogs(data.data);
        
        // 如果有目标目录名，自动展开并加载内容
        if (targetCatalogName && data.data.length > 0) {
          setTimeout(() => {
            navigateToCatalog(data.data, targetCatalogName);
          }, 100);
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching catalogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCatalogs();
  }, []);

  // 监听URL参数变化
  React.useEffect(() => {
    if (targetCatalogName && catalogs.length > 0) {
      navigateToCatalog(catalogs, targetCatalogName);
    }
  }, [targetCatalogName, catalogs]);

  const handleCatalogClick = async (catalogId, catalogName) => {
    try {
      // 更新URL参数
      navigate(`/database-catalog?catalog=${encodeURIComponent(catalogName)}`);
      
      setContentLoading(true);
      const response = await fetch(`http://localhost:8000/api/content/catalog/${catalogId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }
      const data = await response.json();
      if (data.data) {
        setSelectedContent({
          ...data.data,
          catalogName: catalogName
        });
      } else {
        setSelectedContent({
          catalogId: catalogId,
          catalogName: catalogName,
          content: `<h1>${catalogName}</h1><p>暂无内容，请在后台添加</p>`
        });
      }
    } catch (err) {
      console.error('Error fetching content:', err);
      setSelectedContent({
        catalogId: catalogId,
        catalogName: catalogName,
        content: `<h1>${catalogName}</h1><p>加载失败，请重试</p>`
      });
    } finally {
      setContentLoading(false);
    }
  };

  const toggleCatalog = (catalogId) => {
    setExpandedCatalogs(prev => ({
      ...prev,
      [catalogId]: !prev[catalogId]
    }));
  };

  const renderCatalog = (catalog) => {
    const isExpanded = expandedCatalogs[catalog.id] || false;
    
    return (
      <div key={catalog.id} className="mb-4">
        <div 
          className="flex justify-between items-center p-2 bg-blue-100 rounded font-medium text-blue-700 cursor-pointer"
          onClick={() => toggleCatalog(catalog.id)}
        >
          <span>{catalog.name}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-4 w-4 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {isExpanded && catalog.children && catalog.children.length > 0 && (
          <div className="pl-4 mt-2 space-y-1">
            {catalog.children.map(child => (
              <div 
                key={child.id} 
                className="p-1 hover:bg-gray-50 rounded cursor-pointer"
                onClick={() => handleCatalogClick(child.id, child.name)}
              >
                {child.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="py-8 bg-blue-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">黄河三角洲数据平台</h1>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <span>再绘终端</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* 左侧数据库目录 */}
          <div className="lg:w-1/4 glass-card p-4">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">数据库目录</h2>
            
            {loading ? (
              <div className="text-center py-4">加载中...</div>
            ) : error ? (
              <div className="text-center py-4 text-red-600">加载失败: {error}</div>
            ) : (
              catalogs.map(catalog => renderCatalog(catalog))
            )}
          </div>
          
          {/* 右侧内容区域 */}
          <div className="lg:w-3/4">
            {contentLoading ? (
              <div className="glass-card p-4 mb-6">
                <div className="text-center py-8">加载中...</div>
              </div>
            ) : selectedContent ? (
              <div className="glass-card p-4 mb-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-4">{selectedContent.catalogName}</h3>
                {/* 元数据信息 */}
                <div className="mb-4 p-3 bg-gray-50 rounded">
                  {selectedContent.year && (
                    <div className="text-sm mb-1">
                      <span className="font-medium">数据年份：</span>
                      <span>{selectedContent.year}</span>
                    </div>
                  )}
                  {selectedContent.source && (
                    <div className="text-sm mb-1">
                      <span className="font-medium">数据来源：</span>
                      <span>{selectedContent.source}</span>
                    </div>
                  )}
                  <div className="text-sm">
                    <span className="font-medium">时间序列：</span>
                    <span>{selectedContent.isTimeSeries ? '是' : '否'}</span>
                    <span className="text-gray-500 ml-2 text-xs">(时间序列数据是按时间顺序采集的连续数据，如气温变化、降水量等)</span>
                  </div>
                </div>
                {/* 主要内容 */}
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: selectedContent.content }} />
              </div>
            ) : (
              <div className="glass-card p-4 mb-6">
                <ImageCarousel />
              </div>
            )}
            
            {/* 并排区域：通知新闻 + 项目进展 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* 左侧：通知新闻 */}
              <div className="glass-panel p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">通知新闻</h3>
                <NotificationList />
              </div>
              
              {/* 右侧：项目进展 */}
              <div className="glass-panel p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-green-500 pb-2">项目进展</h3>
                <ProjectProgressList />
              </div>
            </div>
            
            {/* 最新研究成果 */}
            <ResearchResultList />
          </div>
        </div>
        
        {/* 页脚信息 */}
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>版权所有 © 黄河三角洲资源环境科学数据平台</p>
          <p>地址：山东省东营市垦利区</p>
          <p>电话：0546-xxxxxxx</p>
        </div>
      </div>
    </div>
  );
}

// 遥感影像查询地图页面

// GPS定位拍照APP页面
function GpsApp() {
  return (
    <div className="py-8 bg-blue-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">GPS定位拍照APP</h1>
        
        <div className="glass-card p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* 左侧内容 */}
            <div className="md:w-2/3">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">APP介绍</h2>
              <p className="text-gray-600 mb-4">
                野外调查工作是科学研究工作中非常重要的环节，GPS定位拍照APP是为了便利工作人员在野外进行定位和获取数据而特别设计的APP，具备智能手机定位、野外拍照记录、GPS坐标获取及处理、数据管理等功能，是一款非常实用的野外工作助手。此外，为了方便数据的入库管理，通过相应的开发系统能将数据转换为标准入库要求的方式提交。
              </p>
              <p className="text-gray-600 mb-4">
                GPS定位拍照APP主要包含四个功能模块，分别为实地拍照模块、记录轨迹模块、定位采样模块和用户数据管理模块。
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  {
                    name: '实地拍照模块',
                    desc: '主动打开手机相机拍照功能，并记录 GPS 位置信息；拍摄后显示当前照片，并可实时上传照片至服务器保存。'
                  },
                  {
                    name: '记录轨迹模块',
                    desc: '包括实时定位和记录轨迹功能，可按固定时长或固定距离记录轨迹，轨迹文件和照片以 shapefile 文件保存于手机中。'
                  },
                  {
                    name: '定位采样模块',
                    desc: '读取后台采样点文件，根据采样点经纬度与设置半径，结合当前 GPS 位置自动判断是否进入采样范围并记录采样信息。'
                  },
                  {
                    name: '用户数据管理模块',
                    desc: '管理会员登录，以及登录后的信息查看、轨迹上传、采样数据上传和照片上传等。'
                  }
                ].map((module) => (
                  <div
                    key={module.name}
                    className="group rounded-xl border border-white/70 bg-white/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <h3 className="mb-1 text-sm font-semibold text-blue-700 transition-colors duration-300 group-hover:text-blue-800">
                      {module.name}
                    </h3>
                    <p className="mb-0 text-xs leading-relaxed text-gray-600">{module.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-blue-700 mt-6 mb-3">1. 实地拍照模块</h3>
              <p className="text-gray-600 mb-4">
                实地拍照模块系统会自动创建当前位置为拍照地点。如果在地图中的定位点不准确，可以点击图1-1中标识为1的“实时定位”按钮，重新根据GPS位置在地图上定位；图1-1中标识为2的“开始拍照”按钮会打开相机页面。若坐标发生变化需要重新拍摄地点，可以点击图1-1中标识为3的“创建新地点”按钮，系统会根据实时坐标创建新的记录地点，同时下方上一地点拍摄的照片会被清空。地点名称、地点类型都会自动识别后填入（地点名称可能不准确，用户可自行更改），其中类型需要用户自行输入（可为空值）。图1-1中标识为5的加减按钮可以控制地图的放大缩小。
              </p>
              <p className="text-gray-600 mb-4">
                点击图1-1中标识为4的“返回”按钮后会返回全屏的地图界面，如图1-2所示。
              </p>

              <figure className="my-6 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10">
                <img
                  src={`${import.meta.env.BASE_URL}images/APP页面图片.png`}
                  alt="图1-1 实地拍照模块与图1-2 实地拍照全屏地图界面"
                  loading="lazy"
                  className="mx-auto w-56 max-w-full rounded-xl transition-transform duration-500 hover:scale-[1.03]"
                />
                <figcaption className="mt-2 text-xs text-gray-500">
                  图1-1 实地拍照模块　|　图1-2 实地拍照全屏地图界面
                </figcaption>
              </figure>

              <p className="text-gray-600 mb-4">
                点击图1-1中标识为2的“开始拍照”按钮后，APP会调用手机相机拍照功能，如图1-3页面所示。图1-4中标识为1的区域为实地拍照所拍摄照片的展示区域。
              </p>

              <h3 className="text-lg font-semibold text-blue-700 mt-6 mb-3">2. 记录轨迹模块</h3>
              <p className="text-gray-600 mb-4">
                记录轨迹模块如图1-5所示。图1-5中标识为1的“实时定位”按钮点击后会在全屏显示的地图中重新定位当前坐标。图1-5中标识为2的“设置间隔”按钮点击后会打开设置记录轨迹间隔的小窗口（如图1-6所示），该窗口可设置时间（单位：分钟）和距离（单位：公里）两种间隔来记录行动轨迹，左侧的输入框可以输入数字来明确具体间隔大小。图1-5中标识为3的“开始记录”按钮点击后便会根据设置的记录间隔记录轨迹并在地图上添加位置标识；如果没有设置间隔，则无法开始记录轨迹。
              </p>
              <p className="text-gray-600 mb-4">
                开始记录轨迹后，图1-5中的“开始记录”按钮会变成图1-7中标识为1的“终止记录”橙色按钮；点击“终止记录”按钮会回到图1-5中的界面，轨迹文件会自动生成并保存，可在用户数据管理模块中查看。图1-7中标识为2的区域中便是轨迹中的记录点和路线。
              </p>

              <h3 className="text-lg font-semibold text-blue-700 mt-6 mb-3">3. 定位采样模块</h3>
              <p className="text-gray-600 mb-4">
                采样模块界面如图1-8所示。图1-8中标识为1的“实时定位”按钮点击后会在全屏显示的地图中重新定位当前坐标。图1-8中标识为5的加减按钮可以控制地图的放大缩小。
              </p>
              <p className="text-gray-600 mb-4">
                图1-8中标识为2的“选采样点”按钮点击后会弹出采样点文件格式提示小窗口，如图1-9所示。点击提示小窗口上的“选取文件”会打开APP自带的文件管理页面，用户需自行选取采样点的txt文件。采样点txt文件格式需为：采样点名称、地址、经纬度、采样说明，每个采样点一行，如图1-10所示。图1-8中标识为3的“设置距离”按钮点击后会弹出设置距离窗口，如图1-11所示，单位为米，左侧输入框可以输入数字来明确采样点的距离。图1-8中标识为4的“采样点测试”按钮点击后会根据设置好的监测采样距离，确定监测范围内是否存在采样点。
              </p>
              <p className="text-gray-600 mb-4">
                选取采样点txt文件后，文件中的各个采样点会在地图中标示出来，如图1-12所示。当软件监测到当前位置进入设置的距离时，会弹窗提示，并需要用户确认是否开始采样拍照，如图1-13所示。
              </p>

              <h3 className="text-lg font-semibold text-blue-700 mt-6 mb-3">4. 用户数据管理模块</h3>
              <p className="text-gray-600 mb-4">
                点击“我的”标识即可跳转到用户数据管理模块，具体界面如图1-16所示。图1-16中标识为1的部分为登录部分，标识为2的部分为“行程轨迹”部分，标识为3的部分为“实地照片”部分，标识为4的部分为“采样数据”部分。
              </p>
              <p className="text-gray-600 mb-4">
                点击图1-16中标识为1处的“登录”按钮可跳转至登录界面，如图1-17所示。查看与删除用户的数据记录不需要登录验证，数据上传功能需要登录后方可使用。在登录页面输入已注册的手机号码与密码即可登录；如未注册过会员，可点击图1-17中标识为1的橙色“注册”字样跳转至注册界面，如图1-18所示。注册时需要验证用户使用的手机号并设置登录密码。
              </p>
              <p className="text-gray-600 mb-4">
                图1-16中标识为2、3、4处的选项条可分别跳转至对应的数据管理界面，如图1-19、图1-20、图1-21所示。三个数据管理模块操作逻辑一致，以图1-19为例：点击图1-19中标识为1的“实时定位”按钮后，会在半屏显示的地图中重新定位；标识为2的加减按钮可以控制地图的放大缩小；标识为3的“全选”按钮点击后会将下方所有数据全部选中，另一种选中数据的方式为点击单选框来选取特定的几个数据；标识为4的“上传”按钮点击后会将选中的用户数据上传至服务器，但此功能需在登录状态下方可正常使用，如未登录会自动跳转至图1-17所示的登录界面；标识为5的“删除”按钮点击后会删除当前已选中的数据记录，另一种删除单条数据的方式为点击每条数据后方的“删除”按钮；标识为7的“分享”按钮点击后会将用户当前选中的数据打包成单个压缩文件，并根据用户的选择分享至不同的APP中；每条数据后方的“查看”按钮点击后即可查看对应数据的具体内容。
              </p>

              <p className="text-gray-600 mt-6">
                该APP目前在Android平台运行，支持Android 4.0及以上版本。
              </p>
            </div>
            
            {/* 右侧图片 */}
            <div className="md:w-1/3 space-y-4">
              <div className="glass-frame p-4 text-center">
                <img 
                  src={`${import.meta.env.BASE_URL}images/APP界面.jpg`} 
                  alt="APP界面" 
                  className="w-full h-auto rounded mb-2"
                />
                <p className="text-sm text-gray-600">APP界面</p>
              </div>
              <div className="glass-frame p-4 text-center">
                <img 
                  src={`${import.meta.env.BASE_URL}images/APP使用说明.jpg`} 
                  alt="APP使用说明" 
                  className="w-full h-auto rounded mb-2"
                />
                <p className="text-sm text-gray-600">APP使用说明</p>
              </div>
              <div className="glass-frame p-4 text-center">
                <img 
                  src={`${import.meta.env.BASE_URL}images/下载APP软件.jpg`} 
                  alt="下载APP软件" 
                  className="w-full h-auto rounded mb-2"
                />
                <p className="text-sm text-gray-600">下载APP软件</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 页脚信息 */}
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>版权所有 © 黄河三角洲资源环境科学数据平台</p>
          <p>地址：山东省东营市垦利区</p>
          <p>电话：0546-xxxxxxx</p>
        </div>
      </div>
    </div>
  );
}

// 关于我们页面
function AboutUs() {
  const [activeTab, setActiveTab] = React.useState('download');

  const renderContent = () => {
    switch (activeTab) {
      case 'download':
        return (
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-4">网站数据下载说明</h2>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-2">关于网站数据下载：</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                <li>免费注册为本站会员就可以下载数据，注册后每天可免费下载3条数据；</li>
                <li>VIP会员没有下载限制，可以下载网站上所有在线数据。不能下载的数据（没有下载链接）是收费的，需要单独联系客服获取。想加入VIP会员请联系客服办理。</li>
              </ol>
            </div>
            
            <p className="text-gray-600 mb-6">
              本网站目前没有专门的运行经费，所以获取数据会收一定的费用，我们会不断完善和提高数据质量，尽量为大家提供更好的数据服务。
            </p>
            
            <p className="text-gray-600 mb-6">
              数据下载注意：网站不支持迅雷等工具下载，由于部分浏览器内置了加速工具，往往导致下载的数据压缩包只有几K，无法解压等问题，建议使用Google Chrome通过浏览器下载。如有问题请联系我们：
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">联系方式：</h3>
                <p className="text-gray-600 mb-1">单位：中国科学院地理科学与资源研究所</p>
                <p className="text-gray-600 mb-1">地址：北京朝阳区安外大屯路甲11号</p>
                <p className="text-gray-600 mb-1">联系人：</p>
                <p className="text-gray-600 mb-1">数据需求请微信联系：</p>
                <p className="text-gray-600 mb-1">电话：010-64889071</p>
                <p className="text-gray-600 mb-1">Email: xuxl@lreis.ac.cn</p>
                <p className="text-gray-600">网站技术支持（不能注册、收不到验证码、数据不能下载、数据无法解压等）请联系：</p>
                <p className="text-gray-600">QQ:660685985</p>
              </div>
              <div className="flex justify-center items-center">
                <div className="glass-frame p-4 text-center">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/二维码.png`} 
                    alt="联系二维码" 
                    className="w-48 h-48 rounded"
                  />
                  <p className="text-sm text-gray-600 mt-2">扫描二维码联系我们</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'team':
        return (
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-4">开发者团队</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 团队成员1 */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/陆鹏光.jpg`} 
                    alt="陆鹏光" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-800 mb-1">陆鹏光</h3>
                <p className="text-sm text-gray-600 mb-2">(UI/UX设计+网站前端开发)</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>UI模型开发工程师</p>
                  <p>大模型开发工程师</p>
                  <p>Prompt工程师</p>
                  <p>AI Coding Engineer</p>
                  <p>Cyber网络安全风险分析</p>
                  <p>Agent Engineer</p>
                  <p>Cyber Security Engineer</p>
                  <p>Data Engineer</p>
                  <p>Datawhale Fine-tuning Engineer</p>
                  <p>Datawhale AIPrompt Engineer</p>
                  <p>Forage品牌与设计</p>
                  <p>HarmonyOS应用开发者基础认证</p>
                  <p>Python程序员初级</p>
                  <p>电子商务运营师(中级)</p>
                  <p>短视频剪辑师初级</p>
                  <p>人工智能训练师(高级)</p>
                  <p>HUAWEI数通网络络协议基础认证</p>
                  <p>HUAWEI数通网络协议基础认证</p>
                  <p>平面设计师初级</p>
                  <p>Huawei Certification人工智能初识微认证认证</p>
                  <p>已获得Claude系列证书</p>
                  <p>智能体开发工程师</p>
                </div>
              </div>
              
              {/* 团队成员2 */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/张靖哲.jpg`} 
                    alt="张靖哲" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-800 mb-1">张靖哲</h3>
                <p className="text-sm text-gray-600 mb-2">(网站后端开发)</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>Unity、Renpy引擎开发工程师，拥有个人游戏作品集</p>
                  <p>获2025年第七届蓝桥杯程序设计大赛</p>
                  <p>职业院校赛道华北赛区省赛银奖</p>
                  <p>获2025年第七届蓝桥杯程序设计大赛</p>
                  <p>职业院校赛道国赛优秀奖</p>
                  <p>北京大学学生创新创业大赛高职赛通</p>
                  <p>项目名称:星航动力-电池驱动低空经济新赛道</p>
                  <p>项目名称:星航动力-电池驱动低空经济新赛道</p>
                  <p>2025年北京市职业院校技能大赛高职组</p>
                  <p>开发组(团体)赛项比赛中获得一等奖</p>
                </div>
              </div>
              
              {/* 团队成员3 */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/王宇欣.jpg`} 
                    alt="王宇欣" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-800 mb-1">王宇欣</h3>
                <p className="text-sm text-gray-600 mb-2">(UI/UX设计+网页设计)</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>平面设计师初级</p>
                  <p>计算机一级证书</p>
                  <p>Forage品牌与设计</p>
                  <p>AIGC设计师</p>
                  <p>初级前端开发</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-8 bg-blue-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">关于我们</h1>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* 左侧按钮区域 */}
          <div className="lg:w-1/4 space-y-3">
            <button
              onClick={() => setActiveTab('download')}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'download'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              网站数据下载说明
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'team'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              开发者团队
            </button>
          </div>
          
          {/* 右侧内容区域 */}
          <div className="lg:w-3/4 glass-card p-6">
            {renderContent()}
          </div>
        </div>
        
        {/* 页脚信息 */}
        <div className="text-center text-gray-600 text-sm mt-8">
          <p>版权所有 © 黄河三角洲资源环境科学数据平台</p>
          <p>地址：山东省东营市垦利区</p>
          <p>电话：0546-xxxxxxx</p>
        </div>
      </div>
    </div>
  );
}

// 已出版数据页面

function AppContent() {
  const location = useLocation();

  // 玻璃卡片：聚光灯跟随鼠标
  useEffect(() => {
    const handlePointerMove = (event) => {
      const card = event.target.closest('.glass-card, .glass-card-soft, .glass-panel');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  // 路由切换后回到页面顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/database-catalog" element={<DatabaseCatalog />} />
            <Route path="/other-results" element={<OtherResults />} />
            <Route path="/other-results/gps-app" element={<GpsApp />} />
            <Route path="/other-results/about" element={<AboutUs />} />
            <Route path="/other-results/wechat" element={<Wechat />} />
            <Route path="/other-results/wechat/detail" element={<WechatArticleDetail />} />
            <Route path="/other-results/projects" element={<Projects />} />
            <Route path="/other-results/literature" element={<Literature />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/reserve-intro" element={<ReserveIntro />} />
            <Route path="/national-park-construction" element={<NationalParkConstruction />} />
            <Route path="/wetland-restoration" element={<WetlandRestoration />} />
            <Route path="/eco-environment-monitoring" element={<EcologicalMonitoring />} />
            <Route path="/organizational-structure" element={<OrganizationStructure />} />
            <Route path="/legal" element={<LegalStatement />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/data-publishing" element={<DataPublishing />} />
            <Route path="/data-publishing/:id" element={<DatasetDetail />} />
            <Route path="/data-search" element={<DataSearch />} />
            <Route path="/professional-books" element={<ProfessionalBooks />} />
            <Route path="/professional-books/sanjiangyuan-atlas" element={<SanjiangyuanAtlas />} />
            <Route path="/professional-books/eco-environment-tutorial" element={<EcoEnvironmentTutorial />} />
            <Route path="/professional-books/python-open-source-gis" element={<PythonOpenSourceGis />} />
            <Route path="/professional-books/cng-2013" element={<Cng2013 />} />
            <Route path="/professional-books/cng-2015" element={<Cng2015 />} />
            <Route path="/professional-books/urban-heat-environment" element={<UrbanHeatEnvironment />} />
            <Route path="/professional-books/lucc-spatiotemporal" element={<LuccSpatiotemporal />} />
            <Route path="/professional-books/urban-land-use-reconstruction" element={<UrbanLandUseReconstruction />} />
            <Route path="/professional-books/farmers-response-comparison" element={<FarmersResponseComparison />} />
            <Route path="/professional-books/vulnerability-atlas" element={<BookVulnerabilityAtlas />} />
            <Route path="/professional-books/energy-plant-potential" element={<BookEnergyPlantPotential />} />
            <Route path="/professional-books/global-eco-report-2014" element={<BookGlobalEcoReport2014 />} />
            <Route path="/professional-books/global-eco-report-2015" element={<BookGlobalEcoReport2015 />} />
            <Route path="/professional-books/land-use-atlas" element={<BookLandUseAtlas />} />
            <Route path="/professional-books/land-use-monitoring" element={<BookLandUseMonitoring />} />
            <Route path="/professional-books/mongolia-russia-monitoring" element={<BookMongoliaRussiaMonitoring />} />
            <Route path="/professional-books/port-city-monitoring" element={<BookPortCityMonitoring />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;