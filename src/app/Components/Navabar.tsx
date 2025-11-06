import React from 'react';
import Image from 'next/image';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import Logoes from "./Images/logo.png"

const Navbar = () => {
  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        bgcolor: 'white',
        borderBottom: '1px solid #e0e0e0'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          
          {/* Logo Image */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={Logoes}  // Replace with your logo path in /public
              alt="Mahir Logo"
              width={150}  // adjust width
              height={50}  // adjust height
              priority={true}  // optional, if this is critical logo
            />
          </Box>
          
          {/* Login Button */}
          <Button 
            variant="text"
            sx={{ 
              color: '#000',
              fontWeight: 600,
              fontSize: '1rem',
              textTransform: 'none',
              '&:hover': {
                bgcolor: 'transparent',
                textDecoration: 'underline'
              }
            }}
          >
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
