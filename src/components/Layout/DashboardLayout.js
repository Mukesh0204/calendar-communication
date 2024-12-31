import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="text-gray-500 hover:text-gray-600"
          >
            {isSidebarOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
          <div className="text-xl font-bold text-gray-900">
            Calendar Communication
          </div>
          <div className="w-6" /> {/* Spacer for alignment */}
        </div>
      </div>

      {/* Sidebar - Mobile */}
      <div
        className={`lg:hidden fixed inset-0 z-20 transition-opacity duration-200 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-gray-600 opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className={`absolute inset-y-0 left-0 w-64 bg-white transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="lg:flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:w-64 lg:fixed lg:inset-y-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="lg:pl-64 flex-1">
          <Header />
          <main className="p-4 lg:p-8 mt-16 lg:mt-16">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout; 