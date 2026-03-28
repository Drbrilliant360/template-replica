import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutHandshake from "@/assets/about-handshake.jpg";
import OptimizedImage from "@/components/OptimizedImage";

const AboutPreview = () => (
  <section className="section-padding section-bg">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
      <div className="md:py-4">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">About the Firm</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-5">Who We Are</h2>
        <p className="text-sm sm:text-base text-body leading-relaxed mb-3 md:mb-4">
          Tanzania Advisory Partners is a boutique advisory firm providing regulatory, immigration, and corporate coordination support for foreign investors and organizations operating in Tanzania.
        </p>
        <p className="text-sm sm:text-base text-body leading-relaxed mb-5 md:mb-6">
          We bridge the gap between international business standards and local regulatory requirements, offering structured guidance every step of the way.
        </p>
        <Link
          to="/about"
          className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:brightness-110 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 rounded-sm"
        >
          Learn More About Us
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="space-y-4">
        <OptimizedImage src={aboutHandshake} alt="Business partnership in Tanzania" className="w-full h-56 md:h-64 object-cover rounded-sm shadow-lg" width={640} height={360} />
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {[
            { val: "10+", label: "Service Areas" },
            { val: "100%", label: "Compliance Focus" },
            { val: "5+", label: "Industry Sectors" },
            { val: "24/7", label: "Client Support" },
          ].map((s, i) => (
            <div key={i} className="bg-background p-3 sm:p-5 rounded-sm shadow-sm border border-border hover:shadow-md hover:border-secondary/40 transition-all duration-300">
              <span className="text-xl sm:text-2xl font-heading font-bold text-secondary">{s.val}</span>
              <p className="text-[10px] sm:text-xs text-body mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
