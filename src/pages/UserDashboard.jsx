import React from 'react';
import { Box, Container, Typography, Paper, Button, Stack, Avatar, Grid, Divider } from '@mui/material';
import { useAuth } from '../context/AuthContext.jsx';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const getInitials = (name = '') => {
  if (!name) return '';
  const parts = name.split(' ');
  if (parts.length === 1) return parts[0][0];
  return parts[0][0] + parts[parts.length - 1][0];
};

const UserDashboard = () => {
  const { user, logoutUser } = useAuth();

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          {/* Welcome Card */}
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3, display: 'flex', alignItems: 'center', gap: 3, bgcolor: 'white' }}>
            <Avatar
              sx={{ width: 72, height: 72, bgcolor: '#C9AA74', fontSize: 32, fontWeight: 700 }}
              src={user?.avatarUrl || ''}
            >
              {user?.name ? getInitials(user.name) : user?.email ? user.email[0].toUpperCase() : <PersonIcon fontSize="large" />}
            </Avatar>
            <Box>
              <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>
                Welcome, {user?.name || user?.email || 'User'}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                This is your personalized dashboard. Here you can view your profile, recent activity, and access quick links.
              </Typography>
            </Box>
          </Paper>

          <Grid container spacing={3}>
            {/* Account Info */}
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
                <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 600, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PersonIcon sx={{ color: 'secondary.main' }} /> Account Information
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Stack spacing={1}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PersonIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Typography variant="body2">Name: <b>{user?.name || '-'}</b></Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EmailIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Typography variant="body2">Email: <b>{user?.email || '-'}</b></Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>

            {/* Recent Activity */}
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
                <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 600, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AssignmentIcon sx={{ color: 'secondary.main' }} /> Recent Activity
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2" color="text.secondary">
                  No recent activity yet.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Quick Links and Logout */}
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'stretch', sm: 'center' }, justifyContent: 'space-between', gap: 2, bgcolor: '#fafafa' }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<AssignmentIcon />}
                sx={{ fontWeight: 600, px: 3 }}
                href="/reports/annual-reports"
              >
                Annual Reports
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<AssignmentIcon />}
                sx={{ fontWeight: 600, px: 3 }}
                href="/reports/strategic-plans"
              >
                Strategic Plans
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<AssignmentIcon />}
                sx={{ fontWeight: 600, px: 3 }}
                href="/research/research-work"
              >
                Research Work
              </Button>
            </Stack>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<LogoutIcon />}
              sx={{ fontWeight: 600, px: 3, ml: { sm: 2 } }}
              onClick={logoutUser}
            >
              Logout
            </Button>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default UserDashboard; 