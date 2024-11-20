"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // Importing react-scroll Link
import Link from "next/link"; // Importing Next.js Link
import Image from "next/image";
import Logo from "../../../public/assets/black_logo.png";

const navItems = [
  { href: "/", label: "Home", type: "scroll", target: "hero" },
  { href: "/", label: "About Us", type: "scroll", target: "about" },
  { href: "/", label: "Why", type: "scroll", target: "features" },
  { href: "/", label: "FAQs", type: "scroll", target: "faq" },
  { href: "/", label: "Communities", type: "scroll", target: "communities" },
  { href: "/apply", label: "Apply", type: "route" },
  { href: "/sponsor", label: "Sponsor", type: "route" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure the component is mounted on the client-side
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent rendering on the server side

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleRouteClick = (href: string) => {
    window.location.href = href; // Navigate using window.location
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full flex justify-center px-4 absolute top-4 z-10">
      <nav className="w-full md:w-[90%] bg-white/95 backdrop-blur-sm rounded-lg px-4 md:px-6 py-2 flex items-center justify-between shadow-lg">
        <div className="relative w-36 h-8 cursor-pointer">
          <Link href="www.aggregate.dev">
            <Image
              src={Logo}
              alt="Aggregate.Dev logo image"
              fill
              className="w-[5rem] h-[5rem]"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-sm">
          {navItems.map((item) =>
            item.type === "scroll" ? (
              <ScrollLink
                key={item.label}
                to={item.target}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-gray-600 hover:bg-[#58B4FF] hover:text-white hover:font-medium px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </ScrollLink>
            ) : (
              <button
                key={item.label}
                onClick={() => handleRouteClick(item.href)}
                className="text-gray-600 hover:bg-[#58B4FF] hover:text-white hover:font-medium px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            )
          )}
        </div>

        <div className="hidden md:block">
          <Link href="/apply">
            <Button variant="gooeyLeft">
              Apply
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X className="h-6 w-6 bg-black" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm pt-20">
          <div className="w-full flex justify-end py-2">
            <button onClick={toggleMenu} className="md:hidden mr-6 rounded-lg bg-[#58B4FF] text-white">
                {isMenuOpen ? <X className="h-8 w-8 mr-4 " /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
            
          <div className="flex flex-col items-center gap-4">
            {navItems.map((item) =>
              item.type === "scroll" ? (
                <ScrollLink
                  key={item.label}
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="text-gray-600 hover:bg-[#58B4FF] hover:text-white hover:font-medium px-3 py-2 rounded-lg text-lg font-medium transition-colors duration-200 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <Link href={item.href} key={item.label}>
                  <button
                    className="text-gray-600 hover:bg-[#58B4FF] hover:text-white hover:font-medium px-3 py-2 rounded-lg text-lg font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </Link>
              )
            )}
            <Link href="/apply">
              <Button className="flex items-center gap-2 px-6 rounded-lg bg-[#58B4FF] mt-4" variant="gooeyLeft">
                <span className="text-white">Apply</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
