import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiUsers, 
  FiCalendar, 
  FiClock, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiEdit2,
  FiPieChart
} from 'react-icons/fi';

const CompanyDashboard = () => {
  const { id } = useParams();
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        // Replace with your actual API call
        const response = await fetch(`/api/companies/${id}`);
        const data = await response.json();
        setCompanyData(data);
      } catch (err) {
        setError('Failed to load company data');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
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

  // Mock data - replace with actual company data
  const communicationStats = [
    { label: 'Total Meetings', value: '24', icon: <FiUsers /> },
    { label: 'This Month', value: '3', icon: <FiCalendar /> },
    { label: 'Response Rate', value: '92%', icon: <FiPieChart /> },
  ];

  const upcomingMeetings = [
    { id: 1, title: 'Quarterly Review', date: '2024-03-20', time: '10:00 AM' },
    { id: 2, title: 'Project Update', date: '2024-03-22', time: '2:00 PM' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Company Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={companyData?.logo || 'https://via.placeholder.com/64'}
              alt="Company logo"
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {companyData?.name || 'Company Name'}
              </h1>
              <p className="text-gray-500">{companyData?.industry || 'Industry'}</p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FiEdit2 className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <FiMapPin className="w-5 h-5" />
            <span>{companyData?.location || 'Location'}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <FiMail className="w-5 h-5" />
            <span>{companyData?.email || 'contact@company.com'}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <FiPhone className="w-5 h-5" />
            <span>{companyData?.phone || '+1 234 567 890'}</span>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {communicationStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                {stat.icon}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Meetings Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FiClock className="mr-2 text-blue-500" />
          Upcoming Meetings
        </h2>
        <div className="space-y-4">
          {upcomingMeetings.map(meeting => (
            <div key={meeting.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium">{meeting.title}</h3>
                <p className="text-sm text-gray-500">{meeting.date}</p>
              </div>
              <span className="text-blue-600">{meeting.time}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyDashboard; 