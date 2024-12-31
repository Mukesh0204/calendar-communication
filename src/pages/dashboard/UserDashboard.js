import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiMail, FiPhone, FiLinkedin, FiMoreHorizontal } from 'react-icons/fi';
import CommunicationModal from '../../components/dashboard/CommunicationModal';

const mockCompanies = [
  {
    id: 1,
    name: 'Acme Corp',
    lastCommunications: [
      { type: 'LinkedIn Post', date: '2024-02-15', notes: 'Shared company update' },
      { type: 'Email', date: '2024-02-10', notes: 'Follow-up on meeting' },
      { type: 'Phone Call', date: '2024-02-05', notes: 'Quarterly review' },
      { type: 'LinkedIn Message', date: '2024-01-25', notes: 'Initial contact' },
      { type: 'Other', date: '2024-01-20', notes: 'Conference meeting' }
    ],
    nextScheduled: { type: 'Email', date: '2024-02-20' },
    status: 'due-today'
  },
  // Add more mock companies as needed
];

const UserDashboard = () => {
  const [companies, setCompanies] = useState(mockCompanies);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [showCommunicationModal, setShowCommunicationModal] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'overdue':
        return 'bg-red-50 border-red-200';
      case 'due-today':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-white border-gray-200';
    }
  };

  const getCommunicationIcon = (type) => {
    switch (type) {
      case 'Email':
        return <FiMail className="text-gray-400" />;
      case 'Phone Call':
        return <FiPhone className="text-gray-400" />;
      case 'LinkedIn Post':
      case 'LinkedIn Message':
        return <FiLinkedin className="text-gray-400" />;
      default:
        return <FiMoreHorizontal className="text-gray-400" />;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const handleCompanySelect = (companyId) => {
    setSelectedCompanies(prev => {
      if (prev.includes(companyId)) {
        return prev.filter(id => id !== companyId);
      }
      return [...prev, companyId];
    });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Company Communications</h1>
          <p className="mt-2 text-sm text-gray-700">
            Track and manage your company communications
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button
            onClick={() => setShowCommunicationModal(true)}
            disabled={selectedCompanies.length === 0}
            className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              selectedCompanies.length === 0 ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            Log Communication
          </button>
          <Link
            to="/calendar"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FiCalendar className="mr-2" />
            View Calendar
          </Link>
        </div>
      </div>

      {/* Company Grid */}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCompanies(companies.map(c => c.id));
                          } else {
                            setSelectedCompanies([]);
                          }
                        }}
                        checked={selectedCompanies.length === companies.length}
                      />
                    </th>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                      Company
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Last Communications
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Next Scheduled
                    </th>
                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {companies.map((company) => (
                    <tr
                      key={company.id}
                      className={getStatusColor(company.status)}
                    >
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300"
                          checked={selectedCompanies.includes(company.id)}
                          onChange={() => handleCompanySelect(company.id)}
                        />
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                        <div className="font-medium text-gray-900">{company.name}</div>
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        <div className="space-y-2">
                          {company.lastCommunications.map((comm, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2"
                              title={comm.notes} // Tooltip on hover
                            >
                              {getCommunicationIcon(comm.type)}
                              <span className="text-xs font-medium text-gray-600">
                                {formatDate(comm.date)}
                              </span>
                              <span className="text-xs text-gray-500">
                                {comm.type}
                              </span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          {getCommunicationIcon(company.nextScheduled.type)}
                          <span className="text-gray-500">
                            {formatDate(company.nextScheduled.date)}
                          </span>
                        </div>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link
                          to={`/company/${company.id}`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Communication Modal */}
      {showCommunicationModal && (
        <CommunicationModal
          onClose={() => setShowCommunicationModal(false)}
          selectedCompanies={selectedCompanies}
          companies={companies}
        />
      )}
    </div>
  );
};

export default UserDashboard; 