import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Newsletter from './Newsletter';
import FinalCTA from './FinalCTA';

const ContactSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={4}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' }
          }}
        >
          <Grid 
            column={12}
            sx={{ 
              order: { xs: 2, lg: 1 },
              width: { lg: '100%' }
            }}
          >
            <ContactForm />
          </Grid>
          <Grid 
            column={12}
            sx={{ 
              order: { xs: 1, lg: 2 },
              width: { lg: '100%' }
            }}
          >
            <ContactInfo />
          </Grid>
        </Grid>
        <Grid 
          container 
          spacing={4} 
          sx={{ 
            mt: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <Grid 
            column={12}
            sx={{ width: { md: '100%' } }}
          >
            <FinalCTA />
          </Grid>
          <Grid 
            column={12}
            sx={{ width: { md: '100%' } }}
          >
            <Newsletter />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection; 