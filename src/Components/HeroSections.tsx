"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogContent,
  IconButton,
  InputAdornment,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import type { StaticImageData } from "next/image";

// Import all your images
import banner1 from "@/assests/Images/banner1.jpg";
import banner2 from "@/assests/Images/banner2.jpg";
import banner3 from "@/assests/Images/banner3.png";

interface BannerImage {
  id: number;
  src: StaticImageData;
  alt: string;
}

const bannerImages: BannerImage[] = [
  {
    id: 1,
    src: banner1,
    alt: "Banner Image 1",
  },
  {
    id: 2,
    src: banner2,
    alt: "Banner Image 2",
  },
  {
    id: 3,
    src: banner3,
    alt: "Banner Image 3",
  },
];

const BannerSection: React.FC = () => {
  const [requestCallOpen, setRequestCallOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleRequestCallOpen = () => {
    setRequestCallOpen(true);
  };

  const handleRequestCallClose = () => {
    setRequestCallOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleRequestCallClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 3, md: 0 },
      }}
    >
      <Container 
        maxWidth="xl" 
        sx={{ 
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 4, lg: 6 },
            alignItems: "center",
            minHeight: { xs: "auto", md: 500, lg: 600 },
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              order: { xs: 2, md: 1 },
            }}
          >
            <Box sx={{ mb: { xs: 3, md: 4 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem", lg: "3rem" },
                  fontWeight: 700,
                  mb: { xs: 1.5, md: 2 },
                  lineHeight: 1.2,
                }}
              >
                Home Maintenance Made Easy!!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                  mb: { xs: 3, md: 4 },
                  color: "text.secondary",
                  lineHeight: 1.6,
                }}
              >
                Connecting customers and technicians for quick, safe, and
                affordable bookings.
              </Typography>
              
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 1.5, sm: 2 },
                  flexWrap: "wrap",
                  mb: { xs: 3, md: 4 },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0F52BA",
                    color: "#fff",
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1.2, sm: 1.5 },
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#0d47a1",
                    },
                  }}
                >
                  Book Now
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleRequestCallOpen}
                  startIcon={<PhoneIcon />}
                  sx={{
                    borderColor: "#0F52BA",
                    color: "#0F52BA",
                    px: { xs: 2.5, sm: 3 },
                    py: { xs: 1.2, sm: 1.5 },
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "8px",
                    "&:hover": {
                      borderColor: "#0d47a1",
                      backgroundColor: "rgba(15, 82, 186, 0.04)",
                    },
                  }}
                >
                  Request a Call
                </Button>
              </Box>
            </Box>
            
            <Box>
              <TextField
                fullWidth
                placeholder="Search service"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "text.secondary" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-root": {
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                    "&:hover fieldset": {
                      borderColor: "#0F52BA",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#0F52BA",
                    },
                  },
                }}
              />
            </Box>
          </Box>

          {/* Right Content - Custom Slider with Next.js Image */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: { xs: 250, sm: 300, md: 400, lg: 500 },
                overflow: "hidden",
                borderRadius: { 
                  xs: "20px",
                  sm: "30px", 
                  md: "150px 0 0 150px",
                  lg: "200px 0 0 200px" 
                },
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  transition: "transform 0.5s ease-in-out",
                  transform: `translateX(-${currentSlide * 100}%)`,
                  height: "100%",
                }}
              >
                {bannerImages.map((image) => (
                  <Box
                    key={image.id}
                    sx={{
                      minWidth: "100%",
                      position: "relative",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      priority={image.id === 1}
                      quality={90}
                    />
                  </Box>
                ))}
              </Box>
              
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: 12, sm: 16 },
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: 1,
                  zIndex: 10,
                }}
              >
                {bannerImages.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => handleDotClick(index)}
                    sx={{
                      width: { xs: 8, sm: 10 },
                      height: { xs: 8, sm: 10 },
                      borderRadius: "50%",
                      backgroundColor:
                        currentSlide === index
                          ? "#0F52BA"
                          : "rgba(255, 255, 255, 0.5)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor:
                          currentSlide === index
                            ? "#0F52BA"
                            : "rgba(255, 255, 255, 0.8)",
                        transform: "scale(1.2)",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Request Call Dialog */}
      <Dialog
        open={requestCallOpen}
        onClose={handleRequestCallClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "16px",
            p: { xs: 1, sm: 2 },
            m: { xs: 2, sm: 3 },
            maxWidth: { xs: "calc(100% - 32px)", sm: "calc(100% - 48px)" },
          },
        }}
      >
        <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Box sx={{ position: "relative" }}>
            <IconButton
              onClick={handleRequestCallClose}
              sx={{
                position: "absolute",
                right: { xs: -8, sm: -16 },
                top: { xs: -8, sm: -16 },
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                mb: { xs: 2, sm: 3 },
                fontWeight: 600,
                textAlign: "center",
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
              }}
            >
              Please fill in the information below
            </Typography>
            <Box
              component="form"
              onSubmit={handleFormSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                fullWidth
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                    "&:hover fieldset": {
                      borderColor: "#0F52BA",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#0F52BA",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                name="phoneNo"
                placeholder="Mobile Number"
                value={formData.phoneNo}
                onChange={handleInputChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                    "&:hover fieldset": {
                      borderColor: "#0F52BA",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#0F52BA",
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#0F52BA",
                  color: "#fff",
                  py: { xs: 1.2, sm: 1.5 },
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#0d47a1",
                  },
                }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default BannerSection;