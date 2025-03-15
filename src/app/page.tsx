"use client";

import Navbar from "@/component/navbar";
import React from "react";
import Feature from "@/component/features";
import Cta from "@/component/call-to-action";
import Faq from "@/component/faq";
import Hero from "@/component/hero";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Cta />
      <Faq />
      <Footer />
    </div>
  );
}
