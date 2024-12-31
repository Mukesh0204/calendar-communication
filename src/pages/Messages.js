import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getPageContent } from '../utils/contentHelper';
import Header from '../components/Header/Header';
import { FiMail, FiSend, FiInbox, FiSearch } from 'react-icons/fi';

const Messages = () => {
  const { user } = useAuth();
  const content = getPageContent('messages', user);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // Pre-login view
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {content.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <FiMail className="w-8 h-8 text-blue-600 mb-4" />
                  <p className="text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Filter messages
  const filteredMessages = content.data.filter(message => {
    const searchMatch = message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       message.content.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === 'read') return searchMatch && message.read;
    if (filter === 'unread') return searchMatch && !message.read;
    return searchMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">{content.title}</h1>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Messages Sent</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {content.analytics.sent}
                  </p>
                </div>
                <FiSend className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Messages Received</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {content.analytics.received}
                  </p>
                </div>
                <FiInbox className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mt-8 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="flex space-x-4">
                {['all', 'read', 'unread'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`px-4 py-2 rounded-md ${
                      filter === status
                        ? 'bg-blue-100 text-blue-800'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Messages List */}
          <div className="mt-6 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className={`p-6 hover:bg-gray-50 ${!message.read ? 'bg-blue-50' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {message.subject}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        From: {message.from}
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        {message.content}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {message.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Messages; 