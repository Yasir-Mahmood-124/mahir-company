// src/Components/OrderList.tsx
'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  TextField,
  InputAdornment,
  CircularProgress,
  Alert,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Fade,
  Avatar,
  Button,
  Paper,
  Grid,
  Tooltip,
  Badge,
  alpha,
} from '@mui/material';
import {
  Search,
  MoreVert,
  CheckCircle,
  Schedule,
  Cancel,
  LocalShipping,
  Person,
  LocationOn,
  CalendarToday,
  Refresh,
  TrendingUp,
  ShoppingBag,
  AccessTime,
  FilterList,
} from '@mui/icons-material';
import { useGetOrdersQuery } from '@/redux/api/orderApi';
import { IOrder } from '@/types/order';

const OrderList = () => {
  const { data, isLoading, error, refetch } = useGetOrdersQuery();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);

  const orders = data?.orders || [];

  // Filter orders
  const filteredOrders = orders.filter((order: IOrder) => {
    const matchesSearch =
      order.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Status menu
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, order: IOrder) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrder(order);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedOrder(null);
  };

  const handleStatusUpdate = async (newStatus: string) => {
    console.log('Update status:', selectedOrder?._id, 'to', newStatus);
    // TODO: API call here
    handleMenuClose();
  };

  // Status configuration
  const getStatusConfig = (status?: string) => {
    const configs = {
      completed: {
        color: '#10b981',
        bgcolor: alpha('#10b981', 0.1),
        icon: CheckCircle,
        label: 'Completed',
        gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      },
      processing: {
        color: '#3b82f6',
        bgcolor: alpha('#3b82f6', 0.1),
        icon: LocalShipping,
        label: 'Processing',
        gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      },
      cancelled: {
        color: '#ef4444',
        bgcolor: alpha('#ef4444', 0.1),
        icon: Cancel,
        label: 'Cancelled',
        gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      },
      pending: {
        color: '#f59e0b',
        bgcolor: alpha('#f59e0b', 0.1),
        icon: Schedule,
        label: 'Pending',
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      },
    };
    return configs[status as keyof typeof configs] || configs.pending;
  };

  // Statistics
  const stats = [
    {
      label: 'Total Orders',
      value: orders.length,
      icon: ShoppingBag,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    },
    {
      label: 'Pending',
      value: orders.filter((o: IOrder) => o.status === 'pending').length,
      icon: AccessTime,
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    },
    {
      label: 'Processing',
      value: orders.filter((o: IOrder) => o.status === 'processing').length,
      icon: TrendingUp,
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    },
    {
      label: 'Completed',
      value: orders.filter((o: IOrder) => o.status === 'completed').length,
      icon: CheckCircle,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    },
  ];

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '70vh',
        }}
      >
        <CircularProgress size={60} thickness={4} />
        <Typography sx={{ mt: 2, color: '#64748b', fontWeight: 500 }}>
          Loading orders...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ borderRadius: 3 }}>
          Failed to load orders. Please try again.
        </Alert>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        minHeight: '100vh',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Animated Header */}
        <Fade in timeout={500}>
          <Box sx={{ mb: 4 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={1}
            >
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Order Dashboard
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#64748b', mt: 0.5, fontWeight: 500 }}
                >
                  Manage and track all your orders in one place
                </Typography>
              </Box>
              <Tooltip title="Refresh Orders" arrow>
                <IconButton
                  onClick={() => refetch()}
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    width: 48,
                    height: 48,
                    boxShadow: '0 4px 14px 0 rgba(102, 126, 234, 0.39)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                      transform: 'rotate(180deg)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Refresh />
                </IconButton>
              </Tooltip>
            </Stack>
          </Box>
        </Fade>

        {/* Statistics Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Fade in timeout={600 + index * 100}>
                  <Card
                    elevation={0}
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 3,
                      background: 'white',
                      border: '1px solid rgba(0,0,0,0.08)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 24px ${alpha(stat.color, 0.2)}`,
                        '& .stat-icon': {
                          transform: 'scale(1.1) rotate(10deg)',
                        },
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: stat.gradient,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                      >
                        <Box>
                          <Typography
                            variant="h3"
                            sx={{
                              fontWeight: 800,
                              background: stat.gradient,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              lineHeight: 1.2,
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#64748b',
                              fontWeight: 600,
                              mt: 0.5,
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                        <Avatar
                          className="stat-icon"
                          sx={{
                            width: 56,
                            height: 56,
                            background: stat.gradient,
                            boxShadow: `0 8px 16px ${alpha(stat.color, 0.3)}`,
                            transition: 'transform 0.3s ease',
                          }}
                        >
                          <Icon sx={{ fontSize: 28 }} />
                        </Avatar>
                      </Stack>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            );
          })}
        </Grid>

        {/* Search and Filter Bar */}
        <Fade in timeout={800}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              mb: 3,
              borderRadius: 3,
              border: '1px solid rgba(0,0,0,0.08)',
              background: 'white',
            }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                fullWidth
                placeholder="Search by name, service, or address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: '#94a3b8' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    bgcolor: '#f8fafc',
                    '& fieldset': { border: 'none' },
                    '&:hover': { bgcolor: '#f1f5f9' },
                    '&.Mui-focused': { bgcolor: '#f1f5f9' },
                  },
                }}
              />
              <Stack direction="row" spacing={1}>
                {['all', 'pending', 'processing', 'completed', 'cancelled'].map(
                  (status) => (
                    <Chip
                      key={status}
                      label={status.charAt(0).toUpperCase() + status.slice(1)}
                      onClick={() => setStatusFilter(status)}
                      sx={{
                        fontWeight: 600,
                        bgcolor:
                          statusFilter === status
                            ? '#667eea'
                            : 'transparent',
                        color: statusFilter === status ? 'white' : '#64748b',
                        border: '1px solid',
                        borderColor:
                          statusFilter === status ? '#667eea' : '#e2e8f0',
                        '&:hover': {
                          bgcolor:
                            statusFilter === status ? '#764ba2' : '#f8fafc',
                        },
                      }}
                    />
                  )
                )}
              </Stack>
            </Stack>
          </Paper>
        </Fade>

        {/* Orders Grid */}
        {filteredOrders.length === 0 ? (
          <Fade in timeout={1000}>
            <Paper
              elevation={0}
              sx={{
                p: 8,
                textAlign: 'center',
                borderRadius: 3,
                border: '2px dashed #e2e8f0',
              }}
            >
              <ShoppingBag sx={{ fontSize: 80, color: '#cbd5e1', mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b' }}>
                No orders found
              </Typography>
              <Typography sx={{ color: '#64748b', mt: 1 }}>
                {searchQuery || statusFilter !== 'all'
                  ? 'Try adjusting your filters'
                  : 'No orders have been placed yet'}
              </Typography>
            </Paper>
          </Fade>
        ) : (
          <Grid container spacing={3}>
            {filteredOrders.map((order: IOrder, index: number) => {
              const statusConfig = getStatusConfig(order.status);
              const StatusIcon = statusConfig.icon;

              return (
                <Grid item xs={12} md={6} key={order._id}>
                  <Fade in timeout={900 + index * 100}>
                    <Card
                      elevation={0}
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 3,
                        background: 'white',
                        border: '1px solid rgba(0,0,0,0.08)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: `0 12px 24px ${alpha(statusConfig.color, 0.15)}`,
                          '& .order-menu-btn': {
                            opacity: 1,
                          },
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 4,
                          background: statusConfig.gradient,
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        {/* Header */}
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="flex-start"
                          mb={2}
                        >
                          <Stack direction="row" spacing={2} alignItems="center">
                            <Avatar
                              sx={{
                                width: 56,
                                height: 56,
                                background: statusConfig.gradient,
                                boxShadow: `0 4px 12px ${alpha(
                                  statusConfig.color,
                                  0.3
                                )}`,
                              }}
                            >
                              <StatusIcon sx={{ fontSize: 28 }} />
                            </Avatar>
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 700,
                                  color: '#1e293b',
                                  lineHeight: 1.3,
                                }}
                              >
                                {order.serviceName}
                              </Typography>
                              <Chip
                                label={statusConfig.label}
                                size="small"
                                sx={{
                                  mt: 0.5,
                                  height: 24,
                                  bgcolor: statusConfig.bgcolor,
                                  color: statusConfig.color,
                                  fontWeight: 700,
                                  fontSize: '0.7rem',
                                  border: `1px solid ${alpha(statusConfig.color, 0.3)}`,
                                }}
                              />
                            </Box>
                          </Stack>

                          <IconButton
                            className="order-menu-btn"
                            onClick={(e) => handleMenuOpen(e, order)}
                            sx={{
                              opacity: 0,
                              transition: 'all 0.2s',
                              bgcolor: alpha('#000', 0.04),
                              '&:hover': { bgcolor: alpha('#000', 0.08) },
                            }}
                          >
                            <MoreVert />
                          </IconButton>
                        </Stack>

                        <Divider sx={{ my: 2 }} />

                        {/* Details */}
                        <Stack spacing={2}>
                          <Stack direction="row" spacing={1.5} alignItems="center">
                            <Person
                              sx={{ fontSize: 20, color: statusConfig.color }}
                            />
                            <Box>
                              <Typography
                                variant="caption"
                                sx={{ color: '#94a3b8', fontWeight: 600 }}
                              >
                                Customer
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ fontWeight: 600, color: '#1e293b' }}
                              >
                                {order.name}
                              </Typography>
                            </Box>
                          </Stack>

                          <Stack
                            direction="row"
                            spacing={1.5}
                            alignItems="flex-start"
                          >
                            <LocationOn
                              sx={{ fontSize: 20, color: statusConfig.color }}
                            />
                            <Box sx={{ flex: 1 }}>
                              <Typography
                                variant="caption"
                                sx={{ color: '#94a3b8', fontWeight: 600 }}
                              >
                                Delivery Address
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: 500,
                                  color: '#475569',
                                  lineHeight: 1.4,
                                }}
                              >
                                {order.address}
                              </Typography>
                            </Box>
                          </Stack>

                          <Stack direction="row" spacing={1.5} alignItems="center">
                            <CalendarToday
                              sx={{ fontSize: 18, color: statusConfig.color }}
                            />
                            <Box>
                              <Typography
                                variant="caption"
                                sx={{ color: '#94a3b8', fontWeight: 600 }}
                              >
                                Order Date
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ fontWeight: 500, color: '#475569' }}
                              >
                                {new Date(order.createdAt || '').toLocaleDateString(
                                  'en-US',
                                  {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  }
                                )}
                              </Typography>
                            </Box>
                          </Stack>
                        </Stack>

                        {/* Order ID Badge */}
                        <Box
                          sx={{
                            mt: 2,
                            pt: 2,
                            borderTop: '1px solid #f1f5f9',
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              color: '#94a3b8',
                              fontWeight: 600,
                              fontFamily: 'monospace',
                            }}
                          >
                            Order ID: {order._id?.slice(-12).toUpperCase()}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Fade>
                </Grid>
              );
            })}
          </Grid>
        )}

        {/* Status Update Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            elevation: 0,
            sx: {
              borderRadius: 2,
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              mt: 1,
              minWidth: 200,
            },
          }}
        >
          <MenuItem
            onClick={() => handleStatusUpdate('pending')}
            sx={{ py: 1.5, fontWeight: 600 }}
          >
            <Schedule sx={{ mr: 1.5, color: '#f59e0b' }} />
            Pending
          </MenuItem>
          <MenuItem
            onClick={() => handleStatusUpdate('processing')}
            sx={{ py: 1.5, fontWeight: 600 }}
          >
            <LocalShipping sx={{ mr: 1.5, color: '#3b82f6' }} />
            Processing
          </MenuItem>
          <MenuItem
            onClick={() => handleStatusUpdate('completed')}
            sx={{ py: 1.5, fontWeight: 600 }}
          >
            <CheckCircle sx={{ mr: 1.5, color: '#10b981' }} />
            Completed
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={() => handleStatusUpdate('cancelled')}
            sx={{ py: 1.5, fontWeight: 600, color: '#ef4444' }}
          >
            <Cancel sx={{ mr: 1.5 }} />
            Cancel Order
          </MenuItem>
        </Menu>

        {/* Footer */}
        {filteredOrders.length > 0 && (
          <Fade in timeout={1200}>
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography
                variant="body2"
                sx={{ color: '#64748b', fontWeight: 600 }}
              >
                Showing {filteredOrders.length} of {orders.length} orders
              </Typography>
            </Box>
          </Fade>
        )}
      </Container>
    </Box>
  );
};

export default OrderList;