import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutPreview from "@/components/AboutPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import IndustriesSection from "@/components/IndustriesSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import TeamPreview from "@/components/TeamPreview";
import CtaBanner from "@/components/CtaBanner";
import FooterSection from "@/components/FooterSection";
import FadeInSection from "@/components/FadeInSection";
import SEOHead from "@/components/SEOHead";
import JsonLd, { organizationSchema } from "@/components/JsonLd";

const Index = () => (
  <div className="min-h-screen">
    <SEOHead
      title="Tanzania Advisory Partners | Regulatory & Investment Advisory"
      description="Structured advisory and coordination services for investors, businesses, and expatriates operating in Tanzania. Clarity in Regulation. Confidence in Market Entry."
      path="/"
    />
    <JsonLd data={organizationSchema} />
    <Navbar />
    <HeroSection />
    <FadeInSection><AboutPreview /></FadeInSection>
    <FadeInSection><ServicesSection /></FadeInSection>
    <FadeInSection><WhyChooseUs /></FadeInSection>
    <FadeInSection><WhoWeWorkWith /></FadeInSection>
    <FadeInSection><IndustriesSection /></FadeInSection>
    <FadeInSection><PrinciplesSection /></FadeInSection>
    <FadeInSection><TeamPreview /></FadeInSection>
    <CtaBanner />
    <FooterSection />
  </div>
);

export default Index;
