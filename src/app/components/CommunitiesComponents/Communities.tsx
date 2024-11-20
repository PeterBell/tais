"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

function CommunitiesSection() {
  const communities = [
    {
      title: "CTOs at Scale",
      description: "(S)VP, CTO or Head of Engineering",
      requirements: [
        "80+ reporting up to you in your org",
        "Not staffing/dev shop",
      ],
    },
    {
      title: "Startup CTOs",
      description: "Venture backed startup - raised $10m+",
      requirements: [
        "CTO, VPE or Head of Engineering",
        "10-80 reporting up to you in your org",
      ],
    },
    {
      title: "Director+",
      description: "Director or VP",
      requirements: [
        "Managing 1..n managers",
        "30+ in your org",
        "Not staffing/dev shop",
      ],
    },
    {
      title: "Staff+",
      description: "Staff+ IC (Staff, Principal, Distinguished, Fellow)",
      requirements: ["Not staffing/dev shop"],
    },
    {
      title: "Fractional/Consulting",
      description: "Director+ engineering leader or Staff+ IC",
      requirements: [
        "Fractional/consultant",
        "Work for staffing/dev shop",
      ],
    },
  ];

  return (
    <section id="" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto p-8">
          <h1 className="text-4xl text-gray-300 font-bold tracking-tight mb-12">
            Check out our communities requirements
          </h1>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <Accordion type="single" collapsible defaultValue={communities[0].title}>
              {communities.map((community, index) => (
                <AccordionItem key={index} value={community.title} className="border-none">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <span className="text-4xl font-bold text-[#020124]">{community.title}</span>
                      <div className="w-2 h-2 rounded-full bg-[#58B4FF]" />
                    </div>
                    <Button variant="outline" className=" hidden ml-auto font-light text-gray-400">
                      Maturity Stage
                    </Button>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-4">
                      <h3 className="text-2xl font-light leading-relaxed text-gray-800">
                        {community.description}
                      </h3>
                      <Separator className="my-4" />
                      <h3 className="text-2xl font-light leading-relaxed text-gray-800">
                         Requirements:
                      </h3>
                      <ul className="text-gray-600 leading-relaxed list-disc ml-6">
                        {community.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex}>{requirement}</li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunitiesSection;
