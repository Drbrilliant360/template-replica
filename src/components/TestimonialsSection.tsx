import { useState } from "react";
import { Quote } from "lucide-react";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const testimonials = [
  { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", author: "Sarah Chen", img: team2 },
  { text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", author: "Alex Turner", img: team3 },
  { text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.", author: "Emily Davis", img: team4 },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="flex justify-center gap-4 mb-10">
          {testimonials.map((t, i) => (
            <button key={i} onClick={() => setActive(i)} className={`rounded-full overflow-hidden border-2 transition-all ${active === i ? "border-primary scale-110" : "border-border"}`}>
              <img src={t.img} alt={t.author} className="w-14 h-14 object-cover" />
            </button>
          ))}
        </div>
        <Quote className="h-8 w-8 mx-auto mb-6 text-primary" />
        <p className="text-lg text-body leading-relaxed mb-6 italic">
          "{testimonials[active].text}"
        </p>
        <p className="font-heading font-semibold text-heading">{testimonials[active].author}</p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
