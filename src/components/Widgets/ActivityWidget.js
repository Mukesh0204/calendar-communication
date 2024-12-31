import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

const ActivityWidget = ({ activities = [] }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-3"
          >
            <div className={`
              p-2 rounded-full flex-shrink-0
              ${activity.type === 'meeting' ? 'bg-blue-100' : 'bg-green-100'}
            `}>
              {activity.icon}
            </div>
            <div className="flex-grow">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-500">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">
                {format(new Date(activity.timestamp), 'MMM d, yyyy h:mm a')}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ActivityWidget; 