import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Counter from "@/components/ui/Counter";
import TiltedCard from "@/components/ui/TiltedCard";

const stats = [
  { value: 7, suffix: "+", label: "Years Experience", places: [1] },
  { value: 100, suffix: "+", label: "Projects Completed", places: [100, 10, 1] },
  { value: 15, suffix: "+", label: "Expert Team Members", places: [10, 1] },
  { value: 50, suffix: "+", label: "Areas Served", places: [10, 1] },
];

const WhyUsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="bg-accent py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={cn(
          "text-center mb-12 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-accent-foreground">
            Why Homeowners Trust Us
          </h2>
          <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Building trust through quality, transparency, and exceptional service
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <TiltedCard key={index} showMobileWarning={false} showTooltip={false} scaleOnHover={1.05} rotateAmplitude={14}>
              <div
                className={cn(
                  "text-center transition-all duration-500 bg-card rounded-2xl p-6 h-full flex flex-col justify-center items-center shadow-sm border border-border/50",
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                )}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="flex justify-center items-center mb-2 h-14 overflow-hidden">
                  <Counter
                    value={isVisible ? stat.value : 0}
                    fontSize={40} // Scaled for design
                    places={stat.places}
                    gap={0}
                    textColor="hsl(var(--primary))"
                    gradientFrom=""
                    gradientTo=""
                    gradientHeight={0} // Disable gradient for cleaner look
                    springOptions={{
                      mass: 1,        // Standard mass for responsiveness
                      stiffness: 40,  // Low stiffness for gentle speed
                      damping: 15,    // Lower damping to avoid "dragging" or "hanging" at the end
                    }}
                  />
                  <span className="text-4xl md:text-5xl font-bold text-primary font-serif leading-none ml-1 relative -top-1">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
              </div>
            </TiltedCard>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-md whitespace-normal h-auto py-2 text-center w-full sm:w-auto" asChild>
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