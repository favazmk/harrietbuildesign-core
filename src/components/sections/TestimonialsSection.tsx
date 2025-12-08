import { Link } from "react-router-dom";
import { Quote, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

// Combined testimonials from both the section and the page
const testimonials = [
  // Existing from Section
  {
    quote: "Professional team, transparent from day one. They completed our home exactly as promised.",
    author: "Homeowner",
    location: "Perinthalmanna",
    type: "Construction"
  },
  {
    quote: "Loved the 3D design — the final result looked exactly like the visual.",
    author: "Client",
    location: "Kerala",
    type: "Interior Design"
  },
  {
    quote: "Reliable, detail-oriented, and extremely supportive throughout the project.",
    author: "Renovation Client",
    location: "Malappuram",
    type: "Renovation"
  },
  // Moved from Page
  {
    quote: "They delivered exactly what they promised. HarrietBuildesign handled everything from design to execution with total honesty. The daily updates kept us stress-free, and the final house looked even better than the 3D design.",
    author: "Homeowner",
    location: "Perinthalmanna",
    type: "Construction",
  },
  {
    quote: "Professional team with great attention to detail. Every corner was perfectly finished. They listened to our ideas and improved them with better solutions. Highly recommended for anyone building a home in Kerala.",
    author: "Residential Client",
    location: "Malappuram",
    type: "Construction",
  },
  {
    quote: "Transparent, reliable, and easy to work with. No hidden costs, no surprises. They guided us through materials, budgeting, and timelines very clearly. Their supervision made a huge difference in quality.",
    author: "Renovation Client",
    location: "Nilambur",
    type: "Renovation",
  },
  {
    quote: "The 3D visual matched the final result — exactly. We were worried about how the interiors would turn out, but the execution was spot on. The finishing and color balance were perfect.",
    author: "Interior Design Client",
    location: "Kerala",
    type: "Interior Design",
  },
  {
    quote: "They transformed our old house into a modern beauty. Our renovation looked impossible at first, but HarrietBuildesign brought it back to life without losing its charm.",
    author: "Full Home Renovation",
    location: "Kerala",
    type: "Renovation",
  },
  {
    quote: "Very trustworthy team. We live outside Kerala and couldn't visit the site often. Their daily supervision and updates gave us complete confidence throughout the project.",
    author: "NRI Homeowner",
    location: "Kerala",
    type: "Construction",
  },
];

// Duplicate list to ensure seamless loop
const marqueeList = [...testimonials, ...testimonials, ...testimonials];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const scrollerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const position = useRef(0);
  const speed = useRef(1.0); // Base speed
  const currentSpeed = useRef(1.0); // Current speed (for momentum)
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      // Calculate target speed based on hover state
      const targetSpeed = isHovered.current ? 0 : speed.current;
      
      // Momentum logic: smoothly interpolate current speed towards target speed
      // The 0.05 factor determines the "braking" friction (lower = smoother/slower stop)
      currentSpeed.current += (targetSpeed - currentSpeed.current) * 0.05;

      // Stop animation calculation if speed is effectively zero to save resources,
      // but keep loop running to catch when hover ends
      if (Math.abs(currentSpeed.current) > 0.001 || !isHovered.current) {
        position.current -= currentSpeed.current;
      }

      if (scrollerRef.current && contentRef.current) {
        const contentWidth = contentRef.current.scrollWidth / 3; // divided by 3 because we tripled the list
        
        // Reset position for seamless loop
        if (position.current <= -contentWidth) {
          position.current += contentWidth;
        } else if (position.current > 0) {
          position.current -= contentWidth;
        }

        scrollerRef.current.style.transform = `translate3d(${position.current}px, 0, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section ref={ref} className="py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <div className={cn(
          "text-center transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from homeowners who trusted us with their dream spaces
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div 
        className={cn(
          "relative w-full transition-opacity duration-1000",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        <div 
          ref={scrollerRef}
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing will-change-transform"
        >
          <div ref={contentRef} className="flex gap-6">
            {marqueeList.map((testimonial, index) => (
              <div
                key={index}
                className="w-[260px] md:w-[450px] flex-shrink-0 bg-background p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-base mb-4 italic">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-muted-foreground text-sm flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {testimonial.location}
                    </p>
                    {testimonial.type && (
                      <span className="text-xs px-2 py-1 bg-accent rounded text-accent-foreground">
                        {testimonial.type}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
      </div>


    </section>
  );
};

export default TestimonialsSection;