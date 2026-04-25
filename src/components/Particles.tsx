import { useMemo } from "react";

export function Particles({ count = 30 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 14,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-primary-glow"
          style={{
            left: `${p.left}%`,
            bottom: `-10px`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            filter: "blur(1px)",
            boxShadow: "0 0 10px oklch(0.65 0.28 295 / 0.8)",
            animation: `rise ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
