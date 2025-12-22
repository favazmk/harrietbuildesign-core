
import { Quote, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

// Combined testimonials from both the section and the page
const testimonials = [
    {
        quote: "They delivered exactly what they promised. HarrietBuildesign handled everything from design to execution with total honesty. The daily updates kept us stress-free, and the final house looked even better than the 3D design.",
        author: "Jafar & Fasna",
        location: "Cherukara, Perinthalmanna",
        type: "Construction",
    },
    {
        quote: "Professional team, transparent from day one. They completed our home exactly as promised. The attention to detail in the structure and finishing is remarkably high compared to others.",
        author: "Shafeeq",
        location: "Angadippuram",
        type: "Construction"
    },
    {
        quote: "Professional team with great attention to detail. Every corner was perfectly finished. They listened to our ideas and improved them with better solutions. Highly recommended for anyone building a home in Perinthalmanna.",
        author: "Abdhul Rasheed",
        location: "Perinthalmanna",
        type: "Construction",
    },
    {
        quote: "Transparent, reliable, and easy to work with. No hidden costs, no surprises. They guided us through materials, budgeting, and timelines very clearly. Their supervision made a huge difference in quality.",
        author: "Akhil",
        location: "Mannarkad",
        type: "Interior Design",
    },
    {
        quote: "Loved the 3D design — the final result looked exactly like the visual. The execution was flawless and they handed over the project on time without any hassle.",
        author: "Basheer",
        location: "Perinthalmanna",
        type: "Construction"
    },
    {
        quote: "The 3D visual matched the final result — exactly. We were worried about how the interiors would turn out, but the execution was spot on. The finishing and color balance were perfect.",
        author: "Ameer",
        location: "Pattambi",
        type: "Construction",
    },
    {
        quote: "They transformed our old house into a modern beauty. Our renovation looked impossible at first, but HarrietBuildesign brought it back to life without losing its charm.",
        author: "Nasar",
        location: "Pulamanthole",
        type: "Renovation",
    },
    {
        quote: "Reliable, detail-oriented, and extremely supportive throughout the project. The team was always available to answer our queries and provided excellent suggestions for the interiors.",
        author: "Ramees",
        location: "Edappal",
        type: "Interior Design"
    },
    {
        quote: "Very trustworthy team. We live outside Kerala and couldn't visit the site often. Their daily supervision and updates gave us complete confidence throughout the project.",
        author: "Sabitha",
        location: "Koottanad",
        type: "Construction",
    },
    {
        quote: "Exceptional service from start to finish. The team at HarrietBuildesign is highly professional and skilled. They made the entire construction process smooth and enjoyable.",
        author: "Jasir",
        location: "Aluva",
        type: "Construction",
    },
    {
        quote: "Great designs and perfect execution. I am in love with my new kitchen and living room. They truly understood my taste and delivered a space that feels like home.",
        author: "Faisal",
        location: "Kattuppara",
        type: "Interior Design",
    },
    {
        quote: "Built our dream home with such dedication. The quality of materials used and the workmanship is outstanding. Thank you HarrietBuildesign for making our dream come true.",
        author: "Ansir",
        location: "Mannarkad",
        type: "Construction",
    },
    {
        quote: "Our home renovation was a major project, but they handled it with ease. The modern amenities they integrated while keeping the traditional look is just amazing.",
        author: "Iqbal",
        location: "Cherukara",
        type: "Renovation",
    },
    {
        quote: "Best construction company in Malappuram. Professional, timely, and budget-friendly. They provided detailed estimates and stuck to them throughout the project.",
        author: "Muhammed Shein",
        location: "Malappuram",
        type: "Construction",
    },
    {
        quote: "Creative ideas and excellent implementation. The interior work they did for our office is being appreciated by everyone. Highly recommended for commercial interiors.",
        author: "Arshak",
        location: "Manjeri",
        type: "Interior Design",
    },
    {
        quote: "We are extremely happy with our new home. The structural integrity and the aesthetic appeal are top-notch. It was a pleasure working with the entire team.",
        author: "Mansoor",
        location: "Kalikkavu",
        type: "Construction",
    },
    {
        quote: "Efficiency and quality defined. From the foundation to the final coat of paint, everything was done with precision. A trustworthy partner for construction.",
        author: "Abdhul Nasar",
        location: "Thrithala",
        type: "Construction",
    },
    {
        quote: "They gave our ancestral home a complete makeover. It feels brand new yet retains the memories. Fantastic work on the renovation.",
        author: "Mujeeb",
        location: "Thrithala",
        type: "Renovation",
    },
    {
        quote: "Superb planning and execution. The team has great technical knowledge and aesthetic sense. Our house in Thrissur stands out because of their design.",
        author: "Azeez",
        location: "Thrissur",
        type: "Construction",
    },
    {
        quote: "The interior layout they designed maximized our space utilization. Very smart and elegant designs. The materials used were of premium quality.",
        author: "Rasal",
        location: "Aryambavu",
        type: "Interior Design",
    },
    {
        quote: "A seamless experience from design to handover. The project management was excellent, ensuring no delays. Truly a professional construction firm.",
        author: "Mahindra Jeevan Patil",
        location: "Perinthalmanna",
        type: "Construction",
    }
];

// Duplicate list to ensure seamless loop
const marqueeList = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);

    const scrollerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const isHovered = useRef(false);
    const position = useRef(0);
    const speed = useRef(0.8); // Base speed
    const currentSpeed = useRef(0.8); // Current speed (for momentum)
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
                const contentWidth = contentRef.current.scrollWidth / 2; // divided by 2 because we duplicated the list

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
        <section ref={ref} className="py-20 bg-accent overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 mb-12">
                <div className={cn(
                    "text-center transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-accent-foreground">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
                        Real stories from homeowners who trusted us with their dream spaces
                    </p>
                </div>
            </div>

            {/* Marquee Container */}
            <div
                className={cn(
                    "relative w-full transition-opacity duration-1000 z-[51]",
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
                                className="w-[300px] md:w-[350px] flex-shrink-0 bg-card rounded-xl border-2 border-border shadow-sm hover:border-primary/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col"
                            >
                                {/* Review Section (Top) */}
                                <div className="relative p-8 flex-grow">
                                    {/* Pattern Background */}
                                    <div
                                        className="absolute inset-0 opacity-[0.15] pointer-events-none"
                                        style={{
                                            backgroundImage: "url('/assets/testimonial-bg.png')",
                                            backgroundSize: "300px",
                                            backgroundRepeat: "repeat"
                                        }}
                                    />
                                    <div className="relative z-10">
                                        <Quote className="h-10 w-10 text-primary/40 mb-4" />
                                        <p className="text-foreground text-lg italic whitespace-normal leading-relaxed">"{testimonial.quote}"</p>
                                    </div>
                                </div>

                                {/* Author Section (Bottom) */}
                                <div className="p-6 bg-secondary/30 border-t-2 border-border/50">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-bold text-foreground text-lg">{testimonial.author}</p>
                                                <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                                                    <MapPin className="h-3 w-3" />
                                                    {testimonial.location}
                                                </p>
                                            </div>
                                            {testimonial.type && (
                                                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-background border border-border rounded text-muted-foreground">
                                                    {testimonial.type}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gradient Fade Edges */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-accent to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-accent to-transparent z-10 pointer-events-none" />
            </div>

            <div className={cn(
                "text-center mt-12 transition-all duration-700 delay-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
                <Button size="lg" variant="outline" asChild className="whitespace-normal h-auto py-2 text-center w-full sm:w-auto">
                    <Link to="/testimonials">
                        View All Testimonials
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>
    );
};

export default TestimonialsSection;
