import { useState } from "react";
import aboutImage from "@/assets/about-image.jpg";

const tabs = [
  { label: "About Us", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat." },
  { label: "Who We Are", content: "We are a team of passionate designers and developers dedicated to crafting beautiful digital experiences for brands worldwide." },
  { label: "Why Us", content: "Our unique approach combines creativity with strategy, ensuring every project delivers measurable results for our clients." },
  { label: "Our Goal", content: "We strive to push the boundaries of design and technology, creating innovative solutions that inspire and engage audiences." },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="about" className="section-padding section-bg">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-body hover:text-primary border border-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <p className="text-body leading-relaxed mb-6">{tabs[activeTab].content}</p>
          <img src={aboutImage} alt="About us" className="w-full rounded-sm" loading="lazy" width={800} height={600} />
        </div>
        <div className="space-y-6">
          <div className="bg-background p-6 rounded-sm shadow-sm">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Easy and Fast</span>
            <p className="text-sm text-body mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque.
            </p>
          </div>
          <div className="bg-background p-6 rounded-sm shadow-sm">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Fully Responsive</span>
            <p className="text-sm text-body mt-2 leading-relaxed">
              Our designs adapt seamlessly across all devices, ensuring a consistent experience for every user.
            </p>
          </div>
          <div className="bg-background p-6 rounded-sm shadow-sm">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Premium Quality</span>
            <p className="text-sm text-body mt-2 leading-relaxed">
              We deliver pixel-perfect designs with attention to every detail, ensuring top-notch quality output.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
