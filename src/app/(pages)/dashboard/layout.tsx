"use client"

import { Box, AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';
import Sidebar from '@/components/Sidebar';

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
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Professional Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // Account for AppBar height
        }}
      >
        {children}
      </Box>
    </Box>
  );
}