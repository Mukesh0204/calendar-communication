import React, { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiMessageSquare, FiClock, FiAlertCircle } from 'react-icons/fi';
import { CSVLink } from 'react-csv';

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    overdue: [],
    dueToday: [],
    upcoming: []
  });

  const [stats, setStats] = useState({
    overdueCount: 0,
    dueTodayCount: 0,
    upcomingCount: 0
  });

  useEffect(() => {
    // Simulated real-time updates
    const fetchNotifications = () => {
      // This would be an API call in a real application
      const mockData = {
        overdue: [
          {
            id: 1,
            company: 'Acme Corp',
            type: 'linkedin-post',
            dueDate: '2024-02-15',
            daysPast: 5,
            notes: 'Quarterly update post pending'
          },
          // ... more overdue items
        ],
        dueToday: [
          {
            id: 2,
            company: 'Tech Solutions',
            type: 'email',
            dueDate: new Date().toISOString().split('T')[0],
            notes: 'Follow-up on proposal'
          },
          // ... more due today items
        ],
        upcoming: [
          {
            id: 3,
            company: 'Global Industries',
            type: 'phone',
            dueDate: '2024-02-25',
            notes: 'Monthly check-in call'
          },
          // ... more upcoming items
        ]
      };

      setNotifications(mockData);
      setStats({
        overdueCount: mockData.overdue.length,
        dueTodayCount: mockData.dueToday.length,
        upcomingCount: mockData.upcoming.length
      });
    };

    fetchNotifications();
    const interval = setInterval(fetchNotifications, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'linkedin-post':
      case 'linkedin-message':
        return <FiLinkedin className="h-5 w-5 text-blue-600" />;
      case 'email':
        return <FiMail className="h-5 w-5 text-blue-500" />;
      case 'phone':
        return <FiPhone className="h-5 w-5 text-green-500" />;
      default:
        return <FiMessageSquare className="h-5 w-5 text-gray-500" />;
    }
  };

  const exportData = notifications.overdue.concat(notifications.dueToday, notifications.upcoming)
    .map(item => ({
      Company: item.company,
      Type: item.type,
      'Due Date': item.dueDate,
      'Days Past': item.daysPast || 0,
      Notes: item.notes
    }));

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-red-50 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FiAlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-red-800 truncate">
                    Overdue
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-red-900">
                      {stats.overdueCount}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FiClock className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-yellow-800 truncate">
                    Due Today
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-yellow-900">
                      {stats.dueTodayCount}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FiClock className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-blue-800 truncate">
                    Upcoming
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-blue-900">
                      {stats.upcomingCount}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Button */}
      <div className="flex justify-end">
        <CSVLink
          data={exportData}
          filename="notifications.csv"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Export to CSV
        </CSVLink>
      </div>

      {/* Notifications Grid */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="divide-y divide-gray-200">
          {/* Overdue Section */}
          <div className="p-4 bg-red-50">
            <h2 className="text-lg font-medium text-red-800">Overdue Communications</h2>
            <div className="mt-4 space-y-4">
              {notifications.overdue.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getIcon(item.type)}
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{item.company}</h3>
                        <p className="text-sm text-gray-500">{item.notes}</p>
                      </div>
                    </div>
                    <div className="text-sm text-red-600">
                      {item.daysPast} days overdue
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Due Today Section */}
          <div className="p-4 bg-yellow-50">
            <h2 className="text-lg font-medium text-yellow-800">Due Today</h2>
            <div className="mt-4 space-y-4">
              {notifications.dueToday.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getIcon(item.type)}
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{item.company}</h3>
                        <p className="text-sm text-gray-500">{item.notes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Section */}
          <div className="p-4">
            <h2 className="text-lg font-medium text-gray-900">Upcoming Communications</h2>
            <div className="mt-4 space-y-4">
              {notifications.upcoming.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getIcon(item.type)}
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{item.company}</h3>
                        <p className="text-sm text-gray-500">{item.notes}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Due: {new Date(item.dueDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications; 