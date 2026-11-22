import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import catalogSeed from '../data/catalogSeed.json';
import { PageBanner } from './topicPageKit';

const flattenNodes = (nodes, parents = []) =>
  nodes.flatMap((node) => {
    const path = [...parents, node.name];
    return [
      {
        key: path.join('/'),
        name: node.name,
        path,
        root: path[0],
        depth: path.length - 1
      },
      ...flattenNodes(node.children || [], path)
    ];
  });

const allNodes = flattenNodes(catalogSeed);
const roots = ['全部', ...catalogSeed.map((category) => category.name)];

function Highlight({ text, query }) {
  if (!query) return text;
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index)}
      <mark className="rounded bg-emerald-100 px-0.5 text-emerald-700">
        {text.slice(index, index + query.length)}
      </mark>
      {text.slice(index + query.length)}
    </>
  );
}

function DataSearch() {
  const [query, setQuery] = useState('');
  const [root, setRoot] = useState('全部');

  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return allNodes.filter((node) => {
      if (root !== '全部' && node.root !== root) return false;
      if (!keyword) return true;
      return node.path.join(' ').toLowerCase().includes(keyword);
    });
  }, [query, root]);

  const visible = filtered.slice(0, 50);

  return (
    <div className="pb-16 min-h-screen">
      <PageBanner
        kicker="DATA SEARCH"
        title="数据搜索"
        description="在平台现有目录体系中按名称或路径检索数据条目，快速定位所需数据所在的专题与层级。"
        chips={[`${allNodes.length} 个目录条目`, '支持名称与路径检索', '点击结果进入目录']}
      />

      <section className="container mx-auto px-4 mt-12">
        <div className="glass-card p-6 md:p-8">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="data-search-input">
            输入关键词
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
              id="data-search-input"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="例如：气象、NDVI、行政区划、无人机"
              className="w-full rounded-2xl border border-white/70 bg-white/70 py-3 pl-12 pr-4 text-sm text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-300 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/10"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
              >
                清空
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {roots.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setRoot(item)}
                className={`rounded-full border px-3 py-1.5 text-xs transition-all duration-300 hover:-translate-y-0.5 ${
                  root === item
                    ? 'border-emerald-500 bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'border-white/70 bg-white/60 text-gray-600 hover:border-emerald-200 hover:text-emerald-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
            <span>共找到 {filtered.length} 条</span>
            {filtered.length > 50 && <span>展示前 50 条，请使用关键词缩小范围</span>}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-6">
        {visible.length === 0 ? (
          <div className="glass-panel p-10 text-center">
            <p className="text-lg font-semibold text-gray-700 mb-2">未找到匹配的数据条目</p>
            <p className="text-sm text-gray-500 mb-0">试试更短的关键词，或切换上方分类。</p>
          </div>
        ) : (
          <div className="glass-card divide-y divide-white/50 overflow-hidden">
            {visible.map((node) => {
              const target =
                node.path.length >= 2
                  ? `/database-catalog?catalog=${encodeURIComponent(node.path[1])}`
                  : '/database-catalog';
              return (
                <Link
                  key={node.key}
                  to={target}
                  className="group flex items-center justify-between gap-4 px-5 py-4 transition-all duration-300 hover:bg-white/60"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700">
                        第 {node.depth + 1} 级
                      </span>
                      <h3 className="text-sm md:text-base font-medium text-gray-800 truncate mb-0 group-hover:text-emerald-700">
                        <Highlight text={node.name} query={query.trim()} />
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 truncate mb-0">
                      {node.path.length > 1 ? node.path.slice(0, -1).join(' / ') : node.root}
                    </p>
                  </div>
                  <span className="flex-shrink-0 text-emerald-600 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <section className="container mx-auto px-4 mt-10 text-center">
        <p className="text-xs text-gray-400 mb-0">
          搜索结果基于平台目录体系生成，数据文件与下载方式请以「数据库目录」页面为准。
        </p>
      </section>
    </div>
  );
}

export default DataSearch;
