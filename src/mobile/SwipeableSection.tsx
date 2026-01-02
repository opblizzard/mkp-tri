import { useRef } from "react";

/**
 * SwipeableSection: Swipe between dashboard tabs (mobile)
 */
export function SwipeableSection({
  children,
}: {
  children: React.ReactNode[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  // TODO: Add swipe gesture logic (e.g., with use-gesture or custom)
  return (
    <div ref={ref} className="flex overflow-x-auto scroll-snap-x">
      {children.map((child, i) => (
        <div key={i} className="min-w-full scroll-snap-align-start">
          {child}
        </div>
      ))}
    </div>
  );
}
