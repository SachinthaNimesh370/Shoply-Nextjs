"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// Add icons to the library (optional if you're not using icon strings)
library.add(faMagnifyingGlass, faShoppingCart, faUser);

export default function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'gray.800', zIndex: 1201 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo / Site Name */}
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Shoply
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button href="/" color="inherit">Home</Button>
          <Button href="/product" color="inherit">Product</Button>
          <Button href="about" color="inherit">About</Button>
          <Button href="#" color="inherit">Contact Us</Button>
        </Box>

        {/* Right Side Icons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton color="inherit" sx={{ fontSize: '18px' }}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </IconButton>
          <IconButton color="inherit" sx={{ fontSize: '18px' }}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </IconButton>
          <IconButton color="inherit" sx={{ fontSize: '18px' }}>
            <FontAwesomeIcon icon={faUser} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
