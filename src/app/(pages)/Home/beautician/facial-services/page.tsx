"use client";

import React from "react";
import NavBar from "@/Components/beauticianNavabr";

import Footer from "@/Components/BeauticianFooter";
import CopyrightSection from "@/Components/CopyrightSection";
import FacialServicesHero from "@/Components/banners/facial-banner";
import FacialServiceCard from "@/Components/Cards/FacialServiceCard"
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <FacialServicesHero></FacialServicesHero>
      <FacialServiceCard></FacialServiceCard>
      <br></br>
      <br></br>
      <Footer></Footer>
      <CopyrightSection></CopyrightSection>
    </div>
  );
}
