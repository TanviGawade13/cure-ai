export default function PricingSection() {
  return (
    <section
      aria-labelledby="pricing-section-title"
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2
            className="text-3xl font-semibold tracking-tight text-slate-950"
            id="pricing-section-title"
          >
            Simple ways to get started
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Start for free, with a family plan available when you need it.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Free to start
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Begin exploring the app without an upfront price.
            </p>
          </article>
          <article className="rounded-2xl border border-emerald-900/15 bg-emerald-50/60 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Family plan
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              An available plan for two people, with a private space for each.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
