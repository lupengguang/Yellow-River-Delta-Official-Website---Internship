import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, TiltCard } from './topicPageKit';

const coverUrl = `${import.meta.env.BASE_URL}images/卜坤Python与开源GIS一数据处.png`;

const infoRows = [
  ['书名', 'Python 与开源GIS——数据处理、空间分析与地图制图'],
  ['作者', '卜坤'],
  ['出版社', '科学出版社'],
  ['出版时间', '2019 年 11 月'],
  ['ISBN', '978-7-03-062927-2'],
  ['定价', '108.00 元'],
  ['页数', '343 页（含 2 页彩图版）'],
  ['开本', 'B5 / 24cm'],
  ['中图分类号', 'P208.2（地理信息系统）']
];

const toolChain = [
  {
    num: '一',
    title: '栅格数据处理：GDAL',
    desc:
      'GDAL（Geospatial Data Abstraction Library）是开源 GIS 生态中栅格数据读写的底层基础设施。书中用专门章节讲解数据模型、像元访问、数据集创建与保存、影像金字塔构建、仿射地理变换等核心操作，并明确将 GDAL 定位为“大部分开源 GIS 的基础，也包括如 ArcGIS、FME 这样的商业软件”的共同依赖。'
  },
  {
    num: '二',
    title: '矢量数据处理：OGR',
    desc:
      'OGR 是 GDAL 项目中负责矢量数据读写的组件。书中以 Shapefile 等常用格式为例，讲解如何通过 Python 调用 OGR 获取矢量数据信息、遍历要素、读写几何与属性字段。'
  },
  {
    num: '三',
    title: '空间参考与坐标转换',
    desc:
      '空间参考是 GIS 数据正确叠加与分析的前提。书中设有独立章节处理这一主题，与栅格、矢量数据的读写章节形成衔接，确保读者在完成数据 I/O 之后能够处理投影与坐标系问题。'
  },
  {
    num: '四',
    title: '矢量空间分析：Shapely',
    desc:
      'Shapely 是基于 GEOS 库的 Python 几何操作库，提供缓冲区、相交、合并、距离计算等平面几何运算。书中用专门章节讲解其在矢量数据空间分析中的应用，将其定位为 Python 开源 GIS 栈中承担“分析”环节的核心工具。'
  },
  {
    num: '五',
    title: '空间数据库：SpatiaLite',
    desc:
      'SpatiaLite 是 SQLite 的空间扩展，适合轻量级、单文件的空间数据存储与查询。该书的引入意味着读者不仅学习文件格式的读写，也接触基于 SQL 的空间数据管理方式。'
  },
  {
    num: '六',
    title: '地图制图：Mapnik',
    desc:
      'Mapnik 是一个成熟的制图渲染引擎，OpenStreetMap 等大型项目曾长期使用。书中将其作为地图制图章节的核心工具，讲解如何通过 Python 驱动 Mapnik 完成符号化与地图输出。'
  },
  {
    num: '七',
    title: '基础铺垫：GIS 概念与 Python 准备',
    desc:
      '第 1 章承担“降低入口门槛”的功能，涵盖 GIS 与开源 GIS 的基本概念、空间数据模型与常用格式、GeoJSON/TIFF 等格式介绍、虚拟机环境配置以及 Python 基础语法回顾，为后续章节的库操作提供共同的概念基线。'
  }
];

const resources = [
  {
    title: '源代码',
    desc: '托管于 GitHub（github.com/bukun/book_python_gis），代码经过测试，可在 Linux 中运行，大部分也可在 Windows 中运行。'
  },
  {
    title: '配套数据',
    desc: '约 140.55MB，包含全球海岸线数据、中国分县数据、中国主要城市数据等，仅限学习与实验使用。'
  },
  {
    title: '虚拟机镜像',
    desc: '约 2.25GB，基于 VirtualBox 制作，操作系统为 Debian Buster (10) 64 位，提供开箱可用的实验平台。'
  },
  {
    title: '课件与 PDF 预览',
    desc: '2016—2019 年间培训使用的课件（约 12.34MB）以及部分章节的 PDF 预览文件均可获取。'
  },
  {
    title: '获取方式',
    desc: '配套资源通过微信公众号（gislite）提供下载入口，书中也注明资源网站会随内容更新。'
  }
];

const audiences = [
  {
    title: 'GIS 基础 + 开源工具链',
    desc: '已有 GIS 理论基础、需要转向开源工具链的读者：该书是较为系统的“翻译层”，帮助把 ArcGIS/ENVI 等商业软件中的操作逻辑映射到 Python + 开源库的代码实现上。'
  },
  {
    title: 'Python 基础 + 空间数据开发',
    desc: '具备 Python 基础、需要处理空间数据的开发者：GDAL/OGR 与 Shapely 章节提供了直接可用的代码范式，但代码以 Python 3 为基准，部分库 API 在后续版本中可能有细微变化，应以配套 GitHub 仓库的当前状态为准。'
  },
  {
    title: '零基础初学者',
    desc: '零 GIS 基础、零 Python 基础的初学者：第 1 章的概念铺垫和虚拟机镜像降低了起步难度，但该书并不替代系统的 GIS 原理教材或 Python 入门教程，更适合作为“在做的过程中补概念”的实操手册。'
  }
];

