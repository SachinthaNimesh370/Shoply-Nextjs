import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function page() {
  return (
    <Box>
      <Header />
      <Box sx={{ paddingTop: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            sx={{ width: 30 , marginLeft:"15px"}}
            image="/globe.svg"
            alt="About Us"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              About Shoply
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Shoply is your one-stop destination for all your shopping needs. We offer a wide range of products, from electronics to fashion, ensuring quality and affordability. Our mission is to provide a seamless shopping experience for our customers.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </Box>
  )
}
