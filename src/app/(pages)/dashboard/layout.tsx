"use client"

import { useState } from 'react';
import { Box, AppBar, Toolbar, CssBaseline, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '@/Components/Sidebar';
import Image from 'next/image';
import logo from '@/assests/Images/logo.png';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: '#fff',
          height: { xs: 56, sm: 64 },
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 56, sm: 64 }, px: { xs: 2, sm: 3 } }}>
          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                mr: 2,
                color: '#000',
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              py: 1
            }}
          >
            <Image 
              src={logo}
              alt="Logo" 
              width={isMobile ? 120 : 150}
              height={isMobile ? 120 : 150}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Sidebar 
        mobileOpen={mobileOpen}
        onMobileClose={handleDrawerToggle}
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          mt: { xs: 7, sm: 8 },
          width: { xs: '100%', md: 'calc(100% - 260px)' },
          minHeight: '100vh',
          bgcolor: '#f5f5f5',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}