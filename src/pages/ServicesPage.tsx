import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Link } from "react-router-dom";
import { Shield, Building2, FileCheck, Globe, Home, Package, AlertTriangle, Users, Plane, Crown, Star } from "lucide-react";

const services = [
  {
    icon: Shield, title: "Immigration & Permit Advisory",
    desc: "Comprehensive guidance on visa applications, work permits, residence permits, and ongoing immigration compliance for foreign nationals.",
    points: ["Visa guidance", "Work permits", "Residence permits", "Compliance monitoring"],
  },
  {
    icon: Building2, title: "Corporate & Business Registration",
    desc: "End-to-end support for business setup in Tanzania, including company registration, structure guidance, and regulatory compliance.",
    points: ["Business setup", "Structure guidance", "Regulatory compliance"],
  },
  {
    icon: FileCheck, title: "Licensing & Regulatory Coordination",
    desc: "Support with obtaining required licenses, preparing documentation, and coordinating with relevant government authorities.",
    points: ["License applications", "Documentation preparation", "Authority coordination"],
  },
  {
    icon: Globe, title: "Investment Entry & Market Orientation",
    desc: "Strategic advisory for foreign investors entering the Tanzanian market, including risk awareness and regulatory briefings.",
    points: ["Market insights", "Risk awareness", "Regulatory briefing"],
  },
  {
    icon: Home, title: "Property Due Diligence",
    desc: "Thorough property and land verification services including title checks, land compliance reviews, and legal coordination.",
    points: ["Title checks", "Land compliance", "Legal coordination"],
  },
  {
    icon: Package, title: "Customs & Import Support",
    desc: "Coordination of import processes including documentation, clearance monitoring, and regulatory compliance.",
    points: ["Import coordination", "Clearance monitoring", "Compliance support"],
  },
  {
    icon: AlertTriangle, title: "Corporate Risk Coordination",
    desc: "Advisory on legal structuring and compliance audits to mitigate corporate risk in Tanzanian operations.",
    points: ["Legal structuring", "Compliance audits", "Risk mitigation"],
  },
  {
    icon: Users, title: "Local Partner Due Diligence",
    desc: "Background checks and ownership verification for potential local business partners and counterparties.",
    points: ["Background checks", "Ownership verification", "Partner assessment"],
  },
  {
    icon: Plane, title: "Arrival & Settlement Advisory",
    desc: "Comprehensive relocation support for expatriates and families, including housing, schooling, and compliance.",
    points: ["Relocation support", "Housing assistance", "School identification", "Compliance setup"],
  },
  {
    icon: Star, title: "Premium / VIP Services",
    desc: "Executive-level services including airport fast-track assistance and VIP arrival coordination.",
    points: ["Airport fast-track", "Executive arrival coordination"],
  },
  {
    icon: Crown, title: "Retainer Services",
    desc: "Ongoing advisory support through individual and corporate retainer packages for sustained operations.",
    points: ["Individual retainers", "Corporate retainers", "Ongoing advisory"],
  },
];

const ServicesPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="bg-primary py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold !text-primary-foreground mb-4">Our Services</h1>
        <p className="!text-primary-foreground/80 max-w-xl mx-auto">Comprehensive advisory and coordination services for foreign investors and organisations in Tanzania.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto space-y-12">
        {services.map((s, i) => (
          <div key={i} className={`grid md:grid-cols-2 gap-8 items-start p-8 rounded-sm border border-border ${i % 2 === 0 ? "bg-background" : "bg-section-bg"}`}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <s.icon className="h-8 w-8 text-primary stroke-[1.5]" />
                <h2 className="text-xl font-bold">{s.title}</h2>
              </div>
              <p className="text-body leading-relaxed">{s.desc}</p>
            </div>
            <div>
              <ul className="space-y-2 mb-6">
                {s.points.map((p, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-body">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block bg-primary text-primary-foreground px-6 py-2.5 text-xs font-semibold tracking-wider uppercase hover:brightness-110 transition-all rounded-sm"
              >
                Request Advisory Support
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    <FooterSection />
  </div>
);

export default ServicesPage;
