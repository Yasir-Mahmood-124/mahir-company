
import React, { useState, useEffect } from 'react';
import { Box, Container, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight, Star } from '@mui/icons-material';

interface Service {
  id: number;
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  rating: number;
  originalPrice?: number;
  salePrice: number;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Sofa Cleaning',
    slug: 'sofa-cleaning',
    image: 'https://cdn.mrmahir.com/uploads/9165e14e-9142-44e9-8ec0-cf6fbad2cf97.png',
    imageAlt: 'Sofa Cleaning',
    rating: 4.6,
    originalPrice: 500,
    salePrice: 300,
  },
  {
    id: 2,
    title: 'Full House Deep Cleaning',
    slug: 'full-house-deep-cleaning',
    image: 'https://cdn.mrmahir.com/uploads/d64de82e-d616-4d8d-9089-b7af3d0e4d01.jpg',
    imageAlt: 'Full House Deep Cleaning',
    rating: 4.7,
    originalPrice: 500,
    salePrice: 300,
  },
  {
    id: 3,
    title: 'Carpet Cleaning',
    slug: 'carpet-cleaning',
    image: 'https://cdn.mrmahir.com/uploads/50f5fa84-a6bc-4505-ad5a-703cebdae60b.jpg',
    imageAlt: 'Carpet Cleaning',
    rating: 4.5,
    originalPrice: 36,
    salePrice: 22,
  },
  {
    id: 4,
    title: 'Plastic Water Tank Cleaning',
    slug: 'plastic-water-tank-cleaning',
    image: 'https://cdn.mrmahir.com/uploads/dc91f504-be03-4230-b54f-458927f5ca68.jpg',
    imageAlt: 'Plastic Water Tank Cleaning',
    rating: 4.5,
    originalPrice: 2000,
    salePrice: 1650,
  },
  {
    id: 5,
    title: 'Double Mattress Cleaning',
    slug: 'double-mattress-cleaning',
    image: 'https://cdn.mrmahir.com/uploads/92804dde-1a86-4441-8d0f-d54b33026979.png',
    imageAlt: 'Double Mattress Cleaning',
    rating: 4.3,
    originalPrice: 2500,
    salePrice: 2000,
  },
];


const CleaningTrendingServices: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cardWidth = 280;
  const gap = 20;
  const totalWidth = (cardWidth + gap) * services.length;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev - 1;
        if (Math.abs(newPosition) >= totalWidth) {
          return 0;
        }
        return newPosition;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalWidth]);

  const handleNext = () => {
    setScrollPosition((prev) => {
      const newPosition = prev - (cardWidth + gap);
      if (Math.abs(newPosition) >= totalWidth) {
        return 0;
      }
      return newPosition;
    });
  };

  const handlePrev = () => {
    setScrollPosition((prev) => {
      const newPosition = prev + (cardWidth + gap);
      if (newPosition > 0) {
        return -(totalWidth - (cardWidth + gap));
      }
      return newPosition;
    });
  };

  // Duplicate services for seamless loop
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <Box
      component="section"
      sx={{
        py: 6,
        backgroundColor: '#f5f5f5',
        overflow: 'hidden',
        position: 'relative',
      }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <Container maxWidth="xl">
        {/* Navigation Buttons */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: '#fff',
            boxShadow: 2,
            '&:hover': {
              backgroundColor: '#0F52BA',
              color: '#fff',
            },
          }}
        >
          <ChevronLeft />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: '#fff',
            boxShadow: 2,
            '&:hover': {
              backgroundColor: '#0F52BA',
              color: '#fff',
            },
          }}
        >
          <ChevronRight />
        </IconButton>

        {/* Carousel Container */}
        <Box
          sx={{
            display: 'flex',
            gap: `${gap}px`,
            transform: `translateX(${scrollPosition}px)`,
            transition: isAutoPlaying ? 'none' : 'transform 0.3s ease',
          }}
        >
          {duplicatedServices.map((service, idx) => (
            <Card
              key={`${service.id}-${idx}`}
              sx={{
                minWidth: `${cardWidth}px`,
                maxWidth: `${cardWidth}px`,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                flexShrink: 0,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.imageAlt}
                sx={{
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    mb: 1,
                    minHeight: '48px',
                    color: '#333',
                  }}
                >
                  {service.title}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Star sx={{ color: '#FFC735', fontSize: '1rem', mr: 0.5 }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      fontWeight: 600,
                    }}
                  >
                    {service.rating}
                  </Typography>
                </Box>

                <Box>
                  {service.originalPrice && (
                    <Typography
                      variant="body2"
                      sx={{
                        textDecoration: 'line-through',
                        color: '#999',
                        mr: 1,
                        display: 'inline',
                      }}
                    >
                      Rs:{service.originalPrice}
                    </Typography>
                  )}
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#0F52BA',
                      fontWeight: 700,
                      display: 'inline',
                    }}
                  >
                    Rs:{service.salePrice}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CleaningTrendingServices;