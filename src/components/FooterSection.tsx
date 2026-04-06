import { useState } from "react";
import { Send, Phone, Mail, MapPin, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.png";

const FooterSection = () => {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ variant: "destructive", title: "Invalid Email", description: "Please enter a valid email." });
      return;
    }
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-email", {
        body: { type: "newsletter", email },
      });
      if (error) throw error;
      toast({ title: "Subscribed!", description: "Thank you for subscribing." });
      setEmail("");
    } catch {
      toast({ variant: "destructive", title: "Error", description: "Please try again later." });
    } finally {
      setSending(false);
    }
  };

  return (
  <footer className="bg-primary pt-12 sm:pt-16 pb-8">
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
      <div className="sm:col-span-2 lg:col-span-1">
        <img
          src={logo}
          alt="Tanzania Advisory Partners"
          className="h-14 sm:h-16 w-auto mb-4 rounded-sm bg-white p-1.5"
        />
        <p className="text-sm !text-primary-foreground/60 leading-relaxed">
          Structured advisory and coordination services for investors, businesses, and expatriates operating in
          Tanzania.
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
              <Link
                to={link.path}
                className="text-sm !text-primary-foreground/60 hover:!text-secondary transition-colors"
              >
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
            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" />
            Dar es Salaam, Tanzania
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 flex-shrink-0 text-secondary" />
            +255 655 641 642
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 flex-shrink-0 text-secondary" />
            <span className="break-all">info@tanzaniaadvisorypartners.co.tz</span>
          </li>
          <li className="flex items-center gap-2">
            <Globe className="h-4 w-4 flex-shrink-0 text-secondary" />
            <a
              href="https://www.tanzaniaadvisorypartners.co.tz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              www.tanzaniaadvisorypartners.co.tz
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-heading text-lg font-semibold !text-primary-foreground mb-4">Newsletter</h4>
        <p className="text-sm !text-primary-foreground/60 mb-4">Stay informed on regulatory updates.</p>
        <form onSubmit={handleNewsletter} className="flex">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm px-3 sm:px-4 py-2.5 flex-1 min-w-0 placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary rounded-l-sm"
          />
          <button type="submit" disabled={sending} className="bg-secondary text-secondary-foreground px-3 sm:px-4 hover:brightness-110 transition-all rounded-r-sm flex-shrink-0 disabled:opacity-60">
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
    <div className="container mx-auto px-4 border-t border-primary-foreground/10 pt-6 text-center">
      <p className="text-xs !text-primary-foreground/40">© 2026 Tanzania Advisory Partners. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default FooterSection;
