
import { NAV_LINKS, CONTACT } from "../data/content";
import logo from "../assets/images/logo.jpg";

// Short text badges instead of brand logos: lucide-react no longer ships
// trademarked brand icons, and plain initials keep the footer
// dependency-free and trademark-safe. Swap these for real logo SVGs/images
// whenever the client provides brand-approved assets.
const SOCIAL_INITIALS = {
  Facebook: "f",
  LinkedIn: "in",
  "Twitter / X": "X",
  Instagram: "ig",
  YouTube: "yt",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-14 text-pearl/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Brand column */}
<div>
  <div className="flex items-center gap-3">
    <img
      src={logo}
      alt="PearlVector logo"
      className="h-9 w-9 rounded-md object-cover"
    />
    <div className="flex flex-col leading-tight">
      <span className="font-display text-base font-semibold text-pearl">
        PearlVector
      </span>
      <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-light/80">
        Imagine Africa. Create the impact.
      </span>
    </div>
  </div>
  <p className="mt-4 max-w-xs text-sm leading-relaxed">
    Digital solutions for Africa ,innovative, reliable and
    affordable technology that drives real transformation.
  </p>
</div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-pearl">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-emerald-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + socials */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-pearl">
              Connect With Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li>{CONTACT.phone}</li>
              <li>{CONTACT.email}</li>
              <li>{CONTACT.location}</li>
            </ul>

            <div className="mt-5 flex gap-3">
              {CONTACT.socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-pearl/20 text-xs font-semibold transition-colors hover:border-emerald-light hover:text-emerald-light"
                >
                  {SOCIAL_INITIALS[label]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-pearl/10 pt-6 text-center text-xs text-pearl/50">
          © {year} PearlVector. All rights reserved.
        </div>
      </div>
    </footer>
  );
}