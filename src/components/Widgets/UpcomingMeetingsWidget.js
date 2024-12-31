import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { FiClock, FiVideo, FiPhone } from 'react-icons/fi';

const UpcomingMeetingsWidget = ({ meetings = [] }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Meetings</h3>
      <div className="space-y-4">
        {meetings.map((meeting, index) => (
          <motion.div
            key={meeting.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              {meeting.type === 'video' ? <FiVideo /> : <FiPhone />}
            </div>
            <div className="flex-grow">
              <h4 className="text-sm font-medium text-gray-900">{meeting.title}</h4>
              <p className="text-sm text-gray-500">{meeting.participants}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center text-sm text-gray-500">
                <FiClock className="mr-1" />
                {format(new Date(meeting.datetime), 'h:mm a')}
              </div>
              <p className="text-xs text-gray-400">
                {format(new Date(meeting.datetime), 'MMM d, yyyy')}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMeetingsWidget; 