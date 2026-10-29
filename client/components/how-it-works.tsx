const steps = [
  {
    number: "01",
    title: "Upload a lab report",
    description: "Start with a report you want help understanding.",
  },
  {
    number: "02",
    title: "Understand each value",
    description: "Read a plain-language explanation of the values in it.",
  },
  {
    number: "03",
    title: "Prepare questions for your doctor",
    description: "Use what you learned to plan a clearer conversation.",
  },
];

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-title"
      className="border-y border-rule bg-sage/50 py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <div className="max-w-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-olive">
            A simple process
          </p>
          <h2
            className="mt-4 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl"
            id="how-it-works-title"
          >
            How it works
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            A simple path from a lab report to a more informed conversation.
          </p>
        </div>
        <ol className="divide-y divide-olive/20 border-y border-olive/20">
          {steps.map((step) => (
            <li
              className="grid gap-3 py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-5 sm:py-6"
              key={step.number}
            >
              <span className="font-display text-lg italic text-olive">
                {step.number}.
              </span>
              <div>
                <h3 className="text-lg font-medium text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
