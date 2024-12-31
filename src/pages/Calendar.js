import React from 'react';
import { useAuth } from '../context/AuthContext';
import { getPageContent } from '../utils/contentHelper';
import Header from '../components/Header/Header';
import PreLoginView from '../components/PreLoginView';
import { FiCalendar, FiClock, FiCheck } from 'react-icons/fi';

const Calendar = () => {
  const { user } = useAuth();
  const content = getPageContent('calendar', user);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {!user ? (
          <PreLoginView 
            content={{
              ...content,
              icon: <FiCalendar className="w-8 h-8 text-blue-600" />
            }}
          />
        ) : (
          <div>
            {/* User Welcome Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Welcome back, {user.name || user.email}
                  </h1>
                  <p className="mt-1 text-gray-600">
                    Here's your calendar overview for today
                  </p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Schedule Meeting
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Today's Meetings</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {content.data.filter(m => m.date === new Date().toISOString().split('T')[0]).length}
                    </p>
                  </div>
                  <FiClock className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Upcoming</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {content.analytics.upcoming}
                    </p>
                  </div>
                  <FiCalendar className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Completed</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {content.analytics.total - content.analytics.upcoming}
                    </p>
                  </div>
                  <FiCheck className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            </div>

            {/* Calendar Content */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  Upcoming Meetings
                </h2>
              </div>
              <div className="divide-y divide-gray-200">
                {content.data.map((meeting) => (
                  <div key={meeting.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {meeting.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {meeting.company} • {meeting.time}
                        </p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        meeting.status === 'completed' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {meeting.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Calendar; 