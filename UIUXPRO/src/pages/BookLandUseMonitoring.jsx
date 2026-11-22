import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner, SectionTitle, TopicNav } from './topicPageKit';

const cover = `${import.meta.env.BASE_URL}images/张增祥 赵晓丽王潇..中国土地利用遥感监测.png`;

const basicInfo = [
  { label: '作者 / 编制', value: '张增祥、赵晓丽、汪潇 等' },
  { label: '出版社', value: '星球地图出版社' },
  { label: '出版时间', value: '2012 年' },
  { label: 'ISBN', value: '9787547108550' },
  { label: '定价', value: '200.00 元' },
  { label: '主题', value: '土地利用遥感监测' }
];

const landTypes = ['耕地', '林地', '草地', '建设用地', '未利用土地'];

function BookLandUseMonitoring() {
  return (
    <div className="pb-16 min-h-screen">
      <PageBanner
        kicker="PROFESSIONAL BOOKS"
        title="中国土地利用遥感监测"
        description="以时间序列土地利用遥感数据为基础，系统记录和分析中国土地利用状况及其动态变化过程。"
        chips={['张增祥 等', '星球地图出版社 · 2012', '1:10 万土地利用数据库']}
      />

      <section className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 封面与快捷信息 */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 glass-panel p-5">
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-emerald-500/10">
                <img
                  src={cover}
                  alt="《中国土地利用遥感监测》封面"
                  className="w-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">土地利用相关</span>
                <span className="rounded-full bg-rose-500/90 px-3 py-1 text-sm font-semibold text-white shadow-md">
                  ¥ 200.00
                </span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-gray-500 mb-0">
                星球地图出版社 · 2012 年
                <br />
                ISBN 9787547108550
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
              <p className="text-gray-700 leading-relaxed mb-0">
                《中国土地利用遥感监测》由
                <strong className="text-emerald-700">张增祥、赵晓丽、汪潇</strong>等编制，
                <strong className="text-emerald-700">星球地图出版社</strong>于
                <strong className="text-emerald-700">2012 年</strong>出版。
                该书以遥感技术为支撑，系统记录和分析中国土地利用状况及其动态变化过程，
                是张增祥研究员团队土地利用遥感监测系列成果中的重要专著。
              </p>
            </div>

            {/* 基本信息 */}
            <section>
              <SectionTitle index="01" title="基本信息" subtitle="书目信息依据公开馆藏记录整理" />
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

            {/* 内容定位 */}
            <section>
              <SectionTitle index="02" title="内容定位" subtitle="全国尺度土地利用状况与动态变化" />
              <div className="glass-card p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  本书围绕中国土地利用的宏观格局与变化过程展开，依托长期积累的遥感监测数据，
                  从全国尺度分析土地利用的总体特征，并分别讨论主要地类的分布特点与变化趋势。
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {landTypes.map((type) => (
                    <span
                      key={type}
                      className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-sm text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed mb-0">
                  与以图面展示为主的图集相比，本书更侧重于监测方法、数据组织、地类变化过程与规律的系统阐述，
                  可与《中国土地利用遥感监测图集》配合阅读。
                </p>
              </div>
            </section>

            {/* 数据基础与关联成果 */}
            <section>
              <SectionTitle index="03" title="数据基础与关联成果" subtitle="时间序列 1:10 万土地利用数据库" />
              <div className="glass-card p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  张增祥研究员长期从事资源环境遥感应用研究，负责组织完成了
                  <strong className="text-emerald-700">时间序列的中国 1:10 万比例尺土地利用数据库</strong>
                  等基础性科学数据建设。本书正是这一数据积累在专著层面的系统总结。
                </p>
                <p className="text-gray-600 leading-relaxed mb-0">
                  该书与《中国土地利用遥感监测图集》《中国土地覆盖遥感监测》《中国城市扩展遥感监测》等作品
                  共同构成“土地资源与环境遥感监测”系列成果体系，在我国土地利用遥感监测领域具有基础性参考价值。
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <TopicNav
        items={[
          { to: '/professional-books/land-use-atlas', label: '中国土地利用遥感监测图集' },
          { to: '/professional-books', label: '专业图书' }
        ]}
      />
    </div>
  );
}

export default BookLandUseMonitoring;
