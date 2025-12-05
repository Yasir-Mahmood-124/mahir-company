
import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';

const HandymanServiceDescription: React.FC = () => {
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
          Best Handymen Services in Pakistan
        </Typography>
        
        <Typography paragraph>
          Your old painter is charging you double the market rate. You have finally decided to give a decorative look to your ceiling. Your kitchen renovation is long due. Trusting someone to perform a flawless job for your aluminum and glass replacement is challenging.
        </Typography>

        <Typography paragraph>
          So much to do, and so little time! All you need is an all-rounder solution provider who can do it all in no time. UstadonCall's Company (Mr UstadonCall) reliable handyman services are all you need to make life easier for yourself.
        </Typography>

        <Typography paragraph>
          One team, multi-skilled tradesman, and every job performed speak for its perfection – that's what describes us best. No job is too big or small for us to handle. We provide both residential as well as commercial handyman services in Pakistan.
        </Typography>

        <Typography paragraph>
          If you think the sight of a hammer or screwdriver can be daunting, let a professional handle it for you rather than making matters worse.
        </Typography>

        <Typography paragraph fontWeight="bold">
          Book us today and have our skilled craftsman handle your home maintenance and repair tasks.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Book our services NOW!
        </Typography>

        <Typography paragraph>
          It's super easy! You can simply book our service on the website with date and time and you'll be connected across with one of UstadonCall's Company (Mr UstadonCall) professional handyman to manage the task.
        </Typography>

        <Typography paragraph>
          Not only does it free up your time to focus on other important things in life, booking our handyman will guarantee you the security and comfort of knowing that things are being handled by a knowledgeable and skillful person.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Affordable, Upfront Pricing Plan
        </Typography>

        <Typography paragraph>
          We have a 'no hidden' charges policy. All are home maintenance and repair services are charged at a fixed flat rate. If in case, a task does require some additional items which are discovered on-site, the customer is informed of the charges beforehand.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Responsive, Prompt & Solution-Oriented
        </Typography>

        <Typography paragraph>
          Why still Google for painter services near me when we are just a call away! Selected only after passing a thorough selection process, UstadonCall's Company (Mr UstadonCall) team of vetted specialists come with years of experience and knowledge.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          High-quality Work with Desired Results
        </Typography>

        <Typography paragraph>
          We believe in delivering only high-quality results without compromising on results. This is why we have a long list of customers that keep coming back to us.
        </Typography>

        <Typography paragraph fontWeight="bold" sx={{ mt: 4 }}>
          We are here to serve you in the best and safest possible way that you could ask for.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Our Handyman Services Include:
        </Typography>

        <List dense>
          {[
            'Curtain Rod Installation',
            'Art Hanging',
            'Mirror Hanging',
            'Picture Hanging',
            'Shelf Hanging',
            'Room Clock Hanging',
            'Painting Services',
            'Kitchen Renovation',
            'Aluminum and Glass Replacement',
            'General Home Maintenance & Repairs',
          ].map((item, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemText primary={`• ${item}`} />
            </ListItem>
          ))}
        </List>

        <Typography paragraph fontWeight="bold" sx={{ mt: 4 }}>
          Trust UstadonCall Company (Mr UstadonCall) for all your handyman needs. Book now and experience professional service at affordable rates!
        </Typography>
      </Container>
    </Box>
  );
};

export default HandymanServiceDescription;