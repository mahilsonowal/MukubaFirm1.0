// mukuba-consulting/src/pages/PrivacyPolicy.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Typography variant="h3" gutterBottom fontWeight={700}>
      Privacy Policy
    </Typography>
    <Typography variant="subtitle1" gutterBottom color="text.secondary">
      Last updated: June 2025
    </Typography>

    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        1. Introduction
      </Typography>
      <Typography paragraph>
        Mukuba Economic Research and Consulting Firm ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        2. Information We Collect
      </Typography>
      <Typography paragraph>
        We may collect information about you in a variety of ways, including:
      </Typography>
      <ul>
        <li>
          <Typography>
            <strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide via forms or registration.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Usage Data:</strong> Information about how you use our website, such as IP address, browser type, access times, and pages viewed.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Cookies & Tracking:</strong> We use cookies and similar tracking technologies to enhance your experience.
          </Typography>
        </li>
      </ul>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        3. How We Use Your Information
      </Typography>
      <ul>
        <li>
          <Typography>
            To provide, operate, and maintain our website and services.
          </Typography>
        </li>
        <li>
          <Typography>
            To improve, personalize, and expand our website and services.
          </Typography>
        </li>
        <li>
          <Typography>
            To communicate with you, including responding to your inquiries and sending newsletters (if you opt in).
          </Typography>
        </li>
        <li>
          <Typography>
            To comply with legal obligations and protect our rights.
          </Typography>
        </li>
      </ul>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        4. Sharing Your Information
      </Typography>
      <Typography paragraph>
        We do not sell or rent your personal information. We may share your information with:
      </Typography>
      <ul>
        <li>
          <Typography>
            <strong>Service Providers:</strong> Third parties who perform services for us (e.g., hosting, analytics, email delivery) and are required to protect your information.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Legal Requirements:</strong> If required by law or to protect our rights and safety.
          </Typography>
        </li>
      </ul>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        5. Data Security
      </Typography>
      <Typography paragraph>
        We use administrative, technical, and physical security measures to help protect your personal information. However, no method of transmission over the Internet is 100% secure.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        6. Your Rights
      </Typography>
      <Typography paragraph>
        You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:info@mukubaecon.io">info@mukubaecon.io</a>.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        7. Changes to This Policy
      </Typography>
      <Typography paragraph>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        8. Contact Us
      </Typography>
      <Typography paragraph>
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@mukubaecon.io">info@mukubaecon.io</a>.
      </Typography>
    </Box>
  </Container>
);

export default PrivacyPolicy;