import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchIcon from '@mui/icons-material/Search';
import StorageIcon from '@mui/icons-material/Storage';
import SchoolIcon from '@mui/icons-material/School';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledPaper = styled(Paper)(({ theme }) => ({
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const mainServices = [
  {
    id: 'economic-research',
    icon: <TrendingUpIcon sx={{ fontSize: { xs: 36, md: 48 }, color: '#1B2441' }} />,
    title: "Economic Research",
    description: "In-depth economic analysis and research to inform decision-making and policy development.",
    features: [
      "Macroeconomic Analysis",
      "Trade & Investment Research",
      "Policy Research",
      "Sectoral Analysis"
    ],
    link: "/services/economic-research",
    color: "#E3F2FD",
    image: "/assets/serv1.jpg"
  },
  {
    id: 'feasibility-studies',
    icon: <SearchIcon sx={{ fontSize: { xs: 36, md: 48 }, color: '#1B2441' }} />,
    title: "Feasibility Studies",
    description: "Comprehensive evaluation of project viability and market potential across various sectors.",
    features: [
      "Market Analysis",
      "Financial Viability",
      "Technical Assessment",
      "Implementation Strategy"
    ],
    link: "/services/feasibility-studies",
    color: "#E8F5E9",
    image: "/assets/serv2.jpg"
  },
  {
    id: 'data-collection',
    icon: <StorageIcon sx={{ fontSize: { xs: 36, md: 48 }, color: '#1B2441' }} />,
    title: "Data Collection",
    description: "Robust data collection and analysis services for evidence-based decision making.",
    features: [
      "Economic Indicators",
      "Market Research",
      "Field Surveys",
      "Data Analysis"
    ],
    link: "/services/data-collection",
    color: "#F3E5F5",
    image: "/assets/serv3.jpg"
  },
  {
    id: 'capacity-building',
    icon: <SchoolIcon sx={{ fontSize: { xs: 36, md: 48 }, color: '#1B2441' }} />,
    title: "Capacity Building",
    description: "Professional training and development programs to enhance organizational capabilities.",
    features: [
      "Professional Training",
      "Workshops & Seminars",
      "Digital Skills",
      "Certification Programs"
    ],
    link: "/services/capacity-building",
    color: "#FFF3E0",
    image: "/assets/serv4.jpg"
  },
  {
    id: 'consultancy',
    icon: <HandshakeIcon sx={{ fontSize: { xs: 36, md: 48 }, color: '#1B2441' }} />,
    title: "Consultancy Services",
    description: "Expert advisory services for economic policy, business strategy, and market analysis.",
    features: [
      "Economic Advisory",
      "Policy Consulting",
      "Investment Consulting",
      "Strategic Planning"
    ],
    link: "/services/consultancy-services",
    color: "#FFEBEE",
    image: "/assets/serv5.jpg"
  }
];

const ServicePage = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5' }}>
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#1B2441', py: { xs: 6, md: 8 }, color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }
              }}
            >
              Our Services
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 400,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
              }}
            >
              Comprehensive economic research and consultancy services to drive sustainable growth and development in Zambia and beyond.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services Showcase */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
          {mainServices.map((service) => (
            <StyledPaper key={service.id} elevation={2}>
              <Grid container>
                <Grid 
                  sx={{ 
                    flexBasis: { xs: '100%', md: '50%' },
                    maxWidth: { xs: '100%', md: '50%' }
                  }}
                >
                  <Box sx={{ p: { xs: 3, md: 4 }, pb: { xs: 8, md: 4 } }}>
                    <Box 
                      sx={{ 
                        display: 'inline-block',
                        p: { xs: 1.5, md: 2 },
                        borderRadius: 2,
                        bgcolor: service.color,
                        mb: 2
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        color: '#1B2441',
                        fontWeight: 600,
                        mb: 1,
                        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: 'text.secondary',
                        mb: 2,
                        fontSize: { xs: '0.875rem', md: '1rem' }
                      }}
                    >
                      {service.description}
                    </Typography>
                    <List dense>
                      {service.features.map((feature, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <Box 
                              sx={{ 
                                width: 6, 
                                height: 6, 
                                borderRadius: '50%', 
                                bgcolor: '#C9AA74' 
                              }} 
                            />
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature}
                            sx={{ 
                              '& .MuiListItemText-primary': {
                                color: 'text.secondary',
                                fontSize: { xs: '0.75rem', md: '0.875rem' }
                              }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    <Button
                      component={Link}
                      to={service.link}
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      size="small"
                      sx={{
                        mt: 2,
                        bgcolor: '#1B2441',
                        '&:hover': {
                          bgcolor: '#2a3a6d',
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Grid>
                <Grid 
                  sx={{ 
                    flexBasis: { xs: '100%', md: '50%' },
                    maxWidth: { xs: '100%', md: '50%' },
                    position: 'relative',
                    minHeight: { xs: 200, md: 'auto' }
                  }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: { xs: 16, md: 24 },
                      left: { xs: 16, md: 24 },
                      right: { xs: 16, md: 24 },
                      bgcolor: 'white',
                      borderRadius: 2,
                      p: { xs: 2, md: 3 },
                      boxShadow: 1,
                      zIndex: 1
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#1B2441',
                        fontWeight: 600,
                        mb: 1,
                        fontSize: { xs: '0.875rem', md: '1rem' }
                      }}
                    >
                      Why Choose Our {service.title}?
                    </Typography>
                    <List dense>
                      <ListItem sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <Box 
                            sx={{ 
                              width: 6, 
                              height: 6, 
                              borderRadius: '50%', 
                              bgcolor: '#C9AA74' 
                            }} 
                          />
                        </ListItemIcon>
                        <ListItemText 
                          primary={`Expert team with extensive experience in ${service.title.toLowerCase()}`}
                          sx={{ 
                            '& .MuiListItemText-primary': {
                              fontSize: { xs: '0.75rem', md: '0.875rem' },
                              color: 'text.secondary'
                            }
                          }}
                        />
                      </ListItem>
                      <ListItem sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <Box 
                            sx={{ 
                              width: 6, 
                              height: 6, 
                              borderRadius: '50%', 
                              bgcolor: '#C9AA74' 
                            }} 
                          />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Tailored solutions to meet your specific needs and objectives"
                          sx={{ 
                            '& .MuiListItemText-primary': {
                              fontSize: { xs: '0.75rem', md: '0.875rem' },
                              color: 'text.secondary'
                            }
                          }}
                        />
                      </ListItem>
                      <ListItem sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <Box 
                            sx={{ 
                              width: 6, 
                              height: 6, 
                              borderRadius: '50%', 
                              bgcolor: '#C9AA74' 
                            }} 
                          />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Proven track record of successful project delivery"
                          sx={{ 
                            '& .MuiListItemText-primary': {
                              fontSize: { xs: '0.75rem', md: '0.875rem' },
                              color: 'text.secondary'
                            }
                          }}
                        />
                      </ListItem>
                    </List>
                  </Box>
                </Grid>
              </Grid>
            </StyledPaper>
          ))}
        </Box>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: '#1B2441', py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Paper 
            elevation={0}
            sx={{ 
              p: { xs: 3, md: 4 },
              textAlign: 'center',
              bgcolor: 'white',
              borderRadius: 2
            }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                color: '#1B2441',
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }}
            >
              Ready to Get Started?
            </Typography>
            <Typography 
              sx={{ 
                color: 'text.secondary',
                mb: 3,
                maxWidth: '600px',
                mx: 'auto',
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}
            >
              Let our team of experts help you achieve your economic research and development goals.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/pages/contact"
                variant="contained"
                size="small"
                sx={{
                  bgcolor: '#1B2441',
                  px: 3,
                  py: 1,
                  '&:hover': {
                    bgcolor: '#2a3a6d',
                  }
                }}
              >
                Request a Service
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicePage; 