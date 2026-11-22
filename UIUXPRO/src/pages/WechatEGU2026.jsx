import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from './topicPageKit';

const img = (file) => `${import.meta.env.BASE_URL}images/${encodeURIComponent(file)}`;

const visitInfo = [
  { label: '出访时间', value: '2026年5月3日—11日' },
  { label: '会议地点', value: '奥地利 · 维也纳' },
  { label: '访问单位', value: '德国汉诺威莱布尼茨大学' },
  { label: '项目支持', value: '国家自然科学基金国际合作项目' }
];

function WechatEGU2026() {
  return (
    <div className="min-h-screen pb-16">
      <PageBanner
        kicker="WECHAT · 鲁大现代农业高质量发展研究基地"
        title="赵英教授团队参加EGU2026国际学术会议并赴德国开展科研合作交流"
        description="聚焦黄河三角洲盐碱农业根—土—水互作机制，深化土壤物理与生态水文国际合作。"
        chips={['EGU2026', '2026年5月3—11日', '奥地利维也纳 · 德国汉诺威']}
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
            <span>2026年5月</span>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {visitInfo.map((item) => (
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
              2026年5月3日至11日，鲁东大学水利土木学院赵英教授、王海霞副教授赴奥地利维也纳参加2026年欧洲地球科学联盟年会（EGU2026），并应邀访问德国汉诺威莱布尼茨大学（Leibniz University Hannover），围绕国家自然科学基金委员会（NSFC）资助的“黄河三角洲盐碱农业根-土-水相互作用机理研究”项目开展学术交流与合作研讨。
            </p>
          </div>

          <h2 className="mb-4 mt-8 text-xl font-semibold text-gray-800">一、亮相 EGU2026，展示黄河三角洲盐碱农业水文研究成果</h2>
          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              欧洲地球科学联盟年会（European Geosciences Union General Assembly，EGU）是全球地球科学领域最具影响力的国际学术会议之一。本届年会在奥地利维也纳举行，吸引了来自全球120余个国家和地区的两万余名科研人员参加，涵盖水文学、土壤科学、生态学、气候变化及地球系统科学等众多研究领域。
            </p>
            <p>
              会议期间，赵英教授以 “Root-soil-water interaction process and its mechanism in saline agriculture in the Yellow River Delta” 为题作口头学术报告，介绍了黄河三角洲盐碱农业根—土—水相互作用过程及其机理研究进展，重点围绕盐碱环境下土壤水分运移、植物根系水分利用及水盐耦合过程等科学问题展开交流。
            </p>
          </div>

          <figure className="group my-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('EGU2026赵英报告.webp')}
                alt="赵英教授在EGU2026作口头学术报告"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-500">
              赵英教授在 EGU2026 作口头学术报告
            </figcaption>
          </figure>

          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              王海霞副教授以 “Influence of Drip Irrigation and Soil Compaction on Soil Water and Salt Transport in Saline-Alkali Farmland of the Yellow River Delta” 为题进行海报展示，介绍了滴灌与土壤压实共同作用下盐碱农田水盐运移的研究成果，为认识农田土壤物理结构变化及其水盐调控效应提供了新的研究视角。
            </p>
            <p>
              会议期间，团队成员与来自不同国家的科研人员就盐碱地水文过程、土壤物理调控、植物水分利用、农业水文模型及水资源高效利用等研究方向进行了广泛交流，分享了黄河三角洲滨海盐碱地研究成果，并了解相关领域的国际前沿进展。
            </p>
          </div>

          <h2 className="mb-4 mt-8 text-xl font-semibold text-gray-800">二、访问德国汉诺威莱布尼茨大学，推进 NSFC 国际合作项目</h2>
          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              EGU年会结束后，应德国汉诺威莱布尼茨大学 Stephan Peth 教授邀请，赵英教授一行赴该校开展学术访问与科研合作交流。
            </p>
            <p>
              双方围绕正在实施的国家自然科学基金合作项目“黄河三角洲盐碱农业根-土-水相互作用机理研究”，重点讨论了盐碱农田根—土—水耦合机制、土壤压实对水盐运移的影响、试验观测方案优化、数据联合分析及研究生联合培养等内容。
            </p>
            <p>
              交流期间，团队参观了该校土壤物理相关实验室，了解德国在土壤结构表征、土壤水力过程观测及数据分析方面的研究方法，并就相关技术在黄河三角洲盐碱农田研究中的应用潜力进行了讨论。
            </p>
            <p>
              双方还就进一步深化土壤盐渍化与压实耦合作用、根区水盐调控及农业水资源高效利用等研究达成合作意向，计划在现有项目基础上加强科研数据共享、联合研究与青年科研人员交流。
            </p>
          </div>

          <h2 className="mb-4 mt-8 text-xl font-semibold text-gray-800">三、深化国际合作，服务盐碱地治理与农业可持续发展</h2>
          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              黄河三角洲是我国重要的滨海盐碱地分布区，土壤盐渍化、土壤结构变化及水资源利用之间存在复杂的相互作用。深入认识盐碱农业根—土—水耦合过程，对于提高农业水资源利用效率、改善土壤质量和促进盐碱地可持续利用具有重要意义。
            </p>
            <p>
              此次欧洲学术交流将国际前沿研究与黄河三角洲实际科学问题相结合，为团队进一步完善试验设计、深化土壤物理与生态水文过程研究、推进多学科交叉合作提供了有益借鉴。
            </p>
            <p>
              未来，赵英教授团队将继续依托国家自然科学基金国际合作项目，加强与德国及其他国家科研团队的交流合作，围绕盐碱地水盐过程、根区水分利用、土壤物理结构调控及农业水资源可持续管理等方向开展系统研究，努力形成具有国际影响力的研究成果，为我国盐碱地综合治理与农业可持续发展提供科学依据和技术支撑。
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

export default WechatEGU2026;
