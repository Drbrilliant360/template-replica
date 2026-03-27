import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => (
  <section className="section-padding section-bg">
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">About the Firm</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
        <p className="text-body leading-relaxed mb-4">
          Tanzania Advisory Partners is a boutique advisory firm providing regulatory, immigration, and corporate coordination support for foreign investors and organizations operating in Tanzania.
        </p>
        <p className="text-body leading-relaxed mb-8">
          We bridge the gap between international business standards and local regulatory requirements, offering structured guidance every step of the way.
        </p>
        <Link
          to="/about"
          className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:brightness-110 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 rounded-sm"
        >
          Learn More About Us
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { val: "10+", label: "Service Areas" },
          { val: "100%", label: "Compliance Focus" },
          { val: "5+", label: "Industry Sectors" },
          { val: "24/7", label: "Client Support" },
        ].map((s, i) => (
          <div key={i} className="bg-background p-6 rounded-sm shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <span className="text-3xl font-heading font-bold text-primary">{s.val}</span>
            <p className="text-sm text-body mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutPreview;
