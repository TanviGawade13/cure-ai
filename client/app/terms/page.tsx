import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-16 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">Terms</h1>
        <p className="mt-4 leading-7 text-slate-600">
          Terms for Cure AI will be published here. This placeholder is not a
          terms of service.
        </p>
        <Link
          className="mt-8 inline-flex font-medium text-emerald-800 underline underline-offset-4"
          href="/"
        >
          Return to home
        </Link>
      </div>
    </main>
  );
}
