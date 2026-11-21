import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMG, TopicHero, SectionTitle, TiltCard, RevealRow } from './topicPageKit';

const heroImage = IMG(
  'Modern nature reserve administration building beside coastal wetland in Yellow River Delta, reeds and water, clear sky, architectural photography, ultra detailed',
  'landscape_16_9'
);

const stats = [
  { value: '9 个', label: '管委会内设职能机构', note: '机构改革后架构' },
  { value: '4 大板块', label: '职能划分', note: '综合保障、资源监管、科研监测、旅游运营' },
  { value: '3 个', label: '已公开基层管理站', note: '黄河口、大汶流、一千二' },
  { value: '副厅级', label: '未来国家公园管理局', note: '拟整合 8 处保护地管理主体' }
];

const departments = [
  {
    name: '党政办公室（组织人事科）',
    board: '综合保障',
    boardClass: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    duty: '机关日常运转、文秘机要、人事管理、党建群团及考核考评的综合枢纽'
  },
  {
    name: '机关党委',
    board: '综合保障',
    boardClass: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    duty: '负责机关及下属单位的党的建设、党风廉政建设与纪检监察工作'
  },
  {
    name: '财政局',
    board: '综合保障',
    boardClass: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    duty: '承担相对独立的一级财政体制运行，负责预算决算、专项资金监管、国有资产管理与政府采购'
  },
  {
    name: '资源管理科',
    board: '资源监管',
    boardClass: 'bg-sky-50 text-sky-700 border-sky-100',
    duty: '自然资源与生态系统的直接监管，涵盖资源保护、修复项目监管及自然资源调查建档'
  },
  {
    name: '法制与安全管理科',
    board: '资源监管',
    boardClass: 'bg-sky-50 text-sky-700 border-sky-100',
    duty: '与资源管理科合署办公，负责法治建设、行政执法监督及安全生产综合监督管理'
  },
  {
    name: '科研中心',
    board: '科研监测',
    boardClass: 'bg-teal-50 text-teal-700 border-teal-100',
    duty: '组织实施科研课题，开展生物多样性研究、珍稀濒危物种调查及科研合作'
  },
  {
    name: '生态旅游中心',
    board: '旅游运营',
    boardClass: 'bg-amber-50 text-amber-700 border-amber-100',
    duty: '挂黄河三角洲鸟类博物馆牌子，承担生态旅游服务与科普宣教的具体运营'
  },
  {
    name: '生态监测中心',
    board: '科研监测',
    boardClass: 'bg-teal-50 text-teal-700 border-teal-100',
    duty: '依托智慧平台开展“天空地海”一体化监测，负责数据的采集、研判与预警反馈'
  },
  {
    name: '旅游管理科（规划建设科）',
    board: '旅游运营',
    boardClass: 'bg-amber-50 text-amber-700 border-amber-100',
    duty: '生态旅游规划编制与实施、旅游市场秩序监管、基础设施建设项目管理'
  }
];

