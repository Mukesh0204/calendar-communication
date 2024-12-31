import React from 'react';
import { useAuth } from '../context/AuthContext';
import { getPageContent } from '../utils/contentHelper';
import Header from '../components/Header/Header';
import { 
  FiPieChart, 
  FiTrendingUp, 
  FiUsers, 
  FiMessageCircle,
  FiCalendar,
  FiMail 
} from 'react-icons/fi';

const Analytics = () => {
  const { user } = useAuth();
  const content = getPageContent('analytics', user);

  // Pre-login view
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {content.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <FiPieChart className="w-8 h-8 text-blue-600 mb-4" />
                  <p className="text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  const stats = [
    {
      title: 'Total Meetings',
      value: content.data.totalMeetings,
      icon: <FiCalendar className="w-8 h-8 text-blue-600" />,
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Messages Sent',
      value: content.data.messagesSent,
      icon: <FiMail className="w-8 h-8 text-green-600" />,
      change: '+8%',
      changeType: 'positive'
    },
    {
      title: 'Active Companies',
      value: content.data.companiesManaged || content.data.activeProjects,
      icon: <FiUsers className="w-8 h-8 text-purple-600" />,
      change: '+5%',
      changeType: 'positive'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">{content.title}</h1>

          {/* Stats Grid */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">
                      {stat.value}
                    </p>
                    <div className={`mt-2 flex items-center text-sm ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <FiTrendingUp className="mr-1" />
                      {stat.change}
                    </div>
                  </div>
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Stats */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Communication Activity */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Communication Activity
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Messages Sent</span>
                  <span className="font-medium">{content.data.messagesSent}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Messages Received</span>
                  <span className="font-medium">{content.data.messagesReceived}</span>
                </div>
              </div>
            </div>

            {/* Meeting Statistics */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Meeting Statistics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Completed Meetings</span>
                  <span className="font-medium">{content.data.completedMeetings}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Upcoming Meetings</span>
                  <span className="font-medium">{content.data.upcomingMeetings}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics; 