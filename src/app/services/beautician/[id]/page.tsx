"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import ServiceCardDetail from '@/Components/ServiceCardDetail';
import NavBar from '@/Components/beauticianNavabr';
import Footer from '@/Components/BeauticianFooter';
import { Container, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const serviceId = params.id as string;

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

        {/* ServiceCardDetail will fetch its own data */}
        <ServiceCardDetail serviceId={serviceId} />
      </Container>

      <Footer />
    </div>
  );
}