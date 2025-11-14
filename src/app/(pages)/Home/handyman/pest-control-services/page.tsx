"use client";

import NavBar from "@/app/Components/Navabar";
import Footer from "@/app/Components/HandymanFooter";
import HeroSection from "@/app/Components/PestControlBanner"
import PestControlServices from "@/app/Components/Cards/PestControlServiceCard";
import PestControlServiceDescription from "@/app/Components/PestControlDescription";
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
