import { useState, useEffect } from "react";
import { Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Menu, X } from "lucide-react";

const navLinks = ["HOME", "ABOUT", "SERVICE", "PROJECTS", "TEAM", "PRICES", "NEWS", "CONTACT"];

const TopBar = () => (
  <div className="bg-section-bg border-b border-border">
    <div className="container mx-auto flex items-center justify-between py-2 text-sm">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2 text-body">
          <Phone className="h-3 w-3 text-primary" /> +1 (234) 567-890
        </span>
        <span className="hidden md:flex items-center gap-2 text-body">
          <MapPin className="h-3 w-3 text-primary" /> 228 Park Ave S, New York, NY 10003
        </span>
      </div>
      <div className="flex items-center gap-3">
        {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
          <a key={i} href="#" className="text-body hover:text-primary transition-colors">
            <Icon className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TopBar />
      <nav className={`sticky top-0 z-50 bg-background transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="#" className="font-heading text-2xl font-bold text-heading">
            innovatik.
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-xs font-semibold tracking-wider transition-colors ${
                  i === 0 ? "text-primary" : "text-heading hover:text-primary"
                }`}
              >
                {link}
              </a>
            ))}
          </div>
          <button className="lg:hidden text-heading" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container mx-auto py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-semibold text-heading hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
