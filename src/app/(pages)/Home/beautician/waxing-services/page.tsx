"use client";

import React from "react";
import NavBar from "@/Components/beauticianNavabr";

import Footer from "@/Components/BeauticianFooter";
import CopyrightSection from "@/Components/CopyrightSection";
import Banner from "@/Components/banners/waxing-services-banner";
import WaxingService from "@/Components/Cards/WaxingServiceCard"
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <WaxingService></WaxingService>
      <Footer></Footer>
      <CopyrightSection></CopyrightSection>
    </div>
  );
}
