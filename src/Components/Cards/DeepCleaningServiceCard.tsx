// ============================================
// DeepCleaningServiceCard.tsx
// ============================================
'use client';

import React, { useEffect } from 'react';
import { Container, Typography, Box, CircularProgress, Alert } from '@mui/material';
import ServiceCard from '@/Components/Card_Details/CleaningServicesCardDetails';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchProducts } from '@/redux/slices/productSlice';

interface DeepCleaningServicesSectionProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
}

const DeepCleaningServicesSection: React.FC<DeepCleaningServicesSectionProps> = ({ 
  title = "Deep Cleaning Services",
  subtitle = "Comprehensive deep cleaning solutions for your home",
  maxItems
}) => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  // Filter products by subCategory
  const filteredServices = products.filter(
    (product) => product.subCategory === "Deep Cleaning Services"
  );

  // Limit items if maxItems is specified
  const displayServices = maxItems 
    ? filteredServices.slice(0, maxItems) 
    : filteredServices;

  if (loading && products.length === 0) {
    return (
      <Box sx={{ py: 6, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
            <CircularProgress size={60} />
          </Box>
        </Container>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 6, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Alert severity="error">{error}</Alert>
        </Container>
      </Box>
    );
  }

  if (displayServices.length === 0) {
    return (
      <Box sx={{ py: 6, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Alert severity="info">No Deep Cleaning Services available at the moment. Add services from the dashboard!</Alert>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 6, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 1,
              color: '#1565c0',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
            }}
          >
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            {subtitle}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
          }}
        >
          {displayServices.map((service) => (
            <Box 
              key={service._id || service.id}
              sx={{
                width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' },
                minWidth: '280px',
              }}
            >
              <ServiceCard serviceId={service._id || service.id || ''} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default DeepCleaningServicesSection;