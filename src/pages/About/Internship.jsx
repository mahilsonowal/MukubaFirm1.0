import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  TextField, 
  Button, 
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Alert
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { supabase } from '../../utils/supabaseClient'; // adjust path as needed

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    color: '#C9AA74',
    fontSize: '24px',
  },
}));

const Internship = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    internshipType: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.resume) {
      setError("Please upload your resume.");
      return;
    }
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // 1. Upload the resume to Supabase Storage
      const fileExt = formData.resume.name.split('.').pop();
      const fileName = `${formData.name.replace(/\s+/g, '_')}_${Date.now()}.${fileExt}`;
      const { data: uploadData, error: uploadError } = await supabase
        .storage
        .from('resumes') // bucket name
        .upload(fileName, formData.resume);

      if (uploadError) throw uploadError;

      // 2. Get the public URL (or signed URL if private)
      const { data: urlData } = supabase
        .storage
        .from('resumes')
        .getPublicUrl(fileName);

      // 3. Insert the application into the internships table
      const { error: insertError } = await supabase
        .from('internships')
        .insert([{
          name: formData.name,
          email: formData.email,
          internship_type: formData.internshipType,
          resume_url: urlData.publicUrl, // or use a signed URL if private
        }]);

      if (insertError) throw insertError;

      setSuccess(true);
      setFormData({ name: '', email: '', resume: null, internshipType: '' });
    } catch (error) {
      console.error('Application submission failed:', error);
      setError('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
    setError(null);
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5' }}>
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: '#0F1E56', 
        color: 'white', 
        py: { xs: 8, md: 10 },
        textAlign: 'center'
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Internship Program
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Join our team and gain valuable experience in economic research and consulting
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Program Overview */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              color: '#1B2441',
              mb: 3
            }}
          >
            Program Overview
          </Typography>
          <Typography 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: '1.1rem'
            }}
          >
            Our internship program offers hands-on experience in economic research, policy analysis, and consulting services. 
            Interns work directly with our experienced team members on real-world projects.
          </Typography>
        </Box>

        {/* What You'll Learn */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              color: '#1B2441',
              mb: 4,
              textAlign: 'center'
            }}
          >
            What You'll Learn
          </Typography>
          <Grid 
            container 
            spacing={4}
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)'
              },
              gap: 3
            }}
          >
            <Grid>
              <StyledPaper elevation={2}>
                <IconWrapper>
                  <SchoolIcon />
                </IconWrapper>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    color: '#1B2441',
                    mb: 2
                  }}
                >
                  Research Methodologies
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Learn advanced research techniques and methodologies used in economic analysis.
                </Typography>
              </StyledPaper>
            </Grid>
            <Grid>
              <StyledPaper elevation={2}>
                <IconWrapper>
                  <TrendingUpIcon />
                </IconWrapper>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    color: '#1B2441',
                    mb: 2
                  }}
                >
                  Data Analysis
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Gain hands-on experience with data analysis tools and techniques.
                </Typography>
              </StyledPaper>
            </Grid>
            <Grid>
              <StyledPaper elevation={2}>
                <IconWrapper>
                  <BusinessCenterIcon />
                </IconWrapper>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    color: '#1B2441',
                    mb: 2
                  }}
                >
                  Report Writing
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Develop professional report writing and presentation skills.
                </Typography>
              </StyledPaper>
            </Grid>
          </Grid>
        </Box>

        {/* Internship Types */}
        <Grid container display="grid" gridTemplateColumns="repeat(2, 1fr)" spacing={4} sx={{ mb: 8 }}>
          {/* Research Internship */}
          <Grid sx={{ 
            gridColumn: { xs: 'span 12', lg: 'span 6' }
          }}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 700,
                  color: '#1B2441',
                  mb: 3
                }}
              >
                Research Internship
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  color: '#C9AA74',
                  fontWeight: 600,
                  mb: 3
                }}
              >
                Duration: 3-6 months
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    color: '#1B2441',
                    mb: 2
                  }}
                >
                  Requirements
                </Typography>
                <List>
                  {[
                    'Currently pursuing or completed degree in Economics, Statistics, or related field',
                    'Strong analytical and research skills',
                    'Proficiency in data analysis tools'
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Box 
                          component="span" 
                          sx={{ 
                            width: 6, 
                            height: 6, 
                            borderRadius: '50%', 
                            bgcolor: '#C9AA74' 
                          }} 
                        />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    color: '#1B2441',
                    mb: 2
                  }}
                >
                  Responsibilities
                </Typography>
                <List>
                  {[
                    'Assist in economic research projects',
                    'Data collection and analysis',
                    'Report writing and presentation'
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Box 
                          component="span" 
                          sx={{ 
                            width: 6, 
                            height: 6, 
                            borderRadius: '50%', 
                            bgcolor: '#C9AA74' 
                          }} 
                        />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Paper>
          </Grid>

          {/* Business Development Internship */}
          <Grid sx={{ 
            gridColumn: { xs: 'span 12', lg: 'span 6' }
          }}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 700,
                  color: '#1B2441',
                  mb: 3
                }}
              >
                Business Development Internship
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  color: '#C9AA74',
                  fontWeight: 600,
                  mb: 3
                }}
              >
                Duration: 3-6 months
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    color: '#1B2441',
                    mb: 2
                  }}
                >
                  Requirements
                </Typography>
                <List>
                  {[
                    'Background in Business, Marketing, or Economics',
                    'Excellent communication skills',
                    'Project management abilities'
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Box 
                          component="span" 
                          sx={{ 
                            width: 6, 
                            height: 6, 
                            borderRadius: '50%', 
                            bgcolor: '#C9AA74' 
                          }} 
                        />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    color: '#1B2441',
                    mb: 2
                  }}
                >
                  Responsibilities
                </Typography>
                <List>
                  {[
                    'Support business development initiatives',
                    'Market research and analysis',
                    'Client relationship management'
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Box 
                          component="span" 
                          sx={{ 
                            width: 6, 
                            height: 6, 
                            borderRadius: '50%', 
                            bgcolor: '#C9AA74' 
                          }} 
                        />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Application Form */}
        <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              color: '#1B2441',
              mb: 2,
              textAlign: 'center'
            }}
          >
            Apply Now
          </Typography>
          <Typography 
            sx={{ 
              color: 'text.secondary',
              mb: 4,
              textAlign: 'center'
            }}
          >
            Ready to start your journey with us? Submit your application today.
          </Typography>
          <Paper elevation={2} sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
              {success && <Alert severity="success" sx={{ mb: 2 }}>Application submitted successfully!</Alert>}
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                sx={{ mb: 3 }}
                disabled={loading}
              />
              <TextField
                fullWidth
                label="Internship Type (e.g. Research, Business Development)"
                variant="outlined"
                value={formData.internshipType}
                onChange={(e) => setFormData({ ...formData, internshipType: e.target.value })}
                required
                sx={{ mb: 3 }}
                disabled={loading}
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                sx={{ mb: 3 }}
                disabled={loading}
              />
              <Box sx={{ mb: 3 }}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    color: 'text.primary',
                    mb: 1
                  }}
                >
                  Resume
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<UploadFileIcon />}
                  disabled={loading}
                  sx={{ 
                    width: '100%',
                    py: 1.5,
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                    '&:hover': {
                      borderColor: '#C9AA74',
                      backgroundColor: 'rgba(201, 170, 116, 0.04)'
                    }
                  }}
                >
                  {formData.resume ? formData.resume.name : 'Choose file'}
                  <input
                    type="file"
                    hidden
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    disabled={loading}
                  />
                </Button>
              </Box>
              <Typography sx={{ color: 'warning.main', mb: 2, fontWeight: 500, textAlign: 'center' }}>
                <b>Note:</b> The name of your resume file matters a lot as it will be used to define your application resume. Please use a clear and identifiable filename (e.g., <i>Firstname_Lastname_Resume.pdf</i>).
              </Typography>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{ 
                  bgcolor: '#0F1E56',
                  py: 1.5,
                  '&:hover': {
                    bgcolor: '#0a1640'
                  },
                  position: 'relative'
                }}
              >
                {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Submit Application'}
              </Button>
            </form>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Internship; 