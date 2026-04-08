import { useState, useEffect } from "react";
import { Phone, MapPin, Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-header.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Who We Are", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Who We Work With", path: "/clients" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const TopBar = () => (
  <div className="bg-primary text-primary-foreground">
    <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-0 text-xs tracking-wide">
      <div className="flex items-center gap-4 md:gap-6">
        <a href="tel:+255655641642" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
          <Phone className="h-3 w-3 text-secondary" />
          <span className="hidden xs:inline">+255-655-641-642</span>
        </a>
        <a href="mailto:info@tanzaniaadvisorypartners.co.tz" className="hidden md:flex items-center gap-1.5 hover:text-secondary transition-colors">
          <Mail className="h-3 w-3 text-secondary" /> info@tanzaniaadvisorypartners.co.tz
        </a>
      </div>
      <span className="hidden sm:flex items-center gap-1.5">
        <MapPin className="h-3 w-3 text-secondary" /> Dar es Salaam, Tanzania
      </span>
    </div>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <TopBar />
      <nav className={`sticky top-0 z-50 bg-background transition-all duration-300 ${scrolled ? "shadow-lg" : "border-b border-border"}`}>
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-0">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Tanzania Advisory Partners" className="h-[56px] sm:h-[64px] md:h-[72px] w-auto max-w-[280px] sm:max-w-[360px] md:max-w-[420px] object-contain" />
          </Link>
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors duration-200 ${
                  location.pathname === link.path ? "text-secondary" : "text-heading hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/company-profile"
              className="inline-flex items-center gap-2 border-2 border-secondary text-secondary px-5 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 rounded"
            >
              View Profile
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-secondary text-secondary-foreground px-5 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase hover:brightness-110 hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 rounded"
            >
              Book Consultation
            </Link>
          </div>
          <button className="lg:hidden text-heading p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-in slide-in-from-top-2 duration-200">
            <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium py-3 px-4 rounded transition-colors ${
                    location.pathname === link.path
                      ? "text-secondary bg-secondary/10"
                      : "text-heading hover:text-secondary hover:bg-secondary/5"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/company-profile"
                className="mt-3 inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary px-5 py-3 text-sm font-semibold tracking-[0.12em] uppercase text-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 rounded"
                onClick={() => setMobileOpen(false)}
              >
                View Profile
              </Link>
              <Link
                to="/contact"
                className="bg-secondary text-secondary-foreground px-5 py-3 text-sm font-semibold tracking-[0.12em] uppercase text-center hover:brightness-110 transition-all duration-300 rounded"
                onClick={() => setMobileOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