function PythonOpenSourceGis() {
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
                alt="Python 与开源GIS——数据处理、空间分析与地图制图封面"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="text-xs md:text-sm text-emerald-700 tracking-[0.3em] mb-2">
              PROFESSIONAL BOOK · 软件操作
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-3">
              Python 与开源GIS——数据处理、空间分析与地图制图
            </h1>
            <p className="text-sm md:text-base text-gray-500 mb-4">
              卜坤 著 · 科学出版社 · 2019 年 11 月
            </p>
            <p className="text-gray-700 leading-relaxed">
              本书是一本以<strong className="text-emerald-700">应用开发为导向</strong>
              的技术专著。它并不试图充当 Python 语法教程或 GIS
              理论教科书，而是围绕“用 Python 驱动开源 GIS 工具完成实际空间数据处理任务”这一目标，系统梳理了从栅格/矢量数据读写、空间分析到地图制图输出的完整技术链条。该书由中国科学院东北地理与农业生态研究所副研究员卜坤撰写，2019
              年由科学出版社出版，配套资源持续通过 GitHub 和专用平台维护更新。
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['作者：卜坤', '科学出版社', '2019 年 11 月', '343 页', '定价 108.00 元'].map((chip) => (
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
                    {['作者', '出版社', '出版时间', 'ISBN'].includes(label) ? (
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
            <strong>关于版本记录的说明：</strong>
            部分书目平台（如全国大中专教材采选系统、当当）显示“2024 年 12 月”或“2026 年 8
            月”等时间，这些记录对应的是重印或按需印刷批次，并非内容经过修订的新版。该书的
            <strong>首版时间为 2019 年 11 月</strong>，后续印次在正文内容上并未做实质性更新。
          </p>
        </div>
      </section>

      {/* 02 作者背景 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="02" title="作者背景" subtitle="卜坤 · 中国科学院东北地理与农业生态研究所" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed mb-0">
            卜坤，中国科学院东北地理与农业生态研究所副研究员，研究领域为地理信息系统。他在开源 GIS
            开发与空间数据处理方面有长期的项目积累，该书的编写基于其“多年的工作经验”，而非单纯的文献综述。作者在配套平台上保留了从选题确定（2014
            年）到初稿提交、多轮校对直至 2019
            年首印的完整出版过程记录，从一个侧面说明该书的内容经过了较长时间的教学与项目检验。
          </p>
        </div>
      </section>

      {/* 03 内容体系与核心工具链 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle
          index="03"
          title="内容体系与核心工具链"
          subtitle="数据处理、空间分析、地图制图三条主线；“经典核心库 + 主干链条”"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {toolChain.map((item) => (
            <TiltCard key={item.num} base="glass-card-soft" className="topic-sheen p-6">
              <div className="flex items-center gap-3 mb-2">
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
            <strong>一个需要留意的范围边界：</strong>
            该书的核心工具链以 GDAL/OGR、Shapely、SpatiaLite、Mapnik
            为主干。近年社区中广泛使用的 GeoPandas（整合 pandas、shapely、fiona、pyproj
            等）虽然在日常 Python GIS 工作中极为常见，但并非该书的主线内容。如果读者的目标是快速上手
            GeoPandas 进行表格型空间数据操作，该书需要配合其他资源使用；如果目标是理解开源 GIS
            的底层数据读写与制图管线，该书的核心章节则具有不可替代的价值。
          </p>
        </div>
      </section>

      {/* 04 配套资源与学习环境 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="04" title="配套资源与学习环境" subtitle="源码、数据、虚拟机与课件持续可获取" />
        <div className="glass-card p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.map((item) => (
              <div
                key={item.title}
                className="topic-sheen rounded-xl border border-white/70 bg-white/55 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <h3 className="text-sm font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 读者对象与使用建议 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="05" title="读者对象与使用建议" subtitle="因读者背景而异的使用价值" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="topic-sheen rounded-2xl border border-white/70 bg-white/55 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <h3 className="text-sm font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 06 版本说明与评价参考 */}
      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="06" title="版本说明与评价参考" subtitle="体系完整、代码可运行，注意库版本迭代" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            该书在读者社区中的评价集中于两点：<strong className="text-emerald-700">体系完整</strong>与
            <strong className="text-emerald-700">代码可运行</strong>。有读者指出“所有代码通过仔细的调试，使用
            GitHub 托管，并通过单元测试”，认为其在开源 GIS
            开发方面“整个体系非常的完整与全面”。
          </p>
          <p className="text-gray-600 leading-relaxed mb-0">
            同时，由于该书出版于 2019 年，Python GIS
            生态在此后数年间经历了 GeoPandas 的进一步普及和多个库的版本迭代，读者在跟随书中示例时，建议优先使用配套虚拟机镜像或对照
            GitHub 仓库的最新代码分支，以避免因库版本差异导致的运行问题。若需要覆盖更近期的工具生态（如
            GeoPandas、Rasterio、Folium 等），可将其与近年出版的其他 Python GIS
            实践类图书配合使用，形成“底层管线 + 高层封装”的互补阅读。
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

export default PythonOpenSourceGis;
