// components/CarDetailingDescription.tsx

import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';

const CarDetailingDescription: React.FC = () => {
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
          Car Detailing Services
        </Typography>
        
        <Typography paragraph>
          No one can deny the importance of car detailing when it comes to their car experience and the resale price. Are you skipping your car care because of a shortage of time?
        </Typography>

        <Typography paragraph>
          No worries, UstadonCall Company (Mr UstadonCall) App has made it easiest for you to care for your car by offering car detailing services at home. You can book the best professionals in Lahore online.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          UstadonCall Car Detailing Services
        </Typography>

        <Typography paragraph>
          UstadonCall Company (Mr UstadonCall) is Pakistan's 1st App to offer car detailing service at home that promises a sparkling exterior and a spotless interior most easily and affordably.
        </Typography>

        <Typography paragraph>
          Our experts detail your car in the most sought-after manner, leaving you with a car that is pleasant to look at and commute in.
        </Typography>

        <Typography paragraph>
          Here are some of the perks of availing of UstadonCall's car detailing services:
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          1. Book Car Detailing Services at Home
        </Typography>

        <Typography paragraph>
          Yes, there is no need to take time out of your busy routine and drive to a service station. You can get the best car detailing experts at your home using the UstadonCall Company (Mr UstadonCall) App. I mean, it can't get any easier, right?
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          2. Certified Professionals
        </Typography>

        <Typography paragraph>
          Yes, our UstadonCall partners have years of experience and the hands-on skills needed to make your car as good as new. Our car detailing experts have been certified by Tasqeed Pakistan, which means that you will never have security concerns with us.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          3. Impeccable Customer Experience
        </Typography>

        <Typography paragraph>
          Yes, we ensure the best customer experience by providing routine training sessions for developing and refining technical and soft skills in our UstadonCall. The professionals you book through us will identify and adhere to your car's unique needs.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          4. 24/7 Customer Support
        </Typography>

        <Typography paragraph>
          Yes, you can reach out to our responsive customer support if you have a query or complaint. We have the best customer support and quality assurance department that work day in and day out to ensure a service experience that you will enjoy.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          5. Punctuality & Competitive Pricing
        </Typography>

        <Typography paragraph>
          Yes, you will get both with us. After booking car detailing Lahore you will get the experts at your home in just 60 mins. It is like thinking of something and getting that done magically, just like that. The service quality is guaranteed, and the charges are market competitive. What else can you ask for?
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Book UstadonCall Car Detailing at Home
        </Typography>

        <Typography paragraph>
          You can search for us with the keywords car detailing near me and book our services in a hassle-free and efficient way. You can also go to the app store and download the UstadonCall Company (Mr UstadonCall) App for your android and IOS devices. No reason to wait anymore. Download now and book the best professionals at home in just three clicks.
        </Typography>

        <Typography paragraph fontWeight="bold" sx={{ mt: 4 }}>
          Enjoy the best car detailing experience!!!
        </Typography>
      </Container>
    </Box>
  );
};

export default CarDetailingDescription;