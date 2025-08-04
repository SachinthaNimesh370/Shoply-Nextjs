'use client';

import { Box, Container, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card'; // renamed from `Card` to avoid confusion with MUI's `Card`
import LinearProgress from '@mui/material/LinearProgress';

export default function Page() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Fetch products from the API
    fetch('http://localhost:5175/api/Product')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Box sx={{ paddingTop: '64px' }}>
      <Header />

      <Container sx={{ my: 4 }}>
        <TextField
          fullWidth
          label="Search Products"
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          sx={{ marginBottom: 4 }}
        />

        {filteredProducts.length > 0 ? (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
                rating={product.rating}
              />
            ))}
          </Box>
        ) : (
          <Box>
            {products.length === 0 && <LinearProgress />}
            <Typography variant="h6" textAlign="center">
              {searchText ? 'No products found.' : products.length === 0 ? 'No products available at the moment. Please try again later.' : 'Loading products...'}
            </Typography>
          </Box>
        )}
      </Container>

      <Footer />
    </Box>
  );
}
