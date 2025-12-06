import { MessageSquare, MapPin, Palette, FileText, HardHat, Home } from "lucide-react";
import { useScrollCenterGroup } from "@/hooks/use-scroll-center";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consultation",
    description: "Understand your vision",
  },
  {
    icon: MapPin,
    number: "02",
    title: "Site Visit",
    description: "Technical evaluation",
  },
  {
    icon: Palette,
    number: "03",
    title: "Design & 3D Visuals",
    description: "See your home before it's built",
  },
  {
    icon: FileText,
    number: "04",
    title: "Estimate & Agreement",
    description: "Transparent and clear",
  },
  {
    icon: HardHat,
    number: "05",
    title: "Execution & Supervision",
    description: "Daily updates, strict quality control",
  },
  {
    icon: Home,
    number: "06",
    title: "Handover",
    description: "A home built to last",
  },
];

const ProcessSection = () => {
  const { setRef, centeredIndex } = useScrollCenterGroup(steps.length);

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-foreground">
            Our 6-Step Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A clear, transparent journey from your first idea to the final handover
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const isActive = centeredIndex === index;
            return (
              <div
                key={index}
                ref={setRef(index)}
                className={cn(
                  "relative bg-card p-6 rounded-xl border border-border transition-shadow",
                  "hover:shadow-lg",
                  isActive && "shadow-lg"
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <step.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-primary">{step.number}</span>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
