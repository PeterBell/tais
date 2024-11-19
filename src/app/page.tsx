//import Image from "next/image";
import About from "./components/About";
import Communities from "./components/Communities";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MainCTA from "./components/MainCTA";
import Navbar from "./components/Navbar";
import { QuoteSection } from "./components/Quote";

export default function Home() {
  return (
    <main>
    <Navbar />
    <Hero />
    <About/>
    <QuoteSection/>
    <Features/>
    <MainCTA/>
    <Communities/>
    <Footer/>
  </main>
  );
}
