'use client';

import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ServiceCard from '../Card_Details/CleaningServicesCardDetails';

interface CarpetCleaningServicesSectionProps {
  serviceIds?: number[]; // Optional prop for specific service IDs
  title?: string;
  subtitle?: string;
}

const CarpetCleaningServicesSection: React.FC<CarpetCleaningServicesSectionProps> = ({ 
  serviceIds,
  title = "Carpet Cleaning Services",
  subtitle = "Professional carpet and rug cleaning at your doorstep"
}) => {
  const defaultCarpetCleaningServiceIds = [185, 1621];
  const displayServiceIds = serviceIds || defaultCarpetCleaningServiceIds;

  return (
    <Box sx={{ py: 6, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
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

        {/* Services Grid */}
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

export default CarpetCleaningServicesSection;