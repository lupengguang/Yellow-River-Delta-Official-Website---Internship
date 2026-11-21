import React from 'react';
import { IMG, TopicHero, SectionTitle, TiltCard, RevealRow, TopicNav } from './topicPageKit';

const heroImage = IMG(
  'Observation tower and monitoring station in coastal wetland of Yellow River Delta, drone flying above reed marsh, birds in the sky, sunrise, cinematic nature photography',
  'landscape_16_9'
);

const stats = [
  { value: '10 颗', label: '在轨卫星', note: '8 类 12 项要素' },
  { value: '152 架次', label: '无人机年度巡航', note: '总里程超 1.2 万公里' },
  { value: '91 处', label: '湿地生态环境定位监测站', note: '时间连续自动采集' },
  { value: '300 余处', label: '视频监控点位', note: '18 处搭载 AI 识别' }
];

const layers = [
  {
    title: '天基层',
    badge: '10 颗在轨卫星',
    content:
      '依托 10 颗在轨卫星，对土地资源、湿地资源、海洋环境等 8 类 12 项要素开展月度、季度、年度常态化遥感监测，全年完成数据采集 110 期，提供湿地面积变化、水文格局等宏观底图。'
  },
  {
    title: '空基层',
    badge: '3 套无人机系统',
    content:
      '部署 3 套大型复合翼无人机自动巡航系统，规划重点区域监管、鸟类监测、海上执法等 15 条航线，年度巡航 152 架次、总里程超 1.2 万公里，弥补卫星重访周期与地基固定点位之间的时空空隙。'
  },
  {
    title: '地基（陆域）层',
    badge: '300+ 点位',
    content:
      '建成 1 处空气质量站、4 处气象站、30 处水文自动监测站、91 处湿地生态环境定位监测站，实现水文、土壤、气象、水质等要素的时间连续自动采集。视频监控点位 300 余处，其中 18 处搭载 AI 识别算法，可对东方白鹳、黑嘴鸥等旗舰物种进行自动辨识与计数，部分大型鸟类的识别准确率超过 90%。'
  },
  {
    title: '海基层',
    badge: '2 套雷达预警',
    content:
      '配备 2 套雷达预警系统监测海域船只活动，防范人类干扰；规划布设生态浮标与潮汐观测站，填补海域连续监测的空白。'
  }
];

