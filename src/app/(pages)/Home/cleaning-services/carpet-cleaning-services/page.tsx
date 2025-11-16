"use client";

import CarpetCleaningServicesSection from "@/Components/Cards/CarpetCleaningServicesCard";
import NavBar from "@/Components/CleaningServiceNavbar";
import Footer from "@/Components/HandymanFooter";
import CarpetCleaningBanner from "@/Components/banners/carpet_cleaning_banner";
import CarpetCleaningDescription from "@/Components/Cards_Description/carpet_cleaning_description";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <CarpetCleaningBanner></CarpetCleaningBanner>
      <CarpetCleaningServicesSection></CarpetCleaningServicesSection>
      <CarpetCleaningDescription></CarpetCleaningDescription>
      <Footer></Footer>
    </div>
  );
}
