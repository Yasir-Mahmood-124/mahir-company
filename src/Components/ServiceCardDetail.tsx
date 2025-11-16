'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Stack,
  Chip,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import StarIcon from '@mui/icons-material/Star';
import { ServiceItem } from './redux/Data/Serviceslicedata';

interface Props {
  service: ServiceItem | null;
}

const ServiceCardDetail: React.FC<Props> = ({ service }) => {
  const [selectedCity, setSelectedCity] = useState('lahore');

  if (!service) return <Typography>Loading service details...</Typography>;

  const cityData = service.meta.cities[selectedCity];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Main Content */}
      <Grid container spacing={4}>
        {/* Left Side - Image */}
        <Grid item xs={12} md={6}>
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
              src={service.image}
              alt={service.imageAlt}
              style={{
                maxWidth: '100%',
                maxHeight: '350px',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Grid>

        {/* Right Side - Details */}
        <Grid item xs={12} md={6}>
          <Box>
            {/* Title */}
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              {service.title}
            </Typography>

            {/* Price */}
            <Stack direction="row" alignItems="center" spacing={2} mb={2}>
              <Typography
                variant="h6"
                sx={{
                  textDecoration: 'line-through',
                  color: 'text.secondary',
                }}
              >
                Rs:{cityData.price}
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="primary">
                Rs:{cityData.appPrice}
              </Typography>
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

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <StarIcon sx={{ color: '#FFC107' }} />
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        {service.meta.rated} out of 5 stars
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Average rating of the service
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>

                <Grid item xs={6}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CheckCircleIcon sx={{ color: 'success.main' }} />
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        {service.meta.done}+
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Done Order
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    <strong>{service.meta.done}+ reviews</strong>
                    <br />
                    Of the services by users
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            {/* Book Now Button */}
            <Button
              variant="contained"
              size="large"
              fullWidth
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
        </Grid>
      </Grid>

      {/* Description Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {service.title} in Pakistan
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Book {service.title} anywhere in Pakistan with Mahir Company (MrMahir).
          Best rates, verified professionals.
        </Typography>

        {/* Includes / Does Not Include */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Includes */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Includes
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CheckCircleIcon sx={{ color: 'success.main' }} />
                <Typography>Mounting of indoor unit</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CheckCircleIcon sx={{ color: 'success.main' }} />
                <Typography>Mounting of outdoor unit</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CheckCircleIcon sx={{ color: 'success.main' }} />
                <Typography>AC pipe installation with in 10 feet</Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Does Not Include */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Does not includes
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CancelIcon sx={{ color: 'error.main' }} />
                <Typography>AC pipe installation more then 10 feet</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CancelIcon sx={{ color: 'error.main' }} />
                <Typography>Any type of repair</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CancelIcon sx={{ color: 'error.main' }} />
                <Typography>Any type of material</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CancelIcon sx={{ color: 'error.main' }} />
                <Typography>Any type of gass</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CancelIcon sx={{ color: 'error.main' }} />
                <Typography>Ladder</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ServiceCardDetail;