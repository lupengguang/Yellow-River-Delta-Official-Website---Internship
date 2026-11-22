import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from './topicPageKit';

const img = (file) => `${import.meta.env.BASE_URL}images/${encodeURIComponent(file)}`;

function WechatEvent2026() {
  return (
    <div className="min-h-screen pb-16">
      <PageBanner
        kicker="WECHAT · 鲁大现代农业高质量发展研究基地"
        title="2026年黄河三角洲土壤健康与生态农业东营研讨会暨鲁东大学东营基地年会举行"
        description="11月17日至18日，会议在东营市现代农业示范区举行。来自10余家高校、科研院所和企业的20余位专家学者和行业代表参会，围绕滨海盐碱地治理、农业水土环境调控和生态农业发展开展交流。"
        chips={['2026年11月17—18日', '东营市现代农业示范区', '盐碱地治理与生态农业']}
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
            <span>2026年11月17—18日</span>
          </div>

          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              11月17日至18日，2026年黄河三角洲土壤健康与生态农业东营研讨会暨鲁东大学现代农业高质量发展产教融合东营基地年会在东营市现代农业示范区举行。来自10余家高校、科研院所和企业的20余位专家学者和行业代表参会，围绕滨海盐碱地治理、农业水土环境调控和生态农业发展开展交流。
            </p>
            <p>
              11月17日上午，会议在东营市现代农业示范区党群服务中心开幕，由东营基地主任赵英教授主持。基地副主任索立柱介绍了基地2026年度建设进展和主要成果，市现代农业示范区管理中心党组成员、副主任王永利，市委组织部人才工作科副科长程涛分别致辞。与会专家就科研协作、资源共享和服务地方需求等方面提出建议。赵英教授主持会议学术交流。
            </p>
          </div>

          <figure className="group my-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('2026东营研讨会合影.webp')}
                alt="2026年黄河三角洲土壤健康与生态农业东营研讨会与会人员合影"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-500">
              与会专家学者、行业代表和研究生合影
            </figcaption>
          </figure>

          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              学术报告环节，宁夏大学原副校长许兴教授、中国科学院地理科学与资源研究所欧阳竹研究员、武汉大学副院长伍靖伟教授分别就河套平原盐碱地治理、盐碱地治理工程系统方案和中国暗管排水工程应用作报告。
            </p>
            <p>
              中国科学院南京地理与湖泊研究所徐力刚研究员分享了国家野外科学观测研究站建设的实践与思考。基地主任赵英教授作题为《气候变化与人类活动共同重塑大河三角洲》的报告。
            </p>
            <p>
              与会专家和研究生还交流了稻田氮磷流失、农田水盐调控、盐碱地生物改良和农业智能装备等方面的研究与实践。
            </p>
            <p>
              会议设置了“以水沙过程贯通黄河上中下游，夯实流域治理的物理基底”专题研讨，聚焦如何统筹流域水沙过程、水盐调控工程措施与盐碱地综合利用。
            </p>
            <p>
              与会专家围绕盐碱地治理与综合利用形成了三方面思路。一是从系统角度统筹水盐调控、土壤改良和农业利用，将地块治理与区域灌排条件结合起来。二是推动治理从单点试验走向连片工程应用，根据盐碱程度和水文条件分区配置灌排设施与改良措施，并通过持续监测评估治理效果。三是围绕生产需求集成暗管排盐、农田水盐监测和生物改良等技术，通过田间示范验证技术组合的适用条件和运行效果，为当地推广应用提供依据。
            </p>
          </div>

          <figure className="group my-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('2026东营研讨会野外考察.webp')}
                alt="参会代表实地考察东营基地和湿地景观"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-500">
              参会代表实地考察东营基地和湿地景观
            </figcaption>
          </figure>

          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              参会代表实地考察了东营基地和湿地景观，了解基地建设进展和研究成果的现场应用。会议交流的意见为基地下一步开展联合研究、共享试验条件和服务地方盐碱地治理提供了参考。
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

export default WechatEvent2026;
