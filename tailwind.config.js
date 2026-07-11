 
/** @type {import('tailwindcss').Config} */
export default {
  // Tell Tailwind which files to scan for class names so it can
  // generate the smallest possible CSS bundle.
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette, lifted directly from the PearlVector logo/poster:
        // deep navy + emerald green, bridged by a "pearl" off-white.
        navy: {
          DEFAULT: "#0B2A4A", // primary brand navy (headings, header bg)
          dark: "#071A30",    // darker navy for footers / deep sections
          light: "#123A63",   // lighter navy for cards/hovers
        },
        emerald: {
          DEFAULT: "#12703F", // primary brand green (CTAs, accents)
          light: "#1E8F52",
          dark: "#0B4D2B",
        },
        pearl: {
          DEFAULT: "#F6F3EC", // warm pearl-white background
          dim: "#EDE9DE",
          line: "#E1DCCC",
        },
        ink: "#0F1B24", // near-black text color, softer than pure black
      },
      fontFamily: {
        // Display face: geometric + techy, used sparingly for headings.
        display: ["'Space Grotesk'", "sans-serif"],
        // Body face: neutral, highly legible workhorse.
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        // The signature gradient reused across the site (buttons, dividers,
        // placeholder blocks) -- it mirrors the two-tone "V" in the logo.
        "brand-gradient": "linear-gradient(135deg, #0B2A4A 0%, #12703F 100%)",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(11, 42, 74, 0.25)",
      },
    },
  },
  plugins: [],
};

