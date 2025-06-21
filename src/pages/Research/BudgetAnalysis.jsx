import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ReportCard = styled(Paper)(({ theme }) => ({
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

const reports = [
  {
    id: 'national-budget-2024',
    title: '2024 National Budget Analysis',
    description: 'Comprehensive analysis of the 2024 National Budget, including key allocations, fiscal policies, and economic implications.',
    sectors: ['National Budget', 'Fiscal Policy', 'Economic Planning'],
    highlights: [
      'Revenue and expenditure analysis',
      'Sector-wise allocation review',
      'Debt sustainability assessment',
      'Economic growth projections'
    ],
    fileSize: '4.5 MB',
    date: 'October 2023',
    type: 'Annual Analysis'
  },
  {
    id: 'health-sector-2024',
    title: 'Healthcare Sector Budget Review',
    description: 'Detailed analysis of healthcare sector budget allocations and their impact on public health services.',
    sectors: ['Healthcare', 'Public Services', 'Social Development'],
    highlights: [
      'Healthcare infrastructure funding',
      'Medical supplies allocation',
      'Staff recruitment provisions',
      'Rural healthcare initiatives'
    ],
    fileSize: '2.8 MB',
    date: 'November 2023',
    type: 'Sector Analysis'
  },
  {
    id: 'education-budget-2024',
    title: 'Education Sector Budget Analysis',
    description: 'Analysis of education sector budget allocations, focusing on infrastructure development and quality improvement initiatives.',
    sectors: ['Education', 'Infrastructure', 'Human Capital'],
    highlights: [
      'School infrastructure development',
      'Teacher recruitment and training',
      'Educational materials provision',
      'Special education programs'
    ],
    fileSize: '3.2 MB',
    date: 'December 2023',
    type: 'Sector Analysis'
  }
];

const BudgetAnalysis = () => {
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
            Budget Analysis Reports
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
            In-depth analysis of national and sector-specific budgets, providing insights into fiscal policies and economic planning.
          </Typography>
        </Box>

        {/* Reports Grid */}
        <Grid 
          container 
          display="flex" 
          justifyContent="center" 
          alignItems="stretch" 
          spacing={2}
          sx={{ maxWidth: '1200px', mx: 'auto' }}
        >
          {reports.map((report) => (
            <Grid 
              key={report.id}
              sx={{ 
                flexBasis: { xs: '100%', sm: '33.33%' },
                maxWidth: { xs: '100%', sm: '33.33%' },
                display: 'flex',
                height: 'auto'
              }}
            >
              <ReportCard elevation={2}>
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
                          {report.title}
                        </Typography>
                        <Chip 
                          label={report.type}
                          size="small"
                          sx={{ 
                            ml: 2,
                            bgcolor: '#1B2441',
                            color: 'white',
                            fontSize: '0.75rem'
                          }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', fontSize: '0.875rem' }}>
                        <CalendarTodayIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                        {report.date}
                      </Box>
                    </Box>
                    <BarChartIcon sx={{ color: '#C9AA74', fontSize: '1.5rem' }} />
                  </Box>

                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      mb: 2,
                      fontSize: '0.875rem',
                      lineHeight: 1.5
                    }}
                  >
                    {report.description}
                  </Typography>

                  {/* Sectors */}
                  <Box sx={{ mb: 2 }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        mb: 1, 
                        color: 'text.primary',
                        fontSize: '0.875rem'
                      }}
                    >
                      Sectors Covered:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {report.sectors.map((sector, index) => (
                        <Chip
                          key={index}
                          label={sector}
                          size="small"
                          sx={{ 
                            bgcolor: 'grey.100',
                            color: 'text.secondary',
                            fontSize: '0.75rem'
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Highlights */}
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
                      Key Highlights:
                    </Typography>
                    <Grid container spacing={1}>
                      {report.highlights.map((highlight, index) => (
                        <Grid xs={6} key={index}>
                          <Box sx={{ 
                            display: 'flex',
                            alignItems: 'center',
                            color: 'text.secondary',
                            fontSize: '0.875rem'
                          }}>
                            <ArrowRightIcon sx={{ fontSize: '0.875rem', mr: 0.5, color: '#C9AA74' }} />
                            {highlight}
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
                      PDF • {report.fileSize}
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
                      Download Report
                    </Button>
                  </Box>
                </Box>
              </ReportCard>
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
                  Need a custom budget analysis?
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: { xs: 3, md: 0 },
                    fontSize: { xs: '1rem', sm: '1.1rem' }
                  }}
                >
                  Our team can provide detailed analysis of specific sectors or budget components tailored to your requirements.
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
                  Request Budget Analysis
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default BudgetAnalysis; 