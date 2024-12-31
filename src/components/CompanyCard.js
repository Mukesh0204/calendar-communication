import React from 'react';
import { FiMail, FiPhone, FiCalendar, FiClock } from 'react-icons/fi';

const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="text-4xl">{company.logo}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {company.name}
            </h3>
            <p className="text-sm text-gray-500">{company.industry}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          company.status === 'active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {company.status}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <FiMail className="w-4 h-4 mr-2" />
          <span className="text-sm">{company.email}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FiPhone className="w-4 h-4 mr-2" />
          <span className="text-sm">{company.phone}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FiCalendar className="w-4 h-4 mr-2" />
          <span className="text-sm">Last Contact: {company.lastContact}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-200">
          Schedule Communication
        </button>
      </div>
    </div>
  );
};

export default CompanyCard;
