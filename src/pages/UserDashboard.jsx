import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../utils/supabaseClient';
import { Box, Typography, CircularProgress, Paper, Avatar, Stack, Divider, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserDashboard = () => {
  const { user, loading } = useAuth();
  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
    if (user) {
      const fetchProfile = async () => {
        setProfileLoading(true);
        setError('');
        const { data, error } = await supabase
          .from('profiles')
          .select('name, email, role')
          .eq('id', user.id)
          .single();
        if (error) {
          setError('Failed to load profile.');
        } else {
          if (data.role === 'admin') {
            navigate('/admin-dashboard');
            return;
          }
          setProfile(data);
        }
        setProfileLoading(false);
      };
      fetchProfile();
    }
  }, [user, loading, navigate]);

  if (loading || profileLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box maxWidth={500} mx="auto" mt={10}>
      <Paper elevation={4} sx={{ p: 5, borderRadius: 3, bgcolor: 'background.paper', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
        <Stack direction="column" alignItems="center" spacing={2}>
          <Avatar sx={{ width: 80, height: 80, bgcolor: '#C9AA74' }}>
            <AccountCircleIcon sx={{ fontSize: 60, color: 'white' }} />
          </Avatar>
          <Typography variant="h5" fontWeight={700} color="text.primary" gutterBottom>
            {profile?.name || 'User'}
          </Typography>
          <Divider flexItem sx={{ my: 1, width: '100%' }} />
          <Box width="100%">
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Email
            </Typography>
            <Typography variant="body1" color="text.primary" gutterBottom sx={{ mb: 2 }}>
              {profile?.email}
            </Typography>
          </Box>
          <Divider flexItem sx={{ my: 2, width: '100%' }} />
          <Button
            variant="contained"
            color="primary"
            sx={{ bgcolor: '#C9AA74', color: 'white', fontWeight: 600, px: 4, py: 1, borderRadius: 2, '&:hover': { bgcolor: '#AF9871' } }}
            onClick={async () => { await supabase.auth.signOut(); navigate('/login'); }}
          >
            Logout
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default UserDashboard; 