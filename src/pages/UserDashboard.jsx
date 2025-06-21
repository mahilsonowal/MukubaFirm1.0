import React from 'react';
import { Box, Container, Typography, Paper, Button, Stack } from '@mui/material';
import { useAuth } from '../context/AuthContext.jsx';

const UserDashboard = () => {
  const { user, logoutUser } = useAuth();

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 2 }}>
            Welcome, {user?.name || user?.email || 'User'}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            This is your dashboard. Here you can view your profile, recent activity, and access quick links.
          </Typography>
          <Stack spacing={2}>
            <Paper sx={{ p: 2, bgcolor: '#fafafa' }}>
              <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                Account Information
              </Typography>
              <Typography variant="body2">Name: {user?.name || '-'}</Typography>
              <Typography variant="body2">Email: {user?.email || '-'}</Typography>
              {/* Add more user info here as needed */}
            </Paper>
            <Paper sx={{ p: 2, bgcolor: '#fafafa' }}>
              <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                Recent Activity
              </Typography>
              <Typography variant="body2">No recent activity yet.</Typography>
              {/* Add recent activity or notifications here */}
            </Paper>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="outlined" color="secondary" onClick={logoutUser}>
                Logout
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default UserDashboard; 