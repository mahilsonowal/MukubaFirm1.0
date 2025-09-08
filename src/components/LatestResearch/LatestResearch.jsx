import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Button, Paper, Link, CircularProgress } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link as RouterLink } from 'react-router-dom';
import { supabase } from '../../utils/supabaseClient';

const LatestResearch = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentReports = async () => {
      setLoading(true);
      try {
        // Fetch from multiple tables and combine
        const [reportsResult, researchResult, policyResult, budgetResult] = await Promise.all([
          supabase.from('reports').select('*, category: "Annual Reports", type: "annual-report"').order('created_at', { ascending: false }).limit(1),
          supabase.from('research_work').select('*, category: "Research Work", type: "research-work"').order('created_at', { ascending: false }).limit(1),
          supabase.from('policy_briefs').select('*, category: "Policy Briefs", type: "policy-brief"').order('created_at', { ascending: false }).limit(1),
          supabase.from('budget_analysis').select('*, category: "Budget Analysis", type: "budget-analysis"').order('created_at', { ascending: false }).limit(1)
        ]);

        const allReports = [
          ...(reportsResult.data || []),
          ...(researchResult.data || []),
          ...(policyResult.data || []),
          ...(budgetResult.data || [])
        ];

        // Sort by created_at and take the 3 most recent
        const sortedReports = allReports
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 3);

        setReports(sortedReports);
      } catch (error) {
        console.error('Error fetching recent reports:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentReports();
  }, []);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              color: '#1B2441',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: '100%',
                height: '2px',
                bgcolor: '#C9AA74'
              }
            }}
          >
            Latest Research & Reports
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}
          >
            Explore our latest publications, research papers, and economic analyses
          </Typography>
        </Box>

        {/* Loading State */}
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
            <CircularProgress sx={{ color: '#C9AA74' }} />
          </Box>
        ) : reports.length > 0 ? (
          <>
            {/* Mobile Horizontal Scroll */}
            <Box 
              sx={{ 
                display: { xs: 'block', md: 'none' },
                overflowX: 'auto',
                pb: 3,
                mx: -2,
                px: 2,
                '&::-webkit-scrollbar': {
                  height: '6px'
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1',
                  borderRadius: '3px'
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#C9AA74',
                  borderRadius: '3px'
                }
              }}
            >
              <Box sx={{ display: 'flex', gap: 3, minWidth: 'max-content' }}>
                {reports.map((report, index) => (
              <Paper
                key={index}
                elevation={2}
                sx={{
                  width: 300,
                  flexShrink: 0,
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: 6
                  }
                }}
              >
                <Box sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        bgcolor: '#1B2441',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: '20px',
                        fontWeight: 600
                      }}
                    >
                      {report.category}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5
                      }}
                    >
                      <DescriptionIcon fontSize="small" />
                      {report.created_at ? new Date(report.created_at).toLocaleDateString() : ''}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: '#1B2441'
                    }}
                  >
                    {report.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 3
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
                      borderTop: '1px solid',
                      borderColor: 'divider'
                    }}
                  >
                    <Link
                      component={RouterLink}
                      to={`/${report.type === 'annual-report' ? 'reports/annual-reports' : 
                           report.type === 'research-work' ? 'research/research-work' : 
                           report.type === 'policy-brief' ? 'research/policy-briefs' :
                           report.type === 'budget-analysis' ? 'research/budget-analysis' :
                           'research'}`}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: '#C9AA74',
                        textDecoration: 'none',
                        fontWeight: 600,
                        '&:hover': {
                          color: '#1B2441'
                        }
                      }}
                    >
                      <MenuBookIcon fontSize="small" />
                      View Details
                    </Link>

                    <Link
                      component={RouterLink}
                      to={`/${report.type === 'annual-report' ? 'reports/annual-reports' : 
                           report.type === 'research-work' ? 'research/research-work' : 
                           report.type === 'policy-brief' ? 'research/policy-briefs' :
                           report.type === 'budget-analysis' ? 'research/budget-analysis' :
                           'research'}`}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: '#C9AA74',
                        textDecoration: 'none',
                        fontWeight: 600,
                        '&:hover': {
                          color: '#1B2441'
                        }
                      }}
                    >
                      <DownloadIcon fontSize="small" />
                      Download
                    </Link>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>

        {/* Desktop Grid */}
        <Grid 
          container 
          spacing={4} 
          sx={{ 
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'row',
            justifyContent: 'space-between',
            overflowX: 'auto',
            pb: 3,
            '&::-webkit-scrollbar': {
              height: '6px'
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '3px'
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#C9AA74',
              borderRadius: '3px'
            }
          }}
        >
          {reports.map((report, index) => (
            <Grid 
              key={index} 
              sx={{ 
                minWidth: 300,
                maxWidth: 350,
                flexShrink: 0,
                width: 'auto !important'
              }}
            >
              <Paper
                elevation={2}
                sx={{
                  height: '100%',
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: 6
                  }
                }}
              >
                <Box sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        bgcolor: '#1B2441',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: '20px',
                        fontWeight: 600
                      }}
                    >
                      {report.category}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5
                      }}
                    >
                      <DescriptionIcon fontSize="small" />
                      {report.created_at ? new Date(report.created_at).toLocaleDateString() : ''}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: '#1B2441'
                    }}
                  >
                    {report.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 3
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
                      borderTop: '1px solid',
                      borderColor: 'divider'
                    }}
                  >
                    <Link
                      component={RouterLink}
                      to={`/${report.type === 'annual-report' ? 'reports/annual-reports' : 
                           report.type === 'research-work' ? 'research/research-work' : 
                           report.type === 'policy-brief' ? 'research/policy-briefs' :
                           report.type === 'budget-analysis' ? 'research/budget-analysis' :
                           'research'}`}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: '#C9AA74',
                        textDecoration: 'none',
                        fontWeight: 600,
                        '&:hover': {
                          color: '#1B2441'
                        }
                      }}
                    >
                      <MenuBookIcon fontSize="small" />
                      View Details
                    </Link>

                    <Link
                      component={RouterLink}
                      to={`/${report.type === 'annual-report' ? 'reports/annual-reports' : 
                           report.type === 'research-work' ? 'research/research-work' : 
                           report.type === 'policy-brief' ? 'research/policy-briefs' :
                           report.type === 'budget-analysis' ? 'research/budget-analysis' :
                           'research'}`}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: '#C9AA74',
                        textDecoration: 'none',
                        fontWeight: 600,
                        '&:hover': {
                          color: '#1B2441'
                        }
                      }}
                    >
                      <DownloadIcon fontSize="small" />
                      Download
                    </Link>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
          </>
        ) : (
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
              py: 4
            }}
          >
            No recent publications available.
          </Typography>
        )}

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            component={RouterLink}
            to="/reports/annual-reports"
            sx={{
              bgcolor: '#1B2441',
              color: 'white',
              px: 4,
              py: 1.5,
              '&:hover': {
                bgcolor: '#2A365F'
              }
            }}
          >
            Browse All Reports
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LatestResearch; 