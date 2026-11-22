import React, { useMemo, useState } from 'react';
import { PageBanner } from './topicPageKit';

const cover = (file) => `${import.meta.env.BASE_URL}images/${file}`;

const categories = ['生态系统', '软件操作', '期刊杂志', '土地利用相关', '一带一路', '遥感监测'];

const books = [
  {
    title: '青海三江源生态系统遥感监测图集',
    category: '生态系统',
    image: '徐新良 肖桐詹志明......青海三江源生态系统遥感监测图集.png',
    author: '徐新良、肖桐、詹志明 等',
    price: 80,
    fit: 'contain'
  },
  {
    title: '生态环境空间信息与数字技术综合实验教程',
    category: '生态系统',
    image: '乔治等生态环境空间信息与数字技术综合实验教程。.png',
    author: '乔治 等',
    price: 90
  },
  {
    title: 'Python与开源GIS：数据处理、空间分析与地图制图',
    category: '软件操作',
    image: '卜坤Python与开源GIS一数据处.png',
    author: '卜坤',
    price: 108
  },
  {
    title: '中国国家地理2013年典藏版',
    category: '期刊杂志',
    image: '中国国家地理中国国家地理2013年典藏版.png',
    author: '',
    price: 200
  },
  {
    title: '中国国家地理2015年典藏版',
    category: '期刊杂志',
    image: '中国国家地理中国国家地理2015年典藏版.png',
    author: '',
    price: 200
  },
  {
    title: '城市热环境：格局·机制与模拟',
    category: '土地利用相关',
    image: '徐新良、乔治、田光进城市热环境格局-机理R.png',
    author: '徐新良、乔治、田光进',
    price: 100
  },
  {
    title: '土地利用/覆被变化时空分析',
    category: '土地利用相关',
    image: '徐新良等析方法及应用土地利用覆被变化时空信息分.png',
    author: '徐新良',
    price: 100
  },
  {
    title: '城市土地利用时空信息数据重建、分析与模拟',
    category: '土地利用相关',
    image: '匡文慧城市土地利用时空信息数据重建、分析与模拟.png',
    author: '匡文慧',
    price: 60
  },
  {
    title: '对比研究：农牧民对生态建设工程响应',
    category: '土地利用相关',
    image: '邵景安徐新良对比研究一农牧民对生态建设工程响应的以江.png',
    author: '邵景安、徐新良',
    price: 50
  },
  {
    title: '中国土地利用遥感监测',
    category: '土地利用相关',
    image: '张增祥 赵晓丽王潇..中国土地利用遥感监测.png',
    author: '张增祥、赵晓丽、王潇 等',
    price: 200
  },
  {
    title: '“一带一路”蒙俄区生态环境遥感监测',
    category: '一带一路',
    image: "徐新良,李静,王勇....'一带一路”蒙俄区生态环境逼感监测.png",
    author: '徐新良、李静、王勇 等',
    price: 70
  },
  {
    title: '“一带一路”港口城市生态环境遥感监测',
    category: '一带一路',
    image: '侯西勇宋洋徐新良......“一带一路”港口城市生态环境遥感监测.png',
    author: '侯西勇、宋洋、徐新良 等',
    price: 70
  },
  {
    title: '亚非欧部分国家和地区脆弱性评价图集',
    category: '一带一路',
    image: '徐新良亚非欧部分国家和地区脆弱性评价图集.png',
    author: '徐新良',
    price: 280,
    fit: 'contain'
  },
  {
    title: '能源植物发展潜力遥感信息获取与评价',
    category: '遥感监测',
    image: '庄大方 江东 刘磊能源植物发展潜力遥感信息获取与评价.png',
    author: '庄大方、江东、刘磊',
    price: null
  },
  {
    title: '全球生态环境遥感监测2014年度报告',
    category: '遥感监测',
    image: '廖小罕施建成等全球生态环境遥感监测2014年度报告.png',
    author: '廖小罕、施建成 等',
    price: null
  },
  {
    title: '全球生态环境遥感监测2015年度报告',
    category: '遥感监测',
    image: '李加洪 施建成等全球生态环境遥感监测2015年年度报告.png',
    author: '李加洪、施建成 等',
    price: null
  },
  {
    title: '中国土地利用遥感监测图集',
    category: '遥感监测',
    image: '张增祥等中国土地利用遥感监测图集.png',
    author: '张增祥 等',
    price: null
  }
];

