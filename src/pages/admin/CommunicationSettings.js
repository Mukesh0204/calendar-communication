import React, { useState } from 'react';
import { 
  FiSettings, 
  FiBell, 
  FiMail, 
  FiGlobe, 
  FiLock,
  FiSave,
  FiToggleLeft,
  FiToggleRight
} from 'react-icons/fi';

const GradientToggle = ({ enabled, onChange }) => (
  <button
    onClick={onChange}
    className={`
      relative inline-flex h-6 w-11 items-center rounded-full
      transition-colors duration-200 ease-in-out
      ${enabled 
        ? 'bg-gradient-to-r from-violet-600 to-indigo-600' 
        : 'bg-gray-200'
      }
    `}
  >
    <span
      className={`
        inline-block h-4 w-4 transform rounded-full bg-white shadow
        transition duration-200 ease-in-out
        ${enabled ? 'translate-x-6' : 'translate-x-1'}
      `}
    />
  </button>
);

const CommunicationSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    reminderTime: '30',
    defaultDuration: '60',
    timezone: 'UTC',
    language: 'en',
    darkMode: false,
    autoSchedule: true
  });

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 rounded-xl shadow-lg p-8 animate-fade-in">
        <h1 className="text-2xl font-bold text-white mb-2">
          Communication Settings
        </h1>
        <p className="text-blue-100">
          Customize your communication preferences and notifications
        </p>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Notifications */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400">
              <FiBell className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 ml-3">
              Notification Preferences
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Email Notifications
                </h3>
                <p className="text-sm text-gray-500">
                  Receive updates via email
                </p>
              </div>
              <button
                onClick={() => handleToggle('emailNotifications')}
                className={`p-2 rounded-full transition-all duration-200 ${
                  settings.emailNotifications 
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white' 
                    : 'text-gray-400'
                }`}
              >
                {settings.emailNotifications ? (
                  <FiToggleRight className="w-8 h-8" />
                ) : (
                  <FiToggleLeft className="w-8 h-8" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Push Notifications
                </h3>
                <p className="text-sm text-gray-500">
                  Get instant notifications
                </p>
              </div>
              <button
                onClick={() => handleToggle('pushNotifications')}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  settings.pushNotifications ? 'text-blue-600' : 'text-gray-400'
                }`}
              >
                {settings.pushNotifications ? (
                  <FiToggleRight className="w-8 h-8" />
                ) : (
                  <FiToggleLeft className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Communication Preferences */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-6">
            <FiMail className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-lg font-semibold text-gray-900">
              Communication Preferences
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Reminder Time
              </label>
              <select
                value={settings.reminderTime}
                onChange={(e) => handleChange('reminderTime', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="15">15 minutes before</option>
                <option value="30">30 minutes before</option>
                <option value="60">1 hour before</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Meeting Duration
              </label>
              <select
                value={settings.defaultDuration}
                onChange={(e) => handleChange('defaultDuration', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="90">1.5 hours</option>
              </select>
            </div>
          </div>
        </div>

        {/* Regional Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-6">
            <FiGlobe className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-lg font-semibold text-gray-900">
              Regional Settings
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Zone
              </label>
              <select
                value={settings.timezone}
                onChange={(e) => handleChange('timezone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="UTC">UTC</option>
                <option value="EST">Eastern Time</option>
                <option value="PST">Pacific Time</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                value={settings.language}
                onChange={(e) => handleChange('language', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-6">
            <FiLock className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-lg font-semibold text-gray-900">
              Advanced Settings
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Dark Mode
                </h3>
                <p className="text-sm text-gray-500">
                  Enable dark theme
                </p>
              </div>
              <button
                onClick={() => handleToggle('darkMode')}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  settings.darkMode ? 'text-blue-600' : 'text-gray-400'
                }`}
              >
                {settings.darkMode ? (
                  <FiToggleRight className="w-8 h-8" />
                ) : (
                  <FiToggleLeft className="w-8 h-8" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Auto-Schedule
                </h3>
                <p className="text-sm text-gray-500">
                  Automatically suggest meeting times
                </p>
              </div>
              <button
                onClick={() => handleToggle('autoSchedule')}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  settings.autoSchedule ? 'text-blue-600' : 'text-gray-400'
                }`}
              >
                {settings.autoSchedule ? (
                  <FiToggleRight className="w-8 h-8" />
                ) : (
                  <FiToggleLeft className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-lg transition-all duration-200 flex items-center">
          <FiSave className="w-5 h-5 mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default CommunicationSettings; 