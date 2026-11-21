import React from 'react';
import { IMG, TopicHero, SectionTitle, TiltCard, RevealRow, TopicNav } from './topicPageKit';

const heroImage = IMG(
  'Aerial view of Yellow River Delta national park, river estuary meeting the sea, vast coastal wetlands, tidal channels, flocks of birds, golden hour cinematic nature photography, ultra detailed',
  'landscape_16_9'
);

const stats = [
  { value: '35.23万公顷', label: '国家公园范围面积', note: '陆海统筹划定' },
  { value: '13.71万公顷', label: '陆域面积', note: '占比约 38.9%' },
  { value: '21.52万公顷', label: '海域面积', note: '占比超过六成' },
  { value: '52.26%', label: '核心保护区占比', note: '18.41 万公顷' }
];

const tasks = [
  '技术成果编制',
  '边界与分区确定',
  '矛盾冲突调处',
  '管理机构设置方案',
  '河口生态保护修复',
  '社区转型',
  '立法前期研究'
];

function NationalParkConstruction() {
  return (
    <div className="pb-16 min-h-screen">
      <TopicHero
        kicker="国家公园建设"
        title="黄河口国家公园"
        description="全国首个陆海统筹型国家公园候选区，把 8 处自然保护地整合优化为一个统一管理单元。"
        image={heroImage}
        alt="黄河口国家公园湿地与河口航拍"
        stats={stats}
      />

      {/* 01 定位与体制框架 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="01"
          title="定位与体制框架"
          subtitle="从 8 处自然保护地到一个统一管理单元"
        />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-3 glass-card p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed">
              黄河口国家公园是全国首个<strong className="text-emerald-700">陆海统筹型</strong>
              国家公园候选区。其建设目标不是简单增设一块保护地，而是将原有的 8 处自然保护地（黄河三角洲国家级自然保护区、国家地质公园、国家森林公园、海洋特别保护区等）整合优化为一个统一的管理单元。
            </p>
            <p className="text-gray-600 leading-relaxed">
              这一整合的核心逻辑在于：黄河口的生态过程本身跨越陆海边界，按陆海分治的传统保护地体系无法完整覆盖其生态功能。把鼠标移到下面四项生态过程上，可以看到它们为什么必须放在同一个管理单元里统筹。
            </p>
            <div className="mt-2 space-y-1">
              <RevealRow title="淡水输入" badge="陆海连续">
                黄河淡水输入同时作用于陆域湿地与近岸海域，是维持河口生态过程的基础，无法按单一保护地边界切割。
              </RevealRow>
              <RevealRow title="泥沙淤积" badge="陆海连续">
                黄河泥沙在河口持续淤积、塑造新生湿地，这一过程跨越陆域与海域的交界地带。
              </RevealRow>
              <RevealRow title="潮汐作用" badge="陆海连续">
                潮汐作用直接作用于近岸海域与潮间带湿地，影响湿地水文与生境的可及性。
              </RevealRow>
              <RevealRow title="候鸟迁徙" badge="陆海连续">
                候鸟迁徙同时依赖陆域湿地与海域滩涂，保护范围需要覆盖完整的生境谱系。
              </RevealRow>
            </div>
          </div>

          <div className="lg:col-span-2 glass-panel p-6 md:p-8">
            <p className="text-sm text-gray-500 mb-4">原有 8 处自然保护地</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                '国家级自然保护区',
                '国家地质公园',
                '国家森林公园',
                '海洋特别保护区',
                '其他 4 处'
              ].map((name) => (
                <div
                  key={name}
                  className="topic-sheen rounded-xl border border-white/70 bg-white/55 px-3 py-3 text-center text-xs md:text-sm text-gray-700 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  {name}
                </div>
              ))}
            </div>
            <div className="my-5 text-center text-emerald-600 text-2xl leading-none">↓</div>
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-5 text-center text-white shadow-lg shadow-emerald-500/30 transition-transform duration-500 hover:scale-[1.03]">
              <p className="text-xs opacity-90 mb-1">整合优化</p>
              <p className="text-lg font-semibold mb-0">1 个统一管理单元</p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 范围与分区 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="02"
          title="范围与分区"
          subtitle="35.23 万公顷，全部位于东营市河口区与垦利区境内"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-emerald-700 mb-4">陆海构成</h3>
            <div className="flex h-16 rounded-2xl overflow-hidden border border-white/70">
              <div
                className="topic-seg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center"
                style={{ flexGrow: 13.71, flexBasis: 0 }}
              >
                <span className="seg-label opacity-90 text-xs md:text-sm text-center px-2">
                  陆域 13.71 万公顷
                </span>
              </div>
              <div
                className="topic-seg bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center"
                style={{ flexGrow: 21.52, flexBasis: 0 }}
              >
                <span className="seg-label opacity-90 text-xs md:text-sm text-center px-2">
                  海域 21.52 万公顷
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-500 mt-4 mb-0">
              海域占比超过六成（约 61.1%），体现“陆海统筹”的实质内涵。
            </p>
          </div>

          <div className="glass-card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-emerald-700 mb-4">两分法分区</h3>
            <div className="flex items-center gap-6">
              <div className="group relative flex-shrink-0 w-24 h-24 rounded-full topic-ring" style={{ '--p': '52.26%' }}>
                <div className="absolute inset-2 rounded-full bg-white/90 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-emerald-700">52.26%</span>
                  <span className="text-[10px] text-gray-500">核心保护区</span>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                <div className="group rounded-xl border border-white/70 bg-white/55 px-4 py-3 transition-all duration-500 hover:-translate-x-1 hover:border-emerald-200">
                  <p className="text-sm font-semibold text-gray-800 mb-0">核心保护区</p>
                  <p className="text-xs text-gray-600 mb-0">18.41 万公顷 · 严格保护为主</p>
                </div>
                <div className="group rounded-xl border border-white/70 bg-white/55 px-4 py-3 transition-all duration-500 hover:-translate-x-1 hover:border-sky-200">
                  <p className="text-sm font-semibold text-gray-800 mb-0">一般控制区</p>
                  <p className="text-xs text-gray-600 mb-0">
                    16.82 万公顷 · 可开展科研、教育及有限可持续利用
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-500 mt-4 mb-0">
              核心保护区以严格保护为主；一般控制区允许在管控前提下开展科研、教育及有限的可持续利用活动。
            </p>
          </div>
        </div>
      </section>

      {/* 03 创建进展与制度成果 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="03"
          title="创建进展与制度成果"
          subtitle="截至 2025 年底，8 项重点创建任务基本完成"
        />
        <div className="glass-card p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            {tasks.map((task) => (
              <div
                key={task}
                className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all duration-500 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white/60"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center shadow-sm shadow-emerald-500/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  ✓
                </span>
                <span className="text-sm text-gray-700">{task}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 rounded-xl px-3 py-2.5">
              <span className="text-sm text-gray-500">等 8 项重点创建任务</span>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-emerald-50/80 border border-emerald-100 px-4 py-3 transition-all duration-500 hover:bg-emerald-50 hover:shadow-md hover:shadow-emerald-500/10">
            <p className="text-sm text-emerald-800 mb-0">
              设立报批工作走在第二批国家公园候选区前列。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <TiltCard className="topic-sheen p-6 md:p-8">
            <p className="text-xs text-emerald-700 mb-2">制度成果 · 其一</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              全国首个候选区国土空间分区规划
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-0">
              编制完成全国首个国家公园候选区国土空间分区规划，将生态保护从“项目式修复”纳入空间规划的刚性约束。
            </p>
          </TiltCard>
          <TiltCard className="topic-sheen p-6 md:p-8">
            <p className="text-xs text-emerald-700 mb-2">制度成果 · 其二</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              高质量建设三年行动方案（2024—2026 年）
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-0">
              以三年行动方案为中期抓手，围绕运行管理基础保障、陆海生态系统一体化修复、绿色协调发展三条主线推进后续建设。
            </p>
          </TiltCard>
        </div>
      </section>

      {/* 04 共建共享机制 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="04"
          title="共建共享机制"
          subtitle="保护成本与收益在地方政府、社区与保护机构之间再分配"
        />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            国家公园建设并不将社区排除在外。入口社区规划、生态管护公益岗位、生态研学与观鸟季品牌等机制，旨在将保护成本与收益在地方政府、社区与保护机构之间进行再分配。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: '入口社区规划', desc: '把社区发展纳入国家公园入口空间布局' },
              { title: '生态管护公益岗位', desc: '以公益岗位吸纳社区居民参与日常管护' },
              { title: '生态研学与观鸟季品牌', desc: '以研学与观鸟季形成可感知的生态品牌' }
            ].map((item) => (
              <div
                key={item.title}
                className="topic-sheen rounded-xl border border-white/70 bg-white/55 p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <h3 className="text-base font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <TiltCard base="glass-card-soft" className="p-6 md:p-8 text-center">
            <p className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2 topic-float">10 万+</p>
            <p className="text-sm text-gray-600 mb-0">2024 年研学人数</p>
          </TiltCard>
          <TiltCard base="glass-card-soft" className="p-6 md:p-8 text-center">
            <p className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2 topic-float">100 万+</p>
            <p className="text-sm text-gray-600 mb-0">2024 年旅游人数</p>
          </TiltCard>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          生态品牌化已产生可观测的社会经济外溢效应。
        </p>
      </section>

      <TopicNav
        items={[
          { to: '/wetland-restoration', label: '湿地保护修复' },
          { to: '/eco-environment-monitoring', label: '生态环境监测' }
        ]}
      />
    </div>
  );
}

export default NationalParkConstruction;
