"use client";

import Navbar from "@/component/navbar";
import React from "react";
import Feature from "@/component/features";
import Faq from "@/component/faq";
import Hero from "@/component/hero";
import Footer from "@/component/footer";
import Team from "@/component/team-sections";
import Section from "@/component/section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      {/* <Cta /> */}
      <Section />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}
