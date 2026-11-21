import { useState, useEffect } from 'react';

function NotificationList() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/homepage/notifications');
        if (!response.ok) {
          throw new Error('Failed to fetch notifications');
        }
        const data = await response.json();
        setNotifications(data.data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching notifications:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const handleNotificationClick = async (notification) => {
    try {
      const response = await fetch(`http://localhost:8000/api/homepage/notifications/${notification.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch notification detail');
      }
      const data = await response.json();
      setSelectedNotification(data.data);
      setShowModal(true);
    } catch (err) {
      console.error('Error fetching notification detail:', err);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedNotification(null);
  };

  if (loading) {
    return <div className="text-center text-gray-500 py-4">加载中...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-4">加载失败: {error}</div>;
  }

  return (
    <div>
      {notifications.slice(0, 5).map((item) => (
        <div
          key={item.id}
          className="py-2 border-b border-gray-100 last:border-0 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => handleNotificationClick(item)}
        >
          <p className="text-gray-700 text-sm leading-relaxed">• {item.title}</p>
        </div>
      ))}

      {/* 详情弹窗 */}
      {showModal && selectedNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div
            className="glass-card max-w-lg w-full mx-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">{selectedNotification.title}</h3>
              <button
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
            <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">
              {selectedNotification.content || '暂无详细内容'}
            </div>
            <div className="mt-4 text-gray-400 text-sm">
              {selectedNotification.create_time && new Date(selectedNotification.create_time).toLocaleString()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationList;
