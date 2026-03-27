import { Link } from "react-router-dom";
import { Shield, Building2, FileCheck, Globe, Home, Package, AlertTriangle, Users, Plane, Crown } from "lucide-react";

const services = [
  { icon: Shield, title: "Immigration & Permit Advisory", desc: "Visa guidance, work permits, residence permits, and compliance support." },
  { icon: Building2, title: "Corporate & Business Registration", desc: "Business setup, structure guidance, and regulatory compliance." },
  { icon: FileCheck, title: "Licensing & Regulatory Coordination", desc: "License applications, documentation, and authority coordination." },
  { icon: Globe, title: "Investment Entry & Market Orientation", desc: "Market insights, risk awareness, and regulatory briefing." },
  { icon: Home, title: "Property Due Diligence", desc: "Title checks, land compliance, and legal coordination." },
  { icon: Package, title: "Customs & Import Coordination", desc: "Import coordination, clearance monitoring, and compliance." },
  { icon: AlertTriangle, title: "Corporate Risk Coordination", desc: "Legal structuring and compliance audits." },
  { icon: Users, title: "Local Partner Due Diligence", desc: "Background checks and ownership verification." },
  { icon: Plane, title: "Arrival & Settlement Advisory", desc: "Relocation support, housing, schooling, and compliance." },
  { icon: Crown, title: "Retainer Advisory Services", desc: "Individual and corporate retainer packages." },
];

const ServicesSection = () => (
  <section className="section-padding">
    <div className="container mx-auto text-center mb-16">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">What We Do</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Expertise</h2>
      <p className="text-body max-w-xl mx-auto">Comprehensive advisory services tailored for foreign investors and organisations operating in Tanzania.</p>
    </div>
    <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {services.map((s, i) => (
        <div key={i} className="bg-background border border-border p-6 rounded-sm text-center group hover:shadow-lg hover:border-primary/30 transition-all duration-300">
          <s.icon className="h-9 w-9 mx-auto mb-4 text-primary stroke-[1.5] group-hover:scale-110 transition-transform" />
          <h3 className="text-sm font-semibold mb-2 leading-tight">{s.title}</h3>
          <p className="text-xs leading-relaxed text-body">{s.desc}</p>
        </div>
      ))}
    </div>
    <div className="container mx-auto text-center mt-10">
      <Link
        to="/services"
        className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:brightness-110 transition-all rounded-sm"
      >
        Explore All Services
      </Link>
    </div>
  </section>
);

export default ServicesSection;
