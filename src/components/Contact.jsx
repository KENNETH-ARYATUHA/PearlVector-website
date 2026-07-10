
import { useState } from "react";
import { Phone, Mail, Globe, MapPin, Send } from "lucide-react";
import { CONTACT } from "../data/content";

export default function Contact() {
  // Simple local state for the form fields. Since this is a front-end-only
  // build, submission doesn't hit a real API yet -- see the comment on
  // handleSubmit below for how to wire one up later (e.g. Formspree,
  // EmailJS, or a custom backend endpoint).
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace this with a real request once a backend/email service
    // is connected, e.g.:
    //   fetch("https://formspree.io/f/your-id", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(form),
    //   });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-pearl-dim py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left: contact details */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald">
            Let's Build the Future Together
          </p>
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            Talk to PearlVector
          </h2>
          <p className="mt-4 max-w-md text-ink/70">
            Have a project in mind, or just want to know more about what we
            do? Reach us directly, or send a message using the form.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-emerald" strokeWidth={1.75} />
              <a href={`tel:${CONTACT.phone}`} className="text-ink/80 hover:text-emerald">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-emerald" strokeWidth={1.75} />
              <a href={`mailto:${CONTACT.email}`} className="text-ink/80 hover:text-emerald">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-emerald" strokeWidth={1.75} />
              <span className="text-ink/80">{CONTACT.website}</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-emerald" strokeWidth={1.75} />
              <span className="text-ink/80">{CONTACT.location}</span>
            </li>
          </ul>
        </div>

        {/* Right: contact form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-8 shadow-card"
        >
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 py-12 text-center">
              <Send className="h-8 w-8 text-emerald" />
              <p className="font-display text-lg font-semibold text-navy">
                Message ready to send
              </p>
              <p className="text-sm text-ink/60">
                Front-end only demo — connect a form service or backend to
                actually deliver this message.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-5">
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-pearl-line bg-pearl px-4 py-2.5 text-sm text-ink focus:border-emerald focus:outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-pearl-line bg-pearl px-4 py-2.5 text-sm text-ink focus:border-emerald focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-pearl-line bg-pearl px-4 py-2.5 text-sm text-ink focus:border-emerald focus:outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-pearl transition-transform hover:scale-[1.01]"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}