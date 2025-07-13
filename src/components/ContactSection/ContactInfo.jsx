import React from 'react';
import { Box, Typography, Grid, Paper, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <LocationOnIcon sx={{ color: '#C9AA74', fontSize: '2rem' }} />,
      title: 'Our Location',
      content: '123 Economic Avenue, Lusaka, Zambia',
      link: 'https://maps.google.com'
    },
    {
      icon: <PhoneIcon sx={{ color: '#C9AA74', fontSize: '2rem' }} />,
      title: 'Phone Number',
      content: '+260 768 112 551',
      link: 'tel:+260768112551'
    },
    {
      icon: <EmailIcon sx={{ color: '#C9AA74', fontSize: '2rem' }} />,
      title: 'Email Address',
      content: 'info@mukuba.com',
      link: 'mailto:info@mukuba.com'
    },
    {
      icon: <AccessTimeIcon sx={{ color: '#C9AA74', fontSize: '2rem' }} />,
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 4:00 PM',
      link: null
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 3, 
          fontWeight: 600,
          color: '#1B2441'
        }}
      >
        Contact Information
      </Typography>
      <Grid container spacing={3}>
        {contactDetails.map((detail, index) => (
          <Grid key={index} sx={{ width: '100%' }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#C9AA74',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {detail.icon}
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: '#1B2441',
                      mb: 0.5
                    }}
                  >
                    {detail.title}
                  </Typography>
                  {detail.link ? (
                    <Link
                      href={detail.link}
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': {
                          color: '#C9AA74'
                        }
                      }}
                    >
                      {detail.content}
                    </Link>
                  ) : (
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      {detail.content}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactInfo; 
