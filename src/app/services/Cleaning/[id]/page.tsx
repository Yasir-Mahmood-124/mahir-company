'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import ServiceCardDetail from '@/app/Components/ServiceCardDetail';
import NavBar from '../../../Components/CleaningServiceNavbar';
import Footer from '@/app/Components/HandymanFooter';
import { useAppSelector } from '@/app/Components/redux/hooks';
import { selectServiceDetailById } from '@/app/Components/redux/Data/Serviceslicedata';
import { Container, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const serviceId = Number(params.id);

  // Get service detail from Redux by ID
  const service = useAppSelector((state) => 
    selectServiceDetailById(state, serviceId)
  );

  // If service not found
  if (!service) {
    return (
      <div>
        <NavBar />
        <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
          <h2>Service not found</h2>
          <Button variant="contained" onClick={() => router.push('/')}>
            Go to Homepage
          </Button>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Back Button */}
        <Box sx={{ mb: 3 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => router.back()}
            variant="outlined"
            sx={{ 
              borderRadius: 2,
              textTransform: 'none',
              px: 3
            }}
          >
            Back to Services
          </Button>
        </Box>

        {/* Service Detail Component */}
        <ServiceCardDetail service={service} />
      </Container>

      <Footer />
    </div>
  );
}