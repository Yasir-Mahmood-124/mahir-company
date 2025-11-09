import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Avatar, Rating, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Zohaib Munir',
    avatar: '/images/user-default.webp',
    comment: 'Love the service, they are super fast, in just 30 minutes he gets the job done. Flawless.',
    rating: 5,
    date: '31-01-2021 03:35',
  },
  {
    id: 2,
    name: 'Danyaal Jehangir',
    avatar: '/images/user-default.webp',
    comment: 'Good service. Technicians were very polite and well trained',
    rating: 5,
    date: '08-02-2021 07:56',
  },
  {
    id: 3,
    name: 'Abdullah Akram',
    avatar: '/images/user-default.webp',
    comment: 'Fixed the microwave oven and delivered it timely too! Turning out to be a reliable service',
    rating: 5,
    date: '11-02-2021 12:52',
  },
  {
    id: 4,
    name: 'ADV sikander',
    avatar: '/images/user-default.webp',
    comment: 'Service is good and satisfy with the work of technician.',
    rating: 4,
    date: '24-04-2021 09:30',
  },
  {
    id: 5,
    name: 'Zahid Raza Khan',
    avatar: '/images/user-default.webp',
    comment: 'It was very convenient to engage a technician and get things done through Mahir',
    rating: 5,
    date: '24-04-2021 10:14',
  },
  {
    id: 6,
    name: 'basit',
    avatar: '/images/user-default.webp',
    comment: 'work is good and satisfy with the work of cleaning service.',
    rating: 5,
    date: '24-04-2021 11:12',
  },
  {
    id: 7,
    name: 'Danish',
    avatar: '/images/user-default.webp',
    comment: 'Satisfy with the work of technician. Work doing in good way and timely.',
    rating: 5,
    date: '26-04-2021 04:30',
  },
  {
    id: 8,
    name: 'Sara Mushtaba',
    avatar: '/images/user-default.webp',
    comment: 'Satisfy with the work of technician. Work doing in good way and timely, to the point.',
    rating: 4,
    date: '26-04-2021 04:44',
  },
];

const CustomerTestimonials: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Determine how many slides to show based on screen size
  const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, slidesToShow]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Get visible testimonials based on current index
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundColor: '#f8f9fa',
        position: 'relative',
      }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 700,
            color: '#0F52BA',
            fontSize: { xs: '1.75rem', md: '2.5rem' },
          }}
        >
          Our Customers Speak for Us!
        </Typography>

        {/* Slider Container */}
        <Box sx={{ position: 'relative', px: { xs: 0, md: 6 } }}>
          {/* Navigation Buttons */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: { xs: -10, md: -20 },
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
              right: { xs: -10, md: -20 },
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

          {/* Testimonials Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
              mb: 4,
            }}
          >
            {getVisibleTestimonials().map((testimonial, idx) => (
              <Box
                key={`${testimonial.id}-${idx}`}
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  p: 4,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 2,
                  }}
                />
                
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: '#333',
                  }}
                >
                  {testimonial.name}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    mb: 3,
                    flex: 1,
                    lineHeight: 1.6,
                    minHeight: '60px',
                  }}
                >
                  {testimonial.comment}
                </Typography>

                <Box sx={{ mt: 'auto' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      color: '#999',
                      mb: 1,
                    }}
                  >
                    {testimonial.date}
                  </Typography>
                  
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    sx={{
                      '& .MuiRating-iconFilled': {
                        color: '#0F52BA',
                      },
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>

          {/* Pagination Dots */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              mt: 4,
            }}
          >
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: currentIndex === index ? '#0F52BA' : '#ccc',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#0F52BA',
                    transform: 'scale(1.2)',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerTestimonials;