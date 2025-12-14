export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "bill-ashtin-communications",
    quote:
      "Andrew made the process easy, seamless, and straight-forward for a non-technical person like myself. For years, we had no website because it was too much of a hassle, so our website was empty. Within a week, we were online and appearing in Google Searches.",
    name: "Bill",
    role: "Owner",
    company: "Ashtin Communications, Inc.",
    rating: 5,
  },
  // Placeholder testimonials
  {
    id: "placeholder-2",
    quote: "[Testimonial to be added]",
    name: "[Client Name]",
    role: "[Role]",
    company: "[Company]",
  },
  {
    id: "placeholder-3",
    quote: "[Testimonial to be added]",
    name: "[Client Name]",
    role: "[Role]",
    company: "[Company]",
  },
];
