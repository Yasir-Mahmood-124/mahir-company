"use client";

import NavBar from "@/Components/CleaningServiceNavbar";
import Footer from "@/Components/HandymanFooter";
import SofaCleaningBanner from "@/Components/banners/sofa_cleaning_banner";
import SofaCleaningDescription from "@/Components/Cards_Description/sofa_cleaning_description";
import SofaCleaningServicesSection from "@/Components/Cards/SofaCleaningServiceCard";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <SofaCleaningBanner></SofaCleaningBanner>

      <SofaCleaningServicesSection></SofaCleaningServicesSection>
      <SofaCleaningDescription></SofaCleaningDescription>
      <Footer></Footer>

    </div>
  );
}
