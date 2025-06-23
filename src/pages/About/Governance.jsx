import React from 'react';
import { Box, Container, Typography, Grid, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import BusinessIcon from '@mui/icons-material/Business';
import GavelIcon from '@mui/icons-material/Gavel';
import PolicyIcon from '@mui/icons-material/Policy';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupIcon from '@mui/icons-material/Group';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
  const governanceStructure = [
    {
      title: "Board of Directors",
      description: "Provides strategic oversight, governance, and ensures organizational compliance with legal and ethical standards.",
      responsibilities: [
        "Strategic planning and oversight",
        "Financial accountability and risk management",
        "Appointment and evaluation of executive leadership",
        "Compliance monitoring and policy approval"
      ]
    },
    {
      title: "Executive Leadership",
      description: "Implements board decisions, manages daily operations, and drives organizational excellence.",
      responsibilities: [
        "Operational management and execution",
        "Staff leadership and development",
        "Client relationship management",
        "Quality assurance and service delivery"
      ]
    },
    {
      title: "Advisory Committees",
      description: "Provides specialized expertise and guidance in key areas of operation and development.",
      responsibilities: [
        "Technical expertise and guidance",
        "Industry best practices recommendations",
        "Quality standards and methodology review",
        "Strategic advice and innovation support"
      ]
    }
  ];

  const governancePolicies = [
    {
      title: "Code of Ethics",
      description: "Establishes ethical standards and professional conduct for all staff members.",
      keyPoints: [
        "Integrity and honesty in all professional dealings",
        "Confidentiality and data protection",
        "Conflict of interest management",
        "Professional competence and continuous learning"
      ]
    },
    {
      title: "Financial Governance",
      description: "Ensures transparent financial management and accountability.",
      keyPoints: [
        "Budget planning and monitoring",
        "Financial reporting and transparency",
        "Internal controls and audit procedures",
        "Resource allocation and efficiency"
      ]
    },
    {
      title: "Quality Assurance",
      description: "Maintains high standards in research, analysis, and service delivery.",
      keyPoints: [
        "Research methodology standards",
        "Peer review and validation processes",
        "Client feedback and satisfaction monitoring",
        "Continuous improvement initiatives"
      ]
    },
    {
      title: "Risk Management",
      description: "Identifies, assesses, and mitigates organizational risks.",
      keyPoints: [
        "Risk identification and assessment",
        "Mitigation strategies and controls",
        "Regular risk monitoring and reporting",
        "Crisis management and business continuity"
      ]
    }
  ];

  const complianceFramework = [
    {
      title: "Legal Compliance",
      items: [
        "Corporate governance regulations",
        "Data protection and privacy laws",
        "Intellectual property rights",
        "Employment and labor laws"
      ]
    },
    {
      title: "Professional Standards",
      items: [
        "Economic research best practices",
        "Consulting industry standards",
        "Academic integrity guidelines",
        "Client service excellence"
      ]
    },
    {
      title: "Operational Compliance",
      items: [
        "Health and safety regulations",
        "Environmental sustainability",
        "Information security standards",
        "Quality management systems"
      ]
    }
  ];

  const boardMembers = [
    {
      id: 'chairperson',
      name: 'Chairperson',
      title: '[To Be Appointed]',
      description: 'Board Chairperson position',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPgo=',
      email: 'chairperson@mukuba.com',
      placeholder: true
    },
    {
      id: 'clement-malala-board',
      name: 'Mr. Clement Malala',
      title: 'Executive Director',
      description: 'Current position and organization details',
      image: '/assets/team/malala.jpg',
      email: 'clement@mukuba.com'
    },
    {
      id: 'brad-elledge-board',
      name: 'Mr. Brad Elledge',
      title: 'Independent Director',
      description: 'Current position and organization details',
      image: '/assets/team/brad.jpg',
      email: 'brad@mukuba.com'
    },
    {
      id: 'legal-director',
      name: 'Non-Executive Director (Legal)',
      title: '[Vacant/To Be Filled]',
      description: 'Legal expertise position on the board',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPgo=',
      email: 'legal@mukuba.com',
      placeholder: true
    },
    {
      id: 'finance-director',
      name: 'Non-Executive Director (Finance)',
      title: '[Vacant/To Be Filled]',
      description: 'Financial expertise position on the board',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxIDgzLjQzMSAxMzBDNzAgMTE2LjU2OSA4My40MzEgMTAwIDEwMCAxMDBaIiBmaWxsPSIjQ0M5QTA3NCIvPgo8dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WYWNhbnQ8L3RleHQ+Cjwvc3ZnPgo=',
      email: 'finance@mukuba.com',
      placeholder: true
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
            Governance
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
            Our governance framework ensures transparency, accountability, and excellence in all our operations.
          </Typography>
        </Box>

        {/* Governance Structure Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <BusinessIcon sx={{ color: '#C9AA74', mr: 1, fontSize: '2rem' }} />
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  color: '#1B2441',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                Governance Structure
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
              Our multi-layered governance structure ensures effective oversight and operational excellence.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {governanceStructure.map((item, index) => (
              <Grid item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
                <GovernanceCard elevation={2} sx={{ 
                  width: '100%', 
                  maxWidth: '350px',
                  minWidth: '300px',
                  mx: 'auto'
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: '#1B2441',
                      mb: 2,
                      fontSize: '1.1rem'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      mb: 3,
                      fontSize: '0.9rem',
                      lineHeight: 1.6
                    }}
                  >
                    {item.description}
                  </Typography>
                  <List dense>
                    {item.responsibilities.map((responsibility, idx) => (
                      <ListItem key={idx} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon sx={{ color: '#C9AA74', fontSize: '1rem' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={responsibility}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontSize: '0.85rem',
                              color: 'text.secondary'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </GovernanceCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Board of Directors Section */}
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
                Board of Directors
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
              Our board of directors provides strategic oversight and governance.
            </Typography>
          </Box>

          <Grid 
            container 
            spacing={3}
            sx={{ maxWidth: '1200px', mx: 'auto' }}
          >
            {boardMembers.map((member, index) => (
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
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
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
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 'auto' }}>
                      <a href={`mailto:${member.email}`} style={{ color: '#C9AA74', fontSize: '0.9rem', textDecoration: 'none' }}>Email</a>
                    </Box>
                  )}
                </GovernanceCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6, borderColor: '#C9AA74', opacity: 0.3 }} />

        {/* Board Sub-Committees Section */}
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
                Board Sub-Committees
              </Typography>
            </Box>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
                textAlign: 'left',
                mb: 2,
              }}
            >
              Mukuba Economic Research and Consulting Firm is governed by a Board of Directors composed of individuals of high integrity and professional standing, representing diverse sectors including government, private enterprise, academia, civil society, and professional bodies. The Board is responsible for providing strategic oversight, ensuring good governance, and guiding the firm toward its mission and long-term goals.
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
                textAlign: 'left',
              }}
            >
              To strengthen governance and support effective decision-making, the Board operates through the following three Sub-Committees:
            </Typography>
          </Box>

          <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, color: '#1B2441' }}>
                  1. Audit and Risk Committee
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  This committee provides oversight and expert advice on matters related to internal and external audits, risk management, and internal controls. It ensures that the firm maintains high standards of accountability, transparency, and compliance. The committee makes appropriate recommendations to the Board regarding risk mitigation and audit outcomes.
                </Typography>
            </Box>
            
            <Divider sx={{ my: 2 }}/>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, color: '#1B2441' }}>
                  2. Finance and Administration Committee
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  This committee oversees the firm's financial planning, budgeting, resource allocation, and administrative operations, including human resource management. It provides guidance on financial sustainability and operational efficiency. The committee reviews financial reports, staff policies, and administrative frameworks, making recommendations to the Board as needed.
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }}/>

            <Box>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, color: '#1B2441' }}>
                  3. Technical and Research Committee
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  This committee provides strategic input and oversight on the firm's research agenda, policy analysis, consulting projects, and knowledge dissemination activities. It supports the development of rigorous methodologies, promotes evidence-based outputs, and ensures the relevance and quality of research and consulting deliverables. It also advises on capacity-building and stakeholder engagement initiatives.
                </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 6, borderColor: '#C9AA74', opacity: 0.3 }} />

        {/* Governance Policies Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <PolicyIcon sx={{ color: '#C9AA74', mr: 1, fontSize: '2rem' }} />
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  color: '#1B2441',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                Governance Policies
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
              Our comprehensive policies ensure consistent standards and ethical practices across all operations.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {governancePolicies.map((policy, index) => (
              <Grid item xs={12} md={6} key={index} sx={{ display: 'flex' }}>
                <GovernanceCard elevation={2} sx={{ 
                  width: '100%', 
                  maxWidth: '350px',
                  minWidth: '300px',
                  mx: 'auto'
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: '#1B2441',
                      mb: 2,
                      fontSize: '1.1rem'
                    }}
                  >
                    {policy.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'text.secondary',
                      mb: 3,
                      fontSize: '0.9rem',
                      lineHeight: 1.6
                    }}
                  >
                    {policy.description}
                  </Typography>
                  <List dense>
                    {policy.keyPoints.map((point, idx) => (
                      <ListItem key={idx} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon sx={{ color: '#C9AA74', fontSize: '1rem' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={point}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontSize: '0.85rem',
                              color: 'text.secondary'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </GovernanceCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6, borderColor: '#C9AA74', opacity: 0.3 }} />

        {/* Compliance Framework Section */}
        <Box>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <SecurityIcon sx={{ color: '#C9AA74', mr: 1, fontSize: '2rem' }} />
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  color: '#1B2441',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                Compliance Framework
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
              We maintain strict compliance with all applicable laws, regulations, and professional standards.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {complianceFramework.map((framework, index) => (
              <Grid item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
                <GovernanceCard elevation={2} sx={{ 
                  width: '100%', 
                  maxWidth: '350px',
                  minWidth: '300px',
                  mx: 'auto'
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: '#1B2441',
                      mb: 3,
                      fontSize: '1.1rem'
                    }}
                  >
                    {framework.title}
                  </Typography>
                  <List dense>
                    {framework.items.map((item, idx) => (
                      <ListItem key={idx} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon sx={{ color: '#C9AA74', fontSize: '1rem' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={item}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontSize: '0.85rem',
                              color: 'text.secondary'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
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