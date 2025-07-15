// mukuba-consulting/src/pages/B2BServiceAgreement.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const B2BServiceAgreement = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Typography variant="h3" gutterBottom fontWeight={700}>
      B2B Service Agreement
    </Typography>
    <Typography variant="subtitle1" gutterBottom color="text.secondary">
      Last updated: June 2025
    </Typography>

    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>1. Parties</Typography>
      <Typography paragraph>
        This Service Agreement (“Agreement”) is entered into as of [Date], by and between Mukuba Economic Research and Consulting Firm (“Mukuba”, “we”, “us”, or “our”), with its principal place of business at Plot #38 Kudu Rd, Kabulonga, Lusaka, Zambia, and [Client Company Name] (“Client”, “you”, or “your”), with its principal place of business at [Client Address].
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>2. Scope of Services</Typography>
      <Typography paragraph>
        Mukuba agrees to provide the services described in the attached Statement of Work (“SOW”) or as otherwise agreed in writing by both parties (“Services”).
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>3. Term</Typography>
      <Typography paragraph>
        This Agreement shall commence on the Effective Date and continue until completion of the Services, unless terminated earlier in accordance with this Agreement.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>4. Fees and Payment</Typography>
      <Typography paragraph>
        Client agrees to pay Mukuba the fees set forth in the SOW or invoice. Payment is due within [30] days of invoice date, unless otherwise agreed in writing.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>5. Confidentiality</Typography>
      <Typography paragraph>
        Both parties agree to keep confidential all non-public information disclosed during the course of this Agreement. Confidential information shall not be disclosed to any third party without prior written consent, except as required by law.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>6. Intellectual Property</Typography>
      <Typography paragraph>
        Unless otherwise agreed in writing, all intellectual property developed by Mukuba in connection with the Services shall remain the property of Mukuba. Client is granted a non-exclusive, non-transferable license to use deliverables for its internal business purposes.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>7. Warranties and Disclaimers</Typography>
      <Typography paragraph>
        Mukuba will perform the Services in a professional and workmanlike manner. Except as expressly stated, Mukuba disclaims all other warranties, express or implied.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>8. Limitation of Liability</Typography>
      <Typography paragraph>
        To the fullest extent permitted by law, neither party shall be liable for any indirect, incidental, or consequential damages. Mukuba’s total liability shall not exceed the total fees paid by Client under this Agreement.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>9. Termination</Typography>
      <Typography paragraph>
        Either party may terminate this Agreement with [30] days’ written notice. Upon termination, Client shall pay for all Services performed up to the termination date.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>10. Governing Law</Typography>
      <Typography paragraph>
        This Agreement shall be governed by the laws of Zambia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Zambia.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>11. Entire Agreement</Typography>
      <Typography paragraph>
        This Agreement, together with any SOWs, constitutes the entire agreement between the parties and supersedes all prior agreements.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>12. Signatures</Typography>
      <Typography paragraph>
        IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.<br/><br/>
        Mukuba Economic Research and Consulting Firm<br/>
        By: ___________________________<br/>
        Name: _________________________<br/>
        Title: __________________________<br/>
        Date: ___________________________<br/><br/>
        [Client Company Name]<br/>
        By: ___________________________<br/>
        Name: _________________________<br/>
        Title: __________________________<br/>
        Date: ___________________________
      </Typography>
    </Box>
  </Container>
);

export default B2BServiceAgreement; 