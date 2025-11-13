"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import mobileimage from "./Images/mobile.webp";
import playstoreimg from "./Images/playstore.svg";
import appstore from "./Images/AppleStore.svg";

const BeauticianAppSection: React.FC = () => {
  return (
    <Box
      component="section"
      className="beautician-app"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #FFF8F9 0%, #FFE5EA 30%, #FFEEF2 70%, #FFF5F7 100%)",
      }}
    >
      {/* Top Curved Wave - Full Width */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "120px",
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
        >
          <path
            d="M0,40 Q360,0 720,40 T1440,40 L1440,0 L0,0 Z"
            fill="#FFD5DC"
            opacity="0.4"
          />
          <path
            d="M0,60 Q360,20 720,60 T1440,60 L1440,0 L0,0 Z"
            fill="#FFC5CE"
            opacity="0.3"
          />
        </svg>
      </Box>

      {/* Bottom Curved Wave - Full Width */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "120px",
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
        >
          <path
            d="M0,60 Q360,100 720,60 T1440,60 L1440,120 L0,120 Z"
            fill="#FFD5DC"
            opacity="0.4"
          />
          <path
            d="M0,40 Q360,80 720,40 T1440,40 L1440,120 L0,120 Z"
            fill="#FFC5CE"
            opacity="0.3"
          />
        </svg>
      </Box>

      {/* Top Right Decorative Leaf/Flower */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 60, md: 80 },
          right: { xs: 30, md: 80 },
          width: { xs: "100px", md: "150px" },
          height: { xs: "100px", md: "150px" },
          opacity: 0.9,
          zIndex: 1,
        }}
      >
        <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#E85D75"
            d="M100,30 L120,50 L110,70 L90,65 L85,85 L70,75 L60,90 L50,70 L35,75 L40,55 L25,45 L40,35 L35,15 L55,25 L65,10 L75,25 L90,20 Z"
          />
          <path
            fill="#FF8B9A"
            d="M75,40 L90,50 L85,65 L70,60 Z"
          />
          <path
            fill="#FFA5B0"
            d="M95,35 L105,20 L115,30 L105,45 Z"
          />
          <circle cx="120" cy="80" r="6" fill="#FFB8C3" />
          <circle cx="130" cy="95" r="4" fill="#FFC5CE" />
          <line x1="75" y1="45" x2="110" y2="25" stroke="#FF6B7A" strokeWidth="2" />
        </svg>
      </Box>

      {/* Bottom Right Large Curve/Circle */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: -100, md: -150 },
          right: { xs: -100, md: -150 },
          width: { xs: "300px", md: "450px" },
          height: { xs: "300px", md: "450px" },
          borderRadius: "50%",
          background: "radial-gradient(circle, #E85D75 0%, #FF8B9A 40%, transparent 70%)",
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      {/* Content Container - Centered */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: "relative", 
          zIndex: 2,
          py: { xs: 8, md: 12 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left - Mobile Image */}
          <Box
            sx={{
              flex: { xs: "1", md: "0 0 48%" },
              textAlign: "center",
            }}
          >
            <Box>
              <Image
                src={mobileimage}
                alt="beautician app"
                width={600}
                height={700}
                style={{
                  maxWidth: "100%",
                  width: "auto",
                  height: "auto",
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))",
                }}
                priority
              />
            </Box>
          </Box>

          {/* Right - Content */}
          <Box
            sx={{
              flex: { xs: "1", md: "0 0 48%" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Main Heading */}
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
                fontWeight: 700,
                color: "#000",
                lineHeight: 1.2,
                mb: 1,
              }}
            >
              Mahir Personal Care App
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem", lg: "2.3rem" },
                fontWeight: 700,
                color: "#000",
                lineHeight: 1.2,
                mb: 4,
              }}
            >
              User-friendly & Reliable
            </Typography>

            {/* On Time, Done Right */}
            <Typography
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4.5rem" },
                fontWeight: 700,
                color: "#B76E79",
                fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
                lineHeight: 1,
                mb: 1,
                textShadow: "2px 2px 4px rgba(183, 110, 121, 0.2)",
              }}
            >
              On Time, Done Right.
            </Typography>

            {/* Hand-drawn underline */}
            <Box
              sx={{
                width: { xs: "280px", md: "400px", lg: "500px" },
                height: "25px",
                mb: 5,
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='500' height='25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5,15 Q50,8 100,12 T200,15 T300,13 T400,16 T495,12' stroke='%23B76E79' stroke-width='3' fill='none' opacity='0.7'/%3E%3C/svg%3E")`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
              }}
            />

            {/* App Store Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 2.5,
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                width: "100%",
                maxWidth: "500px",
              }}
            >
              {/* App Store Button */}
              <Box
                component="a"
                href="https://apps.apple.com/pk/app/mr-mahir-home-maintenance/id1576178647"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Image
                  src={appstore}
                  alt="Download on App Store"
                  width={180}
                  height={60}
                  style={{
                    width: "180px",
                    height: "auto",
                  }}
                />
              </Box>

              {/* Play Store Button */}
              <Box
                component="a"
                href="https://play.google.com/store/apps/details?id=com.mrmahir.customer"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Image
                  src={playstoreimg}
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  style={{
                    width: "180px",
                    height: "auto",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BeauticianAppSection;