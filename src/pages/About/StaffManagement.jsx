import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, IconButton, Chip, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookIcon from '@mui/icons-material/Book';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import BusinessIcon from '@mui/icons-material/Business';
import ComputerIcon from '@mui/icons-material/Computer';
import GroupIcon from '@mui/icons-material/Group';

const StaffCard = styled(Paper)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '200px',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

const StaffManagement = () => {
  const departments = [
    {
      id: 'research',
      name: 'Research Department',
      icon: <BookIcon sx={{ fontSize: '2rem', color: '#C9AA74' }} />,
      description: 'Focuses on applied research, evaluations, and policy briefs.',
      staff: [
        {
          id: 'director-research',
          name: 'Director of Research',
          title: 'Research Department',
          description: 'Leading research initiatives, methodologies, quality control, and publications. Oversees team of economists, policy analysts, and statisticians.',
          image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPgo=',
          socials: {
            linkedin: '#',
            email: 'research@mukuba.com'
          },
          specialties: [
            'Applied Research',
            'Policy Analysis',
            'Economic Evaluation'
          ],
          placeholder: true
        },
        {
          id: 'economists',
          name: 'Team of Economists',
          title: 'Research Department',
          description: 'Specialized economists conducting applied research, data analysis, and economic modeling for policy development.',
          image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPgo=',
          socials: {
            linkedin: '#',
            email: 'economists@mukuba.com'
          },
          specialties: [
            'Economic Modeling',
            'Data Analysis',
            'Policy Research'
          ],
          placeholder: true
        },
        {
          id: 'policy-analysts',
          name: 'Policy Analysts & Statisticians',
          title: 'Research Department',
          description: 'Expert policy analysts and statisticians providing rigorous analysis and evidence-based policy recommendations.',
          image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPgo=',
          socials: {
            linkedin: '#',
            email: 'analysts@mukuba.com'
          },
          specialties: [
            'Policy Analysis',
            'Statistical Analysis',
            'Evidence-Based Research'
          ],
          placeholder: true
        }
      ]
    },
    {
      id: 'consulting',
      name: 'Consulting & Advisory Department',
      icon: <AnalyticsIcon sx={{ fontSize: '2rem', color: '#C9AA74' }} />,
      description: 'Delivers customized consulting services to governments, NGOs, and the private sector.',
      staff: [
        {
          id: 'finance-admin-manager',
          name: 'Finance & Admin Manager',
          title: 'Consulting & Advisory Department',
          description: 'Managing financial planning, resource allocation, reporting, and compliance for consulting services.',
          image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPgo=',
          socials: {
            linkedin: '#',
            email: 'finance@mukuba.com'
          },
          specialties: [
            'Financial Management',
            'Resource Allocation',
            'Compliance'
          ],
          placeholder: true
        }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing & Client Relations Department',
      icon: <BusinessIcon sx={{ fontSize: '2rem', color: '#C9AA74' }} />,
      description: 'Drives proposal writing, communications, stakeholder outreach.',
      staff: [
        {
          id: 'client-relations-manager',
          name: 'Client Relations Manager',
          title: 'Marketing & Client Relations Department',
          description: 'Driving proposal writing, communications, stakeholder outreach, and client relationship management.',
          image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPgo=',
          socials: {
            linkedin: '#',
            email: 'clientrelations@mukuba.com'
          },
          specialties: [
            'Client Relations',
            'Proposal Writing',
            'Stakeholder Outreach'
          ],
          placeholder: true
        }
      ]
    },
    {
      id: 'it',
      name: 'Information Technology (IT) Department',
      icon: <ComputerIcon sx={{ fontSize: '2rem', color: '#C9AA74' }} />,
      description: 'Manages firm\'s digital infrastructure, cybersecurity, technical support, and research tools.',
      staff: [
        {
          id: 'christopher-siatwiinda',
          name: 'Mr. Christopher Siatwiinda',
          title: 'IT Manager',
          description: 'Managing firm\'s digital infrastructure, cybersecurity, technical support, and research tools.',
          image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPgo=',
          socials: {
            linkedin: '#',
            email: 'christopher@mukuba.com'
          },
          specialties: [
            'Digital Infrastructure',
            'Cybersecurity',
            'Technical Support'
          ],
          placeholder: true
        }
      ]
    },
    {
      id: 'programs',
      name: 'Programs Department',
      icon: <GroupIcon sx={{ fontSize: '2rem', color: '#C9AA74' }} />,
      description: 'Specialized programs and initiatives for economic development and capacity building.',
      staff: [
        {
          id: 'thomson-silomba',
          name: 'Thomson Silomba',
          title: 'Program Director - Pathways of Success Program',
          description: 'A leader driven by Christian faith and diversity, founder of Rethinking Economics Zambia, and advocate for economic discussions.',
          image: '/assets/staff/thomson-silomba.jpg',
          socials: {
            linkedin: '#',
            email: 'thomson@mukuba.com'
          },
          specialties: [
            'Economic Program Management',
            'Youth Empowerment',
            'Economic Education'
          ]
        }
      ]
    }
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, py: 6, px: 2, borderRadius: 1 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              mb: 2,
              color: '#1B2441',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }
            }}
          >
            Staff Management
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#C9AA74',
              fontWeight: 600,
              mb: 0,
              fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Our dedicated staff organized by functional departments driving excellence in economic consulting.
          </Typography>
        </Box>

        {/* Department Sections */}
        {departments.map((department, index) => (
          <Box key={department.id} sx={{ mb: { xs: 6, md: 8 } }}>
            {/* Department Header */}
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                {department.icon}
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700,
                    color: '#1B2441',
                    ml: 2,
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                  }}
                >
                  {department.name}
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                {department.description}
              </Typography>
            </Box>

            {/* Staff Grid for this Department */}
            <Grid 
              container 
              spacing={3}
              sx={{ maxWidth: '1200px', mx: 'auto' }}
            >
              {department.staff.map((staff) => (
                <Grid 
                  key={staff.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{ display: 'flex' }}
                >
                  <StaffCard elevation={2} sx={{ 
                    width: '100%', 
                    maxWidth: '350px',
                    minWidth: '300px',
                    display: 'flex', 
                    flexDirection: 'column',
                    mx: 'auto'
                  }}>
                    <ImageContainer sx={{
                      height: '280px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      '& img': {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        transition: 'transform 0.5s ease',
                      },
                    }}>
                      <img
                        src={staff.image}
                        alt={staff.name}
                      />
                    </ImageContainer>

                    <Box sx={{ 
                      p: 3, 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column',
                      minHeight: '200px'
                    }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600,
                          color: '#1B2441',
                          mb: 0.5,
                          fontSize: '1rem',
                          lineHeight: 1.3
                        }}
                      >
                        {staff.name}
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: '#C9AA74',
                          fontWeight: 600,
                          mb: 1.5,
                          fontSize: '0.9rem'
                        }}
                      >
                        {staff.title}
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: 'text.secondary',
                          mb: 2,
                          fontSize: '0.85rem',
                          lineHeight: 1.5,
                          flexGrow: 1
                        }}
                      >
                        {staff.description}
                      </Typography>

                      {/* Specialties */}
                      <Box sx={{ mb: 1.5, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {staff.specialties.map((specialty, index) => (
                          <Chip
                            key={index}
                            label={specialty}
                            size="small"
                            sx={{
                              backgroundColor: '#f5f5f5',
                              color: '#1B2441',
                              fontSize: '0.65rem',
                              height: '18px'
                            }}
                          />
                        ))}
                      </Box>

                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        mt: 'auto'
                      }}>
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                          <IconButton 
                            size="small"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(staff.socials.linkedin, '_blank');
                            }}
                            sx={{ 
                              color: 'text.secondary',
                              '&:hover': { color: '#C9AA74' },
                              padding: '4px'
                            }}
                          >
                            <LinkedInIcon sx={{ fontSize: '1rem' }} />
                          </IconButton>
                          <IconButton 
                            size="small"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.location.href = `mailto:${staff.socials.email}`;
                            }}
                            sx={{ 
                              color: 'text.secondary',
                              '&:hover': { color: '#C9AA74' },
                              padding: '4px'
                            }}
                          >
                            <EmailIcon sx={{ fontSize: '1rem' }} />
                          </IconButton>
                        </Box>
                        {!staff.placeholder && staff.id === 'thomson-silomba' ? (
                          <Typography 
                            component={Link}
                            to="/about/staff/thomson-silomba"
                            sx={{ 
                              color: '#C9AA74',
                              fontSize: '0.8rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              textDecoration: 'none',
                              '&:hover': { textDecoration: 'underline' }
                            }}
                          >
                            View Profile <ArrowForwardIcon sx={{ fontSize: '0.9rem' }} />
                          </Typography>
                        ) : !staff.placeholder && (
                          <Typography 
                            sx={{ 
                              color: '#C9AA74',
                              fontSize: '0.8rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5
                            }}
                          >
                            View Profile <ArrowForwardIcon sx={{ fontSize: '0.9rem' }} />
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </StaffCard>
                </Grid>
              ))}
            </Grid>

            {/* Divider between departments (except for the last one) */}
            {index < departments.length - 1 && (
              <Divider sx={{ mt: 6, borderColor: '#C9AA74', opacity: 0.3 }} />
            )}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default StaffManagement; 