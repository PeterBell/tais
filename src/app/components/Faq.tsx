"use client";


import React from "react";
import { faqData } from "../data/FaqData";
import { SchemaMarkup } from "./SchemaMarkup";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function About() {
 


  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex justify-start mb-10">
            <div className="inline-flex items-center rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-900">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
              FAQ
            </div>
      </div>
    
      <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-xl text-[#020124] font-semibold hover:text-[rgb(88,180,255)]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <SchemaMarkup faqData={faqData} />
  
       
    </div>
  </section>
  
  );
}

export default About;
