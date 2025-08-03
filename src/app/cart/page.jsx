"use client";

import React from 'react';
import { Box } from '@mui/material';
import CartPage from './CartPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page() {

  return(
    <Box>
        <Header/>
        <CartPage />
        <Footer/>
    </Box>
  ) ;
}