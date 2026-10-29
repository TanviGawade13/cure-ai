import Link from "next/link";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:px-12 lg:py-24">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-olive">
            A clearer view of your health
          </p>
          <h1
            className="mt-5 max-w-lg font-display text-[2.65rem] leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl"
            id="hero-title"
          >
            Understand your lab reports in plain language.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Make sense of your lab values and prepare thoughtful questions to
            discuss with your doctor.
          </p>
          <Link
            className="mt-8 inline-flex min-h-11 items-center rounded-md bg-olive px-5 py-3 text-sm font-medium text-surface transition-colors hover:bg-olive-dark"
            href="/sign-up"
          >
            Get started
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:ml-auto">
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 right-5 top-5 border border-olive/20"
          />
          <article
            aria-label="Fictional sample lab report"
            className="relative border border-rule bg-surface p-5 shadow-[0_12px_36px_rgba(39,43,37,0.07)] sm:p-8"
          >
            <header className="flex flex-wrap items-start justify-between gap-4 border-b border-rule pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-olive">
                  Cure AI
                </p>
                <h2 className="mt-2 font-display text-2xl text-ink">
                  Lab report, made clearer
                </h2>
              </div>
              <span className="border border-olive/25 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-olive">
                Fictional example
              </span>
            </header>

            <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-4 text-xs text-muted">
              <p>Sample patient: Alex Example</p>
              <p>Fictional sample</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[25rem] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Fictional lab values and example reference intervals
                </caption>
                <thead>
                  <tr className="border-y border-rule text-[0.65rem] uppercase tracking-[0.12em] text-muted">
                    <th className="py-3 pr-3 font-medium" scope="col">
                      Test
                    </th>
                    <th className="px-3 py-3 font-medium" scope="col">
                      Example result
                    </th>
                    <th
                      className="py-3 pl-3 text-right font-medium"
                      scope="col"
                    >
                      Example interval
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rule">
                  <tr>
                    <th className="py-3 pr-3 font-medium text-ink" scope="row">
                      Hemoglobin
                    </th>
                    <td className="px-3 py-3 text-ink">13.4 g/dL</td>
                    <td className="py-3 pl-3 text-right text-muted">
                      12.0–15.5
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 pr-3 font-medium text-ink" scope="row">
                      Vitamin D
                    </th>
                    <td className="px-3 py-3 text-ink">24 ng/mL</td>
                    <td className="py-3 pl-3 text-right text-muted">
                      30–100
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 pr-3 font-medium text-ink" scope="row">
                      TSH
                    </th>
                    <td className="px-3 py-3 text-ink">2.1 mIU/L</td>
                    <td className="py-3 pl-3 text-right text-muted">
                      0.4–4.0
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 border-l-2 border-sage-deep pl-3 text-xs leading-5 text-muted">
              All names, results, and intervals shown are fictional examples.
              Reference intervals vary by laboratory. Not medical advice.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
