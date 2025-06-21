import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const PaperCard = styled(Paper)(({ theme }) => ({
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

const papers = [
  {
    id: 'monetary-policy',
    title: 'Monetary Policy Effects on Economic Growth',
    authors: ['Dr. John Banda', 'Sarah Mulenga'],
    abstract: "An analysis of the relationship between monetary policy decisions and economic growth indicators in Zambia's developing economy.",
    keywords: ['Monetary Policy', 'Economic Growth', 'Central Banking'],
    fileSize: '3.2 MB',
    date: 'March 2024',
    series: 'WP/2024/01'
  },
  {
    id: 'trade-patterns',
    title: 'Regional Trade Patterns and Economic Integration',
    authors: ['Dr. Michael Phiri', 'Elizabeth Tembo'],
    abstract: 'Examining the evolution of regional trade patterns and their impact on economic integration in Southern Africa.',
    keywords: ['International Trade', 'Regional Integration', 'SADC'],
    fileSize: '2.8 MB',
    date: 'February 2024',
    series: 'WP/2024/02'
  },
  {
    id: 'financial-inclusion',
    title: 'Financial Inclusion and Digital Banking',
    authors: ['Prof. David Mwanza', 'Grace Chipeta'],
    abstract: 'Investigating the role of digital banking in promoting financial inclusion among underserved populations.',
    keywords: ['Financial Inclusion', 'Digital Banking', 'Financial Technology'],
    fileSize: '2.5 MB',
    date: 'January 2024',
    series: 'WP/2024/03'
  }
];

const WorkingPapers = () => {
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
            Working Papers
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
            In-depth research papers exploring economic trends, challenges, and opportunities in Zambia and the region.
          </Typography>
        </Box>

        {/* Papers Grid */}
        <Grid 
          container 
          display="flex" 
          justifyContent="center" 
          alignItems="stretch" 
          spacing={2}
          sx={{ maxWidth: '1200px', mx: 'auto' }}
        >
          {papers.map((paper) => (
            <Grid 
              key={paper.id}
              sx={{ 
                flexBasis: { xs: '100%', sm: '50%', md: '33.33%' },
                maxWidth: { xs: '100%', sm: '50%', md: '33.33%' },
                display: 'flex',
                height: 'auto'
              }}
            >
              <PaperCard elevation={2}>
                <Box sx={{ 
                  p: 3, 
                  flexGrow: 1, 
                  display: 'flex', 
                  flexDirection: 'column',
                  minHeight: '200px'
                }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600,
                          color: '#1B2441',
                          mb: 1,
                          fontSize: '1.1rem',
                          '&:hover': {
                            color: '#C9AA74',
                          }
                        }}
                      >
                        {paper.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', fontSize: '0.875rem', mb: 0.5 }}>
                        <PersonIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                        {paper.authors.join(', ')}
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', fontSize: '0.875rem' }}>
                        <CalendarTodayIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                        {paper.date}
                        <Typography 
                          component="span" 
                          sx={{ 
                            mx: 1,
                            color: 'text.secondary'
                          }}
                        >
                          •
                        </Typography>
                        Series: {paper.series}
                      </Box>
                    </Box>
                    <DescriptionIcon sx={{ color: 'text.secondary', fontSize: '1.5rem' }} />
                  </Box>

                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      mb: 2,
                      fontSize: '0.875rem',
                      lineHeight: 1.5
                    }}
                  >
                    {paper.abstract}
                  </Typography>

                  {/* Keywords */}
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {paper.keywords.map((keyword, index) => (
                        <Chip
                          key={index}
                          label={keyword}
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
                      PDF • {paper.fileSize}
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
                      Download Paper
                    </Button>
                  </Box>
                </Box>
              </PaperCard>
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
                  Interested in our research methodology?
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: { xs: 3, md: 0 },
                    fontSize: { xs: '1rem', sm: '1.1rem' }
                  }}
                >
                  Learn more about our research approach and how we can help you with custom economic research projects.
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
                  Discuss Research Opportunities
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default WorkingPapers; 