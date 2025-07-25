import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../utils/supabaseClient';
import { Box, Typography, Paper, Tabs, Tab, CircularProgress, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Alert } from '@mui/material';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const tabLabels = [
  'Users',
  'Newsletter Subscribers',
  'Contact Messages',
  'Internship Applications',
];

const AdminDashboard = () => {
  const { user } = useAuth();
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const [usersRes, subsRes, contactsRes, internRes] = await Promise.all([
          supabase.from('profiles').select('id, name, email, role, created_at'),
          supabase.from('newsletter_subscribers').select('email, created_at'),
          supabase.from('contact_messages').select('name, email, phone, subject, message, created_at'),
          supabase.from('internships').select('name, email, internship_type, resume_url, created_at'),
        ]);
        if (usersRes.error) throw usersRes.error;
        if (subsRes.error) throw subsRes.error;
        if (contactsRes.error) throw contactsRes.error;
        if (internRes.error) throw internRes.error;
        setUsers(usersRes.data);
        setSubscribers(subsRes.data);
        setContacts(contactsRes.data);
        setInternships(internRes.data);
      } catch (err) {
        setError(err.message || 'Failed to load admin data.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleExport = (data, filename) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, filename);
  };

  return (
    <Box maxWidth={1200} mx="auto" mt={{ xs: 2, md: 8 }} px={{ xs: 1, sm: 2 }}>
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
          Admin Dashboard
        </Typography>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          sx={{ mb: 3, minHeight: 'unset', '.MuiTab-root': { minHeight: 'unset', fontSize: { xs: '0.8rem', sm: '1rem' } } }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabLabels.map((label, idx) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="40vh">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            {tab === 0 && (
              <>
                <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-end' }} mb={2}>
                  <Button variant="outlined" size="small" onClick={() => handleExport(users, 'users.xlsx')}>Export to Excel</Button>
                </Box>
                <Box sx={{ width: '100%', overflowX: 'auto' }}>
                  <TableContainer component={Paper} sx={{ minWidth: 350 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Role</TableCell>
                          <TableCell>Registered</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {users.filter(u => u.role === 'user').map((u) => (
                          <TableRow key={u.id}>
                            <TableCell>{u.name}</TableCell>
                            <TableCell>{u.email}</TableCell>
                            <TableCell>{u.role}</TableCell>
                            <TableCell>{u.created_at ? new Date(u.created_at).toLocaleString() : ''}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </>
            )}
            {tab === 1 && (
              <>
                <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-end' }} mb={2}>
                  <Button variant="outlined" size="small" onClick={() => handleExport(subscribers, 'newsletter_subscribers.xlsx')}>Export to Excel</Button>
                </Box>
                <Box sx={{ width: '100%', overflowX: 'auto' }}>
                  <TableContainer component={Paper} sx={{ minWidth: 300 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Email</TableCell>
                          <TableCell>Subscribed</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {subscribers.map((s, i) => (
                          <TableRow key={i}>
                            <TableCell>{s.email}</TableCell>
                            <TableCell>{s.created_at ? new Date(s.created_at).toLocaleString() : ''}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </>
            )}
            {tab === 2 && (
              <>
                <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-end' }} mb={2}>
                  <Button variant="outlined" size="small" onClick={() => handleExport(contacts, 'contact_messages.xlsx')}>Export to Excel</Button>
                </Box>
                <Box sx={{ width: '100%', overflowX: 'auto' }}>
                  <TableContainer component={Paper} sx={{ minWidth: 500 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Phone</TableCell>
                          <TableCell>Subject</TableCell>
                          <TableCell>Message</TableCell>
                          <TableCell>Submitted</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {contacts.map((c, i) => (
                          <TableRow key={i}>
                            <TableCell>{c.name}</TableCell>
                            <TableCell>{c.email}</TableCell>
                            <TableCell>{c.phone}</TableCell>
                            <TableCell>{c.subject}</TableCell>
                            <TableCell>{c.message}</TableCell>
                            <TableCell>{c.created_at ? new Date(c.created_at).toLocaleString() : ''}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </>
            )}
            {tab === 3 && (
              <>
                <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-end' }} mb={2}>
                  <Button variant="outlined" size="small" onClick={() => handleExport(internships, 'internships.xlsx')}>Export to Excel</Button>
                </Box>
                <Box sx={{ width: '100%', overflowX: 'auto' }}>
                  <TableContainer component={Paper} sx={{ minWidth: 350 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Internship Type</TableCell>
                          <TableCell>Resume</TableCell>
                          <TableCell>Applied</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {internships.map((i, idx) => (
                          <TableRow key={idx}>
                            <TableCell>{i.name}</TableCell>
                            <TableCell>{i.email}</TableCell>
                            <TableCell>{i.internship_type || '-'}</TableCell>
                            <TableCell>
                              {i.resume_url ? (
                                <a href={i.resume_url} target="_blank" rel="noopener noreferrer">View Resume</a>
                              ) : 'Not uploaded'}
                            </TableCell>
                            <TableCell>{i.created_at ? new Date(i.created_at).toLocaleString() : ''}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </>
            )}
          </>
        )}
      </Paper>
    </Box>
  );
};

export default AdminDashboard; 