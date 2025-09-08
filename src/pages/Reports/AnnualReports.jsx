import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, CircularProgress, Alert, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DescriptionIcon from '@mui/icons-material/Description';
import ShareIcon from '@mui/icons-material/Share';
import { supabase } from '../../utils/supabaseClient';
import { shareDocument } from '../../utils/shareUtils';
import { useAuth } from '../../context/AuthContext';

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

const AnnualReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(null);
  const [shareSnackbar, setShareSnackbar] = useState({ open: false, message: '' });
  const { user } = useAuth();

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      setError('');
      try {
        const { data, error } = await supabase
          .from('reports')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) throw error;
        setReports(data || []);
      } catch (err) {
        setError('Failed to load reports.');
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  const handleShare = async (report) => {
    await shareDocument(report, 'annual-reports', setShareSnackbar);
  };

  const handleCloseSnackbar = () => {
    setShareSnackbar({ open: false, message: '' });
  };

  const handleDownload = async (report) => {
    setDownloading(report.id);
    try {
      let url = report.file_url;
      if (report.access === 'paid') {
        // Generate a fresh signed URL (valid for 1 hour)
        const { data, error } = await supabase
          .storage
          .from('reports')
          .createSignedUrl(report.file_name, 60 * 60);
        if (error) throw error;
        url = data.signedUrl;
      }
      window.open(url, '_blank');
    } catch (err) {
      alert('Failed to download report.');
    } finally {
      setDownloading(null);
    }
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
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="30vh">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : reports.length === 0 ? (
          <Typography align="center" color="text.secondary" sx={{ my: 6 }}>
            No reports available yet.
          </Typography>
        ) : (
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
                          {report.created_at ? new Date(report.created_at).toLocaleDateString() : ''}
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

                      {/* Highlights (optional, if you add to table) */}
                      {/* <Box sx={{ mb: { xs: 2, sm: 3 } }}>
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
                          {report.highlights?.map((highlight, index) => (
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
                      </Box> */}

                      <Box 
                        sx={{ 
                          display: 'flex', 
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: 2,
                          pt: { xs: 1.5, sm: 2 },
                          mt: 'auto',
                          borderTop: 1,
                          borderColor: 'divider'
                        }}
                      >
                        <Button
                          startIcon={<DownloadIcon sx={{ fontSize: { xs: 16, sm: 20 } }} />}
                          sx={{ 
                            color: '#C9AA74',
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            fontWeight: 600,
                            '&:hover': { 
                              color: '#AF9871',
                              bgcolor: 'transparent'
                            }
                          }}
                          onClick={() => handleDownload(report)}
                          disabled={downloading === report.id}
                        >
                          {downloading === report.id ? 'Preparing...' : 'DOWNLOAD REPORT'}
                        </Button>
                        <Button
                          startIcon={<ShareIcon sx={{ fontSize: { xs: 16, sm: 20 } }} />}
                          sx={{ 
                            color: '#1B2441',
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            fontWeight: 600,
                            '&:hover': { 
                              color: '#C9AA74',
                              bgcolor: 'transparent'
                            }
                          }}
                          onClick={() => handleShare(report)}
                          title="Share this annual report (Login required to access)"
                        >
                          SHARE
                        </Button>
                      </Box>
                    </Box>
                  </ReportCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
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
                  Discuss Your Needs
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Share Success Snackbar */}
      <Snackbar
        open={shareSnackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={shareSnackbar.message}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{
          '& .MuiSnackbarContent-root': {
            bgcolor: '#1B2441',
            color: 'white',
            fontWeight: 500
          }
        }}
      />
    </Box>
  );
};

export default AnnualReports; 