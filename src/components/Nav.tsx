import { useState } from "react";
import { motion } from "framer-motion";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  if (typeof window !== "undefined") {
    window.addEventListener(
      "scroll",
      () => setScrolled(window.scrollY > 50),
      { passive: true }
    );
  }

  const items = [
    { label: "Atmosphäre", href: "#atmosphere" },
    { label: "Erlebnis", href: "#experience" },
    { label: "Galerie", href: "#gallery" },
    { label: "Reservieren", href: "#reservation" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-display text-xl md:text-2xl font-bold text-gradient-primary">
          BLACK MOON
        </a>
        <div className="hidden md:flex items-center gap-8">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors"
            >
              {it.label}
            </a>
          ))}
        </div>
        <a
          href="#reservation"
          className="md:hidden px-4 py-2 rounded-full text-xs glass text-foreground"
        >
          Reservieren
        </a>
      </div>
    </motion.nav>
  );
}
