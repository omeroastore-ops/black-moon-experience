import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 0 : 1})`,
          transition: "transform 200ms",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-accent" />
      </div>
      <div
        className="pointer-events-none fixed z-[9998] hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 1.6 : 1})`,
          transition: "transform 300ms cubic-bezier(0.22, 1, 0.36, 1), left 80ms linear, top 80ms linear",
        }}
      >
        <div
          className="w-10 h-10 rounded-full border border-primary-glow/60"
          style={{ boxShadow: "0 0 30px oklch(0.65 0.28 295 / 0.5)" }}
        />
      </div>
    </>
  );
}
