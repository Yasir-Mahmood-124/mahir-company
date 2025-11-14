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

import banner4 from "../Images/banner4.jpg";
import banner5 from "../Images/banner5.jpg";
import banner1 from "../Images/banner1.jpg";


const BannerSection: React.FC = () => {
  const [requestCallOpen, setRequestCallOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
  });

  const bannerImages = [
    { id: 1, src: banner4, alt: "Home Maintenance Service 1" },
    { id: 2, src: banner5, alt: "Home Maintenance Service 2" },
    { id: 3, src: banner1, alt: "Home Maintenance Service 3" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [bannerImages.length]);

  const handleRequestCallOpen = () => setRequestCallOpen(true);
  const handleRequestCallClose = () => setRequestCallOpen(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleRequestCallClose();
    setFormData({ name: "", phoneNo: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 4, md: 0 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6, lg: 8 },
            alignItems: "center",
          }}
        >
          {/* ========== LEFT SIDE: Content ========== */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              order: { xs: 2, md: 1 },
            }}
          >
            {/* Heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.2,
                color: "#1a1a1a",
              }}
            >
              Home Maintenance Made Easy!!
            </Typography>

            {/* Subheading */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem" },
                mb: 4,
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              Connecting customers and technicians for quick, safe, and
              affordable bookings.
            </Typography>

            {/* Buttons */}
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
                  boxShadow: "0 4px 14px rgba(15, 82, 186, 0.3)",
                  "&:hover": {
                    backgroundColor: "#0d47a1",
                    boxShadow: "0 6px 20px rgba(15, 82, 186, 0.4)",
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
                  borderWidth: "2px",
                  "&:hover": {
                    borderWidth: "2px",
                    borderColor: "#0d47a1",
                    backgroundColor: "rgba(15, 82, 186, 0.05)",
                  },
                }}
              >
                Request a Call
              </Button>
            </Box>

            {/* Search Box */}
            <TextField
              fullWidth
              placeholder="Search for services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#999" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  fontSize: "1rem",
                  "& fieldset": {
                    borderColor: "#e0e0e0",
                  },
                  "&:hover fieldset": {
                    borderColor: "#0F52BA",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#0F52BA",
                    borderWidth: "2px",
                  },
                },
              }}
            />
          </Box>

          {/* ========== RIGHT SIDE: Image Slider ========== */}
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
                height: { xs: 300, sm: 350, md: 450, lg: 550 },
                overflow: "hidden",
                borderRadius: {
                  xs: "20px",
                  md: "150px 0 0 150px",
                  lg: "200px 0 0 200px",
                },
                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
              }}
            >
              {/* Slider Container */}
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {bannerImages.map((image, index) => (
                  <Box
                    key={image.id}
                    sx={{
                      minWidth: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                      quality={95}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ))}
              </Box>

              {/* Dots Navigation */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: 1.5,
                  zIndex: 10,
                }}
              >
                {bannerImages.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor:
                        currentSlide === index
                          ? "#0F52BA"
                          : "rgba(255, 255, 255, 0.6)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor:
                          currentSlide === index
                            ? "#0F52BA"
                            : "rgba(255, 255, 255, 0.9)",
                        transform: "scale(1.3)",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* ========== Request Call Dialog ========== */}
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
        <DialogContent sx={{ p: 3, position: "relative" }}>
          <IconButton
            onClick={handleRequestCallClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "#666",
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
              fontSize: "1.3rem",
            }}
          >
            Request a Call Back
          </Typography>

          <Box component="form" onSubmit={handleFormSubmit}>
            <TextField
              fullWidth
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              sx={{
                mb: 2.5,
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
                mb: 3,
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
              Send Request
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default BannerSection;