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
import JsonLd, { organizationSchema, websiteSchema, faqSchema } from "@/components/JsonLd";

const homeFaqs = [
  {
    question: "What does a business advisory firm in Tanzania do?",
    answer:
      "Tanzania Advisory Partners helps foreign investors and businesses navigate Tanzanian regulations — including business registration, work permits, tax compliance, licensing, and investment entry through TIC and BRELA.",
  },
  {
    question: "How do I register a company in Tanzania as a foreign investor?",
    answer:
      "Foreign investors typically register through BRELA, obtain a TIN from TRA, secure sector licenses, and may apply for a TIC Certificate of Incentives. We coordinate the entire process end-to-end.",
  },
  {
    question: "Do you provide work permit and immigration support in Tanzania?",
    answer:
      "Yes. We advise on Class A, B and C work permits, residence permits, and dependant passes, and coordinate applications with the Labour Commissioner and Immigration Department.",
  },
  {
    question: "Where is Tanzania Advisory Partners based?",
    answer:
      "We are based in Dar es Salaam, Tanzania, and serve clients across Tanzania including Arusha, Mwanza and Dodoma.",
  },
];

const Index = () => (
  <div className="min-h-screen">
    <SEOHead
      title="Tanzania Advisory Partners | Business Advisory & Consulting in Tanzania"
      description="Leading business advisory & consulting services in Tanzania. Regulatory, immigration, financial advisory and corporate compliance for investors in Dar es Salaam and across Tanzania."
      path="/"
    />
    <JsonLd id="organization" data={organizationSchema} />
    <JsonLd id="website" data={websiteSchema} />
    <JsonLd id="faq" data={faqSchema(homeFaqs)} />
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
