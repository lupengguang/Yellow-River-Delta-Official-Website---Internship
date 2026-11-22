import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, TiltCard } from './topicPageKit';

const coverUrl = `${import.meta.env.BASE_URL}images/徐新良 肖桐詹志明......青海三江源生态系统遥感监测图集.png`;

const infoRows = [
  ['书名', '青海三江源生态系统遥感监测图集'],
  [
    '英文并列题名',
    'Atlas of remote sensing for ecosystem in "Three-River headwaters" region of Qinghai Province'
  ],
  ['主编', '徐新良'],
  ['副主编', '肖桐、詹志明、田俊量、葛劲松'],
  ['编委', '王世宽、万华伟等'],
  ['出版社', '星球地图出版社'],
  ['出版时间', '2015年（不同来源记录在 2015 年 7 月至 10 月之间，以 10 月记录居多）'],
  ['页数', '254 页']
];

const structureItems = [
  {
    num: '其一',
    title: '生态背景与监测方法',
    desc:
      '图集开篇通常交代三江源作为长江、黄河、澜沧江发源地与“中华水塔”的生态区位意义，并说明所采用遥感数据源（如 Landsat、环境减灾卫星等）、时间序列、解译方法与精度验证。'
  },
  {
    num: '其二',
    title: '生态系统类型空间分布',
    desc:
      '以图组形式呈现三江源地区草地、湿地、林地、荒漠、冰川积雪、水域等主要生态系统类型的空间分布格局。这一部分构成图集的主体图件，是后续动态分析的空间基准。'
  },
  {
    num: '其三',
    title: '生态系统动态变化',
    desc:
      '基于多期遥感影像的对比解译，展示特定时段内（结合出版时间推断，应覆盖 21 世纪头十余年）各类生态系统的面积增减与空间转移。徐新良 2008 年发表的《30 年来青海三江源生态系统格局和空间结构动态变化》研究，为图集的动态分析提供了方法论先导。'
  },
  {
    num: '其四',
    title: '专题评估与退化/恢复特征',
    desc:
      '图集可能包含与草地退化、湿地萎缩或恢复、生态工程成效相关的专题图件。相关项目在遥感解译基础上对三江源生态系统退化特点与成因进行了研究，并提出了恢复对策，这些内容有较大概率被纳入图集的专题部分。'
  }
];

const audiences = [
  {
    title: '研究人员与学生',
    desc: '生态学、地理学、遥感科学领域的研究人员与学生，可作为三江源区域研究的基础空间数据参考。'
  },
  {
    title: '管理与技术人员',
    desc: '生态保护与自然资源管理机构的决策与技术人员，用于回顾性研判与规划编制的空间依据。'
  },
  {
    title: '公众与媒体',
    desc: '关注青藏高原生态变化的公众与媒体，图集的可视化表达降低了专业遥感数据的理解门槛。'
  }
];

function SanjiangyuanAtlas() {
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
                alt="青海三江源生态系统遥感监测图集封面"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="text-xs md:text-sm text-emerald-700 tracking-[0.3em] mb-2">
              PROFESSIONAL ATLAS · 遥感监测
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-3">
              青海三江源生态系统遥感监测图集
            </h1>
            <p className="text-sm md:text-base text-gray-500 italic mb-4">
              Atlas of remote sensing for ecosystem in &quot;Three-River headwaters&quot; region of
              Qinghai Province
            </p>
            <p className="text-gray-700 leading-relaxed">
              《青海三江源生态系统遥感监测图集》是一部以遥感技术系统记录与呈现“中华水塔”生态状况的专业图集。它依托多期卫星遥感数据，将三江源地区的生态系统格局、动态变化与空间分布以图组形式集中呈现，是该区域生态监测与评估领域一项重要的基础性成果汇编。
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['主编：徐新良', '星球地图出版社', '2015 年', '254 页'].map((chip) => (
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

      {/* 01 基础出版信息 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="01" title="基础出版信息" subtitle="依据公开出版信息整理" />
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
                    {['主编', '出版社', '出版时间'].includes(label) ? (
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
      </section>

      {/* 02 主编背景 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="02" title="主编背景" subtitle="徐新良 · 中国科学院地理科学与资源研究所" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed mb-0">
            徐新良，中国科学院地理科学与资源研究所研究员，长期从事资源环境信息系统、遥感与地理信息系统应用研究。他在三江源生态遥感领域有深厚的项目积累，曾参与或主持“三江源自然保护区生态系统本底综合评估”“生态系统格局与结构变化的遥感监测技术研发”等课题。与本图集直接相关的“青海三江源区生态系统综合监测与评估关键技术研发及其应用”项目，曾获 2010
            年度部委级二等奖。这种项目实践背景，使图集的内容组织并非单纯的遥感影像堆叠，而是植根于具体的生态监测与评估任务需求。
          </p>
        </div>
      </section>

      {/* 03 内容结构推断 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="03"
          title="内容结构推断"
          subtitle="公开渠道未见完整目录页，以下依据图集定位、通行体例与主编研究脉络推断"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {structureItems.map((item) => (
            <TiltCard key={item.num} base="glass-card-soft" className="topic-sheen p-6 md:p-7">
              <p className="text-xs font-bold text-emerald-600 mb-2">{item.num}</p>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-0">{item.desc}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 04 学术定位与使用价值 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="04" title="学术定位与使用价值" subtitle="把分散的遥感监测成果图集化、空间化、可视化" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            这本图集的根本价值在于将分散的遥感监测成果<strong className="text-emerald-700">图集化、空间化、可视化</strong>。在三江源生态保护与建设工程持续推进的背景下，决策者、科研人员与保护管理者需要直观把握生态系统“在哪里变化、变了多少、变好还是变差”。图集以空间显式的方式回应了这类需求。
          </p>
          <p className="text-gray-600 leading-relaxed mb-0">
            从后续发展看，这本 2015 年出版的图集所依托的遥感监测范式，在后续的三江源国家公园建设中得到了延续与升级。当前的监测体系已发展为“天空地一体化”平台，整合了高分卫星、无人机与地面站点，实现冰川退缩、湖泊扩张、草地湿地变化等要素的实时回传与智能解译。这本图集在技术脉络上可视为这一体系化监测能力形成过程中的阶段性成果固化。
          </p>
        </div>
      </section>

      {/* 05 适用读者 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="05" title="适用读者" subtitle="科研、管理与公众三类使用场景" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {audiences.map((item) => (
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
            <strong>需要注意：</strong>图集出版于 2015
            年，其遥感数据的时间覆盖范围截至当时。若需获取 2015
            年之后的三江源生态系统遥感监测信息，应参考三江源国家公园后续发布的监测成果与数据平台，而非将本图集视为持续更新的数据源。
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

export default SanjiangyuanAtlas;
