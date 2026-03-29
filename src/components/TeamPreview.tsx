import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import OptimizedImage from "@/components/OptimizedImage";

const TeamPreview = () => (
  <section className="section-padding">
    <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <OptimizedImage src={aboutTeam} alt="Tanzania Advisory Partners team" className="w-full rounded shadow-lg order-2 md:order-1" width={1280} height={720} />
      <div className="text-center md:text-left order-1 md:order-2">
        <p className="section-label">Our People</p>
        <h2 className="section-title">Our Team</h2>
        <p className="text-[15px] sm:text-base text-body leading-relaxed mb-7 md:mb-9">
          We operate through a focused advisory structure supported by licensed professionals including legal experts and regulatory specialists.
        </p>
        <Link
          to="/team"
          className="group inline-flex items-center gap-2.5 border-2 border-primary text-primary px-7 sm:px-9 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 rounded"
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
