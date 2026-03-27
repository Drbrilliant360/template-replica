/**
 * Security utilities for input sanitization, XSS prevention, and rate limiting.
 */

// Strip HTML tags to prevent XSS
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
};

// Strip all HTML tags (for display purposes)
export const stripHtml = (input: string): string => {
  return input.replace(/<[^>]*>/g, "");
};

// Sanitize URL parameters
export const sanitizeUrl = (url: string): string => {
  try {
    const parsed = new URL(url);
    // Only allow http, https, mailto, tel protocols
    if (!["http:", "https:", "mailto:", "tel:"].includes(parsed.protocol)) {
      return "#";
    }
    return parsed.toString();
  } catch {
    return "#";
  }
};

// Validate and sanitize phone numbers (digits, +, -, spaces, parens only)
export const sanitizePhone = (phone: string): string => {
  return phone.replace(/[^\d+\-\s()]/g, "");
};

// Simple in-memory rate limiter for client-side form submissions
class RateLimiter {
  private attempts: number[] = [];
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts: number = 3, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  canProceed(): boolean {
    const now = Date.now();
    this.attempts = this.attempts.filter((t) => now - t < this.windowMs);
    if (this.attempts.length >= this.maxAttempts) {
      return false;
    }
    this.attempts.push(now);
    return true;
  }

  getTimeUntilReset(): number {
    if (this.attempts.length === 0) return 0;
    const oldest = this.attempts[0];
    return Math.max(0, Math.ceil((this.windowMs - (Date.now() - oldest)) / 1000));
  }
}

// Singleton rate limiter for contact form (3 submissions per 60s)
export const contactFormLimiter = new RateLimiter(3, 60000);

// Honeypot field name (bots will fill this hidden field)
export const HONEYPOT_FIELD = "website_url";

// Check if honeypot field was filled (indicates bot)
export const isBot = (honeypotValue: string): boolean => {
  return honeypotValue.length > 0;
};

// Content Security Policy nonce generator
export const generateNonce = (): string => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("");
};
