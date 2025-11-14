"use client";

import CarpetCleaningServicesSection from "@/app/Components/Cards/CarpetCleaningServicesCard";
import NavBar from "@/app/Components/CleaningServiceNavbar";
import Footer from "@/app/Components/HandymanFooter";
import CarpetCleaningBanner from "@/app/Components/banners/carpet_cleaning_banner";
import CarpetCleaningDescription from "@/app/Components/Cards_Description/carpet_cleaning_description";
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
