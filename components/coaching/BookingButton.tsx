import { coaching } from "@/lib/coaching";

export default function BookingButton({ url, children, subject }: {
  url?: string; children: React.ReactNode; subject: string;
}) {
  return (
    <div>
      <a className="booking-button" href={url || `mailto:${coaching.contactEmail}?subject=${encodeURIComponent(subject)}`}
        {...(url ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {url ? children : "Contact to Learn More"}<span aria-hidden="true">↗</span>
        {url && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
      {!url && <p className="booking-note">Online booking isn’t available here yet. Email Andrew about {subject.toLowerCase()}.</p>}
    </div>
  );
}
