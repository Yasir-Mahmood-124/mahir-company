"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import DeepCleaningBanner from "@/app/Components/deep_cleaning_banner";
import DeepCleaningDescription from "@/app/Components/deep_cleaning_description";
import Footer from "@/app/Components/HandymanFooter";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <DeepCleaningBanner></DeepCleaningBanner>
      <DeepCleaningDescription></DeepCleaningDescription>
      <Footer></Footer>
    </div>
  );
}
