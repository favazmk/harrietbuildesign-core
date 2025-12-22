import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GlareHover from "@/components/ui/glare-hover";


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
  const OFFSETS = [100, -100, 100, -100];

  // Final Layout Configuration
  const ropeOffset = -7;
  const horizontalOffset = 58;
  const lowerCurve = 600;
  const upperCurve = -100;

  // Icon scales for each card
  // Icon scales for each card
  const ICON_SCALES = [1.67, 1.75, 3.0, 2.42];

  // Final Nudge Values from user alignment
  const ICON_NUDGES = [
    { x: -2, y: -3 }, // Card 1
    { x: -2, y: -1 }, // Card 2
    { x: 2, y: 4 },   // Card 3
    { x: 8, y: -2 },  // Card 4
  ];

  // Use direct values
  const lowY = lowerCurve;
  const highY = upperCurve;

  return (
    <section className="pt-12 pb-20 bg-secondary md:bg-card overflow-hidden relative">


      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-32 lg:mb-48">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-harriet-700">
            Our 4-Step Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A clear, transparent journey from your first idea to the final handover
          </p>
        </div>

        <div className="relative">
          {/* Mobile Connecting Line (Vertical) */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-transparent border-l-2 border-dashed border-[#4ADE80]/40 -translate-x-1/2 block lg:hidden h-full z-0" />

          {/* Connecting Line (Desktop) */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 w-full h-full -translate-y-1/2 pointer-events-none z-0 transition-transform duration-75"
            style={{ transform: `translate(${horizontalOffset}px, calc(-50% + ${ropeOffset}px))` }}
          >
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
              style={{ filter: "drop-shadow(0 0 10px rgba(74, 222, 128, 0.3))" }}
            >
              <path
                d={`M -400 ${lowY} L 200 ${lowY} C 250 ${lowY}, 250 ${highY}, 300 ${highY} L 500 ${highY} C 550 ${highY}, 550 ${lowY}, 600 ${lowY} L 800 ${lowY} C 850 ${lowY}, 850 ${highY}, 900 ${highY} L 1300 ${highY}`}
                fill="none"
                stroke="#4ADE80"
                strokeWidth="4"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                className="opacity-60"
              />
            </svg>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-20 lg:gap-y-32 relative z-[60]">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group transition-transform duration-300 translate-y-0 lg:translate-y-[var(--offset)]"
                style={{ '--offset': `${OFFSETS[index]}px` } as React.CSSProperties}
              >
                {/* Number behind the card */}
                <div
                  className={`absolute -top-16 ${index % 2 === 0 ? 'left-4' : 'right-4'} text-8xl font-black text-[#4ADE80] opacity-80 z-0 select-none font-sans`}
                  style={{
                    textShadow: "0 0 30px rgba(74, 222, 128, 0.4)",
                  }}
                >
                  {step.number}
                </div>

                <div className="relative z-10 h-full w-full">
                  <GlareHover
                    width="100%"
                    height="100%"
                    background="transparent"
                    borderRadius="0.75rem"
                    glareColor="#ffffff"
                    glareOpacity={0.6}
                    glareSize={400}
                    transitionDuration={2000}
                    playOnce={true}
                    className="bg-[hsl(var(--secondary)/0.3)] border-2 border-white/70 md:border-primary/10 backdrop-blur-[6px] p-5 shadow-lg transition-all duration-300 hover:bg-[hsl(var(--secondary)/0.5)] !flex !place-items-start"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                        <img
                          src={step.imageSrc}
                          alt={step.title}
                          className="w-full h-full object-contain relative z-[60] origin-center"
                          style={{
                            transform: `scale(${ICON_SCALES[index]}) translate(${ICON_NUDGES[index].x}px, ${ICON_NUDGES[index].y}px)`
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary leading-tight mb-1">{step.title}</h3>
                        <p className="text-primary/80 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </GlareHover>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-36 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/process">
              See Our Full Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section >
  );
};

export default ProcessSection;
