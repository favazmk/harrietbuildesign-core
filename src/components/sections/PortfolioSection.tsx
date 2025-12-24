import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollCenterGroup } from "@/hooks/use-scroll-center";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    image: project2,
    title: "Modern Villa",
    location: "Perinthalmanna",
    category: "Construction",
  },
  {
    image: project1,
    title: "Contemporary Interior",
    location: "Kerala",
    category: "Interior Design",
  },
  {
    image: project3,
    title: "Kitchen Renovation",
    location: "Malappuram",
    category: "Renovation",
  },
  {
    image: project4,
    title: "Minimalist Bedroom",
    location: "Kerala",
    category: "Interior Design",
  },
  {
    image: project5,
    title: "Landscape Garden",
    location: "Perinthalmanna",
    category: "Landscaping",
  },
  {
    image: project6,
    title: "Premium Living Room",
    location: "Kerala",
    category: "Interior Design",
  },
];

const PortfolioSection = () => {
  const { setRef, centeredIndex } = useScrollCenterGroup(projects.length);
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-12 md:py-20 bg-harriet-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={cn(
          "text-center mb-12 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-harriet-50">
            Featured Projects
          </h2>
          <p className="text-lg text-harriet-50/80 max-w-2xl mx-auto">
            A glimpse of the homes we've proudly built and designed
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 dsk:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => {
            const isActive = centeredIndex === index;
            return (
              <Link
                key={index}
                ref={setRef(index)}
                to="/portfolio"
                className={cn(
                  "group relative overflow-hidden rounded-xl aspect-[4/3] transition-all duration-500 z-[60]",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-500",
                    "group-hover:scale-110",
                    isActive && "scale-110"
                  )}
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent transition-opacity duration-300",
                  "opacity-0 group-hover:opacity-100",
                  isActive && "opacity-100"
                )} />
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 p-6 transition-all duration-300",
                  "translate-y-4 opacity-0",
                  "group-hover:translate-y-0 group-hover:opacity-100",
                  isActive && "translate-y-0 opacity-100"
                )}>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-card mb-1">{project.title}</h3>
                  <p className="flex items-center gap-1 text-card/80 text-sm">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className={cn(
          "text-center mt-16 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Button size="lg" asChild className="whitespace-normal h-auto py-2 text-center w-full sm:w-auto">
            <Link to="/portfolio">
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;