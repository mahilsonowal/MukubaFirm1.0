import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DescriptionIcon from '@mui/icons-material/Description';
import { storage } from '../../appwrite/config';

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

const getDownloadUrl = (fileId) => {
  return storage.getFileView('68545f180007a9aee1c1', fileId);
};

const reports = [
  {
    id: '2023',
    title: 'Annual Report 2023',
    fileId: '685464a6001b0c8e7f79',
    description: 'A comprehensive overview of our achievements, economic impact, and key initiatives throughout 2023.',
    highlights: [
      'Economic Research Projects',
      'Policy Impact Analysis',
      'Market Development',
      'Financial Overview'
    ],
    fileSize: '4.2 MB',
    date: 'February 2024',
    thumbnail: '/images/reports/annual-2023.jpg'
  },
  {
    id: '2023-q4',
    title: 'Q4 2023 Impact Report',
    fileId: '6859997400064ee35775',
    description: 'Detailed analysis of our fourth quarter performance and economic research outcomes.',
    highlights: [
      'Quarterly Highlights',
      'Research Findings',
      'Project Updates'
    ],
    fileSize: '2.1 MB',
    date: 'January 2024',
    thumbnail: '/images/reports/q4-2023.jpg'
  },
  {
    id: '2023-sustainability',
    title: 'Sustainability Report 2023',
    description: 'Our commitment to sustainable economic development and environmental responsibility.',
    highlights: [
      'Sustainable Initiatives',
      'Environmental Impact',
      'Community Projects'
    ],
    fileSize: '3.5 MB',
    date: 'December 2023',
    thumbnail: '/images/reports/sustainability-2023.jpg'
  }
];

const AnnualReports = () => {
  // Use direct URL for public files
  const handleDownload = (fileId) => {
    const url = getDownloadUrl(fileId);
    window.open(url, '_blank');
  };

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
            Annual Reports & Publications
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
            Discover our impact through detailed annual reports and quarterly publications showcasing our achievements and economic insights.
          </Typography>
        </Container>
      </Box>

      {/* Reports Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box sx={{ 
          width: '100%',
          overflow: 'auto',
          px: { xs: 1, sm: 0 },
          mx: { xs: -1, sm: 0 },
          '&::-webkit-scrollbar': {
            height: { xs: 4, sm: 8 },
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
            borderRadius: 4,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#C9AA74',
            borderRadius: 4,
            '&:hover': {
              backgroundColor: '#AF9871',
            },
          },
        }}>
          <Grid 
            container 
            display="flex" 
            justifyContent="center" 
            alignItems="stretch" 
            spacing={2}
            sx={{ 
              pb: { xs: 1, sm: 2 },
              minWidth: 'min-content'
            }}
          >
            {reports.map((report, idx) => (
              <Grid 
                key={report.id}
                sx={{ 
                  flexBasis: { xs: '100%', sm: '33.33%' },
                  maxWidth: { xs: '100%', sm: '33.33%' },
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
                        {report.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                      >
                        {report.date}
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
                      {report.description}
                    </Typography>

                    {/* Highlights */}
                    <Box sx={{ mb: { xs: 2, sm: 3 } }}>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          mb: 1, 
                          color: 'text.primary',
                          fontSize: { xs: '0.813rem', sm: '0.875rem' }
                        }}
                      >
                        Report Highlights:
                      </Typography>
                      <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                        {report.highlights.map((highlight, index) => (
                          <Box 
                            component="li" 
                            key={index}
                            sx={{ 
                              display: 'flex',
                              alignItems: 'center',
                              mb: 0.5,
                              color: 'text.secondary',
                              fontSize: { xs: '0.75rem', sm: '0.875rem' }
                            }}
                          >
                            <ShowChartIcon sx={{ fontSize: { xs: 12, sm: 16 }, mr: 1, color: '#C9AA74' }} />
                            {highlight}
                          </Box>
                        ))}
                      </Box>
                    </Box>

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
                      {report.fileId ? (
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
                          onClick={() => handleDownload(report.fileId)}
                        >
                          Download Report
                        </Button>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {'Coming Soon'}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </ReportCard>
              </Grid>
            ))}
          </Grid>
        </Box>
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
                  Want to learn more about our impact?
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: { xs: 3, md: 0 },
                    fontSize: { xs: '1rem', sm: '1.1rem' }
                  }}
                >
                  Discover how our research and economic analysis can benefit your organization. Let's explore potential collaborations and opportunities.
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
                  Discuss Your Needs
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default AnnualReports; 