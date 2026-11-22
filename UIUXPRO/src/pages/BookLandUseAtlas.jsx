import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner, SectionTitle, TopicNav } from './topicPageKit';

const cover = `${import.meta.env.BASE_URL}images/张增祥等中国土地利用遥感监测图集.png`;

const basicInfo = [
  { label: '作者 / 编制', value: '张增祥、赵晓丽、汪潇 等' },
  { label: '出版社', value: '星球地图出版社' },
  { label: '出版时间', value: '2012 年（部分记录精确至 2012 年 6 月或 8 月）' },
  { label: 'ISBN', value: '9787547108567' },
  { label: '定价', value: '120.00 元' },
  { label: '载体形态', value: '精装，尺寸约 28 × 19 cm' },
  { label: '中图分类号', value: 'F321.1-64（土地利用遥感地面调查图集）' },
  { label: '时间跨度', value: '20 世纪 80 年代末至 2010 年' }
];

const landTypes = ['耕地', '林地', '草地', '建设用地', '未利用土地'];

function BookLandUseAtlas() {
  return (
    <div className="pb-16 min-h-screen">
      <PageBanner
        kicker="PROFESSIONAL BOOKS"
        title="中国土地利用遥感监测图集"
        description="以遥感技术为支撑，系统记录和展示中国土地利用状况及其动态变化过程。"
        chips={['张增祥、赵晓丽、汪潇 等', '星球地图出版社 · 2012', '20 世纪 80 年代末—2010']}
      />

      <section className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 封面与快捷信息 */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 glass-panel p-5">
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-emerald-500/10">
                <img
                  src={cover}
                  alt="《中国土地利用遥感监测图集》封面"
                  className="w-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">遥感监测</span>
                <span className="rounded-full bg-rose-500/90 px-3 py-1 text-sm font-semibold text-white shadow-md">
                  ¥ 120.00
                </span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-gray-500 mb-0">
                精装 · 约 28 × 19 cm
                <br />
                ISBN 9787547108567
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
                《中国土地利用遥感监测图集》由
                <strong className="text-emerald-700">张增祥、赵晓丽、汪潇</strong>等编制，
                <strong className="text-emerald-700">星球地图出版社</strong>于
                <strong className="text-emerald-700">2012 年</strong>出版。
                它是一部以遥感技术为支撑，系统记录和展示中国土地利用状况及其动态变化过程的大型专业图集。
              </p>
            </div>

            {/* 基本信息 */}
            <section>
              <SectionTitle index="01" title="基本信息" subtitle="出版信息与图集规格" />
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

            {/* 内容架构与特色 */}
            <section>
              <SectionTitle
                index="02"
                title="内容架构与特色"
                subtitle="呈现 20 世纪 80 年代末至 2010 年中国土地利用的宏观演变"
              />
              <div className="space-y-5">
                <div className="glass-card p-6 md:p-8">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3">整体与类型相结合</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    既展示了全国土地利用的整体特点，也分别剖析了主要地类的特点及其变化过程。
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
                </div>

                <div className="glass-card p-6 md:p-8">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3">多媒介融合呈现</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-0">
                    图集的一大特色是“专题图、图像、照片相结合”。对于典型土地利用现象，
                    它汇编了相同时期的遥感影像和景观照片进行对照，使抽象的数据和变化过程变得直观可感，
                    有助于读者对土地利用状况形成客观、立体的认知。
                  </p>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    {['专题图', '遥感影像', '景观照片'].map((media) => (
                      <div
                        key={media}
                        className="rounded-2xl border border-white/70 bg-white/55 px-3 py-4 text-sm font-medium text-gray-700 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-500/10"
                      >
                        {media}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 作者背景与学术价值 */}
            <section>
              <SectionTitle index="03" title="作者背景与学术价值" subtitle="从基础数据库到可视化公共知识产品" />
              <div className="glass-card p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  主编<strong className="text-emerald-700">张增祥</strong>是中国科学院遥感与数字地球研究所的研究员、博士生导师，
                  长期深耕于资源环境遥感应用领域。他负责组织完成了
                  <strong className="text-emerald-700">时间序列的中国 1:10 万比例尺土地利用数据库</strong>
                  等基础性科学数据建设，这些数据库已成为相关领域规划、管理和研究的重要数据基础。
                  该图集正是其团队在这一深厚数据积累基础上，将海量空间数据转化为可视化公共知识产品的重要成果。
                </p>
                <p className="text-gray-600 leading-relaxed mb-0">
                  从更广阔的视野看，这部图集属于张增祥研究员团队“土地资源与环境遥感监测”系列专题著作的一部分，
                  与《中国土地利用遥感监测》（专著）、《中国土地覆盖遥感监测图集》等作品共同构成了一个完整的成果体系，
                  在我国土地利用遥感监测领域具有基础性的参考价值。
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <TopicNav
        items={[
          { to: '/professional-books', label: '专业图书' },
          { to: '/professional-books/global-eco-report-2015', label: '全球生态环境遥感监测2015年度报告' }
        ]}
      />
    </div>
  );
}

export default BookLandUseAtlas;
