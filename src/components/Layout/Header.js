import React, { useState } from 'react';
import { FiSearch, FiUser } from 'react-icons/fi';
import NotificationCenter from '../Notifications/NotificationCenter';

const Header = () => {
  const [isSearchFocused, setSearchFocused] = useState(false);
  
  // These counts would typically come from your data/state management
  const overdueCount = 3;
  const dueCount = 2;

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-white border-b border-gray-200 z-20">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl hidden lg:block">
          <div className={`relative ${isSearchFocused ? 'ring-2 ring-blue-500' : ''}`}>
            <input
              type="text"
              placeholder="Search or jump to..."
              className="w-full h-8 px-4 pl-10 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Right Side Items */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <NotificationCenter 
            overdueCount={overdueCount}
            dueCount={dueCount}
          />

          {/* User Menu */}
          <button className="flex items-center space-x-1 p-1.5 rounded-full hover:bg-gray-100">
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
              <FiUser className="w-4 h-4 text-gray-600" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 