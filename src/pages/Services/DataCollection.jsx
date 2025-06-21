import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import StorageIcon from '@mui/icons-material/Storage';
import PieChartIcon from '@mui/icons-material/PieChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MapIcon from '@mui/icons-material/Map';
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

const methodologies = [
  {
    icon: <AssignmentIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Surveys & Questionnaires",
    description: "Structured data collection through carefully designed surveys targeting specific demographics and sectors."
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Focus Groups",
    description: "In-depth qualitative data collection through moderated group discussions and interviews."
  },
  {
    icon: <PhoneIphoneIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Digital Data Collection",
    description: "Modern mobile and web-based tools for efficient and accurate data gathering."
  },
  {
    icon: <MapIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Field Research",
    description: "On-ground data collection through field visits and direct observations across Zambia."
  },
  {
    icon: <StorageIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Database Management",
    description: "Secure storage, organization, and management of collected data using advanced systems."
  },
  {
    icon: <PieChartIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Data Analysis",
    description: "Comprehensive analysis and interpretation of collected data using statistical tools."
  }
];

const dataTypes = [
  {
    title: "Economic Indicators",
    items: [
      "Market prices and trends",
      "Consumer behavior patterns",
      "Business performance metrics",
      "Employment statistics"
    ]
  },
  {
    title: "Social Data",
    items: [
      "Household surveys",
      "Community assessments",
      "Social impact metrics",
      "Demographic information"
    ]
  },
  {
    title: "Sector-Specific Data",
    items: [
      "Agricultural production",
      "Mining sector metrics",
      "Financial services data",
      "Infrastructure statistics"
    ]
  },
  {
    title: "Policy Impact Data",
    items: [
      "Policy implementation metrics",
      "Regulatory compliance data",
      "Impact assessment indicators",
      "Development outcomes"
    ]
  }
];

const DataCollection = () => {
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
              <Typography>Data Collection</Typography>
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
              Data Collection Services
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 400,
                maxWidth: '800px'
              }}
            >
              Comprehensive data collection and analysis services to support evidence-based decision making and research in Zambia.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Methodologies Section */}
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
            Our Data Collection Methodologies
          </Typography>
          <Typography 
            sx={{ 
              color: 'text.secondary',
              mb: 4,
              maxWidth: '800px'
            }}
          >
            We employ diverse and robust methodologies to ensure comprehensive and accurate data collection across various sectors and regions.
          </Typography>
          <Grid 
            container 
            display="flex" 
            justifyContent="center" 
            alignItems="stretch" 
            spacing={3}
          >
            {methodologies.map((method, index) => (
              <Grid 
                key={index}
                sx={{ 
                  flexBasis: { xs: '100%', sm: '50%', md: '33.33%' },
                  maxWidth: { xs: '100%', sm: '50%', md: '33.33%' }
                }}
              >
                <StyledPaper elevation={2}>
                  <Box sx={{ mb: 2 }}>
                    {method.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#1B2441',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {method.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '0.875rem'
                    }}
                  >
                    {method.description}
                  </Typography>
                </StyledPaper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Data Types Section */}
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
            Types of Data We Collect
          </Typography>
          <Typography 
            sx={{ 
              color: 'text.secondary',
              mb: 4,
              maxWidth: '800px'
            }}
          >
            Our data collection services cover a wide range of economic and social indicators crucial for informed decision-making.
          </Typography>
          <Grid 
            container 
            display="flex" 
            justifyContent="center" 
            alignItems="stretch" 
            spacing={3}
          >
            {dataTypes.map((type, index) => (
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
                    {type.title}
                  </Typography>
                  <List dense>
                    {type.items.map((item, itemIndex) => (
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
            Need Data Collection Services?
          </Typography>
          <Typography 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Let our experienced team help you gather the data you need for your research, project, or policy analysis.
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
            Request Data Collection
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default DataCollection; 