"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/assests/Images/logo design-02.png";

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
              width={75}
              height={29}
              style={{
                width: "auto",
                height: "29px",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CopyrightSection;