import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PublicIcon from '@mui/icons-material/Public';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
  {
    title: 'Learner License',
    description: 'Apply for a new learner permit or renew your existing one online.',
    icon: <AutoStoriesIcon />,
    color: '#2196f3',
  },
  {
    title: 'Regular License',
    description: 'Permanent driving license for cars, bikes, and LTV/HTV vehicles.',
    icon: <HowToRegIcon />,
    color: '#4caf50',
  },
  {
    title: 'International License',
    description: 'Apply for an international driving permit to drive globally.',
    icon: <PublicIcon />,
    color: '#3f51b5',
  },
  {
    title: 'License Renewal',
    description: 'Online renewal of your driving license without visiting center.',
    icon: <RestartAltIcon />,
    color: '#ff9800',
  },
];

const Services = () => {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
            Our Core <span style={{ color: '#38a544' }}>Services</span>
          </Typography>
          <Box sx={{ width: 96, height: 6, bgcolor: '#38a544', borderRadius: 3, mx: 'auto', mb: 3 }} />
          <Typography variant="body1" sx={{ color: 'gray.600', fontWeight: 600, maxWidth: '600px', mx: 'auto' }}>
            Explore the various licensing services we offer to help you stay compliant and safe on the road.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 6,
                    border: '1px solid gray.100',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
                      transition: 'all 0.3s ease',
                      '& .service-icon': {
                        transform: 'scale(1.1) rotate(6deg)',
                      },
                      '& .service-title': {
                        color: '#38a544',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Box
                      className="service-icon"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 4,
                        bgcolor: service.color,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        fontSize: 40,
                        boxShadow: 'lg',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      className="service-title"
                      variant="h5"
                      sx={{ fontWeight: 700, mb: 2, transition: 'color 0.3s ease' }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray.500', mb: 3, lineHeight: 1.6 }}>
                      {service.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#38a544',
                        fontWeight: 700,
                        fontSize: '13px',
                        letterSpacing: '0.5px',
                        '&:hover svg': {
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      LEARN MORE
                      <ArrowForwardIcon sx={{ ml: 1, transition: 'transform 0.3s ease' }} />
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
