
// ============================================
// ElectrionServiceCard.tsx
// ============================================
'use client';

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ServiceCard from '@/Components/Card_Details/HandymanServiceCardDetails';

interface ElectrionServicesSectionProps {
  serviceIds?: number[];
  title?: string;
  subtitle?: string;
}

const ElectrionServicesSection: React.FC<ElectrionServicesSectionProps> = ({ 
  serviceIds,
  title = "Electrician Services",
  subtitle = "Professional Electrician services at your home"
}) => {
  const defaultElectrionServiceIds = [23, 24, 25];
  const displayServiceIds = serviceIds || defaultElectrionServiceIds;

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
          {displayServiceIds.map((serviceId) => (
            <Box 
              key={serviceId}
              sx={{
                width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' },
                minWidth: '280px',
              }}
            >
              <ServiceCard serviceId={serviceId} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ElectrionServicesSection;
