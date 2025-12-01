import Card from "./Card";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
};

export function Testimonial({ quote, name, role }: TestimonialProps) {
  return (
    <Card className="space-y-4 border border-brand-sage/20">
      <p className="text-lg text-brand-sand/90">“{quote}”</p>
      <div className="text-sm text-brand-sage">
        <p className="font-semibold text-brand-sand">{name}</p>
        <p>{role}</p>
      </div>
    </Card>
  );
}

export default Testimonial;
