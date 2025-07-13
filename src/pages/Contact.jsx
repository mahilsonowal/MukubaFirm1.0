import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  TextField, 
  Button, 
  Checkbox, 
  FormControlLabel,
  useTheme,
  useMediaQuery,
  Alert
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import { databases } from '../appwrite/config';
import { ID } from 'appwrite';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  backgroundColor: '#1B2441',
  color: 'white',
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    terms: false
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    if (!formData.terms) {
      setError('Please agree to the terms and conditions');
      return;
    }
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      USER_ID
    )
    .then(async (result) => {
      // Store in Appwrite
      try {
        await databases.createDocument(
          import.meta.env.VITE_DATABASE_ID,
          import.meta.env.VITE_CONTACT_COLLECTION_ID,
          ID.unique(),
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
          }
        );
      } catch (err) {
        // Optionally handle Appwrite error
        console.error('Appwrite error:', err);
      }
      setSuccess('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        terms: false
      });
    }, (error) => {
      setError('Failed to send message. Please try again later.');
    });
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#1B2441', py: { xs: 6, md: 8 }, color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Box 
              component="img"
              src="/assets/logo.png"
              alt="Mukuba Logo"
              sx={{ 
                height: { xs: 80, md: 100 },
                mb: 3
              }}
            />
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }
              }}
            >
              Contact Us
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 400,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
              }}
            >
              Get in touch with our team of experts for any inquiries or assistance.
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#C9AA74',
                mt: 2,
                fontWeight: 500,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
              }}
            >
              Mukuba Economic Research and Consulting Firm
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid sx={{ width: { xs: '100%', md: '100%' } }}>
            <StyledPaper elevation={2}>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: '#1B2441',
                  fontWeight: 600,
                  mb: 4,
                  fontSize: { xs: '1.5rem', md: '1.75rem' }
                }}
              >
                Send Us a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  {/* Make sure your EmailJS template variables are exactly: from_name, from_email, phone, subject, message */}
                  {success && <Grid><Alert severity="success">{success}</Alert></Grid>}
                  {error && <Grid><Alert severity="error">{error}</Alert></Grid>}
                  <Grid sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid sx={{ width: '100%' }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="terms"
                          checked={formData.terms}
                          onChange={handleChange}
                          required
                        />
                      }
                      label={
                        <Typography variant="body2">
                          I agree to the{' '}
                          <Link to="/terms" style={{ color: '#1B2441', textDecoration: 'underline' }}>
                            Terms and Conditions
                          </Link>{' '}
                          and{' '}
                          <Link to="/privacy" style={{ color: '#1B2441', textDecoration: 'underline' }}>
                            Privacy Policy
                          </Link>
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid sx={{ width: '100%' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        bgcolor: '#1B2441',
                        py: 1.5,
                        '&:hover': {
                          bgcolor: '#2a3a6d',
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </StyledPaper>
          </Grid>

          {/* Contact Information */}
          <Grid sx={{ width: { xs: '100%', md: '100%' } }}>
            <StyledPaper elevation={2}>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: '#1B2441',
                  fontWeight: 600,
                  mb: 4,
                  fontSize: { xs: '1.5rem', md: '1.75rem' }
                }}
              >
                Contact Information
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                  <ContactIcon>
                    <LocationOnIcon />
                  </ContactIcon>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#1B2441', fontWeight: 600, mb: 0.5 }}>
                      Our Location
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Plot #36 Kudu Rd<br />
                      Kabulonga, lusaka
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                  <ContactIcon>
                    <PhoneIcon />
                  </ContactIcon>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#1B2441', fontWeight: 600, mb: 0.5 }}>
                      Phone Number
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      +260 123 456 789<br />
                      +260 987 654 321
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                  <ContactIcon>
                    <EmailIcon />
                  </ContactIcon>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#1B2441', fontWeight: 600, mb: 0.5 }}>
                      Email Address
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      info@mukuba.com<br />
                      support@mukuba.com
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                  <ContactIcon>
                    <AccessTimeIcon />
                  </ContactIcon>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#1B2441', fontWeight: 600, mb: 0.5 }}>
                      Working Hours
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Monday - Fri: 9:00 AM - 4:00 PM<br />
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Map Section */}
              <Box sx={{ mt: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#1B2441',
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  Find Us on Map
                </Typography>
                <Box 
                  sx={{ 
                    height: { xs: 200, sm: 300, md: 400 },
                    borderRadius: 2,
                    overflow: 'hidden'
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.0377638366247!2d28.2962893!3d-15.4167859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408b0f99b4b175%3A0x1b0f0c0f0f0f0f0f!2sKabulonga%2C%20Lusaka%2C%20Zambia!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
              </Box>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 
