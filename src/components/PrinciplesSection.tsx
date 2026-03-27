import { Shield, FileText, Banknote, PenLine, Eye } from "lucide-react";
import principlesBg from "@/assets/principles-bg.jpg";

const principles = [
  { icon: Shield, title: "Compliance First", desc: "All advisory is grounded in current Tanzanian regulatory frameworks." },
  { icon: FileText, title: "No Guaranteed Outcomes", desc: "We provide guidance — outcomes depend on regulatory authorities." },
  { icon: Banknote, title: "Direct Government Payments", desc: "All statutory fees are paid directly to government authorities." },
  { icon: PenLine, title: "Written Engagements", desc: "Every engagement is documented with clear terms and scope." },
  { icon: Eye, title: "Transparency at Every Stage", desc: "Clients are informed at every step of the process." },
];

const PrinciplesSection = () => (
  <section className="relative section-padding overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${principlesBg})` }} />
    <div className="absolute inset-0 bg-foreground/85" />
    <div className="container mx-auto relative z-10 text-center mb-16">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Trust & Integrity</p>
      <h2 className="text-3xl md:text-4xl font-bold !text-primary-foreground mb-3">Our Operating Principles</h2>
    </div>
    <div className="container mx-auto relative z-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {principles.map((p, i) => (
        <div key={i} className="bg-background/10 backdrop-blur-sm p-6 rounded-sm text-center border border-primary-foreground/20 group hover:bg-background/20 hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300 cursor-default">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
            <p.icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground stroke-[1.5] transition-colors duration-300" />
          </div>
          <h3 className="text-sm font-semibold mb-2 !text-primary-foreground">{p.title}</h3>
          <p className="text-xs !text-primary-foreground/60 leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PrinciplesSection;
