import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Learner Permits Issued', value: '1.2M+', icon: '📄', color: '#2196f3' },
  { label: 'Regular Licenses Issued', value: '850K+', icon: '💳', color: '#4caf50' },
  { label: 'International Licenses', value: '45K+', icon: '🌍', color: '#3f51b5' },
  { label: 'Centers Across Punjab', value: '150+', icon: '🏛️', color: '#ff9800' },
];

const Stats = () => {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={stat.label}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    bgcolor: 'white',
                    p: 5,
                    borderRadius: 4,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid white',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <Typography sx={{ fontSize: '40px', mb: 2 }}>{stat.icon}</Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      color: stat.color,
                      fontWeight: 900,
                      mb: 1,
                      fontSize: '36px',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'gray.500',
                      fontWeight: 700,
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
