import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-rule bg-paper">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
      >
        <Link
          className="text-xl font-semibold tracking-tight text-olive"
          href="/"
        >
          cure<span className="font-display font-normal italic"> ai</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            className="text-sm font-medium text-ink transition-colors hover:text-olive"
            href="/sign-in"
          >
            Log in
          </Link>
          <Link
            className="rounded-md bg-olive px-4 py-2.5 text-sm font-medium text-surface transition-colors hover:bg-olive-dark"
            href="/sign-up"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}
