import { Monitor, Palette, Code, Rocket, Settings, Zap } from "lucide-react";

const features = [
  { icon: Monitor, title: "Modern & flexible", desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with it." },
  { icon: Palette, title: "Creative Design", desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with it." },
  { icon: Code, title: "Clean Code", desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with it." },
  { icon: Rocket, title: "Fast Performance", desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with it." },
  { icon: Settings, title: "Easy Customization", desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with it." },
  { icon: Zap, title: "Quick Setup", desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with it." },
];

const FeaturesSection = () => (
  <section className="section-padding section-bg">
    <div className="container mx-auto text-center mb-16">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">BRANDING LOGO COMPANY</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">We Craft Experiences</h2>
      <p className="text-body">With little help from the best</p>
    </div>
    <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <div key={i} className="bg-background p-8 rounded-sm text-center group hover:shadow-lg transition-shadow duration-300">
          <f.icon className="h-10 w-10 mx-auto mb-5 text-primary stroke-1 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
          <p className="text-sm leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
