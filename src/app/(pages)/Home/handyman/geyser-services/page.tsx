"use client";

import NavBar from "@/app/Components/Navabar";
import Footer from "@/app/Components/HandymanFooter";
import Geyserbanner from '../../../../Components/banners/GeyserBannner'
import GeyserServicesSection from "@/app/Components/Cards/GeyserserviceCard";
import GeyserServicesDescription from "@/app/Components/Cards_Description/GeyserServicesDescription";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <Geyserbanner></Geyserbanner>
      <GeyserServicesSection></GeyserServicesSection>
      <GeyserServicesDescription></GeyserServicesDescription>
      <Footer></Footer>

    </div>
  );
}
