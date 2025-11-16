// components/NavBar.tsx
"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assests/Images/logo.png";
const CleaningServiceNavBar: React.FC = () => {
  const [anchorElServices, setAnchorElServices] = useState<null | HTMLElement>(
    null
  );
  const [anchorElLocation, setAnchorElLocation] = useState<null | HTMLElement>(
    null
  );
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    type: "services" | "location"
  ) => {
    if (type === "services") setAnchorElServices(event.currentTarget);
    else setAnchorElLocation(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElServices(null);
    setAnchorElLocation(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f2f2f2",
        color: "black",
        boxShadow: "none",
        padding: "8px 0",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Box component="span" sx={{ mr: 1 }}>
            {/* Your SVG logo
            <svg
              width="88"
              height="35"
              viewBox="0 0 88 35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.9193 25.6143H40.9681C36.4671 25.6143 33.3701 23.0835 33.3701 19.6016C33.3701 16.2272 35.833 13.6568 42.7969 13.6568H44.4501V13.4133C44.4501 10.741 43.1819 9.93136 40.368 9.93136C36.954 9.93136 35.0573 11.2336 34.3553 12.1111H34.1797V10.5938C34.1797 8.48196 36.0764 5.95117 41.0757 5.95117C45.2994 5.95117 49.0927 7.92145 49.0927 14.4607V18.8202C49.0984 22.8344 46.1429 25.6143 41.9193 25.6143Z"
                fill="black"
              />
            </svg> */}
            <Image src={logo} alt="logo"></Image>
          </Box>
        </Link>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 3,
          }}
        >
          <Button
            component={Link}
            href="/Home/cleaning-services"
            sx={{ color: "black" }}
          >
            Home
          </Button>
          <Button component={Link} href="/about-us/cleaning-service-about" sx={{ color: "black" }}>
            About Us
          </Button>

          {/* Services Dropdown */}
          <Button
            onClick={(e) => handleOpen(e, "services")}
            sx={{ color: "black" }}
          >
            Services
          </Button>
          <Menu
            anchorEl={anchorElServices}
            open={Boolean(anchorElServices)}
            onClose={handleClose}
          >
            {[
              "Car Detailing Services",
              "Carpet Cleaning Services",
              "Cement Water Tank Cleaning Services",
              "Chair Cleaning Services",
              "Commercial Deep Cleaning Services",
              "Curtain Cleaning Services",
              "Deep Cleaning Services",
              "Mattress Cleaning Services",
              "Plastic Water Tank Cleaning Services",
              "Sofa Cleaning Services",
              "Solar Panel Cleaning Services",
            ].map((service) => (
              <MenuItem key={service} onClick={handleClose}>
                <Link
                  href={`/Home/cleaning-services/${service.toLowerCase().replace(/ /g, "-")}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {service}
                </Link>
              </MenuItem>
            ))}
          </Menu>

        

          <Button
            component={Link}
            href="#"
            sx={{
              color: "white",
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            SignIn / SignUp
          </Button>
        </Box>

        {/* Mobile Menu */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "black" }}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Dropdown Menu */}
      {mobileMenu && (
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            backgroundColor: "#f2f2f2",
            px: 2,
            pb: 2,
          }}
        >
          <Button
            component={Link}
            href="/Home/cleaning-services"
            sx={{ color: "black" }}
          >
            Home
          </Button>

          <Button component={Link} href="/about-us/cleaning-service-about" sx={{ color: "black" }}>
            About Us
          </Button>
          <Button
            sx={{ color: "black" }}
            onClick={(e) => handleOpen(e, "services")}
          >
            Services
          </Button>
          
          <Button
            component={Link}
            href="#"
            sx={{
              color: "white",
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            SignIn / SignUp
          </Button>
        </Box>
      )}
    </AppBar>
  );
};

export default CleaningServiceNavBar;
