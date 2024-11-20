"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Separator } from "@radix-ui/react-separator";

function Communities() {

  const communitiesCards = [
    {
      title: "CTOs at Scale",
      description:
        "For (S)VPs, CTOs, or Heads of Engineering managing large teams of 80+ engineers. Join peers tackling enterprise-level challenges.",
      anchor: "#apply-ctos-at-scale",
    },
    {
      title: "Startup CTOs",
      description:
        "Tailored for venture-backed startup leaders with 10-80 engineers, focusing on scaling fast and solving unique startup challenges.",
      anchor: "#apply-startup-ctos",
    },
    {
      title: "Director+",
      description:
        "Ideal for Directors or VPs managing managers in teams of 30+ engineers. Gain insights and share experiences on strategic leadership.",
      anchor: "#apply-director-plus",
    },
    {
      title: "Staff+",
      description:
        "Designed for senior ICs, including Staff, Principal, and Distinguished Engineers. Connect with peers shaping the technical vision.",
      anchor: "#apply-staff-plus",
    },
    {
      title: "Fractional Consulting",
      description:
        "For fractional or consulting engineering leaders. Collaborate with peers navigating unique consulting challenges and opportunities.",
      anchor: "#apply-fractional-consulting",
    },
  ];

  return (
    <section id="communities" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-start">
        <div className="flex justify-start mb-5">
          <div className="inline-flex items-center rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-900">
            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
            COMMUNITIES
          </div>
        </div>

        {/* Communities Carousel */}
        <div className="w-full py-10 px-4">
          <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
        {communitiesCards.map((community, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="rounded-lg">
                  <CardContent className="flex flex-col items-center justify-center p-6 bg-white rounded-lg aspect-square">
                    <div className="max-w-lg mx-auto">
                        <div className="flex items-center gap-2">
                          <span className="text-4xl font-bold text-[#020124]">
                            {community.title}
                          </span>
                          <div className="w-2 h-2 rounded-full bg-[#58B4FF]" />
                        </div>
                
                        <h3 className="text-2xl mt-4 font-light leading-relaxed text-gray-800">
                          {community.description}
                        </h3>
                        <Separator className="my-4 bg-[#020124]" />
                        <a
                          href="/communities"
                          className=" bg-[#020124] text-[#58B4FF] text-xs px-3 py-2 rounded inline-block"
                        >
                          Learn More
                        </a>
                      </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Communities;
