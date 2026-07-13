export default function PhotoFrame({
  src,
  alt,
  caption,
  className = "",
  rounded = "rounded-2xl",
  shape = "default", // "default" | "africa"
}) {
  const isAfrica = shape === "africa";

  return (
    <div
      className={`group relative overflow-hidden ${isAfrica ? "" : rounded} ${className} bg-navy transition-all duration-500 ${
        isAfrica ? "" : "shadow-card hover:shadow-2xl hover:shadow-emerald/30"
      }`}
      style={isAfrica ? { clipPath: "url(#africa-clip)" } : undefined}
    >
      {!isAfrica && (
        <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-1 ring-inset ring-pearl/10 transition-all duration-500 group-hover:ring-2 group-hover:ring-emerald-light/60" />
      )}

      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover grayscale-[15%] contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-emerald/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />

      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

      {!isAfrica && (
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-dark/85 via-navy-dark/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      )}

      {caption && !isAfrica && (
        <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm font-medium text-pearl">{caption}</p>
        </div>
      )}
    </div>
  );
}