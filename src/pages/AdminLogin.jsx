import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { Box, Paper, Typography, TextField, Button, Stack, Alert } from '@mui/material';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { user, loginUser, logoutUser } = useAuth();
  const formRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginAttempted, setLoginAttempted] = useState(false);

  useEffect(() => {
    if (loginAttempted) {
      if (user && user.prefs && user.prefs.role === "admin") {
        navigate("/admin-dashboard");
      } else if (user && (!user.prefs || user.prefs.role !== "admin")) {
        logoutUser();
        setError("You do not have admin access.");
      }
      setLoading(false);
      setLoginAttempted(false);
    }
  }, [user, navigate, loginAttempted, logoutUser]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await loginUser(formRef.current.email.value, formRef.current.password.value);
      setLoginAttempted(true);
    } catch (err) {
      if (err.code === 429) {
        setError("Too many login attempts. Please wait a few minutes and try again.");
      } else {
        setError("Login failed. Please check your credentials or try again later.");
      }
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%', borderRadius: 3 }}>
        <Typography variant="h4" sx={{ mb: 2, color: 'primary.main', fontWeight: 700, textAlign: 'center' }}>
          Admin Login
        </Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <Box component="form" ref={formRef} onSubmit={handleLogin}>
          <Stack spacing={2}>
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              required
            />
            <Button type="submit" variant="contained" color="primary" size="large" fullWidth sx={{ fontWeight: 600 }} disabled={loading}>
              {loading ? "Logging in..." : "Login as Admin"}
            </Button>
          </Stack>
        </Box>
        <Button
          onClick={() => navigate("/")}
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ mt: 2, fontWeight: 600 }}
        >
          Home
        </Button>
      </Paper>
    </Box>
  );
};

export default AdminLogin; 