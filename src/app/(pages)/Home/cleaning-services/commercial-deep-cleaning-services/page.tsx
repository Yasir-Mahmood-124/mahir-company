"use client";

import NavBar from "@/Components/CleaningServiceNavbar";
import CommercialDeepCleaningBanner from "@/Components/banners/commercial_deep_cleaning_banner";
import CommercialDeepCleaningDescription from "@/Components/Cards_Description/commercial_deep_cleaning_desc";
import CommercialDeepCleaningServicesSection from "@/Components/Cards/CommericlDeepCleaningCard";
import Footer from "@/Components/HandymanFooter";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <CommercialDeepCleaningBanner></CommercialDeepCleaningBanner>
      <CommercialDeepCleaningServicesSection></CommercialDeepCleaningServicesSection>
      <CommercialDeepCleaningDescription></CommercialDeepCleaningDescription>
      <Footer></Footer>
    </div>
  );
}
