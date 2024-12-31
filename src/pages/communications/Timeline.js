import React from 'react';
import { FiClock, FiVideo, FiPhone, FiMail, FiCheck, FiX } from 'react-icons/fi';

const Timeline = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center">
          <FiClock className="mr-2" /> Communication Timeline
        </h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {/* Timeline items */}
          <div className="space-y-6">
            <TimelineItem 
              type="video"
              title="Strategy Meeting"
              company="Tech Solutions Inc."
              time="2:00 PM"
              date="Today"
              status="upcoming"
            />

            <TimelineItem 
              type="phone"
              title="Client Follow-up"
              company="Global Innovations"
              time="11:30 AM"
              date="Today"
              status="completed"
            />

            <TimelineItem 
              type="email"
              title="Project Proposal"
              company="EcoSmart Solutions"
              time="9:00 AM"
              date="Today"
              status="completed"
            />

            <TimelineItem 
              type="video"
              title="Product Demo"
              company="Digital Dynamics"
              time="3:00 PM"
              date="Yesterday"
              status="cancelled"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ type, title, company, time, date, status }) => {
  const getIcon = () => {
    switch (type) {
      case 'video': return <FiVideo />;
      case 'phone': return <FiPhone />;
      case 'email': return <FiMail />;
      default: return <FiClock />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'video': return 'bg-purple-100 text-purple-600';
      case 'phone': return 'bg-green-100 text-green-600';
      case 'email': return 'bg-blue-100 text-blue-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="flex group">
      {/* Icon */}
      <div className={`
        relative z-10 w-16 h-16 rounded-full flex items-center justify-center
        ${getTypeColor()} border-4 border-white shadow-md
      `}>
        {getIcon()}
      </div>

      {/* Content */}
      <div className="flex-1 ml-4 bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-600">{company}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
            {status}
          </span>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <FiClock className="mr-2" />
          {time} - {date}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 