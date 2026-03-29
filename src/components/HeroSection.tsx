import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck } from "lucide-react";
import heroImage from "@/assets/hero-tanzania.jpg";

const HeroSection = () => (
  <section className="relative min-h-[65vh] sm:min-h-[75vh] md:min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}>
    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 md:to-transparent" />
    <div className="container mx-auto relative z-10 px-4 sm:px-6">
      <div className="max-w-2xl">
        <p className="section-label !text-secondary/90 mb-4 md:mb-5">Tanzania Advisory Partners</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] !text-primary-foreground mb-5 md:mb-7">
          Clarity in Regulation.
          <br />
          <span className="text-secondary">Confidence</span> in Market Entry.
        </h1>
        <p className="text-[15px] sm:text-base md:text-lg !text-primary-foreground/75 mb-8 md:mb-10 max-w-lg leading-relaxed">
          Structured advisory and coordination services for investors, businesses, and expatriates operating in Tanzania.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            to="/services"
            className="group inline-flex items-center justify-center gap-2.5 bg-secondary text-secondary-foreground px-7 sm:px-9 py-3.5 sm:py-4 text-[13px] font-semibold tracking-[0.15em] uppercase hover:brightness-110 hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300 rounded"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2.5 border-2 border-primary-foreground/80 !text-primary-foreground px-7 sm:px-9 py-3.5 sm:py-4 text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300 rounded"
          >
            <CalendarCheck className="h-4 w-4" />
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
