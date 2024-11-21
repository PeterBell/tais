"use client";

import React from "react";
import { Card } from "@/app/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { SchemaMarkup } from "./SchemaMarkup";

// Dynamic content object
const content = {
  section: {
    id: "faq",
    title: "FAQ",
  },
  faqData: [
    {
      question: "What is Aggregate.dev?",
      answer: "Aggregate.dev is a curated, global learning community for senior engineering leaders, offering peer connections, resources, and insights to tackle leadership challenges.",
    },
    {
      question: "Who can join the community?",
      answer: "Our community is open to startup CTOs, Staff+ ICs, Directors+, and other senior engineering leaders who want to connect, learn, and grow together.",
    },
    {
      question: "How do I apply?",
      answer: "You can apply by filling out our application form. We review each application to ensure members align with our community values and goals.",
    },
    {
      question: "Is Aggregate.dev free to join?",
      answer: "Yes, Aggregate.dev is completely free. We believe in creating an inclusive space without financial barriers.",
    },
    {
      question: "What makes Aggregate.dev different?",
      answer: "Our community is curated, free, and focused on solving real challenges with sub-communities tailored to specific roles and needs.",
    },
  ],
};

function Faq() {
  return (
    <section id={content.section.id} className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="flex justify-start mb-10">
          <div className="inline-flex items-center rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-900">
            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
            {content.section.title}
          </div>
        </div>

        {/* Accordion Section */}
        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {content.faqData.map((item, index) => (
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

        {/* Schema Markup */}
        <SchemaMarkup faqData={content.faqData} />
      </div>
    </section>
  );
}

export default Faq;
