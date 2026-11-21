import React from 'react';
import { IMG, TopicHero, SectionTitle, TiltCard, RevealRow, TopicNav } from './topicPageKit';

const heroImage = IMG(
  'Ecological water replenishment canal flowing into restored coastal wetland, dense reeds, swans on water, morning light, environmental restoration, cinematic photography',
  'landscape_16_9'
);

const stats = [
  { value: '8.6亿m³+', label: '“十四五”以来累计生态补水', note: '近三年年均超 1.7 亿 m³' },
  { value: '13.1万亩', label: '互花米草累计治理', note: '清除比例 99%' },
  { value: '5.2万亩', label: '恢复盐地碱蓬', note: '另有海草床 1500 亩' },
  { value: '15.6亿元', label: '湿地保护修复累计投资', note: '实施 18 个修复项目' }
];

const metrics = [
  { value: '241 公里', label: '累计疏通水系' },
  { value: '76 公里', label: '疏通潮沟' },
  { value: '41.6 公里', label: '修筑恢复生态堤坝' },
  { value: '8.6 亿m³', label: '“十四五”以来累计补水' },
  { value: '1.7 亿m³', label: '近三年年均补水' },
  { value: '7.4 万亩', label: '新增淡水沼泽湿地' },
  { value: '30 万亩+', label: '淡水盐沼湿地总面积' }
];

