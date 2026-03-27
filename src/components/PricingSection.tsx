import { Check } from "lucide-react";

const plans = [
  { price: 29, name: "Starter", features: ["1 theme included", "1 year updates & support", "1 premium extension", "1 grid blog", "10% off future purchases"], highlighted: false },
  { price: 59, name: "Professional", features: ["5 themes included", "Lifetime updates & support", "5 premium extensions", "Unlimited blogs", "20% off future purchases"], highlighted: true },
  { price: 99, name: "Enterprise", features: ["Unlimited themes", "Priority support 24/7", "All premium extensions", "Unlimited everything", "30% off future purchases"], highlighted: false },
];

const PricingSection = () => (
  <section id="prices" className="section-padding section-bg">
    <div className="container mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Pick Your Plan</h2>
    </div>
    <div className="container mx-auto grid md:grid-cols-3 gap-8 max-w-5xl">
      {plans.map((plan, i) => (
        <div
          key={i}
          className={`p-8 rounded-sm text-center transition-shadow duration-300 ${
            plan.highlighted
              ? "bg-foreground shadow-xl scale-105"
              : "bg-background shadow-md hover:shadow-lg"
          }`}
        >
          <div className={`text-4xl font-heading font-bold mb-1 ${plan.highlighted ? "text-primary" : "text-heading"}`}>
            ${plan.price}
          </div>
          <h4 className={`text-xl font-heading font-semibold mb-6 ${plan.highlighted ? "!text-primary-foreground" : ""}`}>
            {plan.name}
          </h4>
          <ul className="space-y-3 mb-8">
            {plan.features.map((f, j) => (
              <li key={j} className={`flex items-center gap-2 text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-body"}`}>
                <Check className="h-4 w-4 text-primary flex-shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className={`inline-block px-8 py-3 text-sm font-semibold tracking-wider uppercase transition-all ${
              plan.highlighted
                ? "bg-primary text-primary-foreground hover:brightness-110"
                : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            GET STARTED
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default PricingSection;
