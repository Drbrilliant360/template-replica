const CtaBanner = () => (
  <section className="bg-foreground section-padding text-center">
    <div className="container mx-auto">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4">STUNNING WEBSITES</p>
      <h2 className="text-3xl md:text-5xl font-bold !text-primary-foreground leading-tight mb-8">
        Create cool website quickly
        <br />
        for your clients.
      </h2>
      <a
        href="#contact"
        className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all"
      >
        Contact Us
      </a>
    </div>
  </section>
);

export default CtaBanner;
