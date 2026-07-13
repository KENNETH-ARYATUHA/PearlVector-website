import { INDUSTRIES } from "../data/content";

export default function Industries() {
  return (
    <section id="industries" className="bg-pearl-dim py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="mb-10 text-center font-display text-2xl font-semibold text-navy sm:text-3xl">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {INDUSTRIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-xl bg-white p-5 text-center shadow-card"
            >
              <Icon className="h-6 w-6 text-emerald" strokeWidth={1.5} />
              <span className="text-xs font-semibold text-navy/80">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}