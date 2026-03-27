import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Link } from "react-router-dom";

const TeamPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="bg-primary py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold !text-primary-foreground mb-4">Our Team</h1>
        <p className="!text-primary-foreground/80 max-w-xl mx-auto">A focused advisory structure supported by licensed professionals.</p>
      </div>
    </section>

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
          className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:brightness-110 transition-all rounded-sm"
        >
          Get In Touch
        </Link>
      </div>
    </section>

    <FooterSection />
  </div>
);

export default TeamPage;
