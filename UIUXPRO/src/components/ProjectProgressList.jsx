import { useState, useEffect } from 'react';

function ProjectProgressList() {
  const [progressList, setProgressList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProgress, setSelectedProgress] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/homepage/project-progress');
        if (!response.ok) {
          throw new Error('Failed to fetch project progress');
        }
        const data = await response.json();
        setProgressList(data.data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching project progress:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  const handleProgressClick = async (progress) => {
    try {
      const response = await fetch(`http://localhost:8000/api/homepage/project-progress/${progress.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch project progress detail');
      }
      const data = await response.json();
      setSelectedProgress(data.data);
      setShowModal(true);
    } catch (err) {
      console.error('Error fetching project progress detail:', err);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProgress(null);
  };

  const goToPrevious = () => {
    if (progressList.length > 0) {
      setCurrentIndex((prev) => (prev === 0 ? progressList.length - 1 : prev - 1));
    }
  };

  const goToNext = () => {
    if (progressList.length > 0) {
      setCurrentIndex((prev) => (prev === progressList.length - 1 ? 0 : prev + 1));
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return <div className="text-center text-gray-500 py-4">加载中...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-4">加载失败: {error}</div>;
  }

  if (progressList.length === 0) {
    return <div className="text-center text-gray-500 py-4">暂无项目进展</div>;
  }

  const currentItem = progressList[currentIndex];

  return (
    <div className="relative">
      {/* 当前项目进展内容 */}
      <div
        className="cursor-pointer hover:bg-gray-50 transition-colors p-3 rounded-lg"
        onClick={() => handleProgressClick(currentItem)}
      >
        <p className="text-gray-700 text-sm leading-relaxed">• {currentItem.title}</p>
        {currentItem.image_url && (
          <img 
            src={currentItem.image_url} 
            alt={currentItem.title}
            className="w-full h-32 object-cover rounded mt-2"
          />
        )}
        {currentItem.content && (
          <p className="text-gray-600 text-xs mt-2 line-clamp-3">{currentItem.content}</p>
        )}
      </div>

      {/* 分页切换控件 */}
      <div className="flex items-center justify-center mt-4 gap-2">
        {/* 上一页按钮 */}
        <button
          onClick={goToPrevious}
          className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          aria-label="上一页"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* 指示器 */}
        <div className="flex gap-2">
          {progressList.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`跳转到第 ${index + 1} 项`}
            />
          ))}
        </div>

        {/* 下一页按钮 */}
        <button
          onClick={goToNext}
          className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          aria-label="下一页"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 详情弹窗 */}
      {showModal && selectedProgress && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div
            className="glass-card max-w-lg w-full mx-4 p-6 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">{selectedProgress.title}</h3>
              <button
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
            {selectedProgress.image_url && (
              <img 
                src={selectedProgress.image_url} 
                alt={selectedProgress.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">
              {selectedProgress.content || '暂无详细内容'}
            </div>
            <div className="mt-4 text-gray-400 text-sm">
              {selectedProgress.create_time && new Date(selectedProgress.create_time).toLocaleString()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectProgressList;
