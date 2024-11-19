"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";

function Communities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const communitiesCards = [
    {
      title: "CTOs at Scale",
      description: "For (S)VPs, CTOs, or Heads of Engineering managing large teams of 80+ engineers. Join peers tackling enterprise-level challenges.",
      anchor: "#apply-ctos-at-scale",
    },
    {
      title: "Startup CTOs",
      description: "Tailored for venture-backed startup leaders with 10-80 engineers, focusing on scaling fast and solving unique startup challenges.",
      anchor: "#apply-startup-ctos",
    },
    {
      title: "Director+",
      description: "Ideal for Directors or VPs managing managers in teams of 30+ engineers. Gain insights and share experiences on strategic leadership.",
      anchor: "#apply-director-plus",
    },
    {
      title: "Staff+",
      description: "Designed for senior ICs, including Staff, Principal, and Distinguished Engineers. Connect with peers shaping the technical vision.",
      anchor: "#apply-staff-plus",
    },
    {
      title: "Fractional Consulting",
      description: "For fractional or consulting engineering leaders. Collaborate with peers navigating unique consulting challenges and opportunities.",
      anchor: "#apply-fractional-consulting",
    },
  ];

  return (
    <section id="communities" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-start mb-5">
          <div className="inline-flex items-center rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-900">
            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
            COMMUNITIES
          </div>
        </div>
        {/* COMMUNITIES CAROUSEL */}
        <div className="w-full py-10 px-4">
          <div className="max-w-5xl mx-auto mb-8 flex justify-center space-x-4">
            {communitiesCards.map((community, index) => (
              <Button
                key={community.title}
                variant={activeIndex === index ? "default" : "outline"}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
              >
                {community.title}
              </Button>
            ))}
          </div>
          <Carousel ref={emblaRef} className="w-full max-w-7xl mx-auto">
            <CarouselContent>
              {communitiesCards.map((community, index) => (
                <CarouselItem key={index} className="basis-4/5 transition-all duration-300 ease-in-out pl-4">
                  <Card className={`p-12 ${activeIndex === index ? "scale-105 shadow-lg bg-black" : "scale-95 opacity-50 bg-tomato"}`}>
                    <div className="max-w-md mx-auto">
                      <div className="bg-[#2D0A43] text-white rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">{community.title}</h3>
                        <p className="text-sm text-gray-300 mb-4">{community.description}</p>
                        <a href={community.anchor} className="bg-white text-[#2D0A43] text-xs px-3 py-2 rounded inline-block">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* COMMUNITIES CAROUSEL */}
      </div>
    </section>
  );
}

export default Communities;
