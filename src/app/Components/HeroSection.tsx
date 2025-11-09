"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// ✅ Image imports
import handyman from "./Images/handyman1.webp";
import cleaning from "./Images/cleaning1.webp";
import beautician from "./Images/beautician1.png";
import solar from "./Images/solar.webp";
import inspection from "./Images/home-inspection.webp";
import banner1 from "./Images/banner-homeservice.webp";
import banner3 from "./Images/banner-homecare.webp";
import Logoes from "./Images/navlogo.png";

// ❌ Remove this old import (it breaks routing)
// import home from "../(pages)/Home/handyman";

type City = {
  value: string;
  name: string;
  services: string[];
};

type Service = {
  value: string;
  name: string;
  image: any;
  tag?: string;
  chipLabel?: string;
};

const cities: City[] = [
  {
    value: "lahore",
    name: "Lahore",
    services: [
      "handyman",
      "beautician",
      "cleaning-services",
      "mbm",
      "solar-services",
      "home-inspection",
    ],
  },
  { value: "multan", name: "Multan", services: ["handyman"] },
  {
    value: "karachi",
    name: "Karachi",
    services: ["handyman", "cleaning-services", "mbm"],
  },
  {
    value: "islamabad",
    name: "Islamabad",
    services: ["handyman", "cleaning-services", "beautician", "mbm"],
  },
  {
    value: "rawalpindi",
    name: "Rawalpindi",
    services: ["handyman", "cleaning-services", "beautician", "mbm"],
  },
];

const allServices: Service[] = [
  { value: "handyman", name: "Home Services", image: handyman },
  { value: "cleaning-services", name: "Cleaning Services", image: cleaning },
  {
    value: "beautician",
    name: "Personal Care",
    image: beautician,
    tag: "Females Only",
  },
  {
    value: "solar-services",
    name: "Solar Installation Services",
    image: solar,
  },
  { value: "home-inspection", name: "Home Inspection", image: inspection },
  {
    value: "mbm",
    name: "Maintained by Mahir",
    image: handyman,
    chipLabel: "New",
  },
];

export default function WelcomePage() {
  const [selectedCity] = useState<City>(cities[0]);
  const [availableServices, setAvailableServices] = useState<Service[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const banners = [banner1, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const filtered = allServices.filter((service) =>
      selectedCity.services.includes(service.value)
    );
    setAvailableServices(filtered);
  }, [selectedCity]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e8ecef 100%)",
        minHeight: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        overflowX: "hidden",
        width: "100%",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          background: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: isMobile ? "16px 20px" : "20px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={Logoes}
              alt="Mahir Company Logo"
              width={isMobile ? 140 : 180}
              height={isMobile ? 40 : 60}
            />
          </Link>

          {/* Login Button */}
          <Link href="/login">
            <button
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "#fff",
                border: "none",
                padding: isMobile ? "10px 24px" : "12px 32px",
                borderRadius: "25px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "1rem",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                transition: "all 0.3s ease",
              }}
            >
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 16px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "55% 45%",
            gap: "40px",
            padding: isMobile ? "40px 0" : "60px 0",
            alignItems: "center",
          }}
        >
          {/* LEFT - Services */}
          <div style={{ order: isMobile ? 2 : 1 }}>
            <h1
              style={{
                fontSize: isMobile ? "2.2rem" : "3.2rem",
                fontWeight: "800",
                marginBottom: "15px",
                color: "#1a1a1a",
                lineHeight: 1.2,
              }}
            >
              On Time, Done Right.
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#666",
                marginBottom: "40px",
                lineHeight: 1.6,
              }}
            >
              Connecting customers and technicians for quick, safe, and affordable services.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(2, 1fr)",
                gap: isMobile ? "15px" : "20px",
              }}
            >
              {availableServices.map((service) => (
                <Link
                  key={service.value}
                  href={`/Home/${service.value}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "20px",
                      padding: isMobile ? "20px 15px" : "30px 20px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {service.chipLabel && (
                      <span
                        style={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          background: "#4CAF50",
                          color: "#fff",
                          padding: "4px 12px",
                          borderRadius: "12px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                        }}
                      >
                        {service.chipLabel}
                      </span>
                    )}
                    <div
                      style={{
                        width: isMobile ? "70px" : "90px",
                        height: isMobile ? "70px" : "90px",
                        margin: "0 auto 15px",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={service.name}
                        width={90}
                        height={90}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <h4
                      style={{
                        margin: 0,
                        fontWeight: "700",
                        fontSize: isMobile ? "0.95rem" : "1.05rem",
                        color: "#1a1a1a",
                      }}
                    >
                      {service.name}
                    </h4>
                    {service.tag && (
                      <p
                        style={{
                          margin: "8px 0 0 0",
                          fontSize: "0.85rem",
                          color: "#667eea",
                          fontWeight: "600",
                        }}
                      >
                        {service.tag}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT - Carousel */}
          <div
            style={{
              order: isMobile ? 1 : 2,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "relative",
              paddingLeft: isMobile ? "0" : "20px",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: isMobile ? "100%" : "420px",
                height: isMobile ? "280px" : "440px",
                borderRadius: "30px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                position: "relative",
              }}
            >
              <Image
                key={currentIndex}
                src={banners[currentIndex]}
                alt={`Banner ${currentIndex}`}
                width={420}
                height={440}
                priority
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "opacity 0.8s ease-in-out",
                }}
              />

              {/* Buttons */}
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 15,
                  transform: "translateY(-50%)",
                  backgroundColor: "#ffffff90",
                  color: "#1a1a1a",
                  "&:hover": { backgroundColor: "#fff" },
                  zIndex: 2,
                  width: 45,
                  height: 45,
                }}
              >
                <ArrowBackIos sx={{ marginLeft: "8px" }} />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: 15,
                  transform: "translateY(-50%)",
                  backgroundColor: "#ffffff90",
                  color: "#1a1a1a",
                  "&:hover": { backgroundColor: "#fff" },
                  zIndex: 2,
                  width: 45,
                  height: 45,
                }}
              >
                <ArrowForwardIos />
              </IconButton>

              {/* Dots */}
              <div
                style={{
                  position: "absolute",
                  bottom: 25,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "10px",
                  zIndex: 2,
                }}
              >
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      width: currentIndex === index ? "30px" : "12px",
                      height: "12px",
                      borderRadius: "6px",
                      border: "none",
                      backgroundColor:
                        currentIndex === index ? "#fff" : "#ffffff60",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
