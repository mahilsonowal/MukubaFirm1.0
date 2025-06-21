import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import SecurityIcon from '@mui/icons-material/Security';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupIcon from '@mui/icons-material/Group';
import NatureIcon from '@mui/icons-material/Nature';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
}));

const ValueCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
  backgroundColor: '#fff',
  border: 'none',
  borderRadius: '8px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
    color: '#C9AA74',
  },
}));

const InstitutionalBackground = () => {
  const coreValues = [
    {
      title: 'Excellence',
      description: 'Striving for the highest standards in research and service delivery',
      icon: <StarIcon />
    },
    {
      title: 'Integrity',
      description: 'Maintaining transparency and ethical standards in all interactions',
      icon: <SecurityIcon />
    },
    {
      title: 'Innovation',
      description: 'Embracing cutting-edge methods and tools for optimal results',
      icon: <LightbulbIcon />
    },
    {
      title: 'Collaboration',
      description: 'Working together to achieve shared goals with clients and partners',
      icon: <GroupIcon />
    },
    {
      title: 'Sustainability',
      description: 'Committed to fostering long-term development and growth',
      icon: <NatureIcon />
    },
    {
      title: 'Impact',
      description: 'Creating meaningful change through our work and initiatives',
      icon: <TrendingUpIcon />
    }
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }}}>
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
            Institutional Background
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#C9AA74',
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
            }}
          >
            Building a Legacy of Economic Excellence in Zambia
          </Typography>
        </Box>

        {/* History Section */}
        <StyledPaper sx={{ mb: 6 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 600,
              mb: 3,
              color: '#1B2441',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
            }}
          >
            Our History
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              lineHeight: 1.8,
              fontSize: { xs: '1rem', md: '1.125rem' }
            }}
          >
            Mukuba Economic Research and Consulting Firm was established in 2024 with a mission to provide evidence-based economic insights and consultancy services. Our institution was built upon the principles of excellence, innovation, and integrity, with a focus on driving sustainable growth across Zambia and beyond.
          </Typography>
        </StyledPaper>

        {/* Mission & Vision Section */}
        <Grid 
          container 
          spacing={4} 
          sx={{ mb: 6 }}
        >
          <Grid 
            column={12}
            sx={{ 
              width: { md: '100%' }
            }}
          >
            <StyledPaper>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 600,
                  mb: 3,
                  color: '#1B2441',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                Our Mission
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.125rem' }
                }}
              >
                The firm is committed to delivering insightful economic analysis and actionable recommendations that support sustainable growth, informed decision making and efficient policy development. Mukuba Economic Research and Consulting Firm seeks to bridge the gap between economic theory and real-world application, helping clients navigate Zambia's dynamic economic environment.
              </Typography>
            </StyledPaper>
          </Grid>
          <Grid 
            column={12}
            sx={{ 
              width: { md: '100%' }
            }}
          >
            <StyledPaper>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 600,
                  mb: 3,
                  color: '#1B2441',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                Our Vision
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.125rem' }
                }}
              >
                To become a leading provider of economic research and consulting services in Zambia and the broader Southern African Region, helping clients achieve long term economic stability and growth through evidence-based analysis and tailored solutions.
              </Typography>
            </StyledPaper>
          </Grid>
        </Grid>

        {/* Core Values Section */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 600,
              mb: 5,
              color: '#1B2441',
              textAlign: 'left',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
            }}
          >
            Our Core Values
          </Typography>
          <Grid 
            container 
            spacing={3}
            sx={{
              display: 'flex',
              alignItems: 'stretch',
            }}
          >
            {coreValues.map((value, index) => (
              <Grid 
                key={index}
                sx={{
                  flexBasis: { xs: '100%', sm: '25%', md: '31.94%' },
                  maxWidth: { xs: '100%', sm: '25%', md: '31.94%' }
                }}
              >
                <ValueCard>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <IconWrapper sx={{ mt: 2 }}>
                      {value.icon}
                    </IconWrapper>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        color: '#1B2441',
                        fontSize: '1.25rem'
                      }}
                    >
                      {value.title}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#666',
                      lineHeight: 1.6,
                      fontSize: '1rem'
                    }}
                  >
                    {value.description}
                  </Typography>
                </ValueCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default InstitutionalBackground; 