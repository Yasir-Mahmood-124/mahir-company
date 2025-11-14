'use client';

import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ServiceCard from '../ServiceCard';

interface CementTankCleaningServicesSectionProps {
  serviceIds?: number[];
  title?: string;
  subtitle?: string;
}

const CementTankCleaningServicesSection: React.FC<CementTankCleaningServicesSectionProps> = ({ 
  serviceIds,
  title = "Cement Water Tank Cleaning Services",
  subtitle = "Professional water tank cleaning for all sizes"
}) => {
  const defaultCementTankServiceIds = [203, 279, 280];
  const displayServiceIds = serviceIds || defaultCementTankServiceIds;

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

export default CementTankCleaningServicesSection;