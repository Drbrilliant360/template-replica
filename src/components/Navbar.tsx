import { useState, useEffect } from "react";
import { Phone, MapPin, Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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
    <div className="container mx-auto flex items-center justify-between py-2 text-xs">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <Phone className="h-3 w-3 text-secondary" /> +255 123 456 789
        </span>
        <span className="hidden md:flex items-center gap-2">
          <Mail className="h-3 w-3 text-secondary" /> info@tanzaniaadvisory.co.tz
        </span>
      </div>
      <span className="hidden sm:flex items-center gap-2">
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

  return (
    <>
      <TopBar />
      <nav className={`sticky top-0 z-50 bg-background transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-border"}`}>
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-heading text-xl font-bold text-heading">Tanzania Advisory</span>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary">Partners</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-semibold tracking-wider uppercase transition-colors ${
                  location.pathname === link.path ? "text-secondary" : "text-heading hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="hidden lg:inline-block bg-secondary text-secondary-foreground px-5 py-2.5 text-xs font-semibold tracking-wider uppercase hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 rounded-sm"
          >
            Book Consultation
          </Link>
          <button className="lg:hidden text-heading" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container mx-auto py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-semibold text-heading hover:text-secondary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
