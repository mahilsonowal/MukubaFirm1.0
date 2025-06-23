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
          To become a leading provider of economic research and consulting services in Zambia and the broader Southern African Region, helping clients achieve long-term economic stability and growth through evidence-based analysis and tailored solutions.
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#1B2441' }}>
          Our Mission
        </Typography>
        <Typography variant="body1">
          The firm is committed to delivering insightful economic analysis and actionable recommendations that support sustainable growth, informed decision making, and efficient policy development. Mukuba Economic Research and Consulting Firm seeks to bridge the gap between economic theory and real-world application, helping clients navigate Zambia's dynamic economic environment.
        </Typography>
      </Paper>
    </Container>
  </Box>
);

export default VisionMission; 