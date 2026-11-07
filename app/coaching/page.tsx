import type { Metadata } from "next";
import Image from "next/image";
import BookingButton from "@/components/coaching/BookingButton";
import { coaching } from "@/lib/coaching";

export const metadata: Metadata = {
  title: { absolute: "Coaching with Andrew | A conversation. A next step." },
  description: "Book a complimentary discovery conversation or explore individual and ongoing coaching with Andrew.",
  robots: { index: false, follow: false },
  openGraph: { title: "Coaching with Andrew", description: "A conversation. A next step.", url: "/coaching", images: [] },
  twitter: { card: "summary", title: "Coaching with Andrew", description: "A conversation. A next step.", images: [] },
};

const policy = [
  "Please provide at least 24 hours’ notice to cancel or reschedule a paid appointment. Cancellations made at least 24 hours in advance are eligible for a full refund or rescheduling.",
  "Cancellations made less than 24 hours before the scheduled appointment are nonrefundable and may count toward prepaid coaching packages or subscriptions.",
  "Missed appointments are nonrefundable.",
  "Sessions begin and end at their scheduled times. Arrivals more than 15 minutes late may be treated as no-shows.",
  "If I need to cancel an appointment, clients will be offered a rescheduled session or a full refund for the affected appointment.",
  "Zoom meeting details will be shared before the scheduled session.",
];

