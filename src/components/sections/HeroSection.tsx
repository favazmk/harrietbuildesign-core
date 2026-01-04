import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import heroHomeMobile from "@/assets/hero-home-mobile.png";
import RotatingCubeText from "@/components/ui/RotatingCubeText";
import Header from "@/components/layout/Header";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-start md:items-center pb-12 md:pb-32 dsk:pb-60 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Image */}
        <img
          src={heroHomeMobile}
          alt="Modern luxury villa in Kerala"
          className="block md:hidden w-full h-full object-cover"
        />
        {/* Desktop Image */}
        <img
          src={heroImage}
          alt="Modern luxury villa in Kerala"
          className="hidden md:block w-full h-full object-cover"
        />
      </div>

      {/* Header positioned above the hero */}
      <div className="absolute top-0 left-0 right-0 z-[100]">
        <Header />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 md:pt-16">
        <div className="w-full flex flex-col items-start justify-start text-left">
          <RotatingCubeText />
          <p className="text-lg md:text-xl text-harriet-700/80 mb-10 max-w-2xl font-light leading-relaxed text-left">
            From concept to construction, Harriet Buildesign delivers functional, <br />
            beautiful, long-lasting spaces <span className="hidden md:inline">- crafted with precision, <br className="hidden md:block" />
              transparency, and care.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start w-full items-start">
            <Button size="lg" asChild className="text-base whitespace-nowrap h-auto py-3 px-6 md:py-4 md:px-8 w-full sm:w-auto flex-none text-center rounded-full bg-primary/90 hover:bg-primary backdrop-blur-sm shadow-lg">
              <Link to="/contact">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-black/5 backdrop-blur-sm border-foreground/20 text-foreground hover:bg-black/10 w-full sm:w-auto flex-none h-auto py-3 px-6 md:py-4 md:px-8 rounded-full">
              <Link to="/portfolio">View Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;