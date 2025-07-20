import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link as MuiLink,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Link as RouterLink } from 'react-router-dom';

const PathwaysDetails = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const slides = [
    {
      image: '/assets/youth-leadership.jpg',
      alt: 'Youth Empowerment',
      title: 'Youth Empowerment',
      description: 'Developing future leaders through comprehensive training and mentorship'
    },
    {
      image: '/assets/organization-building.jpg',
      alt: 'Organizational Development',
      title: 'Organizational Development',
      description: 'Strengthening institutional capacity and strategic planning'
    },
    {
      image: '/assets/economic-empowerment.jpg',
      alt: 'Economic Empowerment',
      title: 'Economic Empowerment',
      description: 'Creating sustainable economic opportunities and growth'
    },
    {
      image: '/assets/community-development.jpg',
      alt: 'Community Impact',
      title: 'Community Impact',
      description: 'Building stronger, more resilient communities'
    }
  ];

  const sections = [
    {
      title: "Past Events",
      description: "Explore our previous programs and webinars",
      path: "/pathways-details/past-events",
      icon: <BusinessCenterIcon sx={{ color: '#C9AA74', fontSize: 40 }} />
    },
    {
      title: "Our Sponsors",
      description: "Meet the organizations supporting our mission",
      path: "/pathways-details/sponsors",
      icon: <WorkspacePremiumIcon sx={{ color: '#C9AA74', fontSize: 40 }} />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch event handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide(); // swipe left
        } else {
          prevSlide(); // swipe right
        }
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <Box sx={{ py: { xs: 1, md: 2 }, bgcolor: 'white' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: '#1B2441',
          color: 'white',
          py: { xs: 6, md: 8 },
          mb: 2
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Pathways of Success
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '800px'
            }}
          >
            A comprehensive development program designed for youth and organizations
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Program Overview with Slider */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 4, md: 6 },
            mb: 2,
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#1B2441',
              fontWeight: 600,
              mb: 4
            }}
          >
            Program Profile
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1B2441' }}>
              Program Name: <Box component="span" sx={{ fontWeight: 400 }}>Pathways of Success</Box>
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1B2441' }}>
              Program Type: <Box component="span" sx={{ fontWeight: 400 }}>Youth and Professional Development Initiative</Box>
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1B2441' }}>
              Powered by: <Box component="span" sx={{ fontWeight: 400 }}>Mukuba Economic Research and Consulting Firm</Box>
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1B2441' }}>
              Delivery Format: <Box component="span" sx={{ fontWeight: 400 }}>Webinars, Events, Outreach, and Mentorship</Box>
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1B2441' }}>
              Frequency: <Box component="span" sx={{ fontWeight: 400 }}>Biannual (with additional sessions as needed)</Box>
            </Typography>
          </Box>

          <Typography variant="h5" sx={{ color: '#1B2441', fontWeight: 600, mb: 2 }}>
            Program Overview
          </Typography>
          {/* Image Slider */}
          <Box 
            sx={{ 
              position: 'relative',
              height: { xs: 300, md: 400 },
              mb: 4,
              borderRadius: 2,
              overflow: 'hidden'
            }}
            onTouchStart={isMobile ? handleTouchStart : undefined}
            onTouchMove={isMobile ? handleTouchMove : undefined}
            onTouchEnd={isMobile ? handleTouchEnd : undefined}
          >
            {slides.map((slide, index) => (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: currentSlide === index ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box
                  component="img"
                  src={slide.image}
                  alt={slide.alt}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    p: 3
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    {slide.title}
                  </Typography>
                  <Typography variant="body1">
                    {slide.description}
                  </Typography>
                </Box>
              </Box>
            ))}

            {/* Navigation Buttons */}
            {!isMobile && (
              <>
                <IconButton
                  onClick={prevSlide}
                  sx={{
                    position: 'absolute',
                    left: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.7)'
                    }
                  }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <IconButton
                  onClick={nextSlide}
                  sx={{
                    position: 'absolute',
                    right: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.7)'
                    }
                  }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </>
            )}

            {/* Slide Indicators */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 1
              }}
            >
              {slides.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  sx={{
                    width: currentSlide === index ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    bgcolor: currentSlide === index ? '#C9AA74' : 'rgba(255, 255, 255, 0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Overview Content */}
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              mb: 3
            }}
          >
            Pathways of Success is a dynamic and impact-driven initiative designed to equip youth and professionals with the skills, insights, and strategies required to succeed in the modern corporate world. Through expert-led discussions and practical guidance, the program addresses key workplace challenges and supports career advancement by promoting personal and professional development.
            Participants are empowered to enhance their profiles, improve their workplace performance, and contribute meaningfully to their organizations and communities.
          </Typography>

                  {/* Target Audience Section */}
        
           <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1B2441' }}>
             Target Audience
           </Typography>
           <Typography variant="subtitle1" sx={{ color: '#C9AA74', mb: 2 }}>
             Who can benefit from our program?
           </Typography>
           <Typography variant="body1" sx={{ mb: 1 }}>
             The Pathways of Success program is designed to empower and support a diverse range of participants, including:
           </Typography>
           <List>
             <ListItem>
               <ListItemIcon><PersonIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
               <ListItemText primary="Youth and Young Adults" />
             </ListItem>
             <ListItem>
               <ListItemIcon><PersonIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
               <ListItemText primary="University and College Students" />
             </ListItem>
             <ListItem>
               <ListItemIcon><PersonIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
               <ListItemText primary="Community Leaders" />
             </ListItem>
             <ListItem>
               <ListItemIcon><PersonIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
               <ListItemText primary="Non-Governmental Organizations (NGOs)" />
             </ListItem>
             <ListItem>
               <ListItemIcon><PersonIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
               <ListItemText primary="Aspiring Entrepreneurs" />
             </ListItem>
             <ListItem>
               <ListItemIcon><PersonIcon sx={{ color: '#C9AA74' }} /></ListItemIcon>
               <ListItemText primary="Educators and Mentors" />
             </ListItem>
           </List>
      

         {/* Vision & Mission Section */}

           <Typography variant="h6" sx={{ fontWeight: 700, mb: 2,mt:2, color: '#1B2441' }}>
             Vision & Mission
           </Typography>
           <Typography variant="h7" sx={{ fontWeight: 600, mb: 1, color: '#1B2441' }}>
             Our Vision
           </Typography>
           <Typography variant="body1" sx={{ mb: 2 }}>
             To create a world where young professionals are equipped with the skills, confidence, and networks necessary to thrive in the corporate world and make meaningful contributions to their industries.
           </Typography>
           <Typography variant="h7" sx={{ fontWeight: 600, mb: 1, color: '#1B2441' }}>
             Our Mission
           </Typography>
           <Typography variant="body1">
             To empower youth and professionals by providing access to expert knowledge, mentorship, and development resources that accelerate career growth and workplace success. Pathways of Success facilitates learning, networking, and personal branding through high-quality webinars and outreach activities.
           </Typography>


          <Typography variant="h6" sx={{ color: '#1B2441', fontWeight: 600, mt: 2, mb: 1 }}>
            Core Goals
          </Typography>
          <List sx={{ mb: 2 }}>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#C9AA74' }} />
              </ListItemIcon>
              <ListItemText primary="Career Development – Deliver career-building tools and strategic guidance tailored to emerging professionals." />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#C9AA74' }} />
              </ListItemIcon>
              <ListItemText primary="Workplace Issues – Address real-world challenges such as performance improvement, stress management, and personal growth." />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#C9AA74' }} />
              </ListItemIcon>
              <ListItemText primary="Skill Enhancement – Strengthen critical soft skills including leadership, communication, problem-solving, and branding." />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#C9AA74' }} />
              </ListItemIcon>
              <ListItemText primary="Networking and Mentorship – Connect participants with industry leaders and mentors for ongoing support and development." />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#C9AA74' }} />
              </ListItemIcon>
              <ListItemText primary="Empowerment – Build self-confidence and foster a strong sense of purpose in career navigation." />
            </ListItem>
          </List>

          <Typography variant="h6" sx={{ color: '#1B2441', fontWeight: 600, mt: 2, mb: 1 }}>
            Program Activities
          </Typography>
          <List sx={{ mb: 2 }}>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#C9AA74' }} />
              </ListItemIcon>
              <ListItemText primary="Biannual Webinars: Themed sessions covering workplace skills, branding, and career growth." />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#C9AA74' }} />
              </ListItemIcon>
              <ListItemText primary="Special Events: Additional webinars or masterclasses organized on demand or by partner request." />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#C9AA74' }} />
              </ListItemIcon>
              <ListItemText primary="University and High School Outreach: Interactive career-building activities at educational institutions." />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#C9AA74' }} />
              </ListItemIcon>
              <ListItemText primary="Mentorship & Networking Forums: Direct interaction with professionals and industry mentors." />
            </ListItem>
          </List>

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#1B2441' }}>
            Program Schedule
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            The "Pathways of Success" program occurs twice a year – once in the first half and once in the second half of each year. Additional events or webinars may be organized based on demand or specific organizational needs.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Paper elevation={1} sx={{ p: 2, bgcolor: '#f8f9fa', borderRadius: 2 }}>
                <Typography variant="subtitle1" sx={{ color: '#C9AA74', fontWeight: 600 }}>
                  First Half
                </Typography>
                <Typography variant="body2">January - June</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={1} sx={{ p: 2, bgcolor: '#f8f9fa', borderRadius: 2 }}>
                <Typography variant="subtitle1" sx={{ color: '#C9AA74', fontWeight: 600 }}>
                  Second Half
                </Typography>
                <Typography variant="body2">July - December</Typography>
              </Paper>
            </Grid>
          </Grid>

          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              mt: 2
            }}
          >
            The Pathways of Success Program is a transformative initiative that focuses on:
          </Typography>
          <List>
            {[
              'Youth empowerment and leadership development',
              'Organizational capacity building',
              'Economic empowerment strategies',
              'Sustainable community development'
            ].map((item, index) => (
              <ListItem key={index} sx={{ py: 0.5 }}>
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
                  primary={item}
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
        </Paper>
 

        {/* Program Sections */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 4, md: 6 },
            mb: 2,
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#1B2441',
              fontWeight: 600,
              mb: 4
            }}
          >
            Program Sections
          </Typography>
          <Grid 
            container 
            display="flex" 
            justifyContent="center" 
            alignItems="stretch" 
            spacing={1}
            sx={{
              flexWrap: { xs: 'wrap', md: 'nowrap' }
            }}
          >
            {sections.map((section, index) => (
              <Grid 
                key={index}
                sx={{ 
                  flexBasis: { xs: '100%', sm: '50%', md: '25%' },
                  maxWidth: { xs: '100%', sm: '50%', md: '25%' }
                }}
              >
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 3,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    border: '0px solid rgba(0, 0, 0, 0.08)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: '#C9AA74',
                      bgcolor: 'rgba(201, 170, 116, 0.02)'
                    }
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {section.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#1B2441',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '0.875rem'
                    }}
                  >
                    {section.description}
                  </Typography>
                  <RouterLink 
                    to={section.path}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      sx={{
                        color: '#C9AA74',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        mt: 2,
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        '&:hover': {
                          color: '#1B2441',
                          textDecoration: 'underline',
                        }
                      }}
                    >
                      See Details
                    </Typography>
                  </RouterLink>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Program Director */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 4, md: 6 },
            mb: 2,
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#1B2441',
              fontWeight: 600,
              mb: 4
            }}
          >
            Program Director
          </Typography>
          <Grid 
            container 
            spacing={4}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' }
            }}
          >
            <Grid 
              sx={{ 
                width: { xs: '100%', md: '33.33%' }
              }}
            >
              <img
                src="/assets/staff/thomson-silomba.jpg"
                alt="Thomson Silomba"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </Grid>
            <Grid 
              sx={{ 
                width: { xs: '100%', md: '66.67%' }
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#1B2441',
                  fontWeight: 600,
                  mb: 1
                }}
              >
                Thomson Silomba
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  color: '#C9AA74',
                  fontWeight: 600,
                  mb: 3
                }}
              >
                Program Director
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  mb: 3
                }}
              >
                A dedicated leader driven by Christian faith and principles of diversity, accountability, and transparency. 
                As the Founder and Lead Organiser of Rethinking Economics Zambia network, Thomson has established seven university groups 
                and contributed significantly to global economic discussions.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <MuiLink
                  component={RouterLink}
                  to="/about/staff/thomson-silomba"
                  sx={{
                    color: '#1B2441',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&:hover': {
                      color: '#C9AA74',
                      textDecoration: 'none'
                    }
                  }}
                >
                  <ArrowForwardIcon sx={{ color: '#C9AA74' }} />
                  View Full Profile
                </MuiLink>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Contact Section */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 4, md: 6 },
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#1B2441',
              fontWeight: 600,
              mb: 3
            }}
          >
            Get Started
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              mb: 4
            }}
          >
            Ready to begin your journey? Contact us to learn more about enrollment and participation.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#1B2441',
                color: 'white',
                px: 4,
                py: 1.5,
                '&:hover': {
                  bgcolor: '#2A365F'
                }
              }}
              component={RouterLink}
              to="/pages/contact"
            >
              Contact Us
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default PathwaysDetails; 