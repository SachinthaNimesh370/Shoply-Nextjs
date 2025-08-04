'use client';

import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import ProductCard from '../components/Card'


export default function Product() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Fetch products from the API
    fetch('http://localhost:5175/api/Product')
      .then((response) => response.json())
      .then((data) => {
        // Filter products by highest rating and limit to top 5
        const sortedProducts = data
          .sort((a, b) => b.rating.rate - a.rating.rate)
          .slice(0, 5);
        setProducts(sortedProducts);
      })
      .catch((error) => console.error('Error fetching products:', error))
  }, [])

  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
        Top Rated Products
      </Typography>
      {products.length > 0 ? (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {products.map((product) => (
            <ProductCard
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
        <Typography variant="h6" sx={{ textAlign: 'center', mt: 4 }}>
          No products available at the moment. Please try again later.
        </Typography>
      )}
    </Box>
  )
}
