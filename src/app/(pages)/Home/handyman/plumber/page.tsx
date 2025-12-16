"use client";

import NavBar from "@/Components/Navabar";
import Footer from "@/Components/HandymanFooter";
import PlumberBanner from "@/Components/banners/PlumberBanner";
import PlumberService from "@/Components/Cards/PlumberServiceCard";
import PlumberServiceDescription from "@/Components/Cards_Description/PlumberServiceDescription";

export default function HandymanHome() {
  return (
    <div>
      <NavBar />
      <PlumberBanner />
      <PlumberService />
      <PlumberServiceDescription />
      <Footer />
    </div>
  );
}
