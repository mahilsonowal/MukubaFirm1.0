import React from 'react';
import { Box, Container, Typography, Grid, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from 'react-router-dom';

const GovernanceCard = styled(Paper)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
  },
}));

const Governance = () => {

  const advisoryTeams = [
    {
      id: 'legal-advisor',
      name: 'Legal Advisor',
      title: '[Vacant/To Be Announced]',
      description: 'Advises on regulatory matters, contracts, legal structuring, and compliance.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPg==',
      email: 'legaladvisor@mukuba.com',
      placeholder: true
    },
    {
      id: 'finance-advisor',
      name: 'Finance Advisor',
      title: '[Vacant/To Be Announced]',
      description: 'Guides budgeting, grant compliance, investment readiness, and financial sustainability.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPg==',
      email: 'financeadvisor@mukuba.com',
      placeholder: true
    },
    {
      id: 'policy-research-advisor',
      name: 'Policy & Research Advisor',
      title: '[Vacant/To Be Announced]',
      description: 'Supports research quality, relevance, and methodological soundness.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPg==',
      email: 'policyadvisor@mukuba.com',
      placeholder: true
    },
    {
      id: 'governance-strategy-advisor',
      name: 'Governance & Strategy Advisor',
      title: '[Vacant/To Be Announced]',
      description: 'Assists with institutional development, organizational structuring, and long-term strategy.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPg==',
      email: 'strategyadvisor@mukuba.com',
      placeholder: true
    },
    {
      id: 'technical-advisors',
      name: 'Technical Advisor (On-call/Project-based)',
      title: 'Mr. Brad Elledge',
      description: 'Specialists offering expert input in areas like agriculture, climate change, ESG, education, and economic transformation.',
      image: '/assets/team/brad.jpg',
      email: 'brelledge@gmail.com',
      profileLink: '/about/team/brad-elledge' 
    }
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        {/* Hero Section */}

   

        {/* Advisory Team Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <GroupIcon sx={{ color: '#C9AA74', mr: 1, fontSize: '2rem' }} />
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  color: '#1B2441',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                Advisory Team
              </Typography>
            </Box>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                textAlign: 'justify',
                maxWidth: 'auto',
                mx: 'auto'
              }}
            >
              At Mukuba Economic Research and Consulting Firm, we are privileged to be supported by a distinguished Advisory Team composed of seasoned professionals with diverse expertise in law, finance, policy, governance, and sector-specific technical fields.

Our Advisory Team plays a vital role in strengthening the firm’s strategic direction, ensuring legal and regulatory compliance, enhancing financial sustainability, and providing specialized knowledge that enriches our research and consulting services.

While Mukuba operates as a sole proprietorship under the leadership of its founder, the Advisory Team offers non-executive, independent guidance that helps us maintain high standards of professionalism, innovation, and impact in all our engagements.

Together, this team of advisors helps Mukuba navigate complex challenges, seize growth opportunities, and deliver value-driven solutions to our clients and stakeholders.
            </Typography>
          </Box>

          <Grid 
            container 
            spacing={3}
            sx={{ maxWidth: '1200px', mx: 'auto' }}
          >
            {advisoryTeams.map((member, index) => (
              <Grid 
                key={member.id}
                item
                xs={12}
                sm={6}
                md={4}
                sx={{ display: 'flex' }}
              >
                <GovernanceCard elevation={2} sx={{ 
                  width: '100%', 
                  maxWidth: '350px',
                  minWidth: '300px',
                  display: 'flex', 
                  flexDirection: 'column',
                  mx: 'auto'
                }}>
                  <Box sx={{
                    height: '200px',
                    overflow: 'hidden',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
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
                    {index + 1}. {member.name}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: '#C9AA74',
                      fontWeight: 600,
                      mb: 1.5,
                      fontSize: '0.9rem'
                    }}
                  >
                    {member.title}
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
                    {member.description}
                  </Typography>
                  {!member.placeholder && (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
    <a href={`mailto:${member.email}`} style={{ color: '#C9AA74', fontSize: '0.9rem', textDecoration: 'none' }}>Email</a>
    {member.id === 'technical-advisors' && (
      <Link 
        to={member.profileLink}
        style={{ 
          fontSize: '0.85rem',
          padding: '4px 8px',
          borderRadius: '4px',
          backgroundColor: '#C9AA74',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 500
        }}
      >
        View Profile
      </Link>
    )}
  </Box>
)}

                </GovernanceCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Governance;