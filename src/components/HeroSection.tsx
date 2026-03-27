import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck } from "lucide-react";
import heroImage from "@/assets/hero-tanzania.jpg";

const HeroSection = () => (
  <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}>
    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/40 md:to-transparent" />
    <div className="container mx-auto relative z-10 px-4">
      <div className="max-w-2xl">
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3 md:mb-4">Tanzania Advisory Partners</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight !text-primary-foreground mb-4 md:mb-6">
          Clarity in Regulation.
          <br />
          Confidence in Market Entry.
        </h1>
        <p className="text-sm sm:text-base md:text-lg !text-primary-foreground/80 mb-6 md:mb-8 max-w-xl leading-relaxed">
          Structured advisory and coordination services for investors, businesses, and expatriates operating in Tanzania.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            to="/services"
            className="group inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold tracking-wider uppercase hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 rounded-sm"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 border-2 border-primary-foreground !text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold tracking-wider uppercase hover:bg-primary-foreground/10 hover:shadow-lg transition-all duration-300 rounded-sm"
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
