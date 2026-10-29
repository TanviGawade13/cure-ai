import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-olive">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <Link
            className="text-lg font-semibold tracking-tight text-surface"
            href="/"
          >
            cure<span className="font-display font-normal italic"> ai</span>
          </Link>
          <p className="mt-2 text-sm text-surface/80">
            Not a substitute for professional medical advice.
          </p>
        </div>
        <nav aria-label="Legal">
          <ul className="flex gap-5 text-sm font-medium text-surface/90">
            <li>
              <Link
                className="underline-offset-4 hover:underline"
                href="/privacy"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                className="underline-offset-4 hover:underline"
                href="/terms"
              >
                Terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
