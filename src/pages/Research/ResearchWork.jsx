import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DescriptionIcon from '@mui/icons-material/Description';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ListAltIcon from '@mui/icons-material/ListAlt';

const CategoryCard = styled(Paper)(({ theme }) => ({
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

const researchCategories = [
  {
    id: 'policy-briefs',
    title: 'Policy Briefs',
    description: 'Concise analysis and recommendations on key economic policy issues affecting Zambia.',
    icon: DescriptionIcon,
    link: '/research/policy-briefs',
    count: '12 Publications'
  },
  {
    id: 'working-papers',
    title: 'Working Papers',
    description: 'In-depth research papers exploring economic trends, challenges, and opportunities.',
    icon: MenuBookIcon,
    link: '/research/working-papers',
    count: '8 Papers'
  },
  {
    id: 'budget-analysis',
    title: 'Budget Analysis Reports',
    description: 'Detailed analysis of national and sector-specific budgets and their economic implications.',
    icon: AssessmentIcon,
    link: '/research/budget-analysis',
    count: '6 Reports'
  },
  {
    id: 'parliamentary',
    title: 'Parliamentary Submissions',
    description: 'Expert testimonies and submissions to parliamentary committees on economic matters.',
    icon: AccountBalanceIcon,
    link: '/research/parliamentary-submissions',
    count: '4 Submissions'
  },
  {
    id: 'miscellaneous',
    title: 'Miscellaneous Research',
    description: 'Additional research work including case studies, economic reviews, and special reports.',
    icon: ListAltIcon,
    link: '/research/miscellaneous',
    count: '10 Publications'
  }
];

const ResearchWork = () => {
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
            Research & Publications
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
            Explore our comprehensive collection of economic research, analysis, and insights that shape policy and drive development in Zambia.
          </Typography>
        </Box>

        {/* Categories Grid */}
        <Grid 
          container 
          display="flex" 
          justifyContent="center" 
          alignItems="stretch" 
          spacing={2}
          sx={{ maxWidth: '1200px', mx: 'auto' }}
        >
          {researchCategories.map((category) => (
            <Grid 
              key={category.id}
              sx={{ 
                flexBasis: { xs: '100%', sm: '50%', md: '33.33%' },
                maxWidth: { xs: '100%', sm: '50%', md: '33.33%' },
                display: 'flex',
                height: 'auto'
              }}
            >
              <Link 
                to={category.link}
                style={{ 
                  textDecoration: 'none', 
                  display: 'flex',
                  width: '100%'
                }}
              >
                <CategoryCard elevation={2}>
                  <Box sx={{ 
                    p: 3, 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    minHeight: '200px'
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <category.icon sx={{ color: '#C9AA74', fontSize: '2rem' }} />
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ ml: 'auto', fontSize: '0.875rem' }}
                      >
                        {category.count}
                      </Typography>
                    </Box>

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
                      {category.title}
                    </Typography>

                    <Typography 
                      sx={{ 
                        color: 'text.secondary',
                        mb: 2,
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                        flexGrow: 1
                      }}
                    >
                      {category.description}
                    </Typography>

                    <Box 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        color: '#C9AA74',
                        '&:hover': {
                          color: '#AF9871',
                        }
                      }}
                    >
                      <Typography 
                        sx={{ 
                          fontSize: '0.875rem',
                          mr: 1
                        }}
                      >
                        View Publications
                      </Typography>
                      <ArrowForwardIcon sx={{ fontSize: '1rem' }} />
                    </Box>
                  </Box>
                </CategoryCard>
              </Link>
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
                  Need custom research?
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: { xs: 3, md: 0 },
                    fontSize: { xs: '1rem', sm: '1.1rem' }
                  }}
                >
                  Our team of experts can provide tailored research and analysis to meet your specific needs. Let's discuss your research requirements.
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
                  Request Research Services
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default ResearchWork; 