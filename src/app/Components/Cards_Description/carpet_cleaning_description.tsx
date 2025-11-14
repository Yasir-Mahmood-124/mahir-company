// components/CarpetCleaningDescription.tsx
import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';

const CarpetCleaningDescription: React.FC = () => {
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
          Carpet Cleaning Services
        </Typography>
        
        <Typography paragraph>
          Carpet cleaning is a hectic task, which you should not be doing. Instead, you should book our carpet cleaning services to get it spotless in the most hassle-free, affordable, and efficient way. We connect you to the best professionals in Lahore with years of experience and training from our quality assurance team.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Benefits of Booking Mahir Carpet Cleaning
        </Typography>

        <Typography paragraph>
          Our customers are our highest priority, so we designed our carpet cleaning services to be nothing less than perfect. Here are some of the pros of booking our pros:
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          1. Booking in Just 3 Clicks
        </Typography>

        <Typography paragraph>
          We have made the booking process so simple that you do not have to move a step out of your home or comfort zone. You can book the best cleaners in your area affordably, safely, and easily by booking carpet cleaning in Lahore using our website and Mahir Company App. Our online platforms make it easiest to book a cleaner as you have to tap, tap, tap, and tap the booking is made.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          2. Arrival of Professional in 60 mins
        </Typography>

        <Typography paragraph>
          We will never keep you waiting that is a promise we stand by no matter what the odds are. After the booking, our professional will be at your doorstep in just an hour. So, with us, you can get your carpet cleaned most reliably.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          3. Experienced Experts
        </Typography>

        <Typography paragraph>
          The cleaners who get on board with us have years of experience. We ensure that we connect you with the experts in their fields to ensure spotless cleaning.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          4. Certified Experts
        </Typography>

        <Typography paragraph>
          Our cleaners are certified by Tasdeeq Pakistan as your safety concern is of paramount importance to us. You can trust that the cleaner we connect you with has a clean background, and you do not need to worry about fraudulent activities.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          5. Use Best Quality Products
        </Typography>

        <Typography paragraph>
          Our quality assurance team ensures that the cleaning agents our professionals use are effective enough to clean all the stains off your carpet. Also, these do not have chemicals that can ruin the carpet's fabric or color.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          6. 100% Customer Satisfaction
        </Typography>

        <Typography paragraph>
          We have an in-house training team that arranges weekly training sessions for our cleaners to ensure good communication between you and our cleaners. In these sessions, they learn how to be responsive to your unique cleaning-related needs.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          7. 24/7 Customer Support
        </Typography>

        <Typography paragraph>
          Yes, we are on your call around the clock. If you have any issues during or after the service, you can reach out to us for a quick response and resolution of the problem.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          8. Online Customer Reviews
        </Typography>

        <Typography paragraph>
          You can find the customer reviews for our cleaners on our website, social media, and app store. We have made their reviews available to you to help you make a well throughout and confident decision.
        </Typography>

        <Typography paragraph fontWeight="bold" sx={{ mt: 4 }}>
          Search online with the keywords carpet cleaning near me or book through Mahir Company's website or app.
        </Typography>
      </Container>
    </Box>
  );
};

export default CarpetCleaningDescription;