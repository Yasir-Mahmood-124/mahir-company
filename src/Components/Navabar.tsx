// components/NavBar.tsx
"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assests/Images/logo.png";

const NavBar: React.FC = () => {
  const [anchorElServices, setAnchorElServices] = useState<null | HTMLElement>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElServices(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        color: "black",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        padding: "4px 0",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Box 
            component="span" 
            sx={{ 
              display: "flex", 
              alignItems: "center",
              height: "60px",
              py: 1
            }}
          >
            <Image
              src={logo} 
              alt="UstadOnCall Logo"
              width={250}
              height={250}
              style={{ 
                objectFit: "contain",
                height: "auto",
              }}
              priority
            />
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
          <Button component={Link} href="/Home/handyman" sx={{ color: "black" }}>
            Home
          </Button>
          <Button component={Link} href="/about-us/handyman-about" sx={{ color: "black" }}>
            About Us
          </Button>

          {/* Services Dropdown */}
          <Button
            onClick={handleOpen}
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
              "AC Services",
              "Carpenter Services",
              "Electrician Services",
              "Geyser Services",
              "Handyman Services",
              "Home Appliances Repair",
              "Home Inspection Services",
              "Painter Services",
              "Pest Control Services",
              "Plumber Services",
            ].map((service) => (
              <MenuItem key={service} onClick={handleClose}>
                <Link
                  href={`/Home/handyman/${service.toLowerCase().replace(/ /g, "-")}`}
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

        {/* Mobile Menu Icon */}
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
          <Button component={Link} href="/Home/handyman" sx={{ color: "black" }}>
            Home
          </Button>

          <Button component={Link} href="/about-us/handyman-about" sx={{ color: "black" }}>
            About Us
          </Button>
          <Button sx={{ color: "black" }} onClick={handleOpen}>
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

export default NavBar;