function WetlandRestoration() {
  return (
    <div className="pb-16 min-h-screen">
      <TopicHero
        kicker="湿地保护修复"
        title="让水进得来、留得住、流得动"
        description="围绕水文连通与入侵物种治理两条主线，实践“陆海统筹、系统修复、综合治理”。"
        image={heroImage}
        alt="生态补水与湿地修复"
        stats={stats}
      />

      {/* 01 问题诊断与修复逻辑 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="01"
          title="问题诊断与修复逻辑"
          subtitle="两大胁迫因子，对应两条修复主线"
          accent="teal"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group glass-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-9 h-9 rounded-xl bg-teal-500/15 text-teal-700 flex items-center justify-center font-bold">
                1
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-0">盐水上溯与植被退化</h3>
            </div>
            <p className="text-sm text-gray-600 mb-0">
              淡水补给不足导致盐水上溯与植被退化，是湿地面临的核心胁迫之一。
            </p>
            <div className="hover-expand">
              <div className="pt-3 mt-3 border-t border-teal-100 text-sm text-gray-600">
                修复主线：以生态补水与水系连通恢复水文本底。
              </div>
            </div>
          </div>

          <div className="group glass-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-9 h-9 rounded-xl bg-cyan-500/15 text-cyan-700 flex items-center justify-center font-bold">
                2
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-0">互花米草入侵</h3>
            </div>
            <p className="text-sm text-gray-600 mb-0">
              互花米草入侵挤占光滩和原生植被，改变湿地生物群落结构。
            </p>
            <div className="hover-expand">
              <div className="pt-3 mt-3 border-t border-teal-100 text-sm text-gray-600">
                修复主线：以入侵物种清除与原生植被恢复重建生物群落结构。
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel mt-6 p-6 md:p-8 text-center">
          <p className="text-xs text-gray-500 mb-2">总体模式</p>
          <p className="topic-gradient-text text-xl md:text-3xl font-bold mb-0">
            陆海统筹 · 系统修复 · 综合治理
          </p>
        </div>
      </section>

      {/* 02 水文连通与生态补水 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="02"
          title="水文连通与生态补水"
          subtitle="第一步是让水“进得来、留得住、流得动”"
          accent="teal"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TiltCard base="glass-card-soft" className="p-6 md:p-8 text-center">
            <p className="text-xs text-gray-500 mb-2">引提水能力</p>
            <div className="flex items-end justify-center gap-3">
              <div>
                <p className="text-lg md:text-xl font-semibold text-gray-400 mb-0">不足 40</p>
                <p className="text-[11px] text-gray-400 mb-0">m³/秒</p>
              </div>
              <span className="text-teal-600 text-2xl leading-none transition-transform duration-500 hover:translate-x-1">
                →
              </span>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-teal-700 mb-0 topic-float">131</p>
                <p className="text-[11px] text-teal-600 mb-0">m³/秒</p>
              </div>
            </div>
          </TiltCard>

          <TiltCard base="glass-card-soft" className="p-6 md:p-8 text-center">
            <p className="text-xs text-gray-500 mb-2">主要湿地全面补水时间</p>
            <div className="flex items-end justify-center gap-3">
              <div>
                <p className="text-lg md:text-xl font-semibold text-gray-400 mb-0">9 天</p>
                <p className="text-[11px] text-gray-400 mb-0">补水前</p>
              </div>
              <span className="text-teal-600 text-2xl leading-none">→</span>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-teal-700 mb-0 topic-float">4 天</p>
                <p className="text-[11px] text-teal-600 mb-0">补水后</p>
              </div>
            </div>
          </TiltCard>
        </div>

        <div className="glass-card p-6 md:p-8 mt-6">
          <p className="text-gray-700 leading-relaxed">
            水文恢复直接改变了湿地生境的可及性：此前因缺水而退化的淡水沼泽重新获得稳定水源，新增淡水沼泽湿地 7.4
            万亩，淡水盐沼湿地总面积超过 30 万亩。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="group rounded-xl border border-white/70 bg-white/50 p-4 text-center transition-all duration-500 hover:-translate-y-1 hover:border-teal-200 hover:bg-white/70 hover:shadow-lg hover:shadow-teal-500/10"
              >
                <p className="text-lg md:text-xl font-bold text-teal-700 mb-1 topic-float">
                  {item.value}
                </p>
                <p className="text-xs text-gray-600 mb-0">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>水系连通性（示意）</span>
              <span>持续补水</span>
            </div>
            <div className="h-2 rounded-full bg-teal-100 overflow-hidden">
              <div className="topic-dash-x w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 03 互花米草治理与原生植被恢复 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="03"
          title="互花米草治理与原生植被恢复"
          subtitle="工程与科研协同：“刈割 + 翻耕 + 围淹”组合技术"
          accent="teal"
        />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            联合中科院烟台海岸带研究所攻关入侵机制，形成“刈割 + 翻耕 + 围淹”组合技术。把鼠标移到三步技术上，查看各自作用。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { step: '01', title: '刈割', desc: '削减地上生物量。' },
              { step: '02', title: '翻耕', desc: '破坏地下根茎。' },
              { step: '03', title: '围淹', desc: '制造缺氧环境抑制复发。' }
            ].map((item) => (
              <div
                key={item.step}
                className="group topic-step topic-sheen rounded-2xl border border-white/70 bg-white/55 p-5"
                tabIndex={0}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-teal-600">{item.step}</span>
                  <span className="w-2 h-2 rounded-full bg-teal-500 transition-transform duration-500 group-hover:scale-150" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-0">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { value: '13.1 万亩', label: '累计治理面积' },
              { value: '99%', label: '清除比例' },
              { value: '5.2 万亩', label: '恢复盐地碱蓬' },
              { value: '1500 亩', label: '恢复海草床' }
            ].map((item) => (
              <div
                key={item.label}
                className="group rounded-xl bg-teal-50/70 border border-teal-100 p-4 text-center transition-all duration-500 hover:bg-teal-50 hover:shadow-md hover:shadow-teal-500/10"
              >
                <p className="text-lg md:text-xl font-bold text-teal-700 mb-1 topic-float">
                  {item.value}
                </p>
                <p className="text-xs text-gray-600 mb-0">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4 mb-0">
            分布区地表植株实现动态清零；同步以种子种植、植株移植和自然恢复三种方式恢复原生植被，并疏通潮沟恢复海岸带湿地与海洋潮汐的自然交流。近海区域底栖生物恢复至
            118 种，为候鸟提供了更完整的食物链基础。
          </p>
        </div>
      </section>

      {/* 04 量化投入与整体成效 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="04"
          title="量化投入与整体成效"
          subtitle="“十四五”以来累计投资 15.6 亿元，实施 18 个修复项目"
          accent="teal"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-teal-700 mb-4">投入与工程</h3>
            <div className="space-y-1">
              <RevealRow title="15.6 亿元" badge="累计投资">
                “十四五”以来湿地保护修复累计投资 15.6 亿元。
              </RevealRow>
              <RevealRow title="18 个修复项目" badge="已实施">
                围绕水文连通、入侵物种治理与原生植被恢复实施 18 个修复项目。
              </RevealRow>
              <RevealRow title="2.6 万亩牡蛎礁、贝藻礁" badge="生境构建">
                除水文与植被指标外，构建牡蛎礁、贝藻礁 2.6 万亩。
              </RevealRow>
              <RevealRow title="50 万亩退出" badge="空间腾退">
                退出确权海域、盐田、养殖坑塘 50 万亩。
              </RevealRow>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <TiltCard className="topic-sheen p-6 md:p-8">
              <p className="text-xs text-teal-700 mb-2">综合评价</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">保护区生态环境状况等级</h3>
              <p className="text-4xl font-bold text-teal-700 mb-2 topic-float">Ⅰ 级</p>
              <p className="text-sm text-gray-600 mb-0">修复成效在综合评价层面的制度性确认。</p>
            </TiltCard>
            <TiltCard className="topic-sheen p-6 md:p-8">
              <p className="text-xs text-teal-700 mb-2">湾区认定</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">黄河口湾区</h3>
              <p className="text-2xl font-bold text-teal-700 mb-2 topic-float">全国美丽海湾</p>
              <p className="text-sm text-gray-600 mb-0">与生态环境状况等级共同构成修复成效的综合确认。</p>
            </TiltCard>
          </div>
        </div>
      </section>

      <TopicNav
        items={[
          { to: '/national-park-construction', label: '国家公园建设' },
          { to: '/eco-environment-monitoring', label: '生态环境监测' }
        ]}
      />
    </div>
  );
}

export default WetlandRestoration;
