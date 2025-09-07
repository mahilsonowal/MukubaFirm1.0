import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../utils/supabaseClient';
import { Box, Typography, Paper, Tabs, Tab, CircularProgress, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Alert, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const tabLabels = [
  'Users',
  'Newsletter Subscribers',
  'Contact Messages',
  'Internship Applications',
  'Documents',
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
  const [documents, setDocuments] = useState([]);
  const [deleteDialog, setDeleteDialog] = useState({ open: false, document: null });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const [usersRes, subsRes, contactsRes, internRes, docsRes] = await Promise.all([
          supabase.from('profiles').select('id, name, email, role, created_at'),
          supabase.from('newsletter_subscribers').select('email, created_at'),
          supabase.from('contact_messages').select('name, email, phone, subject, message, created_at'),
          supabase.from('internships').select('name, email, internship_type, resume_url, created_at'),
          fetchAllDocuments(),
        ]);
        if (usersRes.error) throw usersRes.error;
        if (subsRes.error) throw subsRes.error;
        if (contactsRes.error) throw contactsRes.error;
        if (internRes.error) throw internRes.error;
        setUsers(usersRes.data);
        setSubscribers(subsRes.data);
        setContacts(contactsRes.data);
        setInternships(internRes.data);
        setDocuments(docsRes);
      } catch (err) {
        setError(err.message || 'Failed to load admin data.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Document management functions
  const fetchAllDocuments = async () => {
    const documentTypes = [
      { table: 'reports', type: 'Annual Report', bucket: 'reports' },
      { table: 'strategic_plans', type: 'Strategic Plan', bucket: 'strategic-plans' },
      { table: 'research_work', type: 'Research Work', bucket: 'research-work' },
      { table: 'budget_analysis', type: 'Budget Analysis', bucket: 'budget-analysis' },
      { table: 'policy_briefs', type: 'Policy Brief', bucket: 'policy-briefs' },
      { table: 'working_papers', type: 'Working Paper', bucket: 'working-papers' },
      { table: 'parliamentary_submissions', type: 'Parliamentary Submission', bucket: 'parliamentary-submissions' },
      { table: 'miscellaneous_research', type: 'Miscellaneous Research', bucket: 'miscellaneous-research' },
    ];

    const allDocuments = [];
    
    for (const docType of documentTypes) {
      try {
        const { data, error } = await supabase
          .from(docType.table)
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) {
          console.warn(`Error fetching ${docType.table}:`, error);
          continue;
        }
        
        if (data) {
          const docsWithType = data.map(doc => ({
            ...doc,
            document_type: docType.type,
            bucket: docType.bucket,
            table: docType.table,
          }));
          allDocuments.push(...docsWithType);
        }
      } catch (err) {
        console.warn(`Error fetching ${docType.table}:`, err);
      }
    }
    
    return allDocuments.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  };

  const handleDeleteDocument = async (document) => {
    try {
      setLoading(true);
      
      // 1. Delete from storage
      const { error: storageError } = await supabase.storage
        .from(document.bucket)
        .remove([document.file_name]);
      
      if (storageError) {
        console.warn('Storage deletion error:', storageError);
        // Continue with database deletion even if storage fails
      }
      
      // 2. Delete from database
      const { error: dbError } = await supabase
        .from(document.table)
        .delete()
        .eq('id', document.id);
      
      if (dbError) throw dbError;
      
      // 3. Update local state
      setDocuments(prev => prev.filter(doc => doc.id !== document.id));
      setDeleteDialog({ open: false, document: null });
      
    } catch (err) {
      setError(err.message || 'Failed to delete document.');
    } finally {
      setLoading(false);
    }
  };

  const openDeleteDialog = (document) => {
    setDeleteDialog({ open: true, document });
  };

  const closeDeleteDialog = () => {
    setDeleteDialog({ open: false, document: null });
  };

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
            {tab === 4 && (
              <>
                <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-end' }} mb={2}>
                  <Button variant="outlined" size="small" onClick={() => handleExport(documents, 'documents.xlsx')}>Export to Excel</Button>
                </Box>
                <Box sx={{ width: '100%', overflowX: 'auto' }}>
                  <TableContainer component={Paper} sx={{ minWidth: 600 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Title</TableCell>
                          <TableCell>Type</TableCell>
                          <TableCell>Access</TableCell>
                          <TableCell>Uploaded</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {documents.map((doc, idx) => (
                          <TableRow key={idx}>
                            <TableCell>{doc.title}</TableCell>
                            <TableCell>{doc.document_type}</TableCell>
                            <TableCell>
                              <Typography 
                                variant="caption" 
                                sx={{ 
                                  color: doc.access === 'public' ? 'green' : 'orange',
                                  fontWeight: 'bold'
                                }}
                              >
                                {doc.access === 'public' ? 'Public' : 'Paid'}
                              </Typography>
                            </TableCell>
                            <TableCell>{doc.created_at ? new Date(doc.created_at).toLocaleString() : ''}</TableCell>
                            <TableCell>
                              <IconButton
                                size="small"
                                color="error"
                                onClick={() => openDeleteDialog(doc)}
                                disabled={loading}
                              >
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </TableCell>
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
      
      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialog.open}
        onClose={closeDeleteDialog}
        aria-labelledby="delete-dialog-title"
      >
        <DialogTitle id="delete-dialog-title">
          Confirm Document Deletion
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete "{deleteDialog.document?.title}"? 
            This action cannot be undone and will permanently remove the document 
            from both the database and storage.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog} disabled={loading}>
            Cancel
          </Button>
          <Button 
            onClick={() => handleDeleteDocument(deleteDialog.document)} 
            color="error" 
            variant="contained"
            disabled={loading}
          >
            {loading ? <CircularProgress size={20} /> : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminDashboard; 