const notices = [
  {
    title: "Information, not medical advice",
    description:
      "Cure AI can help explain lab information, but it does not replace advice from your doctor.",
  },
  {
    title: "Your health information deserves care",
    description:
      "Health details are personal. Choose carefully what you share and with whom.",
  },
  {
    title: "Urgent symptoms need medical care",
    description:
      "If your symptoms feel urgent, seek medical care right away.",
  },
];

export default function TrustSection() {
  return (
    <section
      aria-labelledby="trust-section-title"
      className="bg-sage/50 py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <div className="max-w-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-olive">
            A note on care
          </p>
          <h2
            className="mt-4 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl"
            id="trust-section-title"
          >
            Clear about what this is—and isn’t.
          </h2>
        </div>
        <ul className="divide-y divide-olive/20 border-y border-olive/20">
          {notices.map((notice) => (
            <li className="py-5 sm:py-6" key={notice.title}>
              <h3 className="font-medium text-ink">{notice.title}</h3>
              <p className="mt-1 max-w-xl text-sm leading-6 text-muted">
                {notice.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
