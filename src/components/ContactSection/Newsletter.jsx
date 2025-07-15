import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Alert, CircularProgress } from '@mui/material';
import { supabase } from '../../utils/supabaseClient'; 

const Newsletter = () => {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubscribeStatus('');
    try {
      const { error: insertError } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: subscribeEmail }]);
      if (insertError) throw insertError;
      setSubscribeStatus('success');
      setSubscribeEmail('');
    } catch (error) {
      setSubscribeStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setSubscribeStatus(''), 3000);
    }
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#000'}}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            textAlign: 'center', 
            maxWidth: { xs: '100%', md: '100%' }, 
            mx: 'auto',
            px: { xs: 2, md: 13.5 }
          }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              mb: 2,
              color: 'white',
              fontSize: { xs: '1.5rem', md: '2.5rem' }
            }}
          >
            Stay Informed with Our Updates
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 4,
              fontSize: {xs: '0.7rem', md: '1.125rem' }
            }}
          >
            Subscribe to receive the latest news, updates, and exclusive offers from Mukuba Economic Research and Consulting Firm.
          </Typography>

          <Box 
            component="form" 
            onSubmit={handleSubscribe}
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              maxWidth: { xs: '100%', md: '500px' },
              mx: 'auto',
              fontSize: { xs: '0.7rem', md: '1.125rem' }
            }}
          >
            <TextField
              fullWidth
              type="email"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              sx={{
                bgcolor: 'white',
                fontSize: { xs: '0.7rem', md: '1.125rem' },
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#C9AA74',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#C9AA74',
                  },
                },
              }}
              disabled={loading}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: '#C9AA74',
                color: 'white',
                px: 4,
                py: 1.5,
                whiteSpace: 'nowrap',
                fontSize: { xs: '0.7rem', md: '1.125rem' },
                '&:hover': {
                  bgcolor: '#B89A6A'
                }
              }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Subscribe Now'}
            </Button>
          </Box>

          {subscribeStatus === 'success' && (
            <Alert 
              severity="success" 
              sx={{ 
                mt: 2,
                bgcolor: 'rgba(46, 125, 50, 0.1)',
                color: '#4caf50'
              }}
            >
              Thank you for subscribing!
            </Alert>
          )}
          {subscribeStatus === 'error' && (
            <Alert 
              severity="error" 
              sx={{ 
                mt: 2,
                bgcolor: 'rgba(211, 47, 47, 0.1)',
                color: '#f44336'
              }}
            >
              Something went wrong. Please try again.
            </Alert>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter; 