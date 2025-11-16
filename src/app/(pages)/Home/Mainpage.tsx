"use client";

import React from "react";
import HeroSection from "@/Components/HeroSection";
import AnnouncementSection from "@/Components/Annoucementsection";
import WhyChoose from "@/Components/Whychooseus";
import Autocarasuel from "@/Components/Autocarasuel";
import MobileAppSection from "@/Components/MobileAppsection";
import MobileAppSectionLeftImage from "@/Components/MobileSection";
import HandymanFooter from "@/Components/HandymanFooter"
import BlueLoader from "@/Components/CustomBlueLoader";

export default function Home() {
  return (
    <div>
      <BlueLoader>
      <HeroSection />
      <AnnouncementSection />
      <MobileAppSection></MobileAppSection>
      <WhyChoose></WhyChoose>
      <MobileAppSectionLeftImage></MobileAppSectionLeftImage>
      <Autocarasuel></Autocarasuel>
      <HandymanFooter></HandymanFooter>
      </BlueLoader>
    </div>
  );
}
