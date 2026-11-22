import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from './topicPageKit';

const img = (file) => `${import.meta.env.BASE_URL}images/${encodeURIComponent(file)}`;

const paperInfo = [
  { label: '发表期刊', value: 'Horticulture Research（中科院一区 TOP）' },
  { label: '影响因子', value: '2025年影响因子 9.5' },
  { label: '通讯作者', value: '赵英教授' },
  { label: '作者单位', value: '鲁东大学现代农业高质量发展产教融合东营基地' }
];

function WechatHorticulture() {
  return (
    <div className="min-h-screen pb-16">
      <PageBanner
        kicker="WECHAT · 鲁大现代农业高质量发展研究基地"
        title="鲁东大学赵英团队在园艺领域顶级期刊 Horticulture Research 发表研究论文"
        description="团队绘制了迄今覆盖类群最广的 ABA 核心信号模块进化图谱，为植物逆境适应的分子进化机制提供了新视角。"
        chips={['Horticulture Research', '中科院一区 TOP', '2025年影响因子 9.5']}
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
            <span>科研论文</span>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {paperInfo.map((item) => (
              <div
                key={item.label}
                className="rights-card rounded-xl border border-white/70 bg-white/55 p-4"
              >
                <p className="mb-1 text-xs text-gray-500">{item.label}</p>
                <p className="mb-0 text-sm font-medium text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mb-6 rounded-xl border border-emerald-200/70 bg-emerald-50/70 p-4 text-sm leading-relaxed text-emerald-900">
            <span className="font-semibold">论文题目：</span>
            A phylogenomic atlas of PP2C and PYL families across 377 plant genomes illuminates the evolution of core ABA signalling
          </div>

          <figure className="group mb-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('鲁东大学赵英团队在园艺领域顶级期刊Horticulture Research发表研究论文.png')}
                alt="Horticulture Research 论文研究图谱"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-500">
              ABA 核心信号模块跨基因组进化图谱
            </figcaption>
          </figure>

          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              近日，鲁东大学赵英团队范树高副教授在国际园艺学权威期刊 Horticulture Research（中科院一区 TOP 期刊，2025年影响因子9.5）在线发表了题为“A phylogenomic atlas of PP2C and PYL families across 377 plant genomes illuminates the evolution of core ABA signalling”的研究论文。鲁东大学现代农业高质量发展产教融合东营基地为该论文的唯一作者单位和通讯单位，赵英教授为论文通讯作者。
            </p>
            <p>
              该研究整合377个植物基因组，首次将脱落酸（ABA）信号通路的两类核心组分——PYL受体与PP2C蛋白磷酸酶——作为一对互作模块开展跨基因组比较分析，绘制了迄今覆盖类群最广的ABA核心信号模块进化图谱。
            </p>
            <p>
              脱落酸是植物应对干旱、盐碱、高低温等逆境的核心激素，其信号通路的核心模块由PYR/PYL/RCAR（PYL）受体、A组PP2C蛋白磷酸酶和SnRK2激酶构成：ABA存在时，PYL受体结合ABA并抑制PP2C的磷酸酶活性，解除PP2C对SnRK2的抑制，从而激活下游胁迫响应。
            </p>
            <p>
              尽管该模块的生化机制已研究得较为清楚，但这两大家族在植物进化历程中如何起源、如何扩张、又如何协同分化，长期以来缺乏跨类群的系统解答。该研究将一对互作基因家族作为单一功能模块进行跨基因组分析，突破了以往两大家族平行研究的局限，为ABA核心信号模块的比较与功能研究提供了共享数据资源和分析框架，也为深入理解植物逆境适应的分子进化机制提供了新视角。
            </p>
            <p>
              该研究得到了国家自然科学基金国际合作重点项目“黄河三角洲盐碱农业根土水交互过程及其机理”的资助。
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-white/70 bg-white/55 p-4">
            <p className="mb-2 text-xs text-gray-500">论文链接</p>
            <a
              href="https://doi.org/10.1093/hr/uhag403"
              target="_blank"
              rel="noopener noreferrer"
              className="privacy-link break-all text-sm"
            >
              https://doi.org/10.1093/hr/uhag403
            </a>
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

export default WechatHorticulture;
