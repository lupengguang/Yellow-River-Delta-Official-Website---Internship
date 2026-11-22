import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, TiltCard } from './topicPageKit';

const coverUrl = `${import.meta.env.BASE_URL}images/徐新良等析方法及应用土地利用覆被变化时空信息分.png`;

const infoRows = [
  ['书名', '土地利用覆被变化时空信息分析方法及应用'],
  ['作者', '徐新良、庞治国、于信芳'],
  ['出版社', '科学技术文献出版社'],
  ['出版时间', '2014 年 4 月'],
  ['ISBN', '978-7-5023-8955-0'],
  ['定价', '88.00 元'],
  ['页数', '236 页（含部分彩图）'],
  ['开本', '29cm（接近大 16 开）'],
  ['中图分类号', 'F301.2（土地利用研究）']
];

const chapters = [
  {
    num: '第一章',
    title: '研究概述',
    desc:
      '交代 LUCC 研究的主要内容、国内外进展、遥感监测、模拟模型、驱动力分析及环境效应等分支领域的基本面貌，为后续章节提供共同的学术语境。'
  },
  {
    num: '第二章',
    title: '遥感监测方法',
    desc:
      '覆盖从分类系统（国内外主要 LUCC 分类体系）到遥感分类方法（监督/非监督分类、人工神经网络、eCognition 面向对象分类、决策树分类、变化检测、三维特征空间分类、高光谱分类）再到目视解译流程（数据源选择、解译标志建立、动态信息提取、精度检验）的完整技术谱系。该章还专门讨论了国家尺度 LUCC 信息集成中的 1km 栅格成分数据制备与面积汇总技术。'
  },
  {
    num: '第三章',
    title: '定量分析方法',
    desc:
      '从三个层次展开：现状特征（数量结构、空间格局、类型组合）、时空过程（面积变化、类型转换、变化空间格局）、景观格局（借助 Fragstats 工具分析斑块特征与景观格局指数）。这三层构成从“静态结构”到“动态过程”再到“格局与过程关联”的分析阶梯。'
  },
  {
    num: '第四章',
    title: '模型模拟方法',
    desc:
      '集中介绍 LUCC 研究中用于预测和情景分析的主流模型：马尔可夫模型、CA-Markov（元胞自动机与马尔可夫链的耦合）、集成 ANN 与 Markov 的模拟方法、LTM 模型以及 SLEUTH 模型。每个模型均配有“模型介绍”与“模型应用”两小节，便于理解原理并参照操作。'
  },
  {
    num: '第五章',
    title: '驱动力分析',
    desc:
      'LUCC 研究的最终解释性环节——是什么在驱动变化？该书将其作为独立一章，意味着它没有停留在“描述变化”的层面，而是引导读者进入因果机制的探讨。'
  }
];

