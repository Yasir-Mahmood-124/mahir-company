import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';

const HomeAppliancesServiceDescription: React.FC = () => {
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
          Home Appliances Installation and Repair Service
        </Typography>
        
        <Typography paragraph>
          Do appliances have an amusing way of breaking at the worst possible times? Isn't that so?
          When an appliance stops functioning, you may be totally out of clue as to what should be done – Certainly, you don't know how it works, you have no clue why it stopped working of a sudden, and you clearly don't know how to fix it!
        </Typography>
        
        <Typography paragraph>
          We will tell you what you can do! You can hire a Home Appliances Repair and Installation service that's going to save the day for you!
        </Typography>
        
        <Typography paragraph>
          At UstadonCall Company (Mr UstadonCall), our expert technicians will pull your faulty appliances apart and then put them back together in working order before you even know it. So hey! before you attack the refrigerator with a screwdriver, let's walk you through the major appliances repair solution we provide at UstadonCall Company (Mr MahiUstadonCallr).
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Washing Machine Repair and Maintenance Service
        </Typography>
        
        <Typography paragraph>
          You probably can't spend a week without doing your laundry, the piles of laundry sitting there, waiting to be washed is not a pleasing sight even for non-OCD people!
        </Typography>
        
        <Typography paragraph>
          It's hard to live without these housekeeping helpers we depend on from dawn to dusk. And what a disaster it is to see them broken down!
        </Typography>
        
        <Typography paragraph>
          Not every problem should be handled by an amateur. Whether you're in search of washing machine maintenance, washer repair, or washing machine repair near me, we are here to help.
        </Typography>
        
        <Typography paragraph>
          We're the right pick for quick local repair and maintenance of front-loading, top-load, automatic and portable washing machines.
        </Typography>
        
        <Typography paragraph>
          If your washing machine is leaking, your washer won't start, or strange noises are coming out of your washing machine call us for the best washing machine technicians in the business who has the skills to get your dryer up and running again!
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Refrigerator Repair in Lahore and Karachi
        </Typography>
        
        <Typography paragraph>
          When your refrigerator goes out of order, you have to arrange a highly-skilled refrigerator repair service that is just a speed dial away.
        </Typography>
        
        <Typography paragraph>
          So it's better to do the homework beforehand, while your refrigerator is fully up and running and you actually have a moment to spare.
        </Typography>
        
        <Typography paragraph>
          It's not wise to wait until you're up to your ankles in leaking water or facing the possibility of losing huge amounts of money worth of spoiled food. No matter the make or model, we are providing the best refrigerator repair services.
        </Typography>
        
        <Typography paragraph>
          Our refrigerator repair technicians are qualified experts in fixing all major refrigerator brands. So if your refrigerator is making strange noises or there is an unknown leak, call UstadonCall Company (Mr UstadonCall), the best Refrigerator Repair in Lahore and Karachi!
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Dishwasher Repair and Installation
        </Typography>
        
        <Typography paragraph>
          If you notice your dishes are consistently cloudy or still dirty after a cycle, you may need a dishwasher repair service. Call us so we can help avert ineffective wash cycles and irritating leaks!
        </Typography>
        
        <Typography paragraph>
          If it's the water that won't drain out of your dishwasher or your dishes aren't getting clean enough, you can get in touch with us so we can find you the best dishwasher service technicians in the business.
        </Typography>

        <Typography paragraph fontWeight="bold" sx={{ mt: 4 }}>
          Trust UstadonCall Company (Mr UstadonCall) for all your home appliances repair and installation needs. Book now and experience professional service at affordable rates!
        </Typography>
      </Container>
    </Box>
  );
};

export default HomeAppliancesServiceDescription;