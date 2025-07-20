import React from 'react';
import { Box, Container, Typography, Paper, Divider } from '@mui/material';

const VisionMission = () => (
  <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white', minHeight: '100vh' }}>
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: { xs: 4, md: 6 }, borderRadius: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: '#1B2441' }}>
          Vision & Mission
        </Typography>
        <Typography variant="h6" sx={{ color: '#C9AA74', mb: 4 }}>
          Discover our purpose and goals
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#1B2441' }}>
          Our Vision
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
        To create a world where young professionals are equipped with the skills, confidence, and networks necessary to thrive in the corporate world and make meaningful contributions to their industries.
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#1B2441' }}>
          Our Mission
        </Typography>
        <Typography variant="body1">
        To empower youth and professionals by providing access to expert knowledge, mentorship, and development resources that accelerate career growth and workplace success. Pathways of Success facilitates learning, networking, and personal branding through high-quality webinars and outreach activities.
        </Typography>
      </Paper>
    </Container>
  </Box>
);

export default VisionMission; 