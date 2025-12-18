import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import RotatingCubeText from "@/components/ui/RotatingCubeText";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pb-32 lg:pb-60">
      {/* Background Image */}
      <div className="absolute inset-0 z-[60]">
        <img
          src={heroImage}
          alt="Modern luxury villa in Kerala"
          className="w-full h-full object-cover"
        />

      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-[70]">
        <div className="w-full flex flex-col items-start justify-start text-left">
          <RotatingCubeText />
          <p className="text-lg md:text-xl text-harriet-700/80 mb-10 max-w-2xl font-light leading-relaxed text-left">
            From concept to construction, Harriet Buildesign delivers functional, <br />
            beautiful, long-lasting spaces - crafted with precision, <br />
            transparency, and care.
          </p>
          <div className="flex flex-col gap-4 justify-start w-full items-start">
            <Button size="lg" asChild className="text-base whitespace-nowrap h-auto py-4 px-8 w-fit min-w-[200px] text-center rounded-full">
              <Link to="/contact">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-foreground/20 text-foreground hover:bg-foreground/5 w-fit min-w-[200px] h-auto py-4 px-8 rounded-full">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;