import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DescriptionIcon from '@mui/icons-material/Description';

const ReportCard = styled(Paper)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const plans = [
  {
    id: '2024-2028',
    title: 'Strategic Vision 2024-2028',
    description: 'Our comprehensive five-year strategic plan focusing on economic development, research innovation, and sustainable growth in Zambia.',
    fileSize: '2.8 MB',
    date: 'January 2024',
    thumbnail: '/images/reports/strategic-2024.jpg'
  },
  {
    id: '2023-initiatives',
    title: 'Economic Initiatives Framework',
    description: 'Detailed framework outlining our approach to economic research, policy analysis, and market development strategies.',
    fileSize: '1.5 MB',
    date: 'September 2023',
    thumbnail: '/images/reports/framework-2023.jpg'
  },
  {
    id: 'research-roadmap',
    title: 'Research & Development Roadmap',
    description: 'Strategic roadmap for enhancing our research capabilities and expanding our economic analysis methodologies.',
    fileSize: '3.2 MB',
    date: 'June 2023',
    thumbnail: '/images/reports/roadmap-2023.jpg'
  },
  {
    id: 'market-strategy',
    title: 'Market Analysis Strategy',
    description: 'Comprehensive strategy for market research, data analysis, and economic forecasting methodologies.',
    fileSize: '2.1 MB',
    date: 'March 2023',
    thumbnail: '/images/reports/market-2023.jpg'
  }
];

const StrategicPlans = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#1B2441', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              color: 'white',
              fontWeight: 700,
              textAlign: 'center',
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Strategic Plans & Frameworks
          </Typography>
          <Typography 
            variant="h6"
            sx={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '800px',
              textAlign: 'center',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
            }}
          >
            Explore our strategic vision and frameworks that guide our mission to drive economic excellence and innovation.
          </Typography>
        </Container>
      </Box>

      {/* Plans Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid 
          container 
          display="flex" 
          justifyContent="center" 
          alignItems="stretch" 
          spacing={2}
          sx={{ maxWidth: '1200px', mx: 'auto' }}
        >
          {plans.map((plan) => (
            <Grid 
              key={plan.id}
              sx={{ 
                flexBasis: { xs: '100%', sm: '50%', md: '33.33%' },
                maxWidth: { xs: '100%', sm: '50%', md: '33.33%' },
                display: 'flex',
                height: 'auto'
              }}
            >
              <ReportCard elevation={1}>
                {/* Thumbnail */}
                <Box 
                  sx={{ 
                    height: { xs: 160, sm: 200 },
                    bgcolor: 'grey.100',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <DescriptionIcon sx={{ fontSize: { xs: 40, sm: 60 }, color: 'grey.400' }} />
                </Box>

                {/* Content */}
                <Box sx={{ 
                  p: { xs: 2, sm: 3 },
                  flexGrow: 1, 
                  display: 'flex', 
                  flexDirection: 'column' 
                }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: { xs: 1, sm: 2 } }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#1B2441', 
                        fontWeight: 600,
                        fontSize: { xs: '1rem', sm: '1.25rem' }
                      }}
                    >
                      {plan.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                    >
                      {plan.date}
                    </Typography>
                  </Box>

                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ 
                      mb: { xs: 1.5, sm: 2 },
                      fontSize: { xs: '0.813rem', sm: '0.875rem' }
                    }}
                  >
                    {plan.description}
                  </Typography>

                  <Box 
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      pt: { xs: 1.5, sm: 2 },
                      mt: 'auto',
                      borderTop: 1,
                      borderColor: 'divider'
                    }}
                  >
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                    >
                      PDF • {plan.fileSize}
                    </Typography>
                    <Button
                      startIcon={<DownloadIcon sx={{ fontSize: { xs: 16, sm: 20 } }} />}
                      sx={{ 
                        color: '#C9AA74',
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        '&:hover': { 
                          color: '#AF9871',
                          bgcolor: 'transparent'
                        }
                      }}
                    >
                      Download
                    </Button>
                  </Box>
                </Box>
              </ReportCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'white', borderTop: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Paper 
            sx={{ 
              bgcolor: '#1B2441',
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              color: 'white'
            }}
          >
            <Grid container display="flex" justifyContent="center" alignItems="stretch" spacing={2}>
              <Grid 
                sx={{ 
                  flexBasis: { xs: '100%', md: '66.67%' },
                  maxWidth: { xs: '100%', md: '66.67%' }
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }
                  }}
                >
                  Learn more about our strategic approach
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: { xs: 3, md: 0 },
                    fontSize: { xs: '1rem', sm: '1.1rem' }
                  }}
                >
                  Interested in understanding how our strategic frameworks drive economic excellence? Let's discuss how we can collaborate on your economic initiatives.
                </Typography>
              </Grid>
              <Grid 
                sx={{ 
                  flexBasis: { xs: '100%', md: '33.33%' },
                  maxWidth: { xs: '100%', md: '33.33%' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'flex-start', md: 'flex-end' }
                }}
              >
                <Button
                  component={Link}
                  to="/contact"
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
                  Schedule a Consultation
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default StrategicPlans; 