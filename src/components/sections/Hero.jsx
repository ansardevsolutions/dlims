import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box 
      component="section" 
      id="home_section"
      className="main-banner"
      sx={{ 
        pt: { xs: 4, md: 6 }, 
        pb: 8,
        bgcolor: 'white',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center' }}>
          {/* Dastak Hero Logo */}
          <Box sx={{ mb: 3 }}>
            <img 
              src="https://dlims.punjab.gov.pk/theme_new/assets/images/dastak_landing_hero_logo.png" 
              alt="Dastak" 
              style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
            />
          </Box>
          
          {/* Hero Text */}
          <Typography 
            variant="h5" 
            sx={{ 
              fontSize: { xs: '18px', md: '22px' }, 
              fontWeight: 500, 
              color: 'gray.700',
              mb: 3,
            }}
          >
            All online driving license services are now
          </Typography>
          
          {/* Powered by Dastak Image */}
          <Box sx={{ mb: 3 }}>
            <img 
              src="https://dlims.punjab.gov.pk/theme_new/assets/images/dastak_landing_hero_powered.png" 
              alt="Powered by Dastak" 
              style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
            />
          </Box>
          
          {/* One Window Text */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '36px', md: '56px' },
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#1a4d2e',
              }}
            >
              One-Window
            </Typography>
            <Typography 
              variant="h4"
              sx={{ 
                fontSize: { xs: '24px', md: '40px' },
                fontWeight: 700,
                color: '#38a544',
                mt: 1,
              }}
            >
              for all Government Services
            </Typography>
          </Box>
          
          {/* Apply License Button */}
          <Button
            component="a"
            href="https://dlims.punjab.gov.pk/login"
            variant="contained"
            sx={{
              bgcolor: '#f2921d',
              color: 'white',
              px: 6,
              py: 2,
              fontSize: '16px',
              fontWeight: 700,
              borderRadius: '8px',
              textTransform: 'uppercase',
              boxShadow: '0 4px 12px rgba(242, 146, 29, 0.3)',
              '&:hover': {
                bgcolor: '#e65100',
              },
            }}
          >
            APPLY LICENSE
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
