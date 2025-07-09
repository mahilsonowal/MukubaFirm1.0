import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress, Alert } from '@mui/material';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const FUNCTION_ENDPOINT = 'https://686e5713000c0c0ca424.fra.appwrite.run/'; 

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(FUNCTION_ENDPOINT);
        const data = await response.json();
        if (data.users) {
          setUsers(data.users);
        } else {
          setError('Failed to fetch users.');
        }
      } catch (err) {
        setError('Error fetching users: ' + err.message);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const handleExport = () => {
    const ws = XLSX.utils.json_to_sheet(users);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Users');
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'users.xlsx');
  };

  return (
    <Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 900, width: '100%', borderRadius: 3, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>
          Admin Dashboard
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 2 }}>
          User Management (excluding admins)
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleExport}>
              Export to Excel
            </Button>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Registration Date</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.$id}>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.registration ? new Date(user.registration * 1000).toLocaleString() : ''}</TableCell>
                      <TableCell>{user.status === 1 ? 'Active' : 'Blocked'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default AdminDashboard; 