import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiMail, FiLock, FiArrowLeft, FiInfo } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

// Sample user data
const sampleUsers = {
  'admin@calcomm.com': {
    email: 'admin@calcomm.com',
    password: 'admin123',
    role: 'admin',
    name: 'Admin User'
  },
  'user@calcomm.com': {
    email: 'user@calcomm.com',
    password: 'user123',
    role: 'user',
    name: 'John Doe'
  },
  'test@company.com': {
    email: 'test@company.com',
    password: 'test123',
    role: 'company',
    name: 'Tech Corp'
  }
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showCredentials, setShowCredentials] = useState(false);
  const [error, setError] = useState('');

  // Get the return URL from location state or default to calendar
  const from = location.state?.from || '/calendar';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Find matching user from sample data
    const matchedUser = sampleUsers[formData.email];
    if (matchedUser && matchedUser.password === formData.password) {
      login(matchedUser);
      // Navigate to the page user tried to access
      navigate(from, { replace: true });
    } else {
      setError('Invalid email or password');
    }
  };

  const fillCredentials = (email, password) => {
    setFormData({ email, password });
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex items-center justify-center text-blue-600 mb-8">
          <FiArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Welcome back to CalComm
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Login
              </button>
            </div>
          </form>

          {/* Sample Credentials Section */}
          <div className="mt-8">
            <button
              onClick={() => setShowCredentials(!showCredentials)}
              className="flex items-center text-sm text-blue-600 hover:text-blue-500"
            >
              <FiInfo className="mr-2" />
              {showCredentials ? 'Hide' : 'Show'} sample credentials
            </button>
            
            {showCredentials && (
              <div className="mt-4 space-y-4">
                {Object.values(sampleUsers).map((user, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</h3>
                        <div className="mt-2 text-sm text-gray-600">
                          <div>Email: {user.email}</div>
                          <div>Password: {user.password}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => fillCredentials(user.email, user.password)}
                        className="text-xs text-blue-600 hover:text-blue-500"
                      >
                        Use these credentials
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
