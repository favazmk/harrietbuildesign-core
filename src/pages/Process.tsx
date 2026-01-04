import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageSquare, MapPin, Palette, FileText, HardHat, Home, CheckCircle, ArrowRight } from "lucide-react";
import GlareHover from "@/components/ui/glare-hover";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Free Consultation",
    description: "We begin by understanding your goals, lifestyle, budget, and design preferences. This helps us build a strong foundation for your project.",
    output: "Initial guidance + project understanding.",
  },
  {
    icon: MapPin,
    number: "02",
    title: "Site Visit & Technical Assessment",
    description: "Our engineer inspects the site to evaluate measurements, soil conditions, feasibility, and challenges. This ensures accuracy before design or budgeting.",
    output: "Verified site details + technical insights.",
  },
  {
    icon: Palette,
    number: "03",
    title: "Architectural Design & Planning",
    description: "We create layouts, concepts, and realistic 3D renders so you can see your home before it's built. You can suggest changes until the design fits your vision perfectly.",
    output: "Approved designs + final 3D visuals.",
  },
  {
    icon: FileText,
    number: "04",
    title: "Transparent Estimate & Agreement",
    description: "We prepare a clear, itemized estimate with material details, timeline, and payment milestones. No hidden charges. No surprises.",
    output: "Final estimate + project agreement.",
  },
  {
    icon: HardHat,
    number: "05",
    title: "Execution & Daily Supervision",
    description: "Construction or interior work begins with strict quality control. Your site is supervised daily by our engineer or supervisor to ensure materials, workmanship, and timelines stay on track.",
    output: "Smooth execution + consistent progress updates.",
  },
  {
    icon: Home,
    number: "06",
    title: "Quality Check & Handover",
    description: "Once work is completed, we inspect every detail — finishing, fittings, safety, alignment, and durability. Only when everything meets our standards do we hand over the project.",
    output: "Your completed home, ready to move in.",
  },
];

const Process = () => {
  return (
    <>
      <Helmet>
        <title>Our Process | HarrietBuildesign - How We Work</title>
        <meta
          name="description"
          content="Discover our 6-step process: Consultation, Site Visit, Design, Estimate, Execution, and Handover. Transparent and well-managed journey from idea to completion."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section
          className="py-20 bg-cover relative min-h-[300px] flex flex-col justify-center"
          style={{
            backgroundImage: 'url("/assets/patterns/process-pattern.png")',
            backgroundRepeat: 'repeat',
            backgroundSize: '400px'
          }}
        >
          {/* Overlay to ensure text readability against pattern */}
          <div className="absolute inset-0 bg-harriet-900/70 pointer-events-none" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
                Our Process
              </h1>
              <p className="text-lg text-white/90 mt-4">
                Building a home should feel exciting — not overwhelming. Our structured process ensures clarity, quality, and peace of mind at every stage.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-secondary relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 font-serif text-harriet-700 text-center">
              How We Work
            </h2>

            <div className="relative space-y-12 lg:space-y-32">
              {/* Global Mobile Dashed Line (Continuous) */}
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 border-l-2 border-dashed border-[#4ADE80]/40 -translate-x-1/2 lg:hidden z-0" />
              {[0, 1].map((rowIndex) => {
                const rowSteps = steps.slice(rowIndex * 3, (rowIndex * 3) + 3);
                const OFFSETS = [50, -50, 50]; // Zigzag pattern

                return (
                  <div key={rowIndex} className="relative">
                    {/* Horizontal Rope Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[40%] left-0 w-full h-40 -translate-y-1/2 pointer-events-none z-0">
                      <svg
                        className="w-full h-full overflow-visible"
                        viewBox="0 0 1000 200"
                        preserveAspectRatio="none"
                        style={{ filter: "drop-shadow(0 0 10px rgba(74, 222, 128, 0.3))" }}
                      >
                        <path
                          d="M -100 150 C 150 150, 150 50, 250 50 L 400 50 C 500 50, 500 150, 600 150 L 750 150 C 850 150, 850 50, 950 50 L 1200 50"
                          fill="none"
                          stroke="#4ADE80"
                          strokeWidth="3"
                          strokeLinecap="round"
                          className="opacity-60"
                        />
                      </svg>
                    </div>



                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
                      {rowSteps.map((step, index) => (
                        <div
                          key={index}
                          className="relative group transition-transform duration-300 translate-y-0 lg:translate-y-[var(--offset)] lg:mb-0 mb-12"
                          style={{
                            '--offset': `${OFFSETS[index]}px`
                          } as React.CSSProperties}
                        >
                          {/* Number behind the card */}
                          <div
                            className={`absolute -top-10 lg:-top-16 right-4 lg:right-auto lg:left-4 text-7xl lg:text-8xl font-black text-[#4ADE80] opacity-40 lg:opacity-60 z-0 select-none font-sans transition-all`}
                            style={{
                              textShadow: "0 0 30px rgba(74, 222, 128, 0.4)",
                            }}
                          >
                            {step.number}
                          </div>

                          <div className="relative z-10 w-full lg:w-full">
                            <GlareHover
                              width="100%"
                              height="100%"
                              background="transparent"
                              borderRadius="1rem"
                              glareColor="#ffffff"
                              glareOpacity={0.6}
                              glareSize={400}
                              transitionDuration={2000}
                              playOnce={true}
                              className="bg-[hsl(var(--secondary)/0.3)] border-2 border-white/70 md:border-primary/10 backdrop-blur-[6px] p-6 shadow-lg transition-all duration-300 hover:bg-[hsl(var(--secondary)/0.5)] !flex !place-items-start h-full"
                            >
                              <div className="flex flex-col items-start gap-4 w-full">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                                  <step.icon className="h-7 w-7 text-primary" />
                                </div>
                                <div className="space-y-2 w-full">
                                  <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                                  <p className="text-primary/80 text-sm leading-relaxed">{step.description}</p>
                                </div>
                                <div className="w-full pt-2 mt-auto border-t border-primary/10">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Output:</span>
                                    <span className="text-xs text-primary/80">{step.output}</span>
                                  </div>
                                </div>
                              </div>
                            </GlareHover>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>




      </Layout>
    </>
  );
};

export default Process;
