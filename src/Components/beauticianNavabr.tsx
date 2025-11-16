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
  const [anchorElLocation, setAnchorElLocation] = useState<null | HTMLElement>(null);
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
            <Image src={logo} alt="logo" />
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
          <Button component={Link} href="/Home/beautician" sx={{ color: "black" }}>
            Home
          </Button>
          <Button component={Link} href="/about-us/beautician-about" sx={{ color: "black" }}>
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
              { name: "Facial Services", url: "facial-services" },
              { name: "Hair Styling & Hair Cut", url: "hair-styling-and-hair-cut" },
              { name: "Hair Treatment", url: "hair-treatment-services" },
              { name: "Makeup Services", url: "makeup-services" },
              { name: "Mani Pedi", url: "mani-pedi-services" },
              { name: "Massage Services for Women", url: "massage-services" },
              { name: "Mehndi Services", url: "mehndi-services" },
              { name: "Monthly Beauty Deals", url: "monthly-beauty-deals" },
              { name: "Salon Packages", url: "salon-packages" },
              { name: "Waxing Services", url: "waxing-services" },
            ].map((service) => (
              <MenuItem key={service.url} onClick={handleClose}>
                <Link
                  href={`/Home/beautician/${service.url}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {service.name}
                </Link>
              </MenuItem>
            ))}
          </Menu>

          <Button
            component={Link}
            href="https://mahircompany.com/blog"
            target="_blank"
            sx={{ color: "black" }}
          >
            Blog
          </Button>

          {/* Location Dropdown */}
          <Button onClick={(e) => handleOpen(e, "location")} sx={{ color: "black" }}>
            Lahore
          </Button>
          <Menu
            anchorEl={anchorElLocation}
            open={Boolean(anchorElLocation)}
            onClose={handleClose}
          >
            {["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Multan"].map((city) => (
              <MenuItem key={city} onClick={handleClose}>
                <Link
                  href={`/${city.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {city}
                </Link>
              </MenuItem>
            ))}
          </Menu>

          {/* SignIn/SignUp Button - Updated styling */}
          <Button
            component={Link}
            href="#"
            sx={{
              color: "white",
              backgroundColor: "#b8858a",
              textTransform: "none",
              fontWeight: 500,
              padding: "8px 24px",
              borderRadius: "25px",
              "&:hover": { 
                backgroundColor: "#a67479",
              },
            }}
          >
            signin/signUp
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
          <Button component={Link} href="/Home/beautician" sx={{ color: "black" }}>
            Home
          </Button>

          <Button component={Link} href="/about-us/beautician-about" sx={{ color: "black" }}>
            About Us
          </Button>
          <Button sx={{ color: "black" }} onClick={(e) => handleOpen(e, "services")}>
            Services
          </Button>
          <Button sx={{ color: "black" }} onClick={(e) => handleOpen(e, "location")}>
            Lahore
          </Button>
          <Button
            component={Link}
            href="#"
            sx={{
              color: "white",
              backgroundColor: "#b8858a",
              textTransform: "none",
              fontWeight: 500,
              padding: "8px 24px",
              borderRadius: "25px",
              "&:hover": { 
                backgroundColor: "#a67479",
              },
            }}
          >
            signin/signUp
          </Button>
        </Box>
      )}
    </AppBar>
  );
};

export default NavBar;