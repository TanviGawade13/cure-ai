import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-paper px-5 py-16 text-ink sm:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl tracking-tight sm:text-4xl">
          Privacy
        </h1>
        <p className="mt-4 leading-7 text-muted">
          Privacy information for Cure AI will be published here. This
          placeholder is not a privacy policy.
        </p>
        <Link
          className="mt-8 inline-flex font-medium text-olive underline underline-offset-4"
          href="/"
        >
          Return to home
        </Link>
      </div>
    </main>
  );
}
