"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  TextField,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import playstoresvg from "@/assests/Images/playstore.svg";
import appstoresvg from "@/assests/Images/AppleStore.svg";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter email:", email);
    setEmail("");
  };

  const services = [
    { name: "Facial Services", href: "/facial-services" },
    { name: "Hair Styling & Hair Cut", href: "/hair-styling-and-hair-cut" },
    { name: "Hair Treatment", href: "/hair-treatment-services" },
    { name: "Makeup Services", href: "/makeup-services" },
    { name: "Mani Pedi", href: "/mani-pedi-services" },
    { name: "Massage Services for Women", href: "/massage-services" },
    { name: "Mehndi Services", href: "/mehndi-services" },
    { name: "Monthly Beauty Deals", href: "/monthly-beauty-deals" },
    { name: "Salon Packages", href: "/salon-packages" },
    { name: "Waxing Services", href: "/waxing-services" },
  ];

  const cities = [
    { name: "Lahore", href: "/lahore" },
    { name: "Islamabad", href: "/islamabad" },
    { name: "Rawalpindi", href: "/rawalpindi" },
  ];

  const mainMenu = [
    { name: "Home", href: "/beautician" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Sitemap", href: "/sitemap" },
    { name: "FAQs", href: "/faqs" },
    { name: "Term & Conditions", href: "/terms-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Blogs", href: "https://mahircompany.com/blog/", target: "_blank" },
  ];

  const socialLinks = [
    { icon: <PhoneIcon />, href: "tel:+923096661919", label: "0309 6661919" },
    { icon: <TwitterIcon />, href: "https://twitter.com/MahirCompany", label: "Twitter" },
    { icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/mr-mahir/", label: "Linkedin" },
    { icon: <PinterestIcon />, href: "https://www.pinterest.com/MahirCompany/", label: "Pinterest" },
    { icon: <YouTubeIcon />, href: "https://www.youtube.com/channel/UC0J5hmQpTgw3TgLMc0OjhqQ", label: "Youtube" },
    { icon: <InstagramIcon />, href: "https://www.instagram.com/mahir_company/", label: "Instagram" },
    { icon: <FacebookIcon />, href: "https://www.facebook.com/teammahir/", label: "Facebook" },
    { icon: <WhatsAppIcon />, href: "https://api.whatsapp.com/send?phone=+923096665959&text=Hi+Mr+Mahir%21&lang=en", label: "WhatsApp" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#b76e78",
        color: "#ffffff",
        pt: { xs: 6, md: 8 },
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Services Column */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "#ffffff",
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Services
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {services.map((service, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Link
                    href={service.href}
                    sx={{
                      color: "#ffffff",
                      textDecoration: "none",
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                      "&:hover": {
                        color: "#FFB8C3",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {service.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Available in Column */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "#ffffff",
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Available in
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {cities.map((city, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Link
                    href={city.href}
                    sx={{
                      color: "#ffffff",
                      textDecoration: "none",
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                      "&:hover": {
                        color: "#FFE5EA",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {city.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Main Menu Column */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "#ffffff",
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Main Menu
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {mainMenu.map((item, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Link
                    href={item.href}
                    target={item.target}
                    sx={{
                      color: "#ffffff",
                      textDecoration: "none",
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                      "&:hover": {
                        color: "#FFE5EA",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {item.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Connect with us Column */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "#ffffff",
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Connect with us
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {socialLinks.map((social, index) => (
                <Box
                  component="li"
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    sx={{
                      color: "#ffffff",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                      "&:hover": {
                        color: "#FFE5EA",
                      },
                    }}
                  >
                    <IconButton
                      size="small"
                      sx={{
                        color: "#ffffff",
                        backgroundColor: "#9d6370",
                        p: 0.5,
                        "&:hover": {
                          backgroundColor: "#8a5562",
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                    <Typography sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" } }}>
                      {social.label}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Newsletter Column */}
          <Grid item xs={12} md={2.4}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "#ffffff",
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              News Letter
            </Typography>
            <Typography
              sx={{
                mb: 2,
                fontSize: { xs: "0.85rem", md: "0.9rem" },
                color: "#ffffff",
              }}
            >
              We don't spam.
            </Typography>
            <Box
              component="form"
              onSubmit={handleNewsletterSubmit}
              sx={{ mb: 3 }}
            >
              <TextField
                fullWidth
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    fontSize: { xs: "0.85rem", md: "0.9rem" },
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                    "&:hover fieldset": {
                      borderColor: "#FFB8C3",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#9d6370",
                    },
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#9d6370",
                  color: "#ffffff",
                  py: 1,
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(157, 99, 112, 0.3)",
                  "&:hover": {
                    backgroundColor: "#8a5562",
                    boxShadow: "0 6px 16px rgba(157, 99, 112, 0.4)",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>

            {/* App Store Buttons */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Link
                href="https://apps.apple.com/pk/app/mr-mahir-home-maintenance/id1576178647"
                target="_blank"
                sx={{
                  display: "block",
                }}
              >
                <Image
                  src={appstoresvg}
                  alt="Download on App Store"
                  width={144}
                  height={48}
                  style={{
                    width: "100%",
                    maxWidth: "144px",
                    height: "auto",
                  }}
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.mrmahir.customer"
                target="_blank"
                sx={{
                  display: "block",
                }}
              >
                <Image
                  src={playstoresvg}
                  alt="Get it on Google Play"
                  width={144}
                  height={48}
                  style={{
                    width: "100%",
                    maxWidth: "144px",
                    height: "auto",
                  }}
                />
              </Link>
            </Box>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default Footer;