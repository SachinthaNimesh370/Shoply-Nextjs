"use client";

import { Box } from '@mui/material'
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import DetailsCard from '../../components/DetailsCard';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import LinearProgress from '@mui/material/LinearProgress';
import { useLoading } from '@/app/context/LoadingContext';

export default function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id: productId } = useParams();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    if (productId) {
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error('Error fetching product details:', error))
        .finally(() => setIsLoading(false));
    }
  }, [productId, setIsLoading]);

  if (!product) {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ paddingTop: '64px' }}>
        <Header/>
        <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <DetailsCard
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
                rating={product.rating}
                category={product.category} // Pass the category prop
            />
        </Box>
        <Footer/>
    </Box>
    
  );
}
