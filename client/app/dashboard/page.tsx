import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <main
          aria-busy="true"
          className="min-h-screen bg-[#f8f7f4] px-6 py-8 text-slate-600 sm:px-10"
        >
          <p role="status">Loading your dashboard...</p>
        </main>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}

async function DashboardContent() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen bg-[#f8f7f4] px-6 py-8 text-slate-900 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between border-b border-slate-200/80 pb-5">
          <Link
            className="text-lg font-semibold tracking-tight text-emerald-950"
            href="/"
          >
            cure<span className="text-emerald-700">ai</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-slate-600 sm:inline">
              Your account
            </span>
            <UserButton />
          </div>
        </header>

        <section className="py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-800">
            Private dashboard
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
            You&apos;re signed in. Welcome to your space.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            This page is protected by Clerk. If you sign out, you&apos;ll need
            to sign in again before you can return here.
          </p>

          <div className="mt-10 max-w-xl rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
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
              <div>
                <h2 className="font-semibold text-slate-900">
                  Authentication is working
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  You reached this page because Clerk confirmed your session.
                  Use the account menu above to manage or sign out.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Link
          className="text-sm font-semibold text-emerald-900 underline decoration-emerald-900/30 underline-offset-4 hover:decoration-emerald-900"
          href="/"
        >
          Return to home
        </Link>
      </div>
    </main>
  );
}