function EcologicalMonitoring() {
  return (
    <div className="pb-16 min-h-screen">
      <TopicHero
        kicker="生态环境监测"
        title="天空地海一体化监测"
        description="从天基、空基、地基、海基四个维度分层构建，覆盖从宏观景观到个体识别的尺度谱系。"
        image={heroImage}
        alt="黄河口湿地监测站与无人机"
        stats={stats}
      />

      {/* 01 体系架构 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="01"
          title="体系架构：“天空地海”一体化"
          subtitle="不以单一站点或单一物种为单元，而是分层构建"
          accent="blue"
        />
        <div className="glass-card p-6 md:p-8">
          <div className="grid grid-cols-4 gap-2 mb-6">
            {['天', '空', '地', '海'].map((word, index) => (
              <div
                key={word}
                className="group rounded-xl bg-gradient-to-br from-sky-500/90 to-indigo-600/90 text-white text-center py-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/30"
              >
                <p className="text-xl font-bold mb-0 topic-float">{word}</p>
                <p className="text-[10px] opacity-80 mb-0">
                  {['卫星遥感', '无人机', '地面站网', '海域监测'][index]}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-1">
            {layers.map((layer) => (
              <RevealRow key={layer.title} title={layer.title} badge={layer.badge}>
                {layer.content}
              </RevealRow>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 mb-0">
            四个维度覆盖从宏观景观到个体识别的尺度谱系，悬停或聚焦任一图层可展开监测细节。
          </p>
        </div>
      </section>

      {/* 02 数据闭环 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="02"
          title="数据闭环：“监测—研判—指挥”一体化"
          subtitle="监测体系的价值在于数据能否转化为管理动作"
          accent="blue"
        />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            保护区已建成智慧化闭环管理平台，将防火监测、人为活动监管、鸟类智能识别、游客安全告警等场景整合为“监测预警—分析研判—联动指挥”的闭环流程。
          </p>
          <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-0">
            {[
              { step: '01', title: '监测预警', desc: '多源监测数据实时汇聚' },
              { step: '02', title: '分析研判', desc: '平台研判异常事件' },
              { step: '03', title: '联动指挥', desc: '触发巡护或执法响应' }
            ].map((item, index) => (
              <React.Fragment key={item.step}>
                {index > 0 && (
                  <div className="hidden md:flex items-center justify-center w-16 flex-shrink-0">
                    <div className="topic-dash-x w-full" />
                  </div>
                )}
                <div
                  className="group topic-step topic-sheen flex-1 rounded-2xl border border-white/70 bg-white/55 p-5"
                  tabIndex={0}
                >
                  <p className="text-xs font-bold text-sky-600 mb-2">{item.step}</p>
                  <h3 className="text-base font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-0">{item.desc}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            {['防火监测', '人为活动监管', '鸟类智能识别', '游客安全告警'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-xs text-sky-700 transition-all duration-500 hover:-translate-y-0.5 hover:bg-sky-100 hover:shadow-md hover:shadow-sky-500/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4 mb-0">
            AI 识别到的异常鸟类聚集或人为闯入事件，可以经由平台研判后直接触发巡护或执法响应，而非停留在数据报表层面。
          </p>
        </div>
      </section>

      {/* 03 科研合作 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="03"
          title="科研合作与监测能力外溢"
          subtitle="监测能力的提升与科研合作深度绑定"
          accent="blue"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '30+', label: '合作机构', note: '中科院、北师大、复旦等' },
            { value: '11', label: '野外监测与科研教学平台', note: '联合共建' },
            { value: '30+', label: '近五年实施课题', note: '国家自然科学基金、科技部研发计划等' },
            { value: '20+', label: '可推广技术', note: '“刈割+翻耕”、AI 鸟类识别等' }
          ].map((item) => (
            <TiltCard key={item.label} base="glass-card-soft" className="p-5 text-center">
              <p className="text-2xl md:text-3xl font-bold text-sky-700 mb-1 topic-float">
                {item.value}
              </p>
              <p className="text-sm text-gray-700 font-medium mb-1">{item.label}</p>
              <p className="text-xs text-gray-500 mb-0">{item.note}</p>
            </TiltCard>
          ))}
        </div>
        <div className="glass-card p-6 md:p-8 mt-6">
          <p className="text-gray-700 leading-relaxed mb-0">
            保护区联合中科院、北京师范大学、复旦大学等 30 余家机构，建成 11 家野外监测与科研教学平台，近五年实施国家自然科学基金、科技部研发计划等课题
            30 余项，产出“刈割 + 翻耕”治理技术、“AI”鸟类识别等 20
            余项可推广技术。监测数据不仅是管理依据，也成为技术研发的验证基础。
          </p>
        </div>
      </section>

      {/* 04 口径说明 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="04"
          title="关于鸟类种数的口径说明"
          subtitle="不同来源的数据差异来自统计时点、调查范围与发布口径"
          accent="blue"
        />
        <div className="glass-panel p-6 md:p-8">
          <div className="grid grid-cols-3 gap-3 mb-5">
            {['376 种', '403 种', '406 种'].map((value) => (
              <div
                key={value}
                className="group rounded-2xl border border-white/70 bg-white/60 py-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/10"
              >
                <p className="text-xl md:text-2xl font-bold text-sky-700 mb-0 topic-float">{value}</p>
                <p className="text-[11px] text-gray-500 mb-0">2025—2026 年间不同来源</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            不同来源在 2025—2026 年间给出的鸟类种数存在 376 种、403 种、406
            种等差异，差异源于统计时点、调查范围（是否含海域或外围记录）以及数据发布口径的不同。
          </p>
          <div className="rounded-xl border border-sky-100 bg-sky-50/80 px-4 py-3">
            <p className="text-sm text-sky-900 mb-0">
              引用时宜注明数据来源与统计时点，不宜将不同口径的数据直接比较或混用。
            </p>
          </div>
        </div>
      </section>

      <TopicNav
        items={[
          { to: '/national-park-construction', label: '国家公园建设' },
          { to: '/wetland-restoration', label: '湿地保护修复' }
        ]}
      />
    </div>
  );
}

export default EcologicalMonitoring;
