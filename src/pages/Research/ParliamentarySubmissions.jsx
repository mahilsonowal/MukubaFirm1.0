import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionIcon from '@mui/icons-material/Description';

const SubmissionCard = styled(Paper)(({ theme }) => ({
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

const submissions = [
  {
    id: 'economic-recovery-2024',
    title: 'Economic Recovery and Growth Strategy',
    committee: 'Committee on Budget and Economic Affairs',
    description: 'Expert testimony on proposed economic recovery measures and their potential impact on various sectors.',
    keyPoints: [
      'Analysis of proposed fiscal measures',
      'Impact on business environment',
      'Employment generation strategies',
      'Sectoral growth projections'
    ],
    fileSize: '2.8 MB',
    date: 'March 2024',
    type: 'Expert Testimony'
  },
  {
    id: 'mining-legislation',
    title: 'Mining Sector Legislative Framework',
    committee: 'Committee on Mines and Minerals Development',
    description: 'Analysis and recommendations on proposed amendments to mining sector regulations and their economic implications.',
    keyPoints: [
      'Revenue sharing mechanisms',
      'Environmental safeguards',
      'Local content provisions',
      'Investment incentives'
    ],
    fileSize: '3.5 MB',
    date: 'February 2024',
    type: 'Policy Analysis'
  },
  {
    id: 'financial-inclusion',
    title: 'Financial Inclusion and Digital Banking',
    committee: 'Committee on Financial Services',
    description: 'Recommendations on improving financial inclusion through digital banking and financial technology innovations.',
    keyPoints: [
      'Digital payment systems',
      'Rural banking access',
      'Consumer protection measures',
      'Regulatory framework'
    ],
    fileSize: '2.4 MB',
    date: 'January 2024',
    type: 'Policy Recommendations'
  }
];

const ParliamentarySubmissions = () => {
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
            Parliamentary Submissions
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
            Expert testimonies and policy recommendations submitted to parliamentary committees on key economic matters.
          </Typography>
        </Box>

        {/* Submissions Grid */}
        <Grid 
          container 
          display="flex" 
          justifyContent="center" 
          alignItems="stretch" 
          spacing={2}
          sx={{ maxWidth: '1200px', mx: 'auto' }}
        >
          {submissions.map((submission) => (
            <Grid 
              key={submission.id}
              sx={{ 
                flexBasis: { xs: '100%', sm: '50%', md: '33.33%' },
                maxWidth: { xs: '100%', sm: '50%', md: '33.33%' },
                display: 'flex',
                height: 'auto'
              }}
            >
              <SubmissionCard elevation={2}>
                <Box sx={{ 
                  p: 3, 
                  flexGrow: 1, 
                  display: 'flex', 
                  flexDirection: 'column',
                  minHeight: '200px'
                }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 600,
                            color: '#1B2441',
                            fontSize: '1.1rem',
                            '&:hover': {
                              color: '#C9AA74',
                            }
                          }}
                        >
                          {submission.title}
                        </Typography>
                        <Chip 
                          label={submission.type}
                          size="small"
                          sx={{ 
                            ml: 2,
                            bgcolor: '#C9AA74',
                            color: 'white',
                            fontSize: '0.75rem'
                          }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', fontSize: '0.875rem', mb: 0.5 }}>
                        <AccountBalanceIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                        {submission.committee}
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', fontSize: '0.875rem' }}>
                        <CalendarTodayIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                        {submission.date}
                      </Box>
                    </Box>
                    <DescriptionIcon sx={{ color: '#C9AA74', fontSize: '1.5rem' }} />
                  </Box>

                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      mb: 2,
                      fontSize: '0.875rem',
                      lineHeight: 1.5
                    }}
                  >
                    {submission.description}
                  </Typography>

                  {/* Key Points */}
                  <Box sx={{ 
                    mb: 2,
                    bgcolor: 'grey.50',
                    p: 2,
                    borderRadius: 1
                  }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        mb: 1, 
                        color: 'text.primary',
                        fontSize: '0.875rem'
                      }}
                    >
                      Key Points:
                    </Typography>
                    <Grid container spacing={1}>
                      {submission.keyPoints.map((point, index) => (
                        <Grid xs={6} key={index}>
                          <Box sx={{ 
                            display: 'flex',
                            alignItems: 'center',
                            color: 'text.secondary',
                            fontSize: '0.875rem'
                          }}>
                            <ArrowForwardIcon sx={{ fontSize: '0.875rem', mr: 0.5, color: '#C9AA74' }} />
                            {point}
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  <Box 
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      pt: 2,
                      mt: 'auto',
                      borderTop: 1,
                      borderColor: 'divider'
                    }}
                  >
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ fontSize: '0.875rem' }}
                    >
                      PDF • {submission.fileSize}
                    </Typography>
                    <Button
                      startIcon={<DownloadIcon sx={{ fontSize: '1rem' }} />}
                      sx={{ 
                        color: '#C9AA74',
                        fontSize: '0.875rem',
                        '&:hover': { 
                          color: '#AF9871',
                          bgcolor: 'transparent'
                        }
                      }}
                    >
                      Download Submission
                    </Button>
                  </Box>
                </Box>
              </SubmissionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'white', borderTop: 1, borderColor: 'divider', mt: 6 }}>
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
                  Need expert policy analysis?
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: { xs: 3, md: 0 },
                    fontSize: { xs: '1rem', sm: '1.1rem' }
                  }}
                >
                  Our team can provide expert analysis and recommendations on specific policy matters or legislative proposals.
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
                  Request Policy Analysis
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default ParliamentarySubmissions; 