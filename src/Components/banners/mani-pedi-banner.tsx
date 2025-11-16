// components/ManiPediHero.tsx
'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Star, CheckCircle } from '@mui/icons-material';
import Image from 'next/image';

interface StatItemProps {
  icon: React.ReactNode;
  rating: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, rating, label }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: { xs: 2, md: 3 },
        borderRadius: 3,
        bgcolor: 'white',
        transition: 'all 0.3s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 6
        }
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        gap={2}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
            borderRadius: '50%',
            bgcolor: '#B76E78',
            color: 'white'
          }}
        >
          {icon}
        </Box>
        <Box textAlign={{ xs: 'center', md: 'left' }}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              color: '#B76E78',
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            {rating}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
          >
            {label}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

const ManiPediHero: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        background: 'linear-gradient(135deg, #B76E78 0%, #A55E68 100%)',
        color: 'white',
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box>
              <Typography
                variant="h1"
                fontWeight={700}
                gutterBottom
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  mb: 2
                }}
              >
                Mani Pedi
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                  mb: 4,
                  opacity: 0.95,
                  fontWeight: 400
                }}
              >
                Book your area's best Mani Pedi services providers at Home.
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <StatItem
                    icon={<Star sx={{ fontSize: 28 }} />}
                    rating="4.6/5"
                    label="Average rating"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <StatItem
                    icon={
                      <Box
                        sx={{
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          sx={{ fontSize: '1.25rem' }}
                        >
                          Rs
                        </Typography>
                      </Box>
                    }
                    rating="800"
                    label="Start from"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <StatItem
                    icon={<CheckCircle sx={{ fontSize: 28 }} />}
                    rating="22500"
                    label="Done order"
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                height: { xs: 250, md: 400 },
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
                position: 'relative',
                bgcolor: '#333'
              }}
            >
     
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ManiPediHero;