import React, { useRef, useState } from "react";
import { Box, Paper, Typography, TextField, Button, Stack, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import GoogleIcon from '@mui/icons-material/Google';

const RegisterFrom = ({ setActiveForm }) => {
    const formRef = useRef(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { registerUser, loginWithGoogle } = useAuth();

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = formRef.current.name.value;
        const email = formRef.current.email.value;
        const password = formRef.current.password.value;
        const confirmPassword = formRef.current.confirmPassword.value;
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setSuccess("");
            return;
        }
        setError("");
        setSuccess("");
        setLoading(true);
        try {
            await registerUser(email, password, name);
            setSuccess("Registration successful! Redirecting to home page...");
            setTimeout(() => navigate('/'), 1500);
        } catch (err) {
            setError(err.message || "Registration failed");
        }
        setLoading(false);
    };

    const handleGoogleRegister = async () => {
        setLoading(true);
        setError("");
        try {
            await loginWithGoogle(navigate);
        } catch (err) {
            setError(err.message || "Google sign up failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%', borderRadius: 3 }}>
                <Typography variant="h4" sx={{ mb: 2, color: 'primary.main', fontWeight: 700, textAlign: 'center' }}>
                    Register
                </Typography>
                {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
                <Box component="form" ref={formRef} onSubmit={handleRegister}>
                    <Stack spacing={2}>
                        <TextField
                            label="Name"
                            name="name"
                            type="text"
                            fullWidth
                            required
                        />
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
                        <TextField
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            fullWidth
                            required
                        />
                        <Button type="submit" variant="contained" color="primary" size="large" fullWidth sx={{ fontWeight: 600 }} disabled={loading}>
                            {loading ? "Signing up..." : "Signup"}
                        </Button>
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={<GoogleIcon />}
                            onClick={handleGoogleRegister}
                            disabled={loading}
                            sx={{ color: '#AF9871', borderColor: '#AF9871', '&:hover': { borderColor: '#977F59', backgroundColor: 'rgba(175, 152, 113, 0.08)' } }}
                        >
                            Continue with Google
                        </Button>
                    </Stack>
                </Box>
                <Typography sx={{ mt: 2, textAlign: 'center' }}>
                    Already have an account?{' '}
                    <Button variant="text" color="secondary" sx={{ textTransform: 'none', fontWeight: 600 }} onClick={() => setActiveForm("login")}>Login</Button>
                </Typography>
            </Paper>
        </Box>
    );
};

export default RegisterFrom;