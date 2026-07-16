import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToHash
 * ------------
 * Whenever the URL's hash changes (e.g. navigating to "/#services"),
 * scroll smoothly to the matching element on the page. Also scrolls to
 * the top when there's no hash (e.g. plain "/" or "/blog").
 */
export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const timeout = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
}