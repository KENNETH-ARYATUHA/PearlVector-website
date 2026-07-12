import { useEffect, useState } from "react";
import { Phone, Mail, Globe, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [contact, setContact] = useState({});
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/site-content`)
      .then((res) => res.json())
      .then(setContact);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-pearl-dim py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:px-10">
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
            {contact.contact_phone && (
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald" strokeWidth={1.75} />
                <a href={`tel:${contact.contact_phone}`} className="text-ink/80 hover:text-emerald">
                  {contact.contact_phone}
                </a>
              </li>
            )}
            {contact.contact_email && (
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald" strokeWidth={1.75} />
                <a href={`mailto:${contact.contact_email}`} className="text-ink/80 hover:text-emerald">
                  {contact.contact_email}
                </a>
              </li>
            )}
            <li className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-emerald" strokeWidth={1.75} />
              <span className="text-ink/80">www.pearlvector.com</span>
            </li>
            {contact.contact_location && (
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-emerald" strokeWidth={1.75} />
                <span className="text-ink/80">{contact.contact_location}</span>
              </li>
            )}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-card">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 py-12 text-center">
              <Send className="h-8 w-8 text-emerald" />
              <p className="font-display text-lg font-semibold text-navy">Message sent</p>
              <p className="text-sm text-ink/60">We'll get back to you soon.</p>
            </div>
          ) : (
            <>
              <div className="mb-5">
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">Name</label>
                <input
                  id="name" name="name" type="text" required
                  value={form.name} onChange={handleChange}
                  className="w-full rounded-lg border border-pearl-line bg-pearl px-4 py-2.5 text-sm text-ink focus:border-emerald focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">Email</label>
                <input
                  id="email" name="email" type="email" required
                  value={form.email} onChange={handleChange}
                  className="w-full rounded-lg border border-pearl-line bg-pearl px-4 py-2.5 text-sm text-ink focus:border-emerald focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">Message</label>
                <textarea
                  id="message" name="message" required rows={4}
                  value={form.message} onChange={handleChange}
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