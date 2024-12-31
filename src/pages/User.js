import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaBell, FaCog, FaSearch, FaFilter, FaPlus } from 'react-icons/fa';
import CompanyCard from '../components/CompanyCard';

const User = () => {
  // Default company data
  const defaultCompanies = [
    {
      id: 1,
      name: 'Company A',
      communicationMethods: ['Email', 'Phone'],
      frequency: 'Weekly',
      status: 'active',
    },
    {
      id: 2,
      name: 'Company B',
      communicationMethods: ['Slack'],
      frequency: 'Monthly',
      status: 'pending',
    },
    {
      id: 3,
      name: 'Company C',
      communicationMethods: ['Phone'],
      frequency: 'Daily',
      status: 'inactive',
    },
  ];

  const [companies] = useState(defaultCompanies);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Filter companies based on search term and status
  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || company.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <FaCalendar className="text-indigo-600 text-2xl" />
              <h1 className="ml-2 text-xl font-semibold text-gray-800">User Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <FaBell className="text-xl" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <FaCog className="text-xl" />
              </button>
              <div className="relative">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="User avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Companies</h2>
            <Link
              to="/company/new"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              <FaPlus className="mr-2" />
              Add New Company
            </Link>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <FaFilter className="text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No companies found matching your criteria.</p>
            </div>
          ) : (
            filteredCompanies.map((company) => (
              <Link key={company.id} to={`/company/${company.id}`}>
                <CompanyCard company={company} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
