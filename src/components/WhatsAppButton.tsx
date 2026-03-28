import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/255655641642"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-7 w-7 fill-current" />
  </a>
);

export default WhatsAppButton;
