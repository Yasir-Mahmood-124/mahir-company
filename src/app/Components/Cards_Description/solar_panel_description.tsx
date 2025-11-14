// components/SolarPanelCleaningDescription.tsx
import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';

const SolarPanelCleaningDescription: React.FC = () => {
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
          Professional Solar Panel Cleaning Services
        </Typography>
        
        <Typography paragraph>
          Welcome to our one-stop destination for top-notch solar panel cleaning services! At Mahir Company, we understand the significance of clean and well-maintained solar panels in optimizing energy generation and ensuring maximum efficiency. With our expert team and cutting-edge techniques, we are here to take your solar panels from dull to dazzling, helping you harness the full potential of solar energy.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Why Choose Mahir Solar Panel Cleaning?
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          1. Unlock Your Solar Panels' Full Potential
        </Typography>

        <Typography paragraph>
          Dirty solar panels can significantly hamper their performance and energy output. Our meticulous cleaning services guarantee that every inch of your solar panels is free from dust, grime, and debris, maximizing their energy conversion and saving you money in the long run.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          2. Prolong the Lifespan of Your Investment
        </Typography>

        <Typography paragraph>
          Solar panels are a long-term investment. Our specialized cleaning solutions ensure that your panels remain in peak condition, reducing wear and tear, and extending their lifespan, protecting your investment for years to come.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          The Best Solar Panel Cleaner at Your Service
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          1. Expert Team of Solar Panel Cleaning Professionals
        </Typography>

        <Typography paragraph>
          At Mahir Company, we take pride in our team of experienced and trained professionals who are dedicated to providing the best solar panel cleaning services. Their expertise and attention to detail guarantee exceptional results every time.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          2. Safe and Environmentally Friendly Cleaning Solutions
        </Typography>

        <Typography paragraph>
          We prioritize both your safety and the environment. Our cleaning solutions are eco-friendly, non-toxic, and carefully chosen to ensure they don't damage the panels or harm the surrounding environment.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Our Solar Panel Cleaning Process
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          1. Thorough Inspection
        </Typography>

        <Typography paragraph>
          Before we begin, our experts conduct a comprehensive inspection of your solar panels to identify any specific problem areas or concerns.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          2. Gentle Cleaning Techniques
        </Typography>

        <Typography paragraph>
          Using the latest industry-leading equipment and gentle cleaning techniques, we remove dirt, dust, bird droppings, and other debris without causing any damage to the panels.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Solar Panel Cleaning Made Convenient
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          1. Local Solar Panel Cleaning Services
        </Typography>

        <Typography paragraph>
          Searching for "Solar Panel Cleaning near me"? Look no further! We offer local services that make scheduling and getting your solar panels cleaned a breeze.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          2. Flexible Maintenance Plans
        </Typography>

        <Typography paragraph>
          Keep your solar panels performing at their best year-round with our customizable maintenance plans. We work around your schedule to provide regular cleanings, ensuring optimal energy generation throughout the seasons.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Experience the Difference with Mahir Company
        </Typography>

        <Typography paragraph>
          We are committed to delivering exceptional service and ensuring every customer is satisfied with our work. Your happiness is our success!
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Get Started Today
        </Typography>

        <Typography paragraph>
          Don't wait for your solar panels to lose their efficiency. Experience the power of sparkling clean solar panels with Mahir Company. Contact us now to schedule your solar panel cleaning service and harness the true potential of solar energy!
        </Typography>
      </Container>
    </Box>
  );
};

export default SolarPanelCleaningDescription;