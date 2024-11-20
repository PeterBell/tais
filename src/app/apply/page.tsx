//import Image from "next/image";

import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import MainCTA from "../components/MainCTA";
import Footer from "../components/Footer";
import ApplySection from "../components/ApplyComponents/Apply";
import Faq from "../components/Faq";



export default function Apply() {

  const pageInfo = {
    id: "apply", 
  };

  return (
    <main>
    <Navbar />
    <Hero page={pageInfo.id} />
    <ApplySection/>
    <MainCTA/>
    <Faq />
    <Footer/>
    </main>
  );
}
