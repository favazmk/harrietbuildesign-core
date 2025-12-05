import { Link } from "react-router-dom";
import { Building2, Palette, RefreshCw, Trees, Box, MessageSquare, HardHat, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Construction",
    description: "Villas, homes, extensions, structure + finishing",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Modular spaces, custom furniture, 3D visualization",
  },
  {
    icon: RefreshCw,
    title: "Renovation",
    description: "Complete home makeovers, kitchen upgrades, room redesigns",
  },
  {
    icon: Trees,
    title: "Landscaping",
    description: "Gardens, pathways, outdoor lighting, water features",
  },
  {
    icon: Box,
    title: "3D Visualization",
    description: "Realistic renders and walkthroughs before construction",
  },
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Budget planning, design review, technical advice",
  },
  {
    icon: HardHat,
    title: "Supervision",
    description: "Dedicated engineer + daily site updates",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-foreground">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your construction and design needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
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
