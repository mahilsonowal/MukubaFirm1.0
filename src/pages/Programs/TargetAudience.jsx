import React from 'react';
import { Box, Container, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const TargetAudience = () => (
  <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white', minHeight: '100vh' }}>
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: { xs: 4, md: 6 }, borderRadius: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: '#1B2441' }}>
          Target Audience
        </Typography>
        <Typography variant="h6" sx={{ color: '#C9AA74', mb: 4 }}>
          Who can benefit from our program?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          The Pathways of Success program is designed to empower and support a diverse range of participants, including:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon><PersonIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
            <ListItemText primary="Youth and Young Adults" />
          </ListItem>
          <ListItem>
            <ListItemIcon><PersonIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
            <ListItemText primary="University and College Students" />
          </ListItem>
          <ListItem>
            <ListItemIcon><PersonIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
            <ListItemText primary="Community Leaders" />
          </ListItem>
          <ListItem>
            <ListItemIcon><PersonIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
            <ListItemText primary="Non-Governmental Organizations (NGOs)" />
          </ListItem>
          <ListItem>
            <ListItemIcon><PersonIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
            <ListItemText primary="Aspiring Entrepreneurs" />
          </ListItem>
          <ListItem>
            <ListItemIcon><PersonIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
            <ListItemText primary="Educators and Mentors" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  </Box>
);

export default TargetAudience; 