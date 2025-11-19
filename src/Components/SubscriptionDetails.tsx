"use client";

import { Box, Typography, List, ListItem } from "@mui/material";

export default function SubscriptionDetails() {
  return (
    <Box sx={{ p: 3, maxWidth: "900px", mx: "auto" }}>

      {/* Main Heading */}
      <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom>
        Why Choose Mahir Company’s Home Maintenance Subscription?
      </Typography>

      {/* Section 1 */}
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Comprehensive Home Inspection:
      </Typography>
      <Typography gutterBottom>
        Your subscription begins with a thorough home inspection by our expert team.
        After inspection, your subscription will be confirmed or declined based on findings.
        Once confirmed, you become a premium customer for six months.
      </Typography>

      {/* Section 2 */}
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Premium Customer Status:
      </Typography>
      <Typography gutterBottom>
        Enjoy monthly visits and 24/7 emergency services to keep your home in excellent condition.
      </Typography>

      {/* Benefits Heading */}
      <Typography variant="h4" fontWeight={700} textAlign="center" mt={4} gutterBottom>
        Benefits of This Package
      </Typography>

      {/* Benefits List */}
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Special Discount:
      </Typography>
      <Typography gutterBottom>
        Exclusive discounts on all services for subscribers.
      </Typography>

      <Typography variant="h5" fontWeight={700} gutterBottom>
        24/7 Customer Support:
      </Typography>
      <Typography gutterBottom>
        Our support team is always available to assist you.
      </Typography>

      <Typography variant="h5" fontWeight={700} gutterBottom>
        Emergency Services:
      </Typography>
      <Typography gutterBottom>
        Priority access to emergency services any time.
      </Typography>

      <Typography variant="h5" fontWeight={700} gutterBottom>
        Save Money:
      </Typography>
      <Typography gutterBottom>
        Avoid sudden repair costs with routine maintenance included.
      </Typography>

      <Typography variant="h5" fontWeight={700} gutterBottom>
        Save Time:
      </Typography>
      <Typography gutterBottom>
        Monthly visits mean you don’t need to book technicians separately.
      </Typography>

      <Typography variant="h5" fontWeight={700} gutterBottom>
        Automated Reminders:
      </Typography>
      <Typography gutterBottom>
        Never miss your scheduled monthly service.
      </Typography>

      {/* Subscription Includes */}
      <Typography variant="h4" fontWeight={700} textAlign="center" mt={4} gutterBottom>
        What’s Included in the 6-Month Subscription?
      </Typography>

      <Typography variant="h5" fontWeight={700} gutterBottom>
        Monthly Visits:
      </Typography>
      <Typography gutterBottom>
        Our professionals provide essential maintenance every month.
      </Typography>

      {/* Electrical Services */}
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Electrical Services:
      </Typography>

      <Typography fontWeight={600}>Replacement Services:</Typography>
      <List>
        <ListItem>
          Switchboards, breakers, fan dimmers, doorbells, LED/SMD lights, ceiling fan capacitors.
        </ListItem>
      </List>

      <Typography fontWeight={600}>Inspection Services:</Typography>
      <List>
        <ListItem>
          UPS & battery, ceiling fan, exhaust fan motor, water pump.
        </ListItem>
      </List>

      {/* Appliances */}
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Appliance Services:
      </Typography>
      <Typography gutterBottom>
        Inspection for AC units, fridge, washing machine, microwave, cooking range, kitchen hood, water dispenser.
      </Typography>

      {/* Plumbing */}
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Plumbing Services:
      </Typography>

      <Typography fontWeight={600}>Replacement Services:</Typography>
      <List>
        <ListItem>Muslim shower, tap spindle, drain pipe, float valve, commode tank machine.</ListItem>
      </List>

      <Typography fontWeight={600}>Inspection Services:</Typography>
      <List>
        <ListItem>
          Mixer taps, commode, handle valve, geysers, flush tank, shower & drain blockage.
        </ListItem>
      </List>

      {/* Emergency */}
      <Typography variant="h5" fontWeight={700} gutterBottom>
        24/7 Emergency Service:
      </Typography>
      <Typography gutterBottom>
        Round-the-clock electrical and plumbing emergency support.
      </Typography>

      {/* Packages */}
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Flexible Packages:
      </Typography>
      <List>
        <ListItem>3–5 Marla Homes</ListItem>
        <ListItem>7–10 Marla Homes</ListItem>
        <ListItem>1 Kanal Homes</ListItem>
        <ListItem>2 Kanal Homes</ListItem>
      </List>
      <Typography gutterBottom>
        Each package is designed for your specific home size.
      </Typography>

      {/* Subscribe */}
      <Typography variant="h4" fontWeight={700} textAlign="center" mt={4} gutterBottom>
        How to Subscribe?
      </Typography>

      <Typography gutterBottom>
        Download the Mahir Company app or call us to get started.
      </Typography>

      <Typography gutterBottom>
        Don’t wait for issues to grow—subscribe now for a worry-free experience.
      </Typography>
    </Box>
  );
}
