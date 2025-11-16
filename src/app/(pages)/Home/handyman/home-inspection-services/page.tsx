"use client";

import NavBar from "@/Components/Navabar";
import Footer from "@/Components/HandymanFooter";
import HeroSection from "@/Components/banners/homeinspectionBanner";
import Homeinspectionservices from "@/Components/Cards/HomeinsepectionCard";

export default function HandymanHome() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Homeinspectionservices />
      <Footer />
    </div>
  );
}
