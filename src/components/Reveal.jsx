import { motion } from "framer-motion";

/**
 * Reveal
 * ------
 * Wraps any section content so it fades and slides up into view once
 * scrolled into the viewport. Use `delay` to stagger multiple children
 * (e.g. a grid of cards) for a cascading effect.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}