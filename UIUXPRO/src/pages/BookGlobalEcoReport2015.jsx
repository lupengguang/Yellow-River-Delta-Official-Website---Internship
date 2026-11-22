import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner, SectionTitle, TopicNav } from './topicPageKit';

const cover = `${import.meta.env.BASE_URL}images/李加洪 施建成等全球生态环境遥感监测2015年年度报告.png`;

const basicInfo = [
  { label: '作者 / 编著', value: '李加洪、施建成 等' },
  { label: '出版社', value: '科学出版社' },
  {
    label: '出版时间',
    value: '各来源记录略有差异，主要记录为 2016 年，部分书目信息显示为 2017 年 5 月'
  },
  { label: 'ISBN', value: '978-7-03-051278-9' },
  { label: '定价', value: '238.00 元' },
  { label: '页数', value: '230 页' },
  { label: '中图分类号', value: 'X835' },
  { label: '编制单位', value: '科技部国家遥感中心' }
];

const topics = [
  {
    no: '第一部分',
    title: '“一带一路”生态环境状况',
    badge: '重大倡议 · 生态本底',
    intro:
      '旨在为“一带一路”倡议的规划与实施提供基础性的生态环境本底信息。',
    sections: [
      {
        label: '数据基础',
        items: [
          '主要利用 2014 年国内外卫星遥感数据',
          '生成覆盖土地覆盖、植被生长状态、农情、海洋环境等方面的 31 个生态环境遥感专题数据产品'
        ]
      },
      {
        label: '陆域分析',
        items: [
          '系统评估 7 大区域、6 个经济走廊及 26 个重要节点城市',
          '分析生态环境基本特征、土地利用程度与约束性因素'
        ]
      },
      {
        label: '海域分析',
        items: ['对 12 个海区、13 个近海海域和 25 个港口城市的生态环境状况进行分析']
      }
    ],
    highlight:
      '相关成果不仅为“一带一路”倡议的规划制定提供现势性信息，也作为未来动态监测评估的基准，并在报告最后提出了相关规划建议。'
  },
  {
    no: '第二部分',
    title: '全球大宗粮油作物生产形势',
    badge: '延续专题 · 粮食安全',
    intro:
      '该专题是上一年度监测的延续，旨在独立客观地反映全球粮油生产状况，服务于全球粮食安全与贸易稳定。',
    sections: [
      {
        label: '监测作物',
        items: ['聚焦全球产量最高的玉米、小麦、水稻三种谷物，以及最重要的油料作物大豆']
      },
      {
        label: '监测范围',
        items: [
          '基于多源遥感与气象数据',
          '对全球 65 个农业生态区的气象条件进行分析',
          '对 7 个全球农业主产区及中国 7 个农业分区的作物种植与胁迫状况进行分析'
        ]
      },
      {
        label: '核心产出',
        items: ['在监测全球粮食产量与供应形势的基础上，对 2016 年的全球粮油生产形势进行了展望']
      }
    ]
  }
];

function BookGlobalEcoReport2015() {
  return (
    <div className="pb-16 min-h-screen">
      <PageBanner
        kicker="PROFESSIONAL BOOKS"
        title="全球生态环境遥感监测 2015 年度报告"
        description="聚焦“一带一路”生态环境状况与全球大宗粮油作物生产形势两大专题，用遥感服务宏观决策。"
        chips={['李加洪、施建成 等', '科学出版社', '两大专题']}
      />

      <section className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 封面与快捷信息 */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 glass-panel p-5">
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-emerald-500/10">
                <img
                  src={cover}
                  alt="《全球生态环境遥感监测2015年度报告》封面"
                  className="w-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">遥感监测</span>
                <span className="rounded-full bg-rose-500/90 px-3 py-1 text-sm font-semibold text-white shadow-md">
                  ¥ 238.00
                </span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-gray-500 mb-0">
                230 页 · 科学出版社
                <br />
                ISBN 978-7-03-051278-9
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
                《全球生态环境遥感监测 2015 年度报告》由
                <strong className="text-emerald-700">李加洪、施建成</strong>等编著，
                <strong className="text-emerald-700">科学出版社</strong>出版，
                是科技部国家遥感中心发布的年度系列报告之一。
              </p>
              <p className="text-gray-600 leading-relaxed mb-0">
                该报告延续了关注全球生态环境热点与重点区域的传统，2015 年度聚焦于
                <strong className="text-emerald-700">“一带一路”生态环境状况</strong>与
                <strong className="text-emerald-700">全球大宗粮油作物生产形势</strong>两大专题。
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
                title="内容架构：两大核心专题"
                subtitle="与 2014 年度报告涵盖四个专题不同，2015 年度报告深度聚焦两个议题"
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
                    <div className="mt-4 space-y-4">
                      {topic.sections.map((section) => (
                        <div key={section.label} className="rounded-2xl border border-white/70 bg-white/55 p-4">
                          <h4 className="text-sm font-semibold text-emerald-700 mb-2">{section.label}</h4>
                          <ul className="space-y-2 mb-0">
                            {section.items.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {topic.highlight && (
                      <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
                        <p className="text-sm text-gray-700 leading-relaxed mb-0">{topic.highlight}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 核心价值 */}
            <section>
              <SectionTitle index="03" title="核心价值与数据获取" subtitle="官方性、专题性与数据开放性" />
              <div className="glass-card p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  这份报告的核心价值在于其<strong className="text-emerald-700">官方性、专题性与数据的开放性</strong>。
                  它由国家级遥感机构牵头，将遥感技术精准应用于“一带一路”这一重大倡议的生态环境本底评估，
                  以及全球粮食安全的常态化监测中，体现了遥感服务宏观决策的实用价值。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  尤为重要的是，报告所依托的全部数据产品与报告全文均通过“国家综合地球观测数据共享平台”免费开放获取，
                  可供研究机构、政府部门及国际组织下载使用，并承诺与相关国家无偿共享，以共同促进区域可持续发展。
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <a
                    href="http://www.chinageoss.org/geoarc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    访问数据共享平台
                    <span>↗</span>
                  </a>
                  <span className="text-xs text-gray-500">www.chinageoss.org/geoarc</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <TopicNav
        items={[
          { to: '/professional-books', label: '专业图书' },
          { to: '/professional-books/global-eco-report-2014', label: '全球生态环境遥感监测2014年度报告' }
        ]}
      />
    </div>
  );
}

export default BookGlobalEcoReport2015;
