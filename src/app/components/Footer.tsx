'use client';

import { Button } from "@/app/components/ui/button";
import { Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { scroller } from "react-scroll"; // Use scroller for manual scrolling
import Logo from "../../../public/assets/white_logo.png";

// Define the type for footer links
type FooterLink = {
  href: string;
  label: string;
  type: "scroll" | "route";
  target?: string; // Only present if type is "scroll"
};

const footerLinks: FooterLink[] = [
  { href: "/", label: "Home", type: "scroll", target: "hero" },
  { href: "/", label: "About Us", type: "scroll", target: "about" },
  { href: "/", label: "Why", type: "scroll", target: "features" },
  { href: "/", label: "FAQs", type: "scroll", target: "faq" },
  { href: "/", label: "Communities", type: "scroll", target: "communities" },
  { href: "/sponsor", label: "Sponsor", type: "route" },
];

export default function Footer({ currentPage }: { currentPage: string }) {
  const handleFooterClick = (item: FooterLink) => {
    if (item.type === "scroll" && item.target) {
      if (currentPage === "home") {
        // Scroll directly on the home page
        scroller.scrollTo(item.target, {
          spy: true,
          smooth: true,
          offset: -64,
          duration: 500,
        });
      } else {
        // Redirect to home with target query
        window.location.href = `/?target=${item.target}`;
      }
    } else {
      // Navigate to external route
      window.location.href = item.href;
    }
  };

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
              {footerLinks.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleFooterClick(item)}
                  className="block hover:opacity-80 transition-opacity cursor-pointer text-left"
                >
                  {item.label}
                </button>
              ))}
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
