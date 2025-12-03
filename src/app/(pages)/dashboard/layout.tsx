// "use client"

// import { useState } from 'react';
// import { Box, AppBar, Toolbar, CssBaseline, IconButton, useMediaQuery, useTheme } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import Sidebar from '@/Components/Sidebar';
// import Image from 'next/image';
// import logo from '@/assests/Images/logo.png';

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
      
//       {/* AppBar */}
//       <AppBar
//         position="fixed"
//         sx={{ 
//           zIndex: (theme) => theme.zIndex.drawer + 1,
//           bgcolor: '#fff',
//           height: { xs: 56, sm: 64 },
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//         }}
//       >
//         <Toolbar sx={{ minHeight: { xs: 56, sm: 64 }, px: { xs: 2, sm: 3 } }}>
//           {/* Mobile Menu Button */}
//           {isMobile && (
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ 
//                 mr: 2,
//                 color: '#000',
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}

//           {/* Logo */}
//           <Box
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               height: '100%',
//               py: 1
//             }}
//           >
//             <Image 
//               src={logo}
//               alt="Logo" 
//               width={isMobile ? 120 : 150}
//               height={isMobile ? 120 : 150}
//               style={{ objectFit: 'contain' }}
//               priority
//             />
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar */}
//       <Sidebar 
//         mobileOpen={mobileOpen}
//         onMobileClose={handleDrawerToggle}
//       />

//       {/* Main Content */}
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: { xs: 2, sm: 3 },
//           mt: { xs: 7, sm: 8 },
//           width: { xs: '100%', md: 'calc(100% - 260px)' },
//           minHeight: '100vh',
//           bgcolor: '#f5f5f5',
//         }}
//       >
//         {children}
//       </Box>
//     </Box>
//   );
// }

"use client"

import { useState } from 'react';
import { 
  Box, 
  AppBar, 
  Toolbar, 
  CssBaseline, 
  IconButton, 
  useMediaQuery, 
  useTheme,
  Badge,
  Popover,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Paper,
  Chip,
  Stack
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Sidebar from '@/Components/Sidebar';
import Image from 'next/image';
import logo from '@/assests/Images/logo.png';
import { useGetOrdersQuery } from '@/redux/api/orderApi';
import { IOrder } from '@/types/order';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notificationAnchor, setNotificationAnchor] = useState<null | HTMLElement>(null);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Fetch orders
  const { data } = useGetOrdersQuery();
  const orders = data?.orders || [];

  // Filter only pending orders for notifications
  const pendingOrders = orders.filter((order: IOrder) => order.status === 'pending');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNotificationClick = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchor(null);
  };

  const notificationOpen = Boolean(notificationAnchor);

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

          {/* Spacer to push notification to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Notification Icon */}
          <IconButton
            color="inherit"
            onClick={handleNotificationClick}
            sx={{ 
              color: '#000',
            }}
          >
            <Badge 
              badgeContent={pendingOrders.length} 
              color="error"
              max={99}
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Notification Popover */}
      <Popover
        open={notificationOpen}
        anchorEl={notificationAnchor}
        onClose={handleNotificationClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            mt: 1.5,
            width: { xs: '90vw', sm: 400 },
            maxHeight: 500,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }
        }}
      >
        {/* Notification Header */}
        <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Pending Orders
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {pendingOrders.length} {pendingOrders.length === 1 ? 'order' : 'orders'} awaiting action
          </Typography>
        </Box>

        <Divider />

        {/* Notification List */}
        <Box sx={{ overflowY: 'auto', flex: 1 }}>
          {pendingOrders.length === 0 ? (
            <Box sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                No pending orders
              </Typography>
            </Box>
          ) : (
            <List sx={{ p: 0 }}>
              {pendingOrders.map((order: IOrder, index: number) => (
                <Box key={order._id}>
                  <ListItem
                    sx={{
                      py: 2,
                      px: 2,
                      '&:hover': {
                        bgcolor: 'grey.50',
                      },
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Stack 
                      direction="row" 
                      justifyContent="space-between" 
                      alignItems="center"
                      sx={{ width: '100%', mb: 1 }}
                    >
                      <Typography 
                        variant="subtitle2" 
                        sx={{ fontWeight: 600 }}
                      >
                        {order.name}
                      </Typography>
                      <Chip 
                        label="Pending" 
                        size="small" 
                        color="warning"
                        sx={{ fontWeight: 600 }}
                      />
                    </Stack>

                    <Typography 
                      variant="body2" 
                      color="text.primary"
                      sx={{ mb: 0.5 }}
                    >
                      Service: {order.serviceName}
                    </Typography>

                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ fontSize: '0.875rem' }}
                    >
                      Contact: {order.contactNumber}
                    </Typography>

                    <Typography 
                      variant="caption" 
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {new Date(order.createdAt || '').toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </Typography>
                  </ListItem>
                  {index < pendingOrders.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          )}
        </Box>

        {/* View All Footer */}
        {pendingOrders.length > 0 && (
          <>
            <Divider />
            <Box 
              sx={{ 
                p: 1.5, 
                textAlign: 'center',
                bgcolor: 'grey.50',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: 'grey.100',
                }
              }}
              onClick={handleNotificationClose}
            >
              <Typography 
                variant="body2" 
                color="primary"
                sx={{ fontWeight: 600 }}
              >
                View All Orders
              </Typography>
            </Box>
          </>
        )}
      </Popover>

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