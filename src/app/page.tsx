"use client";

import Navbar from "@/component/navbar";
import React from "react";
import Feature from "@/component/features";
import Cta from "@/component/call-to-action";
import Faq from "@/component/faq";
import Hero from "@/component/hero";
import Footer from "@/component/footer";
import Team from "@/component/team-sections";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      {/* <Cta /> */}
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}
