import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const StatsWidget = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  className = ''
}) => {
  const getChangeColor = () => {
    switch (changeType) {
      case 'positive':
        return 'text-green-600 bg-green-100';
      case 'negative':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg shadow-sm p-6 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {Icon && (
            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
              <Icon className="w-6 h-6" />
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
          </div>
        </div>
        {change && (
          <div className={`px-2.5 py-1.5 rounded-full text-sm font-medium ${getChangeColor()}`}>
            <div className="flex items-center space-x-1">
              {changeType === 'positive' ? <FiArrowUp /> : <FiArrowDown />}
              <span>{change}</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default StatsWidget; 