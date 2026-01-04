import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Quote, Star, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        quote: "They delivered exactly what they promised. HarrietBuildesign handled everything from design to execution with total honesty. The daily updates kept us stress-free, and the final house looked even better than the 3D design.",
        author: "Jafar",
        location: "Cherukara",
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
        author: "Shein",
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

interface MarqueeRowProps {
    items: typeof testimonials;
    direction: "left" | "right";
    speed?: number;
}

const MarqueeRow = ({ items, direction, speed = 0.5 }: MarqueeRowProps) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const isHovered = useRef(false);
    const position = useRef(0);
    const currentSpeed = useRef(speed);
    const rafId = useRef<number | null>(null);

    // Duplicate list to ensure seamless loop
    const marqueeList = [...items, ...items];

    useEffect(() => {
        const animate = () => {
            // Calculate target speed based on hover state
            const targetSpeed = isHovered.current ? 0 : speed;

            // Momentum logic: smoothly interpolate current speed towards target speed
            currentSpeed.current += (targetSpeed - currentSpeed.current) * 0.05;

            if (Math.abs(currentSpeed.current) > 0.001) {
                if (direction === "left") {
                    position.current -= currentSpeed.current;
                } else {
                    position.current += currentSpeed.current;
                }
            }

            if (scrollerRef.current && contentRef.current) {
                const contentWidth = contentRef.current.scrollWidth / 2;

                if (direction === "left") {
                    if (position.current <= -contentWidth) {
                        position.current += contentWidth;
                    }
                } else {
                    if (position.current >= 0) {
                        position.current -= contentWidth;
                    }
                }

                scrollerRef.current.style.transform = `translate3d(${position.current}px, 0, 0)`;
            }

            rafId.current = requestAnimationFrame(animate);
        };

        rafId.current = requestAnimationFrame(animate);

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, [direction, speed]);

    return (
        <div
            className="relative w-full overflow-hidden py-4"
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
        >
            <div
                ref={scrollerRef}
                className="flex gap-6 w-max will-change-transform"
            >
                <div ref={contentRef} className="flex gap-6">
                    {marqueeList.map((testimonial, index) => (
                        <div key={index} className="w-[240px] md:w-[320px] shrink-0">
                            <div className="bg-gradient-to-tr from-emerald-50/80 to-white rounded-2xl shadow-neu-flat p-4 md:p-5 flex flex-col items-center text-center border border-white/60 backdrop-blur-sm h-full min-h-[260px] md:min-h-[300px] relative overflow-hidden">
                                {/* Pattern Background */}
                                <div
                                    className="absolute inset-0 opacity-[0.25] pointer-events-none"
                                    style={{
                                        backgroundImage: "url('/assets/testimonial-bg.png')",
                                        backgroundSize: "300px",
                                        backgroundRepeat: "repeat"
                                    }}
                                />
                                <div className="relative z-10 flex flex-col items-center h-full w-full">
                                    <div className="w-12 h-12 rounded-full shadow-neu-pressed flex items-center justify-center mb-4 text-emerald-500 bg-gradient-to-tr from-emerald-50 to-white ring-2 ring-white/40 shrink-0">
                                        <Quote className="h-4 w-4 fill-current" />
                                    </div>
                                    <div className="flex gap-1.5 mb-4 shrink-0">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <div key={star} className="p-1 rounded-full shadow-neu-btn flex items-center justify-center text-emerald-500 bg-white">
                                                <Star className="h-3 w-3 fill-current" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-2 mb-6 text-emerald-950/80 font-medium leading-normal text-sm flex-grow flex items-center overflow-hidden">
                                        <p className="line-clamp-6 italic">"{testimonial.quote}"</p>
                                    </div>
                                    <div className="w-full max-w-[60px] h-1 rounded-full shadow-neu-pressed bg-emerald-50/50 mb-4 overflow-hidden border border-white/50 shrink-0">
                                        <div className="h-full w-1/2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full mx-auto shadow-sm"></div>
                                    </div>
                                    <div className="flex flex-col items-center shrink-0">
                                        <h3 className="text-emerald-700 font-bold text-sm md:text-base tracking-wide uppercase drop-shadow-sm font-display">{testimonial.author}</h3>
                                        <span className="text-emerald-500 text-[10px] font-semibold tracking-wider mt-1 uppercase bg-white/50 px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                                            <MapPin className="h-2.5 w-2.5" />
                                            {testimonial.type} • {testimonial.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    // Split testimonials into rows of 7 each
    const row1 = testimonials.slice(0, 7);
    const row2 = testimonials.slice(7, 14);
    const row3 = testimonials.slice(14, 21);

    return (
        <Layout>
            <Helmet>
                <title>Testimonials | HarrietBuildesign</title>
                <meta name="description" content="Read what our clients say about their experience with HarrietBuildesign. Real stories of dream homes coming to life." />
            </Helmet>

            {/* Hero */}
            <section
                className="py-20 bg-cover relative min-h-[300px] flex flex-col justify-center"
                style={{
                    backgroundImage: 'url("/assets/patterns/contact-pattern.png")',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '300px'
                }}
            >
                {/* Overlay to ensure text readability against pattern */}
                <div className="absolute inset-0 bg-harriet-900/70 pointer-events-none" />
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
                            Client Testimonials
                        </h1>
                        <p className="text-xl text-white/90">
                            Don't just take our word for it. Here's what our valued clients have to say about their journey with us.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials Marquee rows */}
            <section className="py-16 md:py-24 bg-background overflow-hidden relative">
                {/* Gradient Fades for the edges */}
                {/* Gradient Fades Removed */}
                {/* <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" /> */}

                <div className="space-y-6">
                    <MarqueeRow items={row1} direction="right" speed={0.6} />
                    <MarqueeRow items={row2} direction="left" speed={0.8} />
                    <MarqueeRow items={row3} direction="right" speed={0.4} />
                    {/* If there were more, they would continue pattern */}
                </div>
            </section>
        </Layout>
    );
};

export default Testimonials;
