import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Downloads = () => {
  return (
    <Box component="section" sx={{ py: 10 }}>
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 3 }}>Downloads</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Download forms and documents related to driving licenses.
        </Typography>
      </Container>
    </Box>
  );
};

export default Downloads;
