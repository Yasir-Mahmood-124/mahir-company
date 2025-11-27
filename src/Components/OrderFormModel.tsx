// src/Components/OrderFormModal.tsx
// Order Form Modal Component

'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useCreateOrderMutation } from '@/redux/api/orderApi';

interface OrderFormModalProps {
  open: boolean;
  onClose: () => void;
  serviceName: string;
  servicePrice: number;
}

const OrderFormModal: React.FC<OrderFormModalProps> = ({
  open,
  onClose,
  serviceName,
  servicePrice,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    address: '',
  });

  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', address: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      const orderData = {
        name: formData.name,
        address: formData.address,
        serviceName: serviceName,
      };

      const result = await createOrder(orderData).unwrap();
      
      setSuccessMessage('Order placed successfully! ✅');
      setErrorMessage('');
      
      // Reset form
      setFormData({ name: '', address: '' });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        setSuccessMessage('');
        onClose();
      }, 2000);
      
    } catch (error: any) {
      setErrorMessage(error?.data?.message || 'Failed to place order');
      setSuccessMessage('');
    }
  };

  const handleClose = () => {
    setFormData({ name: '', address: '' });
    setErrors({ name: '', address: '' });
    setSuccessMessage('');
    setErrorMessage('');
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 1,
        },
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Place Order
        </Typography>
        <Close
          sx={{ cursor: 'pointer', color: '#666' }}
          onClick={handleClose}
        />
      </DialogTitle>

      <DialogContent>
        <Box sx={{ mb: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Service Details
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 600, color: '#1565c0' }}>
            {serviceName}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#000', mt: 1 }}>
            Rs {servicePrice.toLocaleString()}
          </Typography>
        </Box>

        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            margin="normal"
            required
            disabled={isLoading}
            placeholder="Enter your full name"
          />

          <TextField
            fullWidth
            label="Delivery Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={!!errors.address}
            helperText={errors.address}
            margin="normal"
            required
            multiline
            rows={3}
            disabled={isLoading}
            placeholder="Enter your complete address"
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          onClick={handleClose}
          variant="outlined"
          disabled={isLoading}
          sx={{ textTransform: 'none' }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={isLoading}
          sx={{
            textTransform: 'none',
            bgcolor: '#000',
            '&:hover': { bgcolor: '#333' },
            minWidth: 120,
          }}
        >
          {isLoading ? (
            <CircularProgress size={24} sx={{ color: 'white' }} />
          ) : (
            'Place Order'
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderFormModal;