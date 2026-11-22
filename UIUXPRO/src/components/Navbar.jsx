import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // 路由变化后收起移动端菜单
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // 处理数据库目录点击，强制跳转到不带参数的页面
  const handleCatalogClick = () => {
    setOpen(false);
    navigate('/database-catalog');
  };

  const navItems = [
    { to: '/', label: '网站首页', end: true },
    { to: '/database-catalog', label: '数据库目录', catalog: true },
    { to: '/data-search', label: '数据搜索' },
    { to: '/data-publishing', label: '数据出版' },
    { to: '/professional-books', label: '专业图书' },
    { to: '/other-results', label: '其他成果' },
    { to: '/help-center', label: '帮助中心' }
  ];

  return (
    <header className="site-header">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-emerald-500/50">
              <span className="text-white font-bold">黄</span>
            </div>
            <span className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-emerald-700">
              黄河三角洲资源环境科学数据平台
            </span>
          </NavLink>

          {/* 桌面端导航 */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-7 text-sm lg:text-base">
            {navItems.map((item) =>
              item.catalog ? (
                <button
                  key={item.to}
                  onClick={handleCatalogClick}
                  className={`nav-link cursor-pointer ${
                    location.pathname === '/database-catalog' ? 'is-active' : ''
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* 移动端菜单按钮 */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="切换导航菜单"
            aria-expanded={open}
            className="md:hidden text-gray-700 p-2 rounded-lg transition-all duration-300 hover:bg-white/60 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform duration-500 ${open ? 'rotate-90' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 移动端折叠菜单 */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass-panel p-2 flex flex-col gap-1">
            {navItems.map((item) =>
              item.catalog ? (
                <button
                  key={item.to}
                  onClick={handleCatalogClick}
                  className="nav-link w-full justify-start px-4 py-3 rounded-xl hover:bg-white/70"
                >
                  {item.label}
                </button>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `nav-link w-full px-4 py-3 rounded-xl hover:bg-white/70 ${
                      isActive ? 'is-active' : ''
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
