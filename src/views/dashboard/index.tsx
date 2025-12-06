// src/Components/Dashboard.tsx
'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  CircularProgress,
  Alert,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Snackbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  ShoppingCart,
  PendingActions,
  CheckCircle,
  Cancel,
  Edit,
  Refresh,
} from '@mui/icons-material';
import { useGetOrdersQuery, useUpdateOrderStatusMutation } from '@/redux/api/orderApi';
import { IOrder } from '@/types/order';
import AnalyticsStats from '@/Components/AnalyticsStats';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const { data, isLoading, error, refetch } = useGetOrdersQuery();
  const [updateStatus] = useUpdateOrderStatusMutation();
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);
  const [snackbar, setSnackbar] = useState({ 
    open: false, 
    message: '', 
    severity: 'success' as 'success' | 'error' 
  });

  const orders = data?.orders || [];

  // Filter orders by status
  const pendingOrders = orders.filter((order: IOrder) => order.status === 'pending');
  const processingOrders = orders.filter((order: IOrder) => order.status === 'processing');
  const completedOrders = orders.filter((order: IOrder) => order.status === 'completed');
  const cancelledOrders = orders.filter((order: IOrder) => order.status === 'cancelled');

  // Stats cards data
  const statsCards = [
    {
      title: 'Total Orders',
      value: orders.length,
      icon: <ShoppingCart style={{ fontSize: 40 }} />,
      color: '#1976d2',
      bgColor: '#e3f2fd',
    },
    {
      title: 'Pending Orders',
      value: pendingOrders.length,
      icon: <PendingActions style={{ fontSize: 40 }} />,
      color: '#ed6c02',
      bgColor: '#fff4e5',
    },
    {
      title: 'Completed Orders',
      value: completedOrders.length,
      icon: <CheckCircle style={{ fontSize: 40 }} />,
      color: '#2e7d32',
      bgColor: '#e8f5e9',
    },
    {
      title: 'Cancelled Orders',
      value: cancelledOrders.length,
      icon: <Cancel style={{ fontSize: 40 }} />,
      color: '#d32f2f',
      bgColor: '#ffebee',
    },
  ];

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, order: IOrder) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrder(order);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedOrder(null);
  };

  const handleStatusUpdate = async (newStatus: string) => {
    if (!selectedOrder?._id) return;
    
    try {
      await updateStatus({ 
        id: selectedOrder._id, 
        status: newStatus 
      }).unwrap();
      
      setSnackbar({ 
        open: true, 
        message: `Order status updated to ${newStatus}`, 
        severity: 'success' 
      });
      handleMenuClose();
    } catch (error: any) {
      console.error('Failed to update status:', error);
      setSnackbar({ 
        open: true, 
        message: error?.data?.message || 'Failed to update status', 
        severity: 'error' 
      });
    }
  };

  // Mobile Card View for Orders
  const MobileOrderCard = ({ order, index }: { order: IOrder, index: number }) => (
    <Card style={{ marginBottom: 12 }}>
      <CardContent>
        <Stack spacing={1.5}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" style={{ color: '#666', fontWeight: 600 }}>
              #{index + 1}
            </Typography>
            <IconButton
              size="small"
              color="primary"
              onClick={(e) => handleMenuOpen(e, order)}
            >
              <Edit fontSize="small" />
            </IconButton>
          </Stack>
          
          <Box>
            <Typography variant="caption" style={{ color: '#999' }}>Customer</Typography>
            <Typography variant="body2" style={{ fontWeight: 600 }}>{order.name}</Typography>
          </Box>
          
          <Box>
            <Typography variant="caption" style={{ color: '#999' }}>Contact</Typography>
            <Typography variant="body2" style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>
              {order.contactNumber}
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="caption" style={{ color: '#999' }}>Service</Typography>
            <Typography variant="body2">{order.serviceName}</Typography>
          </Box>
          
          <Box>
            <Typography variant="caption" style={{ color: '#999' }}>Address</Typography>
            <Typography variant="body2" style={{ color: '#666', fontSize: '0.85rem' }}>
              {order.address}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );

  // Reusable Order Table Component
  const OrderTable = ({ 
    orders, 
    title, 
    statusColor, 
    emptyIcon: EmptyIcon, 
    emptyMessage 
  }: { 
    orders: IOrder[], 
    title: string, 
    statusColor: any, 
    emptyIcon: any, 
    emptyMessage: string 
  }) => (
    <Paper style={{ padding: 24, height: '100%' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" style={{ marginBottom: 24 }}>
        <Box>
          <Typography variant="h6" style={{ fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography variant="body2" style={{ color: '#666', marginTop: 4 }}>
            {orders.length} orders
          </Typography>
        </Box>
        <Chip
          label={orders.length}
          color={statusColor}
          style={{ fontWeight: 600 }}
        />
      </Stack>

      {orders.length === 0 ? (
        <Box style={{ paddingTop: 32, paddingBottom: 32, textAlign: 'center' }}>
          <EmptyIcon style={{ fontSize: 60, color: '#ccc', marginBottom: 16 }} />
          <Typography variant="body1" style={{ color: '#666' }}>
            {emptyMessage}
          </Typography>
        </Box>
      ) : (
        <>
          {/* Mobile View - Cards */}
          {isMobile ? (
            <Box>
              {orders.map((order: IOrder, index: number) => (
                <MobileOrderCard key={order._id} order={order} index={index} />
              ))}
            </Box>
          ) : (
            /* Desktop View - Table (EXACT ORIGINAL) */
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow style={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell style={{ fontWeight: 700 }}>#</TableCell>
                    <TableCell style={{ fontWeight: 700 }}>Customer</TableCell>
                    <TableCell style={{ fontWeight: 700 }}>Contact</TableCell>
                    <TableCell style={{ fontWeight: 700 }}>Service</TableCell>
                    <TableCell style={{ fontWeight: 700 }}>Address</TableCell>
                    <TableCell style={{ fontWeight: 700, textAlign: 'center' }}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order: IOrder, index: number) => (
                    <TableRow
                      key={order._id}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fafafa';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <TableCell>
                        <Typography variant="body2" style={{ color: '#666', fontWeight: 600 }}>
                          {index + 1}
                        </Typography>
                      </TableCell>
                      
                      <TableCell>
                        <Typography variant="body2" style={{ fontWeight: 600 }}>
                          {order.name}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Typography variant="body2" style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>
                          {order.contactNumber}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Typography variant="body2">
                          {order.serviceName}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Typography 
                          variant="body2" 
                          style={{ 
                            color: '#666',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            maxWidth: '200px'
                          }}
                        >
                          {order.address}
                        </Typography>
                      </TableCell>

                      <TableCell align="center">
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={(e) => handleMenuOpen(e, order)}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </>
      )}
    </Paper>
  );

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh', flexDirection: 'column' }}>
        <CircularProgress size={50} />
        <Typography sx={{ mt: 2, color: 'text.secondary' }}>Loading dashboard...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="xl" style={{ paddingTop: 32, paddingBottom: 32 }}>
        <Alert severity="error">Failed to load dashboard data. Please try again.</Alert>
      </Container>
    );
  }

  return (
    <Box style={{ width: '100%', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Container maxWidth="xl" style={{ paddingTop: 32, paddingBottom: 32 }}>
        {/* Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" style={{ marginBottom: 32 }}>
          <Box>
            <Typography variant="h4" style={{ fontWeight: 700, color: '#1a1a1a' }}>
              Dashboard
            </Typography>
            <Typography variant="body2" style={{ color: '#666', marginTop: 4 }}>
              Welcome back, UstadonCall! Here's your overview
            </Typography>
          </Box>
          <IconButton
            color="primary"
            onClick={() => refetch()}
            style={{ backgroundColor: 'white' }}
          >
            <Refresh />
          </IconButton>
        </Stack>

        {/* Stats Cards - Top Row (4 cards in one row) - ORIGINAL LAYOUT */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: 32
        }}>
          {statsCards.map((card, index) => (
            <div
              key={index}
              style={{
                flex: '1 1 calc(25% - 24px)',
                minWidth: '220px',
              }}
            >
              <Card style={{ height: '100%' }}>
                <CardContent>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <Typography variant="body2" style={{ color: '#666', marginBottom: 8 }}>
                        {card.title}
                      </Typography>
                      <Typography variant="h4" style={{ fontWeight: 700, color: card.color }}>
                        {card.value}
                      </Typography>
                    </div>
                    <div
                      style={{
                        backgroundColor: card.bgColor,
                        borderRadius: 8,
                        padding: 12,
                        display: 'flex',
                        color: card.color,
                      }}
                    >
                      {card.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Pending and Completed Orders - Side by Side - ORIGINAL LAYOUT */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '24px',
          marginBottom: 24
        }}>
          <OrderTable 
            orders={pendingOrders}
            title="Pending Orders"
            statusColor="warning"
            emptyIcon={PendingActions}
            emptyMessage="No pending orders"
          />
          
          <OrderTable 
            orders={completedOrders}
            title="Completed Orders"
            statusColor="success"
            emptyIcon={CheckCircle}
            emptyMessage="No completed orders"
          />
        </div>

        {/* Cancelled Orders - Full Width Below - ORIGINAL LAYOUT */}
        <OrderTable 
          orders={cancelledOrders}
          title="Cancelled Orders"
          statusColor="error"
          emptyIcon={Cancel}
          emptyMessage="No cancelled orders"
        />

        {/* Status Update Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            elevation: 3,
            style: { minWidth: 200 },
          }}
        >
          <MenuItem onClick={() => handleStatusUpdate('processing')}>
            <Chip label="Processing" size="small" color="info" style={{ marginRight: 12 }} />
            Start Processing
          </MenuItem>
          <MenuItem onClick={() => handleStatusUpdate('completed')}>
            <Chip label="Completed" size="small" color="success" style={{ marginRight: 12 }} />
            Mark Complete
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => handleStatusUpdate('cancelled')}>
            <Chip label="Cancelled" size="small" color="error" style={{ marginRight: 12 }} />
            Cancel Order
          </MenuItem>
        </Menu>

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            variant="filled"
            style={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
      <AnalyticsStats></AnalyticsStats>
    </Box>
  );
};

export default Dashboard;