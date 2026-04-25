import { motion, useScroll, useTransform } from "framer-motion";

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 200], ["oklch(0.08 0.02 280 / 0)", "oklch(0.08 0.02 280 / 0.7)"]);
  const blur = useTransform(scrollY, [0, 200], ["blur(0px)", "blur(20px)"]);

  return (
    <motion.nav
      style={{ backgroundColor: bg, backdropFilter: blur }}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="font-display text-2xl text-foreground">
          Black<span className="italic text-gold">Moon</span>
        </a>
        <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground sm:flex">
          <a href="#experience" className="hover:text-gold">Erlebnis</a>
          <a href="#reservation" className="hover:text-gold">Reservierung</a>
        </div>
        <a
          href="#reservation"
          className="rounded-full border border-gold/50 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-gold hover:bg-gold/10"
        >
          Reservieren
        </a>
      </div>
    </motion.nav>
  );
}
