import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>HarrietBuildesign | Premium Construction & Interior Design in Kerala</title>
        <meta
          name="description"
          content="Build your dream home in Kerala with HarrietBuildesign. 7+ years of experience in construction, interior design, renovation & landscaping. Transparent pricing, daily supervision, on-time delivery."
        />
        <meta name="keywords" content="construction Kerala, interior design, home builders, renovation, landscaping, Perinthalmanna, Malappuram, house construction" />
        <link rel="canonical" href="https://harrietbuildesign.com/" />
      </Helmet>
      <Layout>
        <HeroSection />
        <WhyUsSection />
        {/* Added button below WhyUsSection linking to /why-us */}
        <div className="bg-harriet-50 flex justify-center pb-12 pt-4">
          <Button size="lg" className="bg-harriet-900 hover:bg-harriet-800 text-white" asChild>
            <Link to="/why-us">
              Read More About Why Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <div className="flex justify-center pb-10 bg-accent">
          <Button size="lg" variant="outline" asChild>
            <Link to="/process">
              See Our Full Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;