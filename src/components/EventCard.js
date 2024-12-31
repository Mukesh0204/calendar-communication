import React from 'react';
import { FiVideo, FiPhone, FiMail, FiClock, FiUsers } from 'react-icons/fi';

const EventCard = ({ event }) => {
  const getEventIcon = () => {
    switch (event.type) {
      case 'video': return <FiVideo />;
      case 'phone': return <FiPhone />;
      case 'email': return <FiMail />;
      default: return <FiClock />;
    }
  };

  const getEventColor = () => {
    switch (event.priority) {
      case 'high': return 'from-rose-500 to-pink-500';
      case 'medium': return 'from-blue-500 to-indigo-500';
      case 'low': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-full bg-gradient-to-r ${getEventColor()}`}>
          {React.cloneElement(getEventIcon(), { className: 'w-5 h-5 text-white' })}
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          event.status === 'scheduled' 
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {event.status}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {event.title}
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        {event.description}
      </p>

      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <FiClock className="w-4 h-4 mr-2" />
          <span className="text-sm">
            {new Date(event.start).toLocaleTimeString()} - 
            {new Date(event.end).toLocaleTimeString()}
          </span>
        </div>
        <div className="flex items-center text-gray-600">
          <FiUsers className="w-4 h-4 mr-2" />
          <span className="text-sm">
            {event.attendees.join(', ')}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex space-x-2">
        <button className="flex-1 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-200">
          Join
        </button>
        <button className="flex-1 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all duration-200">
          Reschedule
        </button>
      </div>
    </div>
  );
};

export default EventCard; 