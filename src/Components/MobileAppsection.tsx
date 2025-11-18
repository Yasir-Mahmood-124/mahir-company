"use client";
import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";
import appView from "@/assests/Images/app-view.webp";
import appStoreIcon from "@/assests/Images/AppleStore.svg";
import playStoreIcon from "@/assests/Images/playstore.svg";

const MobileAppSection = () => {
  return (
    <Box
      component="section"
      sx={{
        background: "linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%)",
        py: { xs: 4, md: 7 }, // smaller padding
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", lg: "row" },
            alignItems: "center",
            gap: { xs: 4, lg: 7 }, // smaller gap
          }}
        >
          {/* Left Side */}
          <Box
            sx={{
              px: { xs: 2, md: 4 },
              maxWidth: { lg: "700px" }, // reduced
              width: "100%",
            }}
          >
            {/* Heading */}
            <Typography
              sx={{
                fontSize: { xs: "2.4rem", md: "3.8rem", lg: "4.8rem" }, // smaller fonts
                fontWeight: 700,
                mb: 2,
                color: "#000",
                lineHeight: 1.1,
              }}
            >
              Book a  UstadonCall
            </Typography>

            {/* Paragraph */}
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", md: "1.1rem", lg: "1.2rem" },
                color: "#444",
                mb: 2,
                maxWidth: "520px",
                lineHeight: 1.5,
              }}
            >
              Experience convenience like never before! Download the UstadonCall App to
              book trusted professionals for home maintenance, repairs, and services —
              anytime, anywhere.
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                fontSize: { xs: "1.4rem", md: "1.8rem", lg: "2.1rem" }, // smaller
                fontWeight: 500,
                color: "#000",
                mb: 3,
              }}
            >
              100,000 + Active Users
            </Typography>

            {/* Store Buttons */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2.5,
                flexWrap: "wrap",
              }}
            >
              {/* Apple Store */}
              <Box
                component="a"
                href="#"
                sx={{
                  display: "block",
                  textDecoration: "none",
                  transition: "0.2s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Box
                  sx={{
                    borderRadius: "12px",
                    px: 2,
                    py: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    minWidth: "160px", // smaller
                  }}
                >
                  <Image src={appStoreIcon} alt="App Store" width={110} height={110} />
                  <Box>
                    <Typography sx={{ fontSize: "10px", color: "#000", lineHeight: 1 }}>
                      Available on the
                    </Typography>
                    <Typography sx={{ fontSize: "16px", color: "#000", fontWeight: 700 }}>
                      App Store
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Google Play */}
              <Box
                component="a"
                href="#"
                sx={{
                  display: "block",
                  textDecoration: "none",
                  transition: "0.2s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Box
                  sx={{
                    borderRadius: "12px",
                    px: 2,
                    py: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    minWidth: "160px",
                  }}
                >
                  <Image src={playStoreIcon} alt="Google Play" width={110} height={110} />
                  <Box>
                    <Typography sx={{ fontSize: "10px", color: "#000", lineHeight: 1 }}>
                      GET IT ON
                    </Typography>
                    <Typography sx={{ fontSize: "16px", color: "#000", fontWeight: 700 }}>
                      Google Play
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Right Side - Phone Mockup */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-end" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 220, sm: 260, md: 300, lg: 340 }, // 🔥 smaller width
                height: { xs: 440, sm: 520, md: 600, lg: 640 }, // 🔥 smaller height
                borderRadius: "26px",
                overflow: "hidden",
              }}
            >
              <Image
                src={appView}
                alt="App View"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MobileAppSection;
