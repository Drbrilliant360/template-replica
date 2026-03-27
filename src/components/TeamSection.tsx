import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const members = [
  { img: team1, name: "James Wilson", role: "CEO & Founder", email: "james@innovatik.com" },
  { img: team2, name: "Sarah Chen", role: "Creative Director", email: "sarah@innovatik.com" },
  { img: team3, name: "Alex Turner", role: "Lead Designer", email: "alex@innovatik.com" },
  { img: team4, name: "Emily Davis", role: "Marketing Head", email: "emily@innovatik.com" },
];

const TeamSection = () => (
  <section id="team" className="section-padding">
    <div className="container mx-auto text-center mb-16">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">OUR TEAM</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">See Our Best Team</h2>
      <p className="text-body max-w-lg mx-auto">Members who will offer support</p>
    </div>
    <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {members.map((m, i) => (
        <div key={i} className="text-center group">
          <div className="overflow-hidden rounded-sm mb-5">
            <img
              src={m.img}
              alt={m.name}
              className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              width={600}
              height={600}
            />
          </div>
          <h3 className="text-lg font-semibold">{m.name}</h3>
          <p className="text-sm text-primary mb-1">{m.role}</p>
          <p className="text-xs text-body mb-3">{m.email}</p>
          <div className="flex justify-center gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, j) => (
              <a key={j} href="#" className="text-body hover:text-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
