import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, Chip, CircularProgress, Alert, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DescriptionIcon from '@mui/icons-material/Description';
import ShareIcon from '@mui/icons-material/Share';
import { supabase } from '../../utils/supabaseClient';
import { shareDocument } from '../../utils/shareUtils';
import { useAuth } from '../../context/AuthContext';

const ResearchCard = styled(Paper)(({ theme }) => ({
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

const MiscellaneousResearch = () => {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(null);
  const [shareSnackbar, setShareSnackbar] = useState({ open: false, message: '' });
  const { user } = useAuth();

  useEffect(() => {
    const fetchPapers = async () => {
      setLoading(true);
      setError('');
      try {
        const { data, error } = await supabase
          .from('miscellaneous_research')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) throw error;
        setPapers(data || []);
      } catch (err) {
        setError('Failed to load research papers.');
      } finally {
        setLoading(false);
      }
    };
    fetchPapers();
  }, []);

  const handleShare = async (paper) => {
    await shareDocument(paper, 'miscellaneous-research', setShareSnackbar);
  };

  const handleCloseSnackbar = () => {
    setShareSnackbar({ open: false, message: '' });
  };

  const handleDownload = async (paper) => {
    setDownloading(paper.id);
    try {
      let url = paper.file_url;
      if (paper.access === 'paid') {
        const { data, error } = await supabase
          .storage
          .from('miscellaneous-research')
          .createSignedUrl(paper.file_name, 60 * 60);
        if (error) throw error;
        url = data.signedUrl;
      }
      window.open(url, '_blank');
    } catch (err) {
      alert('Failed to download paper.');
    } finally {
      setDownloading(null);
    }
  };

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
            Miscellaneous Research Papers
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
            Explore our collection of miscellaneous research papers and special reports.
          </Typography>
        </Box>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="30vh">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : papers.length === 0 ? (
          <Typography align="center" color="text.secondary" sx={{ my: 6 }}>
            No research papers available yet.
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
                <ResearchCard elevation={2}>
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
                          {paper.authors && (
                            <>{paper.authors}</>
                          )}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', fontSize: '0.875rem' }}>
                          <DescriptionIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                          {paper.created_at ? new Date(paper.created_at).toLocaleDateString() : ''}
                        </Box>
                      </Box>
                    </Box>

                    <Typography 
                      sx={{ 
                        color: 'text.secondary',
                        mb: 2,
                        fontSize: '0.875rem',
                        lineHeight: 1.5
                      }}
                    >
                      {paper.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {paper.keywords && Array.isArray(paper.keywords) && paper.keywords.map((keyword, index) => (
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
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 2,
                        pt: 2,
                        mt: 'auto',
                        borderTop: 1,
                        borderColor: 'divider'
                      }}
                    >
                      <Button
                        startIcon={<DownloadIcon sx={{ fontSize: '1rem' }} />}
                        sx={{ 
                          color: '#C9AA74',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          '&:hover': { 
                            color: '#AF9871',
                            bgcolor: 'transparent'
                          }
                        }}
                        onClick={() => handleDownload(paper)}
                        disabled={downloading === paper.id}
                      >
                        {downloading === paper.id ? 'Preparing...' : 'DOWNLOAD PAPER'}
                      </Button>
                      <Button
                        startIcon={<ShareIcon sx={{ fontSize: '1rem' }} />}
                        sx={{ 
                          color: '#1B2441',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          '&:hover': { 
                            color: '#C9AA74',
                            bgcolor: 'transparent'
                          }
                        }}
                        onClick={() => handleShare(paper)}
                        title="Share this research paper (Login required to access)"
                      >
                        SHARE
                      </Button>
                    </Box>
                  </Box>
                </ResearchCard>
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
                  Looking for specific research?
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: { xs: 3, md: 0 },
                    fontSize: { xs: '1rem', sm: '1.1rem' }
                  }}
                >
                  Our research team can conduct custom research studies tailored to your specific needs and requirements.
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
                  Request Custom Research
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

export default MiscellaneousResearch; 