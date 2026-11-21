import React from 'react';

const IMG = (prompt, size) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;

const heroImage = IMG(
  'Yellow River Delta wetland at sunset, vast reed beds, flocks of cranes flying over golden marsh, aerial cinematic landscape photography, ultra detailed',
  'landscape_16_9'
);

const geographyImage = IMG(
  'Aerial view of Yellow River estuary meeting the Bohai Sea, sediment plume, coastal wetlands and tidal channels, natural color satellite style',
  'landscape_4_3'
);

const newWetlandImage = IMG(
  'Suaeda salsa red beach wetland in Yellow River Delta, red salt marsh vegetation, blue sky and distant birds, nature photography',
  'landscape_4_3'
);

const storkImage = IMG(
  'Oriental white stork standing in a wetland nest, Yellow River Delta, telephoto wildlife photography, soft morning light',
  'portrait_4_3'
);

const gullImage = IMG(
  'Flock of black headed gulls flying over coastal wetland, Yellow River Delta, wildlife photography, blue sky',
  'landscape_4_3'
);

const restorationImage = IMG(
  'Ecological water replenishment canal flowing into restored wetland, dense reeds, swans on water, environmental restoration project',
  'landscape_16_9'
);

const SectionTitle = ({ index, title, subtitle }) => (
  <div className="flex items-start gap-4 mb-8">
    <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-lg flex items-center justify-center shadow-lg shadow-emerald-500/30">
      {index}
    </span>
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
      {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
    </div>
  </div>
);

function ReserveIntro() {
  const stats = [
    { value: '15.3万公顷', label: '传统保护区面积', note: '湿地占 74%' },
    { value: '35.18万公顷', label: '最新区情总面积', note: '含海域 2147 km²' },
    { value: '407种', label: '鸟类记录', note: '建区初期 187 种' },
    { value: '1790种', label: '野生动物', note: '含鸟类 407 种' },
    { value: '685种', label: '植物记录', note: '野生种子植物 193 种' }
  ];

  const zones = [
    { name: '核心区', area: '59,419', ratio: '约 38.8%', rule: '严格保护，禁止任何人为干扰（科研监测除外）' },
    { name: '缓冲区', area: '11,233', ratio: '约 7.3%', rule: '缓冲核心区压力，限制人为活动' },
    { name: '实验区', area: '82,348', ratio: '约 53.8%', rule: '可开展生态修复、科研、教育和可持续利用活动' }
  ];

  return (
    <div className="pb-16 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img src={heroImage} alt="黄河三角洲湿地" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-[#eef5f3]" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-20 md:pb-24">
            <div className="max-w-3xl glass-panel p-6 md:p-8">
              <p className="text-emerald-700 font-medium tracking-wide mb-2">保护区简介</p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                山东黄河三角洲<br className="hidden md:block" />国家级自然保护区
              </h1>
              <p className="text-gray-700 text-sm md:text-base">
                1992 年 10 月经国务院批准建立的湿地类型自然保护区，守护黄河口新生湿地生态系统与珍稀濒危鸟类。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 核心数据 */}
      <section className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((item) => (
            <div key={item.label} className="glass-card-soft p-5 text-center">
              <p className="text-xl md:text-2xl font-bold text-emerald-700 mb-1">{item.value}</p>
              <p className="text-sm text-gray-700 font-medium">{item.label}</p>
              <p className="text-xs text-gray-500 mt-1">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 概述 */}
      <section className="container mx-auto px-4 mt-14">
        <div className="glass-card p-6 md:p-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            保护区位于山东省东营市境内的黄河入海口，北临渤海，东靠莱州湾，以保护黄河口新生湿地生态系统和珍稀濒危鸟类为根本目标。这里拥有中国暖温带
            <strong className="text-emerald-700">保存最完整、最广阔、最年轻</strong>
            的湿地生态系统，在河口湿地生态学、生物多样性保护及全球候鸟迁飞网络中具有不可替代的地位。
          </p>
          <p className="text-gray-600 leading-relaxed mb-0">
            保护区地处黄河现行入海口与 1976 年黄河改道前的刁口河故道入海口一带，地理坐标大致介于北纬
            37°34′—38°12′、东经 118°32′—119°20′ 之间，分为南北两个区域：南部区域位于现行黄河入海口，北部区域位于 1976
            年改道后的黄河故道入海口。
          </p>
        </div>
      </section>

      {/* 一、地理位置与范围演变 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="01" title="地理位置与范围演变" subtitle="两种面积口径对应不同时期的保护范围界定" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <div className="glass-card p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed">
              在较长时间段内，公开资料和功能区划文件普遍采用
              <strong className="text-emerald-700">15.3 万公顷（1530 平方公里）</strong>
              这一数据，其中湿地面积 11.31 万公顷，占总面积的 74%。保护区官方最新“区情概况”显示，当前总面积已更新为
              <strong className="text-emerald-700">35.18 万公顷</strong>，包含陆域 1371 平方公里与海域 2147 平方公里。
            </p>
            <p className="text-gray-600 leading-relaxed mb-0">
              这一变化与近年来自然保护地整合优化、海域空间纳入保护范围的趋势一致。引用面积数据时，15.3
              万公顷对应以陆域及潮间带为主体的传统保护区范围，35.18
              万公顷则是当前涵盖海域的完整统计口径，两者不宜混用。
            </p>
          </div>
          <div className="glass-frame">
            <img src={geographyImage} alt="黄河入海口地理格局" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 二、保护对象与核心价值 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="02" title="保护对象与核心价值" subtitle="新生湿地生态系统与珍稀濒危鸟类双重核心" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card overflow-hidden">
            <img src={newWetlandImage} alt="盐地碱蓬新生湿地" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-700 mb-3">黄河口新生湿地生态系统</h3>
              <p className="text-gray-600 leading-relaxed mb-0">
                黄河泥沙持续淤积使陆地不断向海推进，形成中国沿海最大的一片新生湿地自然植被区，自然植被覆盖率达 55.1%。
                盐地碱蓬、柽柳、芦苇、野大豆、罗布麻等乡土植物广泛分布，构成从光滩、盐地碱蓬群落、柽柳群落向芦苇草甸渐进演替的典型河口原生植被序列。
              </p>
            </div>
          </div>
          <div className="glass-card overflow-hidden">
            <img src={gullImage} alt="湿地候鸟群" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">“鸟类的国际机场”</h3>
              <p className="text-gray-600 leading-relaxed mb-0">
                保护区横跨东亚—澳大利西亚和环西太平洋两条全球候鸟迁飞路线，是数百万只候鸟的关键中转站、越冬地和繁殖地。2024
                年 7 月，作为“中国黄（渤）海候鸟栖息地（第二期）”重要组成部分，黄河口候鸟栖息地被列入《世界遗产名录》。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 三、功能区划 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="03" title="功能区划" subtitle="2012 年功能区调整方案，15.3 万公顷范围内分区管理" />
        <div className="glass-card p-4 md:p-8 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left border-collapse">
            <thead>
              <tr className="text-sm text-gray-500">
                <th className="py-3 px-4 font-medium">功能区</th>
                <th className="py-3 px-4 font-medium">面积（公顷）</th>
                <th className="py-3 px-4 font-medium">占比</th>
                <th className="py-3 px-4 font-medium">管理要求</th>
              </tr>
            </thead>
            <tbody>
              {zones.map((zone) => (
                <tr key={zone.name} className="border-t border-white/60 transition-colors duration-300 hover:bg-white/40">
                  <td className="py-4 px-4 font-semibold text-emerald-700">{zone.name}</td>
                  <td className="py-4 px-4 text-gray-700">{zone.area}</td>
                  <td className="py-4 px-4 text-gray-600">{zone.ratio}</td>
                  <td className="py-4 px-4 text-gray-600">{zone.rule}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-4 mb-0">
            核心区设三处，分别位于黄河口管理站、大汶流管理站和一千二管理站辖区。上述面积对应 15.3
            万公顷传统范围；在 35.18 万公顷扩展口径下，海域部分另有安排，但陆域核心区保护边界与管控要求保持稳定。
          </p>
        </div>
      </section>

      {/* 四、生物多样性 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="04" title="生物多样性" subtitle="数据随监测能力提升持续更新，以官方最新发布为准" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-emerald-700 mb-3">鸟类</h3>
            <p className="text-gray-600 leading-relaxed mb-0">
              由建区初期 187 种增至当前 407 种（2026 年监测数据）；国家一级保护鸟类 26 种，国家二级保护鸟类 71 种。
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-emerald-700 mb-3">野生动物整体</h3>
            <p className="text-gray-600 leading-relaxed mb-0">
              记录野生动物 1790 种（含鸟类 407 种），涵盖兽类、两栖爬行类、鱼类及大型底栖动物等类群。
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-emerald-700 mb-3">植物</h3>
            <p className="text-gray-600 leading-relaxed mb-0">
              记录植物 685 种，其中野生种子植物 193 种；盐地碱蓬、柽柳、芦苇、野大豆、罗布麻为代表性乡土物种。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="glass-card overflow-hidden">
            <img src={storkImage} alt="东方白鹳" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">东方白鹳 · 全球最重要繁殖地</h3>
              <p className="text-gray-600 mb-0">
                繁殖种群增长显著，保护区获授“中国东方白鹳之乡”称号。
              </p>
            </div>
          </div>
          <div className="glass-card overflow-hidden">
            <img src={gullImage} alt="黑嘴鸥" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">黑嘴鸥 · 全球第二大繁殖地</h3>
              <p className="text-gray-600 mb-0">
                繁殖种群稳定在 1 万余只，保护区获授“中国黑嘴鸥之乡”称号；丹顶鹤越冬数量曾录得 389 只。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 五、生态修复与水文管理 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="05" title="生态修复与水文管理" subtitle="生态补水与水系连通是修复的核心手段" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: '1.7亿m³+', label: '“十四五”年均生态补水' },
            { value: '18.2亿m³', label: '2008 年以来累计补水（至 2026）' },
            { value: '241公里', label: '已疏通水系' },
            { value: '131m³/s', label: '引水能力（原不足 40）' }
          ].map((item) => (
            <div key={item.label} className="glass-card-soft p-5 text-center">
              <p className="text-xl md:text-2xl font-bold text-emerald-700 mb-1">{item.value}</p>
              <p className="text-xs md:text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 items-stretch">
          <div className="glass-card p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed">
              黄河三角洲成陆时间短，土壤盐渍化严重，生态系统稳定性高度依赖淡水补给。持续淡水输入有效抑制盐水上溯，为植被恢复创造条件。
            </p>
            <p className="text-gray-600 leading-relaxed mb-0">
              已修筑、恢复生态堤坝 41.6 公里；累计治理互花米草 13.1 万亩，恢复盐地碱蓬、海草床等本土植被 5.2 万至 5.3
              万亩，退耕还湿、退养还滩 7.25 万亩，修复湿地 188 平方公里。
            </p>
          </div>
          <div className="glass-frame">
            <img src={restorationImage} alt="生态补水与湿地修复" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 六、保护地体系与管理依据 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="06" title="保护地体系与管理依据" subtitle="多层级保护地体系与“1+N”地方法规框架" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-emerald-700 mb-4">保护地整合</h3>
            <p className="text-gray-600 leading-relaxed mb-0">
              以黄河三角洲国家级自然保护区为核心，周边整合黄河三角洲国家地质公园、黄河口国家森林公园、黄河口生态国家级海洋特别保护区等
              8 处自然保护地，统一纳入黄河口国家公园创建范围，推动从“分区保护”向“系统保护”转型。
            </p>
          </div>
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-emerald-700 mb-4">法规体系</h3>
            <p className="text-gray-600 leading-relaxed mb-0">
              东营市已构建以《东营市黄河三角洲生态保护与修复条例》为主干的“1+N”生态法规体系，配套《山东黄河三角洲国家级自然保护区条例》（2017
              年 5 月施行）、《东营市湿地保护条例》《东营市海岸带保护条例》等专项法规，明确执法权限与部门衔接机制。
            </p>
          </div>
        </div>

        <div className="glass-card p-6 md:p-8 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-5">国际与国内认定</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { year: '1994', text: '列为具有国际意义的湿地保护地点' },
              { year: '2006', text: '确定为国家级示范自然保护区' },
              { year: '2013', text: '列入《国际重要湿地名录》（山东省首个）' },
              { year: '2024', text: '列入《世界遗产名录》（山东省首个世界自然遗产）' }
            ].map((item) => (
              <div key={item.year} className="glass-panel p-5">
                <p className="text-2xl font-bold text-emerald-700 mb-2">{item.year}</p>
                <p className="text-sm text-gray-600 mb-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 md:p-8 mt-6">
          <p className="text-gray-600 leading-relaxed mb-0">
            综上，黄河三角洲国家级自然保护区的保护价值根植于黄河与渤海交互作用下持续生成的新生湿地，其管理成效取决于淡水补给的持续性、入侵物种防控的长效性以及多层级保护地体系的协同性。在面积口径上，15.3
            万公顷与 35.18 万公顷分别对应不同时期的保护范围界定，引用时宜根据语境明确所选口径及其适用范围。
          </p>
        </div>
      </section>
    </div>
  );
}

export default ReserveIntro;
