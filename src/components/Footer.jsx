import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../data/content";
import logo from "../assets/images/logo.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  const [contact, setContact] = useState({});
  const year = new Date().getFullYear();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/site-content`)
      .then((res) => res.json())
      .then(setContact);
  }, []);

  const linkTo = (href) => (href.startsWith("/") ? href : `/${href}`);

  return (
    <footer className="bg-navy-dark py-14 text-pearl/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="PearlVector logo" className="h-9 w-9 rounded-md object-cover" />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-base font-semibold text-pearl">PearlVector</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-light/80">
                  Imagine Africa. Create the Impact.
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Digital solutions for Africa - innovative, reliable and affordable technology that drives real transformation.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-pearl">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={linkTo(link.href)} className="hover:text-emerald-light">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-pearl">Connect With Us</h4>
            <ul className="space-y-2 text-sm">
              {contact.contact_phone && <li>{contact.contact_phone}</li>}
              {contact.contact_email && <li>{contact.contact_email}</li>}
              {contact.contact_location && <li>{contact.contact_location}</li>}
            </ul>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              {contact.social_x && (
                <a href={`https://x.com/${contact.social_x.replace("@", "")}`} aria-label="X (Twitter)" className="hover:text-emerald-light">
                  <FaXTwitter size={18} />
                </a>
              )}
              {contact.social_whatsapp && (
                <a href={`https://wa.me/${contact.social_whatsapp.replace(/[^0-9]/g, "")}`} aria-label="WhatsApp" className="hover:text-emerald-light">
                  <FaWhatsapp size={18} />
                </a>
              )}
              {contact.social_facebook && (
                <a href={contact.social_facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-emerald-light">
                  <FaFacebook size={18} />
                </a>
              )}
              {contact.social_linkedin && (
                <a href={contact.social_linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-emerald-light">
                  <FaLinkedin size={18} />
                </a>
              )}
              {contact.social_instagram && (
                <a href={contact.social_instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-emerald-light">
                  <FaInstagram size={18} />
                </a>
              )}
              {contact.social_youtube && (
                <a href={contact.social_youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-emerald-light">
                  <FaYoutube size={18} />
                </a>
              )}
              {contact.social_tiktok && (
                <a href={contact.social_tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-emerald-light">
                  <FaTiktok size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-pearl/10 pt-6 text-center text-xs text-pearl/50">
          (c) {year} PearlVector. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
