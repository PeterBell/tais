
import Head from "next/head";
import About from "./components/About";
import Communities from "./components/Communities";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MainCTA from "./components/MainCTA";
import Navbar from "./components/Navbar";
import { QuoteSection } from "./components/Quote";



export default function Home() {

  const pageInfo = {
    id: "home", 
  };
  return (
    <>
      <Head>
        <title>Aggregate.Dev - A Community for Senior Engineering Leaders</title>
        <meta
          name="description"
          content="Join Aggregate.Dev, the exclusive community for senior engineering leaders like CTOs, VPs, and Directors. Collaborate, grow, and lead with peers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.aggregate.dev/" />
      </Head>
      <main>
        <Navbar />
        <Hero page={pageInfo.id} />
        <About />
        <QuoteSection />
        <Features />
        <MainCTA />
        <Communities />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
