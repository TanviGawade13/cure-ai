export default function FamilySection() {
  return (
    <section aria-labelledby="family-section-title" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[1fr_0.9fr] md:items-center md:gap-16 lg:px-12">
        <div className="max-w-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-olive">
            Room for someone you care about
          </p>
          <h2
            className="mt-4 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl"
            id="family-section-title"
          >
            A little more peace of mind, together.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            One family plan covers two people. Each person has a private space,
            and you choose what health information to share.
          </p>
        </div>
        <div className="border-y border-olive/20 py-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            One plan, two individual spaces
          </p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="border border-rule bg-surface px-4 py-5 sm:px-5">
              <p className="font-display text-lg text-ink">Your space</p>
              <p className="mt-1 text-sm text-muted">Private to you</p>
            </div>
            <div className="border border-rule bg-surface px-4 py-5 sm:px-5">
              <p className="font-display text-lg text-ink">Their space</p>
              <p className="mt-1 text-sm text-muted">Private to them</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-olive">
            Sharing is your choice.
          </p>
        </div>
      </div>
    </section>
  );
}
