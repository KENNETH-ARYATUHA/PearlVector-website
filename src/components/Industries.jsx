import { INDUSTRIES } from "../data/content";

export default function Industries() {
  return (
    <section id="industries" className="bg-pearl-dim py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="mb-10 text-center font-display text-2xl font-semibold text-navy sm:text-3xl">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-4">
          {INDUSTRIES.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-xl bg-white p-6 text-center shadow-card transition-transform hover:-translate-y-1"
            >
              <Icon className="h-7 w-7 text-emerald" strokeWidth={1.5} />
              <span className="text-sm font-semibold text-navy">{label}</span>
              <p className="text-xs leading-relaxed text-ink/60">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}