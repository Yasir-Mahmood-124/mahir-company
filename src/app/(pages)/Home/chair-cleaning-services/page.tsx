"use client";

import ChairCleaningBanner from "@/app/Components/chair_cleaning_banner";
import ChairCleaningDescription from "@/app/Components/chair_cleaning_description";
import ChairCleaningServicesSection from "@/app/Components/ChairCleningServiceCard";
import NavBar from "@/app/Components/CleaningServiceNavbar";
import Footer from "@/app/Components/HandymanFooter";
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
