import React from 'react';
import { Box, Container, Typography, Paper, List, ListItem, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

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

const ThomsonSilomba = () => {
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
                src="/assets/staff/thomson-silomba.jpg"
                alt="Thomson Silomba"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
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
              Thomson Silomba
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mt: 1,
                fontWeight: 500,
                fontSize: { xs: '1.25rem', md: '1.5rem' }
              }}
            >
              Program Director
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                mt: 0.5,
                fontStyle: 'italic',
                opacity: 0.9
              }}
            >
              Pathways of Success Program
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
                A dedicated leader driven by Christian faith, diversity, accountability, transparency, 
                growth, development, openness, fairness, equity, sustainability, teamwork, networking, 
                management, and decolonisation principles.
              </Typography>
            </Box>

            {/* Key Achievements */}
            <Box sx={{ mb: 6 }}>
              <SectionTitle variant="h4">
                Key Achievements
              </SectionTitle>
              <List sx={{ listStyle: 'disc', pl: 3 }}>
                {[
                  'Founder and Lead Organiser of Rethinking Economics Zambia network',
                  'Founder and former President of Mulungushi Liaise Economics Society (MuLEs)',
                  '10+ years of stewardship at St Peter\'s Congregation, Kabwe',
                  'Established seven Rethinking Economics Groups contributing to Global South and North action circles',
                  'Published author with works launched in Berlin, Germany and Zambian Magazine Program'
                ].map((achievement, index) => (
                  <ListItem 
                    key={index}
                    sx={{ 
                      display: 'list-item', 
                      color: 'text.secondary', 
                      fontSize: '1.1rem',
                      lineHeight: 1.8
                    }}
                  >
                    {achievement}
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Education */}
            <Box sx={{ mb: 6 }}>
              <SectionTitle variant="h4">
                Education
              </SectionTitle>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                Degree in Agriculture Business Management from Mulungushi University, Kabwe, Zambia
              </Typography>
            </Box>

            {/* Contact Information */}
            <Box>
              <SectionTitle variant="h4">
                Contact Information
              </SectionTitle>
              <List>
                <ListItem sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary', mr: 1 }}>
                    Email:
                  </Typography>
                  <MuiLink 
                    href="mailto:silombathomson60@gmail.com"
                    sx={{ 
                      color: '#0F1E56',
                      textDecoration: 'none',
                      '&:hover': { color: '#C9AA74' }
                    }}
                  >
                    silombathomson60@gmail.com
                  </MuiLink>
                  {', '}
                  <MuiLink 
                    href="mailto:thomson.silomba@rethinkingeconomics.org"
                    sx={{ 
                      color: '#0F1E56',
                      textDecoration: 'none',
                      '&:hover': { color: '#C9AA74' }
                    }}
                  >
                    thomson.silomba@rethinkingeconomics.org
                  </MuiLink>
                </ListItem>
                <ListItem sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary', mr: 1 }}>
                    Phone:
                  </Typography>
                  +260 971 602 312 / +260 960 582 136
                </ListItem>
                <ListItem sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary', mr: 1 }}>
                    LinkedIn:
                  </Typography>
                  <MuiLink 
                    href="https://www.linkedin.com/in/thomson-silomba-1270531b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: '#0F1E56',
                      textDecoration: 'none',
                      '&:hover': { color: '#C9AA74' }
                    }}
                  >
                    Thomson Silomba
                  </MuiLink>
                </ListItem>
              </List>
            </Box>
          </ContentSection>
        </ProfileContainer>
      </Container>
    </Box>
  );
};

export default ThomsonSilomba; 