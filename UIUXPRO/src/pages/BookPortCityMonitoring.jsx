import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner, SectionTitle, TopicNav } from './topicPageKit';

const cover = `${import.meta.env.BASE_URL}images/侯西勇宋洋徐新良......“一带一路”港口城市生态环境遥感监测.png`;

const basicInfo = [
  { label: '作者', value: '侯西勇、宋洋、徐新良' },
  { label: '出版社', value: '科学出版社' },
  { label: '出版时间', value: '2018 年 7 月' },
  { label: 'ISBN', value: '978-7-03-051393-9' },
  { label: '定价', value: '70.00 元' },
  { label: '中图分类号', value: 'X87' },
  { label: '监测对象', value: '“21 世纪海上丝绸之路”沿线 25 个港口及所在城市' }
];

const chapters = [
  {
    no: '第 1 章',
    title: '重点港口城市生态环境遥感监测方法',
    description: '介绍港口及所在城市生态环境遥感监测的数据源、指标体系与技术方法。'
  },
  {
    no: '第 2 章',
    title: '重点港口城市生态环境现状特征分析',
    description: '从港口与城市两个层面，分析重点港口城市的生态环境现状与空间特征。'
  },
  {
    no: '第 3 章',
    title: '重点港口城市综合特征与限制因子分析',
    description: '对比港口城市的发展潜力与限制因子，归纳不同类型港口城市的综合特征。'
  }
];

function BookPortCityMonitoring() {
  return (
    <div className="pb-16 min-h-screen">
      <PageBanner
        kicker="PROFESSIONAL BOOKS"
        title="“一带一路”港口城市生态环境遥感监测"
        description="针对“21 世纪海上丝绸之路”沿线 25 个港口及其所在城市，开展生态环境特征遥感监测与评估。"
        chips={['侯西勇、宋洋、徐新良', '科学出版社 · 2018', '25 个港口']}
      />

      <section className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 封面与快捷信息 */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 glass-panel p-5">
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-emerald-500/10">
                <img
                  src={cover}
                  alt="《“一带一路”港口城市生态环境遥感监测》封面"
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
                ISBN 978-7-03-051393-9
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
                《“一带一路”港口城市生态环境遥感监测》由
                <strong className="text-emerald-700">侯西勇、宋洋、徐新良</strong>著，
                <strong className="text-emerald-700">科学出版社</strong>于
                <strong className="text-emerald-700">2018 年 7 月</strong>出版。
              </p>
            </div>

            {/* 基本信息 */}
            <section>
              <SectionTitle index="01" title="基本信息" subtitle="出版信息与监测对象" />
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
              <SectionTitle index="02" title="内容简介" subtitle="港口与所在城市的生态环境特征" />
              <div className="glass-card p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-0">
                  本书应用遥感、地理信息系统等技术和方法，基于多种传感器获取的卫星遥感影像和多类型地图资料等信息，
                  针对“21 世纪海上丝绸之路”沿线国家和地区的
                  <strong className="text-emerald-700">25 个港口</strong>，
                  进行港口及其所在城市生态环境特征遥感监测与评估，
                  以及港口城市发展潜力与限制因子特征对比分析。
                </p>
              </div>
            </section>

            {/* 章节概览 */}
            <section>
              <SectionTitle index="03" title="章节概览" subtitle="方法、现状特征与限制因子三个层面" />
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
          { to: '/professional-books/mongolia-russia-monitoring', label: '“一带一路”蒙俄区生态环境遥感监测' },
          { to: '/professional-books', label: '专业图书' }
        ]}
      />
    </div>
  );
}

export default BookPortCityMonitoring;
