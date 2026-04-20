import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { FileText, Download, ExternalLink, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import FadeInSection from "@/components/FadeInSection";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";

const CompanyProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Company Profile — Tanzania Advisory Partners"
        description="Download the Tanzania Advisory Partners company profile. Discover our regulatory, immigration and business advisory capabilities for investors in Tanzania."
        path="/company-profile"
      />
      <JsonLd id="breadcrumb-profile" data={breadcrumbSchema([{ name: "Home", url: "https://www.tanzaniaadvisorypartners.co.tz/" }, { name: "Company Profile", url: "https://www.tanzaniaadvisorypartners.co.tz/company-profile" }])} />
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80 opacity-90" />
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 relative z-10 text-center">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-1.5 mb-5">
              <BookOpen className="h-3.5 w-3.5 text-secondary" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-secondary">
                Tanzania Advisory Partners
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Company Profile
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Discover our capabilities, track record, and how we help investors and businesses navigate the Tanzanian market with confidence.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <a
                href="/company-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 rounded-sm"
              >
                <ExternalLink className="h-4 w-4" />
                Open Full Screen
              </a>
              <a
                href="/company-profile.pdf"
                download
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-primary-foreground/10 transition-all duration-300 rounded-sm"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <FadeInSection>
            {isMobile ? (
              <div className="w-full max-w-md mx-auto text-center">
                <div className="border border-border rounded-sm p-8 sm:p-10 bg-card shadow-xl">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center ring-1 ring-secondary/20">
                    <FileText className="h-9 w-9 text-secondary" />
                  </div>
                  <h2 className="text-xl font-heading font-bold mb-2 text-heading">View Our Profile</h2>
                  <p className="text-sm text-body mb-8 leading-relaxed">
                    Open or download our detailed company profile to learn about our services, expertise, and team.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="/company-profile.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3.5 text-sm font-semibold tracking-wider uppercase hover:brightness-110 transition-all duration-300 rounded-sm shadow-md"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Open Profile
                    </a>
                    <a
                      href="/company-profile.pdf"
                      download
                      className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3.5 text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm"
                    >
                      <Download className="h-4 w-4" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="w-full max-w-5xl mx-auto rounded-sm overflow-hidden border border-border shadow-2xl relative bg-card"
                style={{ height: "85vh" }}
              >
                {loading && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-muted/80 backdrop-blur-sm">
                    <div className="relative mb-6">
                      <div className="h-12 w-12 rounded-full border-2 border-secondary/20" />
                      <div className="absolute inset-0 h-12 w-12 rounded-full border-2 border-transparent border-t-secondary animate-spin" />
                    </div>
                    <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-semibold">
                      Loading Profile…
                    </p>
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
          </FadeInSection>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default CompanyProfilePage;
