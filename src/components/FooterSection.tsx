import { Send } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const FooterSection = () => (
  <footer id="contact" className="bg-foreground pt-16 pb-8">
    <div className="container mx-auto grid md:grid-cols-4 gap-10 mb-12">
      <div>
        <h3 className="font-heading text-2xl font-bold !text-primary-foreground mb-4">innovatik.</h3>
        <p className="text-sm !text-primary-foreground/60 leading-relaxed">
          We craft premium digital experiences for businesses around the world.
        </p>
      </div>
      <div>
        <h4 className="font-heading text-lg font-semibold !text-primary-foreground mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-sm !text-primary-foreground/60 hover:!text-primary transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-heading text-lg font-semibold !text-primary-foreground mb-4">Contact Info</h4>
        <ul className="space-y-2 text-sm !text-primary-foreground/60">
          <li>228 Park Ave S, New York</li>
          <li>+1 (234) 567-890</li>
          <li>info@innovatik.com</li>
        </ul>
      </div>
      <div>
        <h4 className="font-heading text-lg font-semibold !text-primary-foreground mb-4">Newsletter</h4>
        <div className="flex">
          <input
            type="email"
            placeholder="Your email"
            className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm px-4 py-2.5 flex-1 placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary"
          />
          <button className="bg-primary text-primary-foreground px-4 hover:brightness-110 transition-all">
            <Send className="h-4 w-4" />
          </button>
        </div>
        <div className="flex gap-4 mt-6">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <a key={i} href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="container mx-auto border-t border-primary-foreground/10 pt-6 text-center">
      <p className="text-xs !text-primary-foreground/40">© 2026 innovatik. All rights reserved.</p>
    </div>
  </footer>
);

export default FooterSection;
