"use client"; // <-- MUST be at the very top

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import ServiceCardDetail from '@/Components/ServiceCardDetail';
import NavBar from '@/Components/Navabar';
import Footer from '@/Components/HandymanFooter';
import { useAppSelector } from '@/redux/hooks';
import { selectServiceDetailById } from '@/redux/Data/Serviceslicedata';
import { Container, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Suspense } from 'react';

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

        {/* Wrap ServiceCardDetail in Suspense for safety */}
        <Suspense fallback={<div>Loading service details...</div>}>
          <ServiceCardDetail service={service} />
        </Suspense>
      </Container>

      <Footer />
    </div>
  );
}
