"use client";

import NavBar from "@/Components/Navabar";
import Footer from "@/Components/HandymanFooter";
import HeroSection from "@/Components/banners/HandymanServiceBanner";
import HandymanServicesSection from "@/Components/Cards/HandymanServiceCard";
import HandymanServiceDescription from "@/Components/Cards_Description/HandymanServiceDescription";

export default function HandymanHome() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HandymanServicesSection />
      <HandymanServiceDescription />
      <Footer />
    </div>
  );
}
