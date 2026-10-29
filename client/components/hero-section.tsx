import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="max-w-3xl">
        <h1
          className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-6xl"
          id="hero-title"
        >
          Understand your lab reports in plain language.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Make sense of your lab values and prepare thoughtful questions to
          discuss with your doctor.
        </p>
        <Link
          className="mt-8 inline-flex rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-900"
          href="/sign-up"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}
