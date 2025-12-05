import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern luxury villa in Kerala"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 font-serif leading-tight">
            Build a Home That Stands for Generations
          </h1>
          <p className="text-lg md:text-xl text-card/90 mb-8">
            Premium construction, interiors, renovation, and landscaping — delivered with honesty, quality, and daily supervision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <Link to="/contact">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-card/10 border-card/30 text-card hover:bg-card/20 hover:text-card">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
