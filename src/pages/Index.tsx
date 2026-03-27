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

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutPreview />
    <ServicesSection />
    <WhyChooseUs />
    <WhoWeWorkWith />
    <IndustriesSection />
    <PrinciplesSection />
    <TeamPreview />
    <CtaBanner />
    <FooterSection />
  </div>
);

export default Index;
