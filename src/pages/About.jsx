import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const About = () => {
  return (
    <Box component="section" sx={{ py: 10 }}>
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 3 }}>About DLIMS</Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px' }}>
          The Driving License Information Management System (DLIMS) is an integrated component 
          of the Government of Punjab's Dastak - One Window for all Government Services.
        </Typography>
        <Button 
          variant="contained" 
          component="a" 
          href="https://dlims.punjab.gov.pk/index.php/about_us"
          target="_blank"
          sx={{ mt: 2 }}
        >
          Visit Official About Page
        </Button>
      </Container>
    </Box>
  );
};

export default About;
