import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import FadeInSection from "@/components/FadeInSection";
import OptimizedImage from "@/components/OptimizedImage";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { Shield, Eye, FileCheck, Users, Heart, Target, TrendingUp, Award, Globe, CheckCircle } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import aboutHandshake from "@/assets/about-handshake.jpg";

const values = [
  { icon: Shield, title: "Integrity", desc: "We uphold the highest ethical standards in all engagements." },
  { icon: Eye, title: "Transparency", desc: "Clients are informed at every stage with no hidden processes." },
  { icon: FileCheck, title: "Compliance First", desc: "All advisory is grounded in regulatory frameworks." },
  { icon: Users, title: "Professional Coordination", desc: "We coordinate efficiently across authorities and stakeholders." },
  { icon: Heart, title: "Client Protection", desc: "Safeguarding client interests is central to our approach." },
];

const milestones = [
  { year: "Step 1", title: "Initial Consultation", desc: "Understanding your business goals and regulatory needs in Tanzania." },
  { year: "Step 2", title: "Strategic Assessment", desc: "Mapping the regulatory landscape and identifying the optimal path forward." },
  { year: "Step 3", title: "Coordinated Execution", desc: "Managing processes across government bodies and regulatory authorities." },
  { year: "Step 4", title: "Ongoing Support", desc: "Continuous compliance monitoring and advisory as your operations grow." },
];

const stats = [
  { value: "150+", label: "Clients Served" },
  { value: "98%", label: "Success Rate" },
  { value: "12+", label: "Years Experience" },
  { value: "50+", label: "Partner Network" },
];

const AboutPage = () => (
  <div className="min-h-screen">
    <SEOHead title="Who We Are" description="Learn about Tanzania Advisory Partners — a boutique advisory firm supporting foreign investors with regulatory, immigration, and corporate coordination in Tanzania." path="/about" />
    <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.tanzaniaadvisorypartners.co.tz" }, { name: "Who We Are", url: "https://www.tanzaniaadvisorypartners.co.tz/about" }])} />
    <Navbar />

    {/* Hero Banner */}
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={aboutTeam} alt="" className="w-full h-full object-cover" loading="eager" decoding="async" />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      <div className="container mx-auto relative z-10 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-4">About the Firm</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !text-primary-foreground mb-6">Who We Are</h1>
        <p className="!text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
          A boutique advisory firm dedicated to supporting foreign investors in Tanzania with clarity, structure, and compliance.
        </p>
      </div>
    </section>

    {/* Company Overview */}
    <FadeInSection>
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Company Overview</h2>
              <p className="text-body leading-relaxed mb-5">
                Tanzania Advisory Partners is a boutique advisory firm providing regulatory, immigration, and corporate coordination support for foreign investors and organizations operating in Tanzania.
              </p>
              <p className="text-body leading-relaxed mb-8">
                We bridge the gap between international business standards and Tanzanian regulatory requirements, providing structured guidance through every stage of market entry and ongoing operations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Regulatory Guidance", "Immigration Support", "Corporate Setup", "Compliance Advisory"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-sm font-medium text-heading">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-sm overflow-hidden shadow-2xl">
                <OptimizedImage src={aboutHandshake} alt="Professional partnership" className="w-full h-[400px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-sm shadow-lg hidden md:block">
                <p className="text-3xl font-heading font-bold">12+</p>
                <p className="text-xs font-semibold tracking-wider uppercase">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>

    {/* Stats Bar */}
    <FadeInSection>
      <section className="bg-primary py-12">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold text-secondary">{stat.value}</p>
              <p className="text-sm !text-primary-foreground/70 mt-1 font-medium tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>

    {/* Vision & Mission */}
    <FadeInSection>
      <section className="section-padding section-bg">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Our Purpose</p>
            <h2 className="text-3xl md:text-4xl font-bold">Vision & Mission</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-background p-10 rounded-sm border border-border group hover:shadow-xl hover:border-secondary/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <Target className="h-7 w-7 text-primary group-hover:text-secondary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-body leading-relaxed">
                To be a trusted advisory partner for international stakeholders seeking structured and compliant entry into the Tanzanian market.
              </p>
            </div>
            <div className="bg-background p-10 rounded-sm border border-border group hover:shadow-xl hover:border-secondary/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="h-7 w-7 text-primary group-hover:text-secondary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-body leading-relaxed">
                To simplify regulatory processes and provide clear, professional advisory support that enables foreign investors to operate with confidence in Tanzania.
              </p>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>

    {/* Core Values */}
    <FadeInSection>
      <section className="section-padding">
        <div className="container mx-auto text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">What We Stand For</p>
          <h2 className="text-3xl md:text-4xl font-bold">Core Values</h2>
        </div>
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-background p-8 rounded-sm text-center border border-border group hover:shadow-xl hover:border-secondary/40 hover:-translate-y-2 transition-all duration-300 cursor-default">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <v.icon className="h-7 w-7 text-primary group-hover:text-secondary-foreground stroke-[1.5] transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-bold mb-2">{v.title}</h3>
              <p className="text-xs text-body leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>

    {/* How We Work */}
    <FadeInSection>
      <section className="section-padding section-bg">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {milestones.map((m, i) => (
              <div key={i} className="relative text-center group">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                  <span className="text-lg font-heading font-bold text-primary-foreground">{String(i + 1).padStart(2, "0")}</span>
                </div>
                {i < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
                )}
                <h3 className="text-sm font-bold mb-2">{m.title}</h3>
                <p className="text-xs text-body leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>

    {/* Philosophy Quote */}
    <FadeInSection>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutTeam} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <Award className="h-12 w-12 text-secondary mx-auto mb-6" />
          <p className="text-2xl md:text-3xl font-heading !text-primary-foreground italic leading-relaxed mb-6">
            "Clear Structure. Clear Communication. Sustainable Compliance."
          </p>
          <div className="w-16 h-px bg-secondary mx-auto mb-6" />
          <p className="text-sm !text-primary-foreground/70 uppercase tracking-widest font-semibold">Our Operating Philosophy</p>
        </div>
      </section>
    </FadeInSection>

    {/* CTA */}
    <FadeInSection>
      <section className="section-padding">
        <div className="container mx-auto text-center max-w-2xl">
          <Globe className="h-10 w-10 text-secondary mx-auto mb-5" />
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-body leading-relaxed mb-8">
            Whether you're entering the Tanzanian market or expanding existing operations, our team is ready to guide you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 rounded-sm"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </FadeInSection>

    <FooterSection />
  </div>
);

export default AboutPage;
