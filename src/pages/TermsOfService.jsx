// mukuba-consulting/src/pages/TermsOfService.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TermsOfService = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Typography variant="h3" gutterBottom fontWeight={700}>
      Terms of Service
    </Typography>
    <Typography variant="subtitle1" gutterBottom color="text.secondary">
      Last updated: June 2025
    </Typography>

    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        1. Acceptance of Terms
      </Typography>
      <Typography paragraph>
        By accessing or using the Mukuba Economic Research and Consulting Firm website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        2. Use of Services
      </Typography>
      <ul>
        <li>
          <Typography>
            You agree to use our website and services only for lawful purposes.
          </Typography>
        </li>
        <li>
          <Typography>
            You must not misuse, disrupt, or attempt to gain unauthorized access to any part of our website or services.
          </Typography>
        </li>
      </ul>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        3. Intellectual Property
      </Typography>
      <Typography paragraph>
        All content, trademarks, and data on this website, including but not limited to text, graphics, logos, and software, are the property of Mukuba Economic Research and Consulting Firm or its licensors and are protected by copyright and other intellectual property laws.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        4. Limitation of Liability
      </Typography>
      <Typography paragraph>
        We strive to provide accurate and up-to-date information, but we make no warranties or representations regarding the accuracy or completeness of any content. We are not liable for any damages arising from your use of our website or services.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        5. Third-Party Links
      </Typography>
      <Typography paragraph>
        Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        6. Termination
      </Typography>
      <Typography paragraph>
        We reserve the right to suspend or terminate your access to our website and services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        7. Changes to Terms
      </Typography>
      <Typography paragraph>
        We may update these Terms of Service from time to time. Continued use of our website and services after changes constitutes your acceptance of the new terms.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        8. Governing Law
      </Typography>
      <Typography paragraph>
        These Terms are governed by the laws of Zambia. Any disputes arising from these Terms or your use of our services will be subject to the exclusive jurisdiction of the courts of Zambia.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        9. Contact Us
      </Typography>
      <Typography paragraph>
        If you have any questions about these Terms, please contact us at <a href="mailto:info@mukubaecon.io">info@mukubaecon.io</a>.
      </Typography>
    </Box>
  </Container>
);

export default TermsOfService;