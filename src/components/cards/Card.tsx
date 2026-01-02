import type { ReactNode } from "react";

/**
 * Card: Glassmorphic, elevation, responsive
 * @param elevation 0|1|2|4
 */
export function Card({
  children,
  elevation = 1,
}: {
  children: ReactNode;
  elevation?: 0 | 1 | 2 | 4;
}) {
  // Modern glassmorphism, soft shadow, gradient overlay
  const shadow = {
    0: "shadow-none",
    1: "shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
    2: "shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
    4: "shadow-[0_16px_32px_rgba(0,0,0,0.16)]",
  }[elevation];
  return (
    <div
      className={`relative rounded-2xl bg-white/10 ${shadow} p-4 md:p-6 transition-all backdrop-blur-lg overflow-hidden`}
      style={{
        border: "none",
        WebkitBackdropFilter: "blur(12px)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Gradient overlay for section headers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg,rgba(80,80,160,0.08) 0%,rgba(255,255,255,0.04) 100%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
