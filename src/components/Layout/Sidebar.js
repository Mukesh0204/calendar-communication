import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiCalendar, 
  FiBarChart2, 
  FiSettings,
  FiUsers,
  FiMessageSquare,
  FiBook,
  FiStar
} from 'react-icons/fi';

const Sidebar = ({ onClose }) => {
  const location = useLocation();
  const isAdmin = localStorage.getItem('user-role') === 'admin';

  const navItems = [
    {
      name: 'Overview',
      icon: FiHome,
      path: '/dashboard',
      count: null
    },
    {
      name: 'Calendar',
      icon: FiCalendar,
      path: '/calendar',
      count: 3
    },
    {
      name: 'Analytics',
      icon: FiBarChart2,
      path: '/analytics',
      count: null
    },
    {
      name: 'Companies',
      icon: FiUsers,
      path: '/companies',
      count: 24
    }
  ];

  const adminItems = [
    {
      name: 'Communication Methods',
      icon: FiMessageSquare,
      path: '/admin/communication-methods',
      count: null
    },
    {
      name: 'Settings',
      icon: FiSettings,
      path: '/admin/settings',
      count: null
    }
  ];

  const NavItem = ({ item }) => (
    <Link
      to={item.path}
      onClick={onClose}
      className={`flex items-center justify-between px-3 py-2 rounded-md transition-colors duration-150 
        ${location.pathname === item.path
          ? 'bg-gray-800 text-white'
          : 'text-gray-300 hover:text-white hover:bg-gray-700'
        }`}
    >
      <div className="flex items-center">
        <item.icon className="w-5 h-5 mr-3" />
        <span className="text-sm font-medium">{item.name}</span>
      </div>
      {item.count && (
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full 
          ${location.pathname === item.path
            ? 'bg-gray-700 text-gray-200'
            : 'bg-gray-700 text-gray-300'
          }`}>
          {item.count}
        </span>
      )}
    </Link>
  );

  return (
    <div className="h-full bg-gray-900 text-white">
      {/* Logo Section */}
      <div className="px-4 py-5">
        <div className="flex items-center space-x-2">
          <FiBook className="w-8 h-8" />
          <span className="text-xl font-bold">CalComm</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-3 mt-6 space-y-1">
        {navItems.map((item) => (
          <NavItem key={item.path} item={item} />
        ))}
      </nav>

      {/* Favorites Section */}
      <div className="px-4 py-4 mt-6 border-t border-gray-700">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Favorites
        </h3>
        <div className="mt-3 space-y-1">
          <Link 
            to="/favorites/tech-solutions"
            className="flex items-center px-3 py-2 text-sm text-gray-300 rounded-md hover:text-white hover:bg-gray-700"
          >
            <FiStar className="w-4 h-4 mr-3" />
            Tech Solutions Inc.
          </Link>
        </div>
      </div>

      {/* Admin Section */}
      {isAdmin && (
        <div className="px-4 py-4 mt-6 border-t border-gray-700">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Administration
          </h3>
          <nav className="mt-3 space-y-1">
            {adminItems.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </nav>
        </div>
      )}

      {/* Footer */}
      <div className="px-4 py-4 mt-auto border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8 rounded-full"
              src="https://github.com/github.png"
              alt="Profile"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              John Doe
            </p>
            <p className="text-xs text-gray-400 truncate">
              john@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 