// components/ChairCleaningDescription.tsx

import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';

const ChairCleaningDescription: React.FC = () => {
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
          Chair Cleaning Services
        </Typography>
        
        <Typography paragraph>
          Chair cleaning is a task that should be done regularly to keep those in the best shape. Although, instead of doing this task yourself, you should book professional cleaners through us. Why? Because by booking chair cleaning services through us you will not have to spend your time and energy on something that you can get done affordably and more effectively.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Why UstadonCall Chair Cleaning is Easier & More Reliable?
        </Typography>

        <Typography paragraph>
          Here are some of the top features of our chair cleaning services that make us the best option for you:
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Online Reviews
        </Typography>

        <Typography paragraph>
          UstadonCall Company is an online marketplace with a vast digital media presence. It means you never have to trust our services blindly; instead, you can read our customer reviews before booking any of our cleaners.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Only Certified & Expert Cleaners
        </Typography>

        <Typography paragraph>
          With us, you can be sure of the quality of service and your house's safety. We are confident about it because we have taken the required measures, allowing only experienced cleaners to register on our app. So, you will have the best quality services with us. Secondly, our cleaners are verified by Tasdeeq Pakistan, which means you can book chair cleaning at home through us without any safety concerns.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Guarantee of Services
        </Typography>

        <Typography paragraph>
          Yes, we guarantee the best chair cleaning services because we have a responsive Quality Assurance (QA) team. Also, we train our cleaners through weekly training sessions to provide you with the best customer experience.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          24/7 Customer Support
        </Typography>

        <Typography paragraph>
          Our vigilant customer support is at your service around the clock. Book professionals through us and reach out to us for queries and complaints with confidence.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Affordable
        </Typography>

        <Typography paragraph>
          Yes, you can check online that our prices are very market competitive. Also, booking chair cleaning services through us is more affordable than buying cleaning agents and cleaning chairs at home.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          No Wait
        </Typography>

        <Typography paragraph>
          Our cleaners reach your home in just 60 minutes after you book your order. Punctuality is guaranteed. So, if you want to get your chairs cleaned today, you will get these cleaned today!
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Online Booking
        </Typography>

        <Typography paragraph>
          Is it not what you were looking for? No going to the market searching for a cleaner or asking your friends and family to help you find a good cleaner. Go online and book chair cleaning services in Lahore through our website, social media sites, or the UstadonCall Company App.
        </Typography>
      </Container>
    </Box>
  );
};

export default ChairCleaningDescription;