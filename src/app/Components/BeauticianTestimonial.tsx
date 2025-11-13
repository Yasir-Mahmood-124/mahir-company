import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Avatar,
  Rating,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ayesha Khan',
    comment: 'Amazing bridal makeup! The beautician was so professional and made me look stunning on my special day.',
    rating: 5,
    date: '15-03-2024 02:30',
  },
  {
    id: 2,
    name: 'Fatima Ahmed',
    comment: 'Best facial experience ever! My skin is glowing and the service was incredibly relaxing.',
    rating: 5,
    date: '22-03-2024 11:45',
  },
  {
    id: 3,
    name: 'Sana Malik',
    comment: 'The hair styling was perfect! Loved how they understood exactly what I wanted.',
    rating: 5,
    date: '28-03-2024 04:15',
  },
  {
    id: 4,
    name: 'Hira Bashir',
    comment: 'Excellent waxing service. Very hygienic and painless. Highly recommend!',
    rating: 5,
    date: '05-04-2024 09:20',
  },
  {
    id: 5,
    name: 'Zainab Ali',
    comment: 'The manicure and pedicure service was top-notch. Very professional and affordable.',
    rating: 4,
    date: '12-04-2024 03:30',
  },
  {
    id: 6,
    name: 'Maryam Raza',
    comment: 'Beautiful mehndi design! The beautician was so talented and friendly.',
    rating: 5,
    date: '18-04-2024 01:50',
  },
  {
    id: 7,
    name: 'Nida Aslam',
    comment: 'Party makeup was flawless! Got so many compliments. Will definitely book again.',
    rating: 5,
    date: '25-04-2024 06:40',
  },
  {
    id: 8,
    name: 'Sidra Tariq',
    comment: 'The hair treatment worked wonders! My hair feels so soft and healthy now.',
    rating: 5,
    date: '02-05-2024 10:15',
  },
];

const CustomerTestimonials: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;

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

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  // Helper to get first letter of the name
  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  return (
    <Box
      component="section"
      sx={{
        py: 8,
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
            color: '#B76E79',
            fontSize: { xs: '1.75rem', md: '2.5rem' },
          }}
        >
          Our Customers Speak for Us!
        </Typography>

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
                backgroundColor: '#B76E79',
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
                backgroundColor: '#B76E79',
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
                    boxShadow: '0 4px 16px rgba(183, 110, 121, 0.2)',
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 2,
                    fontSize: '2rem',
                    fontWeight: 600,
                    backgroundColor: '#E85D75',
                    color: '#fff',
                  }}
                >
                  {getInitial(testimonial.name)}
                </Avatar>

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
                        color: '#E85D75',
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
                  backgroundColor: currentIndex === index ? '#E85D75' : '#ccc',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#E85D75',
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