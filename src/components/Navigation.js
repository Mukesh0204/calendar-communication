import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiLogIn, FiUserPlus, FiCalendar, FiPhone, FiMail } from 'react-icons/fi';

const Navigation = ({ isAuthenticated, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Bar with Contact Info */}
      <div className="bg-gradient-to-r from-violet-900 to-indigo-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="mailto:contact@entnt.com" className="flex items-center hover:text-purple-200">
              <FiMail className="mr-2" />
              contact@entnt.com
            </a>
            <a href="tel:+1234567890" className="flex items-center hover:text-purple-200">
              <FiPhone className="mr-2" />
              +1 (234) 567-890
            </a>
          </div>
          {!isAuthenticated && (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="hover:text-purple-200 flex items-center">
                <FiLogIn className="mr-2" />
                Login
              </Link>
              <Link to="/signup" className="hover:text-purple-200 flex items-center">
                <FiUserPlus className="mr-2" />
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
                EntntTracker
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-violet-600 transition-colors">
                Home
              </Link>
              <Link to="/features" className="text-gray-600 hover:text-violet-600 transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-violet-600 transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-violet-600 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-violet-600 transition-colors">
                Contact
              </Link>
              {isAuthenticated && (
                <Link 
                  to="/dashboard" 
                  className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-200"
                >
                  Dashboard
                </Link>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link to="/" className="block text-gray-600 hover:text-violet-600">
                Home
              </Link>
              <Link to="/features" className="block text-gray-600 hover:text-violet-600">
                Features
              </Link>
              <Link to="/pricing" className="block text-gray-600 hover:text-violet-600">
                Pricing
              </Link>
              <Link to="/about" className="block text-gray-600 hover:text-violet-600">
                About
              </Link>
              <Link to="/contact" className="block text-gray-600 hover:text-violet-600">
                Contact
              </Link>
              {isAuthenticated && (
                <Link 
                  to="/dashboard" 
                  className="block px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg text-center"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation; 