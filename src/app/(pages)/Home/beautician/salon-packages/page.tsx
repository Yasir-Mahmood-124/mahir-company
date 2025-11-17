"use client";

import React from "react";
import NavBar from "@/Components/beauticianNavabr";

import Footer from "@/Components/BeauticianFooter";
import CopyrightSection from "@/Components/CopyrightSection";
import Banner from "@/Components/banners/salon-packages-banner";
import SalonServiceCard from "@/Components/Cards/SalonServiceCard"
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <SalonServiceCard></SalonServiceCard>
      <Footer></Footer>
      <CopyrightSection></CopyrightSection>
    </div>
  );
}
