import { Lightbulb, Trophy } from "lucide-react";

const services = [
  { icon: Lightbulb, title: "Branding Design", desc: "Quisque in fermentum velit. Vivamus pharetra, quam ut tincidunt interdum, leo elit ornare." },
  { icon: Trophy, title: "Event Design", desc: "Quisque in fermentum velit. Vivamus pharetra, quam ut tincidunt interdum, leo elit ornare." },
];

const ServicesSection = () => (
  <section id="service" className="section-padding">
    <div className="container mx-auto">
      <div className="bg-background shadow-xl -mt-32 relative z-20 rounded-sm">
        <div className="grid md:grid-cols-3 gap-0">
          <div className="p-10 md:p-14 flex items-center">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              We help to
              <br />
              grow creativity that
              <br />
              today break rules.
            </h2>
          </div>
          {services.map((s, i) => (
            <div key={i} className="p-10 md:p-14 border-l border-border text-center">
              <s.icon className="h-12 w-12 mx-auto mb-5 text-primary stroke-1" />
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
