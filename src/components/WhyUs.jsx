import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { WHY_US } from "../data/content";

export default function WhyUs() {
  const [photos, setPhotos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/site-content`)
      .then((res) => res.json())
      .then((data) => {
        const slides = [data.office_photo_1, data.office_photo_2, data.office_photo_3].filter(Boolean);
        setPhotos(slides);
      });
  }, []);

  useEffect(() => {
    if (photos.length < 2) return;
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos]);

  return (
    <section id="why-us" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        {/* Sliding office photo */}
        <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card lg:order-1">
          {photos.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ease-in-out ${
                i === activeIndex ? "opacity-100 hero-slide-active" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          {/* Subtle brand-tinted overlay so the photo feels part of the site's palette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-emerald/10" />
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald">
            Why Choose PearlVector
          </p>
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            Built for African realities, not adapted from them
          </h2>
          <p className="mt-4 text-ink/70">
            We don't retrofit foreign software for African markets, we
            design from the ground up around local infrastructure,
            connectivity, and business context.
          </p>

          <ul className="mt-8 space-y-4">
            {WHY_US.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald"
                  strokeWidth={1.75}
                />
                <span className="text-ink/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}