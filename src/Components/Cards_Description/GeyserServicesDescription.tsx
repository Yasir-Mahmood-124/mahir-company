
import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';

const GeyserServicesDescription: React.FC = () => {
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
          Best Geyser Installation and Repair Services
        </Typography>
        
        <Typography paragraph>
          Are you looking for a professional to install or repair your geyser before the arrival of winter? If yes, you are in luck! UstadonCall's Company (Mr UstadonCall) online platform is designed to connect customers like you to the best professionals.
        </Typography>

        <Typography paragraph>
          With us, you can book <strong>geyser installation services</strong> at your home anytime. We have expert and skilled plumbers who can repair your years old geyser with a 100% guarantee. Owing to their vast experience, our professionals can repair and install all models and brands of geysers.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Why Book UstadonCall's Company (Mr UstadonCall) Geyser Repair & Install Services?
        </Typography>

        <Typography paragraph>
          Because we are the best service providers. How? Continue reading to know the best features of UstadonCall's Company (Mr UstadonCall) geyser services.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          1. At-Home Services
        </Typography>
        <Typography paragraph>
          Do you not want the hassle of visiting the market searching for a plumber for your geyser installation and repair? We have got you covered! Our efficient and responsive plumbers will get to your doorstep soon after you book the service. There will be absolutely no delay.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          2. Unrivaled Professionalism
        </Typography>
        <Typography paragraph>
          We pledge that no one in the market can match the professionalism of plumbers we connect you to. We verify our plumbers during the registration process to ensure the safety of your family and the sanctity of your home.
        </Typography>
        <Typography paragraph>
          If you need reliable and safe <strong>instant geyser installation</strong>, book through the UstadonCall's Company (Mr UstadonCall) app. Our plumber will inspect your geyser, suggest the best mode of action, and get the installation done with utmost professionalism.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          3. For All Brands & Models
        </Typography>
        <Typography paragraph>
          No matter what is the brand or model of your geyser, our plumber will get the fixing and installation done expertly. With us, you can be 100% confident of the skillfulness of the plumber as we take guarantee of his work, and if anything goes wrong, it's fixed within seven working days.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          4. Reliability Guaranteed
        </Typography>
        <Typography paragraph>
          Yes, you have our complete support as far as the guarantee of the service is concerned. Our responsive customer service representatives will stay by your side until you are satisfied in case of any mishap.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          5. Unparalleled Affordability
        </Typography>
        <Typography paragraph>
          Our prices are market competitive and even lower than market price with the 10% discount that you can get by booking <strong>geyser installation services</strong> through UstadonCall's Company (Mr UstadonCall) App.
        </Typography>

        <Typography paragraph fontWeight="bold" sx={{ mt: 4 }}>
          So, instead of wasting your time and money with seasonal plumbers, choose us. You will never regret it!
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Our Commitment to Excellence
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          We value your trust. We offer:
        </Typography>
        <List dense>
          {[
            'Exceptional Customer Service',
            '24/7 Geyser Repair Services – No Extra Charge',
            'Fast & Reliable',
            'Professionally Trained Expert Plumbers',
            'No Hidden or Unexpected Charges',
            'Full Line of Major Geyser Brands',
            '100% Satisfaction Guarantee',
            'Quick Response Time',
          ].map((item, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemText primary={`• ${item}`} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Why Choose Us
        </Typography>
        <List dense>
          {[
            'Best Price Guarantee',
            'Expert & Custom Solutions',
            'Fast & Reliable Service',
            'All Makes & Models',
            'Respect & Honesty',
            'Same-Day Service Available',
          ].map((item, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemText primary={`• ${item}`} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Our Services
        </Typography>
        <Typography paragraph>
          Our geyser technicians and plumbers have years of practical, in-field experience. They possess just the right knowledge and skills needed to diagnose and rule out any geyser complication and give you a solution regarding all problems you may have.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Geyser Installation Services
        </Typography>
        <Typography paragraph>
          We have a perfect team of plumbers who can get your <strong>instant geyser installation</strong>, <strong>gas geyser installation</strong>, and <strong>electric geyser installation</strong> done in Lahore, Karachi, Islamabad, Rawalpindi, and Multan. Our technicians are highly experienced in dealing with all types of geyser units of any make and model.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Geyser Repair Services
        </Typography>
        <Typography paragraph>
          UstadonCall Company (Mr UstadonCall) offers various geyser repair services such as <strong>instant geyser repairing</strong>, <strong>gas geyser repairing</strong>, and <strong>electric geyser repairing</strong>. Our skilled professionals can fix any issue your geyser might be facing.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Geyser Service & Maintenance
        </Typography>
        <Typography paragraph>
          Regular maintenance is key to extending your geyser's lifespan. We provide comprehensive <strong>geyser service</strong> including cleaning, inspection, and parts replacement to ensure optimal performance throughout the winter season.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Geyser Dismounting Services
        </Typography>
        <Typography paragraph>
          Need to remove your old geyser? Our experts provide safe and efficient <strong>geyser dismounting services</strong> for all types of geysers including instant, gas, and electric models.
        </Typography>

        <Typography paragraph fontStyle="italic" sx={{ mt: 4 }}>
          From installation and servicing to repair & support, we do it all. Book through the UstadonCall's Company (Mr Mahir) app today and get your geyser ready for winter!
        </Typography>
      </Container>
    </Box>
  );
};

export default GeyserServicesDescription;