import { useState } from "react";

/**
 * HoverOrTap: Unifies hover (desktop) and tap (mobile) interactions.
 * - On desktop: hover reveals content
 * - On mobile: tap toggles content
 */
export function HoverOrTap({
  children,
  reveal,
  className = "",
}: {
  children: React.ReactNode;
  reveal: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const isTouch = typeof window !== "undefined" && "ontouchstart" in window;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => !isTouch && setOpen(true)}
      onMouseLeave={() => !isTouch && setOpen(false)}
      onClick={() => isTouch && setOpen((v) => !v)}
      tabIndex={0}
      role="button"
      aria-expanded={open}
    >
      {children}
      {open && (
        <div className="absolute left-0 top-full z-20 w-max min-w-[180px] bg-white/80 dark:bg-black/80 rounded-xl shadow-lg p-3 mt-2 animate-fade-in">
          {reveal}
        </div>
      )}
    </div>
  );
}
