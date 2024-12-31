import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHome, 
  FiUsers, 
  FiSettings, 
  FiCalendar,
  FiMessageSquare,
  FiPieChart
} from 'react-icons/fi';
import useAuth from '../hooks/useAuth';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const { user } = useAuth();

  const menuItems = [
    { icon: FiHome, label: 'Home', path: '/' },
    { icon: FiCalendar, label: 'Calendar', path: '/calendar' },
    { icon: FiMessageSquare, label: 'Messages', path: '/messages' },
    { icon: FiPieChart, label: 'Analytics', path: '/analytics' },
    { icon: FiSettings, label: 'Settings', path: '/settings' },
  ];

  // Add admin-specific menu items
  if (user?.role === 'admin') {
    menuItems.splice(1, 0, { icon: FiUsers, label: 'Users', path: '/admin' });
  }

  return (
    <motion.div
      initial={{ width: isOpen ? 240 : 0 }}
      animate={{ width: isOpen ? 240 : 0 }}
      className={`bg-white border-r border-gray-200 h-screen fixed lg:relative z-30 
        ${isOpen ? 'block' : 'hidden lg:block'}`}
    >
      <div className="p-4">
        <div className="flex flex-col space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors
                ${location.pathname === item.path 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar; 