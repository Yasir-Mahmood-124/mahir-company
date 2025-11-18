// components/CurtainCleaningDescription.tsx
import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';

const CurtainCleaningDescription: React.FC = () => {
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
          Curtain Cleaning Services
        </Typography>
        
        <Typography paragraph>
          Do you know you can book curtain cleaning services online at affordable prices?
        </Typography>

        <Typography paragraph>
          Yes, we have made it this easy for you, and now you do not have to go through the hassle of doing this yourself.
        </Typography>

        <Typography paragraph>
          With us, you can book the best cleaners who are experienced and know which cleaning agents and techniques are best for taking out the most stubborn stains.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Reasons to Book UstadonCall Curtain Cleaning
        </Typography>

        <Typography paragraph>
          Here are some of the best features of our curtain cleaning services that will motivate you to book immediately:
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Expert Cleaners for Spotless Cleaning
        </Typography>

        <Typography paragraph>
          We have the best cleaners registered with us who have years of experience of cleaning all kinds of fabrics.
        </Typography>

        <Typography paragraph>
          So, with us, you will never have to worry about getting your curtains damaged. Our cleaners know which cleaning agents are best for cleaning your curtains.
        </Typography>

        <Typography paragraph>
          They use the right cleaning materials and techniques to get the most stubborn stains, dust, and dirt out of your curtains.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          60 mins Arrival time
        </Typography>

        <Typography paragraph>
          Yes, with us, you will never have to wait for days. Expert cleaners will be at your doorstep in just 60 mins after you book our curtain cleaning services.
        </Typography>

        <Typography paragraph>
          So, no more waiting or calling the cleaner again and again for the service. You just make the booking, and we will take it from there.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Guaranteed Services
        </Typography>

        <Typography paragraph>
          No doubt about it! We offer a 100% guarantee of our services, and to ensure this, we have taken all the necessary measures.
        </Typography>

        <Typography paragraph>
          For instance, all the cleaners we connect you with have years of experience and are given weekly training regarding responsiveness and customer satisfaction.
        </Typography>

        <Typography paragraph>
          Also, they have years of experience in cleaning all kinds of materials.
        </Typography>

        <Typography paragraph>
          So, you can book professional blind cleaning services through us without the fear of any damage to the material of your curtains or blinds.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Verified Professionals
        </Typography>

        <Typography paragraph>
          Our cleaners are verified by Tasdeeq Pakistan, which makes them a safe option for you. Secondly, they will clean your curtains at your home, and you can give them if you have special instructions about your curtain's material.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          24/7 Customer Support
        </Typography>

        <Typography paragraph>
          You can rely on us for all kinds of queries and complaints around the clock. Our vigilant customer support team will respond to your requests immediately.
        </Typography>

        <Typography paragraph fontWeight="bold" sx={{ mt: 4 }}>
          Book curtain cleaning with us for the most hassle-free, cost-effective, reliable, and efficient services.
        </Typography>
      </Container>
    </Box>
  );
};

export default CurtainCleaningDescription;