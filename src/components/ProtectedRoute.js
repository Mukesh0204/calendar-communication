import React from 'react';
import { useAuth } from '../context/AuthContext';
import PreviewPage from './PreviewPage';
import { 
  FiCalendar, 
  FiMessageSquare, 
  FiUsers, 
  FiPieChart,
  FiClock,
  FiCheckCircle,
  FiTrendingUp,
  FiMail,
  FiBarChart2,
  FiFilter
} from 'react-icons/fi';

const pageConfigs = {
  calendar: {
    title: 'Smart Calendar Management',
    description: 'Efficiently organize and manage all your business meetings in one place.',
    icon: FiCalendar,
    features: [
      {
        icon: <FiClock className="w-6 h-6 text-blue-600" />,
        title: 'Automated Scheduling',
        description: 'Smart scheduling system that finds the perfect time for all participants'
      },
      {
        icon: <FiCheckCircle className="w-6 h-6 text-blue-600" />,
        title: 'Meeting Reminders',
        description: 'Never miss a meeting with automated reminders and notifications'
      },
      {
        icon: <FiUsers className="w-6 h-6 text-blue-600" />,
        title: 'Team Availability',
        description: 'See team member availability at a glance for better planning'
      }
    ]
  },
  messages: {
    title: 'Unified Communication Hub',
    description: 'Keep all your business communications organized and accessible in one place.',
    icon: FiMessageSquare,
    features: [
      {
        icon: <FiMail className="w-6 h-6 text-blue-600" />,
        title: 'Centralized Messaging',
        description: 'All your communications in one organized inbox'
      },
      {
        icon: <FiFilter className="w-6 h-6 text-blue-600" />,
        title: 'Smart Filtering',
        description: 'Easily find messages with advanced search and filters'
      },
      {
        icon: <FiCheckCircle className="w-6 h-6 text-blue-600" />,
        title: 'Read Receipts',
        description: 'Know when your messages have been read and acted upon'
      }
    ]
  },
  meetings: {
    title: 'Meeting Management',
    description: 'Streamline your meeting organization and follow-ups.',
    icon: FiUsers,
    features: [
      {
        icon: <FiCalendar className="w-6 h-6 text-blue-600" />,
        title: 'Meeting Planning',
        description: 'Easy-to-use interface for planning and scheduling meetings'
      },
      {
        icon: <FiCheckCircle className="w-6 h-6 text-blue-600" />,
        title: 'Follow-ups',
        description: 'Automated follow-up reminders and task tracking'
      },
      {
        icon: <FiUsers className="w-6 h-6 text-blue-600" />,
        title: 'Participant Management',
        description: 'Manage attendees and track responses efficiently'
      }
    ]
  },
  analytics: {
    title: 'Communication Analytics',
    description: 'Gain insights into your communication patterns and meeting effectiveness.',
    icon: FiPieChart,
    features: [
      {
        icon: <FiBarChart2 className="w-6 h-6 text-blue-600" />,
        title: 'Performance Metrics',
        description: 'Track key communication metrics and trends'
      },
      {
        icon: <FiTrendingUp className="w-6 h-6 text-blue-600" />,
        title: 'Trend Analysis',
        description: 'Identify patterns and optimize your communication strategy'
      },
      {
        icon: <FiPieChart className="w-6 h-6 text-blue-600" />,
        title: 'Custom Reports',
        description: 'Generate detailed reports for better decision making'
      }
    ]
  }
};

const ProtectedRoute = ({ children, path }) => {
  const { user } = useAuth();
  const pageName = path.split('/')[1]; // Extract page name from path
  const pageConfig = pageConfigs[pageName];

  if (!user && pageConfig) {
    return <PreviewPage {...pageConfig} />;
  }

  return children;
};

export default ProtectedRoute; 