import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMail, FiPhone, FiMessageSquare, FiEdit2 } from 'react-icons/fi';

const UserDashboard = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace with your actual API call
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError('Failed to load user data');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-6 bg-red-50 text-red-600 rounded-lg">
        {error}
      </div>
    );
  }

  // Mock data - replace with actual user data
  const upcomingMeetings = [
    { id: 1, company: 'Acme Corp', date: '2024-03-20', time: '10:00 AM' },
    { id: 2, company: 'Tech Inc', date: '2024-03-22', time: '2:00 PM' },
  ];

  const recentActivities = [
    { id: 1, type: 'call', company: 'Acme Corp', date: '2024-03-15' },
    { id: 2, type: 'email', company: 'Tech Inc', date: '2024-03-14' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* User Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={userData?.avatar || 'https://via.placeholder.com/64'}
              alt="User avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{userData?.name || 'User Name'}</h1>
              <p className="text-gray-500">{userData?.role || 'Role'}</p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FiEdit2 className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <FiMail className="w-5 h-5" />
            <span>{userData?.email || 'email@example.com'}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <FiPhone className="w-5 h-5" />
            <span>{userData?.phone || '+1 234 567 890'}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <FiMessageSquare className="w-5 h-5" />
            <span>{userData?.preferredContact || 'Email'}</span>
          </div>
        </div>
      </motion.div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upcoming Meetings */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FiCalendar className="mr-2 text-blue-500" />
            Upcoming Meetings
          </h2>
          <div className="space-y-4">
            {upcomingMeetings.map(meeting => (
              <div key={meeting.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium">{meeting.company}</h3>
                  <p className="text-sm text-gray-500">{meeting.date}</p>
                </div>
                <span className="text-blue-600">{meeting.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FiClock className="mr-2 text-blue-500" />
            Recent Activities
          </h2>
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium">{activity.company}</h3>
                  <p className="text-sm text-gray-500">{activity.type}</p>
                </div>
                <span className="text-gray-500">{activity.date}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserDashboard; 