"use client";

import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import CommunitiesSection from "@/app/components/CommunitiesComponents/Communities";
import MainCTA from "../components/MainCTA";
import Footer from "../components/Footer";
import Faq from "../components/Faq";



export default function Communities() {

  const pageInfo = {
    id: "communities", 
  };

  return (
    <main>
    <Navbar currentPage={pageInfo.id} />
    <Hero page={pageInfo.id} />
    <CommunitiesSection/>
    <MainCTA/>
    <Faq />
    <Footer currentPage={pageInfo.id}/>
    </main>
  );
}
