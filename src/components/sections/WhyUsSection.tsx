import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "15+", label: "Expert Team Members" },
  { value: "50+", label: "Areas Served" },
];

const WhyUsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="bg-harriet-50 py-20">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={cn(
                "text-center transition-all duration-500",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2 font-serif">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" className="bg-harriet-900 hover:bg-harriet-800 text-white" asChild>
            <Link to="/why-us">
              Read More About Why Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;