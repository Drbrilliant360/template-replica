import { CheckCircle } from "lucide-react";

const reasons = [
  { title: "Structured Local Guidance", desc: "Step-by-step advisory based on current regulatory frameworks." },
  { title: "Independent Advisory Perspective", desc: "Objective counsel without conflicts of interest." },
  { title: "Professional Coordination", desc: "We coordinate across government bodies on your behalf." },
  { title: "Foreign Investor Focus", desc: "Purpose-built services for international stakeholders." },
  { title: "Transparent Processes", desc: "Clear communication, written engagements, and no hidden fees." },
];

const WhyChooseUs = () => (
  <section className="section-padding">
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Our Advantage</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Clients Choose Us</h2>
        <p className="text-body leading-relaxed">
          We combine deep local knowledge with professional standards to deliver advisory services that foreign investors can rely on.
        </p>
      </div>
      <div className="space-y-5">
        {reasons.map((r, i) => (
          <div key={i} className="flex gap-4 items-start">
            <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-semibold mb-1">{r.title}</h3>
              <p className="text-sm text-body leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
