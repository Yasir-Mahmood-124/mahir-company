"use client";

import HeroSection from "@/app/Components/CarDetalingBanner";
import NavBar from "@/app/Components/CleaningServiceNavbar";
import Footer from "@/app/Components/HandymanFooter";
import CarDetailingServiceCard from "@/app/Components/CarDetailingServicecard"

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
