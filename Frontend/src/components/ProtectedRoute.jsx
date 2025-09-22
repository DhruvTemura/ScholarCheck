import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if user is authenticated
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  // If no token or user data, redirect to login
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // Optional: Add token expiration check
  try {
    // You can add JWT token validation here
    // For now, just check if token exists
    if (token && user) {
      return children;
    }
  } catch (error) {
    // If token is invalid, clear storage and redirect
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return <Navigate to="/login" replace />;
  }

  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;