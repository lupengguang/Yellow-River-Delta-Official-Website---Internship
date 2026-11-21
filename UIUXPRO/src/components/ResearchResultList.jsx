import { useState, useEffect } from 'react';

function ResearchResultList() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedResult, setSelectedResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/homepage/research-results');
        if (!response.ok) {
          throw new Error('Failed to fetch research results');
        }
        const data = await response.json();
        setResults(data.data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching research results:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  const handleResultClick = async (result) => {
    try {
      const response = await fetch(`http://localhost:8000/api/homepage/research-results/${result.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch research result detail');
      }
      const data = await response.json();
      setSelectedResult(data.data);
      setShowModal(true);
    } catch (err) {
      console.error('Error fetching research result detail:', err);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedResult(null);
  };

  if (loading) {
    return (
      <div className="glass-card p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="bg-blue-600 text-white px-4 py-2 font-bold">最新研究成果</div>
        </div>
        <p className="text-center text-gray-500">加载中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-card p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="bg-blue-600 text-white px-4 py-2 font-bold">最新研究成果</div>
        </div>
        <p className="text-center text-red-500">加载失败: {error}</p>
      </div>
    );
  }

  return (
    <div className="glass-card p-4">
      {/* 标题栏 */}
      <div className="flex justify-between items-center mb-4">
        <div className="bg-blue-600 text-white px-4 py-2 font-bold">最新研究成果</div>
      </div>
      
      {/* 研究成果列表 */}
      <div className="space-y-4">
        {results.slice(0, 8).map((item) => (
          <div
            key={item.id}
            className="border-b border-gray-200 pb-4 last:border-0 last:pb-0 cursor-pointer hover:bg-gray-50 transition-colors p-2 -m-2 rounded"
            onClick={() => handleResultClick(item)}
          >
            <p className="text-gray-800 font-medium mb-1">{item.project_name}</p>
            <div className="text-sm text-gray-600 space-y-1">
              {item.journal && <p>期刊：{item.journal}</p>}
              {item.volume && <p>卷期：{item.volume}</p>}
              {item.doi && <p>DOI：{item.doi}</p>}
              {item.official_link && (
                <p>
                  官方链接：
                  <a 
                    href={item.official_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline ml-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    点击访问
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 详情弹窗 */}
      {showModal && selectedResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div
            className="glass-card max-w-lg w-full mx-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">{selectedResult.project_name}</h3>
              <button
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
            <div className="space-y-2 text-gray-600">
              {selectedResult.journal && <p><strong>期刊：</strong>{selectedResult.journal}</p>}
              {selectedResult.volume && <p><strong>卷期：</strong>{selectedResult.volume}</p>}
              {selectedResult.doi && <p><strong>DOI：</strong>{selectedResult.doi}</p>}
              {selectedResult.official_link && (
                <p>
                  <strong>官方链接：</strong>
                  <a 
                    href={selectedResult.official_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {selectedResult.official_link}
                  </a>
                </p>
              )}
            </div>
            <div className="mt-4 text-gray-400 text-sm">
              {selectedResult.create_time && new Date(selectedResult.create_time).toLocaleString()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResearchResultList;
