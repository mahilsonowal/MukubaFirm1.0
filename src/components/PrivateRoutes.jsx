import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const PrivateRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) return null; // or a loader

  return user ? <Outlet /> : <Navigate to="/login" />;
}; 