export default function PricingSection() {
  return (
    <section
      aria-labelledby="pricing-section-title"
      className="bg-paper py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:px-12">
        <div className="max-w-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-olive">
            Getting started
          </p>
          <h2
            className="mt-4 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl"
            id="pricing-section-title"
          >
            Start where you are.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Start for free, with a family plan available when you need it.
          </p>
        </div>
        <dl className="divide-y divide-rule border-y border-rule">
          <div className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:py-6">
            <dt className="font-display text-xl text-olive">Free to start</dt>
            <dd className="text-sm leading-6 text-muted">
              Begin exploring the app without an upfront price.
            </dd>
          </div>
          <div className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:py-6">
            <dt className="font-display text-xl text-olive">Family plan</dt>
            <dd className="text-sm leading-6 text-muted">
              An available plan for two people, with a private space for each.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
