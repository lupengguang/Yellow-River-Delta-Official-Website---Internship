import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, TiltCard } from './topicPageKit';

const coverUrl = `${import.meta.env.BASE_URL}images/匡文慧城市土地利用时空信息数据重建、分析与模拟.png`;

const infoRows = [
  ['书名', '城市土地利用时空信息数字重建、分析与模拟'],
  ['作者', '匡文慧'],
  ['出版社', '科学出版社'],
  ['出版时间', '2012 年 4 月'],
  ['ISBN', '978-7-03-032859-5'],
  ['定价', '69.00 元'],
  ['页数', '209 页（含部分彩图）'],
  ['开本', '大 16 开，全彩色印刷'],
  ['丛书', '地球信息科学基础丛书'],
  [
    '资助项目',
    '国家自然科学基金青年科学基金项目（40901224）、国家重点基础研究发展计划项目（2010CB950900）'
  ]
];

const chapters = [
  {
    num: '第一章',
    title: '绪论',
    desc: '交代背景与学科前沿，界定本书在国内外 LUCC 与城市地理研究中的位置。'
  },
  {
    num: '第二章',
    title: '城市土地利用时空信息数字重建',
    desc:
      '全书的方法论基石。该章不仅处理水平空间的土地利用分类与多源数据融合，还专门设置垂直空间结构数字重建一节，讨论城市建筑高度遥感信息反演与垂直高度空间信息重建。将“垂直维度”纳入城市土地利用的数字表达，是本书区别于多数以平面分类为核心的 LUCC 研究的关键差异。'
  },
  {
    num: '第三章',
    title: '城市土地利用时空过程分析',
    desc:
      '以长春为案例，从城市建设规划简史与职能演变切入，展开对扩张过程、类型转换、区域差异等特征的时序描述。案例的时间纵深达到“近 100 年”，使得分析能够覆盖不同城市化阶段与制度背景下的土地利用演变。'
  },
  {
    num: '第四章',
    title: '城市土地利用时空格局分析',
    desc:
      '将空间分析方法系统引入。包含空间重心转移、信息熵空间变异、分形特征（面积—周长分形、集聚分形）等度量工具，并再次回到垂直维度，分析不同土地利用类型的楼层高度分异以及地价对垂直结构演变的影响。格局分析同时覆盖“平面扩展”与“立体生长”两条线索。'
  },
  {
    num: '第五章',
    title: '城市土地利用时空作用机制分析',
    desc:
      '从自然地理（亲水性、地形、地貌）、人口与经济、区位与政策等层面解析驱动因素，并涉及驱动因素的时空作用方式分析。归因逻辑与徐新良 LUCC 著作的“驱动力分析”章节功能相近，但更聚焦于城市系统的复合驱动。'
  },
  {
    num: '第六章',
    title: '城市土地利用时空动态模拟',
    desc:
      '在重建、过程、格局、机制的基础上进入未来情景模拟环节。目录显示该章包含“城市土地利用空间结构优化措施”相关内容，表明模拟的归宿是规划调控而非单纯的趋势外推。'
  },
  {
    num: '第七章',
    title: '应用拓展',
    desc:
      '将长春案例中形成的方法体系，向北京城市以及京津唐城市群进行空间尺度的拓展应用，检验技术路径在不同城市规模与区域尺度上的可移植性。'
  }
];

const features = [
  {
    title: '垂直维度制度化纳入',
    desc: '建筑高度遥感反演与楼层高度分异分析贯穿重建、格局与机制多个环节，使“城市土地利用”不再等同于二维平面分类。'
  },
  {
    title: '长时序案例解剖深度',
    desc: '长春近百年数据的连续性，使分析能够触及城市形态演变中跨越不同历史阶段的长期机制，而非局限于某一短时段的截面比较。'
  },
  {
    title: '从局地到区域尺度检验',
    desc: '北京与京津唐的拓展应用，赋予了方法框架一定的可推广性说明。'
  }
];

