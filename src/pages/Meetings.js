import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getPageContent } from '../utils/contentHelper';
import Header from '../components/Header/Header';
import { FiUsers, FiCheck, FiClock, FiPlus } from 'react-icons/fi';

const Meetings = () => {
  const { user } = useAuth();
  const content = getPageContent('meetings', user);
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
                  <FiUsers className="w-8 h-8 text-blue-600 mb-4" />
                  <p className="text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Filter meetings
  const filteredMeetings = content.data.filter(meeting => {
    if (filter === 'completed') return meeting.status === 'completed';
    if (filter === 'scheduled') return meeting.status === 'scheduled';
    if (filter === 'pending') return meeting.status === 'pending';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">{content.title}</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
            <FiPlus className="mr-2" />
            New Meeting
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {content.analytics.completed}
                </p>
              </div>
              <FiCheck className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Scheduled</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {content.analytics.scheduled}
                </p>
              </div>
              <FiClock className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex space-x-4">
            {['all', 'scheduled', 'completed', 'pending'].map((status) => (
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

        {/* Meetings List */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {filteredMeetings.map((meeting) => (
              <div key={meeting.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {meeting.title}
                    </h3>
                    <div className="mt-1 text-sm text-gray-500">
                      <p>With: {meeting.company}</p>
                      <p>Date: {meeting.date} at {meeting.time}</p>
                    </div>
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      meeting.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : meeting.status === 'scheduled'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {meeting.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Meetings; 