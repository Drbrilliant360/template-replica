import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import FadeInSection from "@/components/FadeInSection";
import SEOHead from "@/components/SEOHead";
import { Phone, Mail, MapPin, Send, AlertCircle, ShieldCheck, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { sanitizeInput, sanitizePhone, contactFormLimiter, HONEYPOT_FIELD, isBot } from "@/lib/security";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .max(100, "Name must be less than 100 characters")
    .refine((val) => !/[<>{}]/.test(val), "Name contains invalid characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number is too long")
    .refine((val) => val === "" || /^[+\d\s()-]*$/.test(val), "Phone contains invalid characters")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(200, "Subject must be less than 200 characters")
    .refine((val) => !/[<>{}]/.test(val), "Subject contains invalid characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formStartTime = useRef(Date.now());
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

  const handleChange = (field: keyof typeof form, value: string) => {
    // Sanitize phone input specifically
    if (field === "phone") {
      setForm({ ...form, [field]: sanitizePhone(value) });
    } else {
      setForm({ ...form, [field]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Bot detection: honeypot check
    if (isBot(honeypot)) {
      // Silently reject — don't alert the bot
      toast({ title: "Message Sent!", description: "Thank you for your inquiry." });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      return;
    }

    // Bot detection: timing check (form filled in under 2 seconds = likely bot)
    if (Date.now() - formStartTime.current < 2000) {
      toast({ title: "Message Sent!", description: "Thank you for your inquiry." });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      return;
    }

    // Rate limiting
    if (!contactFormLimiter.canProceed()) {
      const waitTime = contactFormLimiter.getTimeUntilReset();
      toast({
        variant: "destructive",
        title: "Too Many Attempts",
        description: `Please wait ${waitTime} seconds before trying again.`,
      });
      return;
    }

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

    // Sanitize all text inputs before "sending"
    const sanitizedData = {
      name: sanitizeInput(result.data.name),
      email: result.data.email,
      phone: sanitizePhone(result.data.phone || ""),
      subject: sanitizeInput(result.data.subject),
      message: sanitizeInput(result.data.message),
    };

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);

    console.info("Sanitized form data ready for backend:", sanitizedData);

    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We will be in touch shortly.",
    });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    formStartTime.current = Date.now();
  };

  const inputClass = (field: keyof typeof form) =>
    `w-full px-4 py-3 border rounded-sm text-sm focus:outline-none bg-background transition-colors duration-200 ${
      errors[field] ? "border-destructive focus:border-destructive" : "border-border focus:border-secondary"
    }`;

  return (
    <div className="min-h-screen">
      <SEOHead title="Contact Us" description="Get in touch with Tanzania Advisory Partners. Schedule a consultation for regulatory, immigration, and business advisory services in Tanzania." path="/contact" />
      <Navbar />
      <section className="bg-primary py-16 sm:py-20 text-center">
        <div className="container mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">Get In Touch</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold !text-primary-foreground mb-4">Contact Us</h1>
          <p className="!text-primary-foreground/70 max-w-xl mx-auto text-sm sm:text-base">
            Get in touch to discuss your advisory needs or schedule a consultation.
          </p>
        </div>
      </section>

      <FadeInSection>
        <section className="section-padding">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot field — hidden from humans, visible to bots */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor={HONEYPOT_FIELD}>Do not fill this</label>
                  <input
                    type="text"
                    id={HONEYPOT_FIELD}
                    name={HONEYPOT_FIELD}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => validateField("name")}
                      className={inputClass("name")}
                      maxLength={100}
                      autoComplete="name"
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
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => validateField("email")}
                      className={inputClass("email")}
                      maxLength={255}
                      autoComplete="email"
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
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={inputClass("phone")}
                      maxLength={20}
                      autoComplete="tel"
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
                      onChange={(e) => handleChange("subject", e.target.value)}
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
                    onChange={(e) => handleChange("message", e.target.value)}
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
                <div className="flex items-center gap-4 flex-wrap">
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
                  <span className="inline-flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                    Secured & encrypted
                  </span>
                </div>
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
                    <p className="text-sm text-body">+255 655 641 642</p>
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
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Website</h4>
                    <a href="https://www.tap.co.tz" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary hover:underline">www.tap.co.tz</a>
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
