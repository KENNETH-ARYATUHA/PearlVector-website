import { ImageIcon } from "lucide-react";

export default function ImagePlaceholder({
  label = "Image placeholder",
  className = "",
  rounded = "rounded-2xl",
}) {
  return (
    <div
      className={`group relative overflow-hidden ${rounded} ${className} shadow-card transition-all duration-500 hover:shadow-2xl hover:shadow-emerald/20 hover:ring-2 hover:ring-emerald/40`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-brand-gradient text-pearl/90 transition-transform duration-700 ease-out group-hover:scale-110">
        <svg
          className="absolute -right-4 -top-4 h-24 w-24 opacity-20"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="10" cy="10" r="4" fill="currentColor" />
          <circle cx="30" cy="10" r="2" fill="currentColor" />
          <path d="M10 10 L10 30 L30 50" stroke="currentColor" strokeWidth="2" />
        </svg>

        <ImageIcon className="h-7 w-7 opacity-80 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
        <span className="px-4 text-center text-xs font-medium tracking-wide opacity-80">
          {label}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-dark/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}