import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function BrandMark() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-950 text-white">
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 3.5 19 6v5.7c0 4.3-2.9 7.6-7 8.8-4.1-1.2-7-4.5-7-8.8V6l7-2.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
        <path
          d="m9 12 2 2 4-4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f4] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 sm:px-10">
        <header className="flex items-center justify-between border-b border-slate-200/80 py-5">
          <Link
            aria-label="Cure AI home"
            className="flex items-center gap-3"
            href="/"
          >
            <BrandMark />
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              cure<span className="text-emerald-800">ai</span>
            </span>
          </Link>

          <nav aria-label="Account" className="flex items-center gap-3">
            <SignedOut>
              <Link
                className="rounded-full px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-white"
                href="/sign-in"
              >
                Sign in
              </Link>
              <Link
                className="rounded-full bg-emerald-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
                href="/sign-up"
              >
                Create account
              </Link>
            </SignedOut>
            <SignedIn>
              <Link
                className="rounded-full bg-emerald-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-900"
                href="/dashboard"
              >
                Dashboard
              </Link>
              <UserButton />
            </SignedIn>
          </nav>
        </header>

        <section className="grid flex-1 items-center gap-14 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div className="max-w-xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-900">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-600"
              />
              Your secure space
            </p>
            <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-6xl">
              A thoughtful place to{" "}
              <span className="font-serif font-normal italic text-emerald-800">
                begin.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Create an account or sign in to continue. Your dashboard is
              private and only available to you.
            </p>

            <SignedOut>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  className="rounded-full bg-emerald-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/10 transition hover:-translate-y-0.5 hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
                  href="/sign-up"
                >
                  Get started
                </Link>
                <Link
                  className="rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-white"
                  href="/sign-in"
                >
                  I already have an account
                </Link>
              </div>
            </SignedOut>

            <SignedIn>
              <Link
                className="mt-9 inline-flex rounded-full bg-emerald-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/10 transition hover:-translate-y-0.5 hover:bg-emerald-900"
                href="/dashboard"
              >
                Go to your dashboard
              </Link>
            </SignedIn>

            <p className="mt-8 text-sm text-slate-500">
              Secure sign-in and account management, powered by Clerk.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[3rem] bg-emerald-100/70 blur-3xl"
            />
            <div className="relative rounded-[2rem] border border-white bg-white/90 p-7 shadow-2xl shadow-slate-900/10 sm:p-9">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    YOUR ACCOUNT
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                    One secure sign-in.
                  </h2>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      height="10"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      width="14"
                      x="5"
                      y="10"
                    />
                    <path
                      d="M8 10V7a4 4 0 0 1 8 0v3"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.7"
                    />
                  </svg>
                </span>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-4 rounded-2xl bg-[#f7f8f6] p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-800 shadow-sm">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 3.5 19 6v5.7c0 4.3-2.9 7.6-7 8.8-4.1-1.2-7-4.5-7-8.8V6l7-2.5Z"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="1.6"
                      />
                      <path
                        d="m9 12 2 2 4-4"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Protected dashboard
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Only signed-in users can open it
                    </p>
                  </div>
                  <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500" />
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-[#f7f8f6] p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-800 shadow-sm">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="8"
                        r="3.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M5 20a7 7 0 0 1 14 0"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Your account
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Managed securely by Clerk
                    </p>
                  </div>
                  <span className="ml-auto text-xs font-medium text-slate-400">
                    PRIVATE
                  </span>
                </div>
              </div>

              <div className="mt-7 border-t border-slate-100 pt-5">
                <p className="text-sm leading-6 text-slate-500">
                  Sign up or sign in to reach your personal dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-slate-200/80 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Cure AI</span>
          <span>Authentication powered by Clerk</span>
        </footer>
      </div>
    </main>
  );
}
