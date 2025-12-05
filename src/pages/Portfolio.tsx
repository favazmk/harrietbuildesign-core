import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const categories = ["All", "Construction", "Interior Design", "Renovation", "Landscaping"];

const projects = [
  {
    image: project2,
    title: "Modern Villa",
    location: "Perinthalmanna",
    category: "Construction",
    description: "A spacious contemporary home designed with clean lines, natural light, and durable materials.",
    highlights: ["Open-plan living", "Custom interiors", "Premium finishes"],
  },
  {
    image: project1,
    title: "Contemporary Interior",
    location: "Kerala",
    category: "Interior Design",
    description: "A perfect blend of modern architecture and Kerala's functional principles.",
    highlights: ["Balanced ventilation", "Minimalist interiors", "Smart space planning"],
  },
  {
    image: project3,
    title: "Full Home Renovation",
    location: "Nilambur",
    category: "Renovation",
    description: "An outdated home transformed into a fresh, modern living space while retaining its structural essence.",
    highlights: ["Complete redesign", "New kitchen layout", "Improved lighting"],
  },
  {
    image: project4,
    title: "Minimalist Bedroom Design",
    location: "Kerala",
    category: "Interior Design",
    description: "A calm, clutter-free space designed around simplicity and warmth.",
    highlights: ["Custom wardrobe", "Subtle lighting", "Matte finishes"],
  },
  {
    image: project5,
    title: "Landscape Garden Makeover",
    location: "Perinthalmanna",
    category: "Landscaping",
    description: "Outdoor space redesigned into a peaceful, low-maintenance garden with functional walking paths.",
    highlights: ["Layered greenery", "Outdoor lighting", "Stone detailing"],
  },
  {
    image: project6,
    title: "Premium Interior Package",
    location: "Kerala",
    category: "Interior Design",
    description: "A full interior overhaul with personalized designs for living, dining, kitchen, and bedrooms.",
    highlights: ["Modular solutions", "Custom furniture", "Luxury textures"],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio | HarrietBuildesign - Our Work</title>
        <meta
          name="description"
          content="Explore our portfolio of completed construction, interior design, renovation, and landscaping projects across Kerala."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-foreground">
                Our Portfolio
              </h1>
              <p className="text-xl text-muted-foreground">
                A showcase of the homes, spaces, and transformations we've proudly delivered across Kerala.
              </p>
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                    <p className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Clients Love */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-foreground text-center">
              What Our Clients Love About Our Work
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                "Designs that match real-life needs",
                "High-quality materials and clean finishing",
                "Accurate execution of 3D visuals",
                "Honest communication and on-time delivery",
                "Superior supervision and workmanship",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-primary-foreground">
              Let's Build Your Dream Space
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Whether you're planning a new home or transforming an existing one, our team is here to guide you from idea to execution.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Portfolio;
