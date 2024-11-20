import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";




export default function MainCTA() {
  return (
    <section id="main-cta" className="min-h-screen w-full relative overflow-hidden bg-[#020124] flex items-center justify-center p-4 sm:p-6 lg:p-8">
    {/* Square pattern background */}
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="squares" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M0 0h120v120H0z" fill="none" stroke="#ffffff" strokeWidth="1"/>
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
        `
      }}
    />
    
    {/* White content box */}
    <div className="relative z-10 bg-white rounded-xl shadow-2xl px-12 py-24 sm:p-12 max-w-6xl w-full">
      <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
        <div className="text-left space-y-6 flex-grow sm:basis-3/4">
        <h2 className="text-4xl  md:text-7xl  lg:text-7xl font-bold tracking-tight text-[#020124]">
          Connect, Learn,<br /> Lead&nbsp;
          <span className="text-[#58B4FF] text-opacity-90">Together.</span>
        </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
            A community of communities for senior engineering leaders
          </p>
        </div>
        <div className="">
        <Button variant="gooeyLeft" className="text-3xl py-8 px-12">Apply
        <ArrowUpRight className="h-6 w-6" />
        </Button>

        </div>
      </div>
    </div>
  </section>
  );
}
