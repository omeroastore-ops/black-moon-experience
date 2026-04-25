import { motion } from "framer-motion";
import { useRef, useState } from "react";
import shisha from "@/assets/shisha.jpg";
import drinks from "@/assets/drinks.jpg";
import vip from "@/assets/vip.jpg";

const cards = [
  { title: "Shisha", desc: "Premium Tabake. Handverlesene Aromen. Perfekt zubereitet.", img: shisha },
  { title: "Drinks", desc: "Signature Cocktails. Erlesene Spirits. Charakter im Glas.", img: drinks },
  { title: "VIP", desc: "Private Lounges. Exklusiver Service. Eine Nacht für dich.", img: vip },
];

function TiltCard({ title, desc, img }: { title: string; desc: string; img: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 14;
        const y = ((e.clientY - r.top) / r.height - 0.5) * -14;
        setTilt({ x: y, y: x });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 200ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className="group relative rounded-3xl overflow-hidden glass aspect-[3/4] hover:-translate-y-2 duration-500"
    >
      <img src={img} alt={title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-1000" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 30%, oklch(0.55 0.25 295 / 0.4), transparent 60%)" }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">{title}</h3>
        <p className="mt-3 text-foreground/80 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-32 md:py-48">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Erlebnis</span>
          <h2 className="mt-4 text-5xl md:text-7xl font-display font-bold text-gradient-primary">
            Drei Welten. Eine Nacht.
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c) => <TiltCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}
