// src/Components/OrderList.tsx
// Professional Order List - Full Material-UI (No Grid)

'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TextField,
  CircularProgress,
  Alert,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Snackbar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from '@mui/material';
import {
  Search,
  Refresh,
  Delete,
  Edit,
  Warning,
  Close,
} from '@mui/icons-material';
import { useGetOrdersQuery, useUpdateOrderStatusMutation, useDeleteOrderMutation } from '@/redux/api/orderApi';
import { IOrder } from '@/types/order';

const OrderList = () => {
  const { data, isLoading, error, refetch } = useGetOrdersQuery();
  const [updateStatus] = useUpdateOrderStatusMutation();
  const [deleteOrder] = useDeleteOrderMutation();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);
  
  // Delete confirmation dialog state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState<IOrder | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const [snackbar, setSnackbar] = useState({ 
    open: false, 
    message: '', 
    severity: 'success' as 'success' | 'error' 
  });

  const orders = data?.orders || [];

  // Filter orders
  const filteredOrders = orders.filter((order: IOrder) => {
    const matchesSearch =
      order.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.contactNumber.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Status menu handlers
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

  // Show delete confirmation dialog
  const handleDeleteClick = (order: IOrder) => {
    setOrderToDelete(order);
    setDeleteDialogOpen(true);
  };

  // Close delete confirmation dialog
  const handleCancelDelete = () => {
    setDeleteDialogOpen(false);
    setOrderToDelete(null);
  };

  // Confirm and execute delete
  const confirmDelete = async () => {
    if (!orderToDelete?._id) return;

    setIsDeleting(true);
  
    try {
      await deleteOrder(orderToDelete._id).unwrap();
      setSnackbar({ 
        open: true, 
        message: 'Order deleted successfully', 
        severity: 'success' 
      });
      setDeleteDialogOpen(false);
      setOrderToDelete(null);
    } catch (error: any) {
      console.error('Delete order error:', error);
      setSnackbar({ 
        open: true, 
        message: error?.data?.message || 'Failed to delete order', 
        severity: 'error' 
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const clearFilters = () => {
    setStatusFilter('all');
    setSearchQuery('');
  };

  // Status styling
  const getStatusColor = (status?: string) => {
    const colors: Record<string, 'warning' | 'info' | 'success' | 'error'> = {
      pending: 'warning',
      processing: 'info',
      completed: 'success',
      cancelled: 'error',
    };
    return colors[status || 'pending'] || 'warning';
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh', flexDirection: 'column' }}>
        <CircularProgress size={50} />
        <Typography sx={{ mt: 2, color: 'text.secondary' }}>Loading orders...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Alert severity="error">Failed to load orders. Please try again.</Alert>
      </Container>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Container maxWidth="xl" sx={{ py: 3 }}>
        {/* Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              All Orders List
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
              Total: {orders.length} orders
            </Typography>
          </Box>
        </Stack>

        {/* Filters */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <TextField
              fullWidth
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: <Search sx={{ color: 'text.secondary', mr: 1 }} />,
              }}
              sx={{ maxWidth: { md: 400 } }}
            />
            
            <TextField
              select
              label="Status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              sx={{ minWidth: 150 }}
            >
              <MenuItem value="all">All Status</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="processing">Processing</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="cancelled">Cancelled</MenuItem>
            </TextField>

            <Button
              variant="outlined"
              onClick={clearFilters}
              sx={{ minWidth: 120 }}
            >
              Clear Filters
            </Button>

            <Button
              variant="contained"
              startIcon={<Refresh />}
              onClick={() => refetch()}
              sx={{ minWidth: 120 }}
            >
              Refresh
            </Button>
          </Stack>
        </Paper>

        {/* Orders Table */}
        {filteredOrders.length === 0 ? (
          <Paper sx={{ p: 6, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              No orders found
            </Typography>
          </Paper>
        ) : (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: 'grey.100' }}>
                  <TableCell sx={{ fontWeight: 700, width: '5%' }}>#</TableCell>
                  <TableCell sx={{ fontWeight: 700, width: '15%' }}>Customer</TableCell>
                  <TableCell sx={{ fontWeight: 700, width: '12%' }}>Contact</TableCell>
                  <TableCell sx={{ fontWeight: 700, width: '20%' }}>Service</TableCell>
                  <TableCell sx={{ fontWeight: 700, width: '25%' }}>Address</TableCell>
                  <TableCell sx={{ fontWeight: 700, width: '10%' }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 700, width: '13%' }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 700, width: '10%', textAlign: 'center' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredOrders.map((order: IOrder, index: number) => (
                  <TableRow
                    key={order._id}
                    sx={{
                      '&:hover': { bgcolor: 'grey.50' },
                    }}
                  >
                    <TableCell>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                        {index + 1}
                      </Typography>
                    </TableCell>
                    
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {order.name}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
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
                        sx={{ 
                          color: 'text.secondary',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {order.address}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Chip
                        label={order.status || 'pending'}
                        size="small"
                        color={getStatusColor(order.status)}
                        sx={{ 
                          fontWeight: 600,
                          textTransform: 'capitalize',
                        }}
                      />
                    </TableCell>

                    <TableCell>
                      <Typography variant="body2">
                        {new Date(order.createdAt || '').toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {new Date(order.createdAt || '').toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Typography>
                    </TableCell>

                    <TableCell align="center">
                      <Stack direction="row" spacing={1} justifyContent="center">
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={(e) => handleMenuOpen(e, order)}
                          sx={{
                            '&:hover': { bgcolor: 'primary.light', color: 'primary.contrastText' },
                          }}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleDeleteClick(order)}
                          sx={{
                            '&:hover': { bgcolor: 'error.light', color: 'error.contrastText' },
                          }}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {/* Status Update Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            elevation: 3,
            sx: { minWidth: 200 },
          }}
        >
          <MenuItem onClick={() => handleStatusUpdate('pending')}>
            <Chip label="Pending" size="small" color="warning" sx={{ mr: 1.5 }} />
            Set Pending
          </MenuItem>
          <MenuItem onClick={() => handleStatusUpdate('processing')}>
            <Chip label="Processing" size="small" color="info" sx={{ mr: 1.5 }} />
            Set Processing
          </MenuItem>
          <MenuItem onClick={() => handleStatusUpdate('completed')}>
            <Chip label="Completed" size="small" color="success" sx={{ mr: 1.5 }} />
            Set Completed
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => handleStatusUpdate('cancelled')}>
            <Chip label="Cancelled" size="small" color="error" sx={{ mr: 1.5 }} />
            Cancel Order
          </MenuItem>
        </Menu>

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={deleteDialogOpen}
          onClose={handleCancelDelete}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Box
                sx={{
                  bgcolor: 'error.light',
                  borderRadius: '50%',
                  p: 1.5,
                  display: 'flex',
                }}
              >
                <Warning sx={{ color: 'error.main' }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Delete Order
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  This action cannot be undone
                </Typography>
              </Box>
              <IconButton
                onClick={handleCancelDelete}
                sx={{ ml: 'auto !important' }}
              >
                <Close />
              </IconButton>
            </Stack>
          </DialogTitle>

          <DialogContent>
            {orderToDelete && (
              <>
                <Paper sx={{ p: 2, bgcolor: 'grey.50', mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    {orderToDelete.serviceName}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Customer: {orderToDelete.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Contact: {orderToDelete.contactNumber}
                  </Typography>
                </Paper>

                <Alert severity="error" sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Are you sure you want to delete this order?
                  </Typography>
                  <Typography variant="body2">
                    This will permanently remove the order and all related information.
                  </Typography>
                </Alert>
              </>
            )}
          </DialogContent>

          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button
              onClick={handleCancelDelete}
              disabled={isDeleting}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={confirmDelete}
              disabled={isDeleting}
              variant="contained"
              color="error"
              startIcon={isDeleting ? <CircularProgress size={16} /> : <Delete />}
            >
              {isDeleting ? 'Deleting...' : 'Delete Order'}
            </Button>
          </DialogActions>
        </Dialog>

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
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default OrderList;