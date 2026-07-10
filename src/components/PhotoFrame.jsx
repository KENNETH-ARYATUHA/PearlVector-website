export default function PhotoFrame({
  src,
  alt,
  caption,
  className = "",
  rounded = "rounded-2xl",
}) {
  return (
    <div
      className={`group relative overflow-hidden ${rounded} ${className} shadow-card transition-all duration-500 hover:shadow-2xl hover:shadow-emerald/20 hover:ring-2 hover:ring-emerald/40`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

      {caption && (
        <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm font-medium text-pearl">{caption}</p>
        </div>
      )}
    </div>
  );
}