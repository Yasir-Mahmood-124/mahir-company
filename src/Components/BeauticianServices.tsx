"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

type Service = {
  id: string;
  name: string;
  href: string;
  img: string;
  alt: string;
};

const services: Service[] = [
  { id: "makeup", name: "Makeup", href: "/makeup-services", img: "https://cdn.mrmahir.com/svgs/makeup3.svg", alt: "Makeup Services" },
  { id: "hair-treatment", name: "Hair Treatment", href: "/hair-treatment-services", img: "https://cdn.mrmahir.com/services/hair.svg", alt: "Hair Treatment" },
  { id: "waxing", name: "Waxing", href: "/waxing-services", img: "https://cdn.mrmahir.com/services/waxing.svg", alt: "Waxing Services" },
  { id: "massage", name: "Massage for Women", href: "/massage-services", img: "https://cdn.mrmahir.com/services/massage.svg", alt: "Massage Services" },
  { id: "mani-pedi", name: "Mani Pedi", href: "/mani-pedi-services", img: "https://cdn.mrmahir.com/services/nails.svg", alt: "Mani Pedi" },
  { id: "facial", name: "Facial", href: "/facial-services", img: "https://cdn.mrmahir.com/services/facial.svg", alt: "Facial Services" },
  { id: "mehndi", name: "Mehndi", href: "/mehndi-services", img: "https://cdn.mrmahir.com/services/mehndi.svg", alt: "Mehndi Services" },
  { id: "hair-styling", name: "Hair Styling & Hair Cut", href: "/hair-styling-and-hair-cut", img: "https://cdn.mrmahir.com/svgs/hair-cut-logo.svg", alt: "Hair Styling & Hair Cut" },
  { id: "beauty-deals", name: "Monthly Beauty Deals", href: "/monthly-beauty-deals", img: "https://cdn.mrmahir.com/services/service-packages.svg", alt: "Monthly Beauty Deals" },
  { id: "salon-packages", name: "Salon Packages", href: "/salon-packages", img: "https://cdn.mrmahir.com/services/service-packages.svg", alt: "Salon Packages" },
];

const ServicesSection: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
            mb: 1,
          }}
        >
          Services
        </Typography>
        <Typography
          sx={{
            color: "#6b7280",
            fontSize: { xs: "1rem", md: "1.1rem" },
            mb: { xs: 5, md: 7 },
          }}
        >
          Choose from our wide range of services
        </Typography>

        {/* Service Grid using CSS Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: { xs: 3, sm: 4, md: 5 },
            justifyItems: "center",
          }}
        >
          {services.map((service) => (
            <Link 
              key={service.id} 
              href={service.href} 
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1.5,
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    opacity: 0.9,
                  },
                }}
              >
                <Image
                  src={service.img}
                  alt={service.alt}
                  width={69}
                  height={69}
                  style={{ objectFit: "contain" }}
                />
                <Typography
                  sx={{
                    mt: 1,
                    color: "#000",
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  {service.name}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;