import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header/Header';
import { FiLock } from 'react-icons/fi';

const PreviewPage = ({ title, description, features, icon: Icon, screenshots }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Icon className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Screenshots or Preview Images */}
        {screenshots && (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <img
                    src={screenshot.image}
                    alt={screenshot.caption}
                    className="rounded-lg w-full"
                  />
                  <p className="mt-2 text-sm text-gray-600 text-center">
                    {screenshot.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Login/Signup CTA */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <FiLock className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Sign up now to access all features and start managing your communications more effectively.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign Up Now
            </Link>
            <Link
              to="/login"
              className="bg-white text-blue-600 px-6 py-2 rounded-md border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PreviewPage; 