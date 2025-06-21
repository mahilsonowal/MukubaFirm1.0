import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, Chip, TextField, Select, MenuItem, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionIcon from '@mui/icons-material/Description';

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

const categories = [
  { id: 'all', name: 'All Research' },
  { id: 'policy-briefs', name: 'Policy Briefs' },
  { id: 'working-papers', name: 'Working Papers' },
  { id: 'case-studies', name: 'Case Studies' },
  { id: 'technical-notes', name: 'Technical Notes' }
];

const researchPapers = [
  {
    id: 'digital-economy-2024',
    title: 'Digital Economy Transformation in Zambia',
    category: 'policy-briefs',
    description: 'Analysis of digital transformation trends and their impact on economic growth and development.',
    tags: ['Digital Economy', 'Innovation', 'Technology'],
    fileSize: '1.8 MB',
    date: 'March 2024',
    authors: ['Dr. Sarah Mwanza', 'John Banda']
  },
  {
    id: 'sme-financing',
    title: 'SME Financing Challenges and Solutions',
    category: 'working-papers',
    description: 'Comprehensive study on access to finance for small and medium enterprises in Zambia.',
    tags: ['SMEs', 'Finance', 'Economic Development'],
    fileSize: '2.5 MB',
    date: 'February 2024',
    authors: ['Dr. Michael Phiri', 'Elizabeth Tembo']
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy Investment Opportunities',
    category: 'case-studies',
    description: 'Case study analysis of successful renewable energy projects and investment potential.',
    tags: ['Energy', 'Investment', 'Sustainability'],
    fileSize: '3.2 MB',
    date: 'January 2024',
    authors: ['Prof. David Mutati']
  },
  {
    id: 'trade-corridors',
    title: 'Regional Trade Corridors Development',
    category: 'technical-notes',
    description: 'Technical analysis of trade corridor development and its economic implications.',
    tags: ['Trade', 'Infrastructure', 'Regional Integration'],
    fileSize: '2.1 MB',
    date: 'December 2023',
    authors: ['Dr. Lisa Mulenga', 'James Kapesa']
  }
];

const MiscellaneousResearch = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPapers = researchPapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
            Miscellaneous Research
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
            Explore our diverse collection of research papers, policy briefs, working papers, and technical notes.
          </Typography>
        </Box>

        {/* Search and Filter Section */}
        <Box sx={{ bgcolor: 'white', borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Container maxWidth="lg" sx={{ py: 3 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid xs={12} md={8}>
                <TextField
                  fullWidth
                  placeholder="Search research papers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#1B2441',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1B2441',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <FilterListIcon sx={{ color: 'text.secondary' }} />
                  <Select
                    fullWidth
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1B2441',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1B2441',
                      },
                    }}
                  >
                    {categories.map(category => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Research Papers Grid */}
        <Grid 
          container 
          display="flex" 
          justifyContent="center" 
          alignItems="stretch" 
          spacing={2}
          sx={{ maxWidth: '1200px', mx: 'auto' }}
        >
          {filteredPapers.map((paper) => (
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
                          {paper.title}
                        </Typography>
                        <Chip 
                          label={categories.find(c => c.id === paper.category)?.name}
                          size="small"
                          sx={{ 
                            ml: 2,
                            bgcolor: '#C9AA74',
                            color: 'white',
                            fontSize: '0.75rem'
                          }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', fontSize: '0.875rem' }}>
                        <CalendarTodayIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                        {paper.date}
                      </Box>
                    </Box>
                    <DescriptionIcon sx={{ color: '#C9AA74', fontSize: '1.5rem' }} />
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

                  {/* Tags */}
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      <LocalOfferIcon sx={{ color: 'text.secondary', fontSize: '1rem', mr: 0.5 }} />
                      {paper.tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
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
                      By: {paper.authors.join(', ')} • PDF • {paper.fileSize}
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
              </ResearchCard>
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
                  to="/contact"
                  variant="contained"
                  endIcon={<DownloadIcon />}
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
    </Box>
  );
};

export default MiscellaneousResearch; 