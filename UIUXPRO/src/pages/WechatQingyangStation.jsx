import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from './topicPageKit';

const img = (file) => `${import.meta.env.BASE_URL}images/${encodeURIComponent(file)}`;

const visitInfo = [
  { label: '到访时间', value: '2026年10月31日' },
  { label: '到访地点', value: '甘肃庆阳草地农业生态系统国家野外科学观测研究站' },
  { label: '来访专家', value: 'Esteban Jobbágy、Nunzio Romano、Paolo Nasta' },
  { label: '陪同人员', value: '马龙帅教授、李峻成高级畜牧师' }
];

function WechatQingyangStation() {
  return (
    <div className="min-h-screen pb-16">
      <PageBanner
        kicker="WECHAT · 鲁大现代农业高质量发展研究基地"
        title="国内外知名专家到访庆阳草地农业国家站"
        description="2026年10月31日，阿根廷、意大利知名专家一行到访甘肃庆阳草地农业生态系统国家野外科学观测研究站，围绕草地农业与水文过程开展交流。"
        chips={['2026年10月31日', '甘肃 · 庆阳站', '草地农业与水文过程']}
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
            <span>2026年10月31日</span>
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
              2026年10月31日，鲁东大学水利土木学院赵英教授与阿根廷国家科学院院士、阿根廷国家农业科学院院士、布宜诺斯艾利斯大学 Esteban Jobbágy 教授，以及意大利那不勒斯费德里科二世大学 Nunzio Romano 教授和 Paolo Nasta 副教授一行到访甘肃庆阳草地农业生态系统国家野外科学观测研究站（以下简称庆阳站）。Esteban Jobbágy、Nunzio Romano 和 Paolo Nasta 长期从事草地、水文方面研究，是本领域国际知名专家。马龙帅教授和李峻成高级畜牧师陪同参观，并做全程讲解。马龙帅作了简要学术汇报，介绍了庆阳站的总体科研工作，并以自身阶段性工作框架为例做了进一步展示。
            </p>
          </div>

          <figure className="group my-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('庆阳站学术汇报.webp')}
                alt="马龙帅教授作学术汇报"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-500">
              马龙帅教授作学术汇报
            </figcaption>
          </figure>

          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              赵英一行首先参观了庆阳站草业科学家精神教育基地展馆。该基地通过历史实物、图文展板与影像资料，集中展示了以任继周院士、南志标院士为代表的草业科学家扎根西部、潜心科研的奋斗历程。来访专家在展馆中认真听取讲解，对老一辈草业科学家数十年如一日扎根黄土高原的坚守表达了由衷的敬意。
            </p>
          </div>

          <figure className="group my-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('庆阳站参观展馆.webp')}
                alt="来访专家参观草业科学家精神教育基地展馆"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-500">
              参观草业科学家精神教育基地展馆
            </figcaption>
          </figure>

          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              在观看庆阳站宣传视频和参观科研走廊时，专家们对展出的丰富科研成果表现出浓厚兴趣，仔细观察并多次询问技术细节与数据情况。随后，专家一行冒雨实地考察了站内全部试验场和长期监测样地，详细了解了庆阳站在草地农业生态系统长期定位观测、草田轮作与保护性耕作等方面的科研设施与数据积累体系。来访外国专家对庆阳站完善的科研设施与系统化的观测平台赞誉有加，对建站以来以“水土气生”为核心的样地建设与数据监测工作给予充分肯定，尤其钦佩台站长期数据积累的深度与规范。长达20年的长期定位试验与深达10米的原位水分观测令专家们印象深刻，他们一致肯定中国学者在草地农业与旱作栽培领域取得的扎实成就。
            </p>
          </div>

          <figure className="group my-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('庆阳站野外考察.webp')}
                alt="来访专家冒雨考察试验场与长期监测样地"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-500">
              冒雨考察试验场与长期监测样地
            </figcaption>
          </figure>

          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              双方围绕草地农业、水分运移、蒸散发（ET）分离、水土保持等议题展开了热烈而充分的讨论，各方确定了合作意向，初步规划了未来合作方向和主要切入点。数小时的交流紧张、高效、充实。此次交流进一步深化了庆阳站与国际同行在草地农业与水文过程领域的学术联系，为未来开展实质性合作奠定了良好基础。
            </p>
          </div>

          <figure className="group my-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('庆阳站合作讨论.webp')}
                alt="双方围绕草地农业与水文过程开展交流讨论"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-500">
              双方围绕草地农业与水文过程开展交流讨论
            </figcaption>
          </figure>

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

export default WechatQingyangStation;
