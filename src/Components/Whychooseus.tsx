"use client";

import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import image from "@/assests/Images/image.png"
const UniqueSellingPoints: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={8}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left: Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={image} 
                alt="Reliable Service"
                width={600}
                height={400}
                style={{
                  borderRadius: "12px",
                  objectFit: "cover",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>

          {/* Right: Text Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "32px", sm: "42px", md: "48px" },
                  color: "#000",
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Our Unique Selling Points
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "#1976d2",
                    fontWeight: 800,
                  }}
                >
                  Make Us the Most Reliable Choice
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#000",
                  lineHeight: 1.8,
                  maxWidth: 580,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                We know your home is your safe space — that’s why we ensure every
                expert is verified, skilled, and trustworthy. With fast service,
                guaranteed results, and fair pricing, we make reliability our
                standard. You can trust us to deliver peace of mind with every
                visit.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default UniqueSellingPoints;
