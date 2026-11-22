import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, TiltCard } from './topicPageKit';

const coverUrl = `${import.meta.env.BASE_URL}images/中国国家地理中国国家地理2015年典藏版.png`;

const infoRows = [
  ['总编', '李栓科'],
  ['出版时间', '2015 年（各期陆续出版，典藏套装于年末集结）'],
  ['形态', '套装，共 12 册（对应 2015 年 1-12 期）'],
  ['开本', '16 开'],
  ['装帧', '平装（套装另含典藏外盒）'],
  ['单册页数', '常规期约 181 页；十月特刊为加厚专辑，篇幅远超常规期'],
  ['单册定价', '常规期定价为 20.00 元']
];

const highlights = [
  {
    num: '一',
    title: '十月号“一带一路”专辑',
    desc:
      '2015 年十月号的主题正是“一带一路”（总第 660 期），从地理学视角系统解读“新丝绸之路经济带”与“21 世纪海上丝绸之路”的战略构想。专辑篇幅达到 408 页，覆盖中亚五国（如哈萨克斯坦、乌兹别克斯坦）、瓦罕走廊、昆曼公路、中巴公路等关键通道与节点国家，并包含总开篇《中国的全球地缘政治大环境》以及《“甘英之谜”与“心脏地带”》等深度文章。'
  },
  {
    num: '二',
    title: '第 12 期内容示例',
    desc:
      '封面报道《察哈尔火山群：遗落的内蒙古草原火山景观》，聚焦内蒙古草原上形态完整的火山群；《惊“虹”一瞥》从科学视角解读罕见彩虹的类型与成因；记录河北武安傩戏这一中原罕见傩戏形式及其传承困境；运用 3D 扫描技术探索洞穴的科技探洞报道；以及对 2015 年藏历木羊年转山（卡瓦格博）与转湖（纳木错）朝圣活动的深度人文观察，和追寻翻车鱼的海洋生物报道。'
  },
  {
    num: '三',
    title: '年度内容格局',
    desc:
      '2015 年《中国国家地理》的内容由常规栏目与年度重头专辑构成，在自然地理与人文地理之间保持平衡。自 2005 年起，每年十月号推出加厚珍藏专辑已成为惯例，2015 年的“一带一路”专辑是这一年最具标志性的内容，也是典藏版的核心收藏价值所在。'
  }
];

const scenarios = [
  {
    title: '补全年度收藏或专题研究',
    desc: '对于持续收藏的读者，它是 2015 年度的完整归档。对于特别关注“一带一路”地缘地理议题的研究者或爱好者，单独搜寻十月专辑可能成本较高或不完整，典藏版提供了一揽子获取的方案。'
  },
  {
    title: '集中查阅 2015 年的地理记录',
    desc: '12 期合订便于回顾该年度杂志所呈现的中国及全球地理议题，从察哈尔火山到藏地朝圣，形成一份年度性的地理阅读档案。'
  },
  {
    title: '作为资料性藏品',
    desc: '与所有年度典藏版一样，其价值在于成套包装的完整性与保存状态。内容就是 2015 年各期杂志的原文，并不包含为典藏版额外撰写的增补内容。'
  }
];

function Cng2015() {
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
                alt="中国国家地理2015年典藏版封面"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="text-xs md:text-sm text-emerald-700 tracking-[0.3em] mb-2">
              PROFESSIONAL PERIODICAL · 期刊杂志
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-3">
              中国国家地理2015年典藏版
            </h1>
            <p className="text-sm md:text-base text-gray-500 mb-4">
              2015 年 12 期合订 · 套装共 12 册 · 总编 李栓科
            </p>
            <p className="text-gray-700 leading-relaxed">
              《中国国家地理》的“年度典藏版”延续了其一贯的形态，并非另行编辑的新书，而是将该年度 12
              期杂志完整合订，并配以典藏包装的年度套装。2015 年典藏版收录的即是《中国国家地理》2015 年第 1
              期至第 12 期的全部内容。
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['总编：李栓科', '套装 12 册', '16 开', '单册定价 20.00 元'].map((chip) => (
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
        <SectionTitle index="01" title="界定与形态" subtitle="全年 12 期合订，核心价值在十月专辑" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            与 2013 年典藏版的性质相同，市面上名称相近的“黄金典藏版”（按地理分区编排）属于<strong className="text-emerald-700">主题汇编类图书</strong>，并非年度典藏版。
          </p>
          <p className="text-gray-600 leading-relaxed mb-0">
            2015 年典藏版的准确定位是：将 2015 年全年 12 期杂志（总第 659 期至总第 670 期）连同典藏盒/函套一并发售的年度套装。其核心价值在于系统性地归档了该年度的全部内容，尤其以当年的十月特大专辑为代表。
          </p>
        </div>
      </section>

      {/* 02 出版与装帧规格 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="02" title="出版与装帧规格" subtitle="依据二手书市与馆藏记录整理" />
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
                    {['总编', '开本', '单册定价'].includes(label) ? (
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
            典藏版作为合集，其二手市场的完整套装（12 册全）重量接近 7 公斤（含硬壳外盒），具有相当的物理分量感。
          </p>
        </div>
      </section>

      {/* 03 2015年内容纵览 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="03" title="2015 年内容纵览" subtitle="十月号“一带一路”专辑为核心亮点" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {highlights.map((item) => (
            <TiltCard key={item.num} base="glass-card-soft" className="topic-sheen p-6">
              <p className="text-xs font-bold text-emerald-600 mb-2">其{item.num}</p>
              <h3 className="text-base font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-0">{item.desc}</p>
            </TiltCard>
          ))}
        </div>
        <div className="glass-card p-6 md:p-8 mt-6">
          <p className="text-gray-600 leading-relaxed mb-0">
            2015 年十月号“一带一路”专辑（总第 660 期）篇幅达到 408 页，是 2015
            年典藏版中最具分量的单册。对于关注地缘政治与宏观地理的读者而言，这一期的收藏价值尤为突出。
          </p>
        </div>
      </section>

      {/* 04 典藏意义与使用场景 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="04" title="典藏意义与使用场景" subtitle="系统性年度归档，而非特定主题精选" />
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
            <strong>需要注意：</strong>其内容就是 2015
            年各期杂志的原文，并不包含为典藏版额外撰写的增补内容。单册与市面流通的单期杂志在正文上并无差异，区别在于成套的物理形态与归档的便利性。
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

export default Cng2015;
