import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import BarChartIcon from '@mui/icons-material/BarChart';
import PublicIcon from '@mui/icons-material/Public';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
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

const researchAreas = [
  {
    icon: <BarChartIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Macroeconomic Analysis",
    description: "In-depth analysis of economic indicators, trends, and policy impacts on the Zambian economy."
  },
  {
    icon: <PublicIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Trade & Investment",
    description: "Research on international trade patterns, investment flows, and regional economic integration."
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Policy Research",
    description: "Evidence-based research to inform economic policy decisions and reforms."
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Innovation Studies",
    description: "Analysis of technological advancement and its impact on economic development."
  },
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Financial Markets",
    description: "Research on financial sector development, inclusion, and market dynamics."
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Sectoral Analysis",
    description: "Detailed research on key economic sectors and their growth potential."
  }
];

const publications = [
  {
    title: "Quarterly Economic Review",
    description: "Comprehensive analysis of Zambia's economic performance and outlook.",
    frequency: "Quarterly"
  },
  {
    title: "Policy Briefs",
    description: "Focused analysis of specific economic policy issues and recommendations.",
    frequency: "Monthly"
  },
  {
    title: "Sector Reports",
    description: "In-depth analysis of key economic sectors and market trends.",
    frequency: "Bi-annual"
  },
  {
    title: "Special Research Papers",
    description: "Detailed studies on emerging economic issues and opportunities.",
    frequency: "As needed"
  }
];

const EconomicResearch = () => {
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
              <Typography>Economic Research</Typography>
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
              Economic Research
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 400,
                maxWidth: '800px'
              }}
            >
              Delivering insightful economic analysis and research to inform decision-making and policy development in Zambia and the region.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Research Areas Section */}
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
            Our Research Areas
          </Typography>
          <Typography 
            sx={{ 
              color: 'text.secondary',
              mb: 4,
              maxWidth: '800px'
            }}
          >
            We conduct comprehensive economic research across various domains, providing valuable insights for businesses, policymakers, and stakeholders.
          </Typography>
          <Grid 
            container 
            display="flex" 
            justifyContent="center" 
            alignItems="stretch" 
            spacing={3}
          >
            {researchAreas.map((area, index) => (
              <Grid 
                key={index}
                sx={{ 
                  flexBasis: { xs: '100%', sm: '50%', md: '33.33%' },
                  maxWidth: { xs: '100%', sm: '50%', md: '33.33%' }
                }}
              >
                <StyledPaper elevation={2}>
                  <Box sx={{ mb: 2 }}>
                    {area.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#1B2441',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {area.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '0.875rem'
                    }}
                  >
                    {area.description}
                  </Typography>
                </StyledPaper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Publications Section */}
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
            Research Publications
          </Typography>
          <Typography 
            sx={{ 
              color: 'text.secondary',
              mb: 4,
              maxWidth: '800px'
            }}
          >
            Our research findings are published regularly through various channels to keep stakeholders informed about economic developments.
          </Typography>
          <Grid 
            container 
            display="flex" 
            justifyContent="center" 
            alignItems="stretch" 
            spacing={3}
          >
            {publications.map((pub, index) => (
              <Grid 
                key={index}
                sx={{ 
                  flexBasis: { xs: '100%', sm: '50%' },
                  maxWidth: { xs: '100%', sm: '50%' }
                }}
              >
                <StyledPaper elevation={2}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#1B2441',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {pub.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      mb: 2,
                      fontSize: '0.875rem'
                    }}
                  >
                    {pub.description}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: '#C9AA74',
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}
                  >
                    Frequency: {pub.frequency}
                  </Typography>
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
            Need Custom Research?
          </Typography>
          <Typography 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Our team of economists and researchers can conduct specialized research tailored to your specific needs and requirements.
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
            Request Custom Research
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default EconomicResearch; 