import { useState } from 'react';
import { Box, TextField, Button, Checkbox, FormControlLabel, Typography, Grid, Alert } from '@mui/material';
import { supabase } from '../../utils/supabaseClient';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    allowStorage: false
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.allowStorage) newErrors.allowStorage = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'allowStorage' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    if (validateForm()) {
      try {
        const { error: insertError } = await supabase
          .from('contact_messages')
          .insert([{
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
          }]);
        if (insertError) throw insertError;
        setSuccess('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          allowStorage: false
        });
      } catch (err) {
        setError('Failed to send message. Please try again later.');
      }
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 3 }}>
          Contact Us
        </Typography>
        {success && <Grid><Alert severity="success">{success}</Alert></Grid>}
        {error && <Grid><Alert severity="error">{error}</Alert></Grid>}
        <Grid sx={{ width: { xs: '100%', md: '100%' } }}>
          <TextField
            fullWidth
            required
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            placeholder="Enter your full name"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#C9AA74',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#C9AA74',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#C9AA74',
              },
            }}
          />
        </Grid>
        <Grid sx={{ width: { xs: '100%', md: '100%' } }}>
          <TextField
            fullWidth
            required
            type="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            placeholder="Enter your Email Address"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#C9AA74',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#C9AA74',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#C9AA74',
              },
            }}
          />
        </Grid>
        <Grid sx={{ width: '100%' }}>
          <TextField
            fullWidth
            required
            type="tel"
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            placeholder="Enter your Phone Number"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#C9AA74',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#C9AA74',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#C9AA74',
              },
            }}
          />
        </Grid>
        <Grid sx={{ width: '100%' }}>
          <TextField
            fullWidth
            required
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            error={!!errors.subject}
            helperText={errors.subject}
            placeholder="Enter the subject"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#C9AA74',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#C9AA74',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#C9AA74',
              },
            }}
          />
        </Grid>
        <Grid sx={{ width: '100%' }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message}
            placeholder="Write your message here..."
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#C9AA74',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#C9AA74',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#C9AA74',
              },
            }}
          />
        </Grid>
        <Grid sx={{ width: '100%' }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.allowStorage}
                onChange={handleChange}
                name="allowStorage"
                color="primary"
              />
            }
            label={
              <Typography variant="body2" component="span">
                I agree to the{' '}
                <a href="/terms" style={{ color: '#1B2441', textDecoration: 'underline' }}>
                  Terms and Conditions
                </a>{' '}and{' '}
                <a href="/privacy" style={{ color: '#1B2441', textDecoration: 'underline' }}>
                  Privacy Policy
                </a>
                <span style={{ color: '#d32f2f', marginLeft: 4 }}>*</span>
              </Typography>
            }
          />
          {errors.allowStorage && (
            <Typography color="error" variant="body2">
              {errors.allowStorage}
            </Typography>
          )}
        </Grid>
        <Grid sx={{ width: '100%' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ fontWeight: 600 }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm; 