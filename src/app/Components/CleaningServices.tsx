"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Grid,
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
  { id: "sofa-cleaning", name: "Sofa Cleaning", href: "/Home/sofa-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/sofa.svg", alt: "Sofa Cleaning Service" },
  { id: "chair-cleaning", name: "Chair Cleaning", href: "/Home/chair-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/chair.svg", alt: "Chair Cleaning" },
  { id: "carpet-cleaning", name: "Carpet Cleaning", href: "/Home/carpet-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/carpet.svg", alt: "Carpet Cleaning" },
  { id: "curtain-cleaning", name: "Curtain Cleaning", href: "/Home/curtain-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/curtain.svg", alt: "Curtain Cleaning" },
  { id: "mattress-cleaning", name: "Mattress Cleaning", href: "/Home/mattress-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/mattress.svg", alt: "Mattress Cleaning" },
  { id: "plastic-water-tank-cleaning", name: "Plastic Water Tank Cleaning", href: "/Home/plastic-water-tank-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/water_tank_plastic.svg", alt: "Plastic Water Tank Cleaning" },
  { id: "cement-water-tank-cleaning", name: "Cement Water Tank Cleaning", href: "/Home/cement-water-tank-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/water_tank_cement.svg", alt: "Cement Water Tank Cleaning" },
  { id: "deep-cleaning", name: "Deep Cleaning", href: "/Home/house-deep-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/commercial_deep_cleaning.svg", alt: "Deep Cleaning" },
  { id: "car-detailing", name: "Car Detailing", href: "/Home/car-detailing-services", img: "https://cdn.mrmahir.com/svgs/detailing.svg", alt: "Car Detailing" },
  { id: "commercial-deep-cleaning", name: "Commercial Deep Cleaning", href: "/Home/commercial-deep-cleaning-services", img: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/commercial_deep_cleaning.svg", alt: "Commercial Deep Cleaning" },
  { id: "solar-panel-cleaning", name: "Solar Panel Cleaning", href: "/Home/solar-panel-cleaning-services", img: "https://cdn.mrmahir.com/svgs/solar_cleaning.svg", alt: "Solar Panel Cleaning" },
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

        {/* Service Grid */}
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 5 }}
          justifyContent="center"
        >
          {services.map((service) => (
            <Grid
              item
              key={service.id}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              sx={{
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CleaningServices;