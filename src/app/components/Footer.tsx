import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import Logo from "../../../public/assets/white_logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#020124] text-white py-12 md:py-16 lg:py-20 rounded-t-[50px]">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
          <Image
            src={Logo}
            alt="Logo"
            fill
            className="w-full h-24 !relative"
            
          />
            <div className="flex space-x-4">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <nav className="space-y-2">
              <Link className="block hover:opacity-80 transition-opacity" href="/">
                Home
              </Link>
              <Link className="block hover:opacity-80 transition-opacity" href="/why">
                Why Aggregate.dev?
              </Link>
              <Link className="block hover:opacity-80 transition-opacity" href="/apply">
                Apply
              </Link>
              <Link className="block hover:opacity-80 transition-opacity" href="/faqs">
                FAQs
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">The Communities</h3>
            <nav className="space-y-2">
              <Link className="block hover:opacity-80 transition-opacity" href="/communities/ctos">
                CTOs at Scale
              </Link>
              <Link className="block hover:opacity-80 transition-opacity" href="/communities/startup-ctos">
                Startup CTOs
              </Link>
              <Link className="block hover:opacity-80 transition-opacity" href="/communities/director">
                Director+
              </Link>
              <Link className="block hover:opacity-80 transition-opacity" href="/communities/staff">
                Staff+
              </Link>
              <Link className="block hover:opacity-80 transition-opacity" href="/communities/fractional">
                Fractional/Consulting
              </Link>
            </nav>
          </div>
          <div className="space-y-4 lg:text-right">
            <h2 className="text-6xl font-bold  text-justify opacity-25">Let&apos;s connect</h2>
          
            <Button variant="gooeyLeft">Apply</Button>
          
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <nav className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
            <Link className="hover:opacity-80 transition-opacity" href="/sponsor">
              Sponsor
            </Link>
            <Link className="hover:opacity-80 transition-opacity" href="/about">
              About Us
            </Link>
          </nav>
          <p className="text-center text-sm mt-8 text-white/60">
            © Aggregate.dev 2024 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}