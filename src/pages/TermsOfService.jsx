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
        By accessing or using the Mukuba Economic Research and Consulting Firm website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, as well as all applicable laws and regulations. If you do not agree with any part of these terms, you must not use our website or services. These Terms constitute a legally binding agreement between you and Mukuba Economic Research and Consulting Firm, governing your use of our digital platforms, content, and offerings. We recommend that you review these Terms regularly to stay informed of your rights and obligations.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        2. Use of Services
      </Typography>
      <ul>
        <li>
          <Typography>
            You agree to use our website and services solely for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of our services does not violate any applicable local, national, or international laws or regulations.
          </Typography>
        </li>
        <li>
          <Typography>
            You must not misuse, disrupt, or attempt to gain unauthorized access to any part of our website, servers, or networks. Prohibited activities include, but are not limited to, hacking, introducing viruses or malicious code, attempting to circumvent security measures, or engaging in any activity that could damage, disable, overburden, or impair the proper functioning of our services.
          </Typography>
        </li>
        <li>
          <Typography>
            You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use or security breach.
          </Typography>
        </li>
        <li>
          <Typography>
            We reserve the right to monitor your use of our website and services to ensure compliance with these Terms and to protect the integrity and security of our platform.
          </Typography>
        </li>
      </ul>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        3. Intellectual Property
      </Typography>
      <Typography paragraph>
        All content, trademarks, logos, graphics, images, software, and data on this website (collectively, "Content") are the exclusive property of Mukuba Economic Research and Consulting Firm or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not copy, reproduce, modify, distribute, display, perform, or create derivative works from any Content without our prior written consent, except as expressly permitted by law. Unauthorized use of our Content may result in legal action and termination of your access to our services.
      </Typography>
      <Typography paragraph>
        You may view, download, or print portions of the website for your personal, non-commercial use, provided that you do not remove any copyright or proprietary notices. Any other use of the Content requires our explicit written permission.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        4. Limitation of Liability
      </Typography>
      <Typography paragraph>
        While we strive to provide accurate, reliable, and up-to-date information, our website and services are provided on an "as is" and "as available" basis. We make no warranties or representations, express or implied, regarding the accuracy, completeness, reliability, or suitability of any content or services. To the fullest extent permitted by law, Mukuba Economic Research and Consulting Firm, its directors, employees, affiliates, and agents disclaim all liability for any direct, indirect, incidental, consequential, or punitive damages arising from or related to your use of, or inability to use, our website or services, even if we have been advised of the possibility of such damages.
      </Typography>
      <Typography paragraph>
        You acknowledge that your use of our website and services is at your own risk, and you are solely responsible for any damage to your device or loss of data that may result from accessing or using our platform.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        5. Third-Party Links
      </Typography>
      <Typography paragraph>
        Our website may contain links to third-party websites or resources that are not owned or controlled by Mukuba Economic Research and Consulting Firm. These links are provided for your convenience only and do not imply any endorsement or responsibility for the content, products, services, or privacy practices of such third parties. We strongly recommend that you review the terms and privacy policies of any third-party sites you visit. Your interactions with these external sites are solely at your own risk, and we disclaim any liability arising from your use of third-party resources.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        6. Termination
      </Typography>
      <Typography paragraph>
        We reserve the right, at our sole discretion, to suspend or terminate your access to our website and services at any time and without prior notice, for any reason, including but not limited to your violation of these Terms, suspected fraudulent or illegal activity, or conduct that we believe is harmful to other users or to the integrity of our platform. Upon termination, your right to use our services will immediately cease, and we may deactivate or delete your account and any related information. We are not liable to you or any third party for any termination of your access to our services.
      </Typography>
      <Typography paragraph>
        You may also terminate your use of our services at any time by discontinuing access to our website and, if applicable, deleting your account.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        7. Changes to Terms
      </Typography>
      <Typography paragraph>
        We may update or modify these Terms of Service at any time, at our sole discretion. Any changes will become effective immediately upon posting the revised Terms on our website, unless otherwise specified. Your continued use of our website and services after any such changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically to stay informed of any updates. If you do not agree to the revised Terms, you must discontinue your use of our services.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        8. Governing Law
      </Typography>
      <Typography paragraph>
        These Terms of Service and any disputes arising out of or relating to your use of our website and services are governed by and construed in accordance with the laws of Zambia, without regard to its conflict of law principles. By using our services, you consent to the exclusive jurisdiction and venue of the courts located in Zambia for the resolution of any legal matters or disputes. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        9. Contact Us
      </Typography>
      <Typography paragraph>
        If you have any questions, concerns, or requests regarding these Terms of Service or your use of our website and services, please contact us at <a href="mailto:info@mukubaecon.io">info@mukubaecon.io</a>. We are committed to addressing your inquiries promptly and transparently.
      </Typography>
    </Box>
  </Container>
);

export default TermsOfService;