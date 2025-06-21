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

const BradElledge = () => {
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
                src="/assets/team/brad.jpg"
                alt="Brad Elledge"
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
              Brad Elledge
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mt: 1,
                fontWeight: 500,
                fontSize: { xs: '1.25rem', md: '1.5rem' }
              }}
            >
              Chief Business Development Officer / Business Development Manager
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                mt: 0.5,
                fontStyle: 'italic',
                opacity: 0.9
              }}
            >
              Frisco, Texas
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
                Experienced business manager with a proven track record of driving
                operational improvements and growth within the packaging,
                printing, and manufacturing sectors, especially in turnaround
                situations. Skilled in motivating teams, leading change, and
                implementing process improvements. Known for critical thinking,
                leadership, and a hands-on approach to problem-solving and team
                engagement.
              </Typography>
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
                  Season of Public Service | 1/2019 - Present
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Actively involved in volunteer and non-profit roles, including
                  teaching at Grace Covenant Academy, leading small groups,
                  contributing to the Finance Review Committee at Grace Covenant
                  Church, serving as President of the PR2 Homeowners Association,
                  and coaching with Young Entrepreneurs Academy.
                </Typography>
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
                  PLASTIFORM - Precision Formed Plastics, Irving, TX | 7/2017 - 12/2018
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Business Development Manager. Led efforts to restore business
                  growth through updated messaging, prospecting systems, and
                  sales strategies. Facilitated strategic alignment among senior
                  leadership during a company crisis.
                </Typography>
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
                  KBA North America (Koenig & Bauer), Dallas, TX | 10/2016 - 3/2017
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  National Service Sales Manager. Led a team promoting service
                  and maintenance programs to large-format press customers.
                  Successfully improved customer satisfaction by enhancing
                  equipment efficiency.
                </Typography>
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
                  NOSCO, Carrollton, TX | 2/2006 - 4/2016
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Director of Operations/Continuous Improvement. Managed a $21M
                  plant for Nosco, driving a 55% increase in gross profit and
                  reducing raw material inventory by 60%. Led Lean Manufacturing
                  transformations that improved quality, reduced costs, and
                  engaged employees.
                </Typography>
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
                  NASHUA CORPORATION, Jefferson City, TN | 9/1999 - 3/2003
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Plant Manager, Label Division. Improved operational profits
                  from 0.6% to 6.0% by reducing waste, increasing throughput, and
                  enhancing preventative maintenance.
                </Typography>
              </Box>
            </Box>

            {/* Education */}
            <Box sx={{ mb: 6 }}>
              <SectionTitle variant="h4">
                Education
              </SectionTitle>
              <List sx={{ listStyle: 'disc', pl: 3 }}>
                <ListItem sx={{ display: 'list-item', color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    Master of Management, Marketing Emphasis
                  </Typography>
                  {' | Northwestern University, Kellogg School of Management'}
                </ListItem>
                <ListItem sx={{ display: 'list-item', color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    B.S. in Business Administration, Finance & Accounting Emphasis
                  </Typography>
                  {' | University of California, Berkeley'}
                </ListItem>
              </List>
            </Box>

            {/* Contact Information */}
            <Box>
              <SectionTitle variant="h4">
                Contact Information
              </SectionTitle>
              <List>
                <ListItem sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary', mr: 1 }}>
                    Address:
                  </Typography>
                  11110 Williamsburg Lane, Frisco, Texas 75035
                </ListItem>
                <ListItem sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary', mr: 1 }}>
                    Phone:
                  </Typography>
                  865-242-1234
                </ListItem>
                <ListItem sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary', mr: 1 }}>
                    Email:
                  </Typography>
                  <Link 
                    href="mailto:brelledge@gmail.com"
                    sx={{ 
                      color: '#0F1E56',
                      textDecoration: 'none',
                      '&:hover': { color: '#C9AA74' }
                    }}
                  >
                    brelledge@gmail.com
                  </Link>
                </ListItem>
                <ListItem sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                  <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary', mr: 1 }}>
                    LinkedIn:
                  </Typography>
                  <Link 
                    href="https://www.linkedin.com/in/bradelledge"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: '#0F1E56',
                      textDecoration: 'none',
                      '&:hover': { color: '#C9AA74' }
                    }}
                  >
                    Brad Elledge
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

export default BradElledge; 