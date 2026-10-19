import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#f8f7f4] px-5 py-8 sm:py-12">
      <Link
        className="mb-10 text-sm font-semibold tracking-tight text-emerald-950"
        href="/"
      >
        ← Back to Cure AI
      </Link>
      <div className="mb-7 text-center">
        <p className="text-sm font-medium text-emerald-800">A fresh start</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Sign up to get your own private dashboard.
        </p>
      </div>
      <SignUp signInUrl="/sign-in" />
    </main>
  );
}