export default function CoachingPage() {
  return <>
    <a href="#coaching-main" className="coaching-skip">Skip to coaching options</a>
    <header className="coaching-masthead wrap">
      <a href="#" aria-label="Coaching with Andrew, back to top" className="wordmark">ANDREW<span aria-hidden="true">↗</span></a>
      <span className="masthead-note">A CONVERSATION. A NEXT STEP.</span>
      <a href={`mailto:${coaching.contactEmail}`}>Let’s talk <span aria-hidden="true">↗</span></a>
    </header>
    <main id="coaching-main">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">COACHING WITH ANDREW</p>
          <h1 id="hero-title">LET&apos;S BUILD<br />SOMETHING<br /><em>BETTER.</em></h1>
          <p className="hero-description">Whether you&apos;re exploring what&apos;s possible or ready to take the next step, book a conversation and let&apos;s find the right approach for your goals.</p>
          <div className="hero-actions"><a className="booking-button" href="#discovery">Book a Free Discovery Call <span aria-hidden="true">↓</span></a><a className="text-link" href="#individual">Explore Coaching Options <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="portrait-composition">
          <span className="hero-sticker">YOUR NEXT<br />CHAPTER STARTS<br /><strong>with a conversation.</strong></span>
          <figure className="portrait-frame"><div className="portrait"><Image src="/images/andrew-cox-photo.jpg" alt="Andrew Cox, your coach" fill priority sizes="(max-width: 760px) 85vw, 420px" /></div><figcaption><strong>Hey, I&apos;m Andrew.</strong><span>Let’s figure out what’s next. ↗</span></figcaption></figure>
          <p className="portrait-caption">Space to think. Support to move forward.</p>
        </div>
      </section>
      <div className="intro-strip"><div className="wrap"><span>ONE-ON-ONE CONVERSATIONS</span><span aria-hidden="true">✳</span><span>YOUR GOALS. YOUR PACE.</span><span aria-hidden="true">✳</span><span>ONLINE VIA ZOOM</span></div></div>
      <section id="discovery" className="section wrap" aria-labelledby="discovery-title">
        <div className="section-heading-row"><div><p className="kicker">01 / LET’S MEET</p><h2 id="discovery-title">START WITH A<br />CONVERSATION.</h2></div><p>No pressure. No commitment. Just an opportunity to talk about your goals, ask questions, and see whether coaching is the right fit.</p></div>
        <div className="cards">
          <article className="service-card"><div className="card-top"><span className="duration">15 MIN</span><span className="price">Free</span></div><h3>15-Minute<br />Discovery Call</h3><p>A quick introductory conversation. Ideal for understanding the coaching process and asking initial questions.</p><BookingButton url={coaching.booking15} subject="15-minute discovery call">Book 15 Minutes</BookingButton></article>
          <article className="service-card"><div className="card-top"><span className="duration teal">30 MIN</span><span className="price">Free</span></div><h3>30-Minute<br />Discovery Consultation</h3><p>A more in-depth discussion about goals, challenges, and potential next steps.</p><BookingButton url={coaching.booking30} subject="30-minute discovery consultation">Book 30 Minutes</BookingButton></article>
        </div>
        <p className="section-note">Choose a time on Google Calendar. You’ll receive a confirmation after booking.</p>
      </section>
      <section id="individual" className="individual-band" aria-labelledby="individual-title"><div className="section wrap individual-grid"><div><p className="kicker">02 / MAKE SPACE FOR PROGRESS</p><h2 id="individual-title">ONE SESSION.<br />REAL PROGRESS.</h2><p className="section-intro">Focused time for what matters to you, with a clear next step to take away.</p></div><article className="service-card"><div className="card-top"><span className="duration">60 MIN / ZOOM</span><span className="price">{coaching.sessionPrice || "Paid session"}</span></div><h3>Private Coaching Session</h3><ul><li>Personalized one-on-one coaching</li><li>Clear objectives and actionable next steps</li><li>Secure payment through Stripe during Google Calendar booking</li></ul><BookingButton url={coaching.bookingSession} subject="private coaching session">Book a Coaching Session</BookingButton><p className="booking-note">{!coaching.sessionPrice && "Current pricing is shown during booking. "}<a href="#cancellation-policy">Read the cancellation policy</a></p></article></div></section>
      <section className="section wrap" aria-labelledby="ongoing-title"><div className="section-heading-row"><div><p className="kicker">03 / KEEP MOVING FORWARD</p><h2 id="ongoing-title">CONSISTENCY<br />CREATES MOMENTUM.</h2></div><p>For goals that benefit from continued support, coaching packages and monthly options are on the way.</p></div><div className="cards">
        <article className="service-card"><p className="kicker">A STRUCTURED APPROACH</p><h3>Coaching Packages</h3><ul><li>Multiple prepaid sessions</li><li>Designed for structured progress</li><li>Flexible scheduling</li></ul><p className="price">Details coming soon.</p></article>
        <article className="service-card"><p className="kicker">SUPPORT THAT CONTINUES</p><h3>Monthly Coaching</h3><ul><li>Recurring coaching sessions</li><li>Continued guidance and accountability</li><li>Monthly payment options</li></ul><p className="price">Details coming soon.</p></article>
      </div><p className="section-note">Package and monthly coaching details, pricing, and scheduling information will be shared when available.</p>
      {coaching.bookingClient && <div className="existing-client"><p>Already coaching together? Use your existing-client booking link after confirming your scheduling arrangements with Andrew.</p><BookingButton url={coaching.bookingClient} subject="existing-client scheduling">Schedule an Existing-Client Session</BookingButton></div>}
      </section>
      <section className="details-band"><div className="section wrap"><p className="kicker">THE PRACTICAL DETAILS</p><h2>BOOK. CONNECT.<br />TAKE THE NEXT STEP.</h2><div className="steps"><div><span>01</span><h3>Choose your conversation.</h3><p>Open the official booking page to see availability in your time zone and confirm your appointment. Paid sessions include checkout.</p></div><div><span>02</span><h3>Look out for your invitation.</h3><p>Google Calendar sends your booking confirmation. Sessions take place via Zoom. Your personal meeting link will be provided before your appointment.</p></div><div><span>03</span><h3>Bring what’s on your mind.</h3><p>We’ll start with your goals and work together on an approach that feels right for you.</p></div></div>
      <div id="cancellation-policy" className="policy"><details><summary>Cancellation &amp; rescheduling policy</summary><div>{policy.map(p => <p key={p}>{p}</p>)}</div></details></div>
      <p className="questions">Questions before you book? <a href={`mailto:${coaching.contactEmail}`}>Email Andrew <span aria-hidden="true">↗</span></a></p></div></section>
    </main>
    <footer className="coaching-footer wrap"><strong>ANDREW ↗</strong><span>Good conversations. Meaningful next steps.</span><a href={`mailto:${coaching.contactEmail}`}>Get in touch</a></footer>
  </>;
}
