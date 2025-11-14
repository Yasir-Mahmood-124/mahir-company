"use client";

import NavBar from "@/app/Components/Navabar";
import Footer from "@/app/Components/HandymanFooter";
import CarpanterServiceBanner from "@/app/Components/banners/CarpanterServiceBanner";
import CarpanterServicesSection from "@/app/Components/Cards/CarpanterServiceCard";
import CarpanterDescription from "@/app/Components/Cards_Description/CarpanterDescription";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <CarpanterServiceBanner></CarpanterServiceBanner>
      <CarpanterServicesSection></CarpanterServicesSection>
      <CarpanterDescription></CarpanterDescription>
      <Footer></Footer>
    </div>
  );
}
