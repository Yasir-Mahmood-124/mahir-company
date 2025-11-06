"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import image1 from "./Images/download (1).png";
import image2 from "./Images/download (2).png";
import image3 from "./Images/download (3).png";
import image4 from "./Images/download (4).png";

const items = [image1, image2, image3, image4, image1, image3];

const AutoCarousel = () => {
  return (
    <Box
      sx={{
        py: 5,
        overflow: "hidden",
        bgcolor: "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            gap: 6,
            animation: "scroll 22s linear infinite",
            width: "max-content",
            alignItems: "center",
            "@keyframes scroll": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {[...items, ...items].map((img, i) => (
            <Box
              key={i}
              sx={{
                minWidth: 220,
                height: 150,
                borderRadius: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "1px solid #eee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.08)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box sx={{ position: "relative", width: 120, height: 120 }}>
                <Image
                  src={img}
                  alt="carousel"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AutoCarousel;
