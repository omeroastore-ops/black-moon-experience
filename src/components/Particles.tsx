import { useMemo } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 14,
        hue: Math.random() > 0.5 ? "295" : "230",
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `oklch(0.85 0.18 ${p.hue})`,
            boxShadow: `0 0 ${p.size * 4}px oklch(0.7 0.2 ${p.hue})`,
            animation: `rise ${p.duration}s linear ${p.delay}s infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
