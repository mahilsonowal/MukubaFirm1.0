// mukuba-consulting/src/pages/ServiceAgreement.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const ServiceAgreement = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Typography variant="h3" gutterBottom fontWeight={700}>
      Service Agreement
    </Typography>
    <Typography variant="subtitle1" gutterBottom color="text.secondary">
      Last updated: June 2025
    </Typography>

    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        1. Introduction
      </Typography>
      <Typography paragraph>
        This Service Agreement (“Agreement”) is entered into by and between Mukuba Economic Research and Consulting Firm (“Mukuba”, “we”, “us”, or “our”) and you (“Client”, “you”, or “your”). This Agreement governs your purchase and use of paid digital downloads and related services provided by Mukuba through our website and digital platforms.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        2. Description of Services
      </Typography>
      <Typography paragraph>
        Mukuba provides access to digital products, including but not limited to research reports, data sets, publications, and other downloadable content (“Services”). The specific details of each Service, including content, format, and delivery method, are described on the relevant product or service page.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        3. Ordering and Payment
      </Typography>
      <Typography paragraph>
        By placing an order for a paid download or service, you agree to pay the fees specified at the time of purchase. Payment must be made in full using the payment methods provided on our website. All prices are listed in the applicable currency and are inclusive of any taxes unless otherwise stated. Your access to the digital product or service will be granted upon successful payment confirmation.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        4. Delivery of Digital Products
      </Typography>
      <Typography paragraph>
        Upon receipt of payment, Mukuba will provide you with access to the purchased digital product via download link, email, or through your user account on our website. It is your responsibility to ensure that your contact information is accurate and up to date. Mukuba is not responsible for failed delivery due to incorrect information provided by you.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        5. License and Permitted Use
      </Typography>
      <Typography paragraph>
        Upon purchase, Mukuba grants you a non-exclusive, non-transferable, revocable license to use the digital product for your personal or internal business purposes only. You may not reproduce, distribute, modify, publicly display, or create derivative works from the digital product without our prior written consent. All intellectual property rights in the digital products remain the exclusive property of Mukuba or its licensors.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        6. Restrictions
      </Typography>
      <Typography paragraph>
        You agree not to share, resell, sublicense, or otherwise make the digital product available to any third party. Any unauthorized use, reproduction, or distribution of the digital product is strictly prohibited and may result in legal action.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        7. Refunds and Cancellations
      </Typography>
      <Typography paragraph>
        Due to the nature of digital products, all sales are final and non-refundable once the product has been accessed or downloaded, except as required by applicable law. If you experience technical issues or believe you have been charged in error, please contact us at <a href="mailto:info@mukubaecon.io">info@mukubaecon.io</a> for assistance.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        8. Client Responsibilities
      </Typography>
      <Typography paragraph>
        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to use the digital products in compliance with all applicable laws and regulations.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        9. Limitation of Liability
      </Typography>
      <Typography paragraph>
        Mukuba makes reasonable efforts to ensure the accuracy and quality of its digital products and services. However, all products and services are provided “as is” and “as available” without warranties of any kind, either express or implied. To the fullest extent permitted by law, Mukuba disclaims all liability for any direct, indirect, incidental, or consequential damages arising from your use of or inability to use the digital products or services.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        10. Termination
      </Typography>
      <Typography paragraph>
        Mukuba reserves the right to terminate or suspend your access to digital products or services at any time, without notice, if you breach this Agreement or engage in any prohibited conduct. Upon termination, your license to use the digital product will immediately cease.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        11. Governing Law
      </Typography>
      <Typography paragraph>
        This Agreement shall be governed by and construed in accordance with the laws of Zambia. Any disputes arising from or relating to this Agreement or your use of our services shall be subject to the exclusive jurisdiction of the courts of Zambia.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        12. Amendments
      </Typography>
      <Typography paragraph>
        Mukuba reserves the right to update or modify this Agreement at any time. Any changes will be effective upon posting the revised Agreement on our website. Your continued use of our services after such changes constitutes your acceptance of the revised Agreement.
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        13. Contact Information
      </Typography>
      <Typography paragraph>
        If you have any questions, concerns, or requests regarding this Service Agreement, please contact us at <a href="mailto:info@mukubaecon.io">info@mukubaecon.io</a>. We are committed to addressing your inquiries promptly and professionally.
      </Typography>
    </Box>

    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        Related Agreements
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mt: 2 }}>
        <a href="/b2b-service-agreement" style={{ textDecoration: 'none' }}>
          <button style={{
            background: '#AF9871',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '10px 18px',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            marginRight: '8px'
          }}>B2B Service Agreement</button>
        </a>
        <a href="/nda" style={{ textDecoration: 'none' }}>
          <button style={{
            background: '#AF9871',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '10px 18px',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            marginRight: '8px'
          }}>NDA</button>
        </a>
        <a href="/dpa" style={{ textDecoration: 'none' }}>
          <button style={{
            background: '#AF9871',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '10px 18px',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer'
          }}>DPA</button>
        </a>
      </Box>
    </Box>
  </Container>
);

export default ServiceAgreement; 