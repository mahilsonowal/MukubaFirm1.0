import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Chip, CircularProgress, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { supabase } from '../../utils/supabaseClient';

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

const BudgetAnalysis = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      setError('');
      try {
        const { data, error } = await supabase
          .from('budget_analysis')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) throw error;
        setReports(data || []);
      } catch (err) {
        setError('Failed to load budget analysis reports.');
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  const handleDownload = async (report) => {
    setDownloading(report.id);
    try {
      let url = report.file_url;
      if (report.access === 'paid') {
        const { data, error } = await supabase
          .storage
          .from('budget-analysis')
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
    <Box sx={{ py: { xs: 6, md: 5 }, bgcolor: '#f5f5f5' }}>
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

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="30vh">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : reports.length === 0 ? (
          <Typography align="center" color="text.secondary" sx={{ my: 6 }}>
            No budget analysis reports available yet.
          </Typography>
        ) : (
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
                            label={report.access === 'paid' ? 'Paid' : 'Free'}
                            size="small"
                            sx={{ 
                              ml: 2,
                              bgcolor: report.access === 'paid' ? '#AF9871' : '#1B2441',
                              color: 'white',
                              fontSize: '0.75rem'
                            }}
                          />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', fontSize: '0.875rem' }}>
                          <CalendarTodayIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                          {report.created_at ? new Date(report.created_at).toLocaleDateString() : ''}
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
                        {report.original_file_name ? report.original_file_name : report.file_name}
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
                        onClick={() => handleDownload(report)}
                        disabled={downloading === report.id}
                      >
                        {downloading === report.id ? 'Preparing...' : 'Download Report'}
                      </Button>
                    </Box>
                  </Box>
                </ReportCard>
              </Grid>
            ))}
          </Grid>
        )}
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