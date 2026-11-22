import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from './topicPageKit';

const img = (file) => `${import.meta.env.BASE_URL}images/${encodeURIComponent(file)}`;

const infoItems = [
  { label: '会议时间', value: '2027年4月4日—9日' },
  { label: '会议地点', value: '奥地利维也纳 / 线上' },
  { label: '摘要提交截止', value: '2027年1月12日 20:00（北京时间）' }
];

function WechatEgu2027() {
  return (
    <div className="min-h-screen pb-16">
      <PageBanner
        kicker="WECHAT · 鲁大现代农业高质量发展研究基地"
        title="EGU丨2027专题征稿 HS10.19 人类活动改变的临界带中的水资源可及性、储存与连通性：机制、阈值与功能结果"
        description="本分会场聚焦人类活动影响下地球关键带的水分可利用性、储存与连通性，探讨储存水何时、何地、为谁以及在多长时间内能够被利用。"
        chips={['会议时间：2027年4月4—9日', '奥地利维也纳 / 线上', '摘要截止：2027年1月12日']}
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
            <span>EGU 2027 专题征稿</span>
          </div>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-800">分会场简介</h2>
            <p className="mb-4 text-[15px] text-gray-600">
              <span className="text-gray-500">召集人：</span>
              赵英教授
              <a
                href="mailto:yzhaosoils@gmail.com"
                className="privacy-link ml-2 break-all text-sm"
              >
                yzhaosoils@gmail.com
              </a>
            </p>
            <p className="text-[15px] leading-8 text-gray-700">
              本分会场聚焦人类活动影响下地球关键带的水分可利用性、储存与连通性，探讨储存水何时、何地、为谁以及在多长时间内能够被利用。土壤、地下水或地表中的水可能因水力隔离、盐度过高、持留过强，或供需时间不匹配而难以利用。本专题欢迎围绕优先流、土壤水力结构、根系吸水、地下水埋深、干湿转换、水文记忆，以及灌溉、排水、抽水和土地利用变化开展研究。鼓励结合野外观测、室内实验、同位素示踪、地球物理、遥感与模型，分析水分可利用性对蒸腾、补给、径流、作物生产、生态韧性和水安全的影响。欢迎来自农田、湿地、三角洲、旱地、森林及修复景观的比较研究和负结果研究，共同识别可测量的指标、关键阈值与管理时机，避免将储水增加简单等同于可利用水增加。
            </p>
          </section>

          <figure className="group my-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('EGU丨2027专题征稿 HS10.19 人类活动改变的临界带中的水资源可及性、储存与连通性：机制、阈值与功能结果.png')}
                alt="EGU 2027 HS10.19 专题征稿"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-500">
              HS10.19 专题：人类活动改变的临界带中的水资源可及性、储存与连通性
            </figcaption>
          </figure>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-800">会议信息</h2>
            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="rights-card rounded-xl border border-white/70 bg-white/55 p-4"
                >
                  <p className="mb-1 text-xs text-gray-500">{item.label}</p>
                  <p className="mb-0 text-sm font-medium text-gray-800">{item.value}</p>
                </div>
              ))}
            </div>

            <p className="mb-4 text-[15px] leading-8 text-gray-700">
              请通过分会官方页面进入摘要提交系统，选择以下专题完成投稿：
            </p>
            <div className="rounded-xl border border-emerald-200/70 bg-emerald-50/70 p-4 text-sm leading-relaxed text-emerald-900">
              <span className="font-semibold">HS10.19</span> Water Accessibility, Storage and Connectivity in Human-Modified Critical Zones: Mechanisms, Thresholds and Functional Outcomes
            </div>
          </section>

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

export default WechatEgu2027;
