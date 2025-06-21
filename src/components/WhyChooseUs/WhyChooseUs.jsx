import { Box, Container, Typography, Card, CardContent, useMediaQuery } from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BusinessIcon from '@mui/icons-material/Business';
import { useTheme } from '@mui/material/styles';

const WhyChooseUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: '#C9AA74' }} />,
      title: "High-Quality Economic Insights",
      description: "We deliver top-notch, evidence-based economic insights to ensure our clients receive accurate and reliable information for effective decision-making."
    },
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: '#C9AA74' }} />,
      title: "Empowering Clients",
      description: "We equip our clients with the knowledge and tools needed to navigate complex economic environments and implement impactful solutions for sustainable development."
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 40, color: '#C9AA74' }} />,
      title: "Consultancy Services Across Zambia",
      description: "We extend our consultancy services to organizations within Zambia and beyond, providing tailored advice, strategic planning, and measurable KPIs to track progress and ensure successful outcomes."
    }
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 6, md: 10 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/src/assets/whychoose.jpg)',
          backgroundSize: 'fit',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.3rem' },
              fontWeight: 700,
              mb: 1,
              color: 'white',
            }}
          >
            Why Choose <Box component="span" sx={{ color: '#C9AA74' }}>Us</Box>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              color: 'text.secondary',
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            Delivering excellence through expertise, innovation, and dedication
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            justifyContent: 'center',
            alignItems: 'stretch',
            px: { xs: 2, sm: 0 }
          }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              sx={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.1)'
                }
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: isMobile ? 3 : 4 }}>
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    color: '#0B1821',
                    fontSize: { xs: '1rem', md: '1.2rem' }
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6, fontSize: { xs: '0.85rem', md: '1rem' } }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
