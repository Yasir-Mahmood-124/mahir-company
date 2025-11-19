"use client";

import React from "react";

import BlueLoader from "@/Components/CustomBlueLoader";
import NavBar from "@/Components/Navabar";
import Footer from "@/Components/HandymanFooter";
import MaintainedbyUstadonCall from "@/Components/banners/MaintainebyUstadoonCallBanner";
import Subscription from "@/Components/Subscriptions"
import CustomerSpeaks from "@/Components/CustomerSpeaks";
import CustomerTestimonials from "@/Components/Testimonial";
import SubscriptionDetails from "@/Components/SubscriptionDetails";
export default function Home() {
  return (
    <div>
      <BlueLoader>
        <NavBar></NavBar>
        <MaintainedbyUstadonCall></MaintainedbyUstadonCall>
        <Subscription></Subscription>
        <CustomerSpeaks></CustomerSpeaks>
        <CustomerTestimonials></CustomerTestimonials>
        <SubscriptionDetails></SubscriptionDetails>
        <Footer></Footer>
      </BlueLoader>
    </div>
  );
}
