"use client";

import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import Image from "next/image";
import playstore from "@/assests/Images/playstore.svg"
import appstore from "@/assests/Images/AppleStore.svg"
interface WhyChooseUsSectionProps {
  mockupImage: string;
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ mockupImage }) => {
  const reasons = [
    {
      icon: <CheckCircleOutlineIcon color="primary" />,
      title: "Verified and Trained Technicians",
      description: "Connects you to verified and trained professionals.",
    },
    {
      icon: <AccessTimeIcon color="primary" />,
      title: "Saves Your Time",
      description: "Quick, easy and efficient booking process.",
    },
    {
      icon: <SupportAgentIcon color="primary" />,
      title: "Impeccable Customer Support",
      description: "Get instant help from our dedicated support team.",
    },
    {
      icon: <MonetizationOnIcon color="primary" />,
      title: "Cost-effectiveness",
      description: "Enjoy affordable and transparent pricing.",
    },
    {
      icon: <VerifiedUserIcon color="primary" />,
      title: "High-quality & Safety",
      description: "Reliable, safe and trusted professionals.",
    },
    {
      icon: <LocalShippingIcon color="primary" />,
      title: "Doorstep Services",
      description: "Save your travel time and effort.",
    },
    {
      icon: <SecurityIcon color="primary" />,
      title: "Secure Transactions",
      description: "We ensure safe and secure payments.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#fafafa" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* LEFT SIDE - Phone Mockup */}
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                position: "relative",
                display: "inline-block",
                transform: "rotate(-2deg)",
              }}
            >
              <Image
                src={mockupImage}
                alt="App Mockup"
                width={500}
                height={450}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "24px",
                //   boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT SIDE - Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              color="primary"
              sx={{ fontWeight: 600, mb: 1 }}
            >
              Why Choose Us?
            </Typography>

            <Stack spacing={3}>
              {reasons.map((item, index) => (
                <Box key={index} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                  <Box sx={{ mt: 0.5 }}>{item.icon}</Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>

            {/* App Store Buttons */}
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Image
                src={appstore}
                alt="App Store"
                width={130}
                height={100}
              />
              <Image
                src={playstore}
                alt="Google Play"
                width={130}
                height={100}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUsSection;
