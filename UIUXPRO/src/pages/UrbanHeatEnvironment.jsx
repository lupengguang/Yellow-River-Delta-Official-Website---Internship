import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, TiltCard } from './topicPageKit';

const coverUrl = `${import.meta.env.BASE_URL}images/徐新良、乔治、田光进城市热环境格局-机理R.png`;

const infoRows = [
  ['书名', '城市热环境：格局·机理·模拟'],
  ['英文题名', 'Urban heat environment'],
  ['作者', '徐新良、乔治、田光进、张力小 著'],
  ['出版社', '科学技术文献出版社（北京）'],
  ['出版时间', '2015 年 8 月'],
  ['ISBN', '978-7-5189-0312-2'],
  ['定价', '66.00 元'],
  ['页数', '294 页'],
  ['开本/装帧', '平装，尺寸约 26 × 19 cm'],
  ['中图分类号', 'X21（城市环境－热环境－研究）'],
  ['项目来源', '国家自然科学基金项目']
];

const methods = [
  {
    num: '一',
    title: '格局：城市热环境的监测与识别',
    desc:
      '这是研究的起点，核心是利用遥感影像（特别是热红外遥感）反演地表温度，从而在空间上识别城市热岛的范围、强度与形态特征。书中系统介绍了城市热环境的监测和识别方法，旨在回答“热岛在哪里、有多强”这一基础问题。'
  },
  {
    num: '二',
    title: '机理：城市热环境的评价与诊断',
    desc:
      '在识别格局的基础上，研究转向解释“为什么”。这涉及对影响地表温度的关键地表特征参量（如植被覆盖度、不透水面比例、建筑密度）进行定量分析，诊断不同城市景观格局对热环境形成的贡献机制。书中结合案例，展示了如何从地表能量平衡与景观格局的角度，解析热岛效应的成因。'
  },
  {
    num: '三',
    title: '模拟：城市热环境的调控与情景分析',
    desc:
      '这是该书在方法论上最具技术含量的部分。作者综合运用了 WRF（天气研究与预报）模型、ENVI-met（微尺度城市环境模拟工具）以及 CA-Markov（元胞自动机-马尔可夫链，常用于土地利用变化模拟）等模型方法，结合数理统计，对城市热环境进行模拟和调控研究，尝试预测不同规划或气候情景下热环境的可能变化。'
  }
];

const audiences = [
  {
    title: '研究人员与研究生',
    desc: '城市气候、遥感科学、地理学与生态学领域的研究人员与研究生，可作为研究方法参考书。'
  },
  {
    title: '规划与管理技术人员',
    desc: '城市规划、自然资源管理与生态环境部门的技术人员，可用于理解热环境评估与缓解策略的技术基础。'
  }
];

function UrbanHeatEnvironment() {
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
              <img src={coverUrl} alt="城市热环境：格局·机理·模拟封面" className="w-full h-auto rounded" />
            </div>
          </div>
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="text-xs md:text-sm text-emerald-700 tracking-[0.3em] mb-2">
              PROFESSIONAL BOOK · 土地利用相关
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-3">
              城市热环境：格局·机理·模拟
            </h1>
            <p className="text-sm md:text-base text-gray-500 mb-4">
              Urban heat environment · 徐新良等 著 · 科学技术文献出版社 · 2015 年 8 月
            </p>
            <p className="text-gray-700 leading-relaxed">
              本书是一本系统论述城市热环境研究方法的学术专著，由中国科学院地理科学与资源研究所徐新良等学者合著，2015
              年由科学技术文献出版社出版。该书的核心价值在于，它并非停留在对“热岛效应”这一现象的描述，而是构建了一个从
              <strong className="text-emerald-700">格局识别、机理解析到情景模拟</strong>
              的完整方法论框架，并大量结合遥感与数值模拟技术来展示具体分析案例。
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['徐新良、乔治、田光进、张力小', '科学技术文献出版社', '2015 年 8 月', '294 页', '定价 66.00 元'].map(
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

      {/* 02 作者背景 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="02" title="作者背景" subtitle="地理学、生态学与资源科学交叉的研究团队" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            该书的作者团队来自地理学、生态学与资源科学领域，这决定了其研究视角带有鲜明的地理空间分析特征。
          </p>
          <p className="text-gray-600 leading-relaxed mb-0">
            徐新良是中国科学院地理科学与资源研究所的研究员，长期从事资源环境信息系统与遥感应用研究。他在三江源生态遥感、土地利用变化等领域有深厚的项目积累，这种基于遥感与空间信息技术的资源环境研究背景，直接延伸到了城市热环境这一议题中。乔治（天津大学环境科学与工程学院）的研究方向同样聚焦于
            GIS、遥感与数值模拟技术在城市气候与环境问题中的耦合应用。田光进与张力小的加入，则补充了在城市空间结构与生态代谢方面的研究视角。
          </p>
        </div>
      </section>

      {/* 03 内容体系与核心方法 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="03"
          title="内容体系与核心方法"
          subtitle="格局 → 机理 → 模拟的递进分析链条"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {methods.map((item) => (
            <TiltCard key={item.num} base="glass-card-soft" className="topic-sheen p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-700 text-xs font-bold flex items-center justify-center">
                  {item.num}
                </span>
                <h3 className="text-base font-semibold text-gray-800 mb-0">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-0">{item.desc}</p>
            </TiltCard>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/80 p-5">
          <p className="text-sm text-amber-900 leading-relaxed mb-0">
            <strong>一个需要留意的边界：</strong>
            该书的工具链以遥感反演与物理/统计数值模拟（WRF、ENVI-met）为核心。如果读者的兴趣在于景观生态学视角下“格局—过程—功能”框架的热环境研究，或侧重于景观规划的情景模拟，那么该书的侧重点会有所不同；其方法论重心更偏向地理空间信息科学与城市气候模拟。
          </p>
        </div>
      </section>

      {/* 04 学术定位与价值 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="04" title="学术定位与价值" subtitle="面向研究者的方法专著" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed mb-0">
            该书的定位是一部面向研究者的方法专著，而非入门教材。其核心贡献在于将分散的遥感监测技术、空间统计方法与数值模拟工具，整合进一个关于城市热环境的连贯研究流程中。对于从事城市气候、遥感应用、城市规划与生态环境研究的学者和研究生而言，它提供了一套可参照的分析范式：从遥感数据出发识别热环境格局，运用模型工具诊断机理，并通过情景模拟评估调控策略的效果。书中所附的具体分析案例，增强了方法论的实操参考价值。
          </p>
        </div>
      </section>

      {/* 05 适用读者 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="05" title="适用读者" subtitle="需要一定的遥感、GIS 与数理建模基础" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <strong>需要注意：</strong>该书不适合作为零基础的入门读物；读者需要具备遥感图像处理、GIS
            空间分析以及一定的数理建模基础，才能充分消化书中的技术内容。
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

export default UrbanHeatEnvironment;
