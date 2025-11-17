"use client";

import React from "react";
import NavBar from "@/Components/beauticianNavabr";

import Footer from "@/Components/BeauticianFooter";
import CopyrightSection from "@/Components/CopyrightSection";
import Banner from "@/Components/banners/monthly-beauty-banner";
import MonthlyBeautyDealsCard from "@/Components/Cards/MonthlyBeautyDeals";
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <MonthlyBeautyDealsCard></MonthlyBeautyDealsCard>
      <Footer></Footer>
      <CopyrightSection></CopyrightSection>
    </div>
  );
}
