// src/Components/CartDrawer.tsx
// Animated Sliding Cart Drawer

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
  TextField,
  CircularProgress,
  Badge,
} from '@mui/material';
import {
  Close,
  Delete,
  Add,
  Remove,
  ShoppingCart,
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
  const { data: cartData, isLoading, refetch } = useGetCartItemsQuery();
  const [updateQuantity] = useUpdateCartQuantityMutation();
  const [removeItem] = useRemoveFromCartMutation();
  const [clearCart] = useClearCartMutation();

  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{
    name: string;
    price: number;
  } | null>(null);

  const cartItems = cartData?.cartItems || [];
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.servicePrice * item.quantity,
    0
  );

  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    try {
      await updateQuantity({ id: itemId, quantity: newQuantity }).unwrap();
    } catch (error) {
      console.error('Update quantity error:', error);
    }
  };

  const handleRemoveItem = async (itemId: string) => {
    try {
      await removeItem(itemId).unwrap();
    } catch (error) {
      console.error('Remove item error:', error);
    }
  };

  const handleClearCart = async () => {
    if (window.confirm('Clear entire cart?')) {
      try {
        await clearCart().unwrap();
      } catch (error) {
        console.error('Clear cart error:', error);
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
            width: { xs: '100%', sm: 400 },
            boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
          },
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <Box
            sx={{
              p: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #e0e0e0',
              bgcolor: '#f5f5f5',
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <ShoppingCart sx={{ color: '#1565c0' }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                My Cart
              </Typography>
              <Badge badgeContent={cartItems.length} color="error" />
            </Stack>
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Box>

          {/* Cart Items */}
          <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
            {isLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                <CircularProgress />
              </Box>
            ) : cartItems.length === 0 ? (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <ShoppingCart sx={{ fontSize: 80, color: '#ccc', mb: 2 }} />
                <Typography variant="h6" color="text.secondary">
                  Your cart is empty
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Add some services to get started!
                </Typography>
              </Box>
            ) : (
              <Stack spacing={2}>
                {cartItems.map((item) => (
                  <Card
                    key={item._id}
                    elevation={2}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      {/* Image */}
                      <CardMedia
                        component="img"
                        image={item.serviceImage}
                        alt={item.serviceName}
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: 2,
                          objectFit: 'cover',
                        }}
                      />

                      {/* Details */}
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            color: '#1565c0',
                            mb: 0.5,
                          }}
                        >
                          {item.serviceName}
                        </Typography>

                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, color: '#000', mb: 1 }}
                        >
                          Rs {item.servicePrice.toLocaleString()}
                        </Typography>

                        {/* Quantity Controls */}
                        <Stack direction="row" spacing={1} alignItems="center">
                          <IconButton
                            size="small"
                            onClick={() =>
                              handleQuantityChange(
                                item._id!,
                                item.quantity - 1
                              )
                            }
                            disabled={item.quantity <= 1}
                            sx={{
                              bgcolor: '#f5f5f5',
                              '&:hover': { bgcolor: '#e0e0e0' },
                            }}
                          >
                            <Remove fontSize="small" />
                          </IconButton>

                          <Typography
                            variant="body1"
                            sx={{
                              fontWeight: 600,
                              minWidth: 30,
                              textAlign: 'center',
                            }}
                          >
                            {item.quantity}
                          </Typography>

                          <IconButton
                            size="small"
                            onClick={() =>
                              handleQuantityChange(
                                item._id!,
                                item.quantity + 1
                              )
                            }
                            sx={{
                              bgcolor: '#f5f5f5',
                              '&:hover': { bgcolor: '#e0e0e0' },
                            }}
                          >
                            <Add fontSize="small" />
                          </IconButton>

                          <IconButton
                            size="small"
                            onClick={() => handleRemoveItem(item._id!)}
                            sx={{
                              ml: 'auto',
                              color: '#f44336',
                              '&:hover': { bgcolor: '#ffebee' },
                            }}
                          >
                            <Delete fontSize="small" />
                          </IconButton>
                        </Stack>

                        {/* Checkout Button */}
                        <Button
                          fullWidth
                          variant="contained"
                          size="small"
                          onClick={() => handleCheckout(item)}
                          sx={{
                            mt: 1,
                            bgcolor: '#000',
                            textTransform: 'none',
                            '&:hover': { bgcolor: '#333' },
                          }}
                        >
                          Order Now
                        </Button>
                      </Box>
                    </Stack>
                  </Card>
                ))}
              </Stack>
            )}
          </Box>

          {/* Footer */}
          {cartItems.length > 0 && (
            <Box
              sx={{
                p: 2,
                borderTop: '1px solid #e0e0e0',
                bgcolor: '#f9f9f9',
              }}
            >
              <Stack spacing={2}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Total:
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: '#1565c0' }}
                  >
                    Rs {totalAmount.toLocaleString()}
                  </Typography>
                </Stack>

                <Button
                  fullWidth
                  variant="outlined"
                  color="error"
                  onClick={handleClearCart}
                  sx={{ textTransform: 'none' }}
                >
                  Clear Cart
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
    </>
  );
};

export default CartDrawer;