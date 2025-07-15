import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import { Box, Button, TextField, Typography, Tabs, Tab, Alert, CircularProgress, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useAuth } from '../context/AuthContext';

const LoginRegister = () => {
  const [tab, setTab] = useState(0); // 0 = Login, 1 = Register
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { loginUser, registerUser } = useAuth();

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    if (tab === 1 && registerPassword !== registerConfirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    try {
      if (tab === 0) {
        // Login
        const { data, error: signInError } = await supabase.auth.signInWithPassword({ email: loginEmail, password: loginPassword });
        if (signInError) throw signInError;
        const user = data?.user;
        if (user) {
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single();
          if (profileError) throw profileError;
          if (profile?.role === 'admin') {
            await supabase.auth.signOut();
            throw new Error("Didn't find account");
          }
        }
        setTimeout(() => {
          navigate('/');
        }, 500);
      } else {
        // Register
        const { data, error: signUpError } = await supabase.auth.signUp({ email: registerEmail, password: registerPassword });
        if (signUpError) throw signUpError;
        const user = data?.user;
        if (user) {
          const { error: profileError } = await supabase.from('profiles').insert([
            {
              id: user.id,
              email: registerEmail,
              name: registerName,
              role: 'user',
            },
          ]);
          if (profileError) throw profileError;
        }
        setSuccess('Successfully registered! Redirecting to home...');
        setTimeout(() => {
          navigate('/');
        }, 2000);
        return;
      }
    } catch (err) {
      setError(err.message || 'Authentication error');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
      if (error) throw error;
      const checkProfile = async () => {
        const session = await supabase.auth.getSession();
        const user = session.data.session?.user;
        if (!user) return;
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();
        if (profileError && profileError.code !== 'PGRST116') throw profileError;
        if (!profile) {
          const { error: insertError } = await supabase.from('profiles').insert([
            {
              id: user.id,
              email: user.email,
              name: user.user_metadata?.name || '',
              role: 'user',
            },
          ]);
          if (insertError) throw insertError;
          navigate('/user-dashboard');
        } else if (profile.role === 'admin') {
          await supabase.auth.signOut();
          throw new Error("Didn't find account");
        } else {
          navigate('/user-dashboard');
        }
      };
      setTimeout(checkProfile, 1000);
    } catch (err) {
      setError(err.message || 'Google login error');
      setLoading(false);
    }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={8} p={3} boxShadow={3} borderRadius={2} bgcolor="#fff" mb={20}>
      <Tabs value={tab} onChange={handleTabChange} centered sx={{ mb: 2 }}>
        <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
      <form onSubmit={handleSubmit}>
        {tab === 1 && (
          <>
            <TextField
              label="Name"
              type="text"
              value={registerName}
              onChange={e => setRegisterName(e.target.value)}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label="Email"
              type="email"
              value={registerEmail}
              onChange={e => setRegisterEmail(e.target.value)}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              value={registerPassword}
              onChange={e => setRegisterPassword(e.target.value)}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label="Confirm Password"
              type="password"
              value={registerConfirmPassword}
              onChange={e => setRegisterConfirmPassword(e.target.value)}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
          </>
        )}
        {tab === 0 && (
          <>
            <TextField
              label="Email"
              type="email"
              value={loginEmail}
              onChange={e => setLoginEmail(e.target.value)}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              value={loginPassword}
              onChange={e => setLoginPassword(e.target.value)}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
          </>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          sx={{ mb: 2, backgroundColor: '#AF9871', '&:hover': { backgroundColor: '#977F59' } }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : (tab === 0 ? 'Login' : 'Register')}
        </Button>
      </form>
      <Divider sx={{ my: 2 }}>OR</Divider>
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={handleGoogleLogin}
        disabled={loading}
        sx={{ color: '#AF9871', borderColor: '#AF9871', '&:hover': { borderColor: '#977F59', backgroundColor: 'rgba(175, 152, 113, 0.08)' } }}
      >
        Continue with Google
      </Button>
      <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
        {tab === 0 ? "Don't have an account?" : 'Already have an account?'}{' '}
        <Button color="primary" onClick={() => setTab(tab === 0 ? 1 : 0)} sx={{ textTransform: 'none', p: 0, minWidth: 0 }}>
          {tab === 0 ? 'Register' : 'Login'}
        </Button>
      </Typography>
    </Box>
  );
};

export default LoginRegister; 