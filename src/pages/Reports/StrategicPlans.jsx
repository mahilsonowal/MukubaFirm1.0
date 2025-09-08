import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, CircularProgress, Alert, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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

const StrategicPlans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(null);
  const [shareSnackbar, setShareSnackbar] = useState({ open: false, message: '' });
  const { user } = useAuth();

  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      setError('');
      try {
        const { data, error } = await supabase
          .from('strategic_plans')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) throw error;
        setPlans(data || []);
      } catch (err) {
        setError('Failed to load strategic plans.');
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  const handleShare = async (plan) => {
    await shareDocument(plan, 'strategic-plans', setShareSnackbar);
  };

  const handleCloseSnackbar = () => {
    setShareSnackbar({ open: false, message: '' });
  };

  const handleDownload = async (plan) => {
    setDownloading(plan.id);
    try {
      let url = plan.file_url;
      if (plan.access === 'paid') {
        const { data, error } = await supabase
          .storage
          .from('strategic-plans')
          .createSignedUrl(plan.file_name, 60 * 60);
        if (error) throw error;
        url = data.signedUrl;
      }
      window.open(url, '_blank');
    } catch (err) {
      alert('Failed to download plan.');
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
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="30vh">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : plans.length === 0 ? (
          <Typography align="center" color="text.secondary" sx={{ my: 6 }}>
            No strategic plans available yet.
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
            {plans.map((plan) => (
              <Grid 
                key={plan.id}
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
                        {plan.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                      >
                        {plan.created_at ? new Date(plan.created_at).toLocaleDateString() : ''}
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
                        onClick={() => handleDownload(plan)}
                        disabled={downloading === plan.id}
                      >
                        {downloading === plan.id ? 'Preparing...' : 'DOWNLOAD PLAN'}
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
                        onClick={() => handleShare(plan)}
                        title="Share this strategic plan (Login required to access)"
                      >
                        SHARE
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
                  Schedule a Consultation
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

export default StrategicPlans; 