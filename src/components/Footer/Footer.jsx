import React from 'react';
import { Container, Grid, Typography, Box, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../utils/supabaseClient';
import { useEffect, useState } from 'react';

const Footer = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    async function fetchProfile() {
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();
        if (!error) setProfile(data);
      } else {
        setProfile(null);
      }
    }
    fetchProfile();
  }, [user]);

  return (
    <Box sx={{ bgcolor: 'black', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={5}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          {/* Logo and Description */}
          <Grid 
            column={12}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              width: { md: '20%' }
            }}
          >
            <Box sx={{ mb: 2 }}>
              <MuiLink href="/">
                <img src="/assets/company-logo.jpg" alt="Mukuba Logo" style={{ height: '64px', width: 'auto' }} />
              </MuiLink>
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                mb: 2,
                maxWidth: '280px',
                lineHeight: 1.6
              }}
            >
              Your trusted partner in economic research and consulting excellence, providing actionable insights and strategic guidance.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <MuiLink href="https://www.facebook.com/share/16v9hTFpc2/?mibextid=wwXIfr" sx={{ color: 'rgba(255, 255, 255, 0.7)', '&:hover': { color: '#AF9871' } }}>
                <FaFacebook size={20} />
              </MuiLink>
              <MuiLink href="#" sx={{ color: 'rgba(255, 255, 255, 0.7)', '&:hover': { color: '#AF9871' } }}>
                <FaTwitter size={20} />
              </MuiLink>
              <MuiLink href="http://linkedin.com/in/mukuba-economic-research-and-consulting-firm-045bb2376" sx={{ color: 'rgba(255, 255, 255, 0.7)', '&:hover': { color: '#AF9871' } }}>
                <FaLinkedin size={20} />
              </MuiLink>
              <MuiLink href="https://www.instagram.com/mukubaecon?igsh=NTYxeDJieTE3MWo0" sx={{ color: 'rgba(255, 255, 255, 0.7)', '&:hover': { color: '#AF9871' } }}>
                <FaInstagram size={20} />
              </MuiLink>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid 
            column={12}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              width: { md: '20%' }
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink 
                component={RouterLink}
                to="/about/institutional-background"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#AF9871' },
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                }}
              >
                About Us
              </MuiLink>
              <MuiLink 
                component={RouterLink}
                to="/pages/services"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#AF9871' },
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                }}
              >
                Our Services
              </MuiLink>
              <MuiLink 
                component={RouterLink}
                to="/reports/annual-reports"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#AF9871' },
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                }}
              >
                Reports
              </MuiLink>
              <MuiLink 
                component={RouterLink}
                to="/notice-board/updates"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#AF9871' },
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                }}
              >
                Notice Board
              </MuiLink>
              <MuiLink 
                component={RouterLink}
                to="/pages/contact"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#AF9871' },
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                }}
              >
                Contact Us
              </MuiLink>
            </Box>
          </Grid>

          {/* Our Services */}
          <Grid 
            column={12}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              width: { md: '20%' }
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { text: 'Economic Research', path: '/services/economic-research' },
                { text: 'Consultancy', path: '/services/consultancy-services' },
                { text: 'Feasibility Studies', path: '/services/feasibility-studies' },
                { text: 'Capacity Building', path: '/services/capacity-building' },
                { text: 'Data Collection', path: '/services/data-collection' }
              ].map((item) => (
                <MuiLink 
                  key={item.text} 
                  component={RouterLink}
                  to={item.path}
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#AF9871' },
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                  }}
                >
                  {item.text}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Contact Us */}
          <Grid 
            column={12}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              width: { md: '20%' }
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ color: '#AF9871', mr: 1, mt: 0.5 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Plot #38 Kudu Rd, Kabulonga, Lusaka
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ color: '#AF9871', mr: 1 }} />
                <MuiLink 
                  href="tel:+260768112551" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    '&:hover': { color: '#AF9871' }
                  }}
                >
                  +260 768 112 551
                </MuiLink>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ color: '#AF9871', mr: 1 }} />
                <MuiLink 
                  href="mailto:info@mukubaecon.io" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    '&:hover': { color: '#AF9871' }
                  }}
                >
                  info@mukubaecon.io
                </MuiLink>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box sx={{ mt: 6, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Grid 
            container 
            justifyContent="space-between" 
            alignItems="center"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' }
            }}
          >
            <Grid 
              column={12}
              sx={{ 
                width: { md: '50%' },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                © 2025 Mukuba Economic Research and Consulting Firm. All rights reserved.
              </Typography>
            </Grid>
            <Grid 
              column={12}
              sx={{ 
                width: { md: '50%' },
                textAlign: { xs: 'center', md: 'right' }
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                gap: 3, 
                justifyContent: { xs: 'center', md: 'flex-end' },
                mt: { xs: 2, md: 0 }
              }}>
                <MuiLink 
                  component={RouterLink}
                  to="/privacy"
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    '&:hover': { color: '#AF9871' }
                  }}
                >
                  Privacy Policy
                </MuiLink>
                <MuiLink 
                  component={RouterLink}
                  to="/terms"
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    '&:hover': { color: '#AF9871' }
                  }}
                >
                  Terms of Service
                </MuiLink>
                <MuiLink 
                  component={RouterLink}
                  to="/service-agreement"
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    '&:hover': { color: '#AF9871' }
                  }}
                >
                  Service Agreement
                </MuiLink>
                <MuiLink 
                  component={RouterLink}
                  to={profile?.role === 'admin' ? '/admin-dashboard' : '/admin-login'}
                  sx={{ 
                    color: profile?.role === 'admin' ? '#AF9871' : 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    pointerEvents: profile?.role === 'admin' ? 'auto' : 'auto',
                    fontWeight: profile?.role === 'admin' ? 700 : 400,
                    '&:hover': { color: '#AF9871' }
                  }}
                >
                  {profile?.role === 'admin' ? 'Admin Dashboard' : 'Admin Login'}
                </MuiLink>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
