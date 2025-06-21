import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import LaptopIcon from '@mui/icons-material/Laptop';
import BusinessIcon from '@mui/icons-material/Business';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledPaper = styled(Paper)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const programs = [
  {
    icon: <SchoolIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Professional Training",
    description: "Specialized training programs for professionals in economic analysis, research, and policy development."
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Workshops & Seminars",
    description: "Interactive sessions on current economic trends, policy analysis, and research methodologies."
  },
  {
    icon: <LaptopIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Digital Skills",
    description: "Training in economic modeling, data analysis tools, and research software applications."
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Institutional Development",
    description: "Comprehensive programs to strengthen organizational capacity in economic research and analysis."
  },
  {
    icon: <CardMembershipIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Certification Programs",
    description: "Recognized certifications in economic research, policy analysis, and project evaluation."
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Mentorship",
    description: "One-on-one guidance from experienced economists and research professionals."
  }
];

const courses = [
  {
    title: "Economic Analysis",
    modules: [
      "Macroeconomic Analysis",
      "Financial Market Analysis",
      "Trade & Investment",
      "Policy Impact Assessment"
    ]
  },
  {
    title: "Research Methods",
    modules: [
      "Research Design",
      "Data Collection",
      "Statistical Analysis",
      "Report Writing"
    ]
  },
  {
    title: "Policy Development",
    modules: [
      "Policy Framework",
      "Stakeholder Analysis",
      "Implementation Strategy",
      "Monitoring & Evaluation"
    ]
  },
  {
    title: "Technical Skills",
    modules: [
      "Economic Modeling",
      "Data Visualization",
      "Statistical Software",
      "Research Tools"
    ]
  }
];

const benefits = [
  {
    icon: <SchoolIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Expert Trainers",
    description: "Learn from industry professionals with extensive experience"
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Recognized Certification",
    description: "Earn valuable credentials recognized in the industry"
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 32, color: '#C9AA74' }} />,
    title: "Flexible Learning",
    description: "Programs designed to fit your schedule and learning pace"
  }
];

const CapacityBuilding = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 5 }, bgcolor: '#f5f5f5' }}>
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#1B2441', py: { xs: 8, md: 10 }, color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
              <Link to="/pages/services" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
                Services
              </Link>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>/</Typography>
              <Typography>Capacity Building</Typography>
            </Box>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              Capacity Building and Training
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 400,
                maxWidth: '800px'
              }}
            >
              Empowering professionals and organizations with the knowledge and skills needed for economic research, analysis, and policy development.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Main Image with Overlay */}
        <Box 
          sx={{ 
            position: 'relative',
            mb: 6,
            borderRadius: 2,
            overflow: 'hidden',
            '&:hover .overlay': {
              opacity: 1,
            }
          }}
        >
          {/* <Box
            component="img"
            src="/src/assets/serv4.jpg"
            alt="Capacity Building"
            sx={{
              width: '100%',
              height: { xs: 300, md: 500 },
              objectFit: 'cover',
            }}
          />
          <Box
            className="overlay"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              p: 3,
              opacity: 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
              Professional Development
            </Typography>
            <Typography>
              Building expertise through comprehensive training programs
            </Typography>
          </Box> */}
        </Box>

        {/* Programs Section */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 4, md: 6 },
            mb: 6,
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#1B2441',
              fontWeight: 600,
              mb: 2
            }}
          >
            Our Training Programs
          </Typography>
          <Typography 
            sx={{ 
              color: 'text.secondary',
              mb: 4,
              maxWidth: '800px'
            }}
          >
            We offer comprehensive capacity building programs designed to enhance skills and knowledge in economic research and analysis.
          </Typography>
          <Grid 
            container 
            display="flex" 
            justifyContent="center" 
            alignItems="stretch" 
            spacing={3}
          >
            {programs.map((program, index) => (
              <Grid 
                key={index}
                sx={{ 
                  flexBasis: { xs: '100%', sm: '50%', md: '33.33%' },
                  maxWidth: { xs: '100%', sm: '50%', md: '33.33%' }
                }}
              >
                <StyledPaper elevation={2}>
                  <Box sx={{ mb: 2 }}>
                    {program.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#1B2441',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {program.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '0.875rem'
                    }}
                  >
                    {program.description}
                  </Typography>
                </StyledPaper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Course Modules Section */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 4, md: 6 },
            mb: 6,
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#1B2441',
              fontWeight: 600,
              mb: 2
            }}
          >
            Course Modules
          </Typography>
          <Typography 
            sx={{ 
              color: 'text.secondary',
              mb: 4,
              maxWidth: '800px'
            }}
          >
            Our training modules cover essential areas of economic research and analysis, delivered through interactive and practical sessions.
          </Typography>
          <Grid 
            container 
            display="flex" 
            justifyContent="center" 
            alignItems="stretch" 
            spacing={3}
          >
            {courses.map((course, index) => (
              <Grid 
                key={index}
                sx={{ 
                  flexBasis: { xs: '100%', sm: '50%', md: '25%' },
                  maxWidth: { xs: '100%', sm: '50%', md: '25%' }
                }}
              >
                <StyledPaper elevation={2}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#1B2441',
                      fontWeight: 600,
                      mb: 2
                    }}
                  >
                    {course.title}
                  </Typography>
                  <List dense>
                    {course.modules.map((module, moduleIndex) => (
                      <ListItem key={moduleIndex} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <Box 
                            sx={{ 
                              width: 8, 
                              height: 8, 
                              borderRadius: '50%', 
                              bgcolor: '#C9AA74' 
                            }} 
                          />
                        </ListItemIcon>
                        <ListItemText 
                          primary={module}
                          sx={{ 
                            '& .MuiListItemText-primary': {
                              fontSize: '0.875rem',
                              color: 'text.secondary'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </StyledPaper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Benefits Section */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 4, md: 6 },
            mb: 6,
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#1B2441',
              fontWeight: 600,
              mb: 2,
              textAlign: 'center'
            }}
          >
            Why Choose Our Training Programs?
          </Typography>
          <Grid 
            container 
            display="flex" 
            justifyContent="center" 
            alignItems="stretch" 
            spacing={3}
          >
            {benefits.map((benefit, index) => (
              <Grid 
                key={index}
                sx={{ 
                  flexBasis: { xs: '100%', sm: '50%', md: '33.33%' },
                  maxWidth: { xs: '100%', sm: '50%', md: '33.33%' }
                }}
              >
                <StyledPaper elevation={2}>
                  <Box 
                    sx={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      {benefit.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#1B2441',
                        fontWeight: 600,
                        mb: 1
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: '0.875rem'
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </Box>
                </StyledPaper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* CTA Section */}
        <Box 
          sx={{ 
            bgcolor: '#1B2441',
            borderRadius: 2,
            p: { xs: 4, md: 6 },
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 600,
              mb: 2
            }}
          >
            Enhance Your Team's Capabilities
          </Typography>
          <Typography 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Let us help you develop your team's skills and expertise through our comprehensive training programs and expert mentorship.
          </Typography>
          <Button
            component={Link}
            to="/pages/contact"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: 'white',
              color: '#1B2441',
              px: 4,
              py: 1.5,
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              }
            }}
          >
            Start Your Learning Journey
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CapacityBuilding; 