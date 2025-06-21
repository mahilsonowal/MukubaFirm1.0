import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import HandshakeIcon from '@mui/icons-material/Handshake';
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

const features = [
  {
    icon: <TrendingUpIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Market Analysis",
    description: "Comprehensive market research and analysis to assess demand, competition, and market dynamics."
  },
  {
    icon: <SearchIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Financial Viability",
    description: "Detailed financial projections, ROI analysis, and risk assessment for informed decision-making."
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Technical Assessment",
    description: "Evaluation of technical requirements, resources, and operational feasibility."
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Stakeholder Analysis",
    description: "Assessment of key stakeholders, their interests, and potential impact on project success."
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Industry Analysis",
    description: "In-depth analysis of industry trends, regulations, and growth potential."
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Implementation Strategy",
    description: "Actionable recommendations and implementation roadmap for project execution."
  }
];

const sectors = [
  "Mining and Natural Resources",
  "Agriculture and Agribusiness",
  "Manufacturing and Industry",
  "Financial Services",
  "Infrastructure Development",
  "Energy and Renewables",
  "Technology and Innovation",
  "Tourism and Hospitality"
];

const FeasibilityStudies = () => {
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
              <Typography>Feasibility Studies</Typography>
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
              Feasibility Studies
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 400,
                maxWidth: '800px'
              }}
            >
              Comprehensive feasibility studies to evaluate the viability of your projects and investments in the Zambian market and beyond.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Overview Section */}
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
            Why Choose Our Feasibility Studies?
          </Typography>
          <Typography 
            sx={{ 
              color: 'text.secondary',
              mb: 4,
              maxWidth: '800px'
            }}
          >
            Our expert team combines deep local market knowledge with international best practices to deliver comprehensive feasibility studies that help you make informed investment decisions. We analyze all aspects of your project to ensure its viability and success in the target market.
          </Typography>
          <Grid 
            container 
            display="flex" 
            justifyContent="center" 
            alignItems="stretch" 
            spacing={3}
          >
            {features.map((feature, index) => (
              <Grid 
                key={index}
                sx={{ 
                  flexBasis: { xs: '100%', sm: '50%', md: '33.33%' },
                  maxWidth: { xs: '100%', sm: '50%', md: '33.33%' }
                }}
              >
                <StyledPaper elevation={2}>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#1B2441',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '0.875rem'
                    }}
                  >
                    {feature.description}
                  </Typography>
                </StyledPaper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Sectors Section */}
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
            Sectors We Cover
          </Typography>
          <Typography 
            sx={{ 
              color: 'text.secondary',
              mb: 4,
              maxWidth: '800px'
            }}
          >
            We conduct feasibility studies across various sectors of the Zambian economy, providing sector-specific insights and analysis.
          </Typography>
          <Grid 
            container 
            display="flex" 
            justifyContent="center" 
            alignItems="stretch" 
            spacing={2}
          >
            {sectors.map((sector, index) => (
              <Grid 
                key={index}
                sx={{ 
                  flexBasis: { xs: '100%', sm: '50%', md: '25%' },
                  maxWidth: { xs: '100%', sm: '50%', md: '25%' }
                }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    bgcolor: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: '#1B2441',
                      color: 'white',
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <Typography 
                    sx={{ 
                      fontWeight: 500,
                      fontSize: '0.875rem'
                    }}
                  >
                    {sector}
                  </Typography>
                </Paper>
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
            Ready to Evaluate Your Project?
          </Typography>
          <Typography 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Let our experts help you assess the viability of your project with a comprehensive feasibility study tailored to your needs.
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
            Request a Feasibility Study
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeasibilityStudies; 