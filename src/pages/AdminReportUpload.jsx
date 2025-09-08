import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import {
  Box, Paper, Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl, Alert, CircularProgress, Stack
} from '@mui/material';

const reportTypes = [
  { label: 'Annual Report', value: 'reports', table: 'reports' },
  { label: 'Strategic Plan', value: 'strategic-plans', table: 'strategic_plans' },
  { label: 'Research Work', value: 'research-work', table: 'research_work' },
  { label: 'Budget Analysis', value: 'budget-analysis', table: 'budget_analysis' },
  { label: 'Policy Brief', value: 'policy-briefs', table: 'policy_briefs' },
  { label: 'Working Paper', value: 'working-papers', table: 'working_papers' },
  { label: 'Parliamentary Submission', value: 'parliamentary-submissions', table: 'parliamentary_submissions' },
  { label: 'Miscellaneous Research', value: 'miscellaneous-research', table: 'miscellaneous_research' },
];

const accessTypes = [
  { value: 'public', label: 'Public/Free' },
  { value: 'paid', label: 'Paid' },
];

const AdminReportUpload = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    reportType: reportTypes[0].value,
    access: 'public',
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [showReloadSuccess, setShowReloadSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('report_upload_success')) {
      setShowReloadSuccess(true);
      localStorage.removeItem('report_upload_success');
      setTimeout(() => setShowReloadSuccess(false), 2000);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.file || !form.title || !form.reportType) {
      setError('Please fill all required fields and select a PDF file.');
      return;
    }
    setLoading(true);
    try {
      // 1. Upload PDF to Supabase Storage (bucket: 'reports')
      const fileExt = form.file.name.split('.').pop();
      // Keep the original title for display, but sanitize for filename
      const sanitizedTitle = form.title
        .replace(/['"]/g, '') // Remove apostrophes and quotes
        .replace(/[:;]/g, '') // Remove colons and semicolons
        .replace(/[<>|*?]/g, '') // Remove other problematic characters
        .replace(/\s+/g, '_') // Replace spaces with underscores
        .replace(/[^\w\-_.]/g, ''); // Keep only safe characters
      const fileName = `${sanitizedTitle}_${Date.now()}.${fileExt}`;
      const originalFileName = form.file.name;
      const selectedType = reportTypes.find(t => t.value === form.reportType);
      const bucket = selectedType.value;
      const table = selectedType.table;

      const { data: uploadData, error: uploadError } = await supabase
        .storage
        .from(bucket)
        .upload(fileName, form.file);
      if (uploadError) throw uploadError;

      // 2. Get public or signed URL
      let fileUrl = '';
      if (form.access === 'public') {
        const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
        fileUrl = data.publicUrl;
      } else {
        const { data, error } = await supabase.storage.from(bucket).createSignedUrl(fileName, 60 * 60 * 24 * 30); // 30 days
        if (error) throw error;
        fileUrl = data.signedUrl;
      }

      // 3. Insert metadata into 'reports' table
      const { error: insertError } = await supabase.from(table).insert([
        {
          title: form.title,
          description: form.description,
          access: form.access,
          file_url: fileUrl,
          file_name: fileName,
          original_file_name: originalFileName,
        },
      ]);
      if (insertError) throw insertError;

      setSuccess('Report uploaded successfully!');
      setForm({ title: '', description: '', reportType: reportTypes[0].value, access: 'public', file: null });
      localStorage.setItem('report_upload_success', '1');
      window.location.reload();
    } catch (err) {
      setError(err.message || 'Upload failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maxWidth={600} mx="auto" mt={8}>
      <Paper elevation={4} sx={{ p: 5, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight={700} color="text.primary" gutterBottom align="center">
          Upload New Report/Research PDF
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
              multiline
              minRows={2}
              fullWidth
            />
            <FormControl fullWidth required>
              <InputLabel>Report/Research Type</InputLabel>
              <Select
                name="reportType"
                value={form.reportType}
                label="Report/Research Type"
                onChange={handleChange}
              >
                {reportTypes.map((type) => (
                  <MenuItem key={type.value} value={type.value}>{type.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth required>
              <InputLabel>Access Type</InputLabel>
              <Select
                name="access"
                value={form.access}
                label="Access Type"
                onChange={handleChange}
              >
                {accessTypes.map((type) => (
                  <MenuItem key={type.value} value={type.value}>{type.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="outlined"
              component="label"
              sx={{ py: 1.5, borderColor: '#C9AA74', color: '#1B2441', fontWeight: 600 }}
              disabled={loading}
            >
              {form.file ? form.file.name : 'Choose PDF File'}
              <input
                type="file"
                name="file"
                hidden
                accept=".pdf"
                onChange={handleChange}
                required
                disabled={loading}
              />
            </Button>
            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
            {showReloadSuccess && <Alert severity="success">Uploaded successfully!</Alert>}
            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: '#C9AA74', color: 'white', fontWeight: 600, py: 1.5, borderRadius: 2, '&:hover': { bgcolor: '#AF9871' } }}
              disabled={loading}
              fullWidth
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Upload'}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default AdminReportUpload; 