import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection"; // Added import
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <Helmet>
        <title>HarrietBuildesign | Premium Construction & Interior Design in Kerala</title>
        <meta
          name="description"
          content="Build your dream home in Kerala with HarrietBuildesign. 7+ years of experience in construction, interior design, renovation & landscaping. Transparent pricing, daily supervision, on-time delivery."
        />
        <meta name="keywords" content="construction Kerala, interior design, home builders, renovation, landscaping, Perinthalmanna, Malappuram, house construction" />
        <link rel="canonical" href="https://harrietbuildesign.com/" />
      </Helmet>
      <HeroSection />
      <Layout showHeader={false}>
        <WhyUsSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ProcessSection />
        <FAQSection />
        <CTASection />
      </Layout>
    </div>
  );
};

export default Index;