
// ============================================
// PainterBanner.tsx (HeroSection)
// ============================================
"use client";

import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { Star, CheckCircle } from "@mui/icons-material";

interface StatItemProps {
  icon: React.ReactNode;
  rating: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, rating, label }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: { xs: 2, md: 3 },
        borderRadius: 3,
        bgcolor: "white",
        transition: "all 0.3s",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 6,
        },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent={{ xs: "center", md: "flex-start" }}
        gap={2}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: "50%",
            bgcolor: "#1a1a1a",
            color: "white",
          }}
        >
          {icon}
        </Box>
        <Box textAlign={{ xs: "center", md: "left" }}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              color: "#1a1a1a",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            {rating}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
          >
            {label}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        color: "white",
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
            gap: 4,
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              variant="h1"
              fontWeight={700}
              gutterBottom
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                mb: 2,
              }}
            >
              Painter Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                mb: 4,
                opacity: 0.95,
                fontWeight: 400,
              }}
            >
              Find Home Painting Services, Interior, Exterior Paint Services
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                gap: 2,
              }}
            >
              <StatItem
                icon={<Star sx={{ fontSize: 28 }} />}
                rating="4.4/5"
                label="Average rating"
              />
              <StatItem
                icon={
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ fontSize: "1.25rem" }}
                    >
                      Rs
                    </Typography>
                  </Box>
                }
                rating="800"
                label="Start from"
              />
              <StatItem
                icon={<CheckCircle sx={{ fontSize: 28 }} />}
                rating="55754"
                label="Done order"
              />
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;