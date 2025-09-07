import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import { Box, Button, TextField, Typography, Alert, CircularProgress, Paper, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuth } from '../context/AuthContext';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [error, setError] = useState('');
  const [debugInfo, setDebugInfo] = useState('');
  const navigate = useNavigate();
  const { updatePassword } = useAuth();

  const isRecovery = searchParams.get('type') === 'recovery';
  const token = searchParams.get('token');

  useEffect(() => {
    const checkSession = async () => {
      try {
        setDebugInfo('Starting session check...');
        
        // Check if we have a token in the URL
        if (!token) {
          setError('No reset token found in URL');
          setDebugInfo('No token found in URL parameters');
          return;
        }

        setDebugInfo(`Token found: ${token.substring(0, 20)}...`);

        // Check current session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('Session error:', sessionError);
          setError('Failed to verify session');
          setDebugInfo(`Session error: ${sessionError.message}`);
          return;
        }

        if (session) {
          console.log('Session found, user is authenticated');
          setDebugInfo('Session found, user authenticated');
          setSessionReady(true);
          return;
        }

        setDebugInfo('No session found, setting up auth listener...');

        // If no session, try to get session from URL
        // Listen for auth state changes
        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
          console.log('Auth state change:', event, session);
          setDebugInfo(`Auth state change: ${event}`);
          
          if (event === 'PASSWORD_RECOVERY' && session) {
            console.log('Password recovery session established');
            setDebugInfo('Password recovery session established');
            setSessionReady(true);
          } else if (event === 'TOKEN_REFRESHED' && session) {
            console.log('Token refreshed, session established');
            setDebugInfo('Token refreshed, session established');
            setSessionReady(true);
          } else if (session) {
            console.log('Session established from other event');
            setDebugInfo(`Session established from event: ${event}`);
            setSessionReady(true);
          }
        });

        // Set a timeout to prevent infinite loading
        const timeout = setTimeout(() => {
          if (!sessionReady) {
            setError('Session setup timeout. Please try the reset link again.');
            setDebugInfo('Session setup timed out after 30 seconds');
          }
        }, 30000);

        // Clean up listener and timeout
        return () => {
          listener?.subscription.unsubscribe();
          clearTimeout(timeout);
        };
      } catch (error) {
        console.error('Error checking session:', error);
        setError('Failed to verify reset token');
        setDebugInfo(`Error: ${error.message}`);
      }
    };

    if (isRecovery) {
      checkSession();
    }
  }, [isRecovery, token, sessionReady]);

  // Check password strength
  useEffect(() => {
    if (newPassword.length === 0) {
      setPasswordStrength('');
    } else if (newPassword.length < 6) {
      setPasswordStrength('weak');
    } else if (newPassword.length < 10) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('strong');
    }
  }, [newPassword]);

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 'weak': return 'error';
      case 'medium': return 'warning';
      case 'strong': return 'success';
      default: return 'default';
    }
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 'weak': return 'Password is too weak';
      case 'medium': return 'Password strength is medium';
      case 'strong': return 'Password is strong';
      default: return '';
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setMsg('');
    
    if (newPassword !== confirmPassword) {
      setMsg('Passwords do not match.');
      return;
    }

    if (newPassword.length < 6) {
      setMsg('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);
    try {
      await updatePassword(newPassword);
      setMsg('Password updated successfully! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setMsg(err.message || 'Failed to update password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const handleRetryReset = () => {
    // Clear current state and try again
    setError('');
    setDebugInfo('');
    setSessionReady(false);
    // Force re-render
    window.location.reload();
  };

  // Show error if no recovery type
  if (!isRecovery) {
    return (
      <Box minHeight="80vh" display="flex" alignItems="center" justifyContent="center" bgcolor="#f5f5f5">
        <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%', borderRadius: 3, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: 'error.main' }}>
            Invalid Reset Link
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            This password reset link is invalid or has expired.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleBackToLogin}
            sx={{ backgroundColor: '#AF9871', '&:hover': { backgroundColor: '#977F59' } }}
          >
            Back to Login
          </Button>
        </Paper>
      </Box>
    );
  }

  // Show error if there's an error
  if (error) {
    return (
      <Box minHeight="80vh" display="flex" alignItems="center" justifyContent="center" bgcolor="#f5f5f5">
        <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%', borderRadius: 3, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: 'error.main' }}>
            Reset Link Error
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            {error}
          </Typography>
          {debugInfo && (
            <Alert severity="info" sx={{ mb: 2, textAlign: 'left' }}>
              <Typography variant="caption">
                Debug Info: {debugInfo}
              </Typography>
            </Alert>
          )}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleRetryReset}
              sx={{ backgroundColor: '#AF9871', '&:hover': { backgroundColor: '#977F59' } }}
            >
              Try Again
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleBackToLogin}
              sx={{ borderColor: '#AF9871', color: '#AF9871' }}
            >
              Back to Login
            </Button>
          </Box>
        </Paper>
      </Box>
    );
  }

  // Show loading if session not ready
  if (!sessionReady) {
    return (
      <Box minHeight="80vh" display="flex" alignItems="center" justifyContent="center" bgcolor="#f5f5f5">
        <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%', borderRadius: 3, textAlign: 'center' }}>
          <CircularProgress sx={{ mb: 2 }} />
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Setting up password reset...
          </Typography>
          <Typography variant="caption" color="textSecondary" sx={{ mb: 2, display: 'block' }}>
            This may take a few moments
          </Typography>
          {debugInfo && (
            <Alert severity="info" sx={{ mb: 2, textAlign: 'left' }}>
              <Typography variant="caption">
                {debugInfo}
              </Typography>
            </Alert>
          )}
          <Button
            variant="outlined"
            color="primary"
            onClick={handleBackToLogin}
            sx={{ mt: 2, borderColor: '#AF9871', color: '#AF9871' }}
          >
            Back to Login
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box minHeight="80vh" display="flex" alignItems="center" justifyContent="center" bgcolor="#f5f5f5">
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%', borderRadius: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <IconButton onClick={handleBackToLogin} sx={{ mr: 1 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Set New Password
          </Typography>
        </Box>

        <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
          Please enter your new password below. Make sure it's secure and easy to remember.
        </Typography>

        {msg && (
          <Alert 
            severity={msg.includes('successfully') ? 'success' : 'error'} 
            sx={{ mb: 3 }}
          >
            {msg}
          </Alert>
        )}

        <form onSubmit={handleUpdatePassword}>
          <TextField
            label="New Password"
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            fullWidth
            required
            sx={{ mb: 1 }}
            placeholder="Enter your new password"
          />
          
          {passwordStrength && (
            <Typography 
              variant="caption" 
              color={getPasswordStrengthColor()} 
              sx={{ mb: 2, display: 'block' }}
            >
              {getPasswordStrengthText()}
            </Typography>
          )}

          <TextField
            label="Confirm New Password"
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            fullWidth
            required
            sx={{ mb: 3 }}
            placeholder="Confirm your new password"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            sx={{ 
              mb: 2, 
              backgroundColor: '#AF9871', 
              '&:hover': { backgroundColor: '#977F59' },
              fontWeight: 600 
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Update Password'}
          </Button>
        </form>

        <Button
          color="secondary"
          sx={{ textTransform: 'none' }}
          onClick={handleBackToLogin}
          fullWidth
        >
          Back to Login
        </Button>
      </Paper>
    </Box>
  );
};

export default ResetPassword; 