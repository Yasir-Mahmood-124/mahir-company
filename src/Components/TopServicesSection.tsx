import React from "react";
import Link from "next/link";
import { Box, Typography, Container, Chip } from "@mui/material";

interface Service {
  title: string;
  slug: string;
}

const services: Service[] = [
  { title: "UPS Installation Services", slug: "/ups-installation-services" },
  { title: "Furniture Repairing Services", slug: "/furniture-repairing-services" },
  { title: "Geyser Installation And Repair", slug: "/geyser-installation-and-repair" },
  { title: "Washing Machine Installation And Repair Services", slug: "/washing-machine-installation-and-repair-services" },
  { title: "Refrigerator Services", slug: "/refrigerator-services" },
  { title: "Furniture Polish Service", slug: "/furniture-polish-service" },
  { title: "Door Lock Replacement", slug: "/door-lock-replacement" },
  { title: "Mixer Tap Installation and Repair", slug: "/mixer-tap-installation-and-repair" },
  { title: "Water Tank Leakage Services", slug: "/water-tank-leakage-services" },
  { title: "AC Repair Services", slug: "/ac-repair-services" },
  { title: "Kitchen Hood Installation and Repairing", slug: "/kitchen-hood-installation-and-repairing" },
  { title: "Washroom Accessories Installation", slug: "/washroom-accessories-installation" },
];

const TopServicesSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#f5f5f5",
        py: { xs: 3, md: 5 },   // smaller padding
        mb: 3,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            borderRadius: "14px",
            p: { xs: 2.5, md: 3.5, lg: 4 },
            boxShadow: "0 3px 14px rgba(0,0,0,0.05)", // softer shadow
          }}
        >
          {/* Title */}
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.6rem", md: "2rem", lg: "2.3rem" }, // smaller heading
              fontWeight: 800,
              color: "#000",
              mb: { xs: 2.5, md: 3 },
              letterSpacing: "-0.01em",
            }}
          >
            Top Services
          </Typography>

          {/* Chips */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 1, md: 1.5 }, // reduced gap
            }}
          >
            {services.map((service, index) => (
              <Link key={index} href={service.slug} style={{ textDecoration: "none" }}>
                <Chip
                  label={service.title}
                  component="div"
                  clickable
                  sx={{
                    fontSize: { xs: "0.75rem", md: "0.85rem" }, // smaller font
                    fontWeight: 500,
                    px: 1.8,
                    py: 1.5, // smaller padding
                    height: "auto",
                    backgroundColor: "#fff",
                    border: "1.5px solid #ddd",
                    borderRadius: "40px", // smaller curve
                    color: "#333",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                      borderColor: "#000",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                    },
                    "& .MuiChip-label": {
                      padding: "0 6px", // reduced label padding
                    },
                  }}
                />
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopServicesSection;
