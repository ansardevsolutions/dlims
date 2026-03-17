import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: 'slate.900', color: 'slate.300', py: 8 }}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* About Section */}
          <Grid item xs={12} md={6} lg={3}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
                DLIMS Punjab
              </Typography>
              <Typography variant="body2" sx={{ color: 'slate.400', lineHeight: 1.7, mb: 3 }}>
                The Driving License Information Management System (DLIMS) is a one-window operation 
                for all driving license related services in Punjab.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box 
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    borderRadius: '50%', 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <Typography sx={{ color: '#38a544', fontWeight: 700 }}>P</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'slate.200', fontWeight: 700, display: 'block' }}>
                    Punjab Police
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'slate.400', display: 'block' }}>
                    Govt of Punjab
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={6} lg={3}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 3 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Link href="https://dlims.punjab.gov.pk/" color="inherit" underline="hover" sx={{ fontSize: '13px', '&:hover': { color: '#38a544' } }}>
                  Home
                </Link>
                <Link href="https://dlims.punjab.gov.pk/index.php/about_us" color="inherit" underline="hover" sx={{ fontSize: '13px', '&:hover': { color: '#38a544' } }}>
                  About DLIMS
                </Link>
                <Link href="https://dlims.punjab.gov.pk/register" color="inherit" underline="hover" sx={{ fontSize: '13px', '&:hover': { color: '#38a544' } }}>
                  Apply for License
                </Link>
                <Link href="https://dlims.punjab.gov.pk/track" color="inherit" underline="hover" sx={{ fontSize: '13px', '&:hover': { color: '#38a544' } }}>
                  Track Application
                </Link>
                <Link href="https://dlims.punjab.gov.pk/verify" color="inherit" underline="hover" sx={{ fontSize: '13px', '&:hover': { color: '#38a544' } }}>
                  Verify License
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6} lg={3}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 3 }}>
                Contact Us
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <LocationOnIcon sx={{ color: '#38a544', fontSize: 20, flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ fontSize: '13px' }}>
                    Police Headquarters, Punjab, Pakistan
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <EmailIcon sx={{ color: '#38a544', fontSize: 20, flexShrink: 0 }} />
                  <Link href="mailto:info@dlims.punjab.gov.pk" color="inherit" underline="none" sx={{ fontSize: '13px' }}>
                    info@dlims.punjab.gov.pk
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <PhoneIcon sx={{ color: '#38a544', fontSize: 20, flexShrink: 0 }} />
                  <Link href="tel:042-99211013" color="inherit" underline="none" sx={{ fontSize: '13px' }}>
                    042-99211013
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Dastak Support */}
          <Grid item xs={12} md={6} lg={3}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 3 }}>
                Supported By
              </Typography>
              <Box 
                sx={{ 
                  p: 3, 
                  bgcolor: 'rgba(255,255,255,0.05)', 
                  borderRadius: 2, 
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: '#38a544', 
                    fontWeight: 900, 
                    fontSize: '24px',
                    fontStyle: 'italic',
                    letterSpacing: '-0.5px',
                    mb: 1,
                  }}
                >
                  DASTAK
                </Typography>
                <Typography variant="caption" sx={{ color: 'slate.400', fontSize: '12px', lineHeight: 1.6 }}>
                  Dastak brings government services directly to your doorstep with professionalism and efficiency.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'slate.800' }} />

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: 3,
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: 'slate.500',
          }}
        >
          <Typography variant="caption">
            © {currentYear} DLIMS Punjab. All Rights Reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Link 
              href="https://dlims.punjab.gov.pk/privacy_policy" 
              color="inherit" 
              underline="hover"
              sx={{ '&:hover': { color: 'white' } }}
            >
              Privacy Policy
            </Link>
            <Link 
              href="https://dlims.punjab.gov.pk/terms_of_service" 
              color="inherit" 
              underline="hover"
              sx={{ '&:hover': { color: 'white' } }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
