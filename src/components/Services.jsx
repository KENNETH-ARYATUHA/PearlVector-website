import { useEffect, useState } from "react";
import * as Icons from "lucide-react";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/services`)
      .then((res) => res.json())
      .then(setServices);
  }, []);

  return (
    <section id="services" className="bg-pearl py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald">
            What We Do
          </p>
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            One team, many capabilities
          </h2>
          <p className="mt-4 text-ink/70">
            From classrooms to cloud infrastructure, PearlVector builds the
            technology stack African organizations need to operate securely
            and grow sustainably.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => {
            // Look up the icon component by name (e.g. "GraduationCap");
            // fall back to a generic icon if the name doesn't match one.
            const Icon = Icons[service.icon_name] || Icons.Sparkles;
            return (
              <div
                key={service.id}
                className="group rounded-2xl border border-pearl-line bg-white p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-pearl">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-base font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}