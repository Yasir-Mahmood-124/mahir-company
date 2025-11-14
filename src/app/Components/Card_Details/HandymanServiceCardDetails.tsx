'use client';

import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardMedia,
  Typography,
  Box,
  Stack,
  Paper,
} from '@mui/material';
import { Star, Add } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  addToCart,
  selectCartItemQuantity,
  selectServiceById,
} from '../redux/Data/Serviceslice';

interface ServiceCardProps {
  serviceId: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceId }) => {
  const dispatch = useAppDispatch();

  const service = useAppSelector((state) => selectServiceById(state, serviceId));
  const quantity = useAppSelector((state) =>
    selectCartItemQuantity(state, serviceId)
  );

  if (!service) return null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(serviceId));
  };

  return (
    <Link href={`/services/${serviceId}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <Card
        elevation={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: 3,
          p: 2,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          bgcolor: 'white',
          height: 140,
          gap: 2,
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        }}
      >
        {/* Image */}
        <CardMedia
          component="img"
          image={service.image}
          alt={service.title}
          sx={{
            width: 100,
            height: 100,
            borderRadius: 2,
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden',
            minWidth: 0,
            height: '100%',
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: '#1565c0',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              lineHeight: 1.3,
              minHeight: '2.6em',
              mb: 0.5,
            }}
          >
            {service.title}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: '#666',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              mb: 0.5,
            }}
          >
            — {service.priceComment}
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 'bold', color: '#000', whiteSpace: 'nowrap' }}
            >
              Rs {service.appPrice.toLocaleString()}
            </Typography>
            <Typography
              variant="body2"
              sx={{ textDecoration: 'line-through', color: '#999', whiteSpace: 'nowrap' }}
            >
              Rs {service.price.toLocaleString()}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Star sx={{ fontSize: 16, color: '#FFC107' }} />
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#666' }}>
              {service.rating.toFixed(1)}
            </Typography>
          </Stack>
        </Box>

        {/* Add Button */}
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#000',
            color: 'white',
            borderRadius: 1,
            cursor: 'pointer',
            px: 1.5,
            py: 0.5,
            height: 'fit-content',
            minWidth: 80,
            justifyContent: 'center',
            userSelect: 'none',
            flexShrink: 0,
            '&:hover': {
              bgcolor: '#333',
            },
          }}
          onClick={handleAddToCart}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 700, mr: 1, userSelect: 'none' }}
          >
            Add
          </Typography>
          <Add sx={{ fontWeight: 700 }} />
        </Paper>
      </Card>
    </Link>
  );
};

export default ServiceCard;
