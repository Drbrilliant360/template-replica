import { Link } from "react-router-dom";

const CtaBanner = () => (
  <section className="bg-primary section-padding text-center">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold !text-primary-foreground leading-tight mb-4">
        Ready to Enter the Tanzanian Market
        <br />
        with Confidence?
      </h2>
      <p className="text-base !text-primary-foreground/80 mb-8 max-w-xl mx-auto">
        Get structured advisory support for your regulatory, immigration, and business needs in Tanzania.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/contact"
          className="inline-block bg-primary-foreground text-primary px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:brightness-95 transition-all rounded-sm"
        >
          Contact Us
        </Link>
        <Link
          to="/contact"
          className="inline-block border-2 border-primary-foreground !text-primary-foreground px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-primary-foreground/10 transition-all rounded-sm"
        >
          Schedule Consultation
        </Link>
      </div>
    </div>
  </section>
);

export default CtaBanner;
