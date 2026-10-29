import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            className="text-lg font-semibold tracking-tight text-emerald-950"
            href="/"
          >
            Cure AI
          </Link>
          <p className="mt-2 text-sm text-slate-600">
            Not a substitute for professional medical advice.
          </p>
        </div>
        <nav aria-label="Legal">
          <ul className="flex gap-5 text-sm font-medium text-slate-700">
            <li>
              <Link className="hover:text-emerald-800" href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-800" href="/terms">
                Terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
