
// ============================================
// CleaningServices.tsx
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
  { id: "sofa-cleaning", name: "Sofa Cleaning", href: "/Home/cleaning-services/sofa-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/sofa.svg", alt: "Sofa Cleaning Service" },
  { id: "chair-cleaning", name: "Chair Cleaning", href: "/Home/cleaning-services/chair-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/chair.svg", alt: "Chair Cleaning" },
  { id: "carpet-cleaning", name: "Carpet Cleaning", href: "/Home/cleaning-services/carpet-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/carpet.svg", alt: "Carpet Cleaning" },
  { id: "curtain-cleaning", name: "Curtain Cleaning", href: "/Home/cleaning-services/curtain-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/curtain.svg", alt: "Curtain Cleaning" },
  { id: "mattress-cleaning", name: "Mattress Cleaning", href: "/Home/cleaning-services/mattress-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/mattress.svg", alt: "Mattress Cleaning" },
  { id: "plastic-water-tank-cleaning", name: "Plastic Water Tank Cleaning", href: "/Home/cleaning-services/plastic-water-tank-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/water_tank_plastic.svg", alt: "Plastic Water Tank Cleaning" },
  { id: "cement-water-tank-cleaning", name: "Cement Water Tank Cleaning", href: "/Home/cement-water-tank-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/water_tank_cement.svg", alt: "Cement Water Tank Cleaning" },
  { id: "deep-cleaning", name: "Deep Cleaning", href: "/Home/cleaning-services/house-deep-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/commercial_deep_cleaning.svg", alt: "Deep Cleaning" },
  { id: "car-detailing", name: "Car Detailing", href: "/Home/cleaning-services/car-detailing-services", img: "https://cdn.mrmahir.com/svgs/detailing.svg", alt: "Car Detailing" },
  { id: "commercial-deep-cleaning", name: "Commercial Deep Cleaning", href: "/Home/cleaning-services/commercial-deep-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/commercial_deep_cleaning.svg", alt: "Commercial Deep Cleaning" },
  { id: "solar-panel-cleaning", name: "Solar Panel Cleaning", href: "/Home/cleaning-services/solar-panel-cleaning-services", img: "https://cdn.mrmahir.com/svgs/solar_cleaning.svg", alt: "Solar Panel Cleaning" },
];

const CleaningServices: React.FC = () => {
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

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(6, 1fr)",
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
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CleaningServices;
