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
    <div className="container mx-auto px-4 sm:px-6 text-center mb-12 md:mb-16">
      <p className="section-label">Sectors</p>
      <h2 className="section-title">Industries We Serve</h2>
    </div>
    <div className="container mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
      {industries.map((ind, i) => (
        <div key={i} className={`group flex flex-col items-center gap-3 bg-section-bg px-5 sm:px-6 py-6 sm:py-8 rounded border border-border hover:border-secondary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default text-center ${i === industries.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}>
          <div className="w-12 h-12 rounded-full bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-all duration-300">
            <ind.icon className="h-5 w-5 text-primary group-hover:text-secondary-foreground stroke-[1.5] transition-colors duration-300" />
          </div>
          <span className="text-[13px] sm:text-sm font-semibold text-heading font-body">{ind.title}</span>
        </div>
      ))}
    </div>
  </section>
);

export default IndustriesSection;
