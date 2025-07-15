// mukuba-consulting/src/pages/NDA.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const NDA = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Typography variant="h3" gutterBottom fontWeight={700}>
      Non-Disclosure Agreement (NDA)
    </Typography>
    <Typography variant="subtitle1" gutterBottom color="text.secondary">
      Last updated: June 2025
    </Typography>

    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>1. Definition of Confidential Information</Typography>
      <Typography paragraph>
        “Confidential Information” means all non-public, proprietary, or confidential information disclosed by either party, whether oral, written, or electronic.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>2. Obligations</Typography>
      <Typography paragraph>
        The Receiving Party agrees to:<br/>
        a) Use Confidential Information solely for the purpose of evaluating or performing the business relationship;<br/>
        b) Not disclose Confidential Information to any third party without prior written consent;<br/>
        c) Take reasonable measures to protect the confidentiality of the information.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>3. Exclusions</Typography>
      <Typography paragraph>
        Confidential Information does not include information that:<br/>
        a) Is or becomes public through no fault of the Receiving Party;<br/>
        b) Is lawfully received from a third party without restriction;<br/>
        c) Is independently developed by the Receiving Party.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>4. Term</Typography>
      <Typography paragraph>
        This Agreement shall remain in effect for [3] years from the date of disclosure.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>5. Return or Destruction</Typography>
      <Typography paragraph>
        Upon request, the Receiving Party shall return or destroy all Confidential Information.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>6. Governing Law</Typography>
      <Typography paragraph>
        This Agreement shall be governed by the laws of Zambia.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>7. Signatures</Typography>
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

export default NDA; 