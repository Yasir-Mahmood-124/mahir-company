"use client";

import NavBar from "@/app/Components/Navabar";
import Footer from "@/app/Components/HandymanFooter";
import HeroSection from "@/app/Components/banners/PestControlBanner"
import PestControlServices from "@/app/Components/Cards/PestControlServiceCard";
import PestControlServiceDescription from "@/app/Components/Cards_Description/PestControlDescription";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <PestControlServices></PestControlServices>
      <PestControlServiceDescription></PestControlServiceDescription>
      <Footer></Footer>

    </div>
  );
}
