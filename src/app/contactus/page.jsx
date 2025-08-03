"use client";
import React from 'react'
import { Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Typography from '@mui/material/Typography';

export default function page() {
  return (
    <Box sx={{ paddingTop: '64px' }}>
      <Header />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" textAlign="center">
          For inquiries, please email us at support@shoply.com or call us at (123) 456-7890.
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
}
