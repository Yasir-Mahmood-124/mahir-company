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
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

interface BannerImage {
  id: number;
  src: string;
  alt: string;
}

const bannerImages: BannerImage[] = [
  {
    id: 1,
    src: "https://cdn.mrmahir.com/uploads/aebf5ef0-8a27-468e-8c9d-84d2e756b22f.jpg",
    alt: "Banner Image 1",
  },
  {
    id: 2,
    src: "https://cdn.mrmahir.com/uploads/da5edcd4-7840-4c2b-a74d-643185bf372d.jpg",
    alt: "Banner Image 2",
  },
  {
    id: 3,
    src: "https://cdn.mrmahir.com/uploads/fb1804c0-869d-4db3-a16e-09b56cbe6060.png",
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

  // Auto slide functionality
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
        minHeight: "100vh",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <Container maxWidth="xl" sx={{ px: 0, py: 0, maxWidth: "100% !important" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 0,
            alignItems: "stretch",
            minHeight: { xs: 400, sm: 450, md: 550, lg: 600 },
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
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 4, md: 6 },
            }}
          >
            {/* Banner Content */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
                  fontWeight: 700,
                  mb: 2,
                  display: { xs: "none", md: "block" },
                }}
              >
                Home Maintenance Made Easy!!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  mb: 4,
                  color: "text.secondary",
                  display: { xs: "none", md: "block" },
                }}
              >
                Connecting customers and technicians for quick, safe, and
                affordable bookings.
              </Typography>
              {/* Action Buttons */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  mb: 4,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0F52BA",
                    color: "#fff",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
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
                    px: 3,
                    py: 1.5,
                    fontSize: "1rem",
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
            {/* Search Box */}
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

          {/* Right Content - Custom Slider */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: { xs: "100%", lg: "50%" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: { xs: 300, sm: 350, md: 450, lg: 600 },
                overflow: "hidden",
                borderRadius: "200px 0 0 200px",
              }}
            >
              {/* Slider Container */}
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
                      style={{ objectFit: "cover" }}
                      priority={image.id === 1}
                    />
                  </Box>
                ))}
              </Box>
              
              {/* Pagination Dots */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 16,
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
                      width: 10,
                      height: 10,
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
            p: 2,
          },
        }}
      >
        <DialogContent>
          <Box sx={{ position: "relative" }}>
            <IconButton
              onClick={handleRequestCallClose}
              sx={{
                position: "absolute",
                right: -8,
                top: -8,
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 600,
                textAlign: "center",
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
                  py: 1.5,
                  fontSize: "1rem",
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