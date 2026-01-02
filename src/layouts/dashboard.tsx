import type { ReactNode } from "react";

/**
 * DashboardLayout: 12-column responsive grid, glassmorphic cards, mobile-first
 */
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard-bg min-h-screen w-full flex flex-col">
      <main className="grid grid-cols-12 md:gap-6 gap-3 px-2 md:px-8 py-4 md:py-8">
        {children}
      </main>
    </div>
  );
}

// Tailwind classes for grid:
// - grid-cols-12 for desktop, grid-cols-4 for mobile
// - gap tokens: 1 (4px), 2 (8px), 3 (12px), 4 (16px), 6 (24px)
// - Use <Card> components for elevation
