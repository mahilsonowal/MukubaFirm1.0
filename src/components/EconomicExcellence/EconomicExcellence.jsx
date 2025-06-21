import { Box, Container, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const EconomicExcellence = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: '#f8f9fa'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 6 }
          }}
        >

        {/* Left Image */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: '100%', md: '50%' },
              height: { xs: '300px', md: '500px' },
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            <Box
              component="img"
              src="/src/assets/hero2.jpg"
              alt="Economic Excellence"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'fit',
              }}
            />
          </Box>
          {/* Right Content */} 
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: '100%', md: '50%' }
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: '#C9AA74',
                fontWeight: 600,
                mb: 2,
                textTransform: 'uppercase',
                letterSpacing: 1
              }}
            >
              Economic Excellence
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 3,
                color: '#0B1821'
              }}
            >
              Empowering with insights
            </Typography>
            <Typography
              sx={{
                mb: 3,
                color: 'text.secondary',
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              Mukuba Economic Research and Consulting Firm stands out as a premier consulting firm in Lusaka, Zambia. We specialize in delivering in-depth economic research, thoughtful policy analysis, and data-driven strategies tailored to the unique challenges our clients face.
            </Typography>
            <Typography
              sx={{
                mb: 4,
                color: 'text.secondary',
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              Our mission is to equip organizations with robust economic insights and practical consultancy services, empowering them to thrive in complex environments.
            </Typography>
            <Button
              component={Link}
              to="/pages/contact"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: '#0B1821',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#C9AA74',
                },
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              Get in touch
            </Button>
          </Box>


        </Box>
      </Container>
    </Box>
  );
};

export default EconomicExcellence; 