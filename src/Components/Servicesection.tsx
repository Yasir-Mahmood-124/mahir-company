// ============================================
// ServicesSection.tsx
// ============================================
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
  { id: "ac", name: "AC Services", href: "/Home/handyman/ac-services", img: "https://cdn.mrmahir.com/services/ac.svg", alt: "AC Services" },
  { id: "plumber", name: "Plumber", href: "/Home/handyman/plumbing-services", img: "https://cdn.mrmahir.com/services/plumber.svg", alt: "Plumber" },
  { id: "electrician", name: "Electrician", href: "/Home/electrician-services", img: "https://cdn.mrmahir.com/services/electrician.svg", alt: "Electrician" },
  { id: "handyman", name: "Handyman", href: "/Home/handyman/handyman-services", img: "https://cdn.mrmahir.com/services/handyman.svg", alt: "Handyman" },
  { id: "carpenter", name: "Carpenter", href: "/Home/handyman/carpenter-services", img: "https://cdn.mrmahir.com/services/carpenter.svg", alt: "Carpenter" },
  { id: "painter", name: "Painter", href: "/Home/handyman/painter-services", img: "https://cdn.mrmahir.com/services/painter.svg", alt: "Painter" },
  { id: "appliances", name: "Home Appliances", href: "/Home/handyman/home-appliances-repair", img: "https://cdn.mrmahir.com/services/appliance-repair.svg", alt: "Home Appliances" },
  { id: "geyser", name: "Geyser", href: "/Home/handyman/geyser-services", img: "https://cdn.mrmahir.com/services/geyser.svg", alt: "Geyser" },
  { id: "pest", name: "Pest Control", href: "/Home/handyman/pest-control-services", img: "https://cdn.mrmahir.com/svgs/pest-control.svg", alt: "Pest Control" },
  { id: "inspection", name: "Home Inspection", href: "/Home/handyman/home-inspection-services", img: "https://cdn.mrmahir.com/svgs/house_inspection_updated.svg", alt: "Home Inspection" },
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

        {/* Service Grid using Flexbox */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 3, sm: 4, md: 5 },
            justifyContent: "center",
          }}
        >
          {services.map((service) => (
            <Box
              key={service.id}
              sx={{
                width: {
                  xs: "calc(50% - 12px)",
                  sm: "calc(33.333% - 21.33px)",
                  md: "calc(25% - 30px)",
                  lg: "calc(16.666% - 33.33px)",
                },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link href={service.href} style={{ textDecoration: "none" }}>
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
                    width={80}
                    height={80}
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
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
