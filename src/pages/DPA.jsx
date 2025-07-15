// mukuba-consulting/src/pages/DPA.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const DPA = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Typography variant="h3" gutterBottom fontWeight={700}>
      Data Processing Agreement (DPA)
    </Typography>
    <Typography variant="subtitle1" gutterBottom color="text.secondary">
      Last updated: June 2025
    </Typography>

    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>1. Subject Matter</Typography>
      <Typography paragraph>
        This DPA governs the processing of personal data by Mukuba on behalf of the Client in connection with the Services.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>2. Processing Instructions</Typography>
      <Typography paragraph>
        Mukuba shall process personal data only on documented instructions from the Client and in compliance with applicable data protection laws.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>3. Confidentiality</Typography>
      <Typography paragraph>
        Mukuba shall ensure that persons authorized to process personal data are bound by confidentiality obligations.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>4. Security</Typography>
      <Typography paragraph>
        Mukuba shall implement appropriate technical and organizational measures to protect personal data against unauthorized access, loss, or destruction.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>5. Sub-Processors</Typography>
      <Typography paragraph>
        Mukuba may engage sub-processors only with the Client’s prior written consent and shall remain liable for their actions.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>6. Data Subject Rights</Typography>
      <Typography paragraph>
        Mukuba shall assist the Client in responding to data subject requests to exercise their rights under applicable law.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>7. Data Breach</Typography>
      <Typography paragraph>
        Mukuba shall notify the Client without undue delay after becoming aware of a personal data breach.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>8. Return or Deletion</Typography>
      <Typography paragraph>
        Upon termination of the Services, Mukuba shall, at the Client’s choice, return or delete all personal data.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>9. Audit</Typography>
      <Typography paragraph>
        The Client may audit Mukuba’s compliance with this DPA upon reasonable notice.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>10. Governing Law</Typography>
      <Typography paragraph>
        This DPA shall be governed by the laws of Zambia.
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>11. Signatures</Typography>
      <Typography paragraph>
        IN WITNESS WHEREOF, the parties have executed this DPA as of the Effective Date.<br/><br/>
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

export default DPA; 