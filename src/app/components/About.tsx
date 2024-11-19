"use client";


import React from "react";
import Image from "next/image";
import Ceo from "../../../public/assets/petter_bell.jpeg";

function About() {
 


  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container mx-auto px-4 md:px-6">
    <div className="flex justify-start mb-10">
          <div className="inline-flex items-center rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-900">
            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
            ABOUT US
          </div>
        </div>
      {/* Content Grid */}
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Text Section */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Empowering Engineering Leaders <span className="text-[#58B4FF]">Globally</span>
          </h2>
          <p className="text-gray-900 font-normal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            At Aggregate.dev, we unite senior engineering leaders to connect, share, and grow. Founded by Peter Bell, with over 15 years of experience curating top engineering minds, our mission is to foster impactful, inclusive, and free communities. Whether you&apos;re a startup CTO, Staff+ IC, or Director+ managing large teams, Aggregate.dev offers the connections and resources you need to navigate engineering leadership challenges.
          </p>
        
        </div>
  
        {/* Image Section */}
        <div className="relative flex justify-center">
          {/* Background Shape */}
          <div className="absolute rounded-2xl bg-[#58B4FF] w-[300px] h-[400px] lg:w-[350px] lg:h-[450px] -rotate-6 -z-10"></div>
          {/* Foreground Image */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              alt="About Us Image"
              className="object-cover w-[300px] h-[400px] lg:w-[350px] lg:h-[450px]"
              src={Ceo}
              width={350}
              height={450}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default About;
