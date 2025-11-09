import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';

const ACServicesDescription: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: '#fff',
        py: 6,
        px: { xs: 2, md: 8 },
        minHeight: '100vh',        // full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // vertically center if you want
      }}
    >
      {/* Full width container, no maxWidth */}
      <Container maxWidth={false} sx={{ px: 0 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Best Air Conditioner Services in Pakistan
        </Typography>

        <Typography paragraph>
          Regardless of whether it's home or office,&nbsp;
          <strong>Air conditioner units</strong> are an indispensable piece of our day-by-day life. Having an air conditioner requires regular maintenance to function effectively and efficiently throughout its years of service.
        </Typography>

        <Typography paragraph>
          Particularly even before the late spring season begins, <strong>AC units</strong> should be overhauled to ensure they are working properly. If not, the efficiency of your air conditioner decreases, and your AC quits performing appropriately, hence delivering less cooling and paying greater power.
        </Typography>

        <Typography paragraph>
          Therefore, it's significant that you choose the right <strong>AC maintenance Service</strong>.
        </Typography>

        <Typography paragraph>
          For your AC to keep functioning properly, you have to do ordinary running tasks on your AC to appreciate more effectiveness without the need to replace it with a new one. If you choose to do your AC repairing yourself make sure that you shut down the unit before doing anything to your <strong>AC machine</strong>.
        </Typography>

        <Typography paragraph>
          If fixes or administrations are done on your own, know that you may wind up making more harm to the unit. One wrong move and the unit might undergo new issues. There are numerous cases where you require professional and experienced AC Technicians to do the job for you.
        </Typography>

        <Typography paragraph>
          Searching for those experts is a difficult task itself. That's where Mahir Company (Mr Mahir) jumps in, offering the best AC services in Lahore and Karachi,&nbsp; helping you find the best AC Technicians to do your job.
        </Typography>

        <Typography paragraph>
          Mahir Company (Mr Mahir) <strong>AC Repair Services</strong>&nbsp;has established itself as the leading channel that provides AC Service in Lahore and Karachi. We do all kinds of AC Repair, AC Technician Services, AC Installation, AC Maintenance, AC Gas Refilling, AC Advanced Piping Services, AC Mounting, and Dismounting &amp; all types of Air Conditioner Service &amp; Split AC Repair in Lahore and Karachi.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Our Honesty Goes a Long Way
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          We value your trust. We offer:
        </Typography>

        <List dense>
          {[
            'Exceptional Customer Service',
            '24/7 Repair Services – No Extra Charge',
            'Fast & Reliable',
            'Professionally Trained Expert Technicians',
            'No Hidden or Unexpected Charges',
            'Full Line of Major Air Conditioning Brands',
            '100% Guaranteed Financing',
            'No-Risk, Satisfaction Guarantee',
          ].map((item, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Why We Are Different
        </Typography>

        <List dense>
          {[
            'Best Price Guarantee',
            'Quick, Expert & Custom Solution',
            'Fast & Reliable Service',
            'All Makes & Models',
            'Respect & Honesty',
          ].map((item, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Our Services
        </Typography>

        <Typography paragraph>
          Our AC technicians have years of practical, in-field experience. They possess just the right knowledge and skills needed to diagnose and rule out any AC complication and give you a solution regarding all problems you may have.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          AC Technician Services
        </Typography>

        <Typography paragraph>
          If you are looking for the best AC technician in Lahore for your&nbsp;
          <strong>Split AC Repair and AC Installation Services</strong>, know that we are the best fit for that.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          AC Repair Services
        </Typography>

        <Typography paragraph>
          Mahir Company (Mr Mahir) offers various AC General Services such as AC Installation, AC Maintenance, AC Gas refilling, etc.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          AC Installation Services
        </Typography>

        <Typography paragraph>
          We have a perfect team of AC Technicians and who can get your AC Installation done in Lahore and Karachi. Our AC technicians are highly experienced in dealing with all types of AC units of any make and model.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          AC Maintenance Services
        </Typography>

        <Typography paragraph>
          Mahir Company (Mr Mahir) has extensive experience and vast knowledge of <strong>AC maintenance services</strong>. Our skilled technicians can work on all the prevailing AC Brands in the market.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          AC Gas Refilling Services
        </Typography>

        <Typography paragraph>
          We have grown tremendously ever since our formation and can carry out these critical and careful tasks such as gas refilling services with a flare.
        </Typography>

        <Typography paragraph fontStyle="italic">
          From servicing and repairing to maintenance &amp; support, we do it all. Call us today!
        </Typography>
      </Container>
    </Box>
  );
};

export default ACServicesDescription;
