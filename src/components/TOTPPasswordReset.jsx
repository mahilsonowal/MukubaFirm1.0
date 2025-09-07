import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Alert, 
  CircularProgress,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  Security, 
  Smartphone, 
  Password, 
  CheckCircle,
  Info,
  Warning
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const TOTPPasswordReset = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState('');
  const [totpCode, setTotpCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const navigate = useNavigate();
  const { resetPasswordWithTOTP } = useAuth();

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    setError('');
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    setError('');
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (totpCode.length !== 6) {
      setError('Please enter a valid 6-digit 2FA code.');
      return;
    }

    setLoading(true);
    try {
      console.log('Starting TOTP password reset process...');
      const result = await resetPasswordWithTOTP(email, totpCode);
      
      if (result.success) {
        setSuccess(result.message);
        // Don't navigate immediately - let the user read the message
        // They need to check their email and follow the reset link
        setTimeout(() => {
          navigate('/login');
        }, 5000); // Give them 5 seconds to read the message
      } else {
        setError(result.message || 'Failed to reset password');
      }
    } catch (err) {
      console.error('Password reset error:', err);
      setError(err.message || 'Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      label: 'Enter Email',
      content: (
        <Box>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Enter the email address associated with your account.
          </Typography>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            required
          />
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!email.trim()}
            sx={{ mt: 2, backgroundColor: '#AF9871', '&:hover': { backgroundColor: '#977F59' } }}
          >
            Next
          </Button>
        </Box>
      )
    },
    {
      label: 'Verify 2FA Code',
      content: (
        <Box>
          <Alert severity="info" sx={{ mb: 2 }}>
            <Typography variant="body2">
              <strong>How to get your 2FA code:</strong>
            </Typography>
            <List dense sx={{ mt: 1 }}>
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <Smartphone fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Open your authenticator app (Google Authenticator, Authy, etc.)" />
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <Security fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Find 'Mukuba Economic Research' in your app" />
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <CheckCircle fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Enter the 6-digit code shown in your app" />
              </ListItem>
            </List>
          </Alert>
          
          <TextField
            fullWidth
            label="2FA Code"
            type="text"
            value={totpCode}
            onChange={(e) => setTotpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
            placeholder="123456"
            inputProps={{ maxLength: 6 }}
            required
            sx={{ mb: 3 }}
          />
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={totpCode.length !== 6}
              sx={{ backgroundColor: '#AF9871', '&:hover': { backgroundColor: '#977F59' } }}
            >
              Next
            </Button>
          </Box>
        </Box>
      )
    },
    {
      label: 'Complete Reset',
      content: (
        <Box>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Click the button below to complete your password reset. This will send a password reset email to your inbox.
          </Typography>
          
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
              <strong>What happens next:</strong>
            </Typography>
            <List dense sx={{ mt: 1 }}>
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <CheckCircle fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="2FA code will be verified" />
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <CheckCircle fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Password reset email will be sent" />
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <CheckCircle fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Click the email link to set new password" />
              </ListItem>
            </List>
          </Alert>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleReset}
              disabled={loading}
              sx={{ backgroundColor: '#AF9871', '&:hover': { backgroundColor: '#977F59' } }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Complete Reset'}
            </Button>
          </Box>
        </Box>
      )
    }
  ];

  return (
    <Box minHeight="80vh" display="flex" alignItems="center" justifyContent="center" bgcolor="#f5f5f5">
      <Paper elevation={3} sx={{ p: 4, maxWidth: 600, width: '100%', borderRadius: 3 }}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Security sx={{ fontSize: 48, color: '#AF9871', mb: 2 }} />
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#AF9871' }}>
            Reset Password with 2FA
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
            Secure password reset using your authenticator app
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>2FA Verification Successful!</strong>
            </Typography>
            <Typography variant="body2">
              A password reset email has been sent to your inbox. Please check your email and click the reset link to complete the password change process.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
              You will be redirected to the login page in a few seconds...
            </Typography>
          </Alert>
        )}

        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>Important:</strong> This password reset method requires you to have 2FA (Two-Factor Authentication) enabled on your account. 
            If you don't have 2FA enabled, please contact support for assistance.
          </Typography>
        </Alert>

        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {step.label}
                </Typography>
              </StepLabel>
              <StepContent>
                {step.content}
              </StepContent>
            </Step>
          ))}
        </Stepper>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Need help? Contact our support team
          </Typography>
          <Button
            variant="outlined"
            onClick={() => navigate('/login')}
            sx={{ borderColor: '#AF9871', color: '#AF9871' }}
          >
            Back to Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default TOTPPasswordReset;
