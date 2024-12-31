import React, { useState } from 'react';
import Header from '../components/Header/Header';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { FiUser, FiBell, FiLock, FiGlobe } from 'react-icons/fi';

const Settings = () => {
  useDocumentTitle('Settings');
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FiUser },
    { id: 'notifications', label: 'Notifications', icon: FiBell },
    { id: 'security', label: 'Security', icon: FiLock },
    { id: 'preferences', label: 'Preferences', icon: FiGlobe }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'preferences':
        return <PreferenceSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="py-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">CalComm Settings</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left
                        ${activeTab === tab.id 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'text-gray-600 hover:bg-gray-50'
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Profile Settings Component
const ProfileSettings = () => {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Profile Settings</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Bio
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={4}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

// Notification Settings Component
const NotificationSettings = () => {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h2>
      <div className="space-y-4">
        {['Email notifications', 'Push notifications', 'Meeting reminders'].map((item) => (
          <div key={item} className="flex items-center justify-between">
            <span className="text-gray-700">{item}</span>
            <button className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Security Settings Component
const SecuritySettings = () => {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Security Settings</h2>
      <div className="space-y-6">
        <div>
          <button className="text-blue-600 hover:text-blue-700">
            Change Password
          </button>
        </div>
        <div>
          <button className="text-blue-600 hover:text-blue-700">
            Enable Two-Factor Authentication
          </button>
        </div>
        <div>
          <button className="text-blue-600 hover:text-blue-700">
            Manage Connected Devices
          </button>
        </div>
      </div>
    </div>
  );
};

// Preference Settings Component
const PreferenceSettings = () => {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">General Preferences</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Language
          </label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Time Zone
          </label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>UTC</option>
            <option>EST</option>
            <option>PST</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings; 