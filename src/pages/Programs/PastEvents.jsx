import React from 'react';
import { Box, Container, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PastEvents = () => (
  <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white', minHeight: '100vh' }}>
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: { xs: 4, md: 6 }, borderRadius: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: '#1B2441' }}>
          Past Events & Webinars
        </Typography>
        <Typography variant="h6" sx={{ color: '#C9AA74', mb: 4 }}>
          Highlights from Our Previous Programs and Sessions
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1B2441' }}>
          Personal Branding Webinar
        </Typography>
        <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Grid item>
            <EventIcon sx={{ color: '#C9AA74', fontSize: 32 }} />
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              24th September 2024
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: '#1B2441' }}>
          Featured Speakers
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon><PersonIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
            <ListItemText primary="Mr. Brad Elledge" secondary="United States of America" />
          </ListItem>
          <ListItem>
            <ListItemIcon><PersonIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
            <ListItemText primary="Ms. Blessings Liato" secondary="South Africa" />
          </ListItem>
        </List>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 3, mb: 1, color: '#1B2441' }}>
          Key Topics Covered
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon><CheckCircleIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
            <ListItemText primary="Building a personal brand" />
          </ListItem>
          <ListItem>
            <ListItemIcon><CheckCircleIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
            <ListItemText primary="Enhancing online presence" />
          </ListItem>
          <ListItem>
            <ListItemIcon><CheckCircleIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
            <ListItemText primary="Leveraging social media" />
          </ListItem>
          <ListItem>
            <ListItemIcon><CheckCircleIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
            <ListItemText primary="Balancing personal and professional identity online" />
          </ListItem>
        </List>
        <Typography variant="body1" sx={{ fontWeight: 500, color: '#1B2441', mb: 2 }}>
          Attendance: 80 registered and 46 attended the webinar.
        </Typography>
        <Divider sx={{ my: 4 }} />
      </Paper>
    </Container>
  </Box>
);

export default PastEvents; 