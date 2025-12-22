"use client";

import NavBar from "@/Components/Navabar";
import Footer from "@/Components/HandymanFooter";
import HeroSection from "@/Components/banners/PestControlBanner";
import PestControlServices from "@/Components/Cards/PestControlServiceCard";
import PestControlServiceDescription from "@/Components/Cards_Description/PestControlDescription";

export default function HandymanHome() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <PestControlServices />
      <PestControlServiceDescription />
      <Footer />
    </div>
  );
}
