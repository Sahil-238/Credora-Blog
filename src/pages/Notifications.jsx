import React, { useState } from 'react';
import { 
  Bell, 
  User, 
  Book, 
  Award, 
  MessageCircle, 
  TrendingUp,
  Heart,
  Star,
  Check,
  X,
  Settings,
  Filter,
  Search
} from 'lucide-react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'achievement',
      title: 'Course Completed!',
      message: 'Congratulations! You\'ve successfully completed "Advanced React Development".',
      time: '2 minutes ago',
      isRead: false,
      icon: <Award className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700'
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message from Sarah Johnson',
      message: 'Great work on your latest project! I\'d love to discuss your progress.',
      time: '15 minutes ago',
      isRead: false,
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      id: 3,
      type: 'course',
      title: 'New Course Available',
      message: 'Check out our latest course: "Machine Learning Fundamentals" - Early bird discount available!',
      time: '1 hour ago',
      isRead: true,
      icon: <Book className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    {
      id: 4,
      type: 'community',
      title: 'Someone liked your post',
      message: 'Michael Chen and 12 others liked your post about "Best Practices in Web Development".',
      time: '2 hours ago',
      isRead: true,
      icon: <Heart className="w-6 h-6" />,
      color: 'from-pink-500 to-red-500',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-700'
    },
    {
      id: 5,
      type: 'progress',
      title: 'Weekly Progress Report',
      message: 'You\'ve completed 4 lessons this week! Keep up the great work.',
      time: '1 day ago',
      isRead: true,
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700'
    },
    {
      id: 6,
      type: 'review',
      title: 'Course Review Reminder',
      message: 'Please take a moment to review "JavaScript Fundamentals" and help other students.',
      time: '2 days ago',
      isRead: true,
      icon: <Star className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, isRead: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const filteredNotifications = notifications.filter(notif => {
    const matchesFilter = filter === 'all' || 
      (filter === 'unread' && !notif.isRead) ||
      (filter === 'read' && notif.isRead) ||
      notif.type === filter;
    
    const matchesSearch = notif.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notif.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const unreadCount = notifications.filter(notif => !notif.isRead).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-70"></div>
        
        {/* Animated shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="relative">
                <Bell className="w-16 h-16 text-blue-600" />
                {unreadCount > 0 && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center animate-pulse">
                    {unreadCount}
                  </div>
                )}
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Notifications
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with your learning progress, course announcements, and community interactions.
            </p>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search notifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 flex-wrap">
              {['all', 'unread', 'read', 'achievement', 'course', 'message'].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType)}
                  className={`px-4 py-2 rounded-lg font-medium capitalize transition-all duration-200 ${
                    filter === filterType
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filterType === 'unread' ? `Unread (${unreadCount})` : filterType}
                </button>
              ))}
            </div>

            {/* Mark All Read Button */}
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Check className="w-4 h-4" />
                Mark All Read
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Notifications List */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNotifications.length === 0 ? (
            <div className="text-center py-16">
              <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No notifications found</h3>
              <p className="text-gray-500">
                {searchTerm ? 'Try adjusting your search terms' : 'You\'re all caught up!'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                    !notification.isRead ? 'ring-2 ring-blue-100' : ''
                  }`}
                >
                  {/* Unread indicator */}
                  {!notification.isRead && (
                    <div className="absolute top-4 left-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  )}

                  <div className="flex items-start gap-4 ml-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${notification.color} flex items-center justify-center text-white shadow-lg`}>
                      {notification.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {notification.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-2">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <span>{notification.time}</span>
                            {!notification.isRead && (
                              <span className="text-blue-600 font-medium">• New</span>
                            )}
                          </p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-2 ml-4">
                          {!notification.isRead && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
                              title="Mark as read"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                            title="Delete notification"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Settings Footer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <Settings className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Notification Preferences
            </h3>
            <p className="text-gray-600 mb-6">
              Customize how and when you receive notifications to match your learning schedule.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Manage Settings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notifications;