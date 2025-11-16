'use client';

import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ServiceCard from '@/Components/Card_Details/CleaningServicesCardDetails';

interface CommercialDeepCleaningServicesSectionProps {
  serviceIds?: number[];
  title?: string;
  subtitle?: string;
}

const CommercialDeepCleaningServicesSection: React.FC<CommercialDeepCleaningServicesSectionProps> = ({ 
  serviceIds,
  title = "Commercial Deep Cleaning Services",
  subtitle = "Professional deep cleaning for commercial spaces"
}) => {
  const defaultCommercialDeepCleaningServiceIds = [1622, 1623, 1624, 1625, 1626];
  const displayServiceIds = serviceIds || defaultCommercialDeepCleaningServiceIds;

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

export default CommercialDeepCleaningServicesSection;