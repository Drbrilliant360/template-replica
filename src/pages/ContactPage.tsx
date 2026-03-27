import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
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
          <h1 className="text-4xl md:text-5xl font-bold !text-primary-foreground mb-4">Contact Us</h1>
          <p className="!text-primary-foreground/80 max-w-xl mx-auto">Get in touch to discuss your advisory needs or schedule a consultation.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text" placeholder="Full Name" required
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm text-sm focus:outline-none focus:border-primary bg-background"
                />
                <input
                  type="email" placeholder="Email Address" required
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm text-sm focus:outline-none focus:border-primary bg-background"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="tel" placeholder="Phone Number"
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm text-sm focus:outline-none focus:border-primary bg-background"
                />
                <input
                  type="text" placeholder="Subject" required
                  value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-sm text-sm focus:outline-none focus:border-primary bg-background"
                />
              </div>
              <textarea
                placeholder="Your Message" rows={6} required
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-sm text-sm focus:outline-none focus:border-primary bg-background resize-none"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:brightness-110 transition-all rounded-sm inline-flex items-center gap-2"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold mb-1">Address</h4>
                  <p className="text-sm text-body">Dar es Salaam, Tanzania</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold mb-1">Phone</h4>
                  <p className="text-sm text-body">+255 123 456 789</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold mb-1">Email</h4>
                  <p className="text-sm text-body">info@tanzaniaadvisory.co.tz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ContactPage;
