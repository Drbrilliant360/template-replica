import { Link } from "react-router-dom";

const TeamPreview = () => (
  <section className="section-padding">
    <div className="container mx-auto text-center max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">Our People</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
      <p className="text-body leading-relaxed mb-8">
        We operate through a focused advisory structure supported by licensed professionals including legal experts and regulatory specialists.
      </p>
      <Link
        to="/team"
        className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all rounded-sm"
      >
        Meet Our Team
      </Link>
    </div>
  </section>
);

export default TeamPreview;
