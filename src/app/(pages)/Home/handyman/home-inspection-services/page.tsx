"use client";

import NavBar from "@/app/Components/Navabar";
import Footer from "@/app/Components/HandymanFooter";
import HeroSection from "@/app/Components/banners/homeinspectionBanner";
import Homeinspectionservices from "@/app/Components/Cards/HomeinsepectionCard";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Homeinspectionservices></Homeinspectionservices>
      <Footer></Footer>

    </div>
  );
}
