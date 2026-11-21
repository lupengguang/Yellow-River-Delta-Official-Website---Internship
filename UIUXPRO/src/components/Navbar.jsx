import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // 处理数据库目录点击，强制跳转到不带参数的页面
  const handleCatalogClick = () => {
    // 如果当前已经在数据库目录页面，强制刷新
    if (location.pathname === '/database-catalog') {
      window.location.href = '/database-catalog';
    } else {
      // 如果不在数据库目录页面，正常导航
      navigate('/database-catalog');
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">黄</span>
            </div>
            <span className="text-xl font-bold text-gray-800">黄河三角洲资源环境科学数据平台</span>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">网站首页</Link>
            <button 
              onClick={handleCatalogClick}
              className="text-gray-700 hover:text-green-600 font-medium cursor-pointer"
            >
              数据库目录
            </button>
            <Link to="/other-results" className="text-gray-700 hover:text-green-600 font-medium">其他成果</Link>
            <Link to="/help-center" className="text-gray-700 hover:text-green-600 font-medium">帮助中心</Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
