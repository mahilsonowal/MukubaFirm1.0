import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Chip, CircularProgress, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { supabase } from '../../utils/supabaseClient';
import { Link } from 'react-router-dom';

const BriefCard = styled(Paper)(({ theme }) => ({
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

const PolicyBriefs = () => {
  const [briefs, setBriefs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(null);

  useEffect(() => {
    const fetchBriefs = async () => {
      setLoading(true);
      setError('');
      try {
        const { data, error } = await supabase
          .from('policy_briefs')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) throw error;
        setBriefs(data || []);
      } catch (err) {
        setError('Failed to load policy briefs.');
      } finally {
        setLoading(false);
      }
    };
    fetchBriefs();
  }, []);

  const handleDownload = async (brief) => {
    setDownloading(brief.id);
    try {
      let url = brief.file_url;
      if (brief.access === 'paid') {
        const { data, error } = await supabase
          .storage
          .from('policy-briefs')
          .createSignedUrl(brief.file_name, 60 * 60);
        if (error) throw error;
        url = data.signedUrl;
      }
      window.open(url, '_blank');
    } catch (err) {
      alert('Failed to download brief.');
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
            Policy Briefs
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
            Expert analysis and recommendations on key economic policy issues affecting Zambia's development and growth.
          </Typography>
        </Box>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="30vh">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : briefs.length === 0 ? (
          <Typography align="center" color="text.secondary" sx={{ my: 6 }}>
            No policy briefs available yet.
          </Typography>
        ) : (
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
                spacing={{ xs: 2, sm: 3, md: 4 }} 
                wrap="nowrap" 
                sx={{ 
                  pb: { xs: 1, sm: 2 },
                  minWidth: 'min-content'
                }}
              >
                {briefs.map((brief) => (
                  <Grid 
                    key={brief.id}
                    sx={{ 
                      width: {
                        xs: 'calc(100vw - 48px)',
                        sm: '350px',
                        md: '400px'
                      },
                      minWidth: {
                        xs: '280px',
                        sm: '350px',
                        md: '400px'
                      }
                    }}
                  >
                    <BriefCard elevation={2}>
                      <Box sx={{ 
                        p: 3, 
                        flexGrow: 1, 
                        display: 'flex', 
                        flexDirection: 'column',
                        minHeight: '200px'
                      }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
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
                            {brief.title}
                          </Typography>
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
                          {brief.description}
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            <LocalOfferIcon sx={{ color: 'text.secondary', fontSize: '1rem', mr: 0.5 }} />
                            <Chip
                              label={brief.access === 'paid' ? 'Paid' : 'Free'}
                              size="small"
                              sx={{ 
                                bgcolor: brief.access === 'paid' ? '#AF9871' : '#1B2441',
                                color: 'white',
                                fontSize: '0.75rem'
                              }}
                            />
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
                            {brief.original_file_name ? brief.original_file_name : brief.file_name}
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
                            onClick={() => handleDownload(brief)}
                            disabled={downloading === brief.id}
                          >
                            {downloading === brief.id ? 'Preparing...' : 'Download Brief'}
                          </Button>
                        </Box>
                      </Box>
                    </BriefCard>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
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
                  Need a specific policy analysis?
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: { xs: 3, md: 0 },
                    fontSize: { xs: '1rem', sm: '1.1rem' }
                  }}
                >
                  Our team can provide custom policy analysis and recommendations tailored to your specific needs or sector.
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

export default PolicyBriefs; 