import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from './topicPageKit';

const img = (file) => `${import.meta.env.BASE_URL}images/${encodeURIComponent(file)}`;

const paperInfo = [
  { label: '论文题目', value: 'A wave attenuation formulation for sparse flexible canopies under combined wave-current conditions' },
  { label: '发表期刊', value: 'Ocean Engineering, 369, 128953' },
  { label: '发表年份', value: '2026' },
  { label: '作者', value: 'Guan, Y., Li, S., Jiang, C., Qu, J.' }
];

const highlights = [
  {
    title: '顺流削弱、逆流增强',
    desc: '顺流一般使波高衰减系数降低（最低约为纯波浪的0.38倍）；逆流则显著增强衰减，最大可达纯波浪条件的约4倍，且水深越浅、流速比越大，增强越明显。'
  },
  {
    title: '稀疏冠层不可忽略冠层内流速',
    desc: '与稠密冠层假设不同，稀疏海草床中剪切层穿透使冠层内平均流速不可忽略。新公式显式引入由稳态流实验标定的冠层内代表性流速，并采用多普勒修正的波流能量输运。'
  },
  {
    title: '引入相平均因子与经验上限',
    desc: '解析推导了相平均立方速度因子 J(α)，并设置经验上限 Jmax = 3.00，以表征强流速比下衰减趋于饱和的现象。'
  },
  {
    title: '预测精度提升',
    desc: '在本数据集上，Guan26 的零截距斜率为0.79、RMSE为0.14；对比 SN22（0.51、0.21）和 Losada16（0.17、0.27）。在两个已发表外部数据集上，Guan26 同样给出最低 RMSE，且 Jmax 未针对外部数据重新标定。'
  },
  {
    title: '机制分解',
    desc: '同工况零流分解表明，逆流增强由植被拖曳做功项和波能输运项共同贡献，其中拖曳做功项在64个逆流工况中的61个（95.3%）占主导。'
  }
];

