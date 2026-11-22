import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, TiltCard } from './topicPageKit';

const coverUrl = `${import.meta.env.BASE_URL}images/乔治等生态环境空间信息与数字技术综合实验教程。.png`;

const infoRows = [
  ['书名', '生态环境空间信息与数字技术综合实验教程'],
  ['作者', '乔治、王媛、刘磊、郝岩、毛国柱、童银栋'],
  ['出版社', '天津大学出版社'],
  ['出版时间', '2023 年 8 月（2024 年有重印记录）'],
  ['ISBN', '978-7-5618-7551-3'],
  ['定价', '90.00 元'],
  ['页数', '435 页'],
  ['开本', '26cm'],
  ['丛书', '“双一流”高校建设“十四五”规划系列教材'],
  ['中图分类号', 'P208（空间信息系统/数据处理）']
];

const chapters = [
  {
    num: '01',
    title: '大气环境实验',
    experiments: [
      '基于 MODIS 数据的京津冀城市群气溶胶遥感反演',
      '基于气象条件的大气污染物溯源',
      '基于 Landsat 数据的南京市相对热舒适度评价'
    ]
  },
  {
    num: '02',
    title: '水环境实验',
    experiments: [
      '基于 Landsat 数据的太湖水质遥感反演',
      '基于 MODIS 数据的海水透明度遥感反演',
      '基于河网矢量数据的水系连通性评价'
    ]
  },
  {
    num: '03',
    title: '土壤环境实验',
    experiments: [
      '基于高光谱测定的土壤重金属污染空间分布预测',
      '土壤重金属污染空间插值',
      '水土保持功能重要性评价'
    ]
  },
  {
    num: '04',
    title: '固体废弃物实验',
    experiments: [
      '基于 CALPUFF 模式的垃圾填埋场人群暴露风险评估',
      '基于 ArcGIS ModelBuilder 的城市固体废物焚烧发电再利用建模'
    ]
  },
  {
    num: '05',
    title: '物理环境实验',
    experiments: ['校园噪声监测与评价', '日照遮蔽分析', '城市热岛斑块空间扩张模式识别']
  },
  {
    num: '06',
    title: '生态环境实验',
    experiments: ['生态脆弱性评价', '基于时序植被指数的草地关键物候期识别']
  },
  {
    num: '07',
    title: '城市环境实验',
    experiments: [
      '城市土地利用转移矩阵制作',
      '基于 Landsat 数据的城市不透水面提取',
      '城市迎风面指数计算'
    ]
  },
  {
    num: '08',
    title: '环境灾害与应急管理实验',
    experiments: ['城市积水内涝风险分析', '台风灾害范围及受灾人数评估']
  },
  {
    num: '09',
    title: '低碳环境实验',
    experiments: [
      '中国省域工业碳排放时空格局演变特征分析',
      '基于土地利用的县域尺度碳排放核算与驱动因子分析',
      '基于重力模型的中国省域碳排放空间网络构建'
    ]
  },
  {
    num: '10',
    title: '新能源生态环境实验',
    experiments: [
      '基于层次分析法的青藏高原太阳能光伏电站选址',
      '环渤海地区风能资源开发适宜性评价',
      '黄河流域生物质能源作物种植潜力评价'
    ]
  },
  {
    num: '11',
    title: '环境经济与管理实验',
    experiments: [
      '环境管理数据库构建',
      '基于投入产出分析的京津冀城市群 NOx 隐含转移计算',
      '环太湖地区生态系统服务价值核算'
    ]
  },
  {
    num: '12',
    title: '生态环境综合制图实验',
    experiments: [
      '基于数据驱动的“绿水青山”美丽中国生态环境地图集综合制图',
      '基于时间滑块的中国夜间灯光遥感动态制图'
    ]
  }
];

const tools = ['ArcGIS', 'ENVI', 'MATLAB', 'SPSS', 'Excel', 'Origin'];

const appendices = [
  { title: '全书实验思维导图', desc: '帮助读者建立实验之间的逻辑关联。' },
  { title: 'ArcToolbox 工具检索表', desc: '便于快速定位 ArcGIS 工具路径。' },
  { title: '全书实验部分彩图', desc: '提供实验成果的彩色图件参考。' },
  { title: '实验设计和编写人员列表', desc: '记录实验设计与编写分工。' }
];

const disciplines = [
  '环境科学与工程类',
  '自然保护与生态环境类',
  '地理科学类',
  '测绘类',
  '建筑类',
  '公共管理类'
];

