import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Downloads from './pages/Downloads';
import FeeStructure from './pages/FeeStructure';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={
          <Box component="section" sx={{ py: 10 }}>
            <Container maxWidth="xl">
              <Typography variant="h3">About Page - Coming Soon</Typography>
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
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/how-it-works" element={<Home />} /> {/* Temporary */}
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/fee_structure" element={<FeeStructure />} />
        <Route path="/fee-structure" element={<FeeStructure />} /> {/* Alternative route */}
      </Routes>
    </Layout>
  );
}

export default App;