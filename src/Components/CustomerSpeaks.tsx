import React, { useRef } from 'react';
import { Box, Container, Typography, IconButton, Paper } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type Video = {
  id: string;
  title?: string;
};

const videos: Video[] = [
  { id: 'gwkgaYCvcGk', title: 'Customer review 1' },
  { id: 'Au3M6CL0rRI', title: 'Customer review 2' },
  { id: 'pfFfNSzPnuU', title: 'Customer review 3' },
  { id: 'ecakUOhFKX0', title: 'Customer review 4' },
];

export default function CustomerSpeaks() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight={700}>
            Customers Video Reviews!
          </Typography>
        </Box>

        <Paper elevation={0} sx={{ position: 'relative' }}>
          {/* Left Arrow */}
          <IconButton
            onClick={() => scroll('left')}
            sx={{
              position: 'absolute',
              top: '45%',
              left: -10,
              zIndex: 10,
              bgcolor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Scrollable Row */}
          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              gap: 3,
              pb: 2,
              px: 1,
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {videos.map((v, idx) => (
              <Box key={v.id} sx={{ minWidth: { xs: '90%', sm: '45%', md: '30%' } }}>
                <Box
                  sx={{
                    position: 'relative',
                    pb: '56.25%',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3,
                  }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title ?? `Customer video ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  />

                  <IconButton
                    aria-label={`Play ${v.title ?? 'video'}`}
                    sx={{
                      position: 'absolute',
                      bottom: 12,
                      right: 12,
                      bgcolor: 'rgba(0,0,0,0.6)',
                      color: '#fff',
                      '&:hover': { bgcolor: 'rgba(0,0,0,0.75)' },
                    }}
                  >
                    <PlayArrowIcon />
                  </IconButton>
                </Box>

                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  textAlign="center"
                  sx={{ mt: 1 }}
                >
                  {v.title}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Right Arrow */}
          <IconButton
            onClick={() => scroll('right')}
            sx={{
              position: 'absolute',
              top: '45%',
              right: -10,
              zIndex: 10,
              bgcolor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Paper>
      </Container>
    </Box>
  );
}
