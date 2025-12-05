
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
    id: 69,
    title: 'AC installation',
    slug: 'ac-installation',
    image: 'https://cdn.mrmahir.com/uploads/5d7438de-4b81-4b80-ad0f-6d9fd5d381b2.jpg',
    imageAlt: 'AC installation',
    rating: 4.4,
    originalPrice: 3500,
    salePrice: 3000,
  },
  {
    id: 104,
    title: 'UPS installation (Without Wiring)',
    slug: 'ups-installation-without-wiring',
    image: 'https://cdn.mrmahir.com/uploads/a037f685-c431-4b48-88eb-787e1c195cc3.jpg',
    imageAlt: 'UPS installation (Without Wiring)',
    rating: 4.4,
    salePrice: 1300,
  },
  {
    id: 58,
    title: 'AC General Service',
    slug: 'ac-general-service',
    image: 'https://cdn.mrmahir.com/uploads/21bfef41-4036-4ec2-bec9-22de3a30f4eb.png',
    imageAlt: 'AC General Service',
    rating: 4.3,
    originalPrice: 3000,
    salePrice: 2000,
  },
  {
    id: 114,
    title: 'Electrical Wiring',
    slug: 'electrical-wiring',
    image: 'https://cdn.mrmahir.com/uploads/bfd2ee08-50d0-4639-8c51-dd3dd31daf1f.png',
    imageAlt: 'Electrical Wiring',
    rating: 4.3,
    salePrice: 500,
  },
  {
    id: 281,
    title: 'Automatic Washing Machine Repairing',
    slug: 'automatic-washing-machine-repairing',
    image: 'https://cdn.mrmahir.com/uploads/c7ff1262-ab1a-4813-9ced-540d48e6032f.png',
    imageAlt: 'Automatic Washing Machine Repairing',
    rating: 4.6,
    salePrice: 800,
  },
  {
    id: 76,
    title: 'Muslim Shower Replacement',
    slug: 'muslim-shower-replacement',
    image: 'https://cdn.mrmahir.com/uploads/81f9a623-a94a-428d-9247-272c73447fb9.png',
    imageAlt: 'Muslim shower replacement',
    rating: 4.4,
    salePrice: 850,
  },
  {
    id: 236,
    title: 'Room Door Lock installation',
    slug: 'room-door-lock-installation',
    image: 'https://cdn.mrmahir.com/uploads/4807f4f6-fdc9-46a0-8ace-5adfcd234361.png',
    imageAlt: 'Room Door Lock installation',
    rating: 4.8,
    salePrice: 1200,
  },
];

const TrendingServices: React.FC = () => {
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

export default TrendingServices;