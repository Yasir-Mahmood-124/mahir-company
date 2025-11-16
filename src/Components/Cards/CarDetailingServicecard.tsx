'use client';

import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ServiceCard from '@/Components/Card_Details/CleaningServicesCardDetails';
import { useSelector } from 'react-redux';

interface ACServicesSectionProps {
  serviceIds?: number[];
  title?: string;
  subtitle?: string;
  description?: string[] | string;
}

const ElectricianServicesSection: React.FC<ACServicesSectionProps> = ({ 
  serviceIds,
  title = "Electrician Services",
  subtitle = "Professional electrician services at your home",
  description
}) => {
  const defaultServiceIds = [198, 199, 200, 201, 202, 1614];
  const displayServiceIds = serviceIds?.length ? serviceIds : defaultServiceIds;

  const allServices = useSelector((state: any) => state.services?.services || []);

  const services = displayServiceIds
    .map(id => allServices.find((s: any) => s.id === id))
    .filter(Boolean);

  // ✅ Get description for each service individually
  const getServiceDescription = (serviceId: number): string[] => {
    const service = allServices.find((s: any) => s.id === serviceId);
    
    if (description) {
      return Array.isArray(description) ? description : [description];
    } else if (service?.description) {
      return Array.isArray(service.description) ? service.description : [service.description];
    } else if (service?.meta?.description) {
      const metaDesc = service.meta.description;
      return Array.isArray(metaDesc) ? metaDesc : [metaDesc];
    }
    
    return [];
  };

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

        {/* Service Cards */}
        <Grid container spacing={3}>
          {displayServiceIds.map((serviceId) => {
            const descLines = getServiceDescription(serviceId);
            
            return (
              <Grid item xs={12} sm={6} md={4} key={serviceId}>
                <ServiceCard 
                  serviceId={serviceId}
                  descriptionLines={descLines}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ElectricianServicesSection;