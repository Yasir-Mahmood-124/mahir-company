"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/assests/Images/120 x 30-02.png";

const CopyrightSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", md: "0.85rem" },
              color: "#333333",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            © Copyright {new Date().getFullYear()} UstadonCall.com (pvt) Ltd.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src={logo}
              alt=" UstadonCall"
              width={120}
              height={30}
              style={{
                width: "auto",
                height: "30px",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CopyrightSection;