"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";

type Product = {
  id: string;
  name: string;
  currentPrice: number;
  discountPrice: number;
  mainCategory: string;
  subCategory: string;
  service: string;
  description: string;
  reviews: number;
  includes: string[];
  notIncludes: string[];
  image?: string;
  subCategoryImage?: string; // ✅ NEW - For service cards
};

type ServicesSectionProps = {
  mainCategoryName?: string;
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  mainCategoryName = "Home Services" 
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [services, setServices] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();

        if (data.success) {
          const filteredServices = data.data.filter(
            (service: Product) => service.mainCategory === mainCategoryName
          );
          setServices(filteredServices);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [mainCategoryName]);

  // Get unique subCategories with their first service for image
  const uniqueSubCategoriesMap = services.reduce((acc: { [key: string]: Product }, service) => {
    const subCat = service.subCategory;
    if (!acc[subCat]) {
      acc[subCat] = service;
    }
    return acc;
  }, {});

  const uniqueSubCategories = Object.keys(uniqueSubCategoriesMap);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (services.length === 0) {
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
          <Typography variant="h6" color="text.secondary" sx={{ mt: 4 }}>
            No services available yet for "{mainCategoryName}". Add Service from the dashboard!
          </Typography>
        </Container>
      </Box>
    );
  }

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
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 3, sm: 4, md: 5 },
            justifyContent: "center",
          }}
        >
          {uniqueSubCategories.map((subCategory) => {
            const firstService = uniqueSubCategoriesMap[subCategory];
            
            const mainCategorySlug = mainCategoryName.toLowerCase().replace(/\s+/g, '-');
            const subCategorySlug = subCategory.toLowerCase().replace(/\s+/g, '-');

            // ✅ Priority: subCategoryImage > image > fallback CDN
            const displayImage = firstService.subCategoryImage || firstService.image;

            return (
              <Box
                key={subCategory}
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
                <Link 
                  href={`/Home/${mainCategorySlug}/${subCategorySlug}`} 
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1.5,
                      transition: "transform 0.25s ease, opacity 0.25s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        opacity: 0.9,
                      },
                    }}
                  >
                    {/* ✅ Service Image with priority */}
                    {displayImage ? (
                      <Image
                        src={displayImage}
                        alt={subCategory}
                        width={80}
                        height={80}
                        style={{ objectFit: "contain" }}
                      />
                    ) : (
                      <Image
                        src={`https://cdn.mrmahir.com/services/${subCategorySlug}.svg`}
                        alt={subCategory}
                        width={80}
                        height={80}
                        style={{ objectFit: "contain" }}
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/80?text=" + subCategory.charAt(0);
                        }}
                      />
                    )}

                    <Typography
                      sx={{
                        mt: 1,
                        color: "#000",
                        fontSize: { xs: "0.95rem", md: "1rem" },
                        fontWeight: 600,
                        textAlign: "center",
                      }}
                    >
                      {subCategory}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;