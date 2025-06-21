import { useRef } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { Box, Paper, Typography, TextField, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginForm = ({ setActiveForm }) => {
    const { loginUser } = useAuth();
    const formRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        loginUser(formRef.current.email.value, formRef.current.password.value);
    };

    return (
        <Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%', borderRadius: 3 }}>
                <Typography variant="h4" sx={{ mb: 2, color: 'primary.main', fontWeight: 700, textAlign: 'center' }}>
                    Login
                </Typography>
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
                        <Button type="submit" variant="contained" color="primary" size="large" fullWidth sx={{ fontWeight: 600 }}>
                            Login
                        </Button>
                    </Stack>
                </Box>
                <Typography sx={{ mt: 2, textAlign: 'center' }}>
                    Don't have an account?{' '}
                    <Button variant="text" color="secondary" sx={{ textTransform: 'none', fontWeight: 600 }} onClick={() => setActiveForm("register")}>Signup</Button>
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