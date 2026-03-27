import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Link } from "react-router-dom";
import { Briefcase, Building, Store, Heart, Users } from "lucide-react";

const clientTypes = [
  {
    icon: Briefcase, title: "Foreign Investors",
    desc: "Individual and institutional investors seeking structured market entry into Tanzania.",
    useCases: ["Market entry advisory", "Regulatory compliance", "Investment structuring", "Property due diligence"],
  },
  {
    icon: Building, title: "International Companies",
    desc: "Multinational corporations establishing or expanding operations in Tanzania.",
    useCases: ["Business registration", "Licensing coordination", "Staff immigration", "Corporate compliance"],
  },
  {
    icon: Store, title: "SMEs",
    desc: "Small and medium enterprises looking to navigate Tanzanian regulatory requirements.",
    useCases: ["Business setup", "Import/export compliance", "Local partner checks", "Permit applications"],
  },
  {
    icon: Heart, title: "NGOs & Institutions",
    desc: "Non-governmental organisations and international institutions setting up in Tanzania.",
    useCases: ["NGO registration", "Staff permits", "Regulatory coordination", "Compliance advisory"],
  },
  {
    icon: Users, title: "Expatriates & Families",
    desc: "Individuals and families relocating to Tanzania for work or personal reasons.",
    useCases: ["Residence permits", "Settlement support", "School identification", "Housing assistance"],
  },
];

const ClientsPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="bg-primary py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold !text-primary-foreground mb-4">Who We Work With</h1>
        <p className="!text-primary-foreground/80 max-w-xl mx-auto">We serve a diverse range of international stakeholders entering or operating in the Tanzanian market.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto space-y-10">
        {clientTypes.map((c, i) => (
          <div key={i} className="grid md:grid-cols-3 gap-8 p-8 rounded-sm border border-border bg-background">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <c.icon className="h-8 w-8 text-primary stroke-[1.5]" />
                <h2 className="text-xl font-bold">{c.title}</h2>
              </div>
              <p className="text-body leading-relaxed">{c.desc}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3 text-heading">Common Use Cases</h4>
              <ul className="space-y-2">
                {c.useCases.map((u, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-body">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-primary section-padding text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold !text-primary-foreground mb-6">See how we can support your goals</h2>
        <Link
          to="/contact"
          className="inline-block bg-primary-foreground text-primary px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:brightness-95 transition-all rounded-sm"
        >
          Contact Us
        </Link>
      </div>
    </section>

    <FooterSection />
  </div>
);

export default ClientsPage;
