'use client';

import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ProductCard from '../components/Card'


export default function Product() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Fetch products from the API
    fetch('http://localhost:5175/api/Product/all')
      .then((response) => response.json())
      .then((data) => {
        // Filter products by highest rating and limit to top 10
        const sortedProducts = data
          .sort((a, b) => b.rating.rate - a.rating.rate)
          .slice(0, 5);
        setProducts(sortedProducts);
      })
      .catch((error) => console.error('Error fetching products:', error))
  }, [])

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', marginTop: 4 }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </Box>
  )
}
