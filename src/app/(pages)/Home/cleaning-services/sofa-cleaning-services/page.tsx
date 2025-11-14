"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import Footer from "@/app/Components/HandymanFooter";
import SofaCleaningBanner from "@/app/Components/sofa_cleaning_banner";
import SofaCleaningDescription from "@/app/Components/sofa_cleaning_description";
import SofaCleaningServicesSection from "@/app/Components/Cards/SofaCleaningServiceCard";
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
