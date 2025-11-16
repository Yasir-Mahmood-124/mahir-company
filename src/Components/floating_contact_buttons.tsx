"use client";
import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatIcon from "@mui/icons-material/Chat";

const FloatingContactButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Desktop Version - Hover to Expand */}
      <Box
        sx={{
          position: "fixed",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 9999,
          display: { xs: "none", md: "flex" }, // Hide on mobile, show on desktop
          alignItems: "center",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Expanded Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mr: 1,
            opacity: isExpanded ? 1 : 0,
            transform: isExpanded ? "translateX(0)" : "translateX(20px)",
            transition: "all 0.3s ease",
            pointerEvents: isExpanded ? "all" : "none",
          }}
        >
          {/* Phone Button with Number */}
          <Box
            component="a"
            href="tel:03096661919"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              backgroundColor: "white",
              borderRadius: "50px",
              padding: "12px 20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              sx={{
                width: 45,
                height: 45,
                borderRadius: "50%",
                backgroundColor: "#2196F3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PhoneIcon sx={{ color: "white", fontSize: 24 }} />
            </Box>
            <Typography
              sx={{
                color: "#000",
                fontWeight: 600,
                fontSize: "16px",
                whiteSpace: "nowrap",
              }}
            >
              0309 6661919
            </Typography>
          </Box>

          {/* WhatsApp Button */}
          <Box
            component="a"
            href="https://wa.me/923096661919"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              backgroundColor: "white",
              borderRadius: "50px",
              padding: "12px 20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              sx={{
                width: 45,
                height: 45,
                borderRadius: "50%",
                backgroundColor: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <WhatsAppIcon sx={{ color: "white", fontSize: 24 }} />
            </Box>
            <Typography
              sx={{
                color: "#000",
                fontWeight: 600,
                fontSize: "16px",
                whiteSpace: "nowrap",
              }}
            >
              WhatsApp
            </Typography>
          </Box>

          {/* Chat Button */}
          <Box
            component="a"
            href="#chat"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              backgroundColor: "white",
              borderRadius: "50px",
              padding: "12px 20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              sx={{
                width: 45,
                height: 45,
                borderRadius: "50%",
                backgroundColor: "#FF6B6B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ChatIcon sx={{ color: "white", fontSize: 24 }} />
            </Box>
            <Typography
              sx={{
                color: "#000",
                fontWeight: 600,
                fontSize: "16px",
                whiteSpace: "nowrap",
              }}
            >
              Live Chat
            </Typography>
          </Box>
        </Box>

        {/* Collapsed Icons Bar */}
        <Box
          sx={{
            backgroundColor: "transparent",
            borderRadius: "30px 0 0 30px",
            padding: "15px 8px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <IconButton
            component="a"
            href="tel:03096661919"
            sx={{
              width: 50,
              height: 50,
              backgroundColor: "#2196F3",
              "&:hover": {
                backgroundColor: "#1976D2",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <PhoneIcon sx={{ color: "white", fontSize: 24 }} />
          </IconButton>

          <IconButton
            component="a"
            href="https://wa.me/923096661919"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: 50,
              height: 50,
              backgroundColor: "#25D366",
              "&:hover": {
                backgroundColor: "#1EBE57",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <WhatsAppIcon sx={{ color: "white", fontSize: 24 }} />
          </IconButton>

          <IconButton
            component="a"
            href="#chat"
            sx={{
              width: 50,
              height: 50,
              backgroundColor: "#FF6B6B",
              "&:hover": {
                backgroundColor: "#FF5252",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <ChatIcon sx={{ color: "white", fontSize: 24 }} />
          </IconButton>
        </Box>
      </Box>

      {/* Mobile Version - All Buttons on Left Side */}
      <Box
        sx={{
          position: "fixed",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 9999,
          display: { xs: "flex", md: "none" }, // Show on mobile, hide on desktop
          flexDirection: "column",
          gap: 2,
          backgroundColor: "transparent",
          padding: "10px 6px",
        }}
      >
        {/* Phone Button */}
        <IconButton
          component="a"
          href="tel:03096661919"
          sx={{
            width: 50,
            height: 50,
            backgroundColor: "#2196F3",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            "&:hover": {
              backgroundColor: "#1976D2",
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <PhoneIcon sx={{ color: "white", fontSize: 24 }} />
        </IconButton>

        {/* WhatsApp Button */}
        <IconButton
          component="a"
          href="https://wa.me/923096661919"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: 50,
            height: 50,
            backgroundColor: "#25D366",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            "&:hover": {
              backgroundColor: "#1EBE57",
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <WhatsAppIcon sx={{ color: "white", fontSize: 24 }} />
        </IconButton>

        {/* Chat Button */}
        <IconButton
          component="a"
          href="#chat"
          sx={{
            width: 50,
            height: 50,
            backgroundColor: "#FF6B6B",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            "&:hover": {
              backgroundColor: "#FF5252",
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <ChatIcon sx={{ color: "white", fontSize: 24 }} />
        </IconButton>
      </Box>
    </>
  );
};

export default FloatingContactButtons;