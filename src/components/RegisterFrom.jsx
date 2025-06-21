import React, { useRef, useState } from "react";
import { Box, Paper, Typography, TextField, Button, Stack, Alert } from '@mui/material';

const RegisterFrom = ({ setActiveForm }) => {
    const formRef = useRef(null);
    const [error, setError] = useState("");

    // You may want to add registration logic here
    const handleRegister = (e) => {
        e.preventDefault();
        const password = formRef.current.password.value;
        const confirmPassword = formRef.current.confirmPassword.value;
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");
        // Registration logic here
    };

    return (
        <Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%', borderRadius: 3 }}>
                <Typography variant="h4" sx={{ mb: 2, color: 'primary.main', fontWeight: 700, textAlign: 'center' }}>
                    Register
                </Typography>
                {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
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
                        <Button type="submit" variant="contained" color="primary" size="large" fullWidth sx={{ fontWeight: 600 }}>
                            Signup
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