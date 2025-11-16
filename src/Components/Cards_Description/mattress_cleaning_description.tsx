// components/MattressCleaningDescription.tsx
import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';

const MattressCleaningDescription: React.FC = () => {
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
          Mattress Cleaning Services
        </Typography>
        
        <Typography paragraph>
          A dirty mattress means a lot of health problems, which you can avoid by getting it cleaned in a routine. However, you should not take up this hectic job yourself, instead, book the best professionals in your area through our website or app. Sounds easy, right?
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          How to Book Mattress Cleaning Services through Us?
        </Typography>

        <Typography paragraph>
          You can book expert cleaners through us in the easiest way. There will be no need to take your mattress to the market or go to the market to find an expert. You can book mattress cleaning services online through us most efficiently and affordably.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Why Book Mattress Cleaning Services through Us?
        </Typography>

        <Typography paragraph>
          Booking mattress cleaning through us comes with a lot of advantages, and some of those are mentioned below:
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          No Hassle
        </Typography>

        <Typography paragraph>
          Booking a professional through us does not involve any trouble, as we have a vast online presence and a responsive app. You can book the best cleaners in your area using our app and other online platforms, including website and social media sites. The booking process is very easy and feels like child's play.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          No Waiting
        </Typography>

        <Typography paragraph>
          We ensure that our expert cleaners reach your doorstep in just 60 mins, and you do not have to wait. So, booking Mahir mattress cleaning helps you get your mattress spotless the same day without waiting.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Guaranteed Cleaning
        </Typography>

        <Typography paragraph>
          Our experts use the best quality cleaning agents and state-of-the-art machinery to remove all the dust, dirt, and stains from your matters. Therefore, with us, you can get your mattress as good as new. Another thing, the cleaning agents our experienced cleaners use are synthetic, which means they do not harm the fabric of your mattress.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Professional Cleaners
        </Typography>

        <Typography paragraph>
          The cleaners who we connect you with are experts in their field. They have years of hands-on experience in cleaning and know which products and techniques are best for eliminating the most stubborn stains without damaging the fabric of your mattress.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          No Fear of Fraudsters
        </Typography>

        <Typography paragraph>
          Our cleaners are verified by Tasdeeq Pakistan, which means that you will never have any security or safety concerns when you book a cleaner through the Mahir Company App.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Online Reviews
        </Typography>

        <Typography paragraph>
          We encourage you to read the online reviews of the customers who have availed of our services. You can find these on our website, social media platforms, and app store. These will help you make a well-thought-out decision.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Affordable Charges
        </Typography>

        <Typography paragraph>
          Our service charges are very market competitive. Considering the convenience of online booking, quality assurance, and customer support we provide, you will feel that you are saving your money and time.
        </Typography>

        <Typography paragraph fontWeight="bold" sx={{ mt: 4 }}>
          Book mattress cleaning in Lahore to get rid of all the stains in the most convenient, reliable, and affordable way.
        </Typography>

        <Typography paragraph>
          Now you have enough reasons to book mattress cleaning through us. You can search for us with the keywords mattress cleaning services near me or download the Mahir Company App to book in just three clicks.
        </Typography>
      </Container>
    </Box>
  );
};

export default MattressCleaningDescription;