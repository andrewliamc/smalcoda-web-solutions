import Card from "./Card";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  rating?: number;
};

export function Testimonial({ quote, name, role, company, rating }: TestimonialProps) {
  return (
    <Card className="space-y-4 border border-brand-sage/20">
      {rating && (
        <div className="flex gap-1 text-brand-sage" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: rating }, (_, i) => (
            <span key={i} aria-hidden="true">⭐</span>
          ))}
        </div>
      )}
      <blockquote className="text-lg text-brand-sand/90">"{quote}"</blockquote>
      <cite className="not-italic">
        <p className="font-semibold text-brand-sand">{name}</p>
        <p className="text-sm text-brand-sage">
          {role}
          {company && <span>, {company}</span>}
        </p>
      </cite>
    </Card>
  );
}

export default Testimonial;
