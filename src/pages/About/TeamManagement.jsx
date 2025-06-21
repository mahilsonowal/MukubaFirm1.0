import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ExecutiveCard = styled(Paper)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '200px',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::after': {
    opacity: 1,
  },
}));

const TeamManagement = () => {
  const executives = [
    {
      id: 'clement-malala',
      name: 'Clement Malala',
      title: 'Director/Chief Executive Officer (CEO)',
      description: 'Leading strategic initiatives and overseeing company operations with over 2 years of experience in economic consulting.',
      image: '/src/assets/team/malala.jpg',
      socials: {
        linkedin: '#',
        email: 'clement@mukuba.com'
      }
    },
    {
      id: 'brad-elledge',
      name: 'Brad Elledge',
      title: 'Chief Business Development Officer',
      description: 'Driving business growth and fostering key partnerships with expertise in operational improvements and growth strategies.',
      image: '/src/assets/team/brad.jpg',
      socials: {
        linkedin: '#',
        email: 'brad@mukuba.com'
      }
    },
    {
      id: 'blessings-ntesa',
      name: 'Blessings Ntesa',
      title: 'Managing Director',
      description: 'Economics professional specializing in risk management, investment analysis, and social economic sustainability with expertise in resource optimization and strategic planning.',
      image: '/src/assets/team/blessings.jpg',
      socials: {
        linkedin: '#',
        email: 'blessings@mukuba.com'
      }
    }
  ];

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
            Executive Management Team
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
            Meet our experienced leadership team driving innovation and excellence in economic consulting.
          </Typography>
        </Box>

        {/* Team Grid */}
        <Grid 
          container 
          display="flex" 
          justifyContent="center" 
          alignItems="stretch" 
          spacing={2}
          sx={{ maxWidth: '1000px', mx: 'auto' }}
        >
          {executives.map((executive) => (
            <Grid 
              key={executive.id}
              sx={{ 
                flexBasis: { xs: '100%', sm: '33.33%' },
                maxWidth: { xs: '100%', sm: '33.33%' },
                display: 'flex',
                height: 'auto'
              }}
            >
              <Link 
                to={`/about/team/${executive.id}`} 
                style={{ 
                  textDecoration: 'none', 
                  display: 'flex',
                  width: '100%'
                }}
              >
                <ExecutiveCard elevation={2}>
                  <ImageContainer sx={{
                    height: '300px',
                    overflow: 'hidden',
                    '& img': {
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      transition: 'transform 0.5s ease',
                    },
                  }}>
                    <img
                      src={executive.image}
                      alt={executive.name}
                      style={{
                        objectPosition: executive.id === 'clement-malala' ? 'top' : 'center'
                      }}
                    />
                  </ImageContainer>

                  <Box sx={{ 
                    p: 2, 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    minHeight: '200px'
                  }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        color: '#1B2441',
                        mb: 0.5,
                        fontSize: '1.1rem',
                        '&:hover': {
                          color: '#C9AA74',
                        }
                      }}
                    >
                      {executive.name}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: '#C9AA74',
                        fontWeight: 600,
                        mb: 1,
                        fontSize: '0.85rem'
                      }}
                    >
                      {executive.title}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: 'text.secondary',
                        mb: 1.5,
                        fontSize: '0.85rem',
                        lineHeight: 1.5,
                        flexGrow: 1
                      }}
                    >
                      {executive.description}
                    </Typography>

                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      mt: 'auto'
                    }}>
                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        <IconButton 
                          size="small"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(executive.socials.linkedin, '_blank');
                          }}
                          sx={{ 
                            color: 'text.secondary',
                            '&:hover': { color: '#C9AA74' },
                            padding: '4px'
                          }}
                        >
                          <LinkedInIcon sx={{ fontSize: '1rem' }} />
                        </IconButton>
                        <IconButton 
                          size="small"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.location.href = `mailto:${executive.socials.email}`;
                          }}
                          sx={{ 
                            color: 'text.secondary',
                            '&:hover': { color: '#C9AA74' },
                            padding: '4px'
                          }}
                        >
                          <EmailIcon sx={{ fontSize: '1rem' }} />
                        </IconButton>
                      </Box>
                      <Typography 
                        sx={{ 
                          color: '#C9AA74',
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5
                        }}
                      >
                        View Profile <ArrowForwardIcon sx={{ fontSize: '0.9rem' }} />
                      </Typography>
                    </Box>
                  </Box>
                </ExecutiveCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamManagement; 