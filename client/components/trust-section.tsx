const notices = [
  {
    title: "Information, not medical advice",
    description:
      "Cure AI can help explain lab information, but it does not replace advice from your doctor.",
  },
  {
    title: "Your health information is private",
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
      className="bg-slate-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2
          className="text-3xl font-semibold tracking-tight text-slate-950"
          id="trust-section-title"
        >
          Clear about care and privacy
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {notices.map((notice) => (
            <article
              className="rounded-2xl border border-slate-200 bg-white p-6"
              key={notice.title}
            >
              <h3 className="font-semibold text-slate-900">{notice.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {notice.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
