'use client';

import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card'; // renamed from `Card` to avoid confusion with MUI's `Card`

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    // fetch('https://fakestoreapi.com/products')
    fetch('http://localhost:5175/api/Product/all')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <Box>
      <Header />

      <Container sx={{ my: 4, display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </Container>

      <Footer />
    </Box>
  );
}
