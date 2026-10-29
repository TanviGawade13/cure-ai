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
      className="bg-emerald-50/60 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2
            className="text-3xl font-semibold tracking-tight text-slate-950"
            id="how-it-works-title"
          >
            How it works
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            A simple path from a lab report to a more informed conversation.
          </p>
        </div>
        <ol className="mt-9 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <li
              className="rounded-2xl border border-emerald-900/10 bg-white p-6"
              key={step.number}
            >
              <span className="text-sm font-semibold tracking-wide text-emerald-800">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
