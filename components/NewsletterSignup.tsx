"use client";

import { useState } from "react";

type NewsletterSignupProps = {
  variant?: "default" | "compact";
  title?: string;
  description?: string;
};

export function NewsletterSignup({
  variant = "default",
  title = "Website Tips for Small Businesses",
  description = "Get monthly insights on web design, performance, and growth. No spam.",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks for subscribing! Check your email to confirm.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (variant === "compact") {
    return (
      <div className="space-y-3">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === "loading"}
            className="flex-1 rounded-lg border border-brand-sage/30 bg-brand-night/60 px-4 py-2 text-sm text-brand-sand placeholder:text-brand-sand/50 focus:border-brand-sage focus:outline-none focus:ring-1 focus:ring-brand-sage disabled:opacity-50"
            aria-label="Email address for newsletter"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-moss px-5 py-3 text-sm font-medium text-brand-sand shadow-soft transition duration-200 ease-out border border-brand-sage/40 hover:border-brand-sage hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-night disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
        {message && (
          <p
            className={`text-xs ${
              status === "success" ? "text-brand-sage" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
        <p className="text-xs text-brand-sand/60">
          Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-xl font-heading text-brand-sand">📬 {title}</h3>
        <p className="text-sm text-brand-sand/80">{description}</p>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className="flex-1 rounded-lg border border-brand-sage/30 bg-brand-night/60 px-4 py-2 text-brand-sand placeholder:text-brand-sand/50 focus:border-brand-sage focus:outline-none focus:ring-1 focus:ring-brand-sage disabled:opacity-50"
          aria-label="Email address for newsletter"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-sage px-5 py-3 text-sm font-medium text-brand-night shadow-soft transition duration-200 ease-out hover:bg-brand-sage/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-night disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {message && (
        <p
          className={`text-sm ${
            status === "success" ? "text-brand-sage" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
      <p className="text-xs text-brand-sand/60">
        Unsubscribe anytime. We respect your privacy.
      </p>
    </div>
  );
}

export default NewsletterSignup;
