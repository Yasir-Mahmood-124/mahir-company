'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  CircularProgress,
  Alert,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import StarIcon from '@mui/icons-material/Star';
import OrderFormModal from '@/Components/OrderFormModel';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchProducts } from '@/redux/slices/productSlice';

interface ServiceCardDetailProps {
  serviceId: string | number;
}

const ServiceCardDetail: React.FC<ServiceCardDetailProps> = ({ serviceId }) => {
  const dispatch = useAppDispatch();
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  
  const { products, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    // Fetch products if not already loaded
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  // Find product by ID
  const product = products.find((p) => (p._id || p.id) === serviceId);

  // Transform product to service format
  const service = product ? {
    id: product._id || product.id,
    title: product.name,
    description: product.description,
    price: product.currentPrice,
    appPrice: product.discountPrice,
    rating: product.reviews || 4.5,
    image: product.subCategoryImage || product.image,
    category: product.mainCategory,
    subCategory: product.subCategory,
    serviceType: product.service,
    includes: product.includes || [],
    notIncludes: product.notIncludes || [],
  } : null;

  // Loading state
  if (loading && products.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress size={60} />
      </Container>
    );
  }

  // Error state
  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  // Service not found
  if (!service) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="warning">Service not found</Alert>
      </Container>
    );
  }

  // Calculate discount percentage
  const discountPercentage = service.price > 0
    ? Math.round(((service.price - service.appPrice) / service.price) * 100)
    : 0;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        {/* Left Side - Image */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 50%" },
          }}
        >
          <Box
            sx={{
              bgcolor: '#f5f5f5',
              borderRadius: 4,
              p: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 400,
            }}
          >
            <img
              src={service.image || '/placeholder-service.png'}
              alt={service.title}
              style={{
                maxWidth: '100%',
                maxHeight: '350px',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>

        {/* Right Side - Details */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 50%" },
          }}
        >
          <Box>
            {/* Category Breadcrumb */}
            {service.category && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {service.category} {service.subCategory && `→ ${service.subCategory}`} {service.serviceType && `→ ${service.serviceType}`}
              </Typography>
            )}

            {/* Title */}
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              {service.title}
            </Typography>

            {/* Description - API se aaya hua */}
            {service.description && (
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {service.description}
              </Typography>
            )}

            {/* Price */}
            <Stack direction="row" alignItems="center" spacing={2} mb={2} flexWrap="wrap">
              <Typography
                variant="h6"
                sx={{
                  textDecoration: 'line-through',
                  color: 'text.secondary',
                }}
              >
                Rs {service.price.toLocaleString()}
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="primary">
                Rs {service.appPrice.toLocaleString()}
              </Typography>
              {discountPercentage > 0 && (
                <Typography
                  variant="body1"
                  sx={{
                    bgcolor: 'error.main',
                    color: 'white',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    fontWeight: 'bold',
                  }}
                >
                  {discountPercentage}% OFF
                </Typography>
              )}
            </Stack>

            {/* User Reviews Section */}
            <Box
              sx={{
                bgcolor: '#f9f9f9',
                borderRadius: 2,
                p: 3,
                mb: 3,
              }}
            >
              <Typography variant="subtitle1" fontWeight="600" gutterBottom>
                What users are saying about us
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <StarIcon sx={{ color: '#FFC107' }} />
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        {service.rating} out of 5 stars
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Average rating of the service
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CheckCircleIcon sx={{ color: 'success.main' }} />
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        Verified Service
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Professional & Trusted
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>

            {/* Book Now Button */}
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={() => setOrderModalOpen(true)}
              sx={{
                bgcolor: '#1565c0',
                color: 'white',
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: 2,
                '&:hover': {
                  bgcolor: '#0d47a1',
                },
              }}
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Description Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {service.title} in Pakistan
        </Typography>
        
        {/* API Description */}
        {service.description && (
          <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
            {service.description}
          </Typography>
        )}
        
        <Typography variant="body1" color="text.secondary" paragraph>
          Book {service.title} anywhere in Pakistan with UstadonCall Company.
          Best rates, verified professionals.
        </Typography>

        {/* Includes / Does Not Include - API se aaya hua data */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            mt: 4,
          }}
        >
          {/* Includes - API Data */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Includes
            </Typography>
            {service.includes && service.includes.length > 0 ? (
              <Stack spacing={2}>
                {service.includes.map((item, index) => (
                  <Stack key={index} direction="row" alignItems="center" spacing={1}>
                    <CheckCircleIcon sx={{ color: 'success.main' }} />
                    <Typography>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            ) : (
              <Stack spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <CheckCircleIcon sx={{ color: 'success.main' }} />
                  <Typography>Professional service</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <CheckCircleIcon sx={{ color: 'success.main' }} />
                  <Typography>Expert technicians</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <CheckCircleIcon sx={{ color: 'success.main' }} />
                  <Typography>Quality assurance</Typography>
                </Stack>
              </Stack>
            )}
          </Box>

          {/* Does Not Include - API Data */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Does not include
            </Typography>
            {service.notIncludes && service.notIncludes.length > 0 ? (
              <Stack spacing={2}>
                {service.notIncludes.map((item, index) => (
                  <Stack key={index} direction="row" alignItems="center" spacing={1}>
                    <CancelIcon sx={{ color: 'error.main' }} />
                    <Typography>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            ) : (
              <Stack spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <CancelIcon sx={{ color: 'error.main' }} />
                  <Typography>Spare parts & materials</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <CancelIcon sx={{ color: 'error.main' }} />
                  <Typography>Additional repairs</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <CancelIcon sx={{ color: 'error.main' }} />
                  <Typography>Transportation charges</Typography>
                </Stack>
              </Stack>
            )}
          </Box>
        </Box>
      </Box>

      {/* Order Modal */}
      <OrderFormModal
        open={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        serviceName={service.title}
        servicePrice={service.appPrice}
      />
    </Container>
  );
};

export default ServiceCardDetail;