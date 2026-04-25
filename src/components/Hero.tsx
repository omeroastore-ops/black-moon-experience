import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import moonImg from "@/assets/moon.jpg";
import { Particles } from "./Particles";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.25]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  // mouse parallax for moon
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-hero grain"
    >
      {/* Glow blobs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.27 300 / 0.5), transparent 60%)",
          animation: "pulseGlow 6s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.22 230 / 0.4), transparent 60%)",
          animation: "pulseGlow 8s ease-in-out infinite 1s",
        }}
      />

      {/* Moon */}
      <motion.div
        style={{ y, scale, x: sx, translateY: sy }}
        className="absolute left-1/2 top-[18%] z-0 -translate-x-1/2"
      >
        <div className="relative h-[460px] w-[460px] sm:h-[560px] sm:w-[560px]">
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.85 0.14 85 / 0.6), transparent 70%)",
            }}
          />
          <img
            src={moonImg}
            alt="Glowing full moon"
            className="relative h-full w-full rounded-full object-cover mix-blend-screen"
            style={{ filter: "contrast(1.1) brightness(1.05)" }}
          />
        </div>
      </motion.div>

      {/* Smoke layers */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 100%, oklch(0.2 0.08 280 / 0.6), transparent)",
        }}
      />

      <Particles count={50} />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-end pb-24 px-6 text-center sm:justify-center sm:pb-0"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4 text-xs uppercase tracking-[0.4em] text-gold"
        >
          Premium Shisha Lounge · Deutschland
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-7xl font-bold leading-none text-foreground text-glow sm:text-8xl md:text-[10rem]"
        >
          Black <span className="text-gold italic">Moon</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg"
        >
          Tritt ein in eine Nacht, die nie endet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#reservation"
            className="group relative overflow-hidden rounded-full bg-violet px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground glow-violet transition-transform hover:scale-105"
          >
            <span className="relative z-10">Tisch reservieren</span>
            <span
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </a>
          <a
            href="#experience"
            className="rounded-full border border-gold/60 bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-widest text-gold backdrop-blur transition-all hover:bg-gold/10 hover:glow-gold"
          >
            Erlebnis entdecken
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="block h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
