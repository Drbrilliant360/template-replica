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

const Index = () => (
  <div className="min-h-screen">
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
