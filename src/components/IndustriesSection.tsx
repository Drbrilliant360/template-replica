import { ShoppingCart, Home, Truck, Building2, Heart } from "lucide-react";

const industries = [
  { icon: ShoppingCart, title: "Trade & Commerce" },
  { icon: Home, title: "Real Estate" },
  { icon: Truck, title: "Logistics & Import/Export" },
  { icon: Building2, title: "Corporate Services" },
  { icon: Heart, title: "Non-Profit Sector" },
];

const IndustriesSection = () => (
  <section className="section-padding">
    <div className="container mx-auto text-center mb-16">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">Sectors</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">Industries We Serve</h2>
    </div>
    <div className="container mx-auto flex flex-wrap justify-center gap-6">
      {industries.map((ind, i) => (
        <div key={i} className="flex items-center gap-3 bg-section-bg px-6 py-4 rounded-sm border border-border">
          <ind.icon className="h-6 w-6 text-primary stroke-[1.5]" />
          <span className="text-sm font-semibold text-heading">{ind.title}</span>
        </div>
      ))}
    </div>
  </section>
);

export default IndustriesSection;
