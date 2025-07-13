import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../utils/supabaseClient';

const AdminPrivateRoute = () => {
  const { user, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();
        setIsAdmin(data?.role === 'admin');
      } else {
        setIsAdmin(false);
      }
    };
    if (!loading) checkAdmin();
  }, [user, loading]);

  if (loading || isAdmin === null) return null; // or a loader

  return isAdmin ? <Outlet /> : <Navigate to="/admin-login" />;
};

export default AdminPrivateRoute; 