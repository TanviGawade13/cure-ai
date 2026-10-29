export default function FamilySection() {
  return (
    <section
      aria-labelledby="family-section-title"
      className="py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold text-emerald-800">
            Made for families
          </p>
          <h2
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950"
            id="family-section-title"
          >
            One family plan. Two private spaces.
          </h2>
        </div>
        <div className="rounded-2xl border border-emerald-900/10 bg-emerald-50/60 p-6 sm:p-8">
          <p className="text-base leading-7 text-slate-700">
            One family plan covers two people. Each person has a private space,
            and you choose what health information to share.
          </p>
        </div>
      </div>
    </section>
  );
}
