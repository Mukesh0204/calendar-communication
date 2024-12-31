import React from 'react';
import { FiUsers, FiMessageSquare, FiSettings, FiPieChart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

const AdminDashboard = () => {
  const adminModules = [
    {
      title: 'Company Management',
      icon: <FiUsers className="w-8 h-8" />,
      description: 'Add, edit, and manage company profiles',
      link: '/admin/companies',
      count: '24 Companies'
    },
    {
      title: 'Communication Methods',
      icon: <FiMessageSquare className="w-8 h-8" />,
      description: 'Configure communication types and sequences',
      link: '/admin/communication-methods',
      count: '5 Methods'
    },
    {
      title: 'System Settings',
      icon: <FiSettings className="w-8 h-8" />,
      description: 'Manage application settings and preferences',
      link: '/admin/settings',
      count: 'General'
    },
    {
      title: 'Analytics',
      icon: <FiPieChart className="w-8 h-8" />,
      description: 'View communication statistics and reports',
      link: '/admin/analytics',
      count: 'Reports'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Manage companies, communication methods, and system settings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminModules.map((module) => (
            <Link
              key={module.title}
              to={module.link}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-blue-600">{module.icon}</div>
                <span className="text-sm text-gray-500">{module.count}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {module.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {module.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Add New Company
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50">
              Configure Methods
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50">
              View Reports
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard; 