function LuccSpatiotemporal() {
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
                alt="土地利用覆被变化时空信息分析方法及应用封面"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="text-xs md:text-sm text-emerald-700 tracking-[0.3em] mb-2">
              PROFESSIONAL BOOK · 土地利用相关
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-3">
              土地利用覆被变化时空信息分析方法及应用
            </h1>
            <p className="text-sm md:text-base text-gray-500 mb-4">
              徐新良、庞治国、于信芳 著 · 科学技术文献出版社 · 2014 年 4 月
            </p>
            <p className="text-gray-700 leading-relaxed">
              围绕“土地利用覆被变化（LUCC）时空分析”这一主题，中文领域内最直接对应、体系最完整的一部专著，是徐新良、庞治国、于信芳合著的《土地利用覆被变化时空信息分析方法及应用》。这本书与《城市热环境：格局·机理·模拟》同属徐新良的研究脉络，可以视为其在
              LUCC 领域的<strong className="text-emerald-700">方法论基石</strong>。
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['徐新良、庞治国、于信芳', '科学技术文献出版社', '2014 年 4 月', '236 页', '定价 88.00 元'].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-100"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 01 基础出版信息 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="01" title="基础出版信息" subtitle="依据图书版权页与书目记录整理" />
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
                    {['作者', '出版社', '出版时间', 'ISBN', '定价'].includes(label) ? (
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

      {/* 02 作者脉络与本书定位 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="02" title="作者脉络与本书定位" subtitle="一部面向 LUCC 时空分析的方法工具书" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            徐新良是中国科学院地理科学与资源研究所研究员，长期从事遥感与 GIS
            在资源环境领域的应用研究。在 LUCC 方向上，他早有关注，2008
            年即发表过关于三江源生态系统格局与空间结构动态变化的研究，为本书的动态分析方法提供了先导性积累。
          </p>
          <p className="text-gray-600 leading-relaxed mb-0">
            与偏重物理模拟的《城市热环境》不同，本书的定位是一部<strong className="text-emerald-700">“方法工具书”</strong>
            ：它不追求提出某个全新的理论框架，而是将 LUCC
            时空分析中分散在各文献中的主流技术方法，按照“遥感监测—定量分析—模型模拟—驱动力解释”的完整链条进行系统化整理，并通过具体应用案例展示每一步的操作流程与技术细节。
          </p>
        </div>
      </section>

      {/* 03 内容体系 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="03" title="内容体系：五章构成的分析闭环" subtitle="方法论递进：概述 → 监测 → 定量 → 模拟 → 驱动力" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {chapters.map((chapter) => (
            <TiltCard key={chapter.num} base="glass-card-soft" className="topic-sheen p-6">
              <p className="text-xs font-bold text-emerald-600 mb-2">{chapter.num}</p>
              <h3 className="text-base font-semibold text-gray-800 mb-3">{chapter.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-0">{chapter.desc}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 04 方法论特色与边界 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="04" title="方法论特色与边界" subtitle="遥感为源、定量为描述、模型为预测、驱动力为归宿" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            这本书的方法论重心可以用一句话概括：<strong className="text-emerald-700">以遥感为数据源，以定量空间分析为描述工具，以主流 LUCC 模型为预测手段，以驱动力解释为归宿</strong>。它的优势在于覆盖面宽、操作指向明确。对于需要从零搭建一套 LUCC
            分析流程的研究者，它提供了一份可参照的“方法路线图”，尤其是第二章的遥感分类方法谱系和第四章的模型清单，具有工具索引的性质。
          </p>
          <p className="text-gray-600 leading-relaxed mb-0">
            同时需要留意其边界：该书的主要模型工具（CA-Markov、SLEUTH 等）在 LUCC
            研究中属于经典范式，但近年来时空统计模型（如地理时空加权回归、时空面板 logit
            模型）在 LUCC 驱动力与优化分析中的应用日益深入。如果对基于统计推断而非规则/元胞模拟的时空分析方法有特别需求，可参考英文专著《Spatio-temporal
            Analysis and Optimization of Land Use/Cover Change: Shenzhen as a Case
            Study》（Liu Biao, Bo Huang, Wenting Zhang 著，CRC Press，2017
            年），其以深圳为案例，构建了地理与时间加权 logit 模型（GTWLM）、时空面板 logit 模型（ST-PLM）和广义时空 logit
            模型（GSTLM）三种时空统计模型。
          </p>
        </div>
        <div className="mt-4 rounded-2xl border border-sky-100 bg-sky-50/80 p-5">
          <p className="text-sm text-sky-900 leading-relaxed mb-0">
            <strong>方法分野：</strong>统计解释与优化（英文专著路径）与情景模拟与预测（本书 CA-Markov、SLEUTH
            路径）形成互补，读者可按研究问题选择。
          </p>
        </div>
      </section>

      {/* 05 适用读者 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="05" title="适用读者" subtitle="需要建立 LUCC 分析流程的研究生与科研人员" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed mb-0">
            本书适合地理学、生态学、土地资源管理、遥感与 GIS
            应用方向的研究生和科研人员，尤其是需要快速建立 LUCC
            时空分析技术流程、或需要一本覆盖主流方法的中文参考书的读者。对于已经熟悉单一模型（如仅会使用
            CA-Markov）的研究者，该书的价值在于提供了方法选择上的全景视野，有助于判断某一具体问题更适合哪一类分析工具。如果你此前已经了解《城市热环境》，这本书可以视为同一作者在“变化检测与空间模拟”方向上的前置方法论读本，两者共享遥感与空间分析的技术底色，但对象与问题域不同。
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

export default LuccSpatiotemporal;
