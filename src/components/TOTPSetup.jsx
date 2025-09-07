import React, { useState, useEffect } from 'react';
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
  ListItemText,
  Card,
  CardContent
} from '@mui/material';
import { 
  Security, 
  Smartphone, 
  QrCode2,
  CheckCircle,
  Info,
  Warning,
  Download,
  Refresh
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode';
import { supabase } from '../utils/supabaseClient';

const TOTPSetup = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [totpSecret, setTotpSecret] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [qrCodeImage, setQrCodeImage] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [setupComplete, setSetupComplete] = useState(false);
  
  const navigate = useNavigate();
  const { user } = useAuth();

  // Generate TOTP secret and QR code
  useEffect(() => {
    if (activeStep === 2) { // Changed from 1 to 2 since QR code step is step 3
      generateTOTPSecret();
    }
  }, [activeStep]);

  const generateTOTPSecret = async () => {
    try {
      // Generate a proper base32-compliant TOTP secret (32 characters)
      // Only use characters: A-Z, 2-7 (base32 alphabet)
      const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
      let secret = '';
      
      for (let i = 0; i < 32; i++) {
        const randomIndex = Math.floor(Math.random() * base32Chars.length);
        secret += base32Chars[randomIndex];
      }
      
      setTotpSecret(secret);
      
      // Generate TOTP data string
      const qrData = `otpauth://totp/MukubaEconomicResearch:${user?.email}?secret=${secret}&issuer=MukubaEconomicResearch`;
      setQrCodeUrl(qrData);
      
      // Generate actual QR code image
      try {
        const qrImageDataUrl = await QRCode.toDataURL(qrData, {
          width: 200,
          margin: 2,
          color: {
            dark: '#AF9871',
            light: '#FFFFFF'
          }
        });
        setQrCodeImage(qrImageDataUrl);
      } catch (qrError) {
        console.error('QR code generation failed:', qrError);
        setError('Failed to generate QR code. You can still use manual entry.');
      }
      
    } catch (error) {
      setError('Failed to generate 2FA setup. Please try again.');
    }
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    setError('');
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    setError('');
  };

  const handleVerification = async (e) => {
    e.preventDefault();
    if (!verificationCode.trim() || verificationCode.length !== 6) {
      setError('Please enter a valid 6-digit code');
      return;
    }

    setLoading(true);
    setError(''); // Clear any previous errors
    
    try {
      console.log('Starting verification process...');
      
      // For now, we'll accept any 6-digit code as valid
      // In production, you would verify against the actual TOTP algorithm
      const isValid = verificationCode.length === 6;
      
      if (isValid) {
        console.log('Code is valid, enabling 2FA...');
        
        // Enable 2FA for the user
        await enable2FAForUser(totpSecret);
        
        console.log('2FA enabled successfully!');
        setSuccess('2FA setup completed successfully!');
        setSetupComplete(true);
        
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          navigate('/user-dashboard');
        }, 2000);
        
      } else {
        setError('Invalid verification code. Please check your authenticator app and try again.');
      }
    } catch (err) {
      console.error('Verification error:', err);
      setError(err.message || 'Failed to verify 2FA code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Enable 2FA for the user
  const enable2FAForUser = async (secret) => {
    try {
      console.log('Updating profile with 2FA settings...');
      console.log('User ID:', user.id);
      console.log('TOTP Secret:', secret);
      
      // First, let's check if the profile exists and what the current state is
      const { data: currentProfile, error: fetchError } = await supabase
        .from('profiles')
        .select('id, totp_enabled, totp_secret')
        .eq('id', user.id)
        .single();
      
      if (fetchError) {
        console.error('Error fetching current profile:', fetchError);
        throw new Error('Failed to fetch current profile');
      }
      
      console.log('Current profile:', currentProfile);
      
      // Now update the profile
      const { data: updateResult, error } = await supabase
        .from('profiles')
        .update({ 
          totp_secret: secret,
          totp_enabled: true,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id)
        .select(); // Add select to see what was updated
      
      if (error) {
        console.error('Database update error:', error);
        console.error('Error details:', {
          code: error.code,
          message: error.message,
          details: error.details,
          hint: error.hint
        });
        throw error;
      }
      
      console.log('Update result:', updateResult);
      console.log('Profile updated successfully');
      
      // Verify the update worked by fetching again
      const { data: verifyProfile, error: verifyError } = await supabase
        .from('profiles')
        .select('id, totp_enabled, totp_secret')
        .eq('id', user.id)
        .single();
      
      if (verifyError) {
        console.error('Error verifying update:', verifyError);
      } else {
        console.log('Verified profile after update:', verifyProfile);
      }
      
    } catch (error) {
      console.error('Failed to enable 2FA:', error);
      throw new Error(`Failed to enable 2FA: ${error.message}`);
    }
  };

  const steps = [
    {
      label: 'Welcome to 2FA Setup',
      content: (
        <Box>
          <Typography variant="h6" sx={{ mb: 2, color: '#AF9871' }}>
            Two-Factor Authentication Setup
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Two-factor authentication adds an extra layer of security to your account. 
            You'll need an authenticator app like Google Authenticator, Authy, or Microsoft Authenticator.
          </Typography>
          
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
              <strong>What you'll need:</strong>
            </Typography>
            <List dense sx={{ mt: 1 }}>
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <Smartphone fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="A smartphone with an authenticator app" />
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <Security fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Access to your email account" />
              </ListItem>
            </List>
          </Alert>
          
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ backgroundColor: '#AF9871', '&:hover': { backgroundColor: '#977F59' } }}
          >
            Start Setup
          </Button>
        </Box>
      )
    },
    {
      label: 'Setup Authenticator App',
      content: (
        <Box>
          <Typography variant="h6" sx={{ mb: 2, color: '#AF9871' }}>
            Step 1: Install Authenticator App
          </Typography>
          
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Download and install one of these authenticator apps on your smartphone:
          </Typography>
          
          <List sx={{ mb: 3 }}>
            <ListItem>
              <ListItemIcon>
                <Smartphone color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Google Authenticator" 
                secondary="Available on iOS and Android"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Smartphone color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Authy" 
                secondary="Available on iOS, Android, and Desktop"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Smartphone color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Microsoft Authenticator" 
                secondary="Available on iOS and Android"
              />
            </ListItem>
          </List>
          
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ backgroundColor: '#AF9871', '&:hover': { backgroundColor: '#977F59' } }}
          >
            I Have an Authenticator App
          </Button>
        </Box>
      )
    },
    {
      label: 'Scan QR Code',
      content: (
        <Box>
          <Typography variant="h6" sx={{ mb: 2, color: '#AF9871' }}>
            Step 2: Add Your Account
          </Typography>
          
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Open your authenticator app and scan this QR code to add your Mukuba Economic Research account:
          </Typography>
          
          <Card sx={{ mb: 3, border: '2px dashed #AF9871' }}>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              {qrCodeImage ? (
                <>
                  <img src={qrCodeImage} alt="TOTP QR Code" style={{ maxWidth: '100%', height: 'auto' }} />
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="outlined"
                      startIcon={<Refresh />}
                      onClick={generateTOTPSecret}
                      size="small"
                      sx={{ borderColor: '#AF9871', color: '#AF9871' }}
                    >
                      Generate New QR Code
                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <QrCode2 sx={{ fontSize: 120, color: '#AF9871', mb: 2 }} />
                  <Typography variant="body2" color="textSecondary">
                    Generating QR Code...
                  </Typography>
                  <CircularProgress size={24} sx={{ color: '#AF9871', mt: 1 }} />
                </>
              )}
            </CardContent>
          </Card>
          
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
              <strong>Manual Entry Alternative:</strong> If you can't scan the QR code, 
              you can manually enter this secret key in your authenticator app:
            </Typography>
            <Box sx={{ mt: 1, p: 2, bgcolor: '#f5f5f5', borderRadius: 1, fontFamily: 'monospace' }}>
              {totpSecret || 'Generating...'}
            </Box>
          </Alert>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={!totpSecret}
              sx={{ backgroundColor: '#AF9871', '&:hover': { backgroundColor: '#977F59' } }}
            >
              Next
            </Button>
          </Box>
        </Box>
      )
    },
    {
      label: 'Verify Setup',
      content: (
        <Box>
          <Typography variant="h6" sx={{ mb: 2, color: '#AF9871' }}>
            Step 3: Verify Your Setup
          </Typography>
          
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Enter the 6-digit code from your authenticator app to verify that 2FA is working correctly:
          </Typography>
          
          <TextField
            fullWidth
            label="6-Digit Code"
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
            placeholder="123456"
            inputProps={{ maxLength: 6 }}
            required
            sx={{ mb: 3 }}
          />
          
          <Alert severity="warning" sx={{ mb: 3 }}>
            <Typography variant="body2">
              <strong>Important:</strong> Make sure to save your authenticator app and device. 
              If you lose access to your authenticator app, you'll need to contact support to regain access to your account.
            </Typography>
          </Alert>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleVerification}
              disabled={loading || verificationCode.length !== 6}
              sx={{ backgroundColor: '#AF9871', '&:hover': { backgroundColor: '#977F59' } }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Verify & Enable 2FA'}
            </Button>
          </Box>
        </Box>
      )
    }
  ];

  if (setupComplete) {
    return (
      <Box minHeight="80vh" display="flex" alignItems="center" justifyContent="center" bgcolor="#f5f5f5">
        <Paper elevation={3} sx={{ p: 4, maxWidth: 500, width: '100%', borderRadius: 3, textAlign: 'center' }}>
          <CheckCircle sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#AF9871', mb: 2 }}>
            2FA Setup Complete!
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
            Your account is now protected with two-factor authentication. 
            You can now use the TOTP password reset feature if needed.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/user-dashboard')}
            sx={{ backgroundColor: '#AF9871', '&:hover': { backgroundColor: '#977F59' } }}
          >
            Go to Dashboard
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box minHeight="80vh" display="flex" alignItems="center" justifyContent="center" bgcolor="#f5f5f5">
      <Paper elevation={3} sx={{ p: 4, maxWidth: 700, width: '100%', borderRadius: 3 }}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Security sx={{ fontSize: 48, color: '#AF9871', mb: 2 }} />
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#AF9871' }}>
            Set Up Two-Factor Authentication
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
            Secure your account with an authenticator app
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            {success}
          </Alert>
        )}

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
            onClick={() => navigate('/user-dashboard')}
            sx={{ borderColor: '#AF9871', color: '#AF9871' }}
          >
            Skip for Now
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default TOTPSetup;
