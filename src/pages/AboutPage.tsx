import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import FadeInSection from "@/components/FadeInSection";
import { Shield, Eye, FileCheck, Users, Heart } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity", desc: "We uphold the highest ethical standards in all engagements." },
  { icon: Eye, title: "Transparency", desc: "Clients are informed at every stage with no hidden processes." },
  { icon: FileCheck, title: "Compliance First", desc: "All advisory is grounded in regulatory frameworks." },
  { icon: Users, title: "Professional Coordination", desc: "We coordinate efficiently across authorities and stakeholders." },
  { icon: Heart, title: "Client Protection", desc: "Safeguarding client interests is central to our approach." },
];

const AboutPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="bg-primary py-20 text-center">
      <div className="container mx-auto">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">About the Firm</p>
        <h1 className="text-4xl md:text-5xl font-bold !text-primary-foreground mb-4">Who We Are</h1>
        <p className="!text-primary-foreground/70 max-w-xl mx-auto">Learn about our firm, values, and commitment to supporting foreign investors in Tanzania.</p>
      </div>
    </section>

    <FadeInSection>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
          <p className="text-body leading-relaxed mb-4">
            Tanzania Advisory Partners is a boutique advisory firm providing regulatory, immigration, and corporate coordination support for foreign investors and organizations operating in Tanzania.
          </p>
          <p className="text-body leading-relaxed mb-4">
            We bridge the gap between international business standards and Tanzanian regulatory requirements, providing structured guidance through every stage of market entry and ongoing operations.
          </p>
        </div>
      </section>
    </FadeInSection>

    <FadeInSection>
      <section className="section-padding section-bg">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 max-w-4xl">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Our Vision</p>
            <h2 className="text-2xl font-bold mb-4">Vision</h2>
            <p className="text-body leading-relaxed">To be a trusted advisory partner for international stakeholders seeking structured and compliant entry into the Tanzanian market.</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Our Mission</p>
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p className="text-body leading-relaxed">To simplify regulatory processes and provide clear, professional advisory support that enables foreign investors to operate with confidence in Tanzania.</p>
          </div>
        </div>
      </section>
    </FadeInSection>

    <FadeInSection>
      <section className="section-padding">
        <div className="container mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">What We Stand For</p>
          <h2 className="text-3xl font-bold">Core Values</h2>
        </div>
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-section-bg p-6 rounded-sm text-center border border-border group hover:shadow-lg hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <v.icon className="h-6 w-6 text-primary group-hover:text-secondary-foreground stroke-[1.5] transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-semibold mb-2">{v.title}</h3>
              <p className="text-xs text-body leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>

    <FadeInSection>
      <section className="section-padding section-bg">
        <div className="container mx-auto text-center max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">How We Work</p>
          <h2 className="text-3xl font-bold mb-6">Operating Philosophy</h2>
          <p className="text-xl font-heading text-heading italic">
            "Clear Structure. Clear Communication. Sustainable Compliance."
          </p>
        </div>
      </section>
    </FadeInSection>

    <FooterSection />
  </div>
);

export default AboutPage;
