'use client';

import React, { useRef } from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Service {
  id: number;
  title: string;
  image: string;
  rating: number;
  price: number;
  originalPrice?: number;
}

const services: Service[] = [
  {
    id: 1,
    title: 'AC installation',
    image: 'https://cdn.mrmahir.com/uploads/5d7438de-4b81-4b80-ad0f-6d9fd5d381b2.jpg',
    rating: 4.4,
    price: 3000,
    originalPrice: 3500,
  },
  {
    id: 2,
    title: 'UPS installation (Without Wiring)',
    image: 'https://cdn.mrmahir.com/uploads/a037f685-c431-4b48-88eb-787e1c195cc3.jpg',
    rating: 4.4,
    price: 1300,
  },
  {
    id: 3,
    title: 'AC General Service',
    image: 'https://cdn.mrmahir.com/uploads/21bfef41-4036-4ec2-bec9-22de3a30f4eb.png',
    rating: 4.3,
    price: 2000,
    originalPrice: 3000,
  },
  {
    id: 4,
    title: 'Electrical Wiring',
    image: 'https://cdn.mrmahir.com/uploads/bfd2ee08-50d0-4639-8c51-dd3dd31daf1f.png',
    rating: 4.3,
    price: 500,
  },
  {
    id: 5,
    title: 'Automatic Washing Machine Repairing',
    image: 'https://cdn.mrmahir.com/uploads/c7ff1262-ab1a-4813-9ced-540d48e6032f.png',
    rating: 4.6,
    price: 800,
  },
  {
    id: 6,
    title: 'Muslim Shower Replacement',
    image: 'https://cdn.mrmahir.com/uploads/81f9a623-a94a-428d-9247-272c73447fb9.png',
    rating: 4.4,
    price: 850,
  },
  {
    id: 7,
    title: 'Room Door Lock installation',
    image: 'https://cdn.mrmahir.com/uploads/4807f4f6-fdc9-46a0-8ace-5adfcd234361.png',
    rating: 4.8,
    price: 1200,
  },
];

const TrendingServicesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollPosition =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#f5f5f5',
        py: { xs: 6, md: 8, lg: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: { xs: 4, lg: 6 },
          }}
        >
          {/* Left Side - Content */}
          <Box
            sx={{
              flex: { lg: '0 0 40%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              component="p"
              sx={{
                fontSize: { xs: '0.875rem', md: '1rem' },
                fontWeight: 600,
                color: '#666',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                mb: 2,
              }}
            >
              Trending Services
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 700,
                color: '#000',
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Hot-sellers are up for grabs!
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                color: '#666',
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              The high customer repeat rate & excellent reviews show how much our customers love these Mahir Company (Mr.Mahir) services!
            </Typography>

            {/* Navigation Arrows - Desktop */}
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                gap: 2,
              }}
            >
              <IconButton
                onClick={() => scroll('left')}
                sx={{
                  backgroundColor: '#fff',
                  border: '2px solid #e0e0e0',
                  '&:hover': {
                    backgroundColor: '#000',
                    borderColor: '#000',
                    color: '#fff',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                onClick={() => scroll('right')}
                sx={{
                  backgroundColor: '#fff',
                  border: '2px solid #e0e0e0',
                  '&:hover': {
                    backgroundColor: '#000',
                    borderColor: '#000',
                    color: '#fff',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Right Side - Carousel */}
          <Box
            sx={{
              flex: 1,
              position: 'relative',
            }}
          >
            {/* Carousel Container */}
            <Box
              ref={scrollContainerRef}
              sx={{
                display: 'flex',
                gap: 3,
                overflowX: 'auto',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                pb: 2,
              }}
            >
              {services.map((service) => (
                <Box
                  key={service.id}
                  sx={{
                    minWidth: { xs: '280px', sm: '300px', md: '320px' },
                    flexShrink: 0,
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={service.image}
                      alt={service.title}
                      sx={{
                        objectFit: 'cover',
                      }}
                    />
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        p: 2.5,
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h4"
                        sx={{
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          fontWeight: 600,
                          color: '#000',
                          mb: 2,
                          lineHeight: 1.3,
                          minHeight: '2.6em',
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
                        <StarIcon
                          sx={{
                            color: '#FFC735',
                            fontSize: '1.2rem',
                            mr: 0.5,
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            color: '#333',
                          }}
                        >
                          {service.rating}
                        </Typography>
                      </Box>

                      <Box sx={{ mt: 'auto' }}>
                        {service.originalPrice && (
                          <Typography
                            component="span"
                            sx={{
                              fontSize: '0.95rem',
                              color: '#999',
                              textDecoration: 'line-through',
                              mr: 1,
                            }}
                          >
                            Rs:{service.originalPrice}
                          </Typography>
                        )}
                        <Typography
                          component="span"
                          sx={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: '#000',
                          }}
                        >
                          Rs:{service.price}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>

            {/* Navigation Arrows - Mobile (Overlay) */}
            <Box
              sx={{
                display: { xs: 'flex', lg: 'none' },
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                transform: 'translateY(-50%)',
                justifyContent: 'space-between',
                px: 1,
                pointerEvents: 'none',
              }}
            >
              <IconButton
                onClick={() => scroll('left')}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  pointerEvents: 'auto',
                  '&:hover': {
                    backgroundColor: '#000',
                    color: '#fff',
                  },
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                onClick={() => scroll('right')}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  pointerEvents: 'auto',
                  '&:hover': {
                    backgroundColor: '#000',
                    color: '#fff',
                  },
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>

            {/* Dots Indicator */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                mt: 3,
              }}
            >
              {services.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: index === 0 ? '#000' : '#ccc',
                    transition: 'all 0.3s',
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