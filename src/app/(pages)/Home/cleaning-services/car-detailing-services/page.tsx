"use client";

import HeroSection from "@/Components/banners/CarDetalingBanner";
import NavBar from "@/Components/CleaningServiceNavbar";
import Footer from "@/Components/HandymanFooter";
import CarDetailingServiceCard from "@/Components/Cards/CarDetailingServicecard"

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <CarDetailingServiceCard></CarDetailingServiceCard>
      <Footer></Footer>

    </div>
  );
}
