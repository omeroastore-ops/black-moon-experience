import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import interior from "@/assets/interior-bar.jpg";

export function Atmosphere() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section ref={ref} className="relative py-32 sm:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Atmosphäre</p>
          <h2 className="font-display text-5xl leading-tight text-foreground sm:text-7xl">
            Wo das Licht <span className="italic text-gold">flüstert</span>.
          </h2>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Sanftes Neon, samtene Schatten, der Duft von Orient und Eichenrauch — Black
            Moon ist kein Ort, es ist ein Gefühl. Eine Bühne für deine besten Nächte.
          </p>
        </motion.div>

        <motion.div
          whileHover="hover"
          className="group relative overflow-hidden rounded-3xl border border-border/50 glow-violet"
        >
          <motion.img
            src={interior}
            alt="Black Moon Lounge Innenraum mit blauem Neon"
            style={{ y, scale }}
            variants={{ hover: { scale: 1.08 } }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-[60vh] w-full object-cover sm:h-[80vh]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <motion.div
            variants={{ hover: { opacity: 1 } }}
            initial={{ opacity: 0.4 }}
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 60%, oklch(0.6 0.22 230 / 0.3), transparent 60%)",
            }}
          />
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Open Now</p>
              <p className="font-display text-3xl text-foreground">Mo – So · 18:00 – 03:00</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
