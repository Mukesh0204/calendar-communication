import React, { useState } from 'react';
import { FiInfo, FiCalendar, FiMail, FiPhone, FiLinkedin, FiMessageSquare } from 'react-icons/fi';
import CommunicationModal from '../../components/Communication/CommunicationModal';
import Tooltip from '../../components/common/Tooltip';

const Dashboard = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data
  const companies = [
    {
      id: 1,
      name: 'Tech Solutions Inc.',
      lastCommunications: [
        { type: 'email', date: '2024-02-15', notes: 'Discussed Q1 plans', status: 'completed' },
        { type: 'linkedin_post', date: '2024-02-01', notes: 'Shared company update', status: 'completed' },
        { type: 'phone', date: '2024-01-15', notes: 'Quarterly review call', status: 'completed' },
        { type: 'linkedin_message', date: '2024-01-01', notes: 'New year greetings', status: 'completed' },
        { type: 'email', date: '2023-12-15', notes: 'Year-end summary', status: 'completed' }
      ],
      nextCommunication: { type: 'email', date: '2024-03-01' },
      status: 'due' // 'overdue', 'due', or 'normal'
    },
    // Add more companies...
  ];

  const getCommunicationIcon = (type) => {
    switch (type) {
      case 'email': return <FiMail className="w-4 h-4" />;
      case 'phone': return <FiPhone className="w-4 h-4" />;
      case 'linkedin_post':
      case 'linkedin_message': return <FiLinkedin className="w-4 h-4" />;
      default: return <FiMessageSquare className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'overdue': return 'bg-red-50 hover:bg-red-100';
      case 'due': return 'bg-yellow-50 hover:bg-yellow-100';
      default: return 'hover:bg-gray-50';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Communications Dashboard</h1>
        {selectedCompanies.length > 0 && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-primary"
          >
            Log Communication ({selectedCompanies.length})
          </button>
        )}
      </div>

      {/* Companies Table */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  checked={selectedCompanies.length === companies.length}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedCompanies(companies);
                    } else {
                      setSelectedCompanies([]);
                    }
                  }}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Communications
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Next Communication
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companies.map((company) => (
              <tr 
                key={company.id}
                className={`${getStatusColor(company.status)} transition-colors duration-150`}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedCompanies.some(c => c.id === company.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCompanies([...selectedCompanies, company]);
                      } else {
                        setSelectedCompanies(selectedCompanies.filter(c => c.id !== company.id));
                      }
                    }}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {company.name}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    {company.lastCommunications.slice(0, 5).map((comm, index) => (
                      <Tooltip
                        key={index}
                        content={
                          <div className="p-2 max-w-xs">
                            <div className="font-semibold mb-1">
                              {comm.type.replace('_', ' ').toUpperCase()}
                            </div>
                            <div className="text-sm mb-1">
                              {formatDate(comm.date)}
                            </div>
                            <div className="text-sm text-gray-500">
                              {comm.notes}
                            </div>
                          </div>
                        }
                      >
                        <div 
                          className={`p-2 rounded-full ${
                            comm.status === 'completed' ? 'bg-green-100' : 'bg-gray-100'
                          }`}
                        >
                          {getCommunicationIcon(comm.type)}
                        </div>
                      </Tooltip>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    {getCommunicationIcon(company.nextCommunication.type)}
                    <span className="text-sm text-gray-900">
                      {formatDate(company.nextCommunication.date)}
                    </span>
                    {company.status === 'overdue' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Overdue
                      </span>
                    )}
                    {company.status === 'due' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Due Today
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CommunicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCompanies={selectedCompanies}
        onSubmit={(formData) => {
          console.log('Logging communication:', formData);
          setIsModalOpen(false);
          setSelectedCompanies([]);
        }}
      />
    </div>
  );
};

export default Dashboard; 