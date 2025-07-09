import { useRef, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { Box, Paper, Typography, TextField, Button, Stack, Alert } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginForm = ({ setActiveForm }) => {
    const { user, loginUser, logoutUser } = useAuth();
    const formRef = useRef(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [loginAttempted, setLoginAttempted] = useState(false);

    useEffect(() => {
        if (loginAttempted) {
            if (user && user.prefs && user.prefs.role === "admin") {
                logoutUser();
                setError("Admins cannot log in from the user login page.");
            }
            setLoading(false);
            setLoginAttempted(false);
        }
    }, [user, loginAttempted, logoutUser]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await loginUser(formRef.current.email.value, formRef.current.password.value);
            setLoginAttempted(true);
        } catch (err) {
            // Robust error handling for Appwrite
            const code = err.code || err.response?.code || '';
            const type = err.type || err.response?.type || '';
            const msg = (err.message || '').toLowerCase();
            if (
                code === 401 ||
                type === 'user_invalid_credentials' ||
                msg.includes('invalid credentials') ||
                msg.includes('invalid password')
            ) {
                setError("Incorrect email or password. Please try again.");
            } else if (
                code === 404 ||
                type === 'user_not_found' ||
                msg.includes('user not found') ||
                msg.includes('no user') ||
                msg.includes('not found')
            ) {
                setError("No account found with this email.");
            } else if (
                code === 400 &&
                (type === 'general_argument_invalid' || msg.includes('password must be between'))
            ) {
                setError("Password must be between 8 and 256 characters long.");
            } else if (code === 429 || msg.includes('rate limit')) {
                setError("Too many login attempts. Please wait and try again.");
            } else if (err.message) {
                setError(err.message);
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
                    Login
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
                            {loading ? "Logging in..." : "Login"}
                        </Button>
                    </Stack>
                </Box>
                <Typography sx={{ mt: 2, textAlign: 'center' }}>
                    Don't have an account?{' '}
                    <Button variant="text" color="secondary" sx={{ textTransform: 'none', fontWeight: 600 }} onClick={() => setActiveForm("register")}>
                        Signup
                    </Button>
                </Typography>
                <Button
                    component={Link}
                    to="/"
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

export default LoginForm;
