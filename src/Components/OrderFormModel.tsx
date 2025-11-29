// src/Components/OrderFormModal.tsx
// Order Form Modal Component with Contact Number
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
  IconButton,
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
    contactNumber: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    address: '',
    contactNumber: '',
  });

  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Contact number validation function
  const validateContactNumber = (contactNumber: string): boolean => {
    const cleanNumber = contactNumber.replace(/\s/g, '');
    // Pakistani phone format: 03XX-XXXXXXX or +92-3XX-XXXXXXX or 3XXXXXXXXX
    return /^(03\d{2}-?\d{7}|\+92-?3\d{2}-?\d{7}|3\d{9})$/.test(cleanNumber);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', address: '', contactNumber: '' };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
      isValid = false;
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
      isValid = false;
    } else if (formData.address.trim().length < 10) {
      newErrors.address = 'Address must be at least 10 characters long';
      isValid = false;
    }

    // Contact number validation
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
      isValid = false;
    } else if (!validateContactNumber(formData.contactNumber)) {
      newErrors.contactNumber = 'Invalid contact number (e.g., 03XX-XXXXXXX or +92-3XX-XXXXXXX)';
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
        name: formData.name.trim(),
        address: formData.address.trim(),
        contactNumber: formData.contactNumber.trim(),
        serviceName: serviceName,
      };

      const result = await createOrder(orderData).unwrap();
      
      setSuccessMessage('Order placed successfully! ✅');
      setErrorMessage('');
      
      // Reset form
      setFormData({ name: '', address: '', contactNumber: '' });
      
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
    setFormData({ name: '', address: '', contactNumber: '' });
    setErrors({ name: '', address: '', contactNumber: '' });
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
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        pb: 1,
        fontWeight: 600 
      }}>
        Place Order
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            color: '#666',
            '&:hover': {
              color: '#000',
              bgcolor: 'rgba(0,0,0,0.05)',
            },
          }}
        >
          <Close />
        </IconButton>
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
            label="Your Name *"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name || 'Minimum 3 characters'}
            margin="normal"
            required
            disabled={isLoading}
            placeholder="Enter your full name"
          />

          <TextField
            fullWidth
            label="Contact Number *"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            error={!!errors.contactNumber}
            helperText={errors.contactNumber || 'Format: 03XX-XXXXXXX or +92-3XX-XXXXXXX'}
            margin="normal"
            required
            disabled={isLoading}
            placeholder="03XX-XXXXXXX"
            inputProps={{
              inputMode: 'tel',
            }}
          />

          <TextField
            fullWidth
            label="Delivery Address *"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={!!errors.address}
            helperText={errors.address || 'Minimum 10 characters'}
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