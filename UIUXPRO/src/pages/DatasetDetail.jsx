import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { SectionTitle } from './topicPageKit';
import { datasetRecords } from './DataPublishing';

const img = (file) => `${import.meta.env.BASE_URL}images/${file}`;

function DatasetDetail() {
  const { id } = useParams();
  const record = datasetRecords.find((item) => String(item.id) === String(id));

  if (!record) {
    return (
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">未找到该数据条目</h1>
          <p className="text-sm text-gray-500 mb-6">链接可能已失效，请返回数据出版列表重新选择。</p>
          <Link
            to="/data-publishing"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            ← 返回数据出版
          </Link>
        </div>
      </div>
    );
  }

  const related = datasetRecords
    .filter((item) => item.category === record.category && item.id !== record.id)
    .slice(0, 6);

  return (
    <div className="pb-16 min-h-screen">
      <section className="container mx-auto px-4 pt-8">
        <Link
          to="/data-publishing"
          className="group inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm text-gray-700 backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-500/10"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          返回数据出版
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="glass-frame overflow-hidden bg-white/70">
              {record.thumb ? (
                <img
                  src={img(record.thumb)}
                  alt={record.title}
                  className="w-full h-64 md:h-72 object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <div className="w-full h-64 md:h-72 flex items-center justify-center bg-gradient-to-br from-emerald-500/15 to-sky-500/15 text-emerald-700 text-lg font-semibold">
                  {record.category}
                </div>
              )}
            </div>
          </div>
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="text-xs md:text-sm text-emerald-700 tracking-[0.3em] mb-2">
              DATA PUBLISHING · {record.category}
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
              {record.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-5">
              {[record.category, `授权人：${record.author || '待补充'}`].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-100"
                >
                  {chip}
                </span>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              该数据条目已收录于平台数据出版目录，归属于{record.category}专题。以下展示条目的基础元数据、使用说明与同分类相关数据，便于检索与后续获取。
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {record.keywords.split(/\s+/).filter(Boolean).map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/70 bg-white/60 px-3 py-1 text-xs text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="01" title="条目元数据" subtitle="依据数据出版目录整理" />
        <div className="glass-card p-3 md:p-6 overflow-x-auto">
          <table className="w-full min-w-[560px] text-left border-collapse">
            <tbody>
              {[
                ['数据题目', record.title],
                ['所属分类', record.category],
                ['关键词', record.keywords],
                ['授权人', record.author || '待补充'],
                ['数据格式', '待补充'],
                ['时间范围', '待补充'],
                ['来源', '平台数据出版目录']
              ].map(([label, value]) => (
                <tr
                  key={label}
                  className="border-t border-white/60 transition-colors duration-300 hover:bg-white/50 first:border-t-0"
                >
                  <td className="py-3 px-4 text-sm text-gray-500 w-32 md:w-40 align-top whitespace-nowrap">
                    {label}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700 leading-relaxed">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="02" title="数据说明" subtitle="数据说明与下载方式正在整理" />
        <div className="glass-card p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            该条目的详细数据说明、空间范围、时间序列与下载方式正在整理中。平台将以目录页与出版数据说明为准，持续补充元数据与数据文件。
          </p>
          <p className="text-gray-600 leading-relaxed mb-0">
            如需优先获取该数据，可通过「帮助中心」查看数据下载说明，或通过页面底部的联系方式与我们沟通具体需求。
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-16">
        <SectionTitle index="03" title="使用说明" subtitle="下载、引用与更新" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: '数据下载',
              desc: '免费注册为本网站会员后每天可免费下载 3 条数据；VIP 会员无下载限制，具体以帮助中心说明为准。'
            },
            {
              title: '引用规范',
              desc: '转载或引用本平台内容须注明来源及原文链接，具体规则见「法律声明」。'
            },
            {
              title: '更新说明',
              desc: '数据元数据与文件将持续补充，以页面最新展示为准；历史版本以正式出版说明为准。'
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

      {related.length > 0 && (
        <section className="container mx-auto px-4 mt-16">
          <SectionTitle index="04" title="相关数据" subtitle={`同为「${record.category}」专题`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/data-publishing/${item.id}`}
                className="group glass-card-soft flex gap-3 p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-white/70 bg-white/60">
                  {item.thumb ? (
                    <img
                      src={img(item.thumb)}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500/15 to-sky-500/15 text-emerald-700 text-[10px] font-semibold text-center px-1">
                      {item.category}
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-800 leading-snug mb-1 transition-colors duration-300 group-hover:text-emerald-700">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 mb-0 line-clamp-2">{item.keywords}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="container mx-auto px-4 mt-12 text-center">
        <Link
          to="/data-publishing"
          className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          返回数据出版
        </Link>
      </div>
    </div>
  );
}

export default DatasetDetail;
