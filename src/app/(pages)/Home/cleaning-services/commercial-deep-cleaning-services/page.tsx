"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import CommercialDeepCleaningBanner from "@/app/Components/banners/commercial_deep_cleaning_banner";
import CommercialDeepCleaningDescription from "@/app/Components/Cards_Description/commercial_deep_cleaning_desc";
import CommercialDeepCleaningServicesSection from "@/app/Components/Cards/CommericlDeepCleaningCard";
import Footer from "@/app/Components/HandymanFooter";
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
