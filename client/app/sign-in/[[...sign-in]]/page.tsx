import { SignIn } from "@clerk/nextjs";  //this gets the ready made sign in component from clerk
import Link from "next/link";  //adds next.js navigation to another page 
import { Suspense } from "react";   //this lets react display a fallback while the child component is loading 

export default function SignInPage() {  //defines the component next js will render for this route 
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#f8f7f4] px-5 py-8 sm:py-12">
      <Link
        className="mb-10 text-sm font-semibold tracking-tight text-emerald-950"
        href="/"  //this is the link back to the landing page 
      > 
        ← Back to Cure AI 
      </Link>
      <div className="mb-7 text-center">
        <p className="text-sm font-medium text-emerald-800">Welcome back</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Sign in to your account
        </h1>
      </div>
      <Suspense
        fallback={
          <p className="text-sm text-slate-500" role="status">
            Loading the sign-in form...
          </p>
        }
      >
        <SignIn signUpUrl="/sign-up" />
      </Suspense>
    </main>
  );
}
