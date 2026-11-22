import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from './topicPageKit';

const img = (file) => `${import.meta.env.BASE_URL}images/${encodeURIComponent(file)}`;

const conferenceInfo = [
  { label: '会议时间', value: '2026年7月' },
  { label: '会议地点', value: '西班牙 · 瓦伦西亚' },
  { label: '会议名称', value: '首届土地退化与修复国际会议（LDR 2026）' },
  { label: '支持项目', value: '创新引智基地“111计划”' }
];

function WechatLDR2026() {
  return (
    <div className="min-h-screen pb-16">
      <PageBanner
        kicker="WECHAT · 鲁大现代农业高质量发展研究基地"
        title="鲁东大学团队参加首届土地退化与修复国际会议"
        description="聚焦盐碱地水盐调控与生态恢复，深化国际科研合作。2026年7月，团队赴西班牙瓦伦西亚参加 LDR 2026 并开展国际学术交流。"
        chips={['LDR 2026', '2026年7月', '西班牙 · 瓦伦西亚']}
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
            <span>2026年7月</span>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {conferenceInfo.map((item) => (
              <div
                key={item.label}
                className="rights-card rounded-xl border border-white/70 bg-white/55 p-4"
              >
                <p className="mb-1 text-xs text-gray-500">{item.label}</p>
                <p className="mb-0 text-sm font-medium text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              2026年7月，鲁东大学水利土木学院赵英教授、王毅教授和谭丽丽博士赴西班牙瓦伦西亚参加首届土地退化与修复国际会议（LDR 2026），并开展相关国际学术交流。此次活动得到学校创新引智基地“111计划”支持，重点围绕黄河三角洲盐碱地水盐过程、土壤改良与农业生态恢复展开。
            </p>
            <p>
              会议汇集土地退化与恢复领域的国际学者，重点讨论土壤侵蚀、水土保持、盐渍土治理、退化生态系统恢复及监测技术等研究进展。赵英教授参与大会组织，并主持“盐渍土复垦与综合利用”专题，推动不同国家研究团队围绕根—土—水—盐耦合过程、土壤改良、节水灌排和盐分监测开展交流。
            </p>
          </div>

          <figure className="group my-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('LDR2026会议现场.webp')}
                alt="首届土地退化与修复国际会议现场"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-500">
              首届土地退化与修复国际会议（LDR 2026）现场
            </figcaption>
          </figure>

          <h2 className="mb-4 text-xl font-semibold text-gray-800">突出盐碱地恢复与农业水土过程研究</h2>
          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              王毅教授报告了我国稻田农业氮素流失及其影响因素，并结合黄河三角洲盐碱稻田研究，讨论耕作与培肥措施对土壤性质、水肥利用及污染物迁移的调控。谭丽丽博士展示了垄作、秸秆覆盖和盐结皮剥离协同控制滨海土壤盐渍化的研究成果。相关交流聚焦盐碱地恢复中的水盐协同调控、农业生产与环境效应。
            </p>
          </div>

          <figure className="group my-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('LDR2026王毅报告.webp')}
                alt="王毅教授在 LDR 2026 作学术报告"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-500">
              王毅教授报告我国稻田农业氮素流失研究
            </figcaption>
          </figure>

          <h2 className="mb-4 text-xl font-semibold text-gray-800">对照地中海滨海农业与湿地管理实践</h2>
          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              团队考察了瓦伦西亚阿尔布费拉潟湖、滨海稻田及设施农业区，重点了解湿地水文、滨海土地利用、农田灌排和砂质土壤水分管理。这些现场观察为比较不同气候与土地利用背景下的水盐调控和生态恢复措施提供了参考。
            </p>
          </div>

          <figure className="group my-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('LDR2026潟湖考察.webp')}
                alt="团队考察瓦伦西亚阿尔布费拉潟湖"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-500">
              考察瓦伦西亚阿尔布费拉潟湖湿地水文
            </figcaption>
          </figure>

          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              访问期间，团队与佛罗伦萨大学 Daniele Penna 教授等同行交流了盐碱农田根—土—水相互作用、土壤结构与压实对水盐运移的影响，以及观测设计、数据分析和青年人才培养等合作方向。下一步将依托“111计划”，加强盐碱地水盐过程、土壤物理与生态水文研究的国际协作，为黄河三角洲盐碱地可持续利用提供科学支撑。
            </p>
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

export default WechatLDR2026;
