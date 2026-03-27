import { CheckCircle } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const reasons = [
  { title: "Structured Local Guidance", desc: "Step-by-step advisory based on current regulatory frameworks." },
  { title: "Independent Advisory Perspective", desc: "Objective counsel without conflicts of interest." },
  { title: "Professional Coordination", desc: "We coordinate across government bodies on your behalf." },
  { title: "Foreign Investor Focus", desc: "Purpose-built services for international stakeholders." },
  { title: "Transparent Processes", desc: "Clear communication, written engagements, and no hidden fees." },
];

const WhyChooseUs = () => (
  <section className="relative section-padding overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${servicesBg})` }} />
    <div className="absolute inset-0 bg-primary/90" />
    <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="text-center md:text-left">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Our Advantage</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold !text-primary-foreground mb-4 md:mb-6">Why Clients Choose Us</h2>
        <p className="text-sm sm:text-base !text-primary-foreground/70 leading-relaxed">
          We combine deep local knowledge with professional standards to deliver advisory services that foreign investors can rely on.
        </p>
      </div>
      <div className="space-y-4 sm:space-y-5">
        {reasons.map((r, i) => (
          <div key={i} className="flex gap-3 sm:gap-4 items-start">
            <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm sm:text-base font-semibold mb-1 !text-primary-foreground">{r.title}</h3>
              <p className="text-xs sm:text-sm !text-primary-foreground/60 leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
