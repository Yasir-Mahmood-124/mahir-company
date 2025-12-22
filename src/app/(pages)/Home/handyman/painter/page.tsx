"use client";

import NavBar from "@/Components/Navabar";
import Footer from "@/Components/HandymanFooter";
import HeroSection from "@/Components/banners/PainterservicesBanner";
import PainterService from "@/Components/Cards/PainterServiceSectionCard";
import PainterServiceDescription from "@/Components/Cards_Description/PainterServiceDescription";

export default function HandymanHome() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <PainterService />
      <PainterServiceDescription />
      <Footer />
    </div>
  );
}
