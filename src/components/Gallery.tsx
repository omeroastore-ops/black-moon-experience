import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import terrace from "@/assets/terrace.jpg";
import interior from "@/assets/interior-bar.jpg";
import shisha from "@/assets/shisha.jpg";
import drinks from "@/assets/drinks.jpg";
import vip from "@/assets/vip.jpg";
import smoke from "@/assets/smoke1.jpg";
import coals from "@/assets/coals.jpg";

const items = [
  { src: terrace, h: "tall", label: "Terrasse" },
  { src: shisha, h: "tall", label: "Premium Shisha" },
  { src: interior, h: "short", label: "Bar Lounge" },
  { src: drinks, h: "tall", label: "Cocktails" },
  { src: vip, h: "short", label: "VIP Bereich" },
  { src: smoke, h: "short", label: "Atmosphäre" },
  { src: coals, h: "tall", label: "Kohle" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="relative py-32 sm:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 flex items-end justify-between gap-6"
        >
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Galerie</p>
            <h2 className="font-display text-5xl text-foreground sm:text-7xl">
              Momente in <span className="italic text-gold">Schwarz</span>.
            </h2>
          </div>
        </motion.div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {items.map((it, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              onClick={() => setOpen(it.src)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border/40 break-inside-avoid"
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  it.h === "tall" ? "h-[420px]" : "h-[280px]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  boxShadow: "inset 0 0 60px oklch(0.55 0.27 300 / 0.5)",
                }}
              />
              <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">{it.label}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-6"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={open}
              alt=""
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain glow-violet"
            />
            <button
              onClick={() => setOpen(null)}
              className="absolute right-6 top-6 rounded-full border border-gold/50 px-4 py-2 text-xs uppercase tracking-widest text-gold hover:bg-gold/10"
            >
              Schließen
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
