import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Building2, Palette, RefreshCw, Trees, Box, MessageSquare, HardHat, CheckCircle, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TiltedCard from "@/components/ui/TiltedCard";

const services = [
  {
    icon: Box,
    title: "Architectural Design & Drawings",
    id: "architectural-design",
    description: "From initial sketches to detailed blueprints. We create comprehensive architectural plans that ensure your home is beautiful, practical, and structurally sound.",
    features: ["Architectural Floor Plans", "3D Visualization", "Interior & exterior views", "Material previews", "Realistic lighting and color simulations"],
    idealFor: "All clients starting their home journey.",
  },
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
          content="Explore our comprehensive services: Architectural Design, Home Construction, Interior Design, Renovation, Landscaping, Consultation & Site Supervision."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section
          className="py-20 bg-cover relative min-h-[300px] flex flex-col justify-center"
          style={{
            backgroundImage: 'url("/assets/patterns/services-pattern-v2.png")',
            backgroundRepeat: 'repeat',
            backgroundSize: '400px'
          }}
        >
          {/* Overlay to ensure text readability against pattern */}
          <div className="absolute inset-0 bg-harriet-900/70 pointer-events-none" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
                Our Services
              </h1>
              <p className="text-xl text-white/90">
                Crafting durable homes, thoughtful interiors, and beautifully designed spaces across Kerala.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-10 md:space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  id={service.id}
                  className="grid grid-cols-1 dsk:grid-cols-2 gap-12 items-start scroll-mt-24"
                >
                  <div className="flex flex-col justify-center h-full">
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
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Ideal For:</span> {service.idealFor}
                    </p>
                  </div>

                  <div>
                    <TiltedCard
                      containerHeight="auto"
                      captionText="Included Features"
                      showMobileWarning={false}
                      showTooltip={false}
                      scaleOnHover={1.02}
                      rotateAmplitude={8}
                    >
                      <div
                        className="bg-secondary p-6 rounded-xl border-none h-full group relative transition-all duration-300"
                        style={{
                          boxShadow: '9px 9px 18px #cbd7c1, -9px -9px 18px #ffffff, inset 0 0 0 1px rgba(255,255,255,0.5)',
                        }}
                      >
                        <div className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                          style={{
                            boxShadow: 'inset 3px 3px 6px #cbd7c1, inset -3px -3px 6px #ffffff'
                          }}
                        />
                        <h3 className="font-semibold text-foreground mb-4 relative z-10">What's Included:</h3>
                        <ul className="grid sm:grid-cols-2 gap-3 relative z-10">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TiltedCard>
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
            <Button size="lg" variant="secondary" asChild className="whitespace-normal h-auto py-4 text-center w-full sm:w-auto">
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