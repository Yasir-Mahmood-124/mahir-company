// ============================================
// FILE: app/about-us/beautician-about/page.tsx
// ============================================

"use client";
import React, { Suspense } from 'react';
import { 
  Box, 
  Container, 
  Typography
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Pinterest as PinterestIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon
} from '@mui/icons-material';
import Image from 'next/image';
import image from "@/assests/Images/city-illustration.png";
import NavBar from '@/Components/beauticianNavabr';
import Footer from '@/Components/HandymanFooter';

interface MenuItem {
  text: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const AboutUsPage: React.FC = () => {

  return (
    <div>
      {/* NavBar Wrapped in Suspense */}
      <Suspense fallback={<div style={{ padding: '20px' }}>Loading...</div>}>
        <NavBar />
      </Suspense>

      <Box>

        {/* Hero Section */}
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">

            {/* City Illustration */}
            <Box 
              sx={{ 
                width: '100%', 
                height: '180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 5,
                bgcolor: 'white',
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              <Image 
                src={image}
                alt="City Illustration" 
                width={1340} 
                height={273}
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </Box>

            {/* Who is UstadonCall Company */}
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Who is UstadonCall Company?
            </Typography>
            <Typography sx={{ color: '#777', mb: 5, lineHeight: 1.8 }}>
              UstadonCall Company is Pakistan's no.1 online marketplace connecting service providers and seekers...
            </Typography>

            {/* Website & App */}
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              UstadonCall Company Website & App
            </Typography>
            <Typography sx={{ color: '#777', mb: 5, lineHeight: 1.8 }}>
              These are designed to make the life of the common man and woman easy...
            </Typography>

            {/* Partner App */}
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              UstadonCall Partner App
            </Typography>
            <Typography sx={{ color: '#777', mb: 5, lineHeight: 1.8 }}>
              To empower our service providers, we get them registered on UstadonCall Partner App...
            </Typography>

            {/* Empowerment Mission */}
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Our Empowerment Mission
            </Typography>
            <Typography sx={{ color: '#777', mb: 5, lineHeight: 1.8 }}>
              Our goal is to help thousands of local technicians...
            </Typography>

            {/* Achievements */}
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Our Achievements
            </Typography>
            <Typography sx={{ color: '#777', mb: 3, lineHeight: 1.8 }}>
              Launched as Mr. UstadonCall, UstadonCall Company has grown exponentially...
            </Typography>

            {/* Details */}
            <Box sx={{ mb: 5 }}>
              <Typography sx={{ color: '#777', mb: 2 }}>
                <strong>Service-wise Growth:</strong> We now offer 161+ Home Maintenance Services...
              </Typography>
              <Typography sx={{ color: '#777', mb: 2 }}>
                <strong>Geographical Expansion:</strong> We now offer services in Lahore, Multan, Karachi...
              </Typography>
              <Typography sx={{ color: '#777', mb: 5 }}>
                <strong>Customer Acquisition:</strong> 450k signups, 50k monthly traffic, and 100k active users.
              </Typography>
            </Box>

          </Container>
        </Box>
      </Box>

      {/* Footer Wrapped in Suspense */}
      <Suspense fallback={<div style={{ padding: '20px' }}>Loading...</div>}>
        <Footer />
      </Suspense>

    </div>
  );
};

export default AboutUsPage;
