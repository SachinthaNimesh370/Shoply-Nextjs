'use client';

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';
import Rating from '@mui/material/Rating';

export default function ProductCard({ id, title, price, description, image, rating }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (increment) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + increment));
  };

  return (
    <Card
      sx={{
        maxWidth: 800,
        height: 440,
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 2,
      }}
    >
      {/* Image Section */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: '40%',
          height: '80%',
          objectFit: 'contain',
          padding: 2,
        }}
      />

      {/* Details Section */}
      <CardContent
        sx={{
          width: '75%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: 2,
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: 18, textAlign: 'left', minHeight: '50px', display: 'flex', alignItems: 'center' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', fontSize: 12,minHeight: '60px', display: 'flex', textAlign:'justify' }}
        >
          {description}
        </Typography>

        {/* Product Rating */}
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 1 }}>
          <Rating value={rating?.rate} precision={0.1} readOnly size="small" />
          <Typography variant="body2" sx={{ fontSize: 10, color: 'text.secondary' }}>
            ({rating?.count} reviews)
          </Typography>
        </Box>

        <Typography
          color="primary"
          mt={1}
          sx={{ minHeight: '20px', display: 'flex', alignItems: 'center', fontSize: 18 }}
        >
          ${price}
        </Typography>

        {/* Quantity and Total Price */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
          <Button variant="outlined" size="small" onClick={() => handleQuantityChange(-1)}>-</Button>
          <Typography variant="body1" sx={{ fontSize: 16 }}>
            {quantity}
          </Typography>
          <Button variant="outlined" size="small" onClick={() => handleQuantityChange(1)}>+</Button>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', fontSize: 14, textAlign: 'left', mt: 1 }}
        >
          Total Price: ${(quantity * price).toFixed(2)}
        </Typography>
        
      </CardContent>

      <CardActions
        sx={{
          position: 'absolute',
          bottom: 10,
          left: 10,
        }}
      >
        <Button size="medium" onClick={() => router.push(`/product`)}>
          Back to Products
        </Button>
      </CardActions>
    </Card>
  );
}


