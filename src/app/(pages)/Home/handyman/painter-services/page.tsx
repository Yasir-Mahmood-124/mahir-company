"use client";

import NavBar from "@/app/Components/Navabar";
import Footer from "@/app/Components/HandymanFooter";
import HeroSection from "@/app/Components/banners/PainterservicesBanner";
import PainterService from "@/app/Components/Cards/PainterServiceSectionCard";
import PainterServiceDescription from "@/app/Components/Cards_Description/PainterServiceDescription";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <PainterService></PainterService>
      <PainterServiceDescription></PainterServiceDescription>
      <Footer></Footer>

    </div>
  );
}
