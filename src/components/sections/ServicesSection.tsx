import { Link } from "react-router-dom";
import { BrickWall, Armchair, Hammer, Sprout, Cuboid, NotebookPen, UserCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollCenterGroup } from "@/hooks/use-scroll-center";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Cuboid,
    title: "Architectural Design",
    description: "Comprehensive plans and realistic 3D walkthroughs",
    link: "/services#architectural-design"
  },
  {
    icon: BrickWall,
    title: "Construction",
    description: "Villas, homes, extensions, structure + finishing",
    link: "/services#construction"
  },
  {
    icon: Armchair,
    title: "Interior Design",
    description: "Modular spaces, custom furniture, styling",
    link: "/services#interior-design"
  },
  {
    icon: Hammer,
    title: "Renovation",
    description: "Complete home makeovers, kitchen upgrades, room redesigns",
    link: "/services#renovation"
  },
  {
    icon: Sprout,
    title: "Landscaping",
    description: "Gardens, pathways, outdoor lighting, water features",
    link: "/services#landscaping"
  },

  {
    icon: NotebookPen,
    title: "Consultation",
    description: "Budget planning, design review, technical advice",
    link: "/services#consultation"
  },
  {
    icon: UserCheck,
    title: "Supervision",
    description: "Dedicated engineer + daily site updates",
    link: "/services#supervision"
  },
];

const ServicesSection = () => {
  const { setRef, centeredIndex } = useScrollCenterGroup(services.length);
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={cn(
          "text-center mb-12 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-harriet-700">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your construction and design needs
          </p>
        </div>

        {/* Changed from grid to flex to allow centering of the last row */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => {
            const isActive = centeredIndex === index;
            return (
              <Link
                to={service.link}
                key={index}
                ref={setRef(index)}
                className={cn(
                  "group p-6 bg-secondary rounded-xl transition-all duration-300 block relative z-[51] active:scale-[0.98]",
                  // Calculated widths to mimic grid columns with gap-6 (24px)
                  "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(25%-18px)]",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{
                  transitionDelay: isVisible ? `${index * 75}ms` : '0ms',
                  boxShadow: '9px 9px 18px #cbd7c1, -9px -9px 18px #ffffff, inset 0 0 0 1px rgba(255,255,255,0.5)',
                }}
              >
                <div className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-active:opacity-100"
                  style={{
                    boxShadow: 'inset 3px 3px 6px #cbd7c1, inset -3px -3px 6px #ffffff'
                  }}
                />
                <div className={cn(
                  "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors",
                  "group-hover:bg-primary/20",
                  isActive && "bg-primary/20"
                )}>
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Link>
            );
          })}
        </div>

        <div className={cn(
          "text-center mt-12 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Button size="lg" variant="outline" asChild className="whitespace-normal h-auto py-2 text-center w-full sm:w-auto">
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section >
  );
};

export default ServicesSection;