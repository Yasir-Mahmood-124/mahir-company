// ============================================
// SofaCleaningServicesSection.tsx
'use client';

import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ServiceCard from '@/Components/Card_Details/CleaningServicesCardDetails';

interface SofaCleaningServicesSectionProps {
  serviceIds?: number[];
  title?: string;
  subtitle?: string;
}

const SofaCleaningServicesSection: React.FC<SofaCleaningServicesSectionProps> = ({ 
  serviceIds,
  title = "Sofa Cleaning Services",
  subtitle = "Expert sofa cleaning for all types and sizes"
}) => {
  const defaultSofaCleaningServiceIds = [183, 272, 273, 274, 288, 1606, 1607];
  const displayServiceIds = serviceIds || defaultSofaCleaningServiceIds;

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

export default SofaCleaningServicesSection;