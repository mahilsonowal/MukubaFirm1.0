import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BusinessIcon from '@mui/icons-material/Business';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PublicIcon from '@mui/icons-material/Public';
import BalanceIcon from '@mui/icons-material/Balance';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledPaper = styled(Paper)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const services = [
  {
    icon: <TrendingUpIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Economic Advisory",
    description: "Strategic economic advice and analysis for businesses, governments, and organizations."
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Investment Consulting",
    description: "Expert guidance on investment opportunities, market entry strategies, and risk assessment."
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Policy Consulting",
    description: "Professional advice on policy formulation, implementation, and impact assessment."
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Strategic Planning",
    description: "Development of strategic plans aligned with economic trends and market opportunities."
  },
  {
    icon: <PublicIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Market Intelligence",
    description: "Comprehensive market insights and analysis for informed decision-making."
  },
  {
    icon: <BalanceIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Regulatory Advisory",
    description: "Guidance on regulatory compliance and policy frameworks in various sectors."
  }
];

const expertise = [
  {
    title: "Economic Sectors",
    areas: [
      "Mining & Natural Resources",
      "Agriculture & Agribusiness",
      "Financial Services",
      "Infrastructure Development"
    ]
  },
  {
    title: "Policy Areas",
    areas: [
      "Trade & Investment",
      "Fiscal Policy",
      "Industrial Policy",
      "Development Policy"
    ]
  },
  {
    title: "Business Advisory",
    areas: [
      "Market Entry Strategy",
      "Business Development",
      "Risk Management",
      "Growth Strategy"
    ]
  },
  {
    title: "Research & Analysis",
    areas: [
      "Economic Research",
      "Market Analysis",
      "Impact Assessment",
      "Performance Evaluation"
    ]
  }
];

const ConsultancyServices = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 5 }, bgcolor: '#f5f5f5' }}>
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#1B2441', py: { xs: 8, md: 10 }, color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
              <Link to="/pages/services" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
                Services
              </Link>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>/</Typography>
              <Typography>Consultancy Services</Typography>
            </Box>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              Consultancy Services
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 400,
                maxWidth: '800px'
              }}
            >
              Expert consultancy services in economic policy, business strategy, and market analysis to drive sustainable growth and development.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Services Section */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 4, md: 6 },
            mb: 6,
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#1B2441',
              fontWeight: 600,
              mb: 2
            }}
          >
            Our Consultancy Services
          </Typography>
          <Typography 
            sx={{ 
              color: 'text.secondary',
              mb: 4,
              maxWidth: '800px'
            }}
          >
            We provide comprehensive consultancy services tailored to meet the specific needs of our clients across various sectors and domains.
          </Typography>
          <Grid 
            container 
            display="flex" 
            justifyContent="center" 
            alignItems="stretch" 
            spacing={3}
          >
            {services.map((service, index) => (
              <Grid 
                key={index}
                sx={{ 
                  flexBasis: { xs: '100%', sm: '50%', md: '33.33%' },
                  maxWidth: { xs: '100%', sm: '50%', md: '33.33%' }
                }}
              >
                <StyledPaper elevation={2}>
                  <Box sx={{ mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#1B2441',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '0.875rem'
                    }}
                  >
                    {service.description}
                  </Typography>
                </StyledPaper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Areas of Expertise Section */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 4, md: 6 },
            mb: 6,
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#1B2441',
              fontWeight: 600,
              mb: 2
            }}
          >
            Areas of Expertise
          </Typography>
          <Typography 
            sx={{ 
              color: 'text.secondary',
              mb: 4,
              maxWidth: '800px'
            }}
          >
            Our team brings extensive experience and expertise across various economic sectors and policy areas.
          </Typography>
          <Grid 
            container 
            display="flex" 
            justifyContent="center" 
            alignItems="stretch" 
            spacing={3}
          >
            {expertise.map((area, index) => (
              <Grid 
                key={index}
                sx={{ 
                  flexBasis: { xs: '100%', sm: '50%', md: '25%' },
                  maxWidth: { xs: '100%', sm: '50%', md: '25%' }
                }}
              >
                <StyledPaper elevation={2}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#1B2441',
                      fontWeight: 600,
                      mb: 2
                    }}
                  >
                    {area.title}
                  </Typography>
                  <List dense>
                    {area.areas.map((item, itemIndex) => (
                      <ListItem key={itemIndex} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <Box 
                            sx={{ 
                              width: 8, 
                              height: 8, 
                              borderRadius: '50%', 
                              bgcolor: '#C9AA74' 
                            }} 
                          />
                        </ListItemIcon>
                        <ListItemText 
                          primary={item}
                          sx={{ 
                            '& .MuiListItemText-primary': {
                              fontSize: '0.875rem',
                              color: 'text.secondary'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </StyledPaper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* CTA Section */}
        <Box 
          sx={{ 
            bgcolor: '#1B2441',
            borderRadius: 2,
            p: { xs: 4, md: 6 },
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 600,
              mb: 2
            }}
          >
            Need Expert Consultation?
          </Typography>
          <Typography 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Let our experienced consultants help you navigate complex economic challenges and opportunities.
          </Typography>
          <Button
            component={Link}
            to="/pages/contact"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: 'white',
              color: '#1B2441',
              px: 4,
              py: 1.5,
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              }
            }}
          >
            Request Consultation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ConsultancyServices; 