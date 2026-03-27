import heroImage from "@/assets/hero-person.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${heroImage})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
    <div className="container mx-auto relative z-10">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight !text-primary-foreground mb-6">
          Better Design Experiences
          <br />
          On Any Devices
        </h1>
        <a
          href="#projects"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:brightness-110 transition-all"
        >
          GET STARTED
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
