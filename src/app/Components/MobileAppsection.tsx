"use client";
import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";
import appView from "./Images/app-view.webp";
import appStoreIcon from "./Images/AppleStore.svg";
import playStoreIcon from "./Images/playstore.svg";

const MobileAppSection = () => {
  return (
    <Box
      component="section"
      sx={{
        background: "linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%)", // 🌤 light background
        py: { xs: 6, md: 10 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "center",
            gap: { xs: 6, lg: 10 },
            position: "relative",
          }}
        >
          {/* Left Side - Text Content */}
          <Box
            sx={{
              borderRadius: "36px",
              px: { xs: 3, md: 5, lg: 6 },
              maxWidth: { lg: "850px" },
              width: "100%",
              position: "relative",
            }}
          >
            {/* Heading */}
            <Typography
              sx={{
                fontSize: { xs: "3.2rem", md: "5rem", lg: "6rem" },
                fontWeight: 700,
                color: "#000",
                mb: 3,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Book a Mahir
            </Typography>

            {/* Short Paragraph */}
            <Typography
              sx={{
                fontSize: { xs: "1.1rem", md: "1.3rem", lg: "1.4rem" },
                color: "#444",
                mb: 3, // 🔹 reduced from 4 to 3 (brings buttons closer)
                maxWidth: "600px",
                lineHeight: 1.6,
              }}
            >
              Experience convenience like never before! Download the Mahir App
              to book trusted professionals for your home maintenance, repairs,
              and services — anytime, anywhere.
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                fontSize: { xs: "1.8rem", md: "2.2rem", lg: "2.5rem" },
                fontWeight: 500,
                color: "#000",
                mb: 4, // 🔹 reduced spacing before buttons
                letterSpacing: "0.02em",
              }}
            >
              100,000 + Active Users
            </Typography>

            {/* Buttons Row with Arrow */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                flexWrap: { xs: "wrap", xl: "nowrap" },
              }}
            >
              {/* Apple App Store Badge */}
              <Box
                component="a"
                href="https://apps.apple.com/pk/app/mr-mahir-home-maintenance/id1576178647"
                target="_blank"
                sx={{
                  display: "block",
                  cursor: "pointer",
                  textDecoration: "none", // 🔹 no underline
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Box
                  sx={{
                    borderRadius: "14px",
                    px: 3,
                    py: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    minWidth: "200px",
                  }}
                >
                  <Image
                    src={appStoreIcon}
                    alt="App Store"
                    width={170}
                    height={160}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "11px",
                        color: "#000",
                        lineHeight: 1,
                        mb: 0.5,
                        fontWeight: 400,
                        textDecoration: "none", // 🔹 remove underline
                      }}
                    >
                      Available on the
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#000",
                        fontWeight: 700,
                        lineHeight: 1,
                        textDecoration: "none", // 🔹 remove underline
                      }}
                    >
                      App Store
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Google Play Badge */}
              <Box
                component="a"
                href="https://play.google.com/store/apps/details?id=com.example.app"
                target="_blank"
                sx={{
                  display: "block",
                  cursor: "pointer",
                  textDecoration: "none", // 🔹 no underline
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Box
                  sx={{
                    borderRadius: "14px",
                    px: 3,
                    py: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    minWidth: "200px",
                  }}
                >
                  <Image
                    src={playStoreIcon}
                    alt="Google Play"
                    width={150}
                    height={150}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "11px",
                        color: "#000",
                        lineHeight: 1,
                        mb: 0.5,
                        fontWeight: 400,
                        textDecoration: "none", // 🔹 remove underline
                      }}
                    >
                      GET IT ON
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#000",
                        fontWeight: 700,
                        lineHeight: 1,
                        textDecoration: "none", // 🔹 remove underline
                      }}
                    >
                      Google Play
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Curved Arrow */}
              <Box
                sx={{
                  display: { xs: "none", xl: "block" },
                  ml: 2,
                }}
              >
                <svg width="250" height="80" viewBox="0 0 250 80">
                  <defs>
                    <marker
                      id="arrowhead-black"
                      markerWidth="16"
                      markerHeight="16"
                      refX="14"
                      refY="8"
                      orient="auto"
                    >
                      <polygon points="0 0, 16 8, 0 16" fill="black" />
                    </marker>
                  </defs>
                  <path
                    d="M 10 40 Q 125 10, 235 40"
                    stroke="black"
                    strokeWidth="5"
                    fill="none"
                    markerEnd="url(#arrowhead-black)"
                  />
                </svg>
              </Box>
            </Box>
          </Box>

          {/* Right Side - Phone Mockup */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-end" },
              alignItems: "center",
              mt: { xs: 4, lg: 0 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 300, sm: 350, md: 400, lg: 420 },
                height: { xs: 600, sm: 700, md: 800, lg: 840 },
                borderRadius: "32px",
                overflow: "hidden",
              }}
            >
              <Image
                src={appView}
                alt="Book a Mahir App"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MobileAppSection;
