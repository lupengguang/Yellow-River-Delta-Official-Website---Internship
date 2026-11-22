import React from 'react';
import { Link } from 'react-router-dom';
import catalogSeed from '../data/catalogSeed.json';
import { PageBanner, SectionTitle, TiltCard, RevealRow } from './topicPageKit';

const countNodes = (nodes = []) =>
  nodes.reduce((sum, node) => sum + 1 + countNodes(node.children || []), 0);

const categories = catalogSeed.map((category) => ({
  name: category.name,
  count: 1 + countNodes(category.children || [])
}));

const totalNodes = categories.reduce((sum, category) => sum + category.count, 0);

function DataFirstRelease() {
  return (
    <div className="pb-16 min-h-screen">
      <PageBanner
        kicker="DATA FIRST RELEASE"
        title="数据初版"
        description="首批数据以平台现有目录体系为骨架发布，覆盖黄河三角洲资源环境的主要数据专题，后续将持续补充说明与数据文件。"
        chips={[`${categories.length} 个一级分类`, `${totalNodes} 个目录节点`, '以目录与说明为主']}
      />

      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: `${categories.length}`, label: '一级分类', note: '覆盖主要数据专题' },
            { value: `${totalNodes}`, label: '目录节点', note: '含各级子目录' },
            { value: '首批', label: '发布范围', note: '以目录与说明为主' },
            { value: '持续', label: '更新状态', note: '数据文件陆续补充' }
          ].map((item) => (
            <TiltCard key={item.label} base="glass-card-soft" className="p-5 text-center">
              <p className="text-2xl md:text-3xl font-bold text-emerald-700 mb-1 topic-float">
                {item.value}
              </p>
              <p className="text-sm text-gray-700 font-medium mb-1">{item.label}</p>
              <p className="text-xs text-gray-500 mb-0">{item.note}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 01 发布说明 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="01"
          title="首批数据发布说明"
          subtitle="以目录体系为骨架，先说明、后补充数据文件"
        />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            本次初版数据以平台现有目录体系为骨架，共发布
            <strong className="text-emerald-700"> {categories.length} 个一级分类、{totalNodes} 个目录节点</strong>
            ，覆盖地区行政区划、气象、水文、土地利用遥感监测、植被类型、土壤、社会人口经济、卫星与无人机遥感、基础地理、地形地貌、植被指数反演、夜间灯光、生态系统服务、自然保护区边界等专题。
          </p>
          <p className="text-gray-600 leading-relaxed">
            首批发布以目录层级与条目说明为主，用于明确数据范围与检索入口；具体数据文件、时间范围与下载方式，以「数据库目录」页面和「帮助中心」的最新说明为准。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/database-catalog"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              查看数据库目录 <span>→</span>
            </Link>
            <Link
              to="/data-search"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-5 py-2.5 text-sm text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              前往数据搜索 <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 02 数据范围 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="02"
          title="数据范围"
          subtitle="点击分类进入数据库目录查看层级"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <TiltCard key={category.name} base="glass-card-soft" className="topic-sheen p-5">
              <Link to="/database-catalog" className="group block h-full">
                <p className="text-xs text-emerald-700 mb-2">{category.count} 个节点</p>
                <h3 className="text-sm md:text-base font-semibold text-gray-800 leading-snug mb-3">
                  {category.name}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-600">
                  查看目录 <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 03 使用须知 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="03"
          title="使用须知"
          subtitle="悬停展开查看具体说明"
        />
        <div className="glass-card p-6 md:p-8">
          <div className="space-y-1">
            <RevealRow title="浏览目录" badge="入口">
              进入「数据库目录」查看一级、二级及更细层级目录与条目说明。
            </RevealRow>
            <RevealRow title="数据下载" badge="帮助中心">
              免费注册为本网站会员后每天可免费下载 3 条数据；VIP 会员无下载限制，具体以帮助中心说明为准。
            </RevealRow>
            <RevealRow title="引用规范" badge="法律声明">
              转载或引用本平台内容须注明来源及原文链接，具体规则见「法律声明」。
            </RevealRow>
            <RevealRow title="更新说明" badge="持续更新">
              首批以目录与说明为主，数据文件与下载链接将陆续补充，以页面最新展示为准。
            </RevealRow>
          </div>
          <p className="text-xs text-gray-500 mt-4 mb-0">
            如对数据范围、格式或使用方式有疑问，可前往「帮助中心」查看数据下载说明。
          </p>
        </div>
      </section>
    </div>
  );
}

export default DataFirstRelease;
