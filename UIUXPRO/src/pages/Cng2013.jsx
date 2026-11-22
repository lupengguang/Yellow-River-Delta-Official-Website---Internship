import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, TiltCard } from './topicPageKit';

const coverUrl = `${import.meta.env.BASE_URL}images/中国国家地理中国国家地理2013年典藏版.png`;

const infoRows = [
  ['作者/主编', '单之蔷（《中国国家地理》杂志社执行总编）'],
  ['出版时间', '2013 年 12 月'],
  ['形态', '套装，共 12 册（对应 2013 年 12 期）'],
  ['开本', '16 开'],
  ['纸张', '铜版纸'],
  ['包装', '平装（单册为平装，套装另有外盒/函套）'],
  ['定价', '240.00 元（2013 年时定价，单期定价 30 元 × 12 期）']
];

const contentHighlights = [
  {
    num: '一',
    title: '年度专题与热点回应',
    desc:
      '2013 年第 7 期（总第 633 期）推出了“三沙专辑”，卷首语由单之蔷撰写，标题为《三沙市能否比马尔代夫做得更好？》，在三沙市设立一周年之际，从珊瑚礁国土的自然条件与开发路径角度进行了深入探讨。这一专题在当年引发了较多关注，是典藏版中时效性与深度兼具的代表性内容。'
  },
  {
    num: '二',
    title: '持续的地理与人文深度报道',
    desc:
      '2013 年各期覆盖了从南极考察（第 1 期记录了“中国国家地理号”的南极之行）到西沙群岛考察日记等多种题材。杂志的选题分布大致维持了人文类内容占比较高、自然类内容作为视觉与科学支撑的既有格局。'
  },
  {
    num: '三',
    title: '完整的年度索引价值',
    desc:
      '典藏版将 12 期合为一体，实际上构成了一部 2013 年中国地理探索与自然人文报道的年度文献汇编。对于研究者或深度爱好者而言，其检索与回顾的便利性远高于散落存放的单期杂志。'
  }
];

const scenarios = [
  {
    title: '补全年度收藏',
    desc: '对于已持续订阅《中国国家地理》的读者，典藏版提供了一致性的年度归档方案，配有统一外盒，便于书柜陈列与长期保存。'
  },
  {
    title: '集中回顾特定年份',
    desc: '如果对 2013 年前后的中国地理话题（如三沙开发讨论、南极考察纪实等）有查阅需求，12 期合订比逐期搜集更为高效。'
  },
  {
    title: '作为资料性藏品',
    desc: '杂志的铜版纸全彩印刷与大 16 开本，使这套 12 册合集本身具备一定的物理质感，符合“典藏”的定位。'
  }
];

function Cng2013() {
  return (
    <div className="pb-16 min-h-screen">
      {/* 顶部 */}
      <section className="container mx-auto px-4 pt-8">
        <Link
          to="/professional-books"
          className="group inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm text-gray-700 backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-500/10"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          返回专业图书
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="glass-frame bg-white/80 p-4">
              <img
                src={coverUrl}
                alt="中国国家地理2013年典藏版封面"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="text-xs md:text-sm text-emerald-700 tracking-[0.3em] mb-2">
              PROFESSIONAL PERIODICAL · 期刊杂志
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-3">
              中国国家地理2013年典藏版
            </h1>
            <p className="text-sm md:text-base text-gray-500 mb-4">
              2013 年 12 期合订 · 套装共 12 册 · 2013 年 12 月
            </p>
            <p className="text-gray-700 leading-relaxed">
              《中国国家地理》的“年度典藏版”并非另行编辑的新书，而是对当年 12
              期杂志的<strong className="text-emerald-700">完整合订与集中呈现</strong>
              ，配有专门的典藏包装，本质上是为收藏者提供的一套年度内容归档方案。2013
              年典藏版收录的就是该杂志 2013 年全年的 12 期内容。
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['主编：单之蔷', '套装 12 册', '16 开', '2013 年 12 月', '定价 240.00 元'].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-100"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 01 界定与形态 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="01" title="界定与形态" subtitle="年度典藏版不是新书，而是全年 12 期的合订套装" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            市面上存在多个名称相近的出版物，需要加以区分。搜索中出现的“黄金典藏版”（按华北、华东等地理分区编排）或“发现中国”系列，属于<strong className="text-emerald-700">主题汇编类图书</strong>，并非年度典藏版。
          </p>
          <p className="text-gray-600 leading-relaxed mb-0">
            “2013 年典藏版”的准确定位是：将《中国国家地理》2013 年第 1 期至第 12 期（总第 627 期至第 638 期）共 12 册杂志，连同典藏盒/函套一并发售的年度套装。
          </p>
        </div>
      </section>

      {/* 02 出版与装帧规格 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="02" title="出版与装帧规格" subtitle="依据当当网商品记录整理" />
        <div className="glass-card p-3 md:p-6 overflow-x-auto">
          <table className="w-full min-w-[560px] text-left border-collapse">
            <tbody>
              {infoRows.map(([label, value]) => (
                <tr
                  key={label}
                  className="border-t border-white/60 transition-colors duration-300 hover:bg-white/50 first:border-t-0"
                >
                  <td className="py-3 px-4 text-sm text-gray-500 w-32 md:w-40 align-top whitespace-nowrap">
                    {label}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700 leading-relaxed">
                    {['作者/主编', '出版时间', '定价'].includes(label) ? (
                      <strong className="text-emerald-700">{value}</strong>
                    ) : (
                      value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl border border-sky-100 bg-sky-50/80 p-4">
          <p className="text-sm text-sky-900 leading-relaxed mb-0">
            单期杂志的规格可作参照：2013 年各期通常为 175—177 页，采用大 16 开（约 185×260mm），全彩铜版纸印刷。12
            册合在一起的总体量在 2100 页以上，是相当厚重的一套年度读物。
          </p>
        </div>
      </section>

      {/* 03 2013年内容纵览 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="03" title="2013 年内容纵览" subtitle="年度典藏版的价值取决于当年 12 期杂志的内容质量" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {contentHighlights.map((item) => (
            <TiltCard key={item.num} base="glass-card-soft" className="topic-sheen p-6">
              <p className="text-xs font-bold text-emerald-600 mb-2">其{item.num}</p>
              <h3 className="text-base font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-0">{item.desc}</p>
            </TiltCard>
          ))}
        </div>
        <div className="glass-card p-6 md:p-8 mt-6">
          <p className="text-gray-600 leading-relaxed mb-0">
            2013 年《中国国家地理》延续了“探索发现”“美在自然”“人文历史”的板块结构，从可查的目录信息来看，当年有多条值得留意的人文与自然内容线索，整体呈现出以深度地理报道为核心的内容格局。
          </p>
        </div>
      </section>

      {/* 04 典藏意义与使用场景 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="04" title="典藏意义与使用场景" subtitle="核心功能是系统性收藏，而非特定主题精选" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {scenarios.map((item) => (
            <div
              key={item.title}
              className="topic-sheen rounded-2xl border border-white/70 bg-white/55 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <h3 className="text-base font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/80 p-5">
          <p className="text-sm text-amber-900 leading-relaxed mb-0">
            <strong>需要注意：</strong>由于该典藏版本质是杂志合订，它不包含为典藏版专门撰写的额外评论或增补章节。其内容就是 2013
            年各期杂志的原文，单册与市面流通的单期杂志在正文上并无差异，区别仅在于成套包装的完整性。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-12 text-center">
        <Link
          to="/professional-books"
          className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          返回专业图书
        </Link>
      </div>
    </div>
  );
}

export default Cng2013;
