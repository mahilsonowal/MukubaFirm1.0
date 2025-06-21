import React from 'react';
import { Box, Container, Typography, Paper, List, ListItem, Link } from '@mui/material';
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

const ClementMalala = () => {
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
                src="/src/assets/team/malala.jpg"
                alt="Clement Malala"
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
              Clement Malala
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mt: 1,
                fontWeight: 500,
                fontSize: { xs: '1.25rem', md: '1.5rem' }
              }}
            >
              Director/Chief Executive Officer (CEO)
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                mt: 0.5,
                fontStyle: 'italic',
                opacity: 0.9
              }}
            >
              Mukuba Economic Research and Consulting Firm
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
                Clement Malala is the Director and CEO of Mukuba Economic Research
                and Consulting Firm, a dynamic firm committed to delivering
                high-quality economic research, business development solutions,
                and strategic consulting services. With a robust foundation in
                economics and a passion for advancing business solutions, Clement
                leads the firm with a forward-thinking approach and a focus on
                sustainable growth and innovation. His leadership is shaped by both his academic background and hands-on experience in the economic consulting space.
              </Typography>
            </Box>

            {/* Education */}
            <Box sx={{ mb: 6 }}>
              <SectionTitle variant="h4">
                Education & Academic Pursuits
              </SectionTitle>
              <List sx={{ listStyle: 'disc', pl: 3 }}>
                <ListItem sx={{ display: 'list-item', color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    Bachelor's Degree in Economics
                  </Typography>
                  {' | Mulungushi University, Kabwe, Zambia'}
                </ListItem>
                <ListItem sx={{ display: 'list-item', color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    Master's Degree in Economics (In Progress)
                  </Typography>
                  {' | Dibrugarh University, Assam, India'}
                </ListItem>
              </List>
              <Typography sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Clement is further enhancing his knowledge in macroeconomics,
                development economics, and business strategies while pursuing his
                Master's degree.
              </Typography>
            </Box>

            {/* Professional Experience */}
            <Box sx={{ mb: 6 }}>
              <SectionTitle variant="h4">
                Professional Experience
              </SectionTitle>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem', mb: 2 }}>
                Clement brings over two years of hands-on experience in economic
                research and business consulting. Under his leadership, Mukuba
                Economic Research and Consulting Firm has become a trusted partner
                for clients seeking expert insights, data-driven solutions, and
                strategic guidance to navigate complex economic landscapes. Clement is committed to driving growth and creating impactful change for businesses and organizations through robust economic analysis, actionable recommendations, and effective implementation strategies.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
                As the CEO, Clement oversees the firm's operations, manages client relationships, and drives the vision and mission of the firm, ensuring alignment with long-term business goals. His leadership is focused on fostering innovation and advancing economic thought in the firm's research initiatives.
              </Typography>
            </Box>

            {/* Key Responsibilities */}
            <Box sx={{ mb: 6 }}>
              <SectionTitle variant="h4">
                Key Responsibilities
              </SectionTitle>
              <List sx={{ listStyle: 'disc', pl: 3 }}>
                {[
                  "Leading the firm's strategic direction and business development efforts.",
                  "Overseeing the delivery of economic research and consulting projects.",
                  "Managing client relationships and ensuring satisfaction.",
                  "Developing new business opportunities and expanding the firm's market presence.", 
                  "Providing insights and recommendations to clients on economic trends and business development strategies.",
                  "Driving the firm's operational growth and ensuring quality in service delivery."
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

            {/* Skills & Expertise */}
            <Box sx={{ mb: 6 }}>
              <SectionTitle variant="h4">
                Skills & Expertise
              </SectionTitle>
              <List sx={{ listStyle: 'disc', pl: 3 }}>
                {[
                  'Economic Research & Analysis',
                  'Business Development & Strategy',
                  'Data Analysis & Forecasting',
                  'Market Trends & Economic Policy Advisory',
                  'Project Management & Client Relations',
                  'Leadership & Team Management'
                ].map((skill, index) => (
                  <ListItem 
                    key={index}
                    sx={{ 
                      display: 'list-item', 
                      color: 'text.secondary', 
                      fontSize: '1.1rem'
                    }}
                  >
                    {skill}
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Personal Vision */}
            <Box sx={{ mb: 6 }}>
              <SectionTitle variant="h4">
                Personal Vision
              </SectionTitle>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Clement is deeply committed to helping businesses leverage economic insights to make informed decisions and drive sustainable success. His vision is to empower clients with practical and actionable solutions that create long-term value, fostering innovation and resilience in the ever-changing global economy.
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
                  <Link 
                    href="mailto:cmalala13@gmail.com"
                    sx={{ 
                      color: '#0F1E56',
                      textDecoration: 'none',
                      '&:hover': { color: '#C9AA74' }
                    }}
                  >
                    cmalala13@gmail.com
                  </Link>
                </ListItem>
                <ListItem sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary', mr: 1 }}>
                    Phone:
                  </Typography>
                  +260 979 618 112 / +91 708 632 8466
                </ListItem>
                <ListItem sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary', mr: 1 }}>
                    Website:
                  </Typography>
                  <Link 
                    href="https://www.mukubaconsulting.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: '#0F1E56',
                      textDecoration: 'none',
                      '&:hover': { color: '#C9AA74' }
                    }}
                  >
                    www.mukubaconsulting.com
                  </Link>
                </ListItem>
                <ListItem sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary', mr: 1 }}>
                    LinkedIn:
                  </Typography>
                  <Link 
                    href="https://www.linkedin.com/in/clement-malala-4585611a6"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: '#0F1E56',
                      textDecoration: 'none',
                      '&:hover': { color: '#C9AA74' }
                    }}
                  >
                    Clement Malala
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

export default ClementMalala; 