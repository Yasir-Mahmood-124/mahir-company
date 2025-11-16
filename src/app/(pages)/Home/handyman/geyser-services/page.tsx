"use client";

import NavBar from "@/Components/Navabar";
import Footer from "@/Components/HandymanFooter";
import Geyserbanner from "@/Components/banners/GeyserBannner";
import GeyserServicesSection from "@/Components/Cards/GeyserserviceCard";
import GeyserServicesDescription from "@/Components/Cards_Description/GeyserServicesDescription";

export default function HandymanHome() {
  return (
    <div>
      <NavBar />
      <Geyserbanner />
      <GeyserServicesSection />
      <GeyserServicesDescription />
      <Footer />
    </div>
  );
}
