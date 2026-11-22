import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner, SectionTitle, TopicNav } from './topicPageKit';

const cover = `${import.meta.env.BASE_URL}images/廖小罕施建成等全球生态环境遥感监测2014年度报告.png`;

const basicInfo = [
  { label: '作者 / 编著', value: '廖小罕、施建成 等' },
  { label: '出版社', value: '科学出版社' },
  { label: '出版时间', value: '2015 年' },
  { label: 'ISBN', value: '978-7-03-045958-9' },
  { label: '定价', value: '258.00 元' },
  { label: '载体形态', value: '311 页，含彩图与地图，29 cm' },
  { label: '中图分类号', value: 'X835（环境遥感在生态环境监测中的应用）' },
  { label: '编制单位', value: '科技部国家遥感中心' }
];

const topics = [
  {
    no: '第一部分',
    title: '全球大宗粮油作物生产形势',
    badge: '重点专题 · 延续选题',
    intro: '全书篇幅最为详尽的专题，监测全球主产区的玉米、水稻、小麦和大豆四种大宗粮油作物。',
    items: [
      '利用遥感监测全球农业气象条件',
      '对非洲西部、南美洲、北美洲、南亚与东南亚、欧洲、俄罗斯西部及澳大利亚等主要产区进行农情遥感分析',
      '对中国东北、黄淮海、长江中下游等七大产区进行单独监测',
      '综合分析全球与中国的作物产量及供应形势，评估中国粮油进口来源国的生产状况'
    ],
    highlight: '2014 年全球四种作物总产量达 27.64 亿吨，同比增产 1.2%；同年中国大宗粮油作物总产量与 2013 年基本持平。'
  },
  {
    no: '第二部分',
    title: '全球大型国际重要湿地',
    badge: '当年新增',
    intro: '聚焦全球国际重要湿地的空间分布、面积与类型变化，并对其进行景观生态评价。',
    items: [
      '分别对内陆湿地、滨海湿地以及内陆/滨海混合型湿地进行变化分析',
      '对中国典型国际重要湿地的现状、时空变化及景观生态状况进行评估'
    ]
  },
  {
    no: '第三部分',
    title: '中国—东盟区域生态环境状况',
    badge: '当年新增',
    intro: '从多个维度呈现中国—东盟区域的生态环境本底。',
    items: [
      '光温条件、水分分布',
      '植被盖度与净初级生产力（NPP）',
      '森林生态系统及农田生态系统',
      '重点对 大湄公河次区域 等典型区域进行深入分析'
    ]
  },
  {
    no: '第四部分',
    title: '非洲土地覆盖',
    badge: '当年新增',
    intro: '聚焦非洲大陆的土地覆盖状况与变化，为理解该区域的土地利用动态和生态环境演变提供基础数据。',
    items: ['现有资料对该专题的详细章节结构披露较少']
  }
];

function BookGlobalEcoReport2014() {
  return (
    <div className="pb-16 min-h-screen">
      <PageBanner
        kicker="PROFESSIONAL BOOKS"
        title="全球生态环境遥感监测 2014 年度报告"
        description="利用多源卫星遥感数据，对全球生态环境热点问题与区域进行动态监测，为决策提供科学依据。"
        chips={['廖小罕、施建成 等', '科学出版社 · 2015', '四大专题']}
      />

      <section className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 封面与快捷信息 */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 glass-panel p-5">
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-emerald-500/10">
                <img
                  src={cover}
                  alt="《全球生态环境遥感监测2014年度报告》封面"
                  className="w-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">遥感监测</span>
                <span className="rounded-full bg-rose-500/90 px-3 py-1 text-sm font-semibold text-white shadow-md">
                  ¥ 258.00
                </span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-gray-500 mb-0">
                311 页 · 含彩图与地图 · 29 cm
                <br />
                ISBN 978-7-03-045958-9
              </p>
              <Link
                to="/professional-books"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-white/70 px-4 py-2.5 text-sm font-medium text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md"
              >
                ← 返回专业图书
              </Link>
            </div>
          </aside>

          {/* 正文内容 */}
          <div className="lg:col-span-2 space-y-12">
            <div className="glass-card p-6 md:p-8">
              <p className="text-gray-700 leading-relaxed">
                《全球生态环境遥感监测 2014 年度报告》由
                <strong className="text-emerald-700">廖小罕、施建成</strong>等编著，
                <strong className="text-emerald-700">科学出版社</strong>于
                <strong className="text-emerald-700">2015 年</strong>出版。
              </p>
              <p className="text-gray-600 leading-relaxed mb-0">
                这是科技部国家遥感中心发布的年度系列报告之一，旨在利用多源卫星遥感数据，
                对全球生态环境热点问题与区域进行动态监测，为决策提供科学依据。
              </p>
            </div>

            {/* 基本信息 */}
            <section>
              <SectionTitle index="01" title="基本信息" subtitle="出版信息与报告来源" />
              <div className="glass-card p-6 md:p-8">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mb-0">
                  {basicInfo.map((item) => (
                    <div key={item.label} className="border-b border-emerald-50 pb-4 last:border-0">
                      <dt className="text-xs text-gray-400 mb-1">{item.label}</dt>
                      <dd className="text-sm text-gray-700 leading-relaxed mb-0">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>

            {/* 内容架构 */}
            <section>
              <SectionTitle
                index="02"
                title="内容架构：四大专题"
                subtitle="“大宗粮油作物生产形势”为延续选题，其余三个专题为当年新增"
              />
              <div className="space-y-5">
                {topics.map((topic) => (
                  <div key={topic.title} className="glass-card p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                        {topic.no}
                      </span>
                      <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-0">{topic.title}</h3>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] text-emerald-700">
                        {topic.badge}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{topic.intro}</p>
                    <ul className="mt-3 space-y-2 mb-0">
                      {topic.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {topic.highlight && (
                      <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
                        <p className="text-sm text-gray-700 leading-relaxed mb-0">
                          <strong className="text-emerald-700">关键数据：</strong>
                          {topic.highlight}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 核心价值与获取方式 */}
            <section>
              <SectionTitle index="03" title="核心价值与获取方式" subtitle="官方性与数据开放性" />
              <div className="glass-card p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  这份报告的核心价值在于其<strong className="text-emerald-700">官方性与数据开放性</strong>。
                  它由国家级遥感机构牵头编制，系统性地将遥感技术应用于全球尺度的农业、湿地、区域生态和土地覆盖监测，
                  形成了可比对的空间数据产品。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  尤为重要的是，报告所依托的数据产品可在“国家综合地球观测数据共享平台”网站免费获取，
                  供研究机构、政府部门和国际组织下载使用，这极大地提升了其作为公共知识产品的应用价值。
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <a
                    href="http://www.chinageoss.org/gee/2014/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    访问数据共享平台
                    <span>↗</span>
                  </a>
                  <span className="text-xs text-gray-500">www.chinageoss.org/gee/2014/</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <TopicNav
        items={[
          { to: '/professional-books', label: '专业图书' },
          { to: '/professional-books/energy-plant-potential', label: '能源植物发展潜力遥感信息获取与评价' }
        ]}
      />
    </div>
  );
}

export default BookGlobalEcoReport2014;
