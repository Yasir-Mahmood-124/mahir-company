"use client";

import React, { useState, useEffect, ReactNode } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Button,
  CircularProgress,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assests/Images/logo.png";

type Service = {
  id: string;
  name: string;
  currentPrice: number;
  discountPrice: number;
  mainCategory: string;
  subCategory: string;
  service: string;
  description: string;
  reviews: number;
  includes: string[];
  notIncludes: string[];
  image?: string;
  subCategoryImage?: string;
};

const NavBar: React.FC = () => {
  const [anchorElServices, setAnchorElServices] = useState<null | HTMLElement>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const res = await fetch("/api/products");
        const data: { success: boolean; data: Service[] } = await res.json();

        if (data.success && Array.isArray(data.data)) {
          const homeServices: Service[] = data.data.filter(
            (service: Service) => service.mainCategory === "Home Services"
          );

          const uniqueSubCats: string[] = Array.from(
            new Set(
              homeServices
                .map((service: Service) => service.subCategory)
                .filter((subCat): subCat is string => Boolean(subCat))
            )
          );

          setSubCategories(uniqueSubCats.sort());
        }
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubCategories();
  }, []);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElServices(null);
  };

  const renderServicesMenu = (): ReactNode[] => {
    if (loading) {
      return [
        <MenuItem key="loading">
          <CircularProgress size={20} />
          <Box sx={{ ml: 2 }}>Loading...</Box>
        </MenuItem>,
      ];
    }

    if (subCategories.length === 0) {
      return [
        <MenuItem key="no-services" disabled>
          No services available
        </MenuItem>,
      ];
    }

    return subCategories.map((subCategory: string) => {
      const slug = subCategory.toLowerCase().replace(/\s+/g, "-");
      return (
        <MenuItem key={subCategory} onClick={handleClose}>
          <Link
            href={`/Home/handyman/${slug}`}
            style={{ textDecoration: "none", color: "black", width: "100%" }}
          >
            {subCategory}
          </Link>
        </MenuItem>
      );
    });
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
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Box component="span" sx={{ display: "flex", alignItems: "center", height: "60px", py: 1 }}>
            <Image src={logo} alt="UstadOnCall Logo" width={250} height={250} style={{ objectFit: "contain", height: "auto" }} priority />
          </Box>
        </Link>

        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}>
          <Button component={Link} href="/Home/handyman" sx={{ color: "black" }}>
            Home
          </Button>
          <Button component={Link} href="/about-us/handyman-about" sx={{ color: "black" }}>
            About Us
          </Button>

          <Button onClick={handleOpen} sx={{ color: "black" }}>
            Services
          </Button>
          <Menu anchorEl={anchorElServices} open={Boolean(anchorElServices)} onClose={handleClose}>
            {renderServicesMenu()}
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

        <IconButton sx={{ display: { xs: "flex", md: "none" }, color: "black" }} onClick={() => setMobileMenu(!mobileMenu)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {mobileMenu && (
        <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", backgroundColor: "#f2f2f2", px: 2, pb: 2 }}>
          <Button component={Link} href="/Home/handyman" sx={{ color: "black" }}>
            Home
          </Button>
          <Button component={Link} href="/about-us/handyman-about" sx={{ color: "black" }}>
            About Us
          </Button>

          <Button sx={{ color: "black" }} onClick={handleOpen}>
            Services
          </Button>
          <Menu anchorEl={anchorElServices} open={Boolean(anchorElServices)} onClose={handleClose}>
            {renderServicesMenu()}
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
      )}
    </AppBar>
  );
};

export default NavBar;
