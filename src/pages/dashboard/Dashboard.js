import React, { useEffect, useState } from 'react';
import { 
  FiUsers, 
  FiCalendar, 
  FiMessageSquare, 
  FiPieChart,
  FiArrowUp,
  FiArrowDown,
  FiMail,
  FiPhone,
  FiCheckCircle,
  FiClock
} from 'react-icons/fi';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const stats = [
    {
      id: 1,
      name: 'Total Companies',
      value: '45',
      change: '+12%',
      trend: 'up',
      icon: FiUsers,
    },
    {
      id: 2,
      name: 'Active Communications',
      value: '128',
      change: '+25%',
      trend: 'up',
      icon: FiCalendar,
    },
    {
      id: 3,
      name: 'Completed Meetings',
      value: '89',
      change: '+18%',
      trend: 'up',
      icon: FiMessageSquare,
    },
    {
      id: 4,
      name: 'Engagement Rate',
      value: '92%',
      change: '-3%',
      trend: 'down',
      icon: FiPieChart,
    },
  ];

  const upcomingMeetings = [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      type: 'Video Call',
      time: '10:00 AM',
      date: 'Today',
      status: 'upcoming',
      icon: FiPhone
    },
    {
      id: 2,
      company: 'Global Innovations',
      type: 'Email Follow-up',
      time: '2:30 PM',
      date: 'Tomorrow',
      status: 'scheduled',
      icon: FiMail
    },
  ];

  const recentActivities = [
    {
      id: 1,
      company: 'Digital Dynamics',
      action: 'Meeting Completed',
      time: '1 hour ago',
      status: 'completed',
      icon: FiCheckCircle
    },
    {
      id: 2,
      company: 'Cloud Systems',
      action: 'Email Sent',
      time: '3 hours ago',
      status: 'completed',
      icon: FiMail
    },
  ];

  const StatCard = ({ title, value, icon: Icon, trend }) => (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
            {value}
          </p>
        </div>
        <div className={`p-3 rounded-full ${
          trend === 'up' 
            ? 'bg-gradient-to-r from-emerald-500 to-green-500' 
            : 'bg-gradient-to-r from-rose-500 to-pink-500'
        }`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  const QuickAction = ({ icon: Icon, text, gradient }) => (
    <button className={`
      ${gradient} text-white rounded-lg p-4 w-full
      transform transition-all duration-200
      hover:shadow-lg hover:-translate-y-1
      flex items-center justify-center space-x-2
    `}>
      <Icon className="w-5 h-5" />
      <span>{text}</span>
    </button>
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-xl shadow-lg p-8 animate-fade-in">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-white mb-4">
            Welcome to Your Communication Hub
          </h1>
          <p className="text-blue-100 text-lg">
            Track, manage, and optimize your business communications in one place.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard 
            key={stat.id}
            title={stat.name}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Meetings */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Upcoming Communications
              </h2>
            </div>
            <div className="divide-y divide-gray-200">
              {upcomingMeetings.map((meeting, index) => (
                <div 
                  key={meeting.id}
                  className="p-6 hover:bg-gray-50 transition-colors duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <meeting.icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-sm font-medium text-gray-900">
                        {meeting.company}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {meeting.type} • {meeting.time}, {meeting.date}
                      </p>
                    </div>
                    <div className="ml-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        meeting.status === 'upcoming' 
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {meeting.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Activity
              </h2>
            </div>
            <div className="divide-y divide-gray-200">
              {recentActivities.map((activity, index) => (
                <div 
                  key={activity.id}
                  className="p-6 hover:bg-gray-50 transition-colors duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <activity.icon className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        {activity.company}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {activity.action} • {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <QuickAction 
            icon={FiCalendar}
            text="Schedule Meeting"
            gradient="bg-gradient-to-r from-blue-500 to-cyan-400"
          />
          <QuickAction 
            icon={FiMail}
            text="Send Email"
            gradient="bg-green-50 text-green-600"
          />
          <QuickAction 
            icon={FiPhone}
            text="Start Call"
            gradient="bg-purple-50 text-purple-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 