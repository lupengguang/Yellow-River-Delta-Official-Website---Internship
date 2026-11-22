import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageBanner, SectionTitle } from './topicPageKit';

function ProfessionalBooks() {
  const [query, setQuery] = useState('');

  return (
    <div className="pb-16 min-h-screen">
      <PageBanner
        kicker="PROFESSIONAL BOOKS"
        title="专业图书"
        description="汇集黄河三角洲资源环境相关专业图书、工具书与数据集配套资料，为科研、教学与管理提供参考。"
        chips={['书目整理中', '与数据初版同步更新']}
      />

      <section className="container mx-auto px-4 mt-12">
        <div className="glass-card p-6 md:p-8">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="book-search-input">
            搜索书名、作者或主题
          </label>
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
              id="book-search-input"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="例如：湿地生态、遥感、土壤"
              className="w-full rounded-2xl border border-white/70 bg-white/70 py-3 pl-12 pr-4 text-sm text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-300 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/10"
            />
          </div>
          <p className="text-xs text-gray-500 mt-3 mb-0">
            书目数据尚未接入，搜索功能将在首批书目发布后启用。
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-10">
        <div className="glass-panel p-10 md:p-14 text-center">
          <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center transition-transform duration-500 hover:rotate-6 hover:scale-110">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75A4.5 4.5 0 007.5 4.5H4.5v13.25h3A4.5 4.5 0 0112 20.25m0-13.5a4.5 4.5 0 014.5-2.25h3v13.25h-3A4.5 4.5 0 0012 20.25m0-13.5v13.5" />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">专业图书数据整理中</h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto mb-6">
            首批书目将随平台数据初版同步发布。如需推荐图书或咨询馆藏信息，可通过帮助中心与我们联系。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/help-center"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              前往帮助中心 <span>→</span>
            </Link>
            <Link
              to="/database-catalog"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-5 py-2.5 text-sm text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              浏览数据库目录 <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="说明" title="关于专业图书" subtitle="收录范围与后续安排" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: '收录方向',
              desc: '黄河三角洲资源环境相关专业图书、工具书与数据集配套资料。'
            },
            {
              title: '使用方式',
              desc: '书目发布后将展示题名、作者、出版信息与获取方式，具体以页面展示为准。'
            },
            {
              title: '更新与推荐',
              desc: '书目与数据初版同步更新，欢迎通过帮助中心推荐需要补充的图书。'
            }
          ].map((item) => (
            <div
              key={item.title}
              className="topic-sheen rounded-2xl border border-white/70 bg-white/55 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <h3 className="text-base font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProfessionalBooks;
