import { AlertTriangle, Clock, DollarSign, UserX, Palette, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const problems = [
  { icon: Clock, text: "Delays, excuses, and zero accountability" },
  { icon: AlertTriangle, text: "Poor-quality materials and shortcuts" },
  { icon: DollarSign, text: "Budget overruns and hidden costs" },
  { icon: UserX, text: "Contractors who disappear when you need them" },
  { icon: Palette, text: "Designs that look good on paper but fail in execution" },
];

const solutions = [
  "Transparent materials & billing",
  "Daily on-site supervision",
  "Accurate timelines & no shortcuts",
  "High-quality workmanship",
  "Premium 3D designs before construction",
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={cn(
          "grid lg:grid-cols-2 gap-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Problem */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-foreground">
              The Problem
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Building a home in Kerala shouldn't feel stressful — but most people face the same issues:
            </p>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li 
                  key={index} 
                  className={cn(
                    "flex items-start gap-4 transition-all duration-500",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  )}
                  style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
                >
                  <div className="p-2 rounded-lg bg-destructive/10">
                    <problem.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <span className="text-foreground pt-1">{problem.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg font-medium text-foreground">
              You deserve a team that values your home as much as you do.
            </p>
          </div>

          {/* Solution */}
          <div className={cn(
            "bg-accent rounded-2xl p-8 lg:p-12 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-accent-foreground">
              The HarrietBuildesign Promise
            </h2>
            <p className="text-lg text-foreground mb-8">
              We build and design homes with:
            </p>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li 
                  key={index} 
                  className={cn(
                    "flex items-start gap-4 transition-all duration-500",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  )}
                  style={{ transitionDelay: isVisible ? `${(index * 100) + 400}ms` : '0ms' }}
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{solution}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg font-semibold text-primary">
              We handle everything — from concept to handover.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;