import { Link } from "react-router-dom";
import { Shield, Building2, FileCheck, Globe, Home, Package, AlertTriangle, Users, Plane, Crown, ArrowRight } from "lucide-react";

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
    <div className="container mx-auto px-4 sm:px-6 text-center mb-12 md:mb-16">
      <p className="section-label">What We Do</p>
      <h2 className="section-title">Our Expertise</h2>
      <p className="section-desc">Comprehensive advisory services tailored for foreign investors and organisations operating in Tanzania.</p>
    </div>
    <div className="container mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {services.map((s, i) => (
        <div key={i} className="bg-background border border-border p-5 sm:p-7 rounded text-center group hover:shadow-xl hover:border-secondary/30 hover:-translate-y-1 transition-all duration-300 cursor-default">
          <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-primary/8 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
            <s.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-secondary-foreground stroke-[1.5] transition-colors duration-300" />
          </div>
          <h3 className="text-[13px] sm:text-sm font-semibold mb-2 leading-snug font-body">{s.title}</h3>
          <p className="text-[11px] sm:text-xs leading-relaxed text-body hidden sm:block">{s.desc}</p>
        </div>
      ))}
    </div>
    <div className="container mx-auto px-4 text-center mt-10 md:mt-14">
      <Link
        to="/services"
        className="group inline-flex items-center gap-2.5 bg-secondary text-secondary-foreground px-7 sm:px-9 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase hover:brightness-110 hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 rounded"
      >
        Explore All Services
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  </section>
);

export default ServicesSection;
