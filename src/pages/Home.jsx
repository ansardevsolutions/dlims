import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Stats from '../components/sections/Stats';

const Home = () => {
  return (
    <Box className="home-page">
      {/* Section IDs for navigation */}
      <Box id="home_section" />
      <Hero />
      <Stats />
      <Box id="about_us_section">
        <Services />
      </Box>
      <Box id="silent_features_section" />
      <Box id="faq_section" />
    </Box>
  );
};

export default Home;
