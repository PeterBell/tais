'use client';

import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll"; // Importing react-scroll Link
import Logo from "../../../public/assets/white_logo.png";

const footerLinks = [
  { href: "/", label: "Home", type: "scroll", target: "hero" },
  { href: "/", label: "About Us", type: "scroll", target: "about" },
  { href: "/", label: "Why", type: "scroll", target: "features" },
  { href: "faqs", label: "FAQs", type: "scroll", target: "faqs" },
  { href: "communities", label: "Communities", type: "scroll", target: "communities" },
  { href: "/", label: "Sponsor", type: "route" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#020124] text-white py-12 md:py-16 lg:py-20 rounded-t-[50px]">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Social Links */}
          <div className="space-y-4">
            <div className="relative w-56 h-11 cursor-pointer">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Aggregate.Dev logo image"
                  fill
                  className="w-[12rem] h-[9rem]"
                  priority
                />
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:opacity-80 transition-opacity hidden">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/peterfbell/"
                className="hover:opacity-80 transition-opacity"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity hidden">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Dynamic Footer Links */}
          <div className="space-y-4">
            <nav className="space-y-2">
              {footerLinks.map((item, index) =>
                item.type === "scroll" ? (
                  <ScrollLink
                    key={index}
                    to={item.target}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="block hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    className="block hover:opacity-80 transition-opacity"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Empty Column for Layout */}
          <div className="space-y-4"></div>

          {/* Call to Action */}
          <div className="space-y-4 lg:text-right">
            <h2 className="text-6xl font-bold text-justify opacity-25">Let&apos;s connect</h2>
            <Link href="/apply" className="mt-4">
            <Button variant="gooeyLeft">
              Apply
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm mt-8 text-white/60">
            © Aggregate.dev 2024 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
