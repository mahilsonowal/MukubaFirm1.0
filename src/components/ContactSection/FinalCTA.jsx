import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 10 },
        bgcolor: '#f5f5f5',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(245, 245, 245, 0.9), rgba(245, 245, 245, 0.9))'
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', maxWidth: '100%', mx: 'auto' }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              px: { xs: 2, md: 16.6 },
              mb: 2,
              color: '#1B2441',
              fontSize: { xs: '1.5rem', md: '2.5rem' }
            }}
          >
            Ready to Transform Your Economic Strategy?
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#1B2441',
              mb: 4,
              fontSize: { xs: '0.7rem', md: '1.125rem' }
            }}
          >
            Contact our expert consultants today to discuss how we can help you achieve your economic goals.
          </Typography>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
          >
            <Button
              variant="contained"
              component={RouterLink}
              to="/pages/contact"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: '#C9AA74',
                color: 'white',
                px: 4,
                py: 1.5,
                '&:hover': {
                  bgcolor: '#B89A6A'
                }
              }}
            >
              Get in Touch
            </Button>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/pages/services"
              sx={{
                borderColor: '#1B2441',
                color: '#1B2441',
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: '#1B2441',
                  bgcolor: '#1B2441',
                  color: 'white'
                }
              }}
            >
              Explore Our Services
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default FinalCTA; 