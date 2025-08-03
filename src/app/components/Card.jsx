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

export default function ProductCard({ id, title, price, description, image }) {
  const router = useRouter();

  return (
    <Card
      sx={{
        maxWidth: 250,
        height: 310,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardActionArea onClick={() => router.push(`/product/${id}`)}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: 140,           
            objectFit: 'contain',
            padding: 2,
          }}
        />
        <CardContent
          sx={{
            margin: '0 auto',
            justifyContent: 'center',
            padding: '5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            height: 120,
          }}
        >
          {/* Product Title */}
          <Typography
            gutterBottom
            component="div"
            sx={{ fontSize: 14, textAlign: 'center',height:'30', display: 'flex', alignItems: 'center' }}
          >
            {title}
          </Typography>

          {/* Product Description */}
          <Typography
            variant="body2"
            sx={{ fontSize: 10, color: 'text.secondary', textAlign: 'center', height: '30px', display: 'flex', alignItems: 'center' }}
          >
            {description.slice(0, 120)}...
            {/* {description.slice(0, 100)}... */}
          </Typography>

          {/* Product Price */}
          <Typography
            color="primary"
            mt={1}
            sx={{ minHeight: '20px', display: 'flex', alignItems: 'center',fontSize:'5', position: 'absolute', top: 100 }}
          >
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
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
        <Button size="small" onClick={() => router.push(`/product/${id}`)}>
          View Details
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
