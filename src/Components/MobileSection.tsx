"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Button } from "@mui/material";
import becomeMahir from "@/assests/Images/become-mahir.webp";
import PlayStoreLogo from "@/assests/Images/playstore.svg"; // Add your Play Store logo here

const BecomeMahirSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 12 },
        backgroundColor: "#f5f5f5",
        color: "#000",
        position: "relative",
        overflow: "hidden",
      }}
      className="become-mahir"
    >
      <Container maxWidth="lg">
        <Box
          className="line"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Left Image */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 300, md: 450 },
                height: { xs: 400, md: 550 },
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              {/* subtle fade (top & bottom) */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(245,245,245,1) 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 75%, rgba(245,245,245,1) 100%)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />

              <Image
                src={becomeMahir}
                alt="Become Mahir"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  transition: "transform 0.5s ease",
                }}
                className="hover:scale-105"
                priority
              />
            </Box>
          </Box>

          {/* Right Content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.8rem" },
                color: "#000",
              }}
            >
              Become a Mahir
            </Typography>

            <Typography
              sx={{
                mb: 3,
                fontSize: "1.1rem",
                color: "#333",
                lineHeight: 1.7,
                maxWidth: 500,
              }}
            >
              Join Pakistan's fastest-growing platform for skilled professionals.
              Get access to thousands of customers, earn on your own terms, and
              grow your business with the <strong>Book a Mahir</strong> app.
            </Typography>

            <Typography sx={{ mb: 1.5, fontSize: "1.2rem", color: "#000" }}>
              <strong>161+</strong> Home Maintenance Services
            </Typography>
            <Typography sx={{ mb: 4, fontSize: "1.2rem", color: "#000" }}>
              <strong>38+</strong> Personal Care Services
            </Typography>

            {/* Arrow + Play Store Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              {/* Arrow */}
              <Box sx={{ width: 160, display: "flex" }}>
                <svg
                  width="160"
                  height="40"
                  viewBox="0 0 313 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M78.4717 22.1659C59.9452 21.4494 41.2821 20.3306 22.5239 18.4178C21.4737 18.3196 20.2956 18.6559 19.3366 17.5478C19.3138 16.8416 19.8506 16.5509 20.229 16.2149C23.3427 13.4847 26.5024 10.7811 29.57 8.0243C31.8806 5.93934 31.8802 3.49035 29.7359 1.5593C27.6177 -0.310475 24.7237 -0.410425 22.2486 1.53336C15.1217 7.16743 8.91544 13.6565 1.90685 19.4051C-1.04674 21.8581 0.640104 25.3269 5.20941 27.3182C7.37875 28.2472 9.4959 29.0537 11.6452 30.0175C16.7741 32.4242 21.8829 34.8655 27.1396 36.8378C28.3926 37.3302 29.6918 37.8493 30.9849 38.2724C32.4824 38.7674 33.9294 38.8174 34.6357 37.7005C35.3621 36.5489 34.5092 35.3635 33.3517 34.2794C32.1482 33.1687 30.7784 32.2393 29.3287 31.4485C27.1671 30.2929 25.0317 29.1986 22.7779 27.9898C23.6332 27.4671 24.6095 27.7998 25.4352 27.8607C33.4743 28.5286 41.4994 29.3271 49.4802 29.7765C75.0216 31.124 100.472 32.0958 126.006 33.6699C158.053 35.678 249.407 44.9307 280.975 44.9991C289.996 45.0323 299.054 45.3187 307.801 44.5472C308.906 44.4455 309.984 44.2824 311.062 44.1194C311.677 44.0125 312.101 43.7032 312.105 43.0583C312.056 42.2908 311.51 41.7448 310.686 41.3614C308.9 40.5148 307.044 40.3211 305.234 40.1541C291.924 39.0302 278.633 37.8716 265.472 37.342C247.058 36.6441 169.136 27.9849 150.567 26.5969C126.462 24.7851 102.409 23.0957 78.4717 22.1659Z"
                    fill="#000"
                  />
                </svg>
              </Box>

              {/* Play Store Logo */}
              <Box
                component="a"
                href="https://play.google.com/store/apps/details?id=com.mrmahir.technician"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "block",
                  cursor: "pointer",
                  transition: "opacity 0.3s",
                  '&:hover': { opacity: 0.8 }
                }}
              >
                <Image
                  src={PlayStoreLogo}
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  style={{
                    objectFit: "contain"
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

export default BecomeMahirSection;