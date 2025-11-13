"use client";
import React from "react";
import { Box, Container, Typography, List, ListItem } from "@mui/material";
import Image from "next/image";
import image from "./Images/cont2.webp";

const BookServicesSection: React.FC = () => {
  const services = [
    "At Home Services",
    "Sought-after efficiency | 60 mins arrival time",
    "Branded Beauty Products",
    "Adherence to SOPs",
    "Exceptional Responsiveness",
    "Unrivaled Professionalism",
    "Unswerving Guarantee",
    "Unimpeded Safety",
  ];

  return (
    <Box
      component="section"
      className="book-services"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 5 },
          }}
        >
          {/* Left - Image */}
          <Box
            sx={{
              flex: { xs: "1", md: "0 0 50%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              className="why-choose-clipwrapper"
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "450px",
                padding: "20px",
              }}
            >
              {/* Decorative Border Circle */}
              <Box
                sx={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  right: "5%",
                  bottom: "5%",
                  border: "3px solid #FFB8C3",
                  borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
                  zIndex: 0,
                  opacity: 0.7,
                }}
              />

              {/* Red Dot Decoration */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "10%",
                  right: "8%",
                  width: "18px",
                  height: "18px",
                  backgroundColor: "#D1403C",
                  borderRadius: "50%",
                  zIndex: 2,
                }}
              />

              <Box
                className="image-clipper"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 15px 40px rgba(183, 110, 121, 0.25)",
                  },
                }}
              >
                <Image
                  src={image}
                  alt="beautician app"
                  width={450}
                  height={300}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                  priority
                />
              </Box>
            </Box>
          </Box>

          {/* Right - Text Content */}
          <Box
            sx={{
              flex: { xs: "1", md: "0 0 50%" },
            }}
          >
            <Box
              sx={{
                mx: { xs: 2, md: 0 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: "1.75rem", md: "2.25rem", lg: "2.5rem" },
                  fontWeight: 400,
                  mb: 3,
                  color: "#333",
                  lineHeight: 1.3,
                }}
              >
                Book Mahir Company's personal care services for
              </Typography>

              <List
                sx={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {services.map((service, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      padding: "8px 0",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: { xs: "center", md: "flex-start" },
                      "&::before": {
                        content: '"✓"',
                        color: "#B76E78",
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        marginRight: "12px",
                        flexShrink: 0,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        color: "#555",
                        lineHeight: 1.6,
                      }}
                    >
                      {service}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BookServicesSection;