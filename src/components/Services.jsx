
import { SERVICES } from "../data/content";
import Reveal from "./Reveal";


export default function Services() {
  return (
    <section id="services" className="bg-pearl py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald">
            What We Do
          </p>
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            One team, ten capabilities
          </h2>
          <p className="mt-4 text-ink/70">
            From classrooms to cloud infrastructure, PearlVector builds the
            technology stack African organizations need to operate securely
            and grow sustainably.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="group relative rounded-2xl bg-white p-6 transition-all duration-300 hover:shadow-lg">
                {/* subtle gradient wash on hover */}
                <div className="absolute inset-0 bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-[0.04]" />

                <div className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-pearl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="relative font-display text-base font-semibold text-navy">
                  {title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink/70">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}