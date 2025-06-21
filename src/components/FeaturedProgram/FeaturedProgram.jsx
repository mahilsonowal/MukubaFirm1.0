import { Box, Container, Typography, Grid, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Link } from 'react-router-dom';

const FeaturedProgram = () => {
  const features = [
    {
      icon: <PersonIcon sx={{ fontSize: 40, color: '#C9AA74' }} />,
      title: 'Expert Mentorship',
      description: 'Learn from industry leaders'
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#C9AA74' }} />,
      title: 'Practical Skills',
      description: 'Hands-on training and workshops'
    },
    {
      icon: <BusinessCenterIcon sx={{ fontSize: 40, color: '#C9AA74' }} />,
      title: 'Industry Network',
      description: 'Connect with professionals'
    },
    {
      icon: <WorkspacePremiumIcon sx={{ fontSize: 40, color: '#C9AA74' }} />,
      title: 'Certification',
      description: 'Receive recognized credentials'
    }
  ];

  const programFocus = [
    'Youth empowerment and leadership development',
    'Organizational capacity building',
    'Economic empowerment strategies',
    'Sustainable community development'
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white' }}>
      <Container sx={{ display: { xs: 'block', md: 'flex' } }} maxWidth="lg">
        <Box sx={{ maxWidth: '800px',width: { xs: '100%', md: '50%' }, mx: 'auto', mb: { xs: 4, md: 6 } }}>
          <Typography 
            variant="overline" 
            sx={{
              color: '#8B7355',
              display: 'block',
              mb: 2,
              fontSize: { xs: '0.7rem', md: '0.75rem' }
            }}
          >
            FEATURED PROGRAM
          </Typography>
          
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              color: '#1B2441'
            }}
          >
            Pathways of Success Program
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              mb: 5,
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}
          >
            Unlock your potential and accelerate your career growth with our comprehensive professional development program. Get access to expert mentorship, industry insights, and practical skills training.
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mb: 4 }}>
            {features.map((feature, index) => (
              <Box 
                key={index} 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  flex: '1 1 calc(50% - 32px)',
                  minWidth: 'calc(50% - 32px)'
                }}
              >
                <Box sx={{ color: '#C9AA74' }}>
                  {feature.icon}
                </Box>
                <Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      mb: 0.5,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      color: '#1B2441'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.8rem', md: '0.875rem' } }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: '#1B2441',
              color: 'white',
              px: 3,
              py: 1.5,
              '&:hover': {
                bgcolor: '#2A365F'
              }
            }}
            href="/program/pathways-details"
          >
            Learn More About The Program
          </Button>
        </Box>

        {/* Black Box Section */}
        <Box
          sx={{
            position: 'relative',
            bgcolor: '#000',
            color: 'white',
            p: { xs: 3, md: 4 },
            borderRadius: 2,
            mt: 4,
            maxWidth: '800px',
            mx: 'auto',
            overflow: 'hidden',
            minHeight: { xs: 350, md: 400 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Video Background */}
          <Box
            component="video"
            src="/assets/The_Pathways_of_Succ.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Featured Program Background Video"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              opacity: 0.35,
              pointerEvents: 'none',
            }}
          />
          {/* Overlay for readability */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(0, 0, 0, 0)',
              zIndex: 1,
            }}
          />
          {/* Content */}
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography 
              variant="h4" 
              component="h3" 
              sx={{ 
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              The Pathways of Success Program
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                mb: 3,
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}
            >
              A transformative initiative that focuses on:
            </Typography>

            <Box component="ul" sx={{ pl: 2, mb: 4 }}>
              {programFocus.map((focus, index) => (
                <Typography
                  key={index}
                  component="li"
                  sx={{
                    mb: 1.5,
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    display: 'flex',
                    alignItems: 'center',
                    '&::before': {
                      content: '""',
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      bgcolor: '#C9AA74',
                      mr: 2
                    }
                  }}
                >
                  {focus}
                </Typography>
              ))}
            </Box>

            <Button
              variant="contained"
              sx={{
                bgcolor: 'white',
                color: 'black',
                '&:hover': {
                  bgcolor: '#f5f5f5'
                }
              }}
              component={Link}
              to="/pages/contact"
            >
              Apply Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProgram;