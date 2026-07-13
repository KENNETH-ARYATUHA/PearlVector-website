/**
 * AfricaClipDef
 * -------------
 * Renders a hidden, reusable SVG <clipPath> with a stylized Africa
 * continent silhouette. Render this ONCE near the top of the app (in
 * App.jsx) -- every PhotoFrame with shape="africa" then references it
 * via clip-path: url(#africa-clip).
 *
 * Note: this is a simplified, decorative silhouette for branding
 * purposes, not a precise geographic outline.
 */
export default function AfricaClipDef() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id="africa-clip" clipPathUnits="objectBoundingBox">
          <path
            d="M0.38,0.02
               L0.60,0.03
               L0.72,0.10
               L0.80,0.16
               L0.93,0.27
               L0.96,0.33
               L0.87,0.37
               L0.76,0.36
               L0.72,0.44
               L0.75,0.52
               L0.71,0.62
               L0.68,0.70
               L0.66,0.80
               L0.60,0.90
               L0.53,0.98
               L0.47,0.96
               L0.44,0.86
               L0.38,0.80
               L0.34,0.68
               L0.28,0.60
               L0.24,0.50
               L0.14,0.44
               L0.06,0.36
               L0.03,0.28
               L0.09,0.24
               L0.16,0.26
               L0.22,0.20
               L0.20,0.12
               L0.28,0.06
               Z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}