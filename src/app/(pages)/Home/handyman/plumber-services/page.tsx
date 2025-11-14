"use client";

import NavBar from "@/app/Components/Navabar";
import Footer from "@/app/Components/HandymanFooter";
import PlumberBanner from "@/app/Components/banners/PlumberBanner"
import PlumberService from "@/app/Components/Cards/PlumberServiceCard";
import PlumberServiceDescription from "@/app/Components/Cards_Description/PlumberServiceDescription";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <PlumberBanner></PlumberBanner>
      <PlumberService></PlumberService>
      <PlumberServiceDescription></PlumberServiceDescription>
      <Footer></Footer>

    </div>
  );
}
