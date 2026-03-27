import { useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const categories = ["All", "Branding", "Web", "Package", "Video"];

const projects = [
  { img: portfolio1, category: "Branding", title: "Brand Identity" },
  { img: portfolio2, category: "Web", title: "Web Redesign" },
  { img: portfolio3, category: "Package", title: "Premium Packaging" },
  { img: portfolio4, category: "Video", title: "Video Production" },
  { img: portfolio2, category: "Web", title: "App Design" },
  { img: portfolio1, category: "Branding", title: "Logo Design" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto text-center mb-12">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">LATEST PROJECTS</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Latest Projects</h2>
        <p className="text-body">Made for Our Top Clients</p>
      </div>
      <div className="container mx-auto flex justify-center gap-6 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-sm font-semibold transition-colors ${
              active === cat ? "text-primary" : "text-body hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <div key={i} className="group relative overflow-hidden rounded-sm">
            <img
              src={p.img}
              alt={p.title}
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <span className="text-primary-foreground text-xs tracking-wider uppercase mb-1">{p.category}</span>
              <h4 className="text-primary-foreground text-xl font-heading font-bold">{p.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
