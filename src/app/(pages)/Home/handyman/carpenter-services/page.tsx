"use client";

import NavBar from "@/Components/Navabar";
import Footer from "@/Components/HandymanFooter";
import CarpanterServiceBanner from "@/Components/banners/CarpanterServiceBanner";
import CarpanterServicesSection from "@/Components/Cards/CarpanterServiceCard";
import CarpanterDescription from "@/Components/Cards_Description/CarpanterDescription";

export default function HandymanHome() {
  return (
    <div>
      <NavBar />
      <CarpanterServiceBanner />
      <CarpanterServicesSection />
      <CarpanterDescription />
      <Footer />
    </div>
  );
}
