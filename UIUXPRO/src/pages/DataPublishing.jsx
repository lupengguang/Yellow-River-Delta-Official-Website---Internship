import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from './topicPageKit';

const img = (file) => `${import.meta.env.BASE_URL}images/${file}`;

// 数据出版条目：题目 / 关键词 / 授权人 / 缩略图
const records = [
  { title: '东北地区植被净第一生产力（NPP）数据集', keywords: '中国 东北地区 NPP 植被生产力', author: '徐新良', thumb: '黄河三角洲NPP.png', category: '植被' },
  { title: '2015年各省市统计年鉴', keywords: '中国 统计年鉴', author: '徐新良', category: '统计数据' },
  { title: '2016年各省市统计年鉴', keywords: '中国 统计年鉴', author: '徐新良', category: '统计数据' },
  { title: '2017年各省市统计年鉴', keywords: '中国 统计年鉴', author: '徐新良', category: '统计数据' },
  { title: '基于GF7卫星影像的数字表面模型（DSM）生产数据', keywords: '数字表面模型 DSM GF7卫星影像', author: '徐新良', category: '地形地貌' },
  { title: '城市内部土地覆盖高分辨率遥感监测数据', keywords: '城市 土地覆盖 高分辨率 遥感监测', author: '徐新良', thumb: '黄河三角洲土地利用数据.png', category: '土地利用' },
  { title: '2025年度气象数据', keywords: '气象', author: '徐新良', thumb: '黄河三角洲年均气温.png', category: '气象' },
  { title: '三峡库区范围边界数据', keywords: '三峡库区', author: '徐新良', category: '行政区划' },
  { title: '中国地形坡向空间分布数据', keywords: '中国 坡向', author: '徐新良', thumb: '黄河三角洲坡向数据.png', category: '地形地貌' },
  { title: '中国地形起伏度空间分布数据', keywords: '中国 地形起伏度', author: '徐新良', thumb: '黄河三角洲地形起伏度数据.png', category: '地形地貌' },
  { title: '中国坡度空间分布数据', keywords: '中国 坡度', author: '徐新良', thumb: '黄河三角洲坡度数据.png', category: '地形地貌' },
  { title: '中国多时期陆地生物丰度指数', keywords: '中国 生物丰度指数', author: '徐新良', category: '生态系统' },
  { title: '中国西南石漠化重点分布区', keywords: '中国 西南 石漠化', author: '徐新良', category: '生态系统' },
  { title: '全国矿产空间分布数据', keywords: '全国 矿产分布', author: '徐新良', category: '其他' },
  { title: '中国河流水系空间分布数据', keywords: '中国 河流水系', author: '徐新良', thumb: '黄河三角洲水系分布图.png', category: '水文' },
  { title: '中国气象要素各月度平均状况数据集', keywords: '中国 气象 月度', author: '徐新良', thumb: '黄河三角洲年均气温.png', category: '气象' },
  { title: '中国气象要素各年度平均状况数据集', keywords: '中国 气象 年度', author: '徐新良', thumb: '黄河三角洲年降水量.png', category: '气象' },
  { title: '中国气象要素各年代平均状况数据集', keywords: '中国 气象 年代', author: '徐新良', thumb: '黄河三角洲平均土壤湿度.png', category: '气象' },
  { title: '全球气象站气象要素小时尺度观测数据', keywords: '全球 气象 小时', author: '徐新良', category: '气象' },
  { title: '全球1958年以来月度尺度气象要素空间数据', keywords: '全球 气象 月度', author: '徐新良', category: '气象' },
  { title: '中国气象站逐日降水数据集', keywords: '中国 气象站 降水', author: '徐新良', thumb: '黄河三角洲年降水量.png', category: '气象' },
  { title: '中国气象站逐月降水数据集', keywords: '中国 气象站 降水 月度', author: '徐新良', category: '气象' },
  { title: '中国气象站逐年降水数据集', keywords: '中国 气象站 降水 年度', author: '徐新良', category: '气象' },
  { title: '全国各省站点不同空气质量分级日数据', keywords: '全国 空气 空气质量 分级 日数', author: '徐新良', category: '气象' },
  { title: '中国气象站日均气温数据集', keywords: '中国 气象站 气温 日均', author: '徐新良', thumb: '黄河三角洲年均气温.png', category: '气象' },
  { title: '中国气象站月均气温数据集', keywords: '中国 气象站 气温 月均', author: '徐新良', category: '气象' },
  { title: '中国蒸散发 ET、PET 月度 500m 数据集', keywords: '中国 蒸散发 ET PET 月度', author: '徐新良', thumb: '黄河三角洲MODIS地表蒸散发.png', category: '气象' },
  { title: '中国蒸散发 ET、PET 年度 500m 数据集', keywords: '中国 蒸散发 ET PET 年度', author: '徐新良', category: '气象' },
  { title: '中国 NPP、GPP 500m 数据集', keywords: '中国 NPP GPP 净初级生产力 总初级生产力', author: '徐新良', thumb: '黄河三角洲NPP.png', category: '植被' },
  { title: '中国年度 NPP、GPP 数据集', keywords: '中国 NPP GPP 年度', author: '徐新良', category: '植被' },
  { title: '中国 16 天 EVI、EVI 250m 数据集', keywords: '中国 植被指数 EVI 16天', author: '徐新良', thumb: '黄河三角洲EVI.png', category: '植被' },
  { title: '中国年度 EVI、EVI 250m 数据集', keywords: '中国 植被指数 EVI 年度', author: '徐新良', category: '植被' },
  { title: '中国土壤水蚀和风蚀数据', keywords: '中国 土壤 水蚀 风蚀 侵蚀模数', author: '徐新良', thumb: '黄河三角洲水蚀数据.png', category: '土壤' },
  { title: '中国水源涵养、防风固沙、土壤保持三大功能数据', keywords: '水源涵养 防风固沙 土壤保持', author: '徐新良', thumb: '黄河三角洲土壤保持.png', category: '生态系统' },
  { title: '中国九大农业区划', keywords: '中国 农业区划', author: '徐新良', category: '行政区划' },
  { title: '中国农业熟制区划', keywords: '中国 农业 熟制区划', author: '徐新良', category: '行政区划' },
  { title: '中国自然区划', keywords: '中国 自然区划', author: '徐新良', category: '行政区划' },
  { title: '全国自然保护区边界数据', keywords: '全国 自然保护区', author: '徐新良', thumb: '东营市自然保护区.png', category: '行政区划' },
  { title: '中国主要城市建筑屋顶轮廓和建筑高度空间分布数据', keywords: '中国 城市 建筑', author: '徐新良', category: '土地利用' },
  { title: '中国农田潜在蒸散空间分布数据集', keywords: '中国 农田 潜在蒸散', author: '徐新良', category: '气象' },
  { title: '中国农田熟制遥感监测数据集', keywords: '中国 农田 熟制 遥感监测', author: '徐新良', category: '土地利用' },
  { title: '中国农田生产力数据集', keywords: '中国 农田 生产力', author: '徐新良', category: '土地利用' },
  { title: '中国土壤质地空间分布数据', keywords: '中国 土壤质地 空间分布', author: '徐新良', thumb: '土壤质地(砂土).png', category: '土壤' },
  { title: '中国土壤侵蚀类型和程度空间分布数据', keywords: '中国 土壤侵蚀 空间分布', author: '徐新良', thumb: '黄河三角洲土壤侵蚀类型和程度空间分布数据.png', category: '土壤' },
  { title: '中国季度 NDVI、EVI 250m 数据集', keywords: '中国 植被指数 季度', author: '徐新良', thumb: '黄河三角洲NDVI.png', category: '植被' },
  { title: '中国月度 NDVI、EVI 250m 数据集', keywords: '中国 植被指数 月度', author: '徐新良', category: '植被' },
  { title: '中国年度 NDVI、EVI 1KM 数据集', keywords: '中国 植被指数 年度', author: '徐新良', category: '植被' },
  { title: '中国陆地生态系统服务价值空间分布数据集', keywords: '中国 生态系统服务价值 空间分布', author: '徐新良', category: '生态系统' },
  { title: '《生态环境空间信息与数字技术综合实验教程》数据', keywords: '生态环境 空间信息 数字技术', author: '乔治 等', category: '其他' },
  { title: '中国 2025 年土地利用现状遥感监测数据', keywords: '中国 2025 土地利用 遥感监测', author: '徐新良', thumb: '黄河三角洲土地利用数据.png', category: '土地利用' },
  { title: 'CIMP5 全球未来气候情景逐月数据集', keywords: 'CIMP5 全球 未来 气候情景 逐月', author: '徐新良、李佳慧', thumb: '中国CIMP6未来气候情景气温数据.png', category: '气象' },
  { title: 'CIMP5 中国未来气候情景逐月数据集', keywords: 'CIMP5 中国 未来 气候情景 逐月', author: '徐新良、李佳慧', category: '气象' },
  { title: 'CIMP5 中国未来气候情景逐年数据集', keywords: 'CIMP5 中国 未来 气候情景 逐年', author: '徐新良、李佳慧', category: '气象' },
  { title: '全球红色旅游区空间分布数据', keywords: '全球 红色旅游区 空间分布', author: '', category: '其他' },
  { title: '中国东北地区人口空间分布公里网数据集', keywords: '中国 东北地区 人口公里网 空间分布', author: '徐新良', category: '统计数据' },
  { title: '中国东北地区 GDP 空间分布公里网数据集', keywords: '中国 东北地区 GDP公里网 空间分布', author: '徐新良', category: '统计数据' },
  { title: '中国东北地区气象要素平均状况空间插值数据集', keywords: '中国 东北地区 气象要素 降水 气温 积温 湿润指数', author: '徐新良', category: '气象' },
  { title: '中国东北地区农田生产力数据集', keywords: '中国 东北地区 农田生产力', author: '徐新良、刘洛', category: '土地利用' },
  { title: '基于 DEM 提取的东北地区流域、河网数据集', keywords: '中国 流域 河网 数字高程模型', author: '徐新良', thumb: '黄河三角洲DEM数据.png', category: '水文' },
  { title: '中国东北地区陆地生态系统服务价值空间分布数据集', keywords: '中国 东北地区 生态系统服务价值', author: '徐新良', category: '生态系统' },
  { title: '中国东北地区 30m 逐年 NDVI 最大值数据集', keywords: '中国 东北地区 NDVI 30m', author: '徐新良', thumb: '黄河三角洲NDVI.png', category: '植被' },
  { title: '中国东北地区年度植被指数（NDVI）空间分布数据集', keywords: '中国 东北地区 植被指数 年度', author: '徐新良', category: '植被' },
  { title: '中国东北地区月度植被指数（NDVI）空间分布数据集', keywords: '中国 东北地区 植被指数 月度', author: '徐新良', category: '植被' },
  { title: '中国东北地区季度植被指数（NDVI）空间分布数据集', keywords: '中国 东北地区 植被指数 季度', author: '徐新良', category: '植被' },
  { title: '东北地区气象要素年度空间插值数据集', keywords: '东北地区 气象要素 年度 空间插值', author: '徐新良', thumb: '黄河三角洲年均气温.png', category: '气象' },
  { title: '东北地区10m逐年NDVI最大值数据集', keywords: '东北地区 NDVI 10m 年度', author: '徐新良', thumb: '黄河三角洲NDVI.png', category: '植被' },
  { title: '东北地区地表温度LST年度1KM数据集', keywords: '东北地区 地表温度 LST 年度', author: '徐新良', category: '气象' },
  { title: '东北地区地表温度LST月度1KM数据集', keywords: '东北地区 地表温度 LST 月度', author: '徐新良', category: '气象' },
  { title: '东北地区地表温度LST季度1KM数据集', keywords: '东北地区 地表温度 LST 季度', author: '徐新良', category: '气象' },
  { title: '东北地区LST 6天1KM数据集', keywords: '东北地区 地表温度 LST 6天', author: '徐新良', category: '气象' },
  { title: '东北地区多时期生态系统类型空间分布数据', keywords: '东北地区 多时期 生态系统类型 空间分布', author: '徐新良', category: '生态系统' },
  { title: '中国多时期生态系统类型空间分布数据', keywords: '中国 多时期 生态系统类型 空间分布', author: '徐新良', category: '生态系统' },
  { title: '东北地区1980年代100万土地利用数据', keywords: '东北地区 1980年代 100万 土地利用', author: '徐新良', thumb: '黄河三角洲土地利用数据.png', category: '土地利用' },
  { title: '中国1980年代100万土地利用数据', keywords: '中国 1980年代 100万 土地利用', author: '徐新良', thumb: '黄河三角洲土地利用数据.png', category: '土地利用' },
  { title: '东北地区多时期土地利用遥感监测数据集', keywords: '东北地区 多时期 土地利用 遥感监测', author: '徐新良', category: '土地利用' },
  { title: '东北地区气象要素逐月站点观测数据集', keywords: '东北地区 气象要素 逐月 站点观测', author: '徐新良', category: '气象' },
  { title: '东北地区气象要素逐日站点观测数据集', keywords: '东北地区 气象要素 逐日 站点观测', author: '徐新良', category: '气象' },
  { title: '东北地区多年度县区行政区划边界数据', keywords: '东北地区 县区 行政区划 边界', author: '徐新良', thumb: '黄河三角洲行政区划边界.png', category: '行政区划' },
  { title: '东北地区多年度地市行政区划边界数据', keywords: '东北地区 地市 行政区划 边界', author: '徐新良', category: '行政区划' },
  { title: '东北地区多年度省级行政区划边界数据', keywords: '东北地区 省级 行政区划 边界', author: '徐新良', category: '行政区划' },
  { title: '2015年东北地区乡镇行政区划数据', keywords: '2015 东北地区 乡镇 行政区划', author: '徐新良', category: '行政区划' },
  { title: '多时期乡镇行政区划边界数据', keywords: '多时期 乡镇 行政区划 边界', author: '徐新良', category: '行政区划' },
  { title: '东北地区夜间灯光年度数据集', keywords: '东北地区 夜间灯光 年度', author: '徐新良', thumb: '黄河三角洲夜间灯光数据.png', category: '夜间灯光' },
  { title: '东北地区夜间灯光月度数据集', keywords: '东北地区 夜间灯光 月度', author: '徐新良', category: '夜间灯光' },
  { title: '东北地区逐小时人口密度空间分布数据', keywords: '东北地区 人口密度 逐小时 空间分布', author: '徐新良', category: '人口' },
  { title: '东北地区1981-2012年逐年8km植被指数数据集', keywords: '东北地区 植被指数 1981-2012 8km', author: '徐新良', thumb: '黄河三角洲植被类型数据.png', category: '植被' },
  { title: '东北地区1981-2012年逐天1km植被指数数据集', keywords: '东北地区 植被指数 1981-2012 1km', author: '徐新良', category: '植被' },
  { title: '中国50万草地资源图', keywords: '中国 草地资源 50万', author: '徐新良', category: '植被' },
  { title: '青海省100万植被图数据', keywords: '青海 植被图 100万', author: '徐新良', category: '植被' },
  { title: '港澳人口迁徙数据', keywords: '港澳 人口迁徙', author: '徐新良', category: '人口' },
  { title: '全国逐小时人口密度空间分布数据', keywords: '全国 人口密度 逐小时 空间分布', author: '徐新良', category: '人口' },
  { title: '人口迁徙规模数据', keywords: '人口迁徙 规模', author: '徐新良', category: '人口' },
  { title: '人口迁徙比例数据', keywords: '人口迁徙 比例', author: '徐新良', category: '人口' },
  { title: '全球夜间灯光年度数据集', keywords: '全球 夜间灯光 年度', author: '徐新良', category: '夜间灯光' },
  { title: '全球夜间灯光月度数据集', keywords: '全球 夜间灯光 月度', author: '徐新良', category: '夜间灯光' },
  { title: '中国夜间灯光年度数据集', keywords: '中国 夜间灯光 年度', author: '徐新良', category: '夜间灯光' },
  { title: '中国夜间灯光月度数据集', keywords: '中国 夜间灯光 月度', author: '徐新良', category: '夜间灯光' },
  { title: '中国地表温度LST年度1KM数据集', keywords: '中国 地表温度 LST 年度', author: '徐新良', category: '气象' },
  { title: '中国地表温度LST季度1KM数据集', keywords: '中国 地表温度 LST 季度', author: '徐新良', category: '气象' },
  { title: '中国地表温度LST月度1KM数据集', keywords: '中国 地表温度 LST 月度', author: '徐新良', category: '气象' },
  { title: '中国10m逐年NDVI最大值数据集', keywords: '中国 NDVI 10m 年度', author: '徐新良', thumb: '黄河三角洲NDVI.png', category: '植被' },
  { title: '2020-2025年哨兵10米分辨率多光谱遥感影像', keywords: '2020-2025 哨兵 10米 多光谱 遥感影像', author: '徐新良', thumb: 'Landsat中分辨率遥感影像.png', category: '遥感' },
  { title: '东北黑土区土系土志土壤属性数据', keywords: '东北黑土区 土系 土志 土壤属性', author: '徐新良', thumb: '土壤质地(砂土).png', category: '土壤' },
  { title: '中国土系土志土壤属性数据（2010年代）', keywords: '中国 土系 土志 土壤属性 2010年代', author: '徐新良', category: '土壤' }
];

