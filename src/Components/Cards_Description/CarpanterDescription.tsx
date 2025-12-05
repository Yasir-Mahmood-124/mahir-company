
import React from 'react';

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';

const CarpenterServicesDescription: React.FC = () => {
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
          Best Carpenter Services in Pakistan
        </Typography>

        <Typography paragraph>
          With extensive years of experience, our professionals are highly skilled at providing you with the best carpenter services. From wardrobe repairing, sofa repairing, floor polishing to door installation you can just search for any carpenter services in Lahore, and Karachi.
        </Typography>

        <Typography paragraph>
          Our uniqueness lies in the ability to provide our customers with a seamless and hassle-free experience of carpenter services. No job is too small for <strong>UstadonCall Company (Mr UstadonCall)</strong>!
        </Typography>

        <Typography paragraph>
          Carpentry is an essential service to make your home more beautiful and elegant that matches your style quotient, and we truly understand it. You can search up for a carpenter near you, and our UstadonCall's will be there for all your needs.
        </Typography>

        <Typography paragraph>
          Moreover, even if you need little carpenter handy jobs to be done, you can just count on us. We do maintenance and repair work in the best possible way.
        </Typography>

        <Typography paragraph fontWeight="bold">
          We are a one-stop solution for all your carpenter services needs.
        </Typography>

        {/* Wood Floor Polishing Section */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Wood Floor Polishing and Repair
        </Typography>

        <Typography paragraph>
          Wood floors are a stunning option for any home as it adds a hint of grace and style to your house. UstadonCall Company (Mr UstadonCall) is your answer to your "Wood Polish Services near me" as we provide you with value-added services without any stress.
        </Typography>

        <Typography paragraph>
          If you are thinking to give your wooden floor a whole new look then UstadonCall Company (Mr UstadonCall) carpenter services will get the job done right there and then for you.
        </Typography>

        <Typography paragraph>
          Whether you want to install a wooden floor or repair an old one, you can count on our professionals. Our UstadonCall's are equipped with long years of experience who know how to give a complete makeover to the house of our customers.
        </Typography>

        <Typography paragraph>
          Wood floors often get damaged by water, kids, pets, or moving the furniture, but that doesn't mean you need to replace them. You can simply give us a call or leave a message and we will perform some quick repairs on it, making it as new as it could get.
        </Typography>

        <Typography paragraph>
          UstadonCall Company (Mr UstadonCall) will get your flooring looking extravagant again – with the guarantee that you will be satisfied with our workmanship.
        </Typography>

        {/* Wardrobe Section */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Wardrobe Repairing and Installation
        </Typography>

        <Typography paragraph>
          Tired of searching for Wardrobe Repairing services near me? Well, UstadonCall Company (Mr UstadonCall) is here for you! You can increase your wardrobe storage and add more value to it by choosing our carpenter services.
        </Typography>

        <Typography paragraph>
          It can be difficult to find the perfect wardrobe that has enough space for all your items – and the one that looks aesthetically pleasing too. Moreover, if you want to repair an old wardrobe as well, you should not hesitate to give UstadonCall Company (Mr UstadonCall) a call.
        </Typography>

        <Typography paragraph>
          Our UstadonCall's are amazing at what they do, not just they will add more storage to your wardrobe, but can build something customized to your specifications. Our services are considered to be the best carpenter services online with a guarantee for high customer satisfaction.
        </Typography>

        <Typography paragraph>
          You can avail our affordable carpenter services for building a wardrobe or repairing an old one with just a call.
        </Typography>

        {/* Door Section */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Door Installation and Repair
        </Typography>

        <Typography paragraph>
          Doors are the gateway to and through your home, and they should always make a statement! Doors add an aesthetic and functionality to your home.
        </Typography>

        <Typography paragraph>
          If you aren't happy with your house doors or if they are broken in some way then UstadonCall Company (Mr UstadonCall) is there for you. We offer you the best rates and amazing service so next time you look for door installation services near me, just give us a call.
        </Typography>

        <Typography paragraph>
          Moreover, for expert door lock and catcher replacement services, call the professional, UstadonCall Company (Mr UstadonCall)! We are there for all your needs whether it be repairing dents, air leaks, squeaking, rotting or softwood, rolling problems we take care of everything.
        </Typography>

        {/* Sofa Section */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Sofa Repairing
        </Typography>

        <Typography paragraph>
          Don't want to throw your favorite sofa set? Well, you don't have to. UstadonCall Company (Mr UstadonCall) will fix and care for all your favorite sofa pieces, right in your own home! Whether it be stain removal, general cleaning, chipped, or ripped, we will assess the damage and do what it takes to revive your sofa.
        </Typography>

        <Typography paragraph>
          Our professionals make your sofa look good as new. All you need to do is to give us a call and our UstadonCall will be right there at your doorstep to revamp your sofa set.
        </Typography>

        {/* Services List */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Our Services
        </Typography>

        <List dense>
          {[
            'AC Services',
            'Carpenter Services',
            'Electrician Services',
            'Geyser Services',
            'Handyman Services',
            'Home Appliances Repair',
            'Home Inspection Services',
            'Painter Services',
            'Pest Control Services',
            'Plumber Services',
          ].map((item, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemText primary={`• ${item}`} />
            </ListItem>
          ))}
        </List>

        {/* Available Cities */}
        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
          Available in
        </Typography>

        <List dense>
          {['Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Multan'].map((city, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemText primary={`• ${city}`} />
            </ListItem>
          ))}
        </List>

        <Typography paragraph fontStyle="italic" sx={{ mt: 4 }}>
          From installation and repairing to maintenance & support, we do it all. Call us today!
        </Typography>
      </Container>
    </Box>
  );
};

export default CarpenterServicesDescription;