"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import CommercialDeepCleaningBanner from "@/app/Components/commercial_deep_cleaning_banner";
import CommercialDeepCleaningDescription from "@/app/Components/commercial_deep_cleaning_desc";
import Footer from "@/app/Components/HandymanFooter";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <CommercialDeepCleaningBanner></CommercialDeepCleaningBanner>
      <CommercialDeepCleaningDescription></CommercialDeepCleaningDescription>
      <Footer></Footer>
    </div>
  );
}
