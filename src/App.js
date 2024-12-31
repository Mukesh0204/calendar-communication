// App.js
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';

// User Module
import Dashboard from './pages/user/Dashboard';
import CommunicationCalendar from './pages/calendar/CommunicationCalendar';

// Admin Module
import CompanyManagement from './pages/admin/CompanyManagement';
import CommunicationMethodManagement from './pages/admin/CommunicationMethodManagement';

// Analytics Module
import AnalyticsDashboard from './pages/analytics/AnalyticsDashboard';

// Auth Module
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';

function App() {
  // Mock authentication state (replace with your actual auth logic)
  const isAuthenticated = localStorage.getItem('auth-token');
  const isAdmin = localStorage.getItem('user-role') === 'admin';

  // Protected Route Component
  const ProtectedRoute = ({ children, requireAdmin }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    if (requireAdmin && !isAdmin) {
      return <Navigate to="/dashboard" />;
    }

    return children;
  };

  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* User Module Routes */}
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calendar" element={<CommunicationCalendar />} />
          
          {/* Admin Module Routes */}
          <Route
            path="admin/companies"
            element={
              <ProtectedRoute requireAdmin>
                <CompanyManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin/communication-methods"
            element={
              <ProtectedRoute requireAdmin>
                <CommunicationMethodManagement />
              </ProtectedRoute>
            }
          />

          {/* Analytics Module Routes */}
          <Route path="analytics" element={<AnalyticsDashboard />} />

          {/* 404 Route */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
