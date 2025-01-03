//import Image from "next/image";

import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Footer from "../components/Footer";
import ApplySection from "../components/ApplyComponents/Apply";
import Faq from "../components/Faq";



export default function Apply() {

  const pageInfo = {
    id: "apply", 
  };

  return (
    <main>
    <Navbar currentPage={pageInfo.id}/>
    <Hero page={pageInfo.id} />
    <ApplySection/>
    <Faq />
    <Footer currentPage={pageInfo.id}/>
    </main>
  );
}
