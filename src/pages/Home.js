import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header/Header';
import { 
  FiCalendar, 
  FiMessageSquare, 
  FiPieChart, 
  FiUsers,
  FiArrowRight 
} from 'react-icons/fi';

const Home = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: <FiCalendar className="w-8 h-8" />,
      title: 'Smart Calendar',
      description: 'Efficiently manage your meetings and schedules',
      link: '/calendar'
    },
    {
      icon: <FiMessageSquare className="w-8 h-8" />,
      title: 'Communication Hub',
      description: 'Keep track of all company communications',
      link: '/messages'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Meeting Management',
      description: 'Organize and track business meetings',
      link: '/meetings'
    },
    {
      icon: <FiPieChart className="w-8 h-8" />,
      title: 'Analytics Dashboard',
      description: 'Get insights into your communication patterns',
      link: '/analytics'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Communication Calendar</span>
              <span className="block text-blue-600">Made Simple</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Track, manage, and optimize your business communications all in one place.
            </p>

            {/* Call to Action - Show different buttons based on auth status */}
            {!user ? (
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link
                    to="/signup"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link
                    to="/login"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Login
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <Link
                  to="/calendar"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Go to Dashboard
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            )}
          </div>

          {/* Features Grid */}
          <div className="mt-24">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.link}
                  className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <div className="text-blue-600 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500">
                      {feature.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">Learn more</span>
                      <FiArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* User Welcome Section - Only show when logged in */}
          {user && (
            <div className="mt-24 bg-white rounded-lg shadow-sm p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  Welcome back, {user.name}!
                </h2>
                <p className="mt-2 text-gray-600">
                  Here's your communication overview
                </p>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <FiCalendar className="w-6 h-6 text-blue-600 mb-2" />
                    <h3 className="font-medium">Today's Meetings</h3>
                    <Link to="/calendar" className="text-blue-600 hover:text-blue-700 text-sm">
                      View Calendar →
                    </Link>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <FiMessageSquare className="w-6 h-6 text-blue-600 mb-2" />
                    <h3 className="font-medium">Unread Messages</h3>
                    <Link to="/messages" className="text-blue-600 hover:text-blue-700 text-sm">
                      View Messages →
                    </Link>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <FiUsers className="w-6 h-6 text-blue-600 mb-2" />
                    <h3 className="font-medium">Upcoming Meetings</h3>
                    <Link to="/meetings" className="text-blue-600 hover:text-blue-700 text-sm">
                      View Meetings →
                    </Link>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <FiPieChart className="w-6 h-6 text-blue-600 mb-2" />
                    <h3 className="font-medium">Analytics</h3>
                    <Link to="/analytics" className="text-blue-600 hover:text-blue-700 text-sm">
                      View Analytics →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
