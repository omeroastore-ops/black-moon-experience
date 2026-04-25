import { motion } from "framer-motion";
import interior from "@/assets/interior-bar.jpg";

export function Atmosphere() {
  return (
    <section id="atmosphere" className="relative py-32 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Atmosphäre</span>
          <h2 className="mt-4 text-5xl md:text-7xl font-display font-bold text-gradient-primary leading-tight">
            Wo das Licht flüstert.
          </h2>
          <p className="mt-6 text-foreground/70 text-lg leading-relaxed max-w-md">
            Sanftes Glühen, samtige Schatten und der Duft erlesener Aromen.
            Black Moon ist mehr als eine Lounge — es ist ein Zustand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="group relative aspect-[4/5] rounded-3xl overflow-hidden"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          <img
            src={interior}
            alt="Black Moon Lounge Innenraum"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
               style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.55 0.25 295 / 0.3), transparent 70%)" }} />
        </motion.div>
      </div>
    </section>
  );
}
