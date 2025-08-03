"use client";

import React, { useEffect } from 'react';
import { useCart } from './CartContext';
import { Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';

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
    <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ maxWidth: 800 }}>
            <Typography variant="h4" gutterBottom>
                Your Cart
            </Typography>
            {cart.length === 0 ? (
                <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
                cart.map((item) => (
                <Card key={item.id} sx={{ display: 'flex', marginBottom: 2 }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 100, objectFit: 'contain', padding: 1 }}
                    image={item.image}
                    alt={item.title}
                    />
                    <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleRemove(item.id)}
                        sx={{ marginTop: 1 }}
                    >
                        Remove
                    </Button>
                    </CardContent>
                </Card>
                ))
            )}
        </Box>
    </Box>
  );
}
