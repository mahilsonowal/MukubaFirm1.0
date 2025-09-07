import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import { 
  Box, 
  Typography, 
  Button, 
  Paper, 
  Grid, 
  Card, 
  CardContent, 
  Alert,
  Chip,
  Divider
} from '@mui/material';
import { 
  Security, 
  Person, 
  Email, 
  CalendarToday,
  Settings,
  QrCode2
} from '@mui/icons-material';

const UserDashboard = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserProfile();
    }
  }, [user]);

  const fetchUserProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logoutUser();
    navigate('/');
  };

  const handle2FASetup = () => {
    navigate('/totp-setup');
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4, px: 2, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h3" sx={{ fontWeight: 700, color: '#AF9871', mb: 4, textAlign: 'center' }}>
        Welcome to Your Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* User Info Card */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Person sx={{ fontSize: 32, color: '#AF9871', mr: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Account Information
              </Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="textSecondary">
                Name
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {profile?.name || 'Not set'}
              </Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="textSecondary">
                Email
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {user?.email}
              </Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="textSecondary">
                Role
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500, textTransform: 'capitalize' }}>
                {profile?.role || 'user'}
              </Typography>
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="textSecondary">
                Member Since
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'Unknown'}
              </Typography>
            </Box>

            <Button
              variant="outlined"
              onClick={handleLogout}
              sx={{ borderColor: '#AF9871', color: '#AF9871' }}
            >
              Logout
            </Button>
          </Paper>
        </Grid>

        {/* Security Card */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Security sx={{ fontSize: 32, color: '#AF9871', mr: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Security Settings
              </Typography>
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                Two-Factor Authentication
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Chip 
                  label={profile?.totp_enabled ? 'Enabled' : 'Disabled'} 
                  color={profile?.totp_enabled ? 'success' : 'default'}
                  size="small"
                />
                {profile?.totp_enabled && (
                  <Chip 
                    label="Secure" 
                    color="success" 
                    variant="outlined"
                    size="small"
                  />
                )}
              </Box>
              
              {profile?.totp_enabled ? (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Your account is protected with 2FA. You can use TOTP password reset if needed.
                </Alert>
              ) : (
                <Alert severity="warning" sx={{ mb: 2 }}>
                  Enable 2FA to secure your account and use TOTP password reset.
                </Alert>
              )}
            </Box>

            <Button
              variant="contained"
              startIcon={profile?.totp_enabled ? <Settings /> : <QrCode2 />}
              onClick={handle2FASetup}
              sx={{ 
                backgroundColor: profile?.totp_enabled ? '#AF9871' : '#1976d2',
                '&:hover': { 
                  backgroundColor: profile?.totp_enabled ? '#977F59' : '#1565c0' 
                }
              }}
            >
              {profile?.totp_enabled ? 'Manage 2FA' : 'Set Up 2FA'}
            </Button>
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Quick Actions
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => navigate('/reset-password')}
                  sx={{ borderColor: '#AF9871', color: '#AF9871' }}
                >
                  Change Password
                </Button>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => navigate('/totp-reset')}
                  disabled={!profile?.totp_enabled}
                  sx={{ borderColor: '#AF9871', color: '#AF9871' }}
                >
                  Reset Password (2FA)
                </Button>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => navigate('/')}
                  sx={{ borderColor: '#AF9871', color: '#AF9871' }}
                >
                  Go to Home
                </Button>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => navigate('/login')}
                  sx={{ borderColor: '#AF9871', color: '#AF9871' }}
                >
                  Account Settings
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboard; 