function OrganizationStructure() {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="pb-16 min-h-screen">
      <TopicHero
        kicker="组织架构"
        title="党工委 · 管委会 · 基层管理站"
        description="山东黄河三角洲国家级自然保护区实行“一套人马、两块牌子”的合署运行模式，并向国家公园统一管理机构过渡。"
        image={heroImage}
        alt="黄河三角洲保护区管理机构与湿地环境"
        stats={stats}
      />

      {/* 返回按钮 */}
      <section className="container mx-auto px-4 mt-6">
        <button
          type="button"
          onClick={goBack}
          className="group inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm text-gray-700 backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-500/10"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          返回上一页
        </button>
      </section>

      {/* 01 决策核心与行政主体 */}
      <section className="container mx-auto px-4 mt-12">
        <SectionTitle
          index="01"
          title="决策核心与行政主体"
          subtitle="党工委与管委会合署运行，党政合一"
        />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-3 glass-card p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-emerald-700">
                中共山东黄河三角洲国家级自然保护区工作委员会（党工委）
              </strong>
              是最高决策机构，与管委会实行“一套人马、两块牌子”的合署运行模式。党工委书记与管委会主任由同一人担任（现任为许明德），这种“党政合一”的安排确保了生态保护决策的集中统一与执行效率。
            </p>
            <p className="text-gray-600 leading-relaxed">
              管委会作为行政执行主体，其法定职责覆盖了从制度制定、规划编制到综合执法的全链条。把鼠标移到下面四项职责上可展开查看。
            </p>
            <div className="space-y-1">
              <RevealRow title="制度与规划" badge="全链条">
                制定保护区与生态旅游区的各项管理制度，负责规划编制。
              </RevealRow>
              <RevealRow title="综合执法" badge="集中行使">
                集中行使环境保护、国土资源、海域使用、森林防火、野生动植物保护等领域的部分行政处罚权。
              </RevealRow>
              <RevealRow title="修复与调查" badge="组织实施">
                负责生态修复项目的组织实施与自然资源调查监测。
              </RevealRow>
              <RevealRow title="旅游秩序" badge="依法管理">
                依法管理生态旅游秩序。
              </RevealRow>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="group glass-panel p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200">
              <p className="text-xs text-gray-500 mb-2">最高决策机构</p>
              <p className="text-lg font-semibold text-gray-800 mb-1">党工委</p>
              <p className="text-xs text-gray-500 mb-0">书记与管委会主任由同一人担任</p>
            </div>
            <div className="text-center text-emerald-600 text-xl leading-none">⇅</div>
            <div className="group glass-panel p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200">
              <p className="text-xs text-gray-500 mb-2">行政执行主体</p>
              <p className="text-lg font-semibold text-gray-800 mb-1">管委会</p>
              <p className="text-xs text-gray-500 mb-0">制度制定 · 规划编制 · 综合执法</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 px-5 py-4 text-center text-white shadow-lg shadow-emerald-500/25 transition-transform duration-500 hover:scale-[1.02]">
              <p className="text-xs opacity-90 mb-1">运行模式</p>
              <p className="text-base font-semibold mb-0">一套人马 · 两块牌子</p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 内设职能机构 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="02"
          title="内设职能机构"
          subtitle="9 个职能机构，按功能划分为四大板块"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { name: '综合保障', count: 3, cls: 'from-emerald-500 to-teal-600' },
            { name: '资源监管', count: 2, cls: 'from-sky-500 to-blue-600' },
            { name: '科研监测', count: 2, cls: 'from-teal-500 to-cyan-600' },
            { name: '旅游运营', count: 2, cls: 'from-amber-500 to-orange-500' }
          ].map((board) => (
            <div
              key={board.name}
              className={`group rounded-2xl bg-gradient-to-br ${board.cls} p-4 text-white text-center shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl`}
            >
              <p className="text-2xl font-bold mb-0 topic-float">{board.count}</p>
              <p className="text-xs opacity-90 mb-0">{board.name}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-2 md:p-4 overflow-x-auto">
          <table className="w-full min-w-[680px] text-left border-collapse">
            <thead>
              <tr className="text-xs md:text-sm text-gray-500">
                <th className="py-3 px-3 font-medium">机构名称</th>
                <th className="py-3 px-3 font-medium">板块</th>
                <th className="py-3 px-3 font-medium">核心职能定位</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept) => (
                <tr
                  key={dept.name}
                  className="group border-t border-white/60 transition-all duration-300 hover:bg-white/55"
                >
                  <td className="py-3.5 px-3 text-sm font-semibold text-gray-800 transition-colors duration-300 group-hover:text-emerald-700">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      {dept.name}
                    </span>
                  </td>
                  <td className="py-3.5 px-3">
                    <span
                      className={`inline-block rounded-full border px-2.5 py-1 text-[11px] whitespace-nowrap ${dept.boardClass}`}
                    >
                      {dept.board}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-sm text-gray-600">{dept.duty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="glass-panel p-6 md:p-8 mt-6">
          <p className="text-sm text-gray-600 leading-relaxed mb-0">
            需要说明的是，在更早的“管理局”时期，内设机构曾包括社会事务局、规划建设局、旅游发展局、宣传教育处、湿地博物馆等
            10 个正科级机构。当前的 9 机构架构是机构改革后职能整合与聚焦的结果，反映了管理重心从“社会事务综合管理”向“生态保护核心职能”的收敛。
          </p>
        </div>
      </section>

      {/* 03 基层管理站与执法延伸 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="03"
          title="基层管理站与执法延伸"
          subtitle="把管理触角延伸至保护区一线"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: '黄河口管理站',
              note: '挂垦利区孤岛林场、山东黄河三角洲国家级自然保护区黄河口执法大队牌子'
            },
            { name: '大汶流管理站', note: '保护区一线巡护监测与生态修复执行单元' },
            { name: '一千二管理站', note: '保护区一线巡护监测与生态修复执行单元' }
          ].map((station) => (
            <TiltCard key={station.name} className="topic-sheen p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{station.name}</h3>
              <p className="text-sm text-gray-600 mb-0">{station.note}</p>
            </TiltCard>
          ))}
        </div>
        <div className="glass-card p-6 md:p-8 mt-6">
          <p className="text-gray-700 leading-relaxed mb-0">
            这些管理站是巡护监测、生态修复措施落地、日常执法巡查的前沿执行单元，其管辖范围大致对应保护区的核心区与缓冲区布局。执法大队的挂牌意味着基层站点同时具备行政执法主体资格，实现了“巡护—发现—处置”的短链条闭环。
          </p>
        </div>
      </section>

      {/* 04 向国家公园管理局的体制过渡 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="04"
          title="向国家公园管理局的体制过渡"
          subtitle="现行管委会架构是创建背景下的过渡性安排"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-emerald-700 mb-3">省级筹建统筹</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-0">
              省级层面已成立由省长任组长的黄河口国家公园筹建工作领导小组（办公室设在省自然资源厅），负责统筹创建阶段的跨部门协调。
            </p>
          </div>
          <TiltCard className="topic-sheen p-6 md:p-8">
            <h3 className="text-lg font-semibold text-emerald-700 mb-3">未来的国家公园管理局</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-0">
              根据已提出的管理机构设置方案，未来的黄河口国家公园管理局将由划定范围内现有各自然保护地管理机构（包括保护区管委会、地质公园、森林公园、海洋特别保护区等
              8 处保护地的管理主体）整合组建，级别为副厅级。
            </p>
          </TiltCard>
        </div>

        <div className="glass-panel p-6 md:p-8 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">统一职责与职能重组</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {['生态保护', '自然资源资产管理', '特许经营管理', '社会参与管理'].map((duty) => (
              <span
                key={duty}
                className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs text-emerald-700 transition-all duration-500 hover:-translate-y-0.5 hover:bg-emerald-100 hover:shadow-md hover:shadow-emerald-500/10"
              >
                {duty}
              </span>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-0">
            这意味着当前管委会的 9 个内设机构与基层站点，将在国家公园正式设立后经历一次系统性的职能重组与层级调整，从“市政府派出机构”转变为“国家公园统一管理机构”。
          </p>
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={goBack}
            className="group inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-5 py-2.5 text-sm text-gray-700 backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-500/10"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            返回上一页
          </button>
        </div>
      </section>
    </div>
  );
}

export default OrganizationStructure;
