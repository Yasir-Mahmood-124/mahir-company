"use client";

import ChairCleaningBanner from "@/Components/banners/chair_cleaning_banner";
import ChairCleaningDescription from "@/Components/Cards_Description/chair_cleaning_description";
import ChairCleaningServicesSection from "@/Components/Cards/ChairCleningServiceCard";
import NavBar from "@/Components/CleaningServiceNavbar";
import Footer from "@/Components/HandymanFooter";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <ChairCleaningBanner></ChairCleaningBanner>
      <ChairCleaningServicesSection></ChairCleaningServicesSection>
      <ChairCleaningDescription></ChairCleaningDescription>
      <Footer></Footer>
    </div>
  );
}
