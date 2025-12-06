import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={cn(
          "text-center max-w-3xl mx-auto transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-secondary-foreground">
            Start Your Project
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8">
            Build confidently with a team that prioritizes quality, transparency, and trust.
          </p>

          <div className={cn(
            "flex flex-col sm:flex-row justify-center gap-4 mb-12 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <Button size="lg" asChild className="text-base">
              <Link to="/contact">Book Your Free Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
            >
              <a href="https://wa.me/919744707505" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          <div className={cn(
            "flex flex-col sm:flex-row justify-center gap-8 text-secondary-foreground/80 transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <a href="tel:+919744707505" className="flex items-center justify-center gap-2 hover:text-secondary-foreground transition-colors">
              <Phone className="h-5 w-5" />
              <span>97447 07505</span>
            </a>
            <a href="tel:+918589883505" className="flex items-center justify-center gap-2 hover:text-secondary-foreground transition-colors">
              <Phone className="h-5 w-5" />
              <span>85898 83505</span>
            </a>
            <a href="mailto:harrietbuilders@gmail.com" className="flex items-center justify-center gap-2 hover:text-secondary-foreground transition-colors">
              <Mail className="h-5 w-5" />
              <span>harrietbuilders@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;