import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageSquare, MapPin, Palette, FileText, HardHat, Home, CheckCircle, ArrowRight } from "lucide-react";
import TiltedCard from "@/components/ui/TiltedCard";

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
    title: "Design & 3D Visualization",
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
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-accent-foreground">
                Our Process
              </h1>
              <p className="text-xl text-accent-foreground/80">
                A clear, transparent, and well-managed journey from your first idea to the final handover.
              </p>
              <p className="text-lg text-accent-foreground mt-4">
                Building a home should feel exciting — not overwhelming. Our structured process ensures clarity, quality, and peace of mind at every stage.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-serif text-harriet-700 text-center">
              How We Work
            </h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <TiltedCard key={index} showMobileWarning={false} showTooltip={false} scaleOnHover={1.03} rotateAmplitude={10}>
                  <div
                    className="bg-secondary p-8 rounded-xl shadow-neumorphic-light border-none h-full"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-bold text-primary">{step.number}</span>
                          <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-lg">
                          <span className="text-sm font-medium text-accent-foreground">Output:</span>
                          <span className="text-sm text-accent-foreground">{step.output}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltedCard>
              ))}
            </div>
          </div>
        </section>




      </Layout>
    </>
  );
};

export default Process;
