import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function WechatArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // 获取官方公众号文章，使用正确的API路径
        const response = await fetch('http://localhost:8000/api/wechat/official/articles');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data.data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching articles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // 截断标题
  const truncateTitle = (title, maxLength = 50) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength) + '......';
  };

  if (loading) {
    return <div className="bg-white rounded-lg shadow-md p-4 mb-6"><p className="text-center text-gray-500">加载中...</p></div>;
  }

  if (error) {
    return <div className="bg-white rounded-lg shadow-md p-4 mb-6"><p className="text-center text-red-500">加载失败: {error}</p></div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      {/* 标题栏 */}
      <div className="flex justify-between items-center mb-4">
        <div className="bg-blue-600 text-white px-4 py-2 font-bold">
          最新研究成果
        </div>
        <Link to="/other-results/wechat" className="text-blue-600 hover:text-blue-800 text-sm">
          更多>>
        </Link>
      </div>
      
      {/* 文章列表 */}
      <ul className="space-y-2">
        {articles.slice(0, 8).map((article) => (
          <li key={article.id} className="flex items-center gap-2">
            <span className="text-orange-500">◆</span>
            <Link 
              to={`/other-results/wechat/detail?id=${article.id}`}
              className="text-gray-700 hover:text-blue-600 hover:underline truncate flex-1 text-sm"
              title={article.title}
            >
              {truncateTitle(article.title)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WechatArticleList;
