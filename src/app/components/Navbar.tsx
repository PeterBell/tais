'use client'

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "../../../public/assets/black_logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/", label: "About Us" },
    { href: "/", label: "Why" },
    { href: "/", label: "Communities" },
    { href: "/", label: "FAQs" },
    { href: "/", label: "Sponsor" },
  ];

  return (
    <div className="w-full flex justify-center px-4 absolute top-4 z-10">
      <nav className="w-full md:w-[90%] bg-white/95 backdrop-blur-sm rounded-lg px-4 md:px-6 py-2 flex items-center justify-between shadow-lg">
      <div className="relative w-36 h-8">
        <Image
            src={Logo}
            alt="Logo"
            fill
            className="w-[5rem] h-[5rem]"
            priority
          />
        </div>
        
        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-sm">
          {navItems.map((item) => (
            <Link 
              key={item.label}
              href={item.href} 
              className="text-gray-600 hover:bg-[#58B4FF] hover:text-white hover:font-medium px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button className="flex items-center gap-2 px-6 rounded-lg bg-[#58B4FF]">
            <span className="text-white">Apply</span>
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm pt-20">
          <div className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                href={item.href} 
                className="text-gray-600 hover:bg-[#58B4FF] hover:text-white hover:font-medium px-3 py-2 rounded-lg text-lg font-medium transition-colors duration-200"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            
            <Button className="flex items-center gap-2 px-6 rounded-lg bg-[#58B4FF] mt-4" variant="gooeyLeft">
              <span className="text-white">Apply</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}