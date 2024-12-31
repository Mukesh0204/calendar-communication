import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiUsers, FiMessageSquare, FiMail, FiPhone, FiVideo, FiCheck, FiClock } from 'react-icons/fi';

const LandingPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Calendar Communication Management System
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Track and manage all your business communications efficiently
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/signup"
                className="px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200 text-lg font-semibold"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="px-8 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-all duration-200 text-lg font-semibold"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Core Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Calendar Management */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FiCalendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Calendar Management</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2" />
                  Schedule meetings and calls
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2" />
                  Track communication history
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2" />
                  Set reminders and follow-ups
                </li>
              </ul>
            </div>

            {/* Communication Types */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FiMessageSquare className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Communication Types</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FiVideo className="text-blue-500 mr-2" />
                  Video Meetings
                </li>
                <li className="flex items-center">
                  <FiPhone className="text-green-500 mr-2" />
                  Phone Calls
                </li>
                <li className="flex items-center">
                  <FiMail className="text-red-500 mr-2" />
                  Email Communications
                </li>
              </ul>
            </div>

            {/* Company Management */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FiUsers className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Company Management</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2" />
                  Track company details
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2" />
                  Manage contact information
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2" />
                  Communication history
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Communication Timeline
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Timeline Items */}
              <TimelineItem 
                icon={FiVideo}
                title="Video Meetings"
                description="Schedule and manage video conferences with clients"
                color="blue"
              />
              <TimelineItem 
                icon={FiPhone}
                title="Phone Calls"
                description="Track phone communications and follow-ups"
                color="green"
              />
              <TimelineItem 
                icon={FiMail}
                title="Email Communications"
                description="Monitor email threads and responses"
                color="red"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Status Tracking */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Communication Status Tracking
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StatusCard 
              icon={FiClock}
              title="Upcoming"
              description="Track scheduled communications"
              color="blue"
            />
            <StatusCard 
              icon={FiMessageSquare}
              title="In Progress"
              description="Monitor ongoing discussions"
              color="yellow"
            />
            <StatusCard 
              icon={FiCheck}
              title="Completed"
              description="Review past communications"
              color="green"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Start managing your business communications effectively today
          </p>
          <Link
            to="/signup"
            className="px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200 text-lg font-semibold inline-block"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const TimelineItem = ({ icon: Icon, title, description, color }) => (
  <div className="flex items-start">
    <div className={`w-12 h-12 rounded-full bg-${color}-100 flex items-center justify-center mr-4 mt-1`}>
      <Icon className={`w-6 h-6 text-${color}-600`} />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const StatusCard = ({ icon: Icon, title, description, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-duration-300">
    <div className={`w-14 h-14 bg-${color}-100 rounded-lg flex items-center justify-center mb-4`}>
      <Icon className={`w-8 h-8 text-${color}-600`} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LandingPage; 