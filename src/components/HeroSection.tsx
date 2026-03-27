import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-tanzania.jpg";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}>
    <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    <div className="container mx-auto relative z-10">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-4">Tanzania Advisory Partners</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight !text-primary-foreground mb-6">
          Clarity in Regulation.
          <br />
          Confidence in Market Entry.
        </h1>
        <p className="text-base md:text-lg !text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
          Structured advisory and coordination services for investors, businesses, and expatriates operating in Tanzania.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/services"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:brightness-110 transition-all rounded-sm"
          >
            Get Started
          </Link>
          <Link
            to="/contact"
            className="inline-block border-2 border-primary-foreground !text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-primary-foreground/10 transition-all rounded-sm"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
