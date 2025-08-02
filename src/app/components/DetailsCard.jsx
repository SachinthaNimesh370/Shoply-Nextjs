'use client';

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useRouter } from 'next/navigation';

export default function ProductCard({ id, title, price, description, image, rating }) {
  const router = useRouter();

  return (
    <Card
      sx={{
        maxWidth: 400,
        height: 600,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 2,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: 'contain', p: 2, maxHeight: 250 }}
      />
      <CardContent
        sx={{
          margin: '0 auto',
          justifyContent: 'center',
          padding: '5',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: 18, textAlign: 'center', minHeight: '50px', display: 'flex', alignItems: 'center' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', fontSize: 12, textAlign: 'center', minHeight: '60px', display: 'flex', alignItems: 'center' }}
        >
          {description}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          mt={1}
          sx={{ minHeight: '20px', display: 'flex', alignItems: 'center',position: 'relative', bottom: 10, }}
        >
          ${price}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', fontSize: 12, textAlign: 'center', mt: 1,position: 'relative', bottom: 12,}}
        >
          Rating: {rating.rate} ({rating.count} reviews)
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          position: 'absolute',
          bottom: 2,
          left: 0,
          right: 0,
          margin: '0 auto',
          justifyContent: 'center',
          paddingBottom: '10',
        }}
      >
        <Button size="medium" onClick={() => router.push(`/product`)}>
          Back to Products
        </Button>
      </CardActions>
    </Card>
  );
}

// {products.map(product => (
//   <ProductCard
//     key={product.id}
//     id={product.id}
//     title={product.title}
//     price={product.price}
//     description={product.description}
//     image={product.image}
//   />
// ))}
