import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';

const PestControlServiceDescription: React.FC = () => {
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
          Best Pest Control Services in Pakistan
        </Typography>
        
        <Typography paragraph>
          Pesticides are difficult to deal with. Even the entrance of a single pesticide in your house can cause much trouble. Why? Because they reproduce in large numbers very speedily. Their infestation can cause a threat to your and your family's health.
        </Typography>
        
        <Typography paragraph>
          However, you don't need to worry about them as you can book pest control services through us. We connect you with the best professionals in your area who come to your place equipped with state-of-the-art chemicals and medicines.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Reasons to Book Mahir Pest Control Services
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Fumigation Services
        </Typography>
        
        <Typography paragraph>
          This process is used worldwide to eliminate stored product insects (SPIs). These insects are found in the places where food is stored and consumed the food items. During the consumption, these infect the food making it non-edible for humans. You can book fumigation services online through us for guaranteed results.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Cockroach Treatment
        </Typography>
        
        <Typography paragraph>
          You see a cockroach and this crawling sensation starts irritating you. The sight of a cockroach becomes a cause of worry for you as it implies many health issues. Also, they spread very speedily and make your home their home in no time.
        </Typography>
        
        <Typography paragraph>
          Book our eco-friendly and dependable services online for getting rid of insects with the best cockroach treatment.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Bed Bugs Treatment
        </Typography>
        
        <Typography paragraph>
          Bed bugs are where the beds are. So, your house is not an exception, and you have to get rid of these before your pets become irritated with the itching caused by them. They will also disturb your sleep and have proven to be detrimental to your health. No worries if you have got bed bugs.
        </Typography>
        
        <Typography paragraph>
          We connect you to the best bed bug treatment providers through our online platforms, including the Mahir Company (Mr Mahir) App. Our professionals will help you stop the attacks and multiplication of these bed bugs in no time.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Dengue Spray
        </Typography>
        
        <Typography paragraph>
          The most effective way of getting rid of dengue is to destroy the places that can become breeding places for the mosquitoes that carries it. What are these places? Well, these include any nook and corner or ground that has stagnant water.
        </Typography>
        
        <Typography paragraph>
          If water remains stagnant in these for more than a week, the chances of it inhibiting dengue mosquitoes rises. So, ensure you clear off the standing water from the basins, vases, barrels, and unused tires. Also, you need to keep the drainage and sewage systems covered with lids.
        </Typography>
        
        <Typography paragraph>
          However, even after taking these measures you cannot be 100% sure unless you book our dengue spray services. We use the most effective sprays to kill the mosquito larvae and eggs for complete eradication of the dengue's risk.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Termite Treatment
        </Typography>
        
        <Typography paragraph>
          You know the presence of termites in your house implies health hazards. If you do not take care of it at the right time, it can make your home's foundation hollow and even lead to its sudden destruction. Book termite treatment through us in just three clicks to prevent such a disastrous situation.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Benefits of Booking Mahir Pest Control Services
        </Typography>
        
        <Typography component="div" paragraph>
          • Online booking through website, app, and social media sites.<br/>
          • Professionals at your doorstep in 60 mins.<br/>
          • Verified experts with years of experience.<br/>
          • Online customer reviews on website, social media, and app store.<br/>
          • 24/7 customer support.<br/>
          • Treatment with the best chemical sprays and medicines.
        </Typography>

        <Typography paragraph fontWeight="bold" sx={{ mt: 4 }}>
          Trust Mahir Company (Mr Mahir) for all your pest control needs. Book now and experience professional service at affordable rates!
        </Typography>
      </Container>
    </Box>
  );
};

export default PestControlServiceDescription;