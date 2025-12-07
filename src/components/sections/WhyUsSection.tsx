import { Award, Users, Eye, Clock, Palette, Shield } from "lucide-react";
import { useScrollCenterGroup } from "@/hooks/use-scroll-center";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: Award,
    title: "7+ Years Experience",
    description: "Proven expertise in Kerala's construction industry",
  },
  {
    icon: Users,
    title: "100+ Projects",
    description: "Successfully completed residential and interior projects",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear pricing and material selection with no hidden costs",
  },
  {
    icon: Clock,
    title: "Daily Supervision",
    description: "Dedicated engineer monitors your site every day",
  },
  {
    icon: Palette,
    title: "Premium 3D Designs",
    description: "See your home before it's built with realistic visuals",
  },
  {
    icon: Shield,
    title: "On-Time Delivery",
    description: "Disciplined project planning and reliable timelines",
  },
];

const WhyUsSection = () => {
  const { setRef, centeredIndex } = useScrollCenterGroup(reasons.length);
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-20 bg-harriet-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={cn(
          "text-center mb-12 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-foreground">
            Why Homeowners Trust Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building trust through quality, transparency, and exceptional service
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const isActive = centeredIndex === index;
            return (
              <div 
                key={index} 
                ref={setRef(index)}
                className={cn(
                  "flex gap-4 p-4 rounded-xl transition-all duration-300",
                  "hover:bg-accent/50",
                  isActive && "bg-accent/50",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className={cn(
                  "w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors",
                  "group-hover:bg-primary/20",
                  isActive && "bg-primary/20"
                )}>
                  <reason.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;