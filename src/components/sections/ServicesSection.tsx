import { Link } from "react-router-dom";
import { Building2, Palette, RefreshCw, Trees, Box, MessageSquare, HardHat, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollCenterGroup } from "@/hooks/use-scroll-center";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Building2,
    title: "Construction",
    description: "Villas, homes, extensions, structure + finishing",
    link: "/services#construction"
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Modular spaces, custom furniture, 3D visualization",
    link: "/services#interior-design"
  },
  {
    icon: RefreshCw,
    title: "Renovation",
    description: "Complete home makeovers, kitchen upgrades, room redesigns",
    link: "/services#renovation"
  },
  {
    icon: Trees,
    title: "Landscaping",
    description: "Gardens, pathways, outdoor lighting, water features",
    link: "/services#landscaping"
  },
  {
    icon: Box,
    title: "3D Visualization",
    description: "Realistic renders and walkthroughs before construction",
    link: "/services#3d-visualization"
  },
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Budget planning, design review, technical advice",
    link: "/services#consultation"
  },
  {
    icon: HardHat,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-foreground">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your construction and design needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const isActive = centeredIndex === index;
            return (
              <Link
                to={service.link}
                key={index}
                ref={setRef(index)}
                className={cn(
                  "group p-6 bg-card rounded-xl border transition-all duration-300 block",
                  "hover:border-primary/30 hover:shadow-lg",
                  isActive ? "border-primary/30 shadow-lg" : "border-border",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: isVisible ? `${index * 75}ms` : '0ms' }}
              >
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
          <Button size="lg" variant="outline" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;