"use client";

import React, { useState } from "react";
import { Box, Container, Typography, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface TrendingService {
  id: number;
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  rating: number;
  originalPrice: number;
  salePrice: number;
}

const trendingServices: TrendingService[] = [
  {
    id: 60164,
    title: "Azaadi Deal 1",
    slug: "azaadi-deal-1",
    image: "https://cdn.mrmahir.com/uploads/c2c7534a-afd6-4736-9f94-260d07bc4cf2.jpg",
    imageAlt: "Azaadi Deal 1",
    rating: 4.9,
    originalPrice: 0,
    salePrice: 10000,
  },
  {
    id: 60165,
    title: "Azaadi Deal 2",
    slug: "azaadi-deal-2",
    image: "https://cdn.mrmahir.com/uploads/028efe85-611c-4fb7-bcbf-6cca6fd3fb26.jpg",
    imageAlt: "Azaadi Deal 2",
    rating: 4.9,
    originalPrice: 0,
    salePrice: 6000,
  },
  {
    id: 60111,
    title: "Deal 2",
    slug: "deal-2",
    image: "https://cdn.mrmahir.com/uploads/8a4a47eb-1c00-4ece-ae5e-e41ca40f1b44.jpg",
    imageAlt: "Deal 2",
    rating: 4.9,
    originalPrice: 4000,
    salePrice: 3250,
  },
  {
    id: 60015,
    title: "Bikini Wax And Under Arm With Fruit Wax",
    slug: "bikini-wax-and-under-arm-with-fruit-wax",
    image: "https://cdn.mrmahir.com/uploads/530ee8b6-f3be-4d79-975f-42e016b62a9e.jpg",
    imageAlt: "Bikini Wax",
    rating: 4.8,
    originalPrice: 2000,
    salePrice: 1850,
  },
  {
    id: 60129,
    title: "Silver Beauty Care Package",
    slug: "silver-beauty-care-package",
    image: "https://cdn.mrmahir.com/uploads/3915edd1-0860-42ef-ae61-2b2f25210722.jpg",
    imageAlt: "Silver Beauty Care Package",
    rating: 4.7,
    originalPrice: 4850,
    salePrice: 3999,
  },
  {
    id: 60027,
    title: "Hydra Facial",
    slug: "hydra-facial",
    image: "https://cdn.mrmahir.com/uploads/5b53288f-5ae9-415b-a03b-ed29622d34fa.png",
    imageAlt: "Hydra Facial",
    rating: 4.7,
    originalPrice: 8000,
    salePrice: 5000,
  },
  {
    id: 60013,
    title: "Full Body Fruit Wax Except Face",
    slug: "full-body-fruit-wax-except-face",
    image: "https://cdn.mrmahir.com/uploads/2f210a2b-ca4e-4803-b147-80bbca1059f8.jpg",
    imageAlt: "Full Body Fruit Wax",
    rating: 4.6,
    originalPrice: 4150,
    salePrice: 3850,
  },
  {
    id: 60025,
    title: "Derma Whitening Facial",
    slug: "derma-whitening-facial",
    image: "https://cdn.mrmahir.com/uploads/0287f132-119b-4f96-ac9d-508cea8fd3ac.png",
    imageAlt: "Derma Whitening Facial",
    rating: 4.7,
    originalPrice: 3400,
    salePrice: 3000,
  },
  {
    id: 60002,
    title: "Party Makeup With Free Hairstyling and Lashes",
    slug: "party-makeup-with-free-hairstyling-and-lashes",
    image: "https://cdn.mrmahir.com/uploads/63059a57-b81f-429a-8c5d-dc5279e0a49c.jpg",
    imageAlt: "Party Makeup",
    rating: 4.6,
    originalPrice: 5500,
    salePrice: 4500,
  },
];

const TrendingServicesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 2;

  const handleNext = () => {
    if (currentIndex < trendingServices.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const totalDots = Math.ceil(trendingServices.length - itemsPerView + 1);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(135deg, #c89ba1 0%, #b8858a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          {/* Left Content */}
          <Box sx={{ flex: { xs: "1", md: "0 0 40%" } }}>
            <Typography
              sx={{
                color: "#ffffffff",
                fontSize: "0.95rem",
                fontWeight: 600,
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Trending Services
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                fontWeight: 700,
                mb: 3,
                color: "#ffffffff",
                lineHeight: 1.3,
              }}
            >
              Thanks to all our customers who liked and ordered our services again & again
            </Typography>
            <Typography
              sx={{
                color: "#ffffffff",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.7,
              }}
            >
              The high customer repeat rate & excellent reviews show how much our customers love these UstadonCall Company services!
            </Typography>
          </Box>

          {/* Right Slider */}
          <Box sx={{ flex: { xs: "1", md: "0 0 55%" }, width: "100%", position: "relative" }}>
            {/* Slider Container */}
            <Box sx={{ overflow: "hidden", position: "relative" }}>
              <Box
                sx={{
                  display: "flex",
                  transition: "transform 0.5s ease",
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                }}
              >
                {trendingServices.map((service) => (
                  <Box
                    key={service.id}
                    sx={{
                      minWidth: { xs: "100%", sm: "50%" },
                      px: 1,
                      py: 1,
                    }}
                  >
                    <Card
                      sx={{
                        borderRadius: "10px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={service.image}
                        alt={service.imageAlt}
                        sx={{ objectFit: "cover" }}
                      />
                      <CardContent sx={{ p: 1.5 }}>
                        <Typography
                          sx={{
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            mb: 1,
                            color: "#000",
                            minHeight: "40px",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {service.title}
                        </Typography>

                        {/* Rating */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            mb: 1,
                          }}
                        >
                          <StarIcon sx={{ fontSize: "0.9rem", color: "#FFC735" }} />
                          <Typography sx={{ fontSize: "0.85rem", fontWeight: 600 }}>
                            {service.rating}
                          </Typography>
                        </Box>

                        {/* Price */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          {service.originalPrice > 0 && (
                            <Typography
                              sx={{
                                fontSize: "0.85rem",
                                color: "#9ca3af",
                                textDecoration: "line-through",
                              }}
                            >
                              Rs:{service.originalPrice}
                            </Typography>
                          )}
                          <Typography
                            sx={{
                              fontSize: "1rem",
                              fontWeight: 700,
                              color: "#b8858a",
                            }}
                          >
                            Rs:{service.salePrice}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Navigation Arrows */}
            <IconButton
              onClick={handlePrev}
              disabled={currentIndex === 0}
              sx={{
                position: "absolute",
                left: -20,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                "&:hover": { backgroundColor: "#f5f5f5" },
                "&.Mui-disabled": { opacity: 0.3 },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>

            <IconButton
              onClick={handleNext}
              disabled={currentIndex >= trendingServices.length - itemsPerView}
              sx={{
                position: "absolute",
                right: -20,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                "&:hover": { backgroundColor: "#f5f5f5" },
                "&.Mui-disabled": { opacity: 0.3 },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>

            {/* Pagination Dots */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                mt: 2,
              }}
            >
              {Array.from({ length: totalDots }).map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: currentIndex === index ? "#b8858a" : "#d1d5db",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: currentIndex === index ? "#b8858a" : "#9ca3af",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TrendingServicesSection;