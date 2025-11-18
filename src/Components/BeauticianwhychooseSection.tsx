"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import image from "@/assests/Images/cont1.webp"

const WhyChooseSection: React.FC = () => {
  return (
    <Box
      component="section"
      className="why-choose"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Leaves SVG - Top Left */}
      <Box
        className="mrmh-beautician-illustration-leaves"
        sx={{
          position: "absolute",
          top: { xs: 20, md: 40 },
          left: { xs: -30, md: 20 },
          width: { xs: "150px", md: "200px" },
          height: "auto",
          opacity: 0.15,
          zIndex: 0,
        }}
      >
        <svg
          width="200"
          height="165"
          viewBox="0 0 158 113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M72.2953 33.202C81.2388 41.0864 89.0056 50.2653 95.5955 60.2679C102.186 70.1529 107.481 80.8616 111.717 91.9233C114.071 98.1603 116.072 104.633 117.366 111.105C117.484 112.046 116.189 112.164 115.954 111.34C114.542 105.574 113.012 99.9254 111.129 94.2769C109.246 88.6284 106.893 83.2152 104.304 77.9197C99.1259 67.3286 92.7713 57.4437 85.3576 48.1471C81.2388 42.9693 76.7671 38.1444 72.0599 33.4373C71.8246 33.4373 72.1776 33.0843 72.2953 33.202Z"
            fill="#D1403C"
          />
          <path
            d="M55.8206 35.3204C55.8206 35.3204 69.9419 32.3784 81.0037 42.4987C81.1213 42.4987 69.0005 46.1468 55.8206 35.3204Z"
            fill="#FF6057"
          />
          <path
            d="M157.259 55.4433C157.848 54.0312 158.201 52.1483 156.906 51.3246C156.318 50.8539 155.494 50.9716 154.788 50.9716C149.963 51.5599 144.55 53.7958 140.784 50.8539C143.138 48.0296 145.609 45.0876 147.963 42.2634C149.139 40.8512 150.434 38.8507 149.61 37.2032C148.786 35.5557 146.433 35.438 144.785 35.9087C143.02 36.4971 141.49 37.5562 139.607 37.5562C137.725 37.5562 135.724 35.9088 136.43 34.2613C136.783 33.3198 137.842 32.7314 138.784 32.2607C141.49 30.6132 143.491 27.6713 143.962 24.494C143.02 22.2581 139.725 22.9642 137.489 23.9056C135.253 24.847 131.605 24.847 131.488 22.3758C131.37 21.552 131.841 20.846 132.194 20.1399C133.135 18.7278 134.194 17.4333 134.665 15.9035C135.253 14.3737 135.018 12.3731 133.606 11.314C130.899 9.31351 127.369 13.0792 124.074 12.8438C120.544 12.4908 119.131 8.13672 116.425 5.90084C115.836 5.43013 115.248 5.07711 114.424 5.07711C112.071 4.84176 110.776 7.78369 110.659 10.1373C110.541 12.4908 110.659 15.1974 108.776 16.6095C107.599 17.4333 106.069 17.551 104.657 17.7863C103.245 18.1394 101.715 19.0808 101.597 20.4929C101.597 22.8465 104.892 23.1995 107.246 23.7879C107.952 24.0233 108.776 24.3763 109.129 25.0824C109.835 26.6122 108.07 28.2597 106.305 28.6127C104.657 28.9658 102.657 29.2011 101.715 30.6132C100.421 32.7314 102.774 35.3204 105.128 35.9087C107.481 36.4971 110.188 36.0264 112.306 37.0855C112.895 37.3209 113.483 37.7916 113.836 38.38C114.777 40.2628 112.541 42.1457 110.541 42.6164C108.54 43.0871 106.187 43.3225 105.128 45.0877C103.716 47.4412 106.305 50.5008 109.011 51.2069C111.718 52.0306 114.66 51.6776 117.131 53.0897C117.484 54.2665 116.66 55.561 115.601 56.2671C114.542 56.9731 113.365 57.4438 112.424 58.2676C110.07 60.3858 110.894 64.5045 113.13 66.7404C116.778 70.3884 122.426 70.1531 126.898 72.1536C130.782 73.9188 133.135 77.0961 137.607 75.2132C144.785 72.2713 154.2 62.7394 157.259 55.4433Z"
            fill="#CB0E55"
          />
        </svg>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Title - Mobile Only */}
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            display: { xs: "block", md: "none" },
            fontSize: { xs: "1.75rem", sm: "2rem" },
            fontWeight: 700,
            mb: 4,
            color: "#B76E79",
          }}
        >
          Why choose UstadonCall Company 
        </Typography>

        <Box
          className="line"
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Left - Text Content */}
          <Box
            className="cl-6"
            sx={{
              flex: { xs: "1", md: "0 0 50%" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
                px: { xs: 2, md: 0 },
              }}
            >
              {/* Desktop Title */}
              <Typography
                component="span"
                sx={{
                  display: { xs: "none", md: "block" },
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#B76E79",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  mb: 2,
                }}
              >
                Why choose UstadonCall Company 
              </Typography>

              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: "1.75rem", md: "2.25rem", lg: "2.75rem" },
                  fontWeight: 400,
                  mb: 3,
                  color: "#333",
                  lineHeight: 1.3,
                }}
              >
                See, you take care of everyone but why not yourself!
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  color: "#666",
                  mb: 0,
                }}
              >
                Do you know skipping the personal care routine will lead to aging
                before time? Take no risks. If you cannot manage to go to the
                salon, let us come by and take care of you. We will cater to your
                time and affordability concerns. Whether you are a mother,
                daughter, or wife housewife or working lady..UstadonCall Company's
                professionals will meet your unique needs
              </Typography>
            </Box>
          </Box>

          {/* Right - Image */}
          <Box
            className="cl-6"
            sx={{
              flex: { xs: "1", md: "0 0 45%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              className="why-choose-clipwrapper"
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "450px",
                padding: "20px",
              }}
            >
              {/* Decorative Border Circle - Organic Shape */}
              <Box
                sx={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  right: "5%",
                  bottom: "5%",
                  border: "3px solid #FFB8C3",
                  borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
                  zIndex: 0,
                  opacity: 0.7,
                }}
              />
              
              {/* Red Dot Decoration */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "10%",
                  right: "8%",
                  width: "18px",
                  height: "18px",
                  backgroundColor: "#D1403C",
                  borderRadius: "50%",
                  zIndex: 2,
                }}
              />
              
              <Box
                className="image-clipper"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 15px 40px rgba(183, 110, 121, 0.25)",
                  },
                }}
              >
                <Image
                  src={image}
                  alt="beautician app"
                  width={450}
                  height={300}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                  priority
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseSection;