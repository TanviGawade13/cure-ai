import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8"
      >
        <Link
          className="text-xl font-semibold tracking-tight text-emerald-950"
          href="/"
        >
          Cure AI
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            className="text-sm font-medium text-slate-700 hover:text-emerald-800"
            href="/sign-in"
          >
            Log in
          </Link>
          <Link
            className="rounded-full bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-900"
            href="/sign-up"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}
