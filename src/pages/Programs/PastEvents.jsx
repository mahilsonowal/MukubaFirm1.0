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
            <ListItemText primary="Digital identity management" />
          </ListItem>
        </List>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#1B2441' }}>
          Program Schedule
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          The "Pathways of Success" program occurs twice a year – once in the first half and once in the second half of each year. Additional events or webinars may be organized based on demand or specific organizational needs.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={1} sx={{ p: 2, bgcolor: '#f8f9fa', borderRadius: 2 }}>
              <Typography variant="subtitle1" sx={{ color: '#C9AA74', fontWeight: 600 }}>
                First Half
              </Typography>
              <Typography variant="body2">January - June</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={1} sx={{ p: 2, bgcolor: '#f8f9fa', borderRadius: 2 }}>
              <Typography variant="subtitle1" sx={{ color: '#C9AA74', fontWeight: 600 }}>
                Second Half
              </Typography>
              <Typography variant="body2">July - December</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  </Box>
);

export default PastEvents; 