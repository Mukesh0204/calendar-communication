import React from 'react';
import { motion } from 'framer-motion';
import { FiMoreVertical } from 'react-icons/fi';

const Card = ({
  title,
  subtitle,
  children,
  actions,
  footer,
  className = '',
  isLoading = false,
  error = null,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg shadow-sm ${className}`}
    >
      {/* Card Header */}
      {(title || actions) && (
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              {title && (
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
              )}
              {subtitle && (
                <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
              )}
            </div>
            {actions && (
              <div className="flex items-center space-x-2">
                {actions}
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <FiMoreVertical className="text-gray-400" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="px-6 py-4">
        {isLoading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">{error}</div>
        ) : (
          children
        )}
      </div>

      {/* Card Footer */}
      {footer && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
          {footer}
        </div>
      )}
    </motion.div>
  );
};

export default Card; 