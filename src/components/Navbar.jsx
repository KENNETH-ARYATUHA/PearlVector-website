import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/content";
import logo from "../assets/images/logo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "bg-pearl/95 shadow-card backdrop-blur" : "bg-pearl/70 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="PearlVector logo"
            className="h-10 w-10 rounded-md object-cover"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-navy">
              Pearl<span className="text-emerald">Vector</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-emerald/70">
              Imagine Africa. Create the impact.
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              {link.href.startsWith("/") ? (
                <Link
                  to={link.href}
                  className="group relative text-sm font-medium text-navy/80 transition-colors hover:text-emerald"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-emerald transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                
                  href={link.href}
                  className="group relative text-sm font-medium text-navy/80 transition-colors hover:text-emerald"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-emerald transition-all duration-300 group-hover:w-full" />
                </a>
              )}
            </li>
          ))}
        </ul>

        
          href="#contact"
          className="hidden rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-pearl shadow-card transition-all duration-300 hover:scale-[1.05] hover:shadow-lg hover:shadow-emerald/30 lg:inline-block"
        >
          Let's Talk
        </a>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-pearl-line bg-pearl px-6 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("/") ? (
                  <Link
                    to={link.href}
                    onClick={closeMenu}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-navy hover:bg-pearl-dim"
                  >
                    {link.label}
                  </Link>
                ) : (
                  
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-navy hover:bg-pearl-dim"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
            <li className="pt-2">
              
                href="#contact"
                onClick={closeMenu}
                className="block rounded-full bg-brand-gradient px-4 py-2.5 text-center text-sm font-semibold text-pearl"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}