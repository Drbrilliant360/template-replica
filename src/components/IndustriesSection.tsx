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
    <div className="container mx-auto px-4 text-center mb-10 md:mb-16">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Sectors</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Industries We Serve</h2>
    </div>
    <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
      {industries.map((ind, i) => (
        <div key={i} className={`group flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-section-bg px-4 sm:px-6 py-4 rounded-sm border border-border hover:border-secondary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default text-center sm:text-left ${i === industries.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}>
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-all duration-300">
            <ind.icon className="h-5 w-5 text-primary group-hover:text-secondary-foreground stroke-[1.5] transition-colors duration-300" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-heading">{ind.title}</span>
        </div>
      ))}
    </div>
  </section>
);

export default IndustriesSection;
