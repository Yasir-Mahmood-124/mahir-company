"use client";

import React from "react";
import HeroSection from "../../Components/HeroSection";
import AnnouncementSection from "@/app/Components/Annoucementsection";
import WhyChoose from "@/app/Components/Whychooseus";
import Autocarasuel from "../../Components/Autocarasuel";
import MobileAppSection from "@/app/Components/MobileAppsection";
import MobileAppSectionLeftImage from "@/app/Components/MobileSection";
import Footer from "@/app/Components/Footer";
import image from "../../Components/Images/become-mahir.webp"
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AnnouncementSection />
      <MobileAppSection></MobileAppSection>
      <WhyChoose></WhyChoose>

      <MobileAppSectionLeftImage></MobileAppSectionLeftImage>
      <Autocarasuel></Autocarasuel>
      <Footer></Footer>
    </div>
  );
}
