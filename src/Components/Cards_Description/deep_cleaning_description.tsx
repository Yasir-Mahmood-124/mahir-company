// components/DeepCleaningDescription.tsx
import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';

const DeepCleaningDescription: React.FC = () => {
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
          Deep Cleaning Services
        </Typography>
        
        <Typography paragraph>
          Finding help for deep cleaning your house has become easier than ever with us. Now you can book the best cleaners in your area online most reliably and safely.
        </Typography>

        <Typography paragraph>
          Yes, you don't have to worry about the stains on your washroom floor or kitchen walls around the cooking range.
        </Typography>

        <Typography paragraph>
          UstadonCall Company App is here to take care of all these and other hectic tasks that take a toll on you.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Why Do You Need UstadonCall Deep Cleaning Services?
        </Typography>

        <Typography paragraph>
          Cleaning services can help you clean your house from top to bottom, including windows and cupboards. Booking the whole house deep cleaning services of UstadonCall Company saves you time, money, and hassle.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          UstadonCall Deep Cleaning Saves You Time
        </Typography>

        <Typography paragraph>
          When you book house deep cleaning through us, you will not have to spend weekends cleaning the tiles of your floor or watching your maid do it.
        </Typography>

        <Typography paragraph>
          Our UstadonCall cleaners will take over the task of cleaning every nook and corner of your washroom, kitchen, and other parts of your home, even your almirahs, and drawers.
        </Typography>

        <Typography paragraph>
          Booking our services is so easy that all you have to do is to search for us using the keyword deep cleaning services near me.
        </Typography>

        <Typography paragraph>
          Our UstadonCall's will be at your home 60 mins after the booking or the time you have selected for booking. So, with us, you will save your weekends and leisure time.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          UstadonCall Deep Cleaning Saves You Money
        </Typography>

        <Typography paragraph>
          For deep kitchen cleaning, you have to buy expensive cleaning materials that cost you almost as much as booking our services, making our services cost-effective.
        </Typography>

        <Typography paragraph>
          Also, you don't have the experience our cleaners have in selecting cleaning agents and equipment. Nor do you have the skills to clean stubborn stains like our professionals.
        </Typography>

        <Typography paragraph>
          So, whether it is room deep cleaning or any other part of your home, booking our services is an affordable option.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          UstadonCall Deep Cleaning Saves You Hassle
        </Typography>

        <Typography paragraph>
          You can book our deep cleaning services and expect us to clean those corners of your home, like kitchen shelves and kitchen hood, as we have included sub-services.
        </Typography>

        <Typography paragraph>
          So, if you are shifting to a new home or getting your home ready for an event, or preparing your home for welcoming 2023, booking our services will be the most hassle-free thing to do.
        </Typography>

        <Typography paragraph>
          Our UstadonCall's are certified and trained professionals; we have verified them from Tasdeeq Pakistan and provide them with weekly training sessions.
        </Typography>

        <Typography paragraph>
          So, your family and your home will be safe with us if you book our services for even room deep cleaning, which is the most private part of your home.
        </Typography>

        <Typography paragraph fontWeight="bold" sx={{ mt: 4 }}>
          What are you thinking? Book now and make your life easy.
        </Typography>
      </Container>
    </Box>
  );
};

export default DeepCleaningDescription;