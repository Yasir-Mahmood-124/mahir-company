import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';

const ElectricianServiceDescription: React.FC = () => {
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
          Best Electrician Services in Pakistan
        </Typography>
        
        <Typography paragraph>
          Mahir Company (Mr Mahir) is well aware that electrical chores can easily pile up on your to-do list, hence we bring to you the best electrician services in the city! From changing or installing a light bulb, LED TV mounting, water pump repairing to even water tank automatic switch installation, our Mahir's can do it all.
        </Typography>

        <Typography paragraph>
          If you need electrician services but feel like searching for "electrician home services near me" a bit overkill, you can always rely on our Mahirs. We provide you with the best solution and a range of electric maintenance and repair solutions.
        </Typography>

        <Typography paragraph>
          Our professionals come with years of experience to provide you with the best electrician services in Lahore and Karachi. With Mahir Company (Mr Mahir), you would not have to search for any other electrician services online, as 100% customer satisfaction is our priority. Moreover, we make the entire process as seamless as possible, leaving a big smile on the face of our customers.
        </Typography>

        <Typography paragraph>
          Whether you want to install a ceiling fan, repair damaged light switches or restoring your light fixtures as glowing beauty, we are there for every job.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Ceiling Fan Installation & Repair
        </Typography>

        <Typography paragraph>
          Not only the fans add a beautiful aesthetic touch to your rooms but provide air circulation which is very important in scorching hot days of summer.
        </Typography>

        <Typography paragraph>
          Mahir Company (Mr Mahir) provides you with the fastest and efficient ceiling fan installation service so that your fan is running in just no time. Our Mahir's take extra precautionary measures to ensure that the ceiling fan is installed properly for the optimal environment.
        </Typography>

        <Typography paragraph>
          Furthermore, installing fans on your own can be a very risky business, hence you should just leave it on our Mahirs by giving us a call.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          LED TV / LCD Mounting Services
        </Typography>

        <Typography paragraph>
          Mahir Company (Mr Mahir) has long years of experience in installing or mounting LED TVs at home. We guarantee you a clean installation with the highest quality of materials. Our Mahir's work hard at their job and they care about making our customers happy, hence your satisfaction is a top priority for us.
        </Typography>

        <Typography paragraph>
          Mahir Company (Mr Mahir) comes with a guarantee to handle your TV safely and installed properly so you can enjoy all your favorite content on it. If you want the best LED TV/LCD Mounting Services in town then you should give us a call. You will not only benefit from our amazing services but also our amazing prices too.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          UPS Installation and Repairing Services
        </Typography>

        <Typography paragraph>
          Having a UPS is certainly a necessity in our country and we don't want you to suffer during load shedding. Our professional UPS installation and repair services provide you with ease and seamless experience.
        </Typography>

        <Typography paragraph>
          You can rely on our Mahir's who will be at your doorstep in no time and will install or repair your UPS to make it up and running.
        </Typography>

        <Typography paragraph>
          Installing a UPS can go wrong in so many ways, hence you should always trust a professional who has extensive experience to provide you with a stress-free UPS installation job.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Water Pump Repairing Services
        </Typography>

        <Typography paragraph>
          Mahir Company (Mr Mahir) offers you efficient water pump repairing services that not only save a lot of your time of the day, but you get to experience some amazing rates too. Our amazing services have earned some great reviews and you will be giving us a great review too.
        </Typography>

        <Typography paragraph>
          So, if you are looking for an electrician who knows what he is doing while repairing your water pump, you should not hesitate to give us a call for a quick job.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Water Tank Automatic Switch Installation
        </Typography>

        <Typography paragraph>
          We offer water tank automatic switch installation services to you at the best affordable rates. We know it can be a hassle to find the right professional who would cleanly do the job, hence we provide you with our Mahir's who do a neat job.
        </Typography>

        <Typography paragraph>
          You can always give us a call for all your electrical services jobs and we will do it in no time. We value our customers and their feedback, hence our Mahir's do the jobs the way our customers recommend most efficiently.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Our Electrical Services Include:
        </Typography>

        <List dense>
          {[
            'Ceiling Fan Installation & Repair',
            'LED TV / LCD Mounting',
            'UPS Installation & Repair',
            'Water Pump Repair',
            'Water Tank Automatic Switch Installation',
            'Light Bulb Installation',
            'Light Switch Repair',
            'Light Fixture Restoration',
            'General Electrical Maintenance',
          ].map((item, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemText primary={`• ${item}`} />
            </ListItem>
          ))}
        </List>

        <Typography paragraph fontWeight="bold" sx={{ mt: 4 }}>
          Trust Mahir Company (Mr Mahir) for all your electrical needs. We guarantee quality service, professional workmanship, and complete customer satisfaction!
        </Typography>
      </Container>
    </Box>
  );
};

export default ElectricianServiceDescription;