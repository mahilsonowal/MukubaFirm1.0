import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import TimelineIcon from '@mui/icons-material/Timeline';
import DescriptionIcon from '@mui/icons-material/Description';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupsIcon from '@mui/icons-material/Groups';
import StorageIcon from '@mui/icons-material/Storage';
import BarChartIcon from '@mui/icons-material/BarChart';

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
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
  marginBottom: theme.spacing(1.5),
  '& .MuiSvgIcon-root': {
    fontSize: '1.75rem',
    color: '#C9AA74',
  },
}));

const FeatureDot = styled('span')(({ theme }) => ({
  width: 6,
  height: 6,
  backgroundColor: '#C9AA74',
  borderRadius: '50%',
  display: 'inline-block',
  marginRight: theme.spacing(1),
}));

const InstitutionalInsights = () => {
  const services = [
    {
      icon: <TimelineIcon />,
      title: "Economic Research",
      description: "We conduct thorough economic research and analysis to provide data-driven insights for informed decision-making.",
      features: [
        "Market trend analysis",
        "Economic impact assessments",
        "Sector-specific research",
        "Data-driven forecasting"
      ]
    },
    {
      icon: <DescriptionIcon />,
      title: "Policy Analysis",
      description: "Our team provides comprehensive policy analysis to help organizations navigate complex regulatory environments.",
      features: [
        "Regulatory impact assessment",
        "Policy implementation strategies",
        "Compliance frameworks",
        "Risk analysis and mitigation"
      ]
    },
    {
      icon: <LightbulbIcon />,
      title: "Strategic Planning",
      description: "We assist organizations in developing effective strategies aligned with their goals and market conditions.",
      features: [
        "Market entry strategies",
        "Growth optimization plans",
        "Competitive analysis",
        "Performance monitoring"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <GroupsIcon />,
      title: "Stakeholder Engagement",
      description: "Facilitate meaningful dialogue and collaboration between various stakeholders to ensure project success."
    },
    {
      icon: <StorageIcon />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights using advanced analytics and visualization techniques."
    },
    {
      icon: <BarChartIcon />,
      title: "Performance Monitoring",
      description: "Track and evaluate project outcomes against key performance indicators for optimal results."
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
            Institutional Insights
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
            We provide comprehensive economic research and consulting services to help organizations make informed decisions and achieve sustainable growth.
          </Typography>
        </Box>

        {/* Main Services Section */}
        <Grid container display="flex" justifyContent="center" alignItems="center" spacing={3} sx={{ mb: 4 }}>
          {services.map((service, index) => (
            <Grid 
              key={index} 
              sx={{ 
                flexBasis: { xs: '100%', sm: '50%' },
                maxWidth: { xs: '100%', sm: '30%' }
              }}
            >
              <ServiceCard>
                <IconWrapper>
                  {service.icon}
                </IconWrapper>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 600,
                    mb: 1.5,
                    color: '#1B2441',
                    fontSize: { xs: '1.25rem', sm: '1.35rem' }
                  }}
                >
                  {service.title}
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'text.secondary',
                    mb: 2,
                    fontSize: '0.95rem',
                    lineHeight: 1.6
                  }}
                >
                  {service.description}
                </Typography>
                <Box component="ul" sx={{ 
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                  '& > li': { mb: 1 }
                }}>
                  {service.features.map((feature, idx) => (
                    <Box component="li" key={idx} sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      color: 'text.primary',
                      fontSize: '0.9rem'
                    }}>
                      <FeatureDot />
                      {feature}
                    </Box>
                  ))}
                </Box>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>

        {/* Additional Services */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 600,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 4,
              color: '#1B2441',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
            }}
          >
            Additional Services
          </Typography>
          <Grid container display="flex" justifyContent="center" alignItems="center" spacing={3}>
            {additionalServices.map((service, index) => (
              <Grid 
                key={index} 
                sx={{ 
                  flexBasis: { xs: '100%', md: '50%' },
                  maxWidth: { xs: '100%', md: '30%' }
                }}
              >
                <ServiceCard>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <IconWrapper sx={{ mb: 0, mr: 2 }}>
                      {service.icon}
                    </IconWrapper>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        color: '#1B2441',
                        fontSize: '1.25rem'
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '1rem',
                      lineHeight: 1.8
                    }}
                  >
                    {service.description}
                  </Typography>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 600,
              mb: 2,
              color: '#1B2441',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography 
            sx={{ 
              mb: 4,
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1rem',
              lineHeight: 1.8
            }}
          >
            Contact our team of experts today to discuss how we can help you achieve your economic and business objectives.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                bgcolor: '#C9AA74',
                '&:hover': {
                  bgcolor: '#B39563',
                },
                px: 3,
                py: 1.5,
                fontSize: '1rem'
              }}
            >
              Get Started
            </Button>
            <Button
              component={Link}
              to="/services"
              variant="outlined"
              sx={{
                borderColor: '#1B2441',
                color: '#1B2441',
                '&:hover': {
                  bgcolor: '#1B2441',
                  color: 'white',
                  borderColor: '#1B2441',
                },
                px: 3,
                py: 1.5,
                fontSize: '1rem'
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default InstitutionalInsights; 