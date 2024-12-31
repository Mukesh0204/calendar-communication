import React from 'react';
import { Navigate } from 'react-router-dom';
import { checkPermission } from '../../utils/auth';

const ProtectedRoute = ({ children, requiredRole }) => {
  if (!checkPermission(requiredRole)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute; 