import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner, SectionTitle, TopicNav } from './topicPageKit';

const cover = `${import.meta.env.BASE_URL}images/庄大方 江东 刘磊能源植物发展潜力遥感信息获取与评价.png`;

const basicInfo = [
  { label: '作者', value: '庄大方、江东、刘磊' },
  { label: '出版社', value: '气象出版社' },
  { label: '出版时间', value: '2013 年 6 月 1 日' },
  { label: 'ISBN', value: '978-7-5029-5731-5' },
  { label: '定价', value: '35.00 元' },
  { label: '载体形态', value: '平装，16 开，125 页正文另有 22 页图版，约 26 cm' },
  { label: '中图分类号', value: 'S56-39（遥感技术在生物能源植物信息获取与评价中的应用）' },
  {
    label: '英文题名',
    value: 'Remote Sensing Information Acquisition and Evaluation of Energy Plant Development Potential'
  }
];

const potentialDimensions = [
  {
    index: '1',
    title: '土地资源潜力',
    question: '哪里有地可种',
    description: '识别宜能边际土地的空间分布与规模，回答能源植物种植的土地空间问题。'
  },
  {
    index: '2',
    title: '净能量潜力',
    question: '种出来的能源是否划算',
    description: '核算产出能量是否大于投入能量，评估能源植物规模化发展的净能量效益。'
  },
  {
    index: '3',
    title: '净环境效益',
    question: '种植是否对环境友好',
    description: '评估生命周期内的净排放，分析能源植物发展对生态环境的综合影响。'
  }
];

const chapters = [
  {
    no: '第 1 章',
    title: '能源植物发展潜力研究进展',
    summary: '奠定研究基础',
    items: [
      '分析能源植物开发利用的需求',
      '梳理国内外发展现状',
      '总结相关研究动态'
    ]
  },
  {
    no: '第 2 章',
    title: '能源植物发展关键要素的遥感信息获取',
    summary: '全书的技术基础章节',
    items: [
      '宜能边际土地资源的遥感自动识别',
      '植被类型信息的遥感获取',
      '地表水热参数（如温度、水分）的遥感反演'
    ]
  },
  {
    no: '第 3 章',
    title: '能源植物发展的土地资源潜力分析与评价',
    summary: '构建土地资源潜力评价方法',
    items: [
      '应用于全国尺度与重点地区',
      '估算主要能源植物的土地资源规模、分布与潜力',
      '对典型能源植物进行具体分析'
    ]
  },
  {
    no: '第 4 章',
    title: '能源植物规模化发展的净能源和环境效益分析',
    summary: '引入生命周期视角',
    items: [
      '构建净能量平衡模型和净排放模型',
      '以黄连木为例开展空间信息支持下的生物液体燃料生命周期分析'
    ]
  },
  {
    no: '第 5 章',
    title: '能源植物发展潜力分析及应用案例',
    summary: '方法应用于具体区域',
    items: [
      '西南五省（区、市）能源植物发展潜力研究',
      '长江中下游地区冬闲田能源植物发展潜力研究',
      '提出全国能源植物发展潜力的综合布局建议'
    ]
  }
];

