import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box component="section" sx={{ py: 10 }}>
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 3 }}>Contact Us</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          For driving license-related queries, please contact us at:
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="body1"><strong>Phone:</strong> 042-99211013</Typography>
          <Typography variant="body1"><strong>Email:</strong> info@dlims.punjab.gov.pk</Typography>
          <Typography variant="body1"><strong>Address:</strong> Police Headquarters, Punjab, Pakistan</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
