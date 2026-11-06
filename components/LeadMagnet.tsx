"use client";

import { useState } from "react";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Check your email for the download link!");
        setEmail("");

        // Open the PDF in a new tab after successful subscription
        if (data.downloadUrl) {
          window.open(data.downloadUrl, "_blank");
        }
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="glass rounded-2xl border border-brand-sage/20 bg-brand-moss/60 p-6 md:p-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-heading text-brand-sand">
            📋 Download Our Free 15-Point Website Launch Checklist
          </h3>
          <p className="text-brand-sand/80">
            Ensure your next website launch is smooth, strategic, and search-ready.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            disabled={status === "loading"}
            className="flex-1 rounded-lg border border-brand-sage/30 bg-brand-night/60 px-4 py-3 text-brand-sand placeholder:text-brand-sand/50 focus:border-brand-sage focus:outline-none focus:ring-1 focus:ring-brand-sage disabled:opacity-50"
            aria-label="Email address for checklist download"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-sage px-5 py-3 text-sm font-medium text-brand-night shadow-soft transition duration-200 ease-out hover:bg-brand-sage/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-night disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Get the Checklist"}
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
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}

export default LeadMagnet;
