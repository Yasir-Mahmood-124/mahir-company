// components/MobileAppSectionLeftImage.tsx
import React from "react";
import Image from "next/image";
import { Box, Typography, Button, Container } from "@mui/material";

interface MobileAppSectionLeftImageProps {
  appImage: string; // URL of the app screenshot image
}

const MobileAppSectionLeftImage: React.FC<MobileAppSectionLeftImageProps> = ({ appImage }) => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 12 },
        backgroundColor: "#000", // black background
        color: "#fff", // white text
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* Left Image */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Image
              src={appImage}
              alt="Book a Mahir App Screenshot"
              width={400}
              height={800} // approximate aspect ratio
              style={{
                width: '80%',
                maxWidth: 400,
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              }}
            />
          </Box>

          {/* Right Content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Get the Book a Mahir App
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Download our app and get trusted professionals at your doorstep in just a few clicks. Join <strong>100,000+</strong> active users!
            </Typography>

            <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-start" }, flexWrap: "wrap" }}>
              {/* Apple App Store Button */}
              <Button
                component="a"
                href="https://apps.apple.com/pk/app/mr-mahir-home-maintenance/id1576178647"
                target="_blank"
                sx={{
                  p: 1.5,
                  minWidth: 160,
                  borderRadius: 2,
                  backgroundColor: "#1a1a1a",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&:hover": { backgroundColor: "#333" },
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M16.365 1.43c0 1.6-1.29 3.43-3.004 3.43-0.376 0-1.038-0.372-1.71-0.372-1.06 0-2.127 0.58-2.71 1.58-1.036 1.78-0.885 4.31 0.51 5.72 0.64 0.65 1.24 1.48 2.12 1.48 0.82 0 1.07-0.43 2-0.43 0.93 0 1.57 0.43 2.12 0.43 0.86 0 1.44-0.83 2.08-1.48 0.72-0.73 1.16-1.73 1.46-2.63-1.86-0.74-2.64-3.24-2.64-4.92z" fill="#fff"/>
                </svg>
                <Typography variant="button" sx={{ fontWeight: 700, fontSize: "0.875rem" }}>
                  App Store
                </Typography>
              </Button>

              {/* Google Play Button */}
              <Button
                component="a"
                href="https://play.google.com/store/apps/details?id=com.example.app"
                target="_blank"
                sx={{
                  p: 1.5,
                  minWidth: 160,
                  borderRadius: 2,
                  backgroundColor: "#1a1a1a",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&:hover": { backgroundColor: "#333" },
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M3 2l15 10-15 10V2z" fill="#fff"/>
                </svg>
                <Typography variant="button" sx={{ fontWeight: 700, fontSize: "0.875rem" }}>
                  Google Play
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MobileAppSectionLeftImage;