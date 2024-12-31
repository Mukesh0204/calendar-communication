import React from 'react';
import { Link } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';

const PreLoginView = ({ content }) => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {content.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {content.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {content.features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center mb-4">
                {content.icon}
              </div>
              <p className="text-gray-800">{feature}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-6 rounded-lg max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <FiLock className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-lg font-medium text-gray-900 mb-2">
            Sign in to access full features
          </h2>
          <p className="text-gray-600 mb-4">
            Please log in to view your personalized dashboard and access all features.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-white text-blue-600 px-6 py-2 rounded-md border border-blue-600 hover:bg-blue-50"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoginView; 