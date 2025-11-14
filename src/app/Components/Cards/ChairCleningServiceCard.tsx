'use client';

import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ServiceCard from '../Card_Details/CleaningServicesCardDetails';

interface ChairCleaningServicesSectionProps {
  serviceIds?: number[];
  title?: string;
  subtitle?: string;
}

const ChairCleaningServicesSection: React.FC<ChairCleaningServicesSectionProps> = ({ 
  serviceIds,
  title = "Chair Cleaning Services",
  subtitle = "Professional chair cleaning for all seat configurations"
}) => {
  const defaultChairCleaningServiceIds = [184, 301, 302, 303, 1611];
  const displayServiceIds = serviceIds || defaultChairCleaningServiceIds;

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

export default ChairCleaningServicesSection;