"use client";

import React from "react";
import NavBar from "@/app/Components/beauticianNavabr";

import Footer from "@/app/Components/BeauticianFooter";
import CopyrightSection from "@/app/Components/CopyrightSection";
import FacialServicesHero from "@/app/Components/banners/facial-banner";
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <FacialServicesHero></FacialServicesHero>
      <br></br>
      <br></br>
      <Footer></Footer>
      <CopyrightSection></CopyrightSection>
    </div>
  );
}