function UrbanLandUseReconstruction() {
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
                alt="城市土地利用时空信息数字重建、分析与模拟封面"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="text-xs md:text-sm text-emerald-700 tracking-[0.3em] mb-2">
              PROFESSIONAL BOOK · 土地利用相关
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-3">
              城市土地利用时空信息数字重建、分析与模拟
            </h1>
            <p className="text-sm md:text-base text-gray-500 mb-4">
              匡文慧 著 · 科学出版社 · 2012 年 4 月 · 地球信息科学基础丛书
            </p>
            <p className="text-gray-700 leading-relaxed">
              本书是匡文慧 2012 年由科学出版社出版的专著，属于“地球信息科学基础丛书”。与徐新良 LUCC
              方法书相比，这本书的独特性在于将<strong className="text-emerald-700">“垂直空间”</strong>
              正式纳入城市土地利用的时空信息框架，并以长春近百年的长时序数据为解剖案例，构建了一套从“数字重建”到“机制解释”再到“情景模拟”的完整技术路径。
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['作者：匡文慧', '科学出版社', '2012 年 4 月', '209 页', '定价 69.00 元'].map((chip) => (
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

      {/* 02 作者背景与学术位置 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="02" title="作者背景与本书的学术位置" subtitle="匡文慧 · 中国科学院地理科学与资源研究所" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            匡文慧，1978 年生于内蒙古，理学博士，现为中国科学院地理科学与资源研究所研究员、博士生导师，区域环境与生态信息研究室副主任，主要从事土地利用/覆盖变化与城市生态学研究。本书出版于其担任助理研究员向副研究员过渡的阶段（2009—2012
            年任助理研究员），内容脱胎于博士论文及后续的国家级项目积累。
          </p>
          <p className="text-gray-600 leading-relaxed mb-0">
            在匡文慧的学术脉络中，这本书可以视为其<strong className="text-emerald-700">城市土地利用研究方法论的系统性奠基</strong>。此后他主编的《中国城市土地利用/覆盖变化图集》以及后续关于城市扩张与生态效应的研究，在数据框架与分析视角上均与本书存在明显的延续关系。
          </p>
        </div>
      </section>

      {/* 03 内容体系 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="03" title="内容体系：七章构成的递进链条" subtitle="数据构建 → 过程描述 → 格局度量 → 机制归因 → 情景模拟" />
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
        <SectionTitle index="04" title="方法论特色与需要留意的边界" subtitle="垂直维度、长时序与尺度检验" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="topic-sheen rounded-2xl border border-white/70 bg-white/55 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <h3 className="text-sm font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-0">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            需要留意的边界在于，本书的案例重心是长春，北京与京津唐以“拓展应用”的篇幅出现，而非同等深度的独立案例。如果读者的兴趣在于京津冀城市群的详细土地利用演变，这本书提供的是方法参照与框架示范，而非该区域本身的全量分析。
          </p>
          <p className="text-gray-600 leading-relaxed mb-0">
            此外，该书出版于 2012 年，其遥感数据源与分类方法反映的是当时的技术条件；在深度学习分类、高分辨率时序遥感普及的当下，具体的技术操作细节宜作为方法论思路来参考，而非直接照搬的数据处理规程。
          </p>
        </div>
      </section>

      {/* 05 适用读者 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="05" title="适用读者" subtitle="关注城市立体形态与长时序演变的研究者" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed mb-0">
            这本书适合城市地理、土地利用/覆盖变化、遥感与 GIS
            应用方向的研究生与科研人员，尤其适合那些希望将分析对象从“城市平面扩张”拓展到“城市立体形态演变”的读者。对于已经了解徐新良
            LUCC 方法书的读者，本书可以在“城市内部空间结构的分层解析”与“长时序城市案例的完整解剖”两个方向上形成互补：前者提供
            LUCC 通用方法的全景，后者展示如何在城市这一特定对象上，把垂直维度与百年尺度同时纳入一个连贯的分析框架。
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

export default UrbanLandUseReconstruction;
