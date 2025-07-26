import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';

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

const BoardCard = styled(Paper)(({ theme }) => ({
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
      name: 'Mr. Clement Malala',
      title: 'Chief Executive Officer (CEO)',
      description: 'Oversees strategic vision, partnerships, operations, and represents the firm on the Board.',
      image: '/assets/team/malala.jpg',
      socials: {
        linkedin: '#',
        email: 'clement@mukuba.com'
      }
    },
    {
      id: 'coo',
      name: 'Chief Research Officer (CRO)',
      title: 'COO',
      description: 'Manages daily operations, staff coordination, and process efficiency.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPgo=',
      socials: {
        linkedin: '#',
        email: 'coo@mukuba.com'
      },
      placeholder: true
    },
    {
      id: 'cfo',
      name: 'Chief Financial Officer (CFO)',
      title: 'CFO',
      description: 'Leads financial planning, resource allocation, reporting, and compliance.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPgo=',
      socials: {
        linkedin: '#',
        email: 'cfo@mukuba.com'
      },
      placeholder: true
    },
    {
      id: 'blessings-ntesa',
      name: 'Mr. Ntesa Blessings',
      title: 'Chief Operation Officer (COO)',
      description: 'Heads research initiatives, methodologies, quality control, and publications.',
      image: '/assets/team/blessings.jpg',
      socials: {
        linkedin: '#',
        email: 'blessings@mukuba.com'
      }
    },
    {
      id: 'cmbdo',
      name: 'Chief Marketing & Business Development Officer (CMBDO)',
      title: 'CMBDO',
      description: 'Develops client relationships, branding strategy, and growth channels.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPgo=',
      socials: {
        linkedin: '#',
        email: 'cmbdo@mukuba.com'
      },
      placeholder: true
    }
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, py: 6, px: 2, borderRadius: 1 }}>
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
            Team Management
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
            Meet our leadership team and board members driving excellence in economic consulting.
          </Typography>
        </Box>

        {/* Executive Leadership Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <BusinessIcon sx={{ color: '#C9AA74', mr: 1, fontSize: '2rem' }} />
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  color: '#1B2441',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                Executive Leadership
              </Typography>
            </Box>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Our executive team leads strategic initiatives and drives organizational excellence.
            </Typography>
          </Box>

          <Grid 
            container 
            spacing={3}
            sx={{ maxWidth: '1200px', mx: 'auto' }}
          >
            {executives.map((executive) => (
              <Grid 
                key={executive.id}
                item
                xs={12}
                sm={6}
                md={4}
                sx={{ display: 'flex' }}
              >
                <ExecutiveCard elevation={2} sx={{ 
                  width: '100%', 
                  maxWidth: '350px',
                  minWidth: '300px',
                  display: 'flex', 
                  flexDirection: 'column',
                  mx: 'auto'
                }}>
                  <ImageContainer sx={{
                    height: '280px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    '& img': {
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transition: 'transform 0.5s ease',
                    },
                  }}>
                    <img
                      src={executive.image}
                      alt={executive.name}
                    />
                  </ImageContainer>

                  <Box sx={{ 
                    p: 3, 
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
                        fontSize: '1rem',
                        lineHeight: 1.3
                      }}
                    >
                      {executive.name}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: '#C9AA74',
                        fontWeight: 600,
                        mb: 1.5,
                        fontSize: '0.9rem'
                      }}
                    >
                      {executive.title}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: 'text.secondary',
                        mb: 2,
                        fontSize: '0.85rem',
                        lineHeight: 1.5,
                        flexGrow: 1
                      }}
                    >
                      {executive.description}
                    </Typography>

                    {!executive.placeholder && (
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
                        {executive.id === 'clement-malala' || executive.id === 'blessings-ntesa' ? (
                          <Link 
                            to={`/about/team/${executive.id}`} 
                            style={{ textDecoration: 'none' }}
                          >
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
                          </Link>
                        ) : null}
                      </Box>
                    )}
                  </Box>
                </ExecutiveCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TeamManagement; 