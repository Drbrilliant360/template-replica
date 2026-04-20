import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import FadeInSection from "@/components/FadeInSection";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TeamPage = () => (
  <div className="min-h-screen">
    <SEOHead
      title="Our Team — Licensed Advisors in Tanzania"
      description="Meet the advisory team at Tanzania Advisory Partners — licensed legal, regulatory, immigration and compliance professionals serving clients across Tanzania."
      path="/team"
    />
    <JsonLd id="breadcrumb-team" data={breadcrumbSchema([{ name: "Home", url: "https://www.tanzaniaadvisorypartners.co.tz/" }, { name: "Team", url: "https://www.tanzaniaadvisorypartners.co.tz/team" }])} />
    <Navbar />
    <section className="bg-primary py-20 text-center">
      <div className="container mx-auto">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Our People</p>
        <h1 className="text-4xl md:text-5xl font-bold !text-primary-foreground mb-4">Our Team</h1>
        <p className="!text-primary-foreground/70 max-w-xl mx-auto">A focused advisory structure supported by licensed professionals.</p>
      </div>
    </section>

    <FadeInSection>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Advisory Structure</h2>
          <p className="text-body leading-relaxed mb-6">
            Tanzania Advisory Partners operates through a focused advisory structure supported by licensed professionals including legal experts, immigration specialists, and regulatory consultants.
          </p>
          <p className="text-body leading-relaxed mb-6">
            Our network of professionals allows us to deliver coordinated, multi-disciplinary advisory services across immigration, corporate registration, licensing, and investment entry.
          </p>
          <p className="text-body leading-relaxed mb-10">
            Each engagement is led by a dedicated advisory lead who ensures consistent communication, compliance oversight, and timely coordination with all relevant authorities.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 rounded-sm"
          >
            Get In Touch
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </FadeInSection>

    <FooterSection />
  </div>
);

export default TeamPage;
