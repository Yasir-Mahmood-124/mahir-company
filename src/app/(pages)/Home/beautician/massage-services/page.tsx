"use client";

import React from "react";
import NavBar from "@/Components/beauticianNavabr";

import Footer from "@/Components/BeauticianFooter";
import CopyrightSection from "@/Components/CopyrightSection";
import Banner from "@/Components/banners/massage-services-banner";
import MassageService from "@/Components/Cards/MassageServiceCard"
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
       <MassageService></MassageService>
      <Footer></Footer>
      <CopyrightSection></CopyrightSection>
    </div>
  );
}
