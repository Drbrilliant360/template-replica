import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import FadeInSection from "@/components/FadeInSection";
import Loader from "@/components/Loader";

const CompanyProfilePage = () => {
  const [loading, setLoading] = useState(true);

  return (
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
            <div className="w-full max-w-4xl mx-auto rounded-sm overflow-hidden border border-border shadow-lg relative" style={{ height: "80vh" }}>
              {loading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-muted">
                  <div className="relative mb-6">
                    <div className="h-10 w-10 rounded-full border-2 border-secondary/20" />
                    <div className="absolute inset-0 h-10 w-10 rounded-full border-2 border-transparent border-t-secondary animate-spin" />
                  </div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-semibold">Loading Profile…</p>
                </div>
              )}
              <iframe
                src="/company-profile.pdf"
                title="Company Profile"
                className="w-full h-full"
                style={{ border: "none" }}
                onLoad={() => setLoading(false)}
              />
            </div>
          </div>
        </section>
      </FadeInSection>
      <FooterSection />
    </div>
  );
};

export default CompanyProfilePage;
