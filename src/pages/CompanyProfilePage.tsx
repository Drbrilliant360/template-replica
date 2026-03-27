import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { FileText, Download, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import FadeInSection from "@/components/FadeInSection";

const CompanyProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

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

            {isMobile ? (
              <div className="w-full max-w-md mx-auto text-center">
                <div className="border border-border rounded-sm p-8 bg-card shadow-lg">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-secondary/10 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-secondary" />
                  </div>
                  <h2 className="text-lg font-bold mb-2">Company Profile</h2>
                  <p className="text-sm text-body mb-6">
                    Tap below to view or download our company profile document.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="/company-profile.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:brightness-110 transition-all duration-300 rounded-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Open Profile
                    </a>
                    <a
                      href="/company-profile.pdf"
                      download
                      className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm"
                    >
                      <Download className="h-4 w-4" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ) : (
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
            )}
          </div>
        </section>
      </FadeInSection>
      <FooterSection />
    </div>
  );
};

export default CompanyProfilePage;
