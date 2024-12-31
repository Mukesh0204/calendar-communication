import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from 'react-icons/fi';

const icons = {
  success: <FiCheckCircle className="w-5 h-5" />,
  error: <FiAlertCircle className="w-5 h-5" />,
  info: <FiInfo className="w-5 h-5" />,
};

const colors = {
  success: 'bg-green-50 text-green-800 border-green-200',
  error: 'bg-red-50 text-red-800 border-red-200',
  info: 'bg-blue-50 text-blue-800 border-blue-200',
};

const Alert = ({ type = 'info', message, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`${colors[type]} border rounded-lg p-4 mb-4`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="flex-shrink-0">{icons[type]}</span>
            <p>{message}</p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 hover:bg-white rounded-full transition-colors"
            >
              <FiX className="w-4 h-4" />
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert; 