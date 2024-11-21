import { Button } from "@/app/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Dynamic content object
const content = {
  sectionId: "main-cta",
  text: {
    heading: "Connect, Learn, Lead",
    highlight: "Together.",
    description: "A community of communities for senior engineering leaders",
    buttonText: "Apply",
    buttonHref: "/apply",
  },
};

export default function MainCTA() {
  return (
    <section
      id={content.sectionId}
      className="min-h-screen w-full relative overflow-hidden bg-[#020124] flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      {/* Square pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="squares" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M0 0h120v120H0z" fill="none" stroke="#ffffff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#squares)" />
        </svg>
      </div>

      {/* Mesh gradient overlay */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(88, 180, 255, 0.4) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(2, 1, 36, 0.4) 0%, transparent 40%)
          `,
        }}
      />

      {/* White content box */}
      <div className="relative z-10 bg-white rounded-xl shadow-2xl px-12 py-24 sm:p-12 max-w-6xl w-full">
        <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
          {/* Text Section */}
          <div className="text-left space-y-6 flex-grow sm:basis-3/4">
            <h2 className="text-4xl md:text-7xl lg:text-7xl font-bold tracking-tight text-[#020124]">
              {content.text.heading}&nbsp;
              <span className="text-[#58B4FF] text-opacity-90">{content.text.highlight}</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">{content.text.description}</p>
          </div>

          {/* Button Section */}
          <div>
            <Link href={content.text.buttonHref}>
              <Button variant="gooeyLeft" className="text-3xl py-8 px-12">
                {content.text.buttonText}
                <ArrowUpRight className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
