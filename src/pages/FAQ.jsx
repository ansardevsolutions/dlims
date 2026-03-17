import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const FAQ = () => {
  return (
    <Box component="section" sx={{ py: 10 }}>
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 3 }}>Frequently Asked Questions</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Find answers to common queries regarding driving licenses and our digital services.
        </Typography>
        <Typography variant="body2" sx={{ mt: 4, color: 'text.secondary' }}>
          For more FAQs, please visit the official DLIMS website.
        </Typography>
      </Container>
    </Box>
  );
};

export default FAQ;
