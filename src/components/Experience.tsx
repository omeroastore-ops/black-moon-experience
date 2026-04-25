import { motion } from "framer-motion";
import { useRef, useState } from "react";
import shisha from "@/assets/shisha.jpg";
import drinks from "@/assets/drinks.jpg";
import vip from "@/assets/vip.jpg";

const cards = [
  {
    title: "Shisha",
    subtitle: "Über 40 Premium-Sorten",
    desc: "Handverlesene Tabake, glühende Naturkohle, perfekt vorbereitet von unseren Mixern.",
    img: shisha,
    accent: "oklch(0.55 0.27 300)",
  },
  {
    title: "Drinks",
    subtitle: "Signature Cocktails",
    desc: "Exklusive Eigenkreationen, kuratierte Spirituosen und alkoholfreie Highlights.",
    img: drinks,
    accent: "oklch(0.7 0.2 230)",
  },
  {
    title: "VIP",
    subtitle: "Private Lounges",
    desc: "Abgeschirmte Bereiche, persönlicher Service und Champagner auf Knopfdruck.",
    img: vip,
    accent: "oklch(0.82 0.14 85)",
  },
];

function TiltCard({ card, i }: { card: (typeof cards)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({ x: py * -10, y: px * 10 });
  };
  const onLeave = () => setT({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
      style={{ perspective: "1200px" }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative h-[480px] overflow-hidden rounded-3xl border border-border/60 glass-strong transition-all duration-500 group-hover:-translate-y-3"
        style={{
          transform: `rotateX(${t.x}deg) rotateY(${t.y}deg)`,
          transformStyle: "preserve-3d",
          boxShadow: `0 30px 60px -20px oklch(0 0 0 / 0.7), 0 0 0 1px oklch(1 0 0 / 0.04)`,
        }}
      >
        <img
          src={card.img}
          alt={card.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${card.accent}40, transparent 60%)`,
          }}
        />
        <div
          className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: `0 0 60px ${card.accent}80` }}
        />

        <div className="relative z-10 flex h-full flex-col justify-end p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">{card.subtitle}</p>
          <h3 className="mt-2 font-display text-5xl text-foreground">{card.title}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{card.desc}</p>
          <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/80">
            <span>Entdecken</span>
            <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-32 sm:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Das Erlebnis</p>
          <h2 className="font-display text-5xl text-foreground sm:text-7xl">
            Drei Welten. <span className="italic text-gold">Eine Nacht.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <TiltCard key={c.title} card={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
