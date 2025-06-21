import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, IconButton, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StaffCard = styled(Paper)(({ theme }) => ({
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
  height: '100%',
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

const StaffManagement = () => {
  const staffMembers = [
    {
      id: 'thomson-silomba',
      name: 'Thomson Silomba',
      title: 'Program Director - Pathways of Success Program',
      description: 'A leader driven by Christian faith and diversity, founder of Rethinking Economics Zambia, and advocate for economic discussions.',
      image: '/src/assets/staff/thomson-silomba.jpg',
      socials: {
        linkedin: '#',
        twitter: '#',
        email: 'thomson@mukuba.com'
      },
      specialties: [
        'Economic Program Management',
        'Youth Empowerment',
        'Economic Education'
      ]
    }
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 3 }, bgcolor: '#f5f5f5' }}>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 }, py: 4, px: 2, borderRadius: 1 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              mb: 1.5,
              color: '#1B2441',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
            }}
          >
            Our Staff
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#C9AA74',
              fontWeight: 600,
              mb: 0,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Meet the dedicated professionals behind our success
          </Typography>
        </Box>

        {/* Staff Grid */}
        <Grid 
          container 
          display="flex" 
          justifyContent="center" 
          alignItems="stretch" 
          spacing={2}
          sx={{ maxWidth: '1000px', mx: 'auto' }}
        >
          {staffMembers.map((staff) => (
            <Grid 
              key={staff.id}
              sx={{ 
                flexBasis: { xs: '100%', sm: '50%', md: '33.33%' },
                maxWidth: { xs: '100%', sm: '50%', md: '33.33%' },
                display: 'flex'
              }}
            >
              <Link 
                to={`/about/staff/${staff.id}`} 
                style={{ 
                  textDecoration: 'none', 
                  display: 'flex',
                  width: '100%'
                }}
              >
                <StaffCard elevation={2}>
                  <ImageContainer sx={{
                    height: '100%',
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
                      src={staff.image}
                      alt={staff.name}
                    />
                  </ImageContainer>

                  <Box sx={{ 
                    p: 1.5, 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    height: '100%'
                  }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        color: '#1B2441',
                        mb: 0.5,
                        fontSize: '1rem',
                        '&:hover': {
                          color: '#C9AA74',
                        }
                      }}
                    >
                      {staff.name}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: '#C9AA74',
                        fontWeight: 600,
                        mb: 1,
                        fontSize: '0.75rem'
                      }}
                    >
                      {staff.title}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: 'text.secondary',
                        mb: 1,
                        fontSize: '0.75rem',
                        lineHeight: 1.4,
                        flexGrow: 1,
                        minHeight: '40px'
                      }}
                    >
                      {staff.description}
                    </Typography>

                    {/* Specialties */}
                    <Box sx={{ mb: 1.5, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {staff.specialties.map((specialty, index) => (
                        <Chip
                          key={index}
                          label={specialty}
                          size="small"
                          sx={{
                            backgroundColor: '#f5f5f5',
                            color: '#1B2441',
                            fontSize: '0.7rem',
                            height: '20px'
                          }}
                        />
                      ))}
                    </Box>

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
                            window.open(staff.socials.linkedin, '_blank');
                          }}
                          sx={{ 
                            color: 'text.secondary',
                            '&:hover': { color: '#C9AA74' },
                            padding: '2px'
                          }}
                        >
                          <LinkedInIcon sx={{ fontSize: '0.9rem' }} />
                        </IconButton>
                        <IconButton 
                          size="small"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(staff.socials.twitter, '_blank');
                          }}
                          sx={{ 
                            color: 'text.secondary',
                            '&:hover': { color: '#C9AA74' },
                            padding: '2px'
                          }}
                        >
                          <TwitterIcon sx={{ fontSize: '0.9rem' }} />
                        </IconButton>
                        <IconButton 
                          size="small"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.location.href = `mailto:${staff.socials.email}`;
                          }}
                          sx={{ 
                            color: 'text.secondary',
                            '&:hover': { color: '#C9AA74' },
                            padding: '2px'
                          }}
                        >
                          <EmailIcon sx={{ fontSize: '0.9rem' }} />
                        </IconButton>
                      </Box>
                      <Typography 
                        sx={{ 
                          color: '#C9AA74',
                          fontSize: '0.7rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5
                        }}
                      >
                        View Profile <ArrowForwardIcon sx={{ fontSize: '0.8rem' }} />
                      </Typography>
                    </Box>
                  </Box>
                </StaffCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StaffManagement; 