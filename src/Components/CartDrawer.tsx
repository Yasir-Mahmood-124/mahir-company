// src/Components/CartDrawer.tsx
// Cart Drawer with Fixed Layout - Full Product Details Visible

'use client';

import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  Card,
  CardMedia,
  Stack,
  CircularProgress,
  Badge,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Close,
  Delete,
  Add,
  Remove,
  ShoppingCart,
  DeleteSweep,
} from '@mui/icons-material';
import {
  useGetCartItemsQuery,
  useUpdateCartQuantityMutation,
  useRemoveFromCartMutation,
  useClearCartMutation,
} from '@/redux/api/cartApi';
import OrderFormModal from './OrderFormModel';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const { data: cartData, isLoading } = useGetCartItemsQuery();
  const [updateQuantity, { isLoading: isUpdating }] = useUpdateCartQuantityMutation();
  const [removeItem, { isLoading: isRemoving }] = useRemoveFromCartMutation();
  const [clearCart, { isLoading: isClearing }] = useClearCartMutation();

  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{
    name: string;
    price: number;
  } | null>(null);

  // Snackbar states
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error' | 'info',
  });

  const cartItems = cartData?.cartItems || [];
  
  // Calculate totals
  const itemsWithTotals = cartItems.map(item => ({
    ...item,
    itemTotal: item.servicePrice * item.quantity
  }));

  const grandTotal = itemsWithTotals.reduce((sum, item) => sum + item.itemTotal, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const showSnackbar = (message: string, severity: 'success' | 'error' | 'info') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    try {
      await updateQuantity({ id: itemId, quantity: newQuantity }).unwrap();
      showSnackbar('Quantity updated', 'success');
    } catch (error: any) {
      showSnackbar(error?.data?.message || 'Failed to update', 'error');
    }
  };

  const handleRemoveItem = async (itemId: string, itemName: string) => {
    if (window.confirm(`Remove "${itemName}" from cart?`)) {
      try {
        await removeItem(itemId).unwrap();
        showSnackbar('Item removed', 'success');
      } catch (error: any) {
        showSnackbar(error?.data?.message || 'Failed to remove', 'error');
      }
    }
  };

  const handleClearCart = async () => {
    if (window.confirm('Clear entire cart?')) {
      try {
        await clearCart().unwrap();
        showSnackbar('Cart cleared', 'success');
      } catch (error: any) {
        showSnackbar(error?.data?.message || 'Failed to clear', 'error');
      }
    }
  };

  const handleCheckout = (item: any) => {
    setSelectedService({
      name: item.serviceName,
      price: item.servicePrice,
    });
    setOrderModalOpen(true);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 450, md: 500 },
            boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
          },
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <Box
            sx={{
              p: 2.5,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '2px solid #e0e0e0',
              bgcolor: '#f8f9fa',
              flexShrink: 0,
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <ShoppingCart sx={{ color: '#1565c0', fontSize: 28 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Shopping Cart
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {totalItems} item{totalItems !== 1 ? 's' : ''}
                </Typography>
              </Box>
            </Stack>
            <IconButton 
              onClick={onClose}
              sx={{ 
                bgcolor: '#f5f5f5',
                '&:hover': { bgcolor: '#e0e0e0' }
              }}
            >
              <Close />
            </IconButton>
          </Box>

          {/* Cart Items - Scrollable */}
          <Box 
            sx={{ 
              flexGrow: 1, 
              overflowY: 'auto',
              overflowX: 'hidden',
              p: 2,
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: '#555',
              },
            }}
          >
            {isLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                <CircularProgress size={50} />
              </Box>
            ) : cartItems.length === 0 ? (
              <Box sx={{ textAlign: 'center', py: 10 }}>
                <ShoppingCart sx={{ fontSize: 100, color: '#ddd', mb: 3 }} />
                <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 600, mb: 1 }}>
                  Your cart is empty
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Add some services to get started!
                </Typography>
                <Button
                  variant="contained"
                  onClick={onClose}
                  sx={{
                    mt: 3,
                    bgcolor: '#000',
                    textTransform: 'none',
                    px: 4,
                    '&:hover': { bgcolor: '#333' },
                  }}
                >
                  Continue Shopping
                </Button>
              </Box>
            ) : (
              <Stack spacing={2.5}>
                {itemsWithTotals.map((item) => (
                  <Card
                    key={item._id}
                    elevation={2}
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid #f0f0f0',
                      transition: 'all 0.2s',
                      '&:hover': {
                        boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                      },
                    }}
                  >
                    {/* Product Image & Name */}
                    <Box sx={{ mb: 2 }}>
                      <Stack direction="row" spacing={2} alignItems="flex-start">
                        <CardMedia
                          component="img"
                          image={item.serviceImage}
                          alt={item.serviceName}
                          sx={{
                            width: 100,
                            height: 100,
                            borderRadius: 2,
                            objectFit: 'cover',
                            border: '1px solid #e0e0e0',
                            flexShrink: 0,
                          }}
                        />
                        
                        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              color: '#1565c0',
                              mb: 0.5,
                              wordWrap: 'break-word',
                            }}
                          >
                            {item.serviceName}
                          </Typography>
                          
                          <Typography
                            variant="body2"
                            sx={{ color: '#666', mb: 0.5 }}
                          >
                            Unit Price: Rs {item.servicePrice.toLocaleString()}
                          </Typography>
                        </Box>

                        <IconButton
                          size="small"
                          onClick={() => handleRemoveItem(item._id!, item.serviceName)}
                          disabled={isRemoving}
                          sx={{
                            color: '#f44336',
                            flexShrink: 0,
                            '&:hover': { 
                              bgcolor: '#ffebee',
                            },
                          }}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Stack>
                    </Box>

                    <Divider sx={{ my: 1.5 }} />

                    {/* Quantity Controls */}
                    <Stack 
                      direction="row" 
                      justifyContent="space-between" 
                      alignItems="center"
                      sx={{ mb: 2 }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#666' }}>
                        Quantity:
                      </Typography>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item._id!, item.quantity - 1)}
                          disabled={item.quantity <= 1 || isUpdating}
                          sx={{
                            bgcolor: '#f5f5f5',
                            border: '1px solid #e0e0e0',
                            width: 32,
                            height: 32,
                            '&:hover': { bgcolor: '#e0e0e0' },
                            '&:disabled': { opacity: 0.5 },
                          }}
                        >
                          <Remove fontSize="small" />
                        </IconButton>

                        <Box
                          sx={{
                            minWidth: 45,
                            textAlign: 'center',
                            py: 0.5,
                            px: 2,
                            bgcolor: '#fff',
                            border: '2px solid #1565c0',
                            borderRadius: 1,
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: 700, color: '#1565c0' }}
                          >
                            {item.quantity}
                          </Typography>
                        </Box>

                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item._id!, item.quantity + 1)}
                          disabled={isUpdating}
                          sx={{
                            bgcolor: '#f5f5f5',
                            border: '1px solid #e0e0e0',
                            width: 32,
                            height: 32,
                            '&:hover': { bgcolor: '#e0e0e0' },
                          }}
                        >
                          <Add fontSize="small" />
                        </IconButton>
                      </Stack>
                    </Stack>

                    {/* Item Total */}
                    <Box 
                      sx={{ 
                        bgcolor: '#f8f9fa', 
                        p: 1.5, 
                        borderRadius: 1,
                        mb: 2,
                      }}
                    >
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#666' }}>
                          Item Total:
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, color: '#000' }}
                        >
                          Rs {item.itemTotal.toLocaleString()}
                        </Typography>
                      </Stack>
                    </Box>

                    {/* Order Button */}
                    <Button
                      fullWidth
                      variant="contained"
                      size="medium"
                      onClick={() => handleCheckout(item)}
                      sx={{
                        bgcolor: '#000',
                        textTransform: 'none',
                        fontWeight: 600,
                        py: 1.2,
                        '&:hover': { bgcolor: '#333' },
                      }}
                    >
                      Order This Item
                    </Button>
                  </Card>
                ))}
              </Stack>
            )}
          </Box>

          {/* Footer - Fixed at Bottom */}
          {cartItems.length > 0 && (
            <Box
              sx={{
                p: 2.5,
                borderTop: '2px solid #e0e0e0',
                bgcolor: '#f8f9fa',
                flexShrink: 0,
              }}
            >
              <Stack spacing={2}>
                {/* Grand Total */}
                <Box
                  sx={{
                    bgcolor: '#fff',
                    p: 2,
                    borderRadius: 2,
                    border: '2px solid #1565c0',
                  }}
                >
                  <Stack 
                    direction="row" 
                    justifyContent="space-between" 
                    alignItems="center"
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Grand Total:
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 700, color: '#1565c0' }}
                    >
                      Rs {grandTotal.toLocaleString()}
                    </Typography>
                  </Stack>
                  <Typography 
                    variant="caption" 
                    color="text.secondary"
                    sx={{ display: 'block', mt: 0.5, textAlign: 'right' }}
                  >
                    {totalItems} item{totalItems !== 1 ? 's' : ''} in cart
                  </Typography>
                </Box>

                {/* Clear Cart Button */}
                <Button
                  fullWidth
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteSweep />}
                  onClick={handleClearCart}
                  disabled={isClearing}
                  sx={{ 
                    textTransform: 'none',
                    fontWeight: 600,
                    py: 1.2,
                    borderWidth: 2,
                    '&:hover': { borderWidth: 2 },
                  }}
                >
                  {isClearing ? 'Clearing...' : 'Clear Cart'}
                </Button>
              </Stack>
            </Box>
          )}
        </Box>
      </Drawer>

      {/* Order Form Modal */}
      {selectedService && (
        <OrderFormModal
          open={orderModalOpen}
          onClose={() => {
            setOrderModalOpen(false);
            setSelectedService(null);
          }}
          serviceName={selectedService.name}
          servicePrice={selectedService.price}
        />
      )}

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
    </>
  );
};

export default CartDrawer;