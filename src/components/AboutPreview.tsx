import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutHandshake from "@/assets/about-handshake.jpg";
import OptimizedImage from "@/components/OptimizedImage";

const AboutPreview = () => (
  <section className="section-padding section-bg">
    <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
      <div className="md:py-4">
        <p className="section-label">About the Firm</p>
        <h2 className="section-title">Who We Are</h2>
        <p className="text-[15px] sm:text-base text-body leading-relaxed mb-4">
          Tanzania Advisory Partners is a boutique advisory firm providing regulatory, immigration, and corporate coordination support for foreign investors and organizations operating in Tanzania.
        </p>
        <p className="text-[15px] sm:text-base text-body leading-relaxed mb-7">
          We bridge the gap between international business standards and local regulatory requirements, offering structured guidance every step of the way.
        </p>
        <Link
          to="/about"
          className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 sm:px-9 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 rounded"
        >
          Learn More About Us
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="space-y-5">
        <OptimizedImage src={aboutHandshake} alt="Business partnership in Tanzania" className="w-full h-56 md:h-64 object-cover rounded shadow-lg" width={640} height={360} />
        <div className="grid grid-cols-2 gap-4">
          {[
            { val: "10+", label: "Service Areas" },
            { val: "100%", label: "Compliance Focus" },
            { val: "5+", label: "Industry Sectors" },
            { val: "24/7", label: "Client Support" },
          ].map((s, i) => (
            <div key={i} className="bg-background p-4 sm:p-5 rounded shadow-sm border border-border hover:shadow-md hover:border-secondary/40 transition-all duration-300">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-secondary">{s.val}</span>
              <p className="text-[11px] sm:text-xs text-body mt-1.5 tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
