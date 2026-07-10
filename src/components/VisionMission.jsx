
import { Eye, Target, Quote } from "lucide-react";
import { VISION, MISSION } from "../data/content";

export default function VisionMission() {
  return (
    <section id="vision-mission" className="bg-navy py-24 text-pearl">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Vision card */}
          <div className="rounded-2xl border border-pearl/10 bg-pearl/5 p-8">
            <Eye className="h-7 w-7 text-emerald-light" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-xl font-semibold">
              Our Vision
            </h3>
            <p className="mt-3 leading-relaxed text-pearl/80">{VISION}</p>
          </div>

          {/* Mission card */}
          <div className="rounded-2xl border border-pearl/10 bg-pearl/5 p-8">
            <Target className="h-7 w-7 text-emerald-light" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-xl font-semibold">
              Our Mission
            </h3>
            <p className="mt-3 leading-relaxed text-pearl/80">{MISSION}</p>
          </div>

          {/* Pull quote, matching the poster's callout */}
          <div className="flex flex-col justify-between rounded-2xl bg-brand-gradient p-8">
            <Quote className="h-8 w-8 opacity-70" strokeWidth={1.5} />
            <p className="mt-4 font-display text-xl font-medium leading-snug">
              Building Africa's digital future with{" "}
              <span className="text-white">
                innovation, integrity and impact.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}