function EcoEnvironmentTutorial() {
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
                alt="生态环境空间信息与数字技术综合实验教程封面"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="text-xs md:text-sm text-emerald-700 tracking-[0.3em] mb-2">
              PROFESSIONAL BOOK · 实验教程
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-3">
              生态环境空间信息与数字技术综合实验教程
            </h1>
            <p className="text-sm md:text-base text-gray-500 mb-4">
              天津大学出版社 · 2023 年 · “双一流”高校建设“十四五”规划系列教材
            </p>
            <p className="text-gray-700 leading-relaxed">
              《生态环境空间信息与数字技术综合实验教程》是一本以<strong className="text-emerald-700">实验操作驱动</strong>
              的 GIS 与遥感综合教材，由天津大学出版社于 2023
              年出版，属“双一流”高校建设“十四五”规划系列教材。它的定位不是理论导论，而是将空间信息技术嵌入大气、水、土壤、生态、城市、灾害、低碳等具体环境议题中，通过
              12 章实验设计训练读者用数字工具解决生态环境问题的能力。
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['第一作者：乔治', '天津大学出版社', '2023 年', '435 页', '定价 90.00 元'].map((chip) => (
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
        <SectionTitle index="01" title="基础出版信息" subtitle="依据出版社与图书馆书目记录整理" />
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
                    {['作者', '出版社'].includes(label) ? (
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

      {/* 02 完整目录与实验架构 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="02"
          title="完整目录与实验架构"
          subtitle="全书 12 章，每章围绕一个环境介质或议题，下设 2—3 个实验"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {chapters.map((chapter) => (
            <TiltCard key={chapter.num} base="glass-card-soft" className="topic-sheen p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-700 text-xs font-bold flex items-center justify-center">
                  {chapter.num}
                </span>
                <h3 className="text-base font-semibold text-gray-800 mb-0">{chapter.title}</h3>
              </div>
              <ul className="pl-0 list-none mb-0 space-y-2">
                {chapter.experiments.map((experiment) => (
                  <li key={experiment} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{experiment}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 03 核心软件工具 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="03" title="核心软件工具" subtitle="ArcGIS 与 ENVI 为主干，其他工具补足统计与制图" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            教材的实验操作以 <strong className="text-emerald-700">ArcGIS</strong> 和{' '}
            <strong className="text-emerald-700">ENVI</strong>{' '}
            为主干，分别承担空间分析与遥感数字图像处理的核心任务；同时辅以 MATLAB、SPSS、Excel、Origin
            等工具完成数值计算、统计分析与制图。这种软件组合的意图很明确：ArcGIS
            处理矢量与栅格空间数据，ENVI 处理遥感影像，其他工具补足统计分析与非空间制图环节。
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/70 bg-white/60 px-4 py-2 text-xs font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-md hover:shadow-emerald-500/10"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 04 实验设计逻辑 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="04" title="实验设计逻辑" subtitle="“知识—问题—任务”相互衔接" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { title: '知识', desc: '引入空间信息与数字技术的基础知识。' },
            { title: '问题', desc: '以具体生态环境问题作为实验起点。' },
            { title: '任务', desc: '驱动读者调用技能链条解决问题。' }
          ].map((item) => (
            <div
              key={item.title}
              className="topic-sheen rounded-2xl border border-white/70 bg-white/55 p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <p className="text-lg font-semibold text-emerald-700 mb-2">{item.title}</p>
              <p className="text-sm text-gray-600 mb-0">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed mb-0">
            每个实验不是孤立的工具操作练习，而是先引入一个具体的生态环境问题（如太湖水质反演、城市内涝风险评估），再以该问题为任务目标，驱动读者调用空间数据处理、空间分析、空间统计、ModelBuilder
            建模、遥感反演等技能链条去解决它。这一逻辑贯穿 12 章，目标是培养<strong className="text-emerald-700">空间思维与数字技术应用能力</strong>，而非单纯记忆软件按钮的位置。
          </p>
        </div>
      </section>

      {/* 05 第一作者背景 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="05" title="第一作者背景" subtitle="乔治 · 天津大学环境科学与工程学院" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed mb-0">
            乔治，博士，天津大学环境科学与工程学院英才副教授、博士生导师，现任环境科学与生态系副主任。他的研究方向正是教材内容的学术底色：耦合地理信息系统、遥感与数值模拟技术，综合解决城市气候效应、大气污染、土地利用/覆被变化、低碳与能源等生态环境实践问题。他主持国家自然科学基金、天津市自然科学基金等科研项目
            10 余项，发表学术论文 80 余篇（另据近期更新，已逾 120 篇，多篇入选 ESI
            高被引），出版教材和专著 6 部，曾获天津市自然科学二等奖，并连续入选“全球前 2%
            科学家榜单”。教学方面，他曾获全国高校 GIS 青年教师讲课竞赛一等奖，并指导学生获得中国大学生 GIS
            软件开发竞赛一等奖，教材的实验编排与其一线教学经验直接相关。
          </p>
        </div>
      </section>

      {/* 06 配套资源与附录 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="06" title="配套资源与附录" subtitle="分章实验数据与四个附录" />
        <div className="glass-card p-6 md:p-8 mb-6">
          <p className="text-gray-700 leading-relaxed mb-0">
            教材每章均配有实验数据，读者可在资源环境科学与数据平台（resdc.cn）等渠道获取对应的数据集，用于跟随操作。出版社官网另提供分章实验数据包下载入口。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {appendices.map((item) => (
            <div
              key={item.title}
              className="topic-sheen rounded-2xl border border-white/70 bg-white/55 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <h3 className="text-sm font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-xs text-gray-600 mb-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 07 适用读者 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="07" title="适用读者" subtitle="高等院校本科生与研究生，及相关领域读者" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            根据多个书目来源的一致表述，本教材适合作为高等院校环境科学与工程类、自然保护与生态环境类、地理科学类、测绘类、建筑类、公共管理类等专业的本科生与研究生的
            GIS 和遥感综合实验教材，也可供对生态环境空间信息与数字技术感兴趣的读者参考。
          </p>
          <div className="flex flex-wrap gap-2">
            {disciplines.map((item) => (
              <span
                key={item}
                className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/80 p-5">
          <p className="text-sm text-amber-900 leading-relaxed mb-0">
            <strong>需要注意：</strong>目录中部分章节的实验标题在不同书目来源之间存在细微用字差异（如“固体废弃物实验”与“固体废弃物买验”、“新能源生态环境实验”与“新能源生态环境试验”），上述目录以天津大学出版社及图书馆书目记录为准进行了校订。若需确认某一实验的具体软件版本或数据年份，建议查阅实体书或出版社提供的配套数据说明。
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

export default EcoEnvironmentTutorial;
