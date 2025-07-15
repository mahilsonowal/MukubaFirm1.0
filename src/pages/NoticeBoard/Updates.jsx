import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CampaignIcon from '@mui/icons-material/Campaign';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Newsletter from '../../components/ContactSection/Newsletter';

const UpdateCard = styled(Paper)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  borderLeft: '4px solid #1B2441',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
  },
}));

const updates = [
  {
    id: 'update-1',
    title: 'New Economic Policy Brief Released',
    category: 'Publication',
    description: 'We have just released our latest policy brief on "Digital Financial Services and Financial Inclusion in Zambia". Access it now in our Research section.',
    date: 'March 15, 2024',
    priority: 'High',
    link: '/research/miscellaneous-research'
  },
  {
    id: 'update-2',
    title: 'Upcoming Economic Forum',
    category: 'Event',
    description: "Join us for our quarterly Economic Forum discussing \"Investment Opportunities in Zambia's Green Economy\". Registration is now open.",
    date: 'March 25, 2024',
    priority: 'Medium',
    link: '/events'
  },
  {
    id: 'update-3',
    title: 'Parliamentary Submission on Mining Sector',
    category: 'Advocacy',
    description: 'View our recent submission to the Parliamentary Committee on Mines regarding the proposed amendments to mining regulations.',
    date: 'March 10, 2024',
    priority: 'High',
    link: '/research/parliamentary-submissions'
  },
  {
    id: 'update-4',
    title: 'New Partnership Announcement',
    category: 'News',
    description: 'We are excited to announce our new partnership with the World Bank for collaborative research on regional economic integration.',
    date: 'March 5, 2024',
    priority: 'Medium',
    link: '/about/partnerships'
  }
];

const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case 'high':
      return { bgcolor: 'error.light', color: 'error.dark' };
    case 'medium':
      return { bgcolor: 'warning.light', color: 'warning.dark' };
    default:
      return { bgcolor: 'success.light', color: 'success.dark' };
  }
};

const Updates = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 5 }, bgcolor: '#f5f5f5' }}>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, py: 6, px: 2, borderRadius: 1 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              mb: 2,
              color: '#1B2441',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }
            }}
          >
            Latest Updates
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#C9AA74',
              fontWeight: 600,
              mb: 0,
              fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Stay informed about our latest activities, publications, events, and important announcements.
          </Typography>
        </Box>

        {/* Updates Grid */}
        <Grid 
          container 
          display="flex" 
          justifyContent="center" 
          alignItems="stretch" 
          spacing={2}
          sx={{ maxWidth: '1200px', mx: 'auto' }}
        >
          {updates.map((update) => (
            <Grid 
              key={update.id}
              sx={{ 
                flexBasis: { xs: '100%', sm: '50%', md: '33.33%' },
                maxWidth: { xs: '100%', sm: '50%', md: '33.33%' },
                display: 'flex',
                height: 'auto'
              }}
            >
              <UpdateCard elevation={2}>
                <Box sx={{ 
                  p: 3, 
                  flexGrow: 1, 
                  display: 'flex', 
                  flexDirection: 'column',
                  minHeight: '200px'
                }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 600,
                            color: '#1B2441',
                            fontSize: '1.1rem',
                            '&:hover': {
                              color: '#C9AA74',
                            }
                          }}
                        >
                          {update.title}
                        </Typography>
                        <Chip 
                          label={`${update.priority} Priority`}
                          size="small"
                          sx={{ 
                            ...getPriorityColor(update.priority),
                            fontSize: '0.75rem'
                          }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'text.secondary', fontSize: '0.875rem' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CalendarTodayIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                          {update.date}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <LocalOfferIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                          {update.category}
                        </Box>
                      </Box>
                    </Box>
                    <CampaignIcon sx={{ color: '#C9AA74', fontSize: '1.5rem' }} />
                  </Box>

                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      mb: 2,
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      flexGrow: 1
                    }}
                  >
                    {update.description}
                  </Typography>

                  <Box 
                    sx={{ 
                      display: 'flex',
                      justifyContent: 'flex-end',
                      mt: 'auto'
                    }}
                  >
                    <Button
                      component={Link}
                      to={update.link}
                      endIcon={<ArrowForwardIcon />}
                      sx={{ 
                        color: '#C9AA74',
                        fontSize: '0.875rem',
                        '&:hover': { 
                          color: '#AF9871',
                          bgcolor: 'transparent'
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </UpdateCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Subscribe Section */}
      <Box sx={{ mt: 10 }}>
        <Newsletter />
      </Box>
    </Box>
  );
};

export default Updates; 