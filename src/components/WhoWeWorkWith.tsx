import { Link } from "react-router-dom";
import { Briefcase, Building, Store, Heart, Users } from "lucide-react";

const clients = [
  { icon: Briefcase, title: "Foreign Investors", desc: "Individuals and entities seeking market entry into Tanzania." },
  { icon: Building, title: "International Companies", desc: "Corporations establishing or expanding operations in Tanzania." },
  { icon: Store, title: "SMEs", desc: "Small and medium enterprises navigating local regulations." },
  { icon: Heart, title: "NGOs & Institutions", desc: "Non-profits and international organizations setting up in Tanzania." },
  { icon: Users, title: "Expatriates & Families", desc: "Individuals and families relocating to Tanzania." },
];

const WhoWeWorkWith = () => (
  <section className="section-padding section-bg">
    <div className="container mx-auto text-center mb-16">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">Our Clients</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">Who We Work With</h2>
    </div>
    <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {clients.map((c, i) => (
        <div key={i} className="bg-background p-8 rounded-sm text-center border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300">
          <c.icon className="h-10 w-10 mx-auto mb-4 text-primary stroke-[1.5]" />
          <h3 className="text-base font-semibold mb-2">{c.title}</h3>
          <p className="text-xs text-body leading-relaxed">{c.desc}</p>
        </div>
      ))}
    </div>
    <div className="container mx-auto text-center mt-10">
      <Link
        to="/clients"
        className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all rounded-sm"
      >
        Learn More
      </Link>
    </div>
  </section>
);

export default WhoWeWorkWith;
