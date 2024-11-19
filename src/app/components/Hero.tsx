"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="relative min-h-[100vh] flex items-center justify-center bg-[#020124] overflow-hidden">
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
              <path d="M0 0h120v120H0z" fill="none" stroke="#ffffff" strokeWidth="1"/>
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
            radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.4) 0%, transparent 40%)
          `
        }}
      />
      
      <div className="relative text-center text-white space-y-8 max-w-4xl px-4">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            ease: [0.21, 1.11, 0.81, 0.99] // Custom ease curve for springy effect
          }}
          className="text-4xl md:text-8xl lg:text-9xl font-bold leading-tight tracking-tight"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#58B4FF]"
          >
            Aggregate
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white"
          >
            .dev
          </motion.span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 font-light tracking-wide"
        >
          A community of communities for senior engineering leaders
        </motion.p>

          
        <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }} // Adjust delay for staggered animation
        className="flex justify-center"
      >
        <Button className="flex items-center mx-auto gap-2 px-6 shadow-none bg-white rounded-lg">
          <span className="text-xl text-[#020124]">Apply</span>
          <ArrowUpRight className="h-6 w-6 text-[#020124]" />
        </Button>
      </motion.div>
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