type ContactFormProps = {
  action: (formData: FormData) => Promise<void>;
};

const budgetOptions = [
  "Under $3,000",
  "$3,000 - $6,000",
  "$6,000 - $10,000",
  "$10,000+",
];

const timelineOptions = ["2-3 weeks", "4-6 weeks", "6-10 weeks", "Flexible"];

const projectTypes = [
  "New website",
  "Landing page",
  "Website refresh",
  "Care plan",
  "Other",
];

export function ContactForm({ action }: ContactFormProps) {
  return (
    <form action={action} className="glass space-y-5 rounded-2xl p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-brand-sand/90">Name</span>
          <input
            required
            name="name"
            className="w-full rounded-lg border border-white/10 bg-brand-moss/60 px-3 py-2 text-brand-sand placeholder:text-brand-sand/50 focus:border-brand-sage focus:outline-none"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-brand-sand/90">Email</span>
          <input
            required
            type="email"
            name="email"
            className="w-full rounded-lg border border-white/10 bg-brand-moss/60 px-3 py-2 text-brand-sand placeholder:text-brand-sand/50 focus:border-brand-sage focus:outline-none"
            placeholder="you@company.com"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-brand-sand/90">Company (optional)</span>
          <input
            name="company"
            className="w-full rounded-lg border border-white/10 bg-brand-moss/60 px-3 py-2 text-brand-sand placeholder:text-brand-sand/50 focus:border-brand-sage focus:outline-none"
            placeholder="Company or team"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-brand-sand/90">
            Current website (optional)
          </span>
          <input
            name="website"
            className="w-full rounded-lg border border-white/10 bg-brand-moss/60 px-3 py-2 text-brand-sand placeholder:text-brand-sand/50 focus:border-brand-sage focus:outline-none"
            placeholder="https://"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-brand-sand/90">Budget range</span>
          <select
            required
            name="budget"
            className="w-full rounded-lg border border-white/10 bg-brand-moss/60 px-3 py-2 text-brand-sand focus:border-brand-sage focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm text-brand-sand/90">Timeline</span>
          <select
            required
            name="timeline"
            className="w-full rounded-lg border border-white/10 bg-brand-moss/60 px-3 py-2 text-brand-sand focus:border-brand-sage focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Choose a timeline
            </option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-sm text-brand-sand/90">Project type</span>
          <div className="flex flex-wrap gap-2">
            {projectTypes.map((type) => (
              <label
                key={type}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-brand-moss/60 px-3 py-2 text-sm text-brand-sand hover:border-brand-sage/60"
              >
                <input
                  type="checkbox"
                  name="projectTypes"
                  value={type}
                  className="accent-brand-sage"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-sm text-brand-sand/90">Tell me about your project</span>
        <textarea
          required
          name="details"
          rows={4}
          className="w-full rounded-lg border border-white/10 bg-brand-moss/60 px-3 py-2 text-brand-sand placeholder:text-brand-sand/50 focus:border-brand-sage focus:outline-none"
          placeholder="Where you are today and what success looks like."
        />
      </label>
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-brand-sage px-6 py-3 text-sm font-semibold text-brand-night shadow-soft transition hover:bg-brand-sage/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-night"
        >
          Send inquiry
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
