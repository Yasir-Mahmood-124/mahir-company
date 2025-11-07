"use client";

import { Box, Container, IconButton } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import Image from "next/image";
import React, { useState } from "react";
import img from "./Images/videobg-sub.webp"
const FullVideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 300, md: 550 },
        overflow: "hidden",
        borderRadius: "20px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
      }}
    >
      {/* Background Image */}
      {!isPlaying && (
        <Image
          src={img}
          alt="Sub muj pe chor do"
          fill
          priority
          style={{
            objectFit: "cover",
            filter: "brightness(0.7)",
          }}
        />
      )}

      {/* Video Frame */}
      {isPlaying && (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/your_video_id_here?autoplay=1"
          title="YouTube video player"
          style={{
            border: "none",
            position: "absolute",
            inset: 0,
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      {/* Play Button */}
      {!isPlaying && (
        <Container
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={() => setIsPlaying(true)}
            sx={{
              backgroundColor: "rgba(255,255,255,0.25)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.4)",
              },
              borderRadius: "50%",
              p: 1,
            }}
          >
            <PlayCircleFilledWhiteIcon
              sx={{
                fontSize: { xs: 70, md: 100 },
                color: "#fff",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))",
              }}
            />
          </IconButton>
        </Container>
      )}
    </Box>
  );
};

export default FullVideoSection;
