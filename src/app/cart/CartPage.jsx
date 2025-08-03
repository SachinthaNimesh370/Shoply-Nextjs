"use client";

import React, { useEffect } from 'react';
import { useCart } from './CartContext';
import { Box, Typography, Button } from '@mui/material';

export default function CartPage() {
  const { cart, dispatch } = useCart();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch({ type: 'SET_CART', payload: JSON.parse(savedCart) });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        cart.map((item) => (
          <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <Typography>{item.title}</Typography>
            <Typography>${item.price}</Typography>
            <Button variant="outlined" color="secondary" onClick={() => handleRemove(item.id)}>
              Remove
            </Button>
          </Box>
        ))
      )
      }
    </Box>
  );
}
