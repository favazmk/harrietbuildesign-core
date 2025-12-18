import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const steps = [
  {
    imageSrc: "/assets/planning-icon.png",
    number: "01",
    title: "Planning & Assessment",
    description: "Consultation, site visit & requirements",
  },
  {
    imageSrc: "/assets/design-icon.png",
    number: "02",
    title: "Design & Estimate",
    description: "3D visuals, budget & agreement",
  },
  {
    imageSrc: "/assets/execution-icon.png",
    number: "03",
    title: "Execution",
    description: "Daily supervision & quality control",
  },
  {
    imageSrc: "/assets/handover-icon.png",
    number: "04",
    title: "Handover",
    description: "Final checks & key delivery",
  },
];

const ProcessSection = () => {
  // Configuration for card positions (zigzag pattern: Low-High-Low-High)
  // Cards are smaller now, so we might need slightly less amplitude or just keep it. 
  // Rope needs to hit the center of the cards. Visual center might change with smaller padding.
  const OFFSETS = [60, -60, 60, -60];

  // Helper to map visual offset to SVG coordinate system (Y center = 100)
  // Adjusted offset multiplier to align with new card centers
  const getSvgY = (index: number) => 100 + (OFFSETS[index] * 0.6);

  const pathD = `
    M -1000 ${getSvgY(0)} 
    L -125 ${getSvgY(0)} 
    C 0 ${getSvgY(0)}, 0 ${getSvgY(0)}, 125 ${getSvgY(0)} 
    C 250 ${getSvgY(0)}, 250 ${getSvgY(1)}, 375 ${getSvgY(1)} 
    C 500 ${getSvgY(1)}, 500 ${getSvgY(2)}, 625 ${getSvgY(2)} 
    C 750 ${getSvgY(2)}, 750 ${getSvgY(3)}, 875 ${getSvgY(3)} 
    C 1000 ${getSvgY(3)}, 1000 ${getSvgY(3)}, 1125 ${getSvgY(3)} 
    L 2000 ${getSvgY(3)}
  `;

  return (
    <section className="py-20 bg-card overflow-hidden relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-harriet-700">
            Our 4-Step Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A clear, transparent journey from your first idea to the final handover
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-full -translate-y-1/2 pointer-events-none z-0 overflow-visible">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 200" preserveAspectRatio="none">
              {/* Single Dark Green Rope */}
              <path
                d={pathD}
                fill="none"
                stroke="#2C3322" // Dark green from theme foreground/harriet-700 equivalent
                strokeWidth="4"   // Thinner, single line
                className="opacity-90"
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-[60]">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`
                  bg-secondary backdrop-blur-md p-5 rounded-xl shadow-lg border border-white/20
                  flex items-center gap-3 transition-all duration-300
                `}
                style={{ transform: `translateY(${OFFSETS[index]}px)` }}
              >
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <img
                    src={step.imageSrc}
                    alt={step.title}
                    className="w-full h-full object-contain opacity-80 relative z-[60]"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary leading-tight mb-1">{step.title}</h3>
                  <p className="text-primary/80 text-xs">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 lg:mt-40 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/process">
              See Our Full Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
