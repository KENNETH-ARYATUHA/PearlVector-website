import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { WHY_US } from "../data/content";
import PhotoFrame from "./PhotoFrame";

export default function WhyUs() {
  const [officePhoto, setOfficePhoto] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/site-content`)
      .then((res) => res.json())
      .then((data) => setOfficePhoto(data.office_photo_url));
  }, []);

  return (
    <section id="why-us" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        {officePhoto && (
          <PhotoFrame
            src={officePhoto}
            alt="PearlVector team at work in the office"
            className="aspect-[4/3] w-full order-2 lg:order-1"
          />
        )}

        <div className="order-1 lg:order-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald">
            Why Choose PearlVector
          </p>
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            Built for African realities, not adapted from them
          </h2>
          <p className="mt-4 text-ink/70">
            We don't retrofit foreign software for African markets — we
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