"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import DeepCleaningBanner from "@/app/Components/banners/deep_cleaning_banner";
import DeepCleaningDescription from "@/app/Components/Cards_Description/deep_cleaning_description";
import DeepCleaningServicesSection from "@/app/Components/Cards/DeepCleaningServiceCard";
import Footer from "@/app/Components/HandymanFooter";
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
