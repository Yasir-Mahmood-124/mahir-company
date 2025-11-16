"use client";

import NavBar from "@/Components/Navabar";
import Footer from "@/Components/HandymanFooter";
import BannerSection from "@/Components/banners/Banner";
import HeroSection from "@/Components/banners/AcServiceBanner";
import ServiceCard from "@/Components/Card_Details/HandymanServiceCardDetails";
import ACServicesSection from "@/Components/Cards/AcServiceSectionCard";
import ACServicesDescription from "@/Components/Cards_Description/ACServicesDescription";

export default function HandymanHome() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ACServicesSection />
      <ACServicesDescription />
      <Footer />
    </div>
  );
}
