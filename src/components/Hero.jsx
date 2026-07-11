import { useEffect, useState } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { TRUST_POINTS } from "../data/content";

export default function Hero() {
  const [photos, setPhotos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/site-content`)
      .then((res) => res.json())
      .then((data) => {
        const slides = [data.hero_photo_1, data.hero_photo_2, data.hero_photo_3].filter(Boolean);
        setPhotos(slides);
      });
  }, []);

  useEffect(() => {
    if (photos.length < 2) return;
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % photos.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [photos]);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy pt-32 pb-20 text-pearl lg:pt-40 lg:pb-28"
    >
      <div className="absolute inset-0">
        {photos.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === activeIndex ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="mb-4 inline-block rounded-full border border-emerald-light/40 bg-emerald/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-light">
          Digital Solutions for Africa
        </p>

        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          Empowering Africa through{" "}
          <span className="text-emerald-light">innovative digital</span> solutions
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pearl/80">
          PearlVector is a technology company delivering innovative, reliable
          and affordable digital solutions that solve real African challenges
          and drive growth, efficiency and transformation.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold shadow-card transition-transform hover:scale-[1.03]"
          >
            Let's Build Together
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-pearl/30 px-6 py-3 text-sm font-semibold text-pearl transition-colors hover:bg-pearl/10"
          >
            <PlayCircle className="h-4 w-4" />
            Explore What We Do
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {TRUST_POINTS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 rounded-xl border border-pearl/10 bg-pearl/5 px-3 py-4 text-center"
            >
              <Icon className="h-5 w-5 text-emerald-light" strokeWidth={1.75} />
              <span className="text-xs font-medium text-pearl/80">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}