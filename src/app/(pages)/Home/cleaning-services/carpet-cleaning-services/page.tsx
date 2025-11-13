"use client";

import CarpetCleaningServicesSection from "@/app/Components/CarpetCleaningServicesCard";
import NavBar from "@/app/Components/CleaningServiceNavbar";
import Footer from "@/app/Components/HandymanFooter";
import CarpetCleaningBanner from "@/app/Components/carpet_cleaning_banner";
import CarpetCleaningDescription from "@/app/Components/carpet_cleaning_description";
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
