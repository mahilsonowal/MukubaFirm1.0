import { Box, Container, Typography, Grid, Button, Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const ExpertTeam = () => {
  const experts = [
    {
      name: "Clement Malala",
      title: "Chief Executive Officer (CEO)",
      description: "Leading strategic initiatives and overseeing company operations with over 2 years of experience in economic consulting.",
      image: "/assets/team/malala.jpg",
      style: "object-top",
      socials: {
        linkedin: "https://www.linkedin.com/in/clement-malala-b70000100/",
        email: "clement@mukuba.com"
      }
    },
    {
      name: "Mr. Brad Elledge",
      title: "Technical Advisor (On-call/Project-based)",
      description: "Specialists offering expert input in areas like agriculture, climate change, ESG, education, and economic transformation.",
      image: "/assets/team/brad.jpg",
      socials: {
        linkedin: "#",
        email: "brelledge@gmail.com"
      }
    },
    {
      name: "Legal Advisor",
      title: "Senior Legal Counsel",
      description: "Providing comprehensive legal guidance and expertise in corporate law, regulatory compliance, and strategic legal planning for business operations.",
      image: "/assets/team/legal1.jpg",
      socials: {
        linkedin: "#",
        email: "legaladvisor@mukuba.com"
      }
    }
  ];

  return (
    <Box 
      sx={{ 
        position: 'relative',
        py: { xs: 8, md: 12 },
        bgcolor: '#000',
        border: 'none'
      }}
    >
      {/* Curved Top Edge */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '64px',
          bgcolor: 'white',
          borderBottomLeftRadius: '50% 100%',
          borderBottomRightRadius: '50% 100%',
          transform: 'translateY(-1px)'
        }}
      />

      {/* Curved Bottom Edge */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '64px',
          bgcolor: 'white',
          borderTopLeftRadius: '50% 100%',
          borderTopRightRadius: '50% 100%',
          transform: 'translateY(1px)'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              mt: 3,
              mb: 2,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              color: 'white'
            }}
          >
            Meet our experts
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: { xs: '1rem', md: '1.125rem' }
            }}
          >
            Expert analysts driving our clients' success
          </Typography>
        </Box>

        {/* Mobile Horizontal Scroll */}
        <Box 
          sx={{ 
            display: { xs: 'block', md: 'none' },
            overflowX: 'auto',
            pb: 3,
            mx: -2,
            px: 2,

          }}
        >
          <Box sx={{ display: 'flex', gap: 2, minWidth: 'max-content', px: 1 }}>
            {experts.map((expert, index) => (
              <Box 
                key={index} 
                sx={{ 
                  width: 260,
                  flexShrink: 0,
                  textAlign: 'center',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 2,
                  p: 2
                }}
              >
                {/* Profile Image */}
                <Box sx={{ mb: 2, position: 'relative' }}>
                  <Link to={`/about/team/${expert.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Avatar
                      src={expert.image}
                      alt={expert.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      border: '3px solid #C9AA74',
                      objectFit: 'cover',
                      objectPosition: expert.name === "Clement Malala" ? 'top' : 'center'
                    }}
                  />
                  </Link>
                </Box>

                {/* Expert Info */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    color: 'white',
                    fontSize: '1.1rem'
                  }}
                >
                  {expert.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#C9AA74',
                    fontWeight: 500,
                    mb: 1.5,
                    fontSize: '0.875rem'
                  }}
                >
                  {expert.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    mb: 2,
                    fontSize: '0.8rem',
                    lineHeight: 1.4
                  }}
                >
                  {expert.description}
                </Typography>

                {/* Social Links */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <Button
                    href={expert.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.5)',
                      minWidth: 'auto',
                      p: 0.5,
                      '&:hover': {
                        color: '#C9AA74'
                      }
                    }}
                  >
                    <LinkedInIcon fontSize="small" />
                  </Button>
                  <Button
                    href={`mailto:${expert.socials.email}`}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.5)',
                      minWidth: 'auto',
                      p: 0.5,
                      '&:hover': {
                        color: '#C9AA74'
                      }
                    }}
                  >
                    <EmailIcon fontSize="small" />
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Desktop Horizontal Layout */}
        <Box 
          sx={{ 
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            gap: 4,
            mb: 6
          }}
        >
          {experts.map((expert, index) => (
            <Box 
              key={index} 
              sx={{ 
                flex: '1',
                maxWidth: 360,
                textAlign: 'center'
              }}
            >
              {/* Profile Image */}
              <Box sx={{ mb: 3, position: 'relative' }}>
                <Link to={`/about/team/${expert.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <Avatar
                  src={expert.image}
                  alt={expert.name}
                  sx={{
                    width: 192,
                    height: 192,
                    mx: 'auto',
                    border: '4px solid #C9AA74',
                    objectFit: 'cover',
                    objectPosition: expert.name === "Clement Malala" ? 'top' : 'center'
                  }}
                />
                </Link>
              </Box>

              {/* Expert Info */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: 'white'
                }}
              >
                {expert.name}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#C9AA74',
                  fontWeight: 500,
                  mb: 2
                }}
              >
                {expert.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  mb: 3
                }}
              >
                {expert.description}
              </Typography>

              {/* Social Links */}
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button
                  href={expert.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    '&:hover': {
                      color: '#C9AA74'
                    }
                  }}
                >
                  <LinkedInIcon />
                </Button>
                <Button
                  href={`mailto:${expert.socials.email}`}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    '&:hover': {
                      color: '#C9AA74'
                    }
                  }}
                >
                  <EmailIcon />
                </Button>
              </Box>
            </Box>
          ))}
        </Box>

        {/* View More Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: '#C9AA74',
              color: 'white',
              mb: { xs: 2, md: 4 },
              px: { xs: 0.5, md: 4 },
              py: { xs: 0.5, md: 2 },
              '&:hover': {
                bgcolor: '#B89A6A',
                transform: 'translateX(4px)',
                transition: 'all 0.3s ease'
              }
            }}
          >
            <Link 
              to="/about/team-management" 
              style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              View More
            </Link>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ExpertTeam; 