// components/CommercialDeepCleaningDescription.tsx
import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';

const CommercialDeepCleaningDescription: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: '#fff',
        py: 6,
        px: { xs: 2, md: 8 },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth={false} sx={{ px: 0 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Commercial Deep Cleaning Services
        </Typography>
        
        <Typography paragraph>
          We are helping businesses grow by leaps and bounds with our commercial deep cleaning services that allow them to maintain the look and feel of their offices. We allow them to focus on their business operations.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Mahir's Commercial Deep Cleaning | Best in Town
        </Typography>

        <Typography paragraph>
          We have a pool of professional cleaners registered with us to provide you with the best commercial deep-cleaning services. Our cleaning experts have the following features, making them the best option for those looking for hassle-free cleaning services.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Online Booking
        </Typography>

        <Typography paragraph>
          You can book professionals through us in the easiest way through our online platforms, including websites, social media sites, and Mahir Company App.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Verified Experts
        </Typography>

        <Typography paragraph>
          To ensure 100% safety, we verify our office deep cleaning service providers by Tasdeeq Pakistan. So, with us, you will never have security concerns. Unlike when you book a cleaner through direct dealing, booking with us gives you the edge that you will never have to be worried about any fraudulent activity.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Timely & Responsive Cleaning
        </Typography>

        <Typography paragraph>
          When you are looking for cleaners in an urgent situation, you know you can book a restaurant deep cleaning. We ensure that our experts are at your doorstep in just 60 minutes after the booking. You will never have to wait with us. So, no more waiting or checking up on the cleaner again and again.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Experienced & Trained Cleaners
        </Typography>

        <Typography paragraph>
          To provide you with satisfactory service experience, we only register experienced and skilled cleaners. They have hands-on experience in educational institute deep cleaning with the required knowledge of effective cleaning agents and equipment.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          24/7 Customer Support
        </Typography>

        <Typography paragraph>
          What if anything goes wrong? You will be in big trouble in case you have booked services directly. Booking hospital deep cleaning services through us comes with around-the-clock customer support. In case of any query or complaint, our representatives will be there to resolve the issue.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Market Competitive Service Charges
        </Typography>

        <Typography paragraph>
          Being reliable and efficient doesn't mean that our salon deep cleaning services are expensive. So, what are you waiting for? Book Now!
        </Typography>
      </Container>
    </Box>
  );
};

export default CommercialDeepCleaningDescription;