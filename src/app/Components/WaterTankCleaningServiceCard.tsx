// ============================================
// WaterTankCleaningServicesSection.tsx
'use client';

import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ServiceCard from './ServiceCard';

interface WaterTankCleaningServicesSectionProps {
  serviceIds?: number[];
  title?: string;
  subtitle?: string;
}

const WaterTankCleaningServicesSection: React.FC<WaterTankCleaningServicesSectionProps> = ({ 
  serviceIds,
  title = "Water Tank Cleaning Services",
  subtitle = "Professional water tank cleaning for all sizes"
}) => {
  const defaultWaterTankServiceIds = [186, 277, 278];
  const displayServiceIds = serviceIds || defaultWaterTankServiceIds;

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
            }}
          >
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {subtitle}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {displayServiceIds.map((serviceId) => (
            <Grid item xs={12} sm={6} md={4} key={serviceId}>
              <ServiceCard serviceId={serviceId} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WaterTankCleaningServicesSection;
