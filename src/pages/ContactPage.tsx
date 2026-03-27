import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import FadeInSection from "@/components/FadeInSection";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. We will be in touch shortly.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold !text-primary-foreground mb-4">Contact Us</h1>
          <p className="!text-primary-foreground/70 max-w-xl mx-auto">Get in touch to discuss your advisory needs or schedule a consultation.</p>
        </div>
      </section>

      <FadeInSection>
        <section className="section-padding">
          <div className="container mx-auto grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="Full Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm text-sm focus:outline-none focus:border-secondary bg-background transition-colors duration-200" />
                  <input type="email" placeholder="Email Address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm text-sm focus:outline-none focus:border-secondary bg-background transition-colors duration-200" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm text-sm focus:outline-none focus:border-secondary bg-background transition-colors duration-200" />
                  <input type="text" placeholder="Subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm text-sm focus:outline-none focus:border-secondary bg-background transition-colors duration-200" />
                </div>
                <textarea placeholder="Your Message" rows={6} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm text-sm focus:outline-none focus:border-secondary bg-background resize-none transition-colors duration-200" />
                <button type="submit" className="group bg-secondary text-secondary-foreground px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 rounded-sm inline-flex items-center gap-2">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Address</h4>
                    <p className="text-sm text-body">Dar es Salaam, Tanzania</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Phone</h4>
                    <p className="text-sm text-body">+255 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Email</h4>
                    <p className="text-sm text-body">info@tanzaniaadvisory.co.tz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FooterSection />
    </div>
  );
};

export default ContactPage;
