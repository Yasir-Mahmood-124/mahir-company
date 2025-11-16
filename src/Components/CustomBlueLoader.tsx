"use client";
import { useState, useEffect, ReactNode } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface BlueLoaderProps {
  children: ReactNode;
}

const BlueLoader = ({ children }: BlueLoaderProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          zIndex: 99999,
          gap: 3,
        }}
      >
        {/* Circular Progress */}
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            size={80}
            thickness={4}
            sx={{
              color: "#2196F3",
              "& .MuiCircularProgress-circle": {
                strokeLinecap: "round",
              },
            }}
          />
          
          {/* Inner Circle with Pulse Effect */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 50,
              height: 50,
              borderRadius: "50%",
              backgroundColor: "#2196F3",
              opacity: 0.2,
              animation: "pulse 1.5s ease-in-out infinite",
              "@keyframes pulse": {
                "0%": {
                  transform: "translate(-50%, -50%) scale(0.8)",
                  opacity: 0.3,
                },
                "50%": {
                  transform: "translate(-50%, -50%) scale(1)",
                  opacity: 0.1,
                },
                "100%": {
                  transform: "translate(-50%, -50%) scale(0.8)",
                  opacity: 0.3,
                },
              },
            }}
          />
        </Box>

        {/* Loading Text */}
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#2196F3",
            letterSpacing: "2px",
            animation: "fadeInOut 1.5s ease-in-out infinite",
            "@keyframes fadeInOut": {
              "0%, 100%": { opacity: 0.5 },
              "50%": { opacity: 1 },
            },
          }}
        >
          LOADING...
        </Typography>

        {/* Animated Dots */}
        <Box sx={{ display: "flex", gap: 1 }}>
          {[0, 1, 2].map((index) => (
            <Box
              key={index}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#2196F3",
                animation: `bounce 1.4s ease-in-out ${index * 0.2}s infinite`,
                "@keyframes bounce": {
                  "0%, 80%, 100%": {
                    transform: "scale(0.8)",
                    opacity: 0.5,
                  },
                  "40%": {
                    transform: "scale(1.2)",
                    opacity: 1,
                  },
                },
              }}
            />
          ))}
        </Box>
      </Box>
    );
  }

  return <>{children}</>;
};

export default BlueLoader;