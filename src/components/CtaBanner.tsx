import { Link } from "react-router-dom";
import { Mail, CalendarCheck } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";

const CtaBanner = () => (
  <section className="relative section-padding text-center overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${ctaBg})` }} />
    <div className="absolute inset-0 bg-primary/85" />
    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold !text-primary-foreground leading-tight mb-5 md:mb-7">
        Ready to Enter the Tanzanian Market
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>with <span className="text-secondary">Confidence?</span>
      </h2>
      <p className="text-[15px] sm:text-base !text-primary-foreground/70 mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
        Get structured advisory support for your regulatory, immigration, and business needs in Tanzania.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <Link
          to="/contact"
          className="group inline-flex items-center justify-center gap-2.5 bg-secondary text-secondary-foreground px-7 sm:px-9 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase hover:brightness-110 hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300 rounded"
        >
          <Mail className="h-4 w-4" />
          Contact Us
        </Link>
        <Link
          to="/contact"
          className="group inline-flex items-center justify-center gap-2.5 border-2 border-primary-foreground/80 !text-primary-foreground px-7 sm:px-9 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300 rounded"
        >
          <CalendarCheck className="h-4 w-4" />
          Schedule Consultation
        </Link>
      </div>
    </div>
  </section>
);

export default CtaBanner;
