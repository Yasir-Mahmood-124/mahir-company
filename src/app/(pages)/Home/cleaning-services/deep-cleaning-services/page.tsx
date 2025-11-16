"use client";

import NavBar from "@/Components/CleaningServiceNavbar";
import DeepCleaningBanner from "@/Components/banners/deep_cleaning_banner";
import DeepCleaningDescription from "@/Components/Cards_Description/deep_cleaning_description";
import DeepCleaningServicesSection from "@/Components/Cards/DeepCleaningServiceCard";
import Footer from "@/Components/HandymanFooter";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <DeepCleaningBanner></DeepCleaningBanner>
      <DeepCleaningServicesSection></DeepCleaningServicesSection>
      <DeepCleaningDescription></DeepCleaningDescription>
      <Footer></Footer>
    </div>
  );
}