function BookEnergyPlantPotential() {
  return (
    <div className="pb-16 min-h-screen">
      <PageBanner
        kicker="PROFESSIONAL BOOKS"
        title="能源植物发展潜力遥感信息获取与评价"
        description="系统构建利用遥感与 GIS 技术评估能源植物发展潜力的技术框架，回答“在哪里能种”以及“种植的净效益如何”。"
        chips={['庄大方、江东、刘磊', '气象出版社 · 2013', '遥感与 GIS']}
      />

      <section className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 封面与快捷信息 */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 glass-panel p-5">
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-emerald-500/10">
                <img
                  src={cover}
                  alt="《能源植物发展潜力遥感信息获取与评价》封面"
                  className="w-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">遥感监测</span>
                <span className="rounded-full bg-rose-500/90 px-3 py-1 text-sm font-semibold text-white shadow-md">
                  ¥ 35.00
                </span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-gray-500 mb-0">
                平装 · 16 开 · 125 页正文 + 22 页图版
                <br />
                ISBN 978-7-5029-5731-5
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
                《能源植物发展潜力遥感信息获取与评价》是
                <strong className="text-emerald-700">庄大方、江东、刘磊</strong>合著的一部学术专著，由
                <strong className="text-emerald-700">气象出版社</strong>于
                <strong className="text-emerald-700">2013 年 6 月</strong>出版。
              </p>
              <p className="text-gray-600 leading-relaxed mb-0">
                这本书系统构建了利用遥感与 GIS 技术评估能源植物发展潜力的技术框架，
                核心目标是回答“在哪里能种”以及“种植的净效益如何”这两个关键问题。
              </p>
            </div>

            {/* 基本信息 */}
            <section>
              <SectionTitle index="01" title="基本信息" subtitle="出版信息与载体形态" />
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

            {/* 内容架构与核心方法 */}
            <section>
              <SectionTitle
                index="02"
                title="内容架构与核心方法"
                subtitle="遥感与 GIS 支持下的多要素综合评估模型"
              />
              <div className="glass-card p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  本书的核心方法论是：在<strong className="text-emerald-700">遥感（RS）</strong>与
                  <strong className="text-emerald-700">地理信息系统（GIS）</strong>的技术支持下，
                  综合考虑<strong className="text-emerald-700">自然限制要素</strong>（如土地、水热条件）和
                  <strong className="text-emerald-700">社会经济限制要素</strong>，构建一个多要素综合评估模型，
                  从三个递进的维度系统评价能源植物的发展潜力。
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {potentialDimensions.map((dimension) => (
                    <div
                      key={dimension.title}
                      className="rounded-2xl border border-white/70 bg-white/55 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/10"
                    >
                      <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white shadow-md">
                        {dimension.index}
                      </span>
                      <h4 className="text-base font-semibold text-gray-800 mb-1">{dimension.title}</h4>
                      <p className="text-xs font-medium text-emerald-600 mb-2">{dimension.question}</p>
                      <p className="text-sm text-gray-600 leading-relaxed mb-0">{dimension.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
                  <p className="text-sm text-gray-700 leading-relaxed mb-0">
                    其研究背景源于中国的现实约束：耕地资源极其有限，因此发展生物能源必须依赖
                    <strong className="text-emerald-700">宜能边际土地</strong>（如冬闲田、退化土地等），
                    而不能与粮食生产争地。
                  </p>
                </div>
              </div>
            </section>

            {/* 章节概览 */}
            <section>
              <SectionTitle
                index="03"
                title="章节概览"
                subtitle="全书共 5 章，从背景、技术、单项评估到综合应用逐步展开"
              />
              <div className="space-y-4">
                {chapters.map((chapter) => (
                  <div key={chapter.no} className="glass-card p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/10">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                        {chapter.no}
                      </span>
                      <h3 className="text-base font-semibold text-gray-800 mb-0">{chapter.title}</h3>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] text-emerald-700">
                        {chapter.summary}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-0">
                      {chapter.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 核心价值 */}
            <section>
              <SectionTitle index="04" title="核心价值与定位" subtitle="从土地识别到能量核算的完整技术体系" />
              <div className="glass-card p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  本书的突出特点在于其<strong className="text-emerald-700">系统性和实用性</strong>。
                  它并非孤立地讨论遥感技术，而是将其贯穿于从“土地识别”到“能量核算”再到“环境效益评估”的完整评估链条中，
                  形成了一个可操作的技术体系。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  其应用价值明确指向决策支持：通过估算全国及重点区域发展主要能源植物的土地资源规模与分布，
                  为政府制定生物能源产业政策、规划能源植物种植布局提供了基础数据支持和可参照的技术方法。
                </p>
                <p className="text-gray-600 leading-relaxed mb-0">
                  对于从事遥感应用、生物能源规划和土地资源管理的研究人员与业务部门技术人员而言，
                  本书提供了一个将空间信息技术与能源植物潜力评估相结合的完整范例。
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <TopicNav
        items={[
          { to: '/professional-books', label: '专业图书' },
          { to: '/professional-books/vulnerability-atlas', label: '亚非欧部分国家和地区脆弱性评价图集' }
        ]}
      />
    </div>
  );
}

export default BookEnergyPlantPotential;
