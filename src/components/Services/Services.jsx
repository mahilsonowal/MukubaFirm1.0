import { Container, Typography, Box, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const serviceItems = [
  {
    title: 'Economic Research and Analysis',
    description: 'In-depth economic studies, reports, and data analysis tailored to clients\' needs to inform policy, business strategies, and project evaluations.',
    image: '/src/assets/serv1.jpg',
    link: '/services/economic-research'
  },
  {
    title: 'Consultancy and Advisory Services',
    description: 'Providing strategic advice to businesses, government agencies, and international organizations in areas such as economic policy, development planning, and investment strategies.',
    image: '/src/assets/serv5.jpg',
    link: '/services/consultancy-services'
  },
  {
    title: 'Feasibility Studies',
    description: 'Comprehensive assessments to evaluate the viability of new ventures, investments, and policies, helping clients make informed decisions.',
    image: '/src/assets/serv2.jpg',
    link: '/services/feasibility-studies'
  },
  {
    title: 'Capacity Building',
    description: 'Customized training programs to enhance the skills and capabilities of clients in areas like data analysis, economics, policy design, and project management.',
    image: '/src/assets/serv3.jpg',
    link: '/services/capacity-building'
  },
  {
    title: 'Data Collection',
    description: 'Expert data collection, monitoring, and evaluation services to ensure accurate information for decision-making and policy assessment.',
    image: '/src/assets/serv4.jpg',
    link: '/services/data-collection'
  }
];

const Services = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ py: { xs: 5, md: 6 }, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        {/* Header Section - Compact */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          mb: 4 
        }}>
          <Box>
            <Typography 
              variant="h2" 
              sx={{
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 700,
                color: '#0B1821',
                mb: { xs: 1, md: 0 }
              }}
            >
              Strategic Economic Insights
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#666',
                mb: { xs: 2, md: 0 }
              }}
            >
              Empowering decisions with data-driven analysis
            </Typography>
          </Box>
          
          {/* Scroll Controls */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Button 
              onClick={scrollLeft}
              variant="outlined"
              sx={{ 
                minWidth: '40px', 
                width: '40px', 
                height: '40px', 
                p: 0,
                borderRadius: '50%',
                borderColor: '#C9AA74',
                color: '#C9AA74',
                '&:hover': {
                  borderColor: '#0B1821',
                  color: '#0B1821'
                }
              }}
            >
              ←
            </Button>
            <Button 
              onClick={scrollRight}
              variant="outlined"
              sx={{ 
                minWidth: '40px', 
                width: '40px', 
                height: '40px', 
                p: 0,
                borderRadius: '50%',
                borderColor: '#C9AA74',
                color: '#C9AA74',
                '&:hover': {
                  borderColor: '#0B1821',
                  color: '#0B1821'
                }
              }}
            >
              →
            </Button>
          </Box>
        </Box>

        {/* Horizontal Scrollable Services */}
        <Box 
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollbarWidth: 'none', // Firefox
            '&::-webkit-scrollbar': { display: 'none' }, // Chrome, Safari
            gap: 3,
            pb: 2,
            px: 1
          }}
        >
          {serviceItems.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  minWidth: { xs: '280px', md: '320px' },
                  maxWidth: { xs: '280px', md: '320px' },
                  bgcolor: 'white',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.12)'
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer'
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    height: '160px',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                </Box>
                
                {/* Content */}
                <Box sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography 
                    variant="h6" 
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: '1.1rem',
                      color: '#0B1821',
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{
                      color: 'text.secondary',
                      mb: 2,
                      lineHeight: 1.5,
                      flexGrow: 1
                    }}
                  >
                    {service.description}
                  </Typography>
                  
                  {/* Button */}
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    size="small"
                    sx={{
                      color: '#C9AA74',
                      p: 0,
                      alignSelf: 'flex-start',
                      '&:hover': {
                        bgcolor: 'transparent',
                        color: '#0B1821',
                      },
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: '0.9rem'
                    }}
                  >
                    Learn more
                  </Button>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;