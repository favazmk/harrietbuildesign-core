import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Building2, Palette, RefreshCw, Trees, Box, MessageSquare, HardHat, CheckCircle, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const services = [
  {
    icon: Building2,
    title: "Home Construction",
    id: "construction",
    description: "Build a strong, long-lasting home with complete transparency and engineering precision. We handle your entire project — from foundation to finishing.",
    features: ["Structural construction", "Electrical & plumbing", "Flooring, painting & carpentry", "Material guidance & budget planning", "Daily site supervision", "On-time completion"],
    idealFor: "New homes, villas, extensions, and family houses.",
  },
  {
    icon: Palette,
    title: "Interior Design",
    id: "interior-design",
    description: "Beautiful, functional interiors designed to match your lifestyle. From concept to installation — we bring your vision to life.",
    features: ["Space planning & layout design", "Material & finish selection", "Custom furniture & modular solutions", "Lighting & color planning", "3D visualization of every room"],
    idealFor: "New homes, renovations, rental properties, and modern makeovers.",
  },
  {
    icon: RefreshCw,
    title: "Renovation & Remodeling",
    id: "renovation",
    description: "Transform old spaces into stunning, modern, and highly functional homes.",
    features: ["Full home renovation", "Kitchen & bathroom remodeling", "Living room + bedroom redesign", "Structural changes (where feasible)", "Before/after planning & budgeting"],
    idealFor: "Families upgrading old homes, buying an old property, or fixing poor-quality work.",
  },
  {
    icon: Trees,
    title: "Landscaping & Outdoor Design",
    id: "landscaping",
    description: "Create peaceful, functional outdoor spaces that add beauty and value to your home.",
    features: ["Garden design", "Hardscaping & pathways", "Outdoor lighting", "Water features", "Balcony & terrace makeovers"],
    idealFor: "Homeowners looking to enhance outdoor living spaces.",
  },
  {
    icon: Box,
    title: "3D Visualization & Design Walkthroughs",
    id: "3d-visualization",
    description: "See your future home before construction begins. Our realistic 3D visuals reduce guesswork and help you make confident design decisions.",
    features: ["Full-home 3D renders", "Interior & exterior views", "Material previews", "Realistic lighting and color simulations"],
    idealFor: "All clients who want to visualize their home before building.",
  },
  {
    icon: MessageSquare,
    title: "Consultation & Planning",
    id: "consultation",
    description: "Expert guidance for homeowners who want clarity before they build.",
    features: ["Budget calculation", "Floor plan review", "Material comparison", "Timeline planning", "Structural feasibility advice"],
    idealFor: "Clients who already have a plan and need professional direction.",
  },
  {
    icon: HardHat,
    title: "Site Supervision & Project Management",
    id: "supervision",
    description: "Stay stress-free while we ensure everything is executed perfectly on-site.",
    features: ["Dedicated engineer or supervisor", "Daily site visits", "Quality checks at every stage", "Progress updates with photos/videos", "Contractor coordination", "Strict material monitoring"],
    idealFor: "Homeowners living abroad or unable to visit the site daily.",
  },
];

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>Our Services | HarrietBuildesign - Construction & Interior Design</title>
        <meta
          name="description"
          content="Explore our comprehensive services: Home Construction, Interior Design, Renovation, Landscaping, 3D Visualization, Consultation & Site Supervision."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-foreground">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Crafting durable homes, thoughtful interiors, and beautifully designed spaces across Kerala.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-start scroll-mt-24 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="bg-card p-6 rounded-xl border border-border mb-4">
                      <h3 className="font-semibold text-foreground mb-4">What's Included:</h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Ideal For:</span> {service.idealFor}
                    </p>
                  </div>
                  <div className={`bg-accent rounded-2xl p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <service.icon className="h-24 w-24 text-primary/20 mx-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-primary-foreground">
              Start Your Project With Us
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Whether you need construction, interiors, renovation, or design guidance — we're ready to help.
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

export default Services;