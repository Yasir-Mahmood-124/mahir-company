'use client';

import { JSX, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Typography,
  Avatar,
  Divider,
  Button,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CategoryIcon from '@mui/icons-material/Category';
import BuildIcon from '@mui/icons-material/Build';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppDispatch } from '@/redux/hooks';
import { logout } from '@/redux/slices/authslices';

const DRAWER_WIDTH = 260;
const DRAWER_WIDTH_COLLAPSED = 70;

interface MenuItem {
  text: string;
  icon: JSX.Element;
  path: string;
}

const menuItems: MenuItem[] = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Add Services', icon: <CategoryIcon />, path: '/dashboard/products' },
  { text: 'Services', icon: <BuildIcon />, path: '/dashboard/serviceproducts' },
  { text: 'Orders', icon: <ShoppingCartIcon />, path: '/dashboard/orders' },
  { text: 'Analytics', icon: <AnalyticsIcon />, path: '/dashboard/analytics' },
];

interface SidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export default function Sidebar({ mobileOpen = false, onMobileClose }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [collapsed, setCollapsed] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const handleNavigation = (path: string) => {
    router.push(path);
    if (isMobile && onMobileClose) {
      onMobileClose();
    }
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      // ✅ Pehle API call karke cookie delete karo
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      
      // ✅ Redux state clear karo
      dispatch(logout());
      
      console.log('✅ Logout completed');
      
      // ✅ Home page pe redirect with force reload
      window.location.href = '/';
      
    } catch (error) {
      console.error('❌ Logout error:', error);
      // Error ho bhi to redirect kar do
      window.location.href = '/';
    }
  };

  const drawerWidth = collapsed && !isMobile ? DRAWER_WIDTH_COLLAPSED : DRAWER_WIDTH;

  const drawerContent = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'white',
        color: 'black',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: { xs: 1.5, sm: 2 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: { xs: 56, sm: 64 },
          borderBottom: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        {(!collapsed || isMobile) && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
            <Avatar
              sx={{
                bgcolor: '#4CAF50',
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
                fontWeight: 700,
                fontSize: { xs: '1rem', sm: '1.25rem' },
              }}
            >
              M
            </Avatar>
            <Box>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  fontWeight: 700, 
                  lineHeight: 1.2,
                  fontSize: { xs: '0.875rem', sm: '0.95rem' },
                }}
              >
                Mahir Company
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'rgba(0,0,0,0.6)',
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                }}
              >
                Admin Panel
              </Typography>
            </Box>
          </Box>
        )}
        
        {isMobile ? (
          <IconButton 
            onClick={onMobileClose} 
            sx={{ 
              color: 'black',
              p: { xs: 0.5, sm: 1 },
            }}
          >
            <CloseIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => setCollapsed(!collapsed)}
            sx={{
              color: 'black',
              bgcolor: 'rgba(0,0,0,0.05)',
              p: 1,
              '&:hover': { bgcolor: 'rgba(0,0,0,0.1)' },
            }}
          >
            <ChevronLeftIcon
              sx={{
                transform: collapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
              }}
            />
          </IconButton>
        )}
      </Box>

      {/* Menu Items */}
      <List sx={{ px: { xs: 1, sm: 1 }, pt: { xs: 1.5, sm: 2 }, flexGrow: 1 }}>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                sx={{
                  borderRadius: 2,
                  py: { xs: 1.2, sm: 1.5 },
                  px: { xs: 1.5, sm: 2 },
                  bgcolor: isActive ? 'rgba(76, 175, 80, 0.15)' : 'transparent',
                  border: isActive ? '1px solid #4CAF50' : '1px solid transparent',
                  transition: 'all 0.3s',
                  '&:hover': {
                    bgcolor: isActive ? 'rgba(76, 175, 80, 0.2)' : 'rgba(0,0,0,0.05)',
                    transform: 'translateX(4px)',
                  },
                  '&:active': {
                    transform: 'scale(0.98)',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? '#4CAF50' : 'rgba(0,0,0,0.7)',
                    minWidth: collapsed && !isMobile ? 0 : { xs: 36, sm: 40 },
                    justifyContent: 'center',
                    '& svg': {
                      fontSize: { xs: 20, sm: 24 },
                    },
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {(!collapsed || isMobile) && (
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? '#4CAF50' : 'black',
                      fontSize: { xs: '0.875rem', sm: '0.95rem' },
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Logout Button */}
      <Box sx={{ px: { xs: 1, sm: 1.5 }, pb: { xs: 1, sm: 1.5 } }}>
        <Divider sx={{ mb: { xs: 1, sm: 1.5 } }} />
        
        {collapsed && !isMobile ? (
          <IconButton
            onClick={handleLogout}
            disabled={loggingOut}
            sx={{
              width: '100%',
              color: '#f44336',
              bgcolor: 'rgba(244, 67, 54, 0.08)',
              '&:hover': {
                bgcolor: 'rgba(244, 67, 54, 0.15)',
              },
            }}
          >
            <LogoutIcon />
          </IconButton>
        ) : (
          <Button
            fullWidth
            variant="outlined"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            disabled={loggingOut}
            sx={{
              py: { xs: 1, sm: 1.2 },
              borderColor: '#f44336',
              color: '#f44336',
              fontWeight: 600,
              fontSize: { xs: '0.875rem', sm: '0.95rem' },
              textTransform: 'none',
              borderRadius: 2,
              '&:hover': {
                borderColor: '#d32f2f',
                bgcolor: 'rgba(244, 67, 54, 0.08)',
              },
              '&:disabled': {
                opacity: 0.6,
              },
            }}
          >
            {loggingOut ? 'Logging out...' : 'Logout'}
          </Button>
        )}
      </Box>

      {/* Footer */}
      {(!collapsed || isMobile) && (
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 },
            borderTop: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <Typography 
            variant="caption" 
            sx={{ 
              color: 'rgba(0,0,0,0.5)',
              fontSize: { xs: '0.7rem', sm: '0.75rem' },
            }}
          >
            © 2024 UstadonCall Company
          </Typography>
        </Box>
      )}
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onMobileClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              width: { xs: '85vw', sm: DRAWER_WIDTH },
              maxWidth: DRAWER_WIDTH,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        /* Desktop Drawer */
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            transition: 'width 0.3s',
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              transition: 'width 0.3s',
              overflowX: 'hidden',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
}