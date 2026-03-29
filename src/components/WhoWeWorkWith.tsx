import { Link } from "react-router-dom";
import { Briefcase, Building, Store, Heart, Users, ArrowRight } from "lucide-react";
import clientsBg from "@/assets/clients-bg.jpg";

const clients = [
  { icon: Briefcase, title: "Foreign Investors", desc: "Individuals and entities seeking market entry into Tanzania." },
  { icon: Building, title: "International Companies", desc: "Corporations establishing or expanding operations in Tanzania." },
  { icon: Store, title: "SMEs", desc: "Small and medium enterprises navigating local regulations." },
  { icon: Heart, title: "NGOs & Institutions", desc: "Non-profits and international organizations setting up in Tanzania." },
  { icon: Users, title: "Expatriates & Families", desc: "Individuals and families relocating to Tanzania." },
];

const WhoWeWorkWith = () => (
  <section className="relative section-padding overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${clientsBg})` }} />
    <div className="absolute inset-0 bg-primary/90" />
    <div className="container mx-auto px-4 sm:px-6 text-center mb-12 md:mb-16 relative z-10">
      <p className="section-label">Our Clients</p>
      <h2 className="section-title !text-primary-foreground">Who We Work With</h2>
    </div>
    <div className="container mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 relative z-10">
      {clients.map((c, i) => (
        <div key={i} className={`bg-background/10 backdrop-blur-sm p-6 sm:p-8 rounded text-center border border-primary-foreground/15 hover:bg-background/20 hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300 group cursor-default ${i === clients.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}>
          <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
            <c.icon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary group-hover:text-secondary-foreground stroke-[1.5] transition-colors duration-300" />
          </div>
          <h3 className="text-[13px] sm:text-base font-semibold mb-2 !text-primary-foreground font-body">{c.title}</h3>
          <p className="text-[11px] sm:text-xs !text-primary-foreground/60 leading-relaxed hidden sm:block">{c.desc}</p>
        </div>
      ))}
    </div>
    <div className="container mx-auto px-4 text-center mt-10 md:mt-14 relative z-10">
      <Link
        to="/clients"
        className="group inline-flex items-center gap-2.5 border-2 border-primary-foreground/80 !text-primary-foreground px-7 sm:px-9 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300 rounded"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  </section>
);

export default WhoWeWorkWith;
