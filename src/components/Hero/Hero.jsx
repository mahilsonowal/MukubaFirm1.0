import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import SEOHead from '../common/SEOHead';

const Hero = () => {
  return (
    <>
      <SEOHead 
        title="Empowering Zambia with Expert Economic Solutions"
        description="Leading economic research and consulting firm in Zambia. Expert analysis, policy briefs, feasibility studies, and economic development solutions. Trusted by government and private sector."
        keywords={['mukuba firm', 'mukuba economic research', 'mukuba consulting', 'mukuba firm', 'mukuba consulting firm', 'consulting firm', 'Zambia', 'economic development', 'policy analysis', 'feasibility studies', 'capacity building', 'economic indicators', 'GDP analysis', 'parliamentary submissions']}
        image="/assets/hero7.webp"
      />
      <Box 
        sx={{ 
          position: 'relative',
          minHeight: { xs: '80vh', sm: '80vh', md: '100vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'visible',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(/assets/hero7.webp), url(/assets/hero7.jpg)`, 
            backgroundSize: 'cover',
            backgroundPosition: { xs: 'right', md: 'center' },
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
            transition: 'background-image 0.3s ease-in-out',
          }
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative', 
            zIndex: 2,
            px: { xs: 2, sm: 3, md: 4 }
          }}
        >
          <Box 
            sx={{ 
              ml: 'auto',
              maxWidth: { xs: '100%', md: '50%' },
              color: 'white',
              py: { xs: 6, sm: 8, md: 12 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: { xs: 2, md: 3 },
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Empowering <Box component="span" sx={{ color: '#C9AA74' }}>Zambia</Box> with Expert Economic Solutions
            </Typography>
            <Typography 
              variant="h5" 
              paragraph
              sx={{ 
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                mb: 0,
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                color: 'white'
              }}
            >
              Unlock your potential with data-driven strategies.
            </Typography>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={{ xs: 2, sm: 3 }}
              sx={{ 
                mt: { xs: 3, md: 4 },
                width: { xs: '100%', sm: 'auto' },
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}
            >
              <Button 
                variant="outlined" 
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: 'black',
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: '#203C55',
                    color: 'white',
                  },
                  textTransform: 'none',
                  boxShadow: '4px 4px 0px rgba(255, 255, 255, 0.6)',
                  minWidth: { xs: '100%', sm: 'auto' },
                }}
              >
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/pages/services">View Services</Link>
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: 'black',
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: '#203C55',
                    color: 'white',
                  },
                  textTransform: 'none',
                  boxShadow: '4px 4px 0px rgba(255, 255, 255, 0.6)',
                  minWidth: { xs: '100%', sm: 'auto' },
                }}
              >
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/pages/contact">Learn More</Link>
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Hero;