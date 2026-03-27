import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import FadeInSection from "@/components/FadeInSection";

const CompanyProfilePage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <FadeInSection>
      <section className="section-padding flex-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-2">
              Tanzania Advisory Partners
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Company Profile</h1>
            <p className="text-sm sm:text-base text-body max-w-xl mx-auto">
              Learn more about our firm, capabilities, and how we help clients navigate the Tanzanian market.
            </p>
          </div>
          <div className="w-full max-w-4xl mx-auto rounded-sm overflow-hidden border border-border shadow-lg" style={{ height: "80vh" }}>
            <iframe
              src="/company-profile.pdf"
              title="Company Profile"
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </section>
    </FadeInSection>
    <FooterSection />
  </div>
);

export default CompanyProfilePage;
