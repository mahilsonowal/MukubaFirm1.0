import React from 'react';
import { Box, Container, Typography, Paper, List, ListItem, Link, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProfileContainer = styled(Paper)(({ theme }) => ({
  maxWidth: '1000px',
  margin: '0 auto',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  borderRadius: '12px',
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: 'linear-gradient(to right, #0F1E56, #1B2441)',
  color: 'white',
  textAlign: 'center',
  padding: theme.spacing(8, 2),
}));

const ProfileImage = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '128px',
  height: '128px',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '4px solid white',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 6),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#0F1E56',
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  fontSize: '1.75rem',
}));

const BlessingsNtesa = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      bgcolor: '#f5f5f5',
      py: 6,
      px: { xs: 2, md: 4, lg: 8 }
    }}>
      <Container maxWidth="lg">
        <ProfileContainer>
          {/* Header Section */}
          <HeaderSection>
            <ProfileImage>
              <img
                src="/assets/team/blessings.jpg"
                alt="Blessings Ntesa"

              />
            </ProfileImage>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700,
                mt: 8,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Blessings Ntesa
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mt: 1,
                fontWeight: 500,
                fontSize: { xs: '1.25rem', md: '1.5rem' }
              }}
            >
              Managing Director
            </Typography>
          </HeaderSection>

          {/* Content Section */}
          <ContentSection>
            {/* Professional Summary */}
            <Box sx={{ mb: 6 }}>
              <SectionTitle variant="h4">
                Professional Summary
              </SectionTitle>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Being a bachelor's degree holder in Arts of Economics and passionate about risk management
                and investment analysis, trade facilitation, and social economic sustainability. My main
                objective is to best apply my skills for the benefit of my employer. And also, to identify areas
                of intervention to ensure an efficient and effective distribution of resources to all levels of the
                company/organization for profitable outcomes.
              </Typography>
            </Box>

            {/* Key Skills */}
            <Box sx={{ mb: 6 }}>
              <SectionTitle variant="h4">
                Key Skills
              </SectionTitle>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <List sx={{ listStyle: 'disc', pl: 3 }}>
                    {[
                      'Problem solving using initiative',
                      'Teamwork and interpersonal skills',
                      'Commercial and cultural awareness',
                      'Logical and critical thinking skills',
                      'MS Excel, Word and PowerPoint',
                      'SPSS, E-views and Stata data analysis'
                    ].map((skill, index) => (
                      <ListItem 
                        key={index}
                        sx={{ 
                          display: 'list-item', 
                          color: 'text.secondary', 
                          fontSize: '1.1rem',
                          lineHeight: 1.8
                        }}
                      >
                        {skill}
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <List sx={{ listStyle: 'disc', pl: 3 }}>
                    {[
                      'Data analysis',
                      'Research skills',
                      'Presentation skills',
                      'Planning skills',
                      'Virtual meeting software proficiency',
                      'Complex problem simplification'
                    ].map((skill, index) => (
                      <ListItem 
                        key={index}
                        sx={{ 
                          display: 'list-item', 
                          color: 'text.secondary', 
                          fontSize: '1.1rem',
                          lineHeight: 1.8
                        }}
                      >
                        {skill}
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Box>

            {/* Professional Experience */}
            <Box sx={{ mb: 6 }}>
              <SectionTitle variant="h4">
                Professional Experience
              </SectionTitle>

              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 1,
                    fontSize: '1.25rem'
                  }}
                >
                  Sales Executive / Finance Assistant | Israjah Enterprises Limited
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'text.secondary',
                    mb: 2,
                    fontSize: '1rem'
                  }}
                >
                  April 2024 - Present
                </Typography>
                <List sx={{ listStyle: 'disc', pl: 3 }}>
                  {[
                    'Record-keeping and managing invoices',
                    'Payroll management and cost control optimization',
                    'Lead generation and relationship building',
                    'Sales closing and report preparation',
                    'Compliance, audit, and tax payment processing'
                  ].map((item, index) => (
                    <ListItem 
                      key={index}
                      sx={{ 
                        display: 'list-item', 
                        color: 'text.secondary', 
                        fontSize: '1.1rem',
                        lineHeight: 1.8
                      }}
                    >
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 1,
                    fontSize: '1.25rem'
                  }}
                >
                  Assistant Marketing Manager | Ntesa General Dealers
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'text.secondary',
                    mb: 2,
                    fontSize: '1rem'
                  }}
                >
                  2022 - 2023
                </Typography>
                <List sx={{ listStyle: 'disc', pl: 3 }}>
                  {[
                    'Identified and designed promotional events',
                    'Organized and conducted market research',
                    'Maintained marketing database',
                    'Monitored and supervised sales activities',
                    'Developed marketing strategies'
                  ].map((item, index) => (
                    <ListItem 
                      key={index}
                      sx={{ 
                        display: 'list-item', 
                        color: 'text.secondary', 
                        fontSize: '1.1rem',
                        lineHeight: 1.8
                      }}
                    >
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 1,
                    fontSize: '1.25rem'
                  }}
                >
                  Assistant Social Economic Planner | Mufumbwe Town Council
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'text.secondary',
                    mb: 2,
                    fontSize: '1rem'
                  }}
                >
                  2021 (3 months)
                </Typography>
                <List sx={{ listStyle: 'disc', pl: 3 }}>
                  {[
                    'Assisted in identifying and designing economic and social projects',
                    'Conducted qualitative and quantitative research',
                    'Facilitated community development initiatives',
                    'Supported project monitoring and supervision'
                  ].map((item, index) => (
                    <ListItem 
                      key={index}
                      sx={{ 
                        display: 'list-item', 
                        color: 'text.secondary', 
                        fontSize: '1.1rem',
                        lineHeight: 1.8
                      }}
                    >
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            {/* Education */}
            <Box sx={{ mb: 6 }}>
              <SectionTitle variant="h4">
                Education
              </SectionTitle>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: 'text.primary',
                      fontSize: '1.25rem'
                    }}
                  >
                    MBA - Finance
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                    Copperbelt University, Kitwe | September 2024 - Present
                  </Typography>
                </Box>
                <Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: 'text.primary',
                      fontSize: '1.25rem'
                    }}
                  >
                    Bachelor of Economics (Merit)
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                    Mulungushi University, Kabwe | September 2019 - June 2023
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Contact Information */}
            <Box>
              <SectionTitle variant="h4">
                Contact Information
              </SectionTitle>
              <List>
                <ListItem sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary', mr: 1 }}>
                    Phone:
                  </Typography>
                  +260 979 140 962
                </ListItem>
                <ListItem sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary', mr: 1 }}>
                    Email:
                  </Typography>
                  <Link 
                    href="mailto:blessingsntesa20001@gmail.com"
                    sx={{ 
                      color: '#0F1E56',
                      textDecoration: 'none',
                      '&:hover': { color: '#C9AA74' }
                    }}
                  >
                    blessingsntesa20001@gmail.com
                  </Link>
                </ListItem>
                <ListItem sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary', mr: 1 }}>
                    LinkedIn:
                  </Typography>
                  <Link 
                    href="https://www.linkedin.com/in/blessings-ntesa-7b46bb1a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: '#0F1E56',
                      textDecoration: 'none',
                      '&:hover': { color: '#C9AA74' }
                    }}
                  >
                    Blessings Ntesa
                  </Link>
                </ListItem>
              </List>
            </Box>
          </ContentSection>
        </ProfileContainer>
      </Container>
    </Box>
  );
};

export default BlessingsNtesa; 