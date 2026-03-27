import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import FadeInSection from "@/components/FadeInSection";
import { Phone, Mail, MapPin, Send, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(20, "Phone number is too long").optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateField = (field: keyof typeof form) => {
    const result = contactSchema.shape[field].safeParse(form[field]);
    if (!result.success) {
      setErrors((prev) => ({ ...prev, [field]: result.error.issues[0].message }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof typeof form;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fix the highlighted fields before submitting.",
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);

    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We will be in touch shortly.",
    });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const inputClass = (field: keyof typeof form) =>
    `w-full px-4 py-3 border rounded-sm text-sm focus:outline-none bg-background transition-colors duration-200 ${
      errors[field] ? "border-destructive focus:border-destructive" : "border-border focus:border-secondary"
    }`;

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-primary py-16 sm:py-20 text-center">
        <div className="container mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Get In Touch</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold !text-primary-foreground mb-4">Contact Us</h1>
          <p className="!text-primary-foreground/70 max-w-xl mx-auto text-sm sm:text-base">Get in touch to discuss your advisory needs or schedule a consultation.</p>
        </div>
      </section>

      <FadeInSection>
        <section className="section-padding">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onBlur={() => validateField("name")}
                      className={inputClass("name")}
                      maxLength={100}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 mt-1.5 text-xs text-destructive">
                        <AlertCircle className="h-3 w-3" /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onBlur={() => validateField("email")}
                      className={inputClass("email")}
                      maxLength={255}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 mt-1.5 text-xs text-destructive">
                        <AlertCircle className="h-3 w-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass("phone")}
                      maxLength={20}
                    />
                    {errors.phone && (
                      <p className="flex items-center gap-1 mt-1.5 text-xs text-destructive">
                        <AlertCircle className="h-3 w-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject *"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      onBlur={() => validateField("subject")}
                      className={inputClass("subject")}
                      maxLength={200}
                    />
                    {errors.subject && (
                      <p className="flex items-center gap-1 mt-1.5 text-xs text-destructive">
                        <AlertCircle className="h-3 w-3" /> {errors.subject}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Your Message *"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onBlur={() => validateField("message")}
                    className={`${inputClass("message")} resize-none`}
                    maxLength={2000}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <p className="flex items-center gap-1 text-xs text-destructive">
                        <AlertCircle className="h-3 w-3" /> {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="text-[10px] text-muted-foreground">{form.message.length}/2000</span>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group bg-secondary text-secondary-foreground px-6 sm:px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 rounded-sm inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Contact Info</h2>
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
                    <p className="text-sm text-body break-all">info@tanzaniaadvisory.co.tz</p>
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
