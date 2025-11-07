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
        py: { xs: 4, md: 6 },
        mb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            borderRadius: "16px",
            p: { xs: 3, md: 4, lg: 5 },
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          }}
        >
          {/* Section Title */}
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
              fontWeight: 800,
              color: "#000",
              mb: { xs: 3, md: 4 },
              letterSpacing: "-0.02em",
            }}
          >
            Top Services
          </Typography>

          {/* Services Tags */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 1.5, md: 2 },
            }}
          >
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.slug}
                style={{ textDecoration: "none" }}
              >
                <Chip
                  label={service.title}
                  component="div"
                  clickable
                  sx={{
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
                    fontWeight: 500,
                    px: 2,
                    py: 2.5,
                    height: "auto",
                    backgroundColor: "#fff",
                    border: "2px solid #e0e0e0",
                    borderRadius: "50px",
                    color: "#333",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                      borderColor: "#000",
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                    },
                    "& .MuiChip-label": {
                      padding: "0 8px",
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