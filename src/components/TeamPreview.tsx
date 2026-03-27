import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const TeamPreview = () => (
  <section className="section-padding">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <img src={aboutTeam} alt="Tanzania Advisory Partners team" className="w-full rounded-sm shadow-lg order-2 md:order-1" loading="lazy" width={1280} height={720} />
      <div className="text-center md:text-left order-1 md:order-2">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Our People</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Team</h2>
        <p className="text-sm sm:text-base text-body leading-relaxed mb-6 md:mb-8">
          We operate through a focused advisory structure supported by licensed professionals including legal experts and regulatory specialists.
        </p>
        <Link
          to="/team"
          className="group inline-flex items-center gap-2 border-2 border-primary text-primary px-6 sm:px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 rounded-sm"
        >
          <Users className="h-4 w-4" />
          Meet Our Team
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </section>
);

export default TeamPreview;
