"use client";

import React from "react";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HeroBanner({ page }: { page: string }) {
  const heroContent = {
    home: {
      title: "Aggregate.dev",
      subtitle: "A community of communities for senior engineering leaders",
      buttonLabel: "Get Started",
      buttonHref: "/apply",
    },
    communities: {
      title: "Join Our Communities",
      subtitle: "Collaborate with peers to solve enterprise-level challenges",
      buttonLabel: "",
      buttonHref: "",
    },
    apply: {
      title: "Apply to Join",
      subtitle: "Be part of the exclusive Aggregate.dev community",
      buttonLabel: "",
      buttonHref: "",
    },
    sponsor: {
      title: "Partner with Us",
      subtitle: "Join a Global Network of Engineering Leaders and Amplify Your Impact",
      buttonLabel: "",
      buttonHref: "",
    },
  };

  const content = heroContent[page] || heroContent.home;




  return (
    <div id="hero" className="relative min-h-[100vh] flex items-center justify-center bg-[#020124] overflow-hidden">
      {/* Square pattern background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="squares" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M0 0h120v120H0z" fill="none" stroke="#ffffff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#squares)" />
        </svg>
      </motion.div>

      {/* Mesh gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(88, 180, 255, 0.4) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(2, 1, 36, 0.4) 0%, transparent 40%)
          `,
        }}
      />

      {/* Hero Content */}
      <div className="relative text-center text-white space-y-8 max-w-4xl px-4">
        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.21, 1.11, 0.81, 0.99],
          }}
          className="text-4xl md:text-8xl lg:text-9xl font-bold leading-tight tracking-tight"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#58b4ff]"
          >
            {content.title.split(".")[0]}{/* "Aggregate" */}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white"
          >
            .{content.title.split(".")[1]}{/* ".dev" */}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 font-light tracking-wide"
        >
          {content.subtitle}
        </motion.p>

        {/* Conditional CTA Button */}
        {page == "home" && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex justify-center"
          >
            <Link href={content.buttonHref}>
              <Button variant="gooeyLeft" className="text-2xl">
                {content.buttonLabel}
                <ArrowUpRight className="h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        )}

        {/* Scroll Arrow */}
        {page !== "home" && (
          <div className="flex w-full justify-center mt-4">
            <ArrowDown className="text-white w-6 h-6" />
          </div>
        )}
      </div>

      {/* Animated gradient border at the bottom */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#58B4FF] to-transparent"
      />
    </div>
  );
}
