import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';

const Sponsors = () => (
  <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white', minHeight: '100vh' }}>
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: { xs: 4, md: 6 }, borderRadius: 3, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: '#1B2441' }}>
          Our Sponsors
        </Typography>
        <Typography variant="h6" sx={{ color: '#C9AA74', mb: 4 }}>
          Meet the organizations supporting our mission
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We are grateful for the support and partnership of our sponsors. Currently, our program is proudly sponsored by:
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <img
              src="/assets/company-logo.jpg"
              alt="Mukuba Economic Research and Consulting Firm"
              style={{ width: 120, height: 120, objectFit: 'contain', marginBottom: 16 }}
            />
            <Typography variant="h6" sx={{ color: '#1B2441', fontWeight: 600 }}>
              Mukuba Economic Research and Consulting Firm
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  </Box>
);

export default Sponsors; 