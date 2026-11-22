import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, TiltCard } from './topicPageKit';

const coverUrl = `${import.meta.env.BASE_URL}images/邵景安徐新良对比研究一农牧民对生态建设工程响应的以江.png`;

const infoRows = [
  ['书名', '农牧民对生态建设工程响应与适应的对比研究——以江西山江湖和青海三江源区为例'],
  ['作者', '邵景安、徐新良'],
  ['出版社', '科学出版社'],
  ['出版时间', '2016 年 6 月（部分来源记录为 7 月）'],
  ['ISBN', '978-7-03-049287-6'],
  ['定价', '78.00 元'],
  ['页数', '226 页'],
  ['开本', '16 开'],
  ['类别', '经济学 / 生态经济学']
];

const stages = [
  {
    num: '第一阶段',
    title: '被动响应',
    desc:
      '面对生态退化与工程政策的初始介入，农牧民首先作出的是适应性调整——包括对资源禀赋格局的认知、经营行为的改变，以及对工程本身的理解偏好（经济收益、信仰习俗、生产便利等不同维度的偏好权重）。'
  },
  {
    num: '第二阶段',
    title: '获得收益后的自发调整',
    desc:
      '在参与工程并获取一定收益后，农牧民的行为并非一成不变。他们会基于对经济效应、生态效应与衍生效应的感知，对参与方式、参与行为与参与管理进行直接调整，同时也在收益、认知与投入层面进行间接调整。'
  },
  {
    num: '第三阶段',
    title: '外部不经济性',
    desc:
      '农牧民在追求自身收益最大化的过程中，其行为调整可能对生态工程的长期效果或其他主体产生负外部性。书中区分了直接与潜在、大概率与小概率等不同类型的外部不经济性，揭示了个体理性与集体生态目标之间可能存在的张力。'
  },
  {
    num: '第四阶段',
    title: '适应性自觉行为调整',
    desc:
      '当新的外部政策环境出现或既有参与行为的外部性恶化时，农牧民会启动更高层级的调整——书中分别为农民与牧民构建了自觉性调整框架，并讨论其具体调整路径与所面临的风险。其终点是试图从理论上建立农牧民自觉适应政府主导生态工程的调整框架。'
  }
];

function FarmersResponseComparison() {
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
                alt="农牧民对生态建设工程响应与适应的对比研究封面"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="text-xs md:text-sm text-emerald-700 tracking-[0.3em] mb-2">
              PROFESSIONAL BOOK · 土地利用相关
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-3">
              农牧民对生态建设工程响应与适应的对比研究
            </h1>
            <p className="text-sm md:text-base text-gray-500 mb-4">
              以江西山江湖和青海三江源区为例 · 邵景安、徐新良 著 · 科学出版社 · 2016 年 6 月
            </p>
            <p className="text-gray-700 leading-relaxed">
              本书是一项以<strong className="text-emerald-700">微观主体行为</strong>
              为切入点，考察宏观生态政策落地效果的比较研究。它没有停留在评估工程“生态成效”的层面，而是追问一个更具体的问题：当政府主导的生态工程进入两个自然条件与社会文化迥异的区域时，作为直接利益相关者的农牧民，其行为如何随之改变，又反过来对工程本身产生了怎样的复杂影响。
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['作者：邵景安、徐新良', '科学出版社', '2016 年 6 月', '226 页', '定价 78.00 元'].map((chip) => (
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
        <div className="mt-4 rounded-xl border border-sky-100 bg-sky-50/80 p-4">
          <p className="text-sm text-sky-900 leading-relaxed mb-0">
            <strong>书名用字说明：</strong>部分图书馆书目与中科院机构库记录的书名为“农牧民对生态建设工程响应的对比研究”，与封面及百科收录的“响应与适应”存在“适应”二字的出入。从全书目录明确包含“适应性自觉行为调整”专章来看，“响应与适应”是更完整、也更贴合内容结构的书名表述。
          </p>
        </div>
      </section>

      {/* 02 作者背景 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="02" title="作者背景" subtitle="微观农户行为 + 宏观遥感评估的方法互补" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            两位作者的学术训练分别侧重微观土地利用与农户行为和宏观遥感监测与生态评估，这种组合为该书“从农牧民行为切入、在区域尺度上对比”的研究路径提供了方法上的互补。
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong className="text-gray-800">邵景安</strong>，重庆师范大学地理与旅游学院研究员、硕士生导师，三峡库区地表过程与生态修复市级重点实验室主任，重庆市学术技术带头人。他的研究领域集中于土地利用与生态过程，长期关注农户层面的土地利用决策与生态效应，能够深入处理农牧民行为调查的一手数据，并对其背后的生计逻辑作出解释。
          </p>
          <p className="text-gray-600 leading-relaxed mb-0">
            <strong className="text-gray-800">徐新良</strong>，中国科学院地理科学与资源研究所研究员、博士生导师，中国科学院资源环境科学数据中心副主任。他的研究方向为土地利用/土地覆被变化的遥感监测及其生态环境效应、陆地生态系统综合监测与评估，为两个案例区的宏观生态背景对比提供了技术支撑。
          </p>
        </div>
      </section>

      {/* 03 研究框架 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="03" title="研究框架：从“被动响应”到“适应性调整”" subtitle="四阶段递进的行为演化逻辑" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {stages.map((stage) => (
            <TiltCard key={stage.num} base="glass-card-soft" className="topic-sheen p-6">
              <p className="text-xs font-bold text-emerald-600 mb-2">{stage.num}</p>
              <h3 className="text-base font-semibold text-gray-800 mb-3">{stage.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-0">{stage.desc}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 04 案例选择与方法 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="04" title="案例选择与方法" subtitle="在最大异质性中识别共性与区域特性" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            选取江西山江湖区与青海三江源区作为对比对象，意图在于最大限度地呈现异质性。前者是以农户为主的南方丘陵复合生态脆弱区，后者是以牧民为主的高寒草地生态脆弱区；两地在生态退化机理、生计类型、文化传统与政策干预方式上均存在显著差异。在这种差异中进行比较，能够更清晰地识别出哪些响应模式是特定于区域条件的，哪些可能具有跨区域的共性。
          </p>
          <p className="text-gray-600 leading-relaxed mb-0">
            方法上，该书以参与式农村评估为核心数据采集手段，辅以对调查景观、村庄与农户/牧户的 purposive
            选择，以及入户调查的规范化设计。这意味着研究的经验基础建立在实地调研的一手社会数据之上，而非仅依赖统计年鉴或遥感影像。
          </p>
        </div>
      </section>

      {/* 05 学术定位与适用读者 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="05" title="学术定位与适用读者" subtitle="面向研究与政策分析的学术专著" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            该书是一部面向研究与政策分析的学术专著，而非概论性教材。其价值在于将生态建设工程的评价视角，从“工程是否改善了植被覆盖度”向下延伸到了“工程通过何种微观行为机制发挥作用、又可能引发哪些非预期的社会生态后果”。
          </p>
          <p className="text-gray-600 leading-relaxed mb-0">
            适合的读者包括：从事生态补偿、农户行为、自然资源管理研究的学者与研究生；参与生态建设工程政策制定与评估的政府工作人员；以及关注微观主体行为与宏观制度互动关系的研究者。阅读该书需要一定的生态学、经济学或地理学基础，对参与式农村评估方法有基本了解则更有利于把握其经验材料。它不适合作为零基础的入门读物，但在“生态政策的社会响应”这一专题下，提供了一个结构清晰、经验扎实的比较分析范本。
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

export default FarmersResponseComparison;
