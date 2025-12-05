import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsSection from "@/components/sections/StatsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>HarrietBuildesign | Premium Construction & Interior Design in Kerala</title>
        <meta
          name="description"
          content="Build your dream home in Kerala with HarrietBuildesign. 7+ years of experience in construction, interior design, renovation & landscaping. Transparent pricing, daily supervision, on-time delivery."
        />
        <meta name="keywords" content="construction Kerala, interior design, home builders, renovation, landscaping, Perinthalmanna, Malappuram" />
        <link rel="canonical" href="https://harrietbuildesign.com/" />
      </Helmet>
      <Layout>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <WhyUsSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <StatsSection />
        <FAQSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
