"use client";
import { Box, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingContactButtons = () => {
  return (
    <>
      {/* Desktop Version - RIGHT SIDE */}
      <Box
        sx={{
          position: "fixed",
          right: 20,
          bottom: 20,
          zIndex: 9999,
          display: { xs: "none", sm: "none", md: "flex" },
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Phone Button */}
        <IconButton
          component="a"
          href="tel:03096661919"
          sx={{
            width: 56,
            height: 56,
            backgroundColor: "#2196F3",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "#1976D2",
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <PhoneIcon sx={{ color: "white", fontSize: 28 }} />
        </IconButton>

        {/* WhatsApp Button */}
        <IconButton
          component="a"
          href="https://wa.me/923096661919"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: 56,
            height: 56,
            backgroundColor: "#25D366",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "#1EBE57",
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <WhatsAppIcon sx={{ color: "white", fontSize: 28 }} />
        </IconButton>
      </Box>

      {/* Mobile Version - LEFT SIDE */}
      <Box
        sx={{
          position: "fixed",
          left: 20,
          bottom: 20,
          zIndex: 9999,
          display: { xs: "flex", sm: "flex", md: "none" },
          flexDirection: "column",
          gap: 2,
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
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            "&:active": {
              backgroundColor: "#1976D2",
              transform: "scale(0.95)",
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
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            "&:active": {
              backgroundColor: "#1EBE57",
              transform: "scale(0.95)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <WhatsAppIcon sx={{ color: "white", fontSize: 24 }} />
        </IconButton>
      </Box>
    </>
  );
};

export default FloatingContactButtons;