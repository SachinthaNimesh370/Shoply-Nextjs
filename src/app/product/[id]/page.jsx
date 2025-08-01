"use client";

import { Box } from '@mui/material'
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import DetailsCard from '../../components/DetailsCard';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id: productId } = useParams();

  useEffect(() => {
    if (productId) {
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error('Error fetching product details:', error));
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
        <Header/>
        <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <DetailsCard
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
                rating={product.rating}
            />
        </Box>
        <Footer/>
    </Box>
    
  );
}
