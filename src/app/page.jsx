"use client";

import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ paddingTop: '64px' }}> 
      <Header />
      <Product />
      <Footer />
      
    </Box>
  );
}
