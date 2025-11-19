'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const HomeInspectionDetails: React.FC = () => {
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
          {/* How It Works */}
          <Typography
            variant="h2"
            sx={{
              fontSize: '23px',
              fontWeight: 'bold',
              color: '#000000',
              marginBottom: '24px',
            }}
          >
            How Mahir Home Inspection Works?
          </Typography>

          <Box sx={{ marginBottom: '32px' }}>
            <Typography
              component="ol"
              sx={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#000000',
                paddingLeft: '20px',
                '& li': {
                  marginBottom: '12px',
                },
              }}
            >
              <li>Search with the keyword home inspection near me and book online</li>
              <li>Book a time and place for the home inspection service</li>
              <li>Team of experienced and verified technicians visit the home buyer and conduct the inspection</li>
              <li>Your detailed home inspection report will be sent via SMS & emailed to you within 28-48 hour of the inspection</li>
            </Typography>
          </Box>

          {/* What's Included */}
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#000000',
              marginBottom: '32px',
              marginTop: '48px',
              padding: '20px 0',
              '@media (max-width: 768px)': {
                fontSize: '24px',
              },
            }}
          >
            What's Included in the Home Inspection: House Inspection Checklist
          </Typography>

          {/* Interior Inspection */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '23px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Interior Inspection:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Thorough examination of the paint, wall panels, tiles, and backs of cupboards to detect any signs of termite infestation and seepage of walls. Our advanced endoscopy technique ensures a comprehensive assessment of potential issues.
            </Typography>
          </Box>

          {/* Exterior Inspection */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '23px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Exterior Inspection:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Detailed assessment of the paint and seepage of walls to gain insights into the overall quality and condition of the house. We leave no stone unturned in identifying any areas of concern.
            </Typography>
          </Box>

          {/* Technical Inspection */}
          <Box sx={{ marginBottom: '48px' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '23px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              Technical Inspection:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              In-depth inspection of the carpentry, appliances (including AC and Geyser), plumbing, and electrical work. Our professional home inspector meticulously evaluates these crucial aspects to ensure they meet safety standards and are in proper working condition.
            </Typography>
          </Box>

          {/* Why Mahir Excels */}
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
            Why Mahir Company Excels in Home Inspections
          </Typography>

          <Box sx={{ marginBottom: '24px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              When it comes to home inspections, there is no home inspection companies in Pakistan but Mahir Company. You can simply search with the keyword home inspection companies near me to get professional and comprehensive inspection services. It will empower you to make well-informed decisions when buying or renting a house. Here's why we are the best in the industry.
            </Typography>
          </Box>

          {/* Experienced Inspectors */}
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
              Experienced and Qualified Inspectors:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Our team of specialized inspectors brings a wealth of experience and expertise to every inspection. With their keen eye for detail, they uncover underlying issues and potential problems that may go unnoticed by the untrained eye.
            </Typography>
          </Box>

          {/* Clear Reports */}
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
              Clear and Concise Reports:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              Our inspection reports are designed to be easily understood, providing you with a clear and concise description of any issues identified during the inspection. Accompanied by high-quality photographs, these reports offer a visual representation of the house's condition, enabling you to assess the significance of any findings.
            </Typography>
          </Box>

          {/* Informed Decision-Making */}
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
              Informed Decision-Making:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              We understand the importance of making informed decisions when it comes to purchasing or renting a house. Our thorough pre-purchase house inspection provides you with essential information about the property, empowering you to evaluate its overall condition and potential maintenance requirements.
            </Typography>
          </Box>

          {/* Competitive Charges */}
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
              Competitive Inspection Charges:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              We believe that quality inspection services should be accessible and affordable. That's why we offer highly competitive charges that provide exceptional value for your money. Our goal is to ensure that you receive top-notch service without breaking the bank.
            </Typography>
          </Box>

          {/* Closing Statement */}
          <Box sx={{ marginTop: '32px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
              }}
            >
              With Mahir Company, you can embark on your home buying or renting journey with confidence. Trust our expertise, attention to detail, and commitment to delivering reliable inspection services. Experience the difference that a professional and trustworthy home inspection can make.
            </Typography>
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default HomeInspectionDetails;