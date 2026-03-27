import { Link } from "react-router-dom";
import { Briefcase, Building, Store, Heart, Users, ArrowRight } from "lucide-react";

const clients = [
  { icon: Briefcase, title: "Foreign Investors", desc: "Individuals and entities seeking market entry into Tanzania." },
  { icon: Building, title: "International Companies", desc: "Corporations establishing or expanding operations in Tanzania." },
  { icon: Store, title: "SMEs", desc: "Small and medium enterprises navigating local regulations." },
  { icon: Heart, title: "NGOs & Institutions", desc: "Non-profits and international organizations setting up in Tanzania." },
  { icon: Users, title: "Expatriates & Families", desc: "Individuals and families relocating to Tanzania." },
];

const WhoWeWorkWith = () => (
  <section className="section-padding section-bg">
    <div className="container mx-auto px-4 text-center mb-10 md:mb-16">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Our Clients</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Who We Work With</h2>
    </div>
    <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
      {clients.map((c, i) => (
        <div key={i} className={`bg-background p-5 sm:p-8 rounded-sm text-center border border-border hover:shadow-xl hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300 group cursor-default ${i === clients.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}>
          <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
            <c.icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary group-hover:text-secondary-foreground stroke-[1.5] transition-colors duration-300" />
          </div>
          <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">{c.title}</h3>
          <p className="text-[10px] sm:text-xs text-body leading-relaxed hidden sm:block">{c.desc}</p>
        </div>
      ))}
    </div>
    <div className="container mx-auto px-4 text-center mt-8 md:mt-10">
      <Link
        to="/clients"
        className="group inline-flex items-center gap-2 border-2 border-primary text-primary px-6 sm:px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 rounded-sm"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  </section>
);

export default WhoWeWorkWith;
