import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import interior from "@/assets/interior-bar.jpg";
import terrace from "@/assets/terrace.jpg";
import shisha from "@/assets/shisha.jpg";
import drinks from "@/assets/drinks.jpg";
import vip from "@/assets/vip.jpg";
import coals from "@/assets/coals.jpg";
import smoke from "@/assets/smoke1.jpg";
import moon from "@/assets/moon.jpg";

const images = [
  { src: interior, alt: "Lounge Innenraum", span: "row-span-2" },
  { src: shisha, alt: "Premium Shisha", span: "" },
  { src: drinks, alt: "Signature Drinks", span: "" },
  { src: vip, alt: "VIP Lounge", span: "row-span-2" },
  { src: terrace, alt: "Terrasse", span: "" },
  { src: coals, alt: "Glühende Kohlen", span: "" },
  { src: smoke, alt: "Atmosphäre", span: "" },
  { src: moon, alt: "Black Moon", span: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="gallery" className="relative py-32 md:py-48">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Galerie</span>
          <h2 className="mt-4 text-5xl md:text-7xl font-display font-bold text-gradient-primary">
            Momente, die bleiben.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-3 right-3 text-left text-foreground/90 text-sm font-light translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {img.alt}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.img
              key={open}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={images[open].src}
              alt={images[open].alt}
              className="max-w-full max-h-full rounded-2xl"
              style={{ boxShadow: "var(--shadow-glow)" }}
            />
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass text-foreground text-xl"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
