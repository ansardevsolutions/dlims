import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const FeeStructure = () => {
  return (
    <Box component="section" sx={{ py: 10 }}>
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 3 }}>Fee Structure</Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          View the fee structure for different types of driving licenses.
        </Typography>
        <Button 
          variant="contained" 
          component="a" 
          href="https://dlims.punjab.gov.pk/fee_structure"
          target="_blank"
        >
          View Official Fee Structure
        </Button>
      </Container>
    </Box>
  );
};

export default FeeStructure;
