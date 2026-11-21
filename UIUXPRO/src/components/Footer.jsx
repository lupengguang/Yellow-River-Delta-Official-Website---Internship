import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 关于我们 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li><Link to="/reserve-intro" className="inline-block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">保护区简介</Link></li>
              <li><Link to="/organizational-structure" className="inline-block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">组织结构</Link></li>
              <li><Link to="/other-results/about" className="inline-block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">联系我们</Link></li>
            </ul>
          </div>
          
          {/* 数据资源 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">数据资源</h3>
            <ul className="space-y-2">
              <li><Link to="/eco-environment-monitoring" className="inline-block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">监测数据</Link></li>
              <li><Link to="/database-catalog" className="inline-block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">遥感影像</Link></li>
              <li><Link to="/other-results/literature" className="inline-block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">科研成果</Link></li>
            </ul>
          </div>
          
          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link to="/national-park-construction" className="inline-block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">国家公园建设</Link></li>
              <li><Link to="/wetland-restoration" className="inline-block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">湿地保护修复</Link></li>
              <li><Link to="/eco-environment-monitoring" className="inline-block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">生态环境监测</Link></li>
            </ul>
          </div>
          
          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <p className="text-gray-300 mb-2">电话：0546-xxxxxxx</p>
            <p className="text-gray-300 mb-2">地址：山东省东营市垦利区</p>
            <p className="text-gray-300">邮箱：info@huanghe-delta.com</p>
          </div>
        </div>
        
        {/* 底部信息 */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">Copyright © 山东黄河三角洲国家级自然保护区</p>
            </div>
            <div className="flex space-x-4">
              <Link to="/legal" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">法律声明</Link>
              <Link to="/legal#privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">隐私政策</Link>
              <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">网站地图</Link>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-500 text-xs">
            <p>ICP备案号：鲁ICP备xxxxxxxx号-1 | 政府网站标识码：3705000000</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;