export const datasetRecords = records.map((record, index) => ({ ...record, id: index + 1 }));

const categoryOptions = [
  '全部',
  ...Array.from(new Set(datasetRecords.map((record) => record.category)))
];

const pageSize = 12;

function DataPublishing() {
  const [category, setCategory] = useState('全部');
  const [keyword, setKeyword] = useState('');
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [format, setFormat] = useState('');
  const [applied, setApplied] = useState({ category: '全部', keyword: '', title: '', abstract: '', format: '' });
  const [page, setPage] = useState(1);

  const runSearch = () => {
    setApplied({ category, keyword: keyword.trim(), title: title.trim(), abstract: abstract.trim(), format: format.trim() });
    setPage(1);
  };

  const handleReset = () => {
    setCategory('全部');
    setKeyword('');
    setTitle('');
    setAbstract('');
    setFormat('');
    setApplied({ category: '全部', keyword: '', title: '', abstract: '', format: '' });
    setPage(1);
  };

  const filtered = useMemo(() => {
    const lower = (value) => value.toLowerCase();
    return datasetRecords.filter((record) => {
      if (applied.category !== '全部' && record.category !== applied.category) return false;
      if (applied.keyword && !lower(record.keywords).includes(lower(applied.keyword))) return false;
      if (applied.title && !lower(record.title).includes(lower(applied.title))) return false;
      if (applied.abstract && !lower(`${record.keywords} ${record.title}`).includes(lower(applied.abstract))) return false;
      if (applied.format && !lower(record.title).includes(lower(applied.format))) return false;
      return true;
    });
  }, [applied]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="pb-16 min-h-screen">
      <PageBanner
        kicker="DATA PUBLISHING"
        title="数据出版"
        description="展示平台已出版与可检索的数据资源，支持按分类、关键词、标题、摘要及数据库格式组合检索。"
        chips={[`${datasetRecords.length} 项数据资源`, '支持组合检索', '持续更新']}
      />

      {/* 关键词搜索 */}
      <section className="container mx-auto px-4 mt-10">
        <div className="glass-card p-5 md:p-7">
          <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">关键词搜索</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5" htmlFor="pub-category">分类</label>
              <select
                id="pub-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full rounded-xl border border-white/70 bg-white/70 px-3 py-2.5 text-sm text-gray-700 outline-none transition-all duration-300 focus:border-emerald-300 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/10"
              >
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5" htmlFor="pub-keyword">关键词</label>
              <input
                id="pub-keyword"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && runSearch()}
                placeholder="如：NDVI、气象、土地利用"
                className="w-full rounded-xl border border-white/70 bg-white/70 px-3 py-2.5 text-sm text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-300 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/10"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5" htmlFor="pub-title">标题</label>
              <input
                id="pub-title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && runSearch()}
                placeholder="按数据题目检索"
                className="w-full rounded-xl border border-white/70 bg-white/70 px-3 py-2.5 text-sm text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-300 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/10"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5" htmlFor="pub-abstract">摘要</label>
              <input
                id="pub-abstract"
                value={abstract}
                onChange={(event) => setAbstract(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && runSearch()}
                placeholder="按数据说明检索"
                className="w-full rounded-xl border border-white/70 bg-white/70 px-3 py-2.5 text-sm text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-300 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/10"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5" htmlFor="pub-format">数据库格式</label>
              <input
                id="pub-format"
                value={format}
                onChange={(event) => setFormat(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && runSearch()}
                placeholder="如：栅格、矢量、表格"
                className="w-full rounded-xl border border-white/70 bg-white/70 px-3 py-2.5 text-sm text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-300 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/10"
              />
            </div>
            <div className="flex items-end gap-3">
              <button
                type="button"
                onClick={runSearch}
                className="flex-1 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                搜索
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-xl border border-white/70 bg-white/70 px-4 py-2.5 text-sm text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700"
              >
                重置
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 结果列表 */}
      <section className="container mx-auto px-4 mt-6">
        <div className="glass-card overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/60 px-5 py-3.5">
            <h2 className="text-sm md:text-base font-semibold text-gray-800 mb-0">
              数据列表
            </h2>
            <span className="text-xs text-gray-500">共 {filtered.length} 条</span>
          </div>

          {visible.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-base font-semibold text-gray-700 mb-2">未找到匹配的数据</p>
              <p className="text-sm text-gray-500 mb-0">试试更换关键词，或点击「重置」查看全部数据。</p>
            </div>
          ) : (
            <ul className="divide-y divide-white/50">
              {visible.map((record) => (
                <Link
                  key={record.id}
                  to={`/data-publishing/${record.id}`}
                  className="group flex items-center gap-4 px-5 py-4 transition-all duration-300 hover:bg-white/70 hover:pl-6"
                >
                  <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border border-white/70 bg-white/60">
                    {record.thumb ? (
                      <img
                        src={img(record.thumb)}
                        alt={record.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500/15 to-sky-500/15 text-emerald-700 text-xs font-semibold text-center px-1">
                        {record.category}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-800 mb-1 leading-snug transition-colors duration-300 group-hover:text-emerald-700">
                      <span className="text-gray-500">数据库题目：</span>
                      {record.title}
                    </p>
                    <p className="text-xs text-gray-600 mb-1">
                      <span className="text-gray-500">关键词：</span>
                      {record.keywords}
                    </p>
                    <p className="text-xs text-gray-600 mb-0">
                      <span className="text-gray-500">授权人：</span>
                      {record.author || '待补充'}
                    </p>
                  </div>
                  <span className="flex-shrink-0 text-emerald-600 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </ul>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="rounded-lg border border-white/70 bg-white/70 px-3 py-1.5 text-xs text-gray-600 transition-all duration-300 hover:border-emerald-200 hover:text-emerald-700 disabled:opacity-40 disabled:hover:border-white/70 disabled:hover:text-gray-600"
            >
              上一页
            </button>
            <span className="px-2 text-xs text-gray-500">{currentPage} / {totalPages}</span>
            <button
              type="button"
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="rounded-lg border border-white/70 bg-white/70 px-3 py-1.5 text-xs text-gray-600 transition-all duration-300 hover:border-emerald-200 hover:text-emerald-700 disabled:opacity-40 disabled:hover:border-white/70 disabled:hover:text-gray-600"
            >
              下一页
            </button>
          </div>
        )}

        <p className="text-xs text-gray-400 mt-5 mb-0">
          数据题目、关键词与授权人信息依据平台现有数据整理，具体内容以正式出版数据说明为准。
        </p>
      </section>
    </div>
  );
}

export default DataPublishing;