function WechatPaperShare() {
  return (
    <div className="min-h-screen pb-16">
      <PageBanner
        kicker="WECHAT · 鲁大现代农业高质量发展研究基地"
        title="论文分享"
        description="稀疏、柔性海草床在波流联合作用下的波浪衰减：基于不规则波水槽实验的解析衰减公式。"
        chips={['Ocean Engineering', 'Guan et al., 2026', '波浪衰减']}
      />

      <div className="container mx-auto mt-8 px-4">
        <Link
          to="/other-results/wechat"
          className="group mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm text-gray-700 backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-500/10"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          返回公众号
        </Link>

        <article className="glass-card mx-auto max-w-4xl p-6 md:p-10">
          <div className="mb-8 flex flex-wrap items-center gap-3 border-b border-white/60 pb-5 text-xs text-gray-500">
            <span className="rounded-full bg-blue-600 px-3 py-1 font-medium text-white">官方公众号</span>
            <span>鲁大现代农业高质量发展研究基地</span>
            <span className="text-gray-300">|</span>
            <span>论文分享</span>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {paperInfo.map((item) => (
              <div
                key={item.label}
                className="rights-card rounded-xl border border-white/70 bg-white/55 p-4"
              >
                <p className="mb-1 text-xs text-gray-500">{item.label}</p>
                <p className="mb-0 break-words text-sm font-medium text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-3 text-xl font-semibold text-gray-800">摘要</h2>
          <p className="mb-8 text-[15px] leading-8 text-gray-700">
            在近岸环境中，海草床常面临波流联合作用，潮流在一个潮周期内可能顺流也可能逆流。现有波浪衰减公式多基于纯波浪条件或稠密冠层假设，对稀疏、柔性海草床在逆流条件下的表现预测不足。本文通过不规则波水槽实验，研究了模拟大叶藻（Enhalus acoroides）的稀疏柔性人工海草床在纯波浪、顺流和逆流条件下的波高衰减规律，并基于波浪能量守恒提出了新的解析衰减公式。
          </p>

          <h2 className="mb-3 text-xl font-semibold text-gray-800">内容梗概</h2>
          <p className="mb-8 text-[15px] leading-8 text-gray-700">
            研究在天津大学波浪水槽中开展，人工海草床长6 m，种植密度150株/m²，模拟大叶藻的叶片尺寸、刚度与浮力特性。实验涵盖156组有效水动力条件（水深0.20–0.42 m，入射有效波高3.3–5.0 cm，峰周期1.23–2.45 s，参考流速0、±8、±17 cm/s），共312次独立运行。通过13个浪高仪测量沿程波高衰减，并用ADV测量冠层内外的流速剖面，以约束冠层内平均流速的折减系数。
          </p>

          <h2 className="mb-4 text-xl font-semibold text-gray-800">主要结论与创新点</h2>
          <div className="mb-8 space-y-3">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="rights-card rounded-xl border border-white/70 bg-white/55 p-4"
              >
                <p className="mb-1 text-sm font-semibold text-emerald-700">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-[11px]">
                    {index + 1}
                  </span>
                  {item.title}
                </p>
                <p className="mb-0 text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-4 text-xl font-semibold text-gray-800">核心图表</h2>

          <figure className="group mb-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('海草床论文图1实验布置.webp')}
                alt="图1 实验布置"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-relaxed text-gray-500">
              图1 实验布置：(a) 水槽中的海草床实景；(b) 交错排列的植株孔位；(c) 单株人工海草；(d) 水槽侧视示意图及浪高仪、ADV位置。
            </figcaption>
          </figure>

          <figure className="group mb-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('海草床论文图2波高衰减.webp')}
                alt="图2 代表性波高沿程衰减曲线"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-relaxed text-gray-500">
              图2 代表性波高沿程衰减曲线（h = 0.20 m，Hs = 3.3 cm），五档流速（−17、−8、0、8、17 cm/s）下的实测归一化波高与拟合衰减线；逆流工况 KD 最大（1.07），顺流最小（0.13）。
            </figcaption>
          </figure>

          <figure className="group mb-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('海草床论文图3衰减系数.webp')}
                alt="图3 全数据集无量纲衰减系数随流速比的变化"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-relaxed text-gray-500">
              图3 全数据集无量纲衰减系数 KD,wc/KD,pw 随流速比 α = Uc,ref/Uw 的变化；顺流（α &gt; 0）普遍小于1，逆流（α &lt; 0）普遍大于1，最大增强约4倍。
            </figcaption>
          </figure>

          <figure className="group mb-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('海草床论文图4预测对比.webp')}
                alt="图4 三种公式预测值与实测KD的对比散点图"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-relaxed text-gray-500">
              图4 三种公式（Guan26、SN22、Losada16）预测值与实测 KD 的对比散点图，覆盖本文数据及 Giordana (2023)、Zhang &amp; Nepf (2024) 两个外部数据集。
            </figcaption>
          </figure>

          <h2 className="mb-3 text-xl font-semibold text-gray-800">意义与展望</h2>
          <p className="mb-8 text-[15px] leading-8 text-gray-700">
            该研究为稀疏、柔性海草床在波流联合作用下的波浪衰减提供了物理机制更完整的解析预测工具，对基于自然的海岸防护评估具有参考价值。作者同时指出，Jmax = 3.00 为针对本文人工大叶藻海草床的经验饱和闭合参数，应用于其他物种或冠层构型时需独立标定；未来可结合叶片重构、迎流面积和叶-水相对速度的同步测量，发展连续的饱和关系。
          </p>

          <div className="rounded-xl border border-emerald-200/70 bg-emerald-50/70 p-4 text-sm leading-relaxed text-emerald-900">
            <span className="font-semibold">原文：</span>
            Guan, Y., Li, S., Jiang, C., Qu, J., 2026. A wave attenuation formulation for sparse flexible canopies under combined wave-current conditions. Ocean Engineering 369, 128953.
          </div>

          <div className="mt-10 border-t border-white/60 pt-6 text-center">
            <Link
              to="/other-results/wechat"
              className="group inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-5 py-2.5 text-sm text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              返回公众号文章列表
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default WechatPaperShare;
