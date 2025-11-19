'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const SolarBenefitsSection: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '64px 0',
        '@media (max-width: 768px)': {
          padding: '32px 0',
        },
      }}
    >
      <Container maxWidth="lg">
        <div>
          {/* Main Title */}
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#000000',
              marginBottom: '32px',
              '@media (max-width: 768px)': {
                fontSize: '24px',
              },
            }}
          >
            Benefits of Solar Installation
          </Typography>

          {/* Cost Savings */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Cost Savings:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Enjoy long-term cost savings by significantly reducing or eliminating monthly electricity bills, leading to financial savings over time.
            </Typography>
          </Box>

          {/* Energy Independence */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Energy Independence:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Reduce reliance on traditional utility providers and gain greater control over energy consumption, providing peace of mind and protection against rising electricity costs and power outages.
            </Typography>
          </Box>

          {/* Increased Property Value */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Increased Property Value:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Enhance the value of your property with solar system, making it more attractive to potential buyers due to cost savings and environmental benefits.
            </Typography>
          </Box>

          {/* Durability */}
          <Box sx={{ marginBottom: '48px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Durability:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Solar system is durable, require minimal maintenance, and come with long warranties, ensuring reliable energy generation for many years.
            </Typography>
          </Box>

          {/* Second Section Title */}
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#000000',
              marginBottom: '32px',
              marginTop: '48px',
              '@media (max-width: 768px)': {
                fontSize: '24px',
              },
            }}
          >
            Reasons to Choose Our Solar System Installation Partners
          </Typography>

          {/* Quality Products */}
          <Box sx={{ marginBottom: '16px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Our partners use quality and branded products.
            </Typography>
          </Box>

          {/* ISO Approved */}
          <Box sx={{ marginBottom: '16px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Their solar products are ISO (International Organization for Standardization) approved and comes with a warranty.
            </Typography>
          </Box>

          {/* After-Sales Service Support */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              After-Sales Service Support:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              You can reach out to our customer support for concerns or queries during and after the residential and commercial solar system installation process.
            </Typography>
          </Box>

          {/* Cost-Effectiveness */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Cost-Effectiveness:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Benefit from competitive pricing, transparent cost structures, and a commitment to long-term cost savings and return on investment.
            </Typography>
          </Box>

          {/* Flexible Scheduling */}
          <Box sx={{ marginBottom: '48px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Flexible Scheduling:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Enjoy the convenience of scheduling solar system installation at a time that suits your needs, minimizing disruption to your routine.
            </Typography>
          </Box>

          {/* Third Section Title */}
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#000000',
              marginBottom: '32px',
              marginTop: '48px',
              '@media (max-width: 768px)': {
                fontSize: '24px',
              },
            }}
          >
            Steps of Solar System Installation
          </Typography>

          {/* Site Assessment */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Site Assessment:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Evaluate the feasibility of solar system installation based on factors like roof condition, orientation, shading, and available space for optimal sunlight exposure.
            </Typography>
          </Box>

          {/* Design and Planning */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Design and Planning:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Customize a solar system that meets your energy needs and maximizes solar energy generation.
            </Typography>
          </Box>

          {/* Procurement and Delivery */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Procurement and Delivery:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Procure solar system and necessary components, delivering them to your property for installation.
            </Typography>
          </Box>

          {/* Roof Preparation */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Roof Preparation:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Prepare the roof, ensuring its stability and suitability for solar system installation.
            </Typography>
          </Box>

          {/* Mounting and Installation */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Mounting and Installation:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Securely fix the solar system and mounting racks to the roof according to the predetermined design.
            </Typography>
          </Box>

          {/* Electrical Wiring */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Electrical Wiring:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Connect the solar system to an inverter and integrate them with your home's electrical system.
            </Typography>
          </Box>

          {/* System Testing and Commissioning */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              System Testing and Commissioning:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Conduct rigorous testing to ensure proper functionality and safety.
            </Typography>
          </Box>

          {/* Grid Connection */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Grid Connection (if applicable):
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Establish a net metering or interconnection agreement with the utility company if you choose to connect your solar system to the grid.
            </Typography>
          </Box>

          {/* Monitoring and Maintenance */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Monitoring and Maintenance:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Monitor the system's performance and perform regular maintenance to optimize efficiency and longevity.
            </Typography>
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default SolarBenefitsSection;