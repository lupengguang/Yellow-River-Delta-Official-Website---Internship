import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner, SectionTitle, TopicNav } from './topicPageKit';

const cover = `${import.meta.env.BASE_URL}images/徐新良,李静,王勇....'一带一路”蒙俄区生态环境逼感监测.png`;

const basicInfo = [
  { label: '作者', value: '徐新良、李静、王勇、蔡红艳 等' },
  { label: '出版社', value: '科学出版社' },
  { label: '出版时间', value: '2018 年 7 月' },
  { label: 'ISBN', value: '978-7-03-051279-6' },
  { label: '定价', value: '70.00 元' },
  { label: '中图分类号', value: 'X87' },
  { label: '主题', value: '区域生态环境遥感监测' }
];

const chapters = [
  {
    no: '第 1 章',
    title: '生态环境特点与社会经济发展背景',
    description: '梳理蒙古与俄罗斯的区位特征、自然环境本底及社会经济发展现状，明确中蒙俄经济走廊的合作背景。'
  },
  {
    no: '第 2 章',
    title: '主要生态资源分布与生态环境限制',
    description: '分析土地覆盖、气候与水资源、农田和森林等主要生态资源的空间分布，归纳区域开发面临的生态环境限制。'
  },
  {
    no: '第 3 章',
    title: '重要节点城市与港口分析',
    description: '围绕重要节点城市与港口，评估其生态环境特征、城市扩展状况及发展潜力。'
  },
  {
    no: '第 4 章',
    title: '典型经济合作走廊和交通运输通道分析',
    description: '以典型经济合作走廊和交通运输通道为对象，分析廊道沿线的生态资源分布、环境约束与潜在生态风险。'
  }
];

function BookMongoliaRussiaMonitoring() {
  return (
    <div className="pb-16 min-h-screen">
      <PageBanner
        kicker="PROFESSIONAL BOOKS"
        title="“一带一路”蒙俄区生态环境遥感监测"
        description="利用遥感技术获取蒙古和俄罗斯区域多要素地表信息，为“中蒙俄经济走廊”建设提供生态环境决策依据。"
        chips={['徐新良 等', '科学出版社 · 2018', '中蒙俄经济走廊']}
      />

      <section className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 封面与快捷信息 */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 glass-panel p-5">
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-emerald-500/10">
                <img
                  src={cover}
                  alt="《“一带一路”蒙俄区生态环境遥感监测》封面"
                  className="w-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">一带一路</span>
                <span className="rounded-full bg-rose-500/90 px-3 py-1 text-sm font-semibold text-white shadow-md">
                  ¥ 70.00
                </span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-gray-500 mb-0">
                科学出版社 · 2018 年 7 月
                <br />
                ISBN 978-7-03-051279-6
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
                《“一带一路”蒙俄区生态环境遥感监测》由
                <strong className="text-emerald-700">徐新良、李静、王勇、蔡红艳</strong>等编著，
                <strong className="text-emerald-700">科学出版社</strong>于
                <strong className="text-emerald-700">2018 年 7 月</strong>出版。
              </p>
            </div>

            {/* 基本信息 */}
            <section>
              <SectionTitle index="01" title="基本信息" subtitle="出版信息与主题分类" />
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

            {/* 内容简介 */}
            <section>
              <SectionTitle index="02" title="内容简介" subtitle="宏观、动态的蒙俄区多要素地表信息" />
              <div className="glass-card p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  本书利用遥感技术手段，在获取宏观、动态的蒙古和俄罗斯区域多要素地表信息的基础上，
                  开展生态环境遥感监测评价，系统总结蒙古和俄罗斯的
                  <strong className="text-emerald-700">生态资源分布与生态环境限制</strong>、
                  <strong className="text-emerald-700">重要节点城市与港口</strong>、
                  <strong className="text-emerald-700">典型经济合作走廊和交通运输通道</strong>。
                </p>
                <p className="text-gray-600 leading-relaxed mb-0">
                  相关成果不仅可为科学认知蒙俄区生态环境本底状况、发现其时空变化特点和规律提供数据基础，
                  还将为“一带一路”倡议实施过程中“中蒙俄经济走廊”建设提供生态环境影响及潜在生态环境风险等方面的决策依据。
                </p>
              </div>
            </section>

            {/* 章节概览 */}
            <section>
              <SectionTitle index="03" title="章节概览" subtitle="四章构成区域生态环境监测框架" />
              <div className="space-y-4">
                {chapters.map((chapter) => (
                  <div
                    key={chapter.no}
                    className="glass-card p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/10"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                        {chapter.no}
                      </span>
                      <h3 className="text-base font-semibold text-gray-800 mb-0">{chapter.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-0">{chapter.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <TopicNav
        items={[
          { to: '/professional-books/port-city-monitoring', label: '“一带一路”港口城市生态环境遥感监测' },
          { to: '/professional-books', label: '专业图书' }
        ]}
      />
    </div>
  );
}

export default BookMongoliaRussiaMonitoring;
