import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => (
  <footer className="bg-foreground pt-16 pb-8">
    <div className="container mx-auto grid md:grid-cols-4 gap-10 mb-12">
      <div>
        <h3 className="font-heading text-xl font-bold !text-primary-foreground mb-2">Tanzania Advisory</h3>
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase !text-secondary block mb-4">Partners</span>
        <p className="text-sm !text-primary-foreground/60 leading-relaxed">
          Structured advisory and coordination services for investors, businesses, and expatriates operating in Tanzania.
        </p>
      </div>
      <div>
        <h4 className="font-heading text-lg font-semibold !text-primary-foreground mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {[
            { label: "Home", path: "/" },
            { label: "Who We Are", path: "/about" },
            { label: "Services", path: "/services" },
            { label: "Who We Work With", path: "/clients" },
            { label: "Contact", path: "/contact" },
          ].map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="text-sm !text-primary-foreground/60 hover:!text-primary transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-heading text-lg font-semibold !text-primary-foreground mb-4">Contact Info</h4>
        <ul className="space-y-3 text-sm !text-primary-foreground/60">
          <li className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
            Dar es Salaam, Tanzania
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 flex-shrink-0" />
            +255 123 456 789
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 flex-shrink-0" />
            info@tanzaniaadvisory.co.tz
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-heading text-lg font-semibold !text-primary-foreground mb-4">Newsletter</h4>
        <p className="text-sm !text-primary-foreground/60 mb-4">Stay informed on regulatory updates.</p>
        <div className="flex">
          <input
            type="email"
            placeholder="Your email"
            className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm px-4 py-2.5 flex-1 placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary rounded-l-sm"
          />
          <button className="bg-primary text-primary-foreground px-4 hover:brightness-110 transition-all rounded-r-sm">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
    <div className="container mx-auto border-t border-primary-foreground/10 pt-6 text-center">
      <p className="text-xs !text-primary-foreground/40">© 2026 Tanzania Advisory Partners. All rights reserved.</p>
    </div>
  </footer>
);

export default FooterSection;
