import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import moonImg from "@/assets/moon.jpg";
import { Particles } from "./Particles";

export function Hero() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 1.4]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 600], [0, 200]);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <Particles count={40} />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ scale, opacity, y }}
      >
        <motion.img
          src={moonImg}
          alt="Black Moon"
          className="w-[80vmin] h-[80vmin] object-contain animate-pulseGlow select-none"
          style={{
            x: mouse.x,
            y: mouse.y,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          draggable={false}
        />
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-display text-[18vw] md:text-[10vw] leading-none font-bold text-gradient-primary"
          style={{ textShadow: "0 0 80px oklch(0.55 0.25 295 / 0.5)" }}
        >
          Black Moon
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-4 text-lg md:text-2xl text-foreground/80 font-light tracking-wide"
        >
          Tritt ein in eine Nacht, die nie endet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 pointer-events-auto"
        >
          <a
            href="#reservation"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium tracking-wide hover:scale-105 transition-transform"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Tisch reservieren
          </a>
          <a
            href="#experience"
            className="px-8 py-4 rounded-full glass text-foreground font-medium tracking-wide hover:bg-primary/20 transition-colors"
          >
            Erlebnis entdecken
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 text-xs tracking-[0.3em] uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}
