import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
  LineChart, Line,
  ResponsiveContainer 
} from 'recharts';
import { 
  FiDownload, 
  FiRefreshCw, 
  FiCalendar,
  FiFilter
} from 'react-icons/fi';

const AnalyticsDashboard = () => {
  const [dateRange, setDateRange] = useState('30');
  const [selectedCompany, setSelectedCompany] = useState('all');

  // Sample data for charts
  const communicationData = [
    { name: 'LinkedIn Post', count: 35, success: 28 },
    { name: 'LinkedIn Message', count: 45, success: 32 },
    { name: 'Email', count: 60, success: 45 },
    { name: 'Phone Call', count: 25, success: 20 },
    { name: 'Other', count: 15, success: 12 }
  ];

  const trendData = [
    { date: '2024-01', overdue: 5, completed: 40 },
    { date: '2024-02', overdue: 3, completed: 45 },
    { date: '2024-03', overdue: 4, completed: 42 },
    { date: '2024-04', overdue: 2, completed: 48 },
    { date: '2024-05', overdue: 1, completed: 50 }
  ];

  const activityLog = [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      action: 'Email Communication',
      status: 'Completed',
      date: '2024-02-20',
      user: 'John Doe'
    },
    // Add more activity logs
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const downloadReport = (type) => {
    // Implementation for report download
    console.log(`Downloading ${type} report...`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics Dashboard</h1>
        <div className="flex space-x-3">
          <button 
            onClick={() => downloadReport('pdf')}
            className="btn-primary"
          >
            <FiDownload className="w-4 h-4 mr-2" />
            Export Report
          </button>
          <button className="btn-secondary">
            <FiRefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FiCalendar className="text-gray-400" />
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="form-select"
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
              <option value="365">Last year</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <FiFilter className="text-gray-400" />
            <select 
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="form-select"
            >
              <option value="all">All Companies</option>
              <option value="tech">Tech Solutions Inc.</option>
              <option value="global">Global Innovations</option>
            </select>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Communication Methods Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Communication Methods</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={communicationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#3B82F6" name="Total" />
              <Bar dataKey="success" fill="#10B981" name="Successful" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Success Rate Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Communication Success Rate</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={communicationData}
                dataKey="success"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {communicationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Trend Analysis */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Communication Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="completed" 
                stroke="#10B981" 
                name="Completed"
              />
              <Line 
                type="monotone" 
                dataKey="overdue" 
                stroke="#EF4444" 
                name="Overdue"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Activity Log */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activityLog.map((log) => (
                  <tr key={log.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {log.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {log.action}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${log.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {log.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {log.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard; 