function ProfessionalBooks() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return books.filter((book) => {
      if (activeCategory !== '全部' && book.category !== activeCategory) return false;
      if (!keyword) return true;
      return `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(keyword);
    });
  }, [activeCategory, query]);

  return (
    <div className="pb-16 min-h-screen">
      <PageBanner
        kicker="PROFESSIONAL BOOKS"
        title="专业图书"
        description="按图书分类汇集黄河三角洲资源环境相关专业图书、期刊与遥感监测图集，支持分类浏览与关键词检索。"
        chips={[`${categories.length} 个图书分类`, `${books.length} 本图书`, '持续补充']}
      />

      <section className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 图书分类 */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 glass-panel p-4">
              <div className="mb-3 flex items-center justify-between px-2">
                <p className="text-xs font-semibold text-emerald-700 tracking-widest mb-0">图书分类</p>
                <span className="text-[11px] text-gray-400">{books.length} 本</span>
              </div>
              <div className="space-y-1">
                {['全部', ...categories].map((category) => {
                  const count =
                    category === '全部'
                      ? books.length
                      : books.filter((book) => book.category === category).length;
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-all duration-300 ${
                        isActive
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                          : 'text-gray-600 hover:translate-x-1 hover:bg-white/70 hover:text-emerald-700'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover:scale-150 ${
                            isActive ? 'bg-white' : 'bg-emerald-400'
                          }`}
                        />
                        {category === '全部' ? '全部图书' : category}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] transition-colors duration-300 ${
                          isActive ? 'bg-white/20 text-white' : 'bg-emerald-50 text-emerald-600'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* 图书列表 */}
          <div className="lg:col-span-3">
            <div className="glass-card p-5 md:p-6 mb-6">
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="搜索书名、作者或分类，例如：遥感、土地利用"
                  className="w-full rounded-2xl border border-white/70 bg-white/70 py-3 pl-12 pr-4 text-sm text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-300 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/10"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                <span>
                  {activeCategory === '全部' ? '全部图书' : activeCategory} · 共 {filtered.length} 本
                </span>
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="rounded-full px-2 py-1 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    清空搜索
                  </button>
                )}
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="glass-panel p-10 text-center">
                <p className="text-lg font-semibold text-gray-700 mb-2">未找到匹配的图书</p>
                <p className="text-sm text-gray-500 mb-0">试试其他关键词，或切换左侧图书分类。</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                {filtered.map((book) => (
                  <article
                    key={book.title}
                    className="group glass-card overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-500/10"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                      <img
                        src={cover(book.image)}
                        alt={book.title}
                        loading="lazy"
                        className={`w-full h-full ${
                          book.fit === 'contain' ? 'object-contain p-1 bg-white' : 'object-cover'
                        } transition-transform duration-700 group-hover:scale-105`}
                      />
                      <span className="absolute left-2 top-2 rounded-full bg-black/45 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">
                        {book.category}
                      </span>
                      {book.price !== null && (
                        <span className="absolute bottom-2 right-2 rounded-full bg-rose-500/90 px-2.5 py-1 text-xs font-semibold text-white shadow-md">
                          ¥ {book.price}
                        </span>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-1.5 transition-colors duration-300 group-hover:text-emerald-700">
                        {book.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-0">
                        {book.author || '作者信息待补充'}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}

            <p className="text-xs text-gray-400 mt-6 mb-0">
              书目封面依据参考图片整理，部分作者、价格信息待补充；具体信息以正式出版物为准。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfessionalBooks;
