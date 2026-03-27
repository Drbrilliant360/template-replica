import { Link } from "react-router-dom";

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
          className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:brightness-110 transition-all rounded-sm"
        >
          Learn More About Us
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-background p-6 rounded-sm shadow-sm border border-border">
          <span className="text-3xl font-heading font-bold text-primary">10+</span>
          <p className="text-sm text-body mt-2">Service Areas</p>
        </div>
        <div className="bg-background p-6 rounded-sm shadow-sm border border-border">
          <span className="text-3xl font-heading font-bold text-primary">100%</span>
          <p className="text-sm text-body mt-2">Compliance Focus</p>
        </div>
        <div className="bg-background p-6 rounded-sm shadow-sm border border-border">
          <span className="text-3xl font-heading font-bold text-primary">5+</span>
          <p className="text-sm text-body mt-2">Industry Sectors</p>
        </div>
        <div className="bg-background p-6 rounded-sm shadow-sm border border-border">
          <span className="text-3xl font-heading font-bold text-primary">24/7</span>
          <p className="text-sm text-body mt-2">Client Support</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
