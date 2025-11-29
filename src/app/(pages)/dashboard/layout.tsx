"use client"

import { Box, AppBar, Toolbar, CssBaseline } from '@mui/material';
import Sidebar from '@/Components/Sidebar';
import Image from 'next/image';
import logo from '@/assests/Images/logo.png';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: '#fff',
          height: 64,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <Toolbar sx={{ minHeight: 64 }}>
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
              width={150}
              height={150}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}