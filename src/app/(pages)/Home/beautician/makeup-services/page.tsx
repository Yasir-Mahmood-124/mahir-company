"use client";

import React from "react";
import NavBar from "@/Components/beauticianNavabr";

import Footer from "@/Components/BeauticianFooter";
import CopyrightSection from "@/Components/CopyrightSection";
import Banner from "@/Components/banners/makeup-services-banner";
import MakeupService from "@/Components/Cards/MakeupServiceCard";
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <MakeupService></MakeupService>
      <Footer></Footer>
      <CopyrightSection></CopyrightSection>
    </div>